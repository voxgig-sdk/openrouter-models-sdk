# OpenrouterModels SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'OpenrouterModels_types'


class OpenrouterModelsSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = OpenrouterModelsUtility.new
    @_utility = utility

    config = OpenrouterModelsConfig.make_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = OpenrouterModelsHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = OpenrouterModelsHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, OpenrouterModelsFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    OpenrouterModelsUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = OpenrouterModelsHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = OpenrouterModelsHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = OpenrouterModelsHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = OpenrouterModelsSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  def direct(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue OpenrouterModelsError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = OpenrouterModelsHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = OpenrouterModelsHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end


  # Canonical facade: client.Activity.list / client.Activity.load({ "id" => ... })
  def Activity(data = nil)
    require_relative 'entity/activity_entity'
    ActivityEntity.new(self, data)
  end


  # Canonical facade: client.Add.list / client.Add.load({ "id" => ... })
  def Add(data = nil)
    require_relative 'entity/add_entity'
    AddEntity.new(self, data)
  end


  # Canonical facade: client.ApiKey.list / client.ApiKey.load({ "id" => ... })
  def ApiKey(data = nil)
    require_relative 'entity/api_key_entity'
    ApiKeyEntity.new(self, data)
  end


  # Canonical facade: client.AppRanking.list / client.AppRanking.load({ "id" => ... })
  def AppRanking(data = nil)
    require_relative 'entity/app_ranking_entity'
    AppRankingEntity.new(self, data)
  end


  # Canonical facade: client.Benchmark.list / client.Benchmark.load({ "id" => ... })
  def Benchmark(data = nil)
    require_relative 'entity/benchmark_entity'
    BenchmarkEntity.new(self, data)
  end


  # Canonical facade: client.BetaAnalytics.list / client.BetaAnalytics.load({ "id" => ... })
  def BetaAnalytics(data = nil)
    require_relative 'entity/beta_analytics_entity'
    BetaAnalyticsEntity.new(self, data)
  end


  # Canonical facade: client.Budget.list / client.Budget.load({ "id" => ... })
  def Budget(data = nil)
    require_relative 'entity/budget_entity'
    BudgetEntity.new(self, data)
  end


  # Canonical facade: client.BulkAddWorkspaceMember.list / client.BulkAddWorkspaceMember.load({ "id" => ... })
  def BulkAddWorkspaceMember(data = nil)
    require_relative 'entity/bulk_add_workspace_member_entity'
    BulkAddWorkspaceMemberEntity.new(self, data)
  end


  # Canonical facade: client.BulkAssignKey.list / client.BulkAssignKey.load({ "id" => ... })
  def BulkAssignKey(data = nil)
    require_relative 'entity/bulk_assign_key_entity'
    BulkAssignKeyEntity.new(self, data)
  end


  # Canonical facade: client.BulkAssignMember.list / client.BulkAssignMember.load({ "id" => ... })
  def BulkAssignMember(data = nil)
    require_relative 'entity/bulk_assign_member_entity'
    BulkAssignMemberEntity.new(self, data)
  end


  # Canonical facade: client.BulkRemoveWorkspaceMember.list / client.BulkRemoveWorkspaceMember.load({ "id" => ... })
  def BulkRemoveWorkspaceMember(data = nil)
    require_relative 'entity/bulk_remove_workspace_member_entity'
    BulkRemoveWorkspaceMemberEntity.new(self, data)
  end


  # Canonical facade: client.BulkUnassignKey.list / client.BulkUnassignKey.load({ "id" => ... })
  def BulkUnassignKey(data = nil)
    require_relative 'entity/bulk_unassign_key_entity'
    BulkUnassignKeyEntity.new(self, data)
  end


  # Canonical facade: client.BulkUnassignMember.list / client.BulkUnassignMember.load({ "id" => ... })
  def BulkUnassignMember(data = nil)
    require_relative 'entity/bulk_unassign_member_entity'
    BulkUnassignMemberEntity.new(self, data)
  end


  # Canonical facade: client.Byok.list / client.Byok.load({ "id" => ... })
  def Byok(data = nil)
    require_relative 'entity/byok_entity'
    ByokEntity.new(self, data)
  end


  # Canonical facade: client.ChatResult.list / client.ChatResult.load({ "id" => ... })
  def ChatResult(data = nil)
    require_relative 'entity/chat_result_entity'
    ChatResultEntity.new(self, data)
  end


  # Canonical facade: client.Code.list / client.Code.load({ "id" => ... })
  def Code(data = nil)
    require_relative 'entity/code_entity'
    CodeEntity.new(self, data)
  end


  # Canonical facade: client.Coinbase.list / client.Coinbase.load({ "id" => ... })
  def Coinbase(data = nil)
    require_relative 'entity/coinbase_entity'
    CoinbaseEntity.new(self, data)
  end


  # Canonical facade: client.Completion.list / client.Completion.load({ "id" => ... })
  def Completion(data = nil)
    require_relative 'entity/completion_entity'
    CompletionEntity.new(self, data)
  end


  # Canonical facade: client.Content.list / client.Content.load({ "id" => ... })
  def Content(data = nil)
    require_relative 'entity/content_entity'
    ContentEntity.new(self, data)
  end


  # Canonical facade: client.Count.list / client.Count.load({ "id" => ... })
  def Count(data = nil)
    require_relative 'entity/count_entity'
    CountEntity.new(self, data)
  end


  # Canonical facade: client.CreateByokKey.list / client.CreateByokKey.load({ "id" => ... })
  def CreateByokKey(data = nil)
    require_relative 'entity/create_byok_key_entity'
    CreateByokKeyEntity.new(self, data)
  end


  # Canonical facade: client.CreateGuardrail.list / client.CreateGuardrail.load({ "id" => ... })
  def CreateGuardrail(data = nil)
    require_relative 'entity/create_guardrail_entity'
    CreateGuardrailEntity.new(self, data)
  end


  # Canonical facade: client.CreateObservabilityDestination.list / client.CreateObservabilityDestination.load({ "id" => ... })
  def CreateObservabilityDestination(data = nil)
    require_relative 'entity/create_observability_destination_entity'
    CreateObservabilityDestinationEntity.new(self, data)
  end


  # Canonical facade: client.CreatePresetFromInference.list / client.CreatePresetFromInference.load({ "id" => ... })
  def CreatePresetFromInference(data = nil)
    require_relative 'entity/create_preset_from_inference_entity'
    CreatePresetFromInferenceEntity.new(self, data)
  end


  # Canonical facade: client.CreateWorkspace.list / client.CreateWorkspace.load({ "id" => ... })
  def CreateWorkspace(data = nil)
    require_relative 'entity/create_workspace_entity'
    CreateWorkspaceEntity.new(self, data)
  end


  # Canonical facade: client.Credit.list / client.Credit.load({ "id" => ... })
  def Credit(data = nil)
    require_relative 'entity/credit_entity'
    CreditEntity.new(self, data)
  end


  # Canonical facade: client.Destination.list / client.Destination.load({ "id" => ... })
  def Destination(data = nil)
    require_relative 'entity/destination_entity'
    DestinationEntity.new(self, data)
  end


  # Canonical facade: client.Embedding.list / client.Embedding.load({ "id" => ... })
  def Embedding(data = nil)
    require_relative 'entity/embedding_entity'
    EmbeddingEntity.new(self, data)
  end


  # Canonical facade: client.Endpoint.list / client.Endpoint.load({ "id" => ... })
  def Endpoint(data = nil)
    require_relative 'entity/endpoint_entity'
    EndpointEntity.new(self, data)
  end


  # Canonical facade: client.Feedback.list / client.Feedback.load({ "id" => ... })
  def Feedback(data = nil)
    require_relative 'entity/feedback_entity'
    FeedbackEntity.new(self, data)
  end


  # Canonical facade: client.File.list / client.File.load({ "id" => ... })
  def File(data = nil)
    require_relative 'entity/file_entity'
    FileEntity.new(self, data)
  end


  # Canonical facade: client.Generation.list / client.Generation.load({ "id" => ... })
  def Generation(data = nil)
    require_relative 'entity/generation_entity'
    GenerationEntity.new(self, data)
  end


  # Canonical facade: client.GenerationContent.list / client.GenerationContent.load({ "id" => ... })
  def GenerationContent(data = nil)
    require_relative 'entity/generation_content_entity'
    GenerationContentEntity.new(self, data)
  end


  # Canonical facade: client.Guardrail.list / client.Guardrail.load({ "id" => ... })
  def Guardrail(data = nil)
    require_relative 'entity/guardrail_entity'
    GuardrailEntity.new(self, data)
  end


  # Canonical facade: client.Image.list / client.Image.load({ "id" => ... })
  def Image(data = nil)
    require_relative 'entity/image_entity'
    ImageEntity.new(self, data)
  end


  # Canonical facade: client.ImageModelEndpoint.list / client.ImageModelEndpoint.load({ "id" => ... })
  def ImageModelEndpoint(data = nil)
    require_relative 'entity/image_model_endpoint_entity'
    ImageModelEndpointEntity.new(self, data)
  end


  # Canonical facade: client.ImageModelsList.list / client.ImageModelsList.load({ "id" => ... })
  def ImageModelsList(data = nil)
    require_relative 'entity/image_models_list_entity'
    ImageModelsListEntity.new(self, data)
  end


  # Canonical facade: client.Key.list / client.Key.load({ "id" => ... })
  def Key(data = nil)
    require_relative 'entity/key_entity'
    KeyEntity.new(self, data)
  end


  # Canonical facade: client.ListByokKey.list / client.ListByokKey.load({ "id" => ... })
  def ListByokKey(data = nil)
    require_relative 'entity/list_byok_key_entity'
    ListByokKeyEntity.new(self, data)
  end


  # Canonical facade: client.ListGuardrail.list / client.ListGuardrail.load({ "id" => ... })
  def ListGuardrail(data = nil)
    require_relative 'entity/list_guardrail_entity'
    ListGuardrailEntity.new(self, data)
  end


  # Canonical facade: client.ListKeyAssignment.list / client.ListKeyAssignment.load({ "id" => ... })
  def ListKeyAssignment(data = nil)
    require_relative 'entity/list_key_assignment_entity'
    ListKeyAssignmentEntity.new(self, data)
  end


  # Canonical facade: client.ListMemberAssignment.list / client.ListMemberAssignment.load({ "id" => ... })
  def ListMemberAssignment(data = nil)
    require_relative 'entity/list_member_assignment_entity'
    ListMemberAssignmentEntity.new(self, data)
  end


  # Canonical facade: client.ListObservabilityDestination.list / client.ListObservabilityDestination.load({ "id" => ... })
  def ListObservabilityDestination(data = nil)
    require_relative 'entity/list_observability_destination_entity'
    ListObservabilityDestinationEntity.new(self, data)
  end


  # Canonical facade: client.ListPreset.list / client.ListPreset.load({ "id" => ... })
  def ListPreset(data = nil)
    require_relative 'entity/list_preset_entity'
    ListPresetEntity.new(self, data)
  end


  # Canonical facade: client.ListPresetVersion.list / client.ListPresetVersion.load({ "id" => ... })
  def ListPresetVersion(data = nil)
    require_relative 'entity/list_preset_version_entity'
    ListPresetVersionEntity.new(self, data)
  end


  # Canonical facade: client.ListWorkspace.list / client.ListWorkspace.load({ "id" => ... })
  def ListWorkspace(data = nil)
    require_relative 'entity/list_workspace_entity'
    ListWorkspaceEntity.new(self, data)
  end


  # Canonical facade: client.ListWorkspaceBudget.list / client.ListWorkspaceBudget.load({ "id" => ... })
  def ListWorkspaceBudget(data = nil)
    require_relative 'entity/list_workspace_budget_entity'
    ListWorkspaceBudgetEntity.new(self, data)
  end


  # Canonical facade: client.ListWorkspaceMember.list / client.ListWorkspaceMember.load({ "id" => ... })
  def ListWorkspaceMember(data = nil)
    require_relative 'entity/list_workspace_member_entity'
    ListWorkspaceMemberEntity.new(self, data)
  end


  # Canonical facade: client.Member.list / client.Member.load({ "id" => ... })
  def Member(data = nil)
    require_relative 'entity/member_entity'
    MemberEntity.new(self, data)
  end


  # Canonical facade: client.Message.list / client.Message.load({ "id" => ... })
  def Message(data = nil)
    require_relative 'entity/message_entity'
    MessageEntity.new(self, data)
  end


  # Canonical facade: client.Meta.list / client.Meta.load({ "id" => ... })
  def Meta(data = nil)
    require_relative 'entity/meta_entity'
    MetaEntity.new(self, data)
  end


  # Canonical facade: client.Model.list / client.Model.load({ "id" => ... })
  def Model(data = nil)
    require_relative 'entity/model_entity'
    ModelEntity.new(self, data)
  end


  # Canonical facade: client.ModelsCount.list / client.ModelsCount.load({ "id" => ... })
  def ModelsCount(data = nil)
    require_relative 'entity/models_count_entity'
    ModelsCountEntity.new(self, data)
  end


  # Canonical facade: client.ModelsList.list / client.ModelsList.load({ "id" => ... })
  def ModelsList(data = nil)
    require_relative 'entity/models_list_entity'
    ModelsListEntity.new(self, data)
  end


  # Canonical facade: client.OAuth.list / client.OAuth.load({ "id" => ... })
  def OAuth(data = nil)
    require_relative 'entity/o_auth_entity'
    OAuthEntity.new(self, data)
  end


  # Canonical facade: client.ObservabilityDestination.list / client.ObservabilityDestination.load({ "id" => ... })
  def ObservabilityDestination(data = nil)
    require_relative 'entity/observability_destination_entity'
    ObservabilityDestinationEntity.new(self, data)
  end


  # Canonical facade: client.OpenResponsesResult.list / client.OpenResponsesResult.load({ "id" => ... })
  def OpenResponsesResult(data = nil)
    require_relative 'entity/open_responses_result_entity'
    OpenResponsesResultEntity.new(self, data)
  end


  # Canonical facade: client.Organization.list / client.Organization.load({ "id" => ... })
  def Organization(data = nil)
    require_relative 'entity/organization_entity'
    OrganizationEntity.new(self, data)
  end


  # Canonical facade: client.Preset.list / client.Preset.load({ "id" => ... })
  def Preset(data = nil)
    require_relative 'entity/preset_entity'
    PresetEntity.new(self, data)
  end


  # Canonical facade: client.PresetVersion.list / client.PresetVersion.load({ "id" => ... })
  def PresetVersion(data = nil)
    require_relative 'entity/preset_version_entity'
    PresetVersionEntity.new(self, data)
  end


  # Canonical facade: client.Provider.list / client.Provider.load({ "id" => ... })
  def Provider(data = nil)
    require_relative 'entity/provider_entity'
    ProviderEntity.new(self, data)
  end


  # Canonical facade: client.Query.list / client.Query.load({ "id" => ... })
  def Query(data = nil)
    require_relative 'entity/query_entity'
    QueryEntity.new(self, data)
  end


  # Canonical facade: client.RankingsDaily.list / client.RankingsDaily.load({ "id" => ... })
  def RankingsDaily(data = nil)
    require_relative 'entity/rankings_daily_entity'
    RankingsDailyEntity.new(self, data)
  end


  # Canonical facade: client.Remove.list / client.Remove.load({ "id" => ... })
  def Remove(data = nil)
    require_relative 'entity/remove_entity'
    RemoveEntity.new(self, data)
  end


  # Canonical facade: client.Rerank.list / client.Rerank.load({ "id" => ... })
  def Rerank(data = nil)
    require_relative 'entity/rerank_entity'
    RerankEntity.new(self, data)
  end


  # Canonical facade: client.Response.list / client.Response.load({ "id" => ... })
  def Response(data = nil)
    require_relative 'entity/response_entity'
    ResponseEntity.new(self, data)
  end


  # Canonical facade: client.Speech.list / client.Speech.load({ "id" => ... })
  def Speech(data = nil)
    require_relative 'entity/speech_entity'
    SpeechEntity.new(self, data)
  end


  # Canonical facade: client.Stt.list / client.Stt.load({ "id" => ... })
  def Stt(data = nil)
    require_relative 'entity/stt_entity'
    SttEntity.new(self, data)
  end


  # Canonical facade: client.SubmitGenerationFeedback.list / client.SubmitGenerationFeedback.load({ "id" => ... })
  def SubmitGenerationFeedback(data = nil)
    require_relative 'entity/submit_generation_feedback_entity'
    SubmitGenerationFeedbackEntity.new(self, data)
  end


  # Canonical facade: client.Task.list / client.Task.load({ "id" => ... })
  def Task(data = nil)
    require_relative 'entity/task_entity'
    TaskEntity.new(self, data)
  end


  # Canonical facade: client.Transcription.list / client.Transcription.load({ "id" => ... })
  def Transcription(data = nil)
    require_relative 'entity/transcription_entity'
    TranscriptionEntity.new(self, data)
  end


  # Canonical facade: client.Tts.list / client.Tts.load({ "id" => ... })
  def Tts(data = nil)
    require_relative 'entity/tts_entity'
    TtsEntity.new(self, data)
  end


  # Canonical facade: client.UnifiedBenchmark.list / client.UnifiedBenchmark.load({ "id" => ... })
  def UnifiedBenchmark(data = nil)
    require_relative 'entity/unified_benchmark_entity'
    UnifiedBenchmarkEntity.new(self, data)
  end


  # Canonical facade: client.UpdateByokKey.list / client.UpdateByokKey.load({ "id" => ... })
  def UpdateByokKey(data = nil)
    require_relative 'entity/update_byok_key_entity'
    UpdateByokKeyEntity.new(self, data)
  end


  # Canonical facade: client.UpdateGuardrail.list / client.UpdateGuardrail.load({ "id" => ... })
  def UpdateGuardrail(data = nil)
    require_relative 'entity/update_guardrail_entity'
    UpdateGuardrailEntity.new(self, data)
  end


  # Canonical facade: client.UpdateObservabilityDestination.list / client.UpdateObservabilityDestination.load({ "id" => ... })
  def UpdateObservabilityDestination(data = nil)
    require_relative 'entity/update_observability_destination_entity'
    UpdateObservabilityDestinationEntity.new(self, data)
  end


  # Canonical facade: client.UpdateWorkspace.list / client.UpdateWorkspace.load({ "id" => ... })
  def UpdateWorkspace(data = nil)
    require_relative 'entity/update_workspace_entity'
    UpdateWorkspaceEntity.new(self, data)
  end


  # Canonical facade: client.UpsertWorkspaceBudget.list / client.UpsertWorkspaceBudget.load({ "id" => ... })
  def UpsertWorkspaceBudget(data = nil)
    require_relative 'entity/upsert_workspace_budget_entity'
    UpsertWorkspaceBudgetEntity.new(self, data)
  end


  # Canonical facade: client.User.list / client.User.load({ "id" => ... })
  def User(data = nil)
    require_relative 'entity/user_entity'
    UserEntity.new(self, data)
  end


  # Canonical facade: client.Version.list / client.Version.load({ "id" => ... })
  def Version(data = nil)
    require_relative 'entity/version_entity'
    VersionEntity.new(self, data)
  end


  # Canonical facade: client.Video.list / client.Video.load({ "id" => ... })
  def Video(data = nil)
    require_relative 'entity/video_entity'
    VideoEntity.new(self, data)
  end


  # Canonical facade: client.VideoGeneration.list / client.VideoGeneration.load({ "id" => ... })
  def VideoGeneration(data = nil)
    require_relative 'entity/video_generation_entity'
    VideoGenerationEntity.new(self, data)
  end


  # Canonical facade: client.VideoModelsList.list / client.VideoModelsList.load({ "id" => ... })
  def VideoModelsList(data = nil)
    require_relative 'entity/video_models_list_entity'
    VideoModelsListEntity.new(self, data)
  end


  # Canonical facade: client.Workspace.list / client.Workspace.load({ "id" => ... })
  def Workspace(data = nil)
    require_relative 'entity/workspace_entity'
    WorkspaceEntity.new(self, data)
  end


  # Canonical facade: client.WorkspaceBudget.list / client.WorkspaceBudget.load({ "id" => ... })
  def WorkspaceBudget(data = nil)
    require_relative 'entity/workspace_budget_entity'
    WorkspaceBudgetEntity.new(self, data)
  end


  # Canonical facade: client.Zdr.list / client.Zdr.load({ "id" => ... })
  def Zdr(data = nil)
    require_relative 'entity/zdr_entity'
    ZdrEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = OpenrouterModelsSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
