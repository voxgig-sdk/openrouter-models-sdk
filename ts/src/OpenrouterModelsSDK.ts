// OpenrouterModels Ts SDK

import { ActivityEntity } from './entity/ActivityEntity'
import { AddEntity } from './entity/AddEntity'
import { ApiKeyEntity } from './entity/ApiKeyEntity'
import { AppRankingEntity } from './entity/AppRankingEntity'
import { BenchmarkEntity } from './entity/BenchmarkEntity'
import { BetaAnalyticsEntity } from './entity/BetaAnalyticsEntity'
import { BudgetEntity } from './entity/BudgetEntity'
import { BulkAddWorkspaceMemberEntity } from './entity/BulkAddWorkspaceMemberEntity'
import { BulkAssignKeyEntity } from './entity/BulkAssignKeyEntity'
import { BulkAssignMemberEntity } from './entity/BulkAssignMemberEntity'
import { BulkRemoveWorkspaceMemberEntity } from './entity/BulkRemoveWorkspaceMemberEntity'
import { BulkUnassignKeyEntity } from './entity/BulkUnassignKeyEntity'
import { BulkUnassignMemberEntity } from './entity/BulkUnassignMemberEntity'
import { ByokEntity } from './entity/ByokEntity'
import { ChatResultEntity } from './entity/ChatResultEntity'
import { CodeEntity } from './entity/CodeEntity'
import { CoinbaseEntity } from './entity/CoinbaseEntity'
import { CompletionEntity } from './entity/CompletionEntity'
import { ContentEntity } from './entity/ContentEntity'
import { CountEntity } from './entity/CountEntity'
import { CreateByokKeyEntity } from './entity/CreateByokKeyEntity'
import { CreateGuardrailEntity } from './entity/CreateGuardrailEntity'
import { CreateObservabilityDestinationEntity } from './entity/CreateObservabilityDestinationEntity'
import { CreatePresetFromInferenceEntity } from './entity/CreatePresetFromInferenceEntity'
import { CreateWorkspaceEntity } from './entity/CreateWorkspaceEntity'
import { CreditEntity } from './entity/CreditEntity'
import { DestinationEntity } from './entity/DestinationEntity'
import { EmbeddingEntity } from './entity/EmbeddingEntity'
import { EndpointEntity } from './entity/EndpointEntity'
import { FeedbackEntity } from './entity/FeedbackEntity'
import { FileEntity } from './entity/FileEntity'
import { GenerationEntity } from './entity/GenerationEntity'
import { GenerationContentEntity } from './entity/GenerationContentEntity'
import { GuardrailEntity } from './entity/GuardrailEntity'
import { ImageEntity } from './entity/ImageEntity'
import { ImageModelEndpointEntity } from './entity/ImageModelEndpointEntity'
import { ImageModelsListEntity } from './entity/ImageModelsListEntity'
import { KeyEntity } from './entity/KeyEntity'
import { ListByokKeyEntity } from './entity/ListByokKeyEntity'
import { ListGuardrailEntity } from './entity/ListGuardrailEntity'
import { ListKeyAssignmentEntity } from './entity/ListKeyAssignmentEntity'
import { ListMemberAssignmentEntity } from './entity/ListMemberAssignmentEntity'
import { ListObservabilityDestinationEntity } from './entity/ListObservabilityDestinationEntity'
import { ListPresetEntity } from './entity/ListPresetEntity'
import { ListPresetVersionEntity } from './entity/ListPresetVersionEntity'
import { ListWorkspaceEntity } from './entity/ListWorkspaceEntity'
import { ListWorkspaceBudgetEntity } from './entity/ListWorkspaceBudgetEntity'
import { ListWorkspaceMemberEntity } from './entity/ListWorkspaceMemberEntity'
import { MemberEntity } from './entity/MemberEntity'
import { MessageEntity } from './entity/MessageEntity'
import { MetaEntity } from './entity/MetaEntity'
import { ModelEntity } from './entity/ModelEntity'
import { ModelsCountEntity } from './entity/ModelsCountEntity'
import { ModelsListEntity } from './entity/ModelsListEntity'
import { OAuthEntity } from './entity/OAuthEntity'
import { ObservabilityDestinationEntity } from './entity/ObservabilityDestinationEntity'
import { OpenResponsesResultEntity } from './entity/OpenResponsesResultEntity'
import { OrganizationEntity } from './entity/OrganizationEntity'
import { PresetEntity } from './entity/PresetEntity'
import { PresetVersionEntity } from './entity/PresetVersionEntity'
import { ProviderEntity } from './entity/ProviderEntity'
import { QueryEntity } from './entity/QueryEntity'
import { RankingsDailyEntity } from './entity/RankingsDailyEntity'
import { RemoveEntity } from './entity/RemoveEntity'
import { RerankEntity } from './entity/RerankEntity'
import { ResponseEntity } from './entity/ResponseEntity'
import { SpeechEntity } from './entity/SpeechEntity'
import { SttEntity } from './entity/SttEntity'
import { SubmitGenerationFeedbackEntity } from './entity/SubmitGenerationFeedbackEntity'
import { TaskEntity } from './entity/TaskEntity'
import { TranscriptionEntity } from './entity/TranscriptionEntity'
import { TtsEntity } from './entity/TtsEntity'
import { UnifiedBenchmarkEntity } from './entity/UnifiedBenchmarkEntity'
import { UpdateByokKeyEntity } from './entity/UpdateByokKeyEntity'
import { UpdateGuardrailEntity } from './entity/UpdateGuardrailEntity'
import { UpdateObservabilityDestinationEntity } from './entity/UpdateObservabilityDestinationEntity'
import { UpdateWorkspaceEntity } from './entity/UpdateWorkspaceEntity'
import { UpsertWorkspaceBudgetEntity } from './entity/UpsertWorkspaceBudgetEntity'
import { UserEntity } from './entity/UserEntity'
import { VersionEntity } from './entity/VersionEntity'
import { VideoEntity } from './entity/VideoEntity'
import { VideoGenerationEntity } from './entity/VideoGenerationEntity'
import { VideoModelsListEntity } from './entity/VideoModelsListEntity'
import { WorkspaceEntity } from './entity/WorkspaceEntity'
import { WorkspaceBudgetEntity } from './entity/WorkspaceBudgetEntity'
import { ZdrEntity } from './entity/ZdrEntity'

export type * from './OpenrouterModelsTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { OpenrouterModelsEntityBase } from './OpenrouterModelsEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'


const stdutil = new Utility()


class OpenrouterModelsSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    if (null != this._options.extend) {
      for (let f of this._options.extend) {
        featureAdd(this._rootctx, f)
      }
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  async direct(fetchargs?: any) {
    const utility = this._utility
    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  // Entity access: `client.Activity().list()` / `client.Activity().load({ id })`.
  Activity(data?: any) {
    const self = this
    return new ActivityEntity(self,data)
  }


  // Entity access: `client.Add().list()` / `client.Add().load({ id })`.
  Add(data?: any) {
    const self = this
    return new AddEntity(self,data)
  }


  // Entity access: `client.ApiKey().list()` / `client.ApiKey().load({ id })`.
  ApiKey(data?: any) {
    const self = this
    return new ApiKeyEntity(self,data)
  }


  // Entity access: `client.AppRanking().list()` / `client.AppRanking().load({ id })`.
  AppRanking(data?: any) {
    const self = this
    return new AppRankingEntity(self,data)
  }


  // Entity access: `client.Benchmark().list()` / `client.Benchmark().load({ id })`.
  Benchmark(data?: any) {
    const self = this
    return new BenchmarkEntity(self,data)
  }


  // Entity access: `client.BetaAnalytics().list()` / `client.BetaAnalytics().load({ id })`.
  BetaAnalytics(data?: any) {
    const self = this
    return new BetaAnalyticsEntity(self,data)
  }


  // Entity access: `client.Budget().list()` / `client.Budget().load({ id })`.
  Budget(data?: any) {
    const self = this
    return new BudgetEntity(self,data)
  }


  // Entity access: `client.BulkAddWorkspaceMember().list()` / `client.BulkAddWorkspaceMember().load({ id })`.
  BulkAddWorkspaceMember(data?: any) {
    const self = this
    return new BulkAddWorkspaceMemberEntity(self,data)
  }


  // Entity access: `client.BulkAssignKey().list()` / `client.BulkAssignKey().load({ id })`.
  BulkAssignKey(data?: any) {
    const self = this
    return new BulkAssignKeyEntity(self,data)
  }


  // Entity access: `client.BulkAssignMember().list()` / `client.BulkAssignMember().load({ id })`.
  BulkAssignMember(data?: any) {
    const self = this
    return new BulkAssignMemberEntity(self,data)
  }


  // Entity access: `client.BulkRemoveWorkspaceMember().list()` / `client.BulkRemoveWorkspaceMember().load({ id })`.
  BulkRemoveWorkspaceMember(data?: any) {
    const self = this
    return new BulkRemoveWorkspaceMemberEntity(self,data)
  }


  // Entity access: `client.BulkUnassignKey().list()` / `client.BulkUnassignKey().load({ id })`.
  BulkUnassignKey(data?: any) {
    const self = this
    return new BulkUnassignKeyEntity(self,data)
  }


  // Entity access: `client.BulkUnassignMember().list()` / `client.BulkUnassignMember().load({ id })`.
  BulkUnassignMember(data?: any) {
    const self = this
    return new BulkUnassignMemberEntity(self,data)
  }


  // Entity access: `client.Byok().list()` / `client.Byok().load({ id })`.
  Byok(data?: any) {
    const self = this
    return new ByokEntity(self,data)
  }


  // Entity access: `client.ChatResult().list()` / `client.ChatResult().load({ id })`.
  ChatResult(data?: any) {
    const self = this
    return new ChatResultEntity(self,data)
  }


  // Entity access: `client.Code().list()` / `client.Code().load({ id })`.
  Code(data?: any) {
    const self = this
    return new CodeEntity(self,data)
  }


  // Entity access: `client.Coinbase().list()` / `client.Coinbase().load({ id })`.
  Coinbase(data?: any) {
    const self = this
    return new CoinbaseEntity(self,data)
  }


  // Entity access: `client.Completion().list()` / `client.Completion().load({ id })`.
  Completion(data?: any) {
    const self = this
    return new CompletionEntity(self,data)
  }


  // Entity access: `client.Content().list()` / `client.Content().load({ id })`.
  Content(data?: any) {
    const self = this
    return new ContentEntity(self,data)
  }


  // Entity access: `client.Count().list()` / `client.Count().load({ id })`.
  Count(data?: any) {
    const self = this
    return new CountEntity(self,data)
  }


  // Entity access: `client.CreateByokKey().list()` / `client.CreateByokKey().load({ id })`.
  CreateByokKey(data?: any) {
    const self = this
    return new CreateByokKeyEntity(self,data)
  }


  // Entity access: `client.CreateGuardrail().list()` / `client.CreateGuardrail().load({ id })`.
  CreateGuardrail(data?: any) {
    const self = this
    return new CreateGuardrailEntity(self,data)
  }


  // Entity access: `client.CreateObservabilityDestination().list()` / `client.CreateObservabilityDestination().load({ id })`.
  CreateObservabilityDestination(data?: any) {
    const self = this
    return new CreateObservabilityDestinationEntity(self,data)
  }


  // Entity access: `client.CreatePresetFromInference().list()` / `client.CreatePresetFromInference().load({ id })`.
  CreatePresetFromInference(data?: any) {
    const self = this
    return new CreatePresetFromInferenceEntity(self,data)
  }


  // Entity access: `client.CreateWorkspace().list()` / `client.CreateWorkspace().load({ id })`.
  CreateWorkspace(data?: any) {
    const self = this
    return new CreateWorkspaceEntity(self,data)
  }


  // Entity access: `client.Credit().list()` / `client.Credit().load({ id })`.
  Credit(data?: any) {
    const self = this
    return new CreditEntity(self,data)
  }


  // Entity access: `client.Destination().list()` / `client.Destination().load({ id })`.
  Destination(data?: any) {
    const self = this
    return new DestinationEntity(self,data)
  }


  // Entity access: `client.Embedding().list()` / `client.Embedding().load({ id })`.
  Embedding(data?: any) {
    const self = this
    return new EmbeddingEntity(self,data)
  }


  // Entity access: `client.Endpoint().list()` / `client.Endpoint().load({ id })`.
  Endpoint(data?: any) {
    const self = this
    return new EndpointEntity(self,data)
  }


  // Entity access: `client.Feedback().list()` / `client.Feedback().load({ id })`.
  Feedback(data?: any) {
    const self = this
    return new FeedbackEntity(self,data)
  }


  // Entity access: `client.File().list()` / `client.File().load({ id })`.
  File(data?: any) {
    const self = this
    return new FileEntity(self,data)
  }


  // Entity access: `client.Generation().list()` / `client.Generation().load({ id })`.
  Generation(data?: any) {
    const self = this
    return new GenerationEntity(self,data)
  }


  // Entity access: `client.GenerationContent().list()` / `client.GenerationContent().load({ id })`.
  GenerationContent(data?: any) {
    const self = this
    return new GenerationContentEntity(self,data)
  }


  // Entity access: `client.Guardrail().list()` / `client.Guardrail().load({ id })`.
  Guardrail(data?: any) {
    const self = this
    return new GuardrailEntity(self,data)
  }


  // Entity access: `client.Image().list()` / `client.Image().load({ id })`.
  Image(data?: any) {
    const self = this
    return new ImageEntity(self,data)
  }


  // Entity access: `client.ImageModelEndpoint().list()` / `client.ImageModelEndpoint().load({ id })`.
  ImageModelEndpoint(data?: any) {
    const self = this
    return new ImageModelEndpointEntity(self,data)
  }


  // Entity access: `client.ImageModelsList().list()` / `client.ImageModelsList().load({ id })`.
  ImageModelsList(data?: any) {
    const self = this
    return new ImageModelsListEntity(self,data)
  }


  // Entity access: `client.Key().list()` / `client.Key().load({ id })`.
  Key(data?: any) {
    const self = this
    return new KeyEntity(self,data)
  }


  // Entity access: `client.ListByokKey().list()` / `client.ListByokKey().load({ id })`.
  ListByokKey(data?: any) {
    const self = this
    return new ListByokKeyEntity(self,data)
  }


  // Entity access: `client.ListGuardrail().list()` / `client.ListGuardrail().load({ id })`.
  ListGuardrail(data?: any) {
    const self = this
    return new ListGuardrailEntity(self,data)
  }


  // Entity access: `client.ListKeyAssignment().list()` / `client.ListKeyAssignment().load({ id })`.
  ListKeyAssignment(data?: any) {
    const self = this
    return new ListKeyAssignmentEntity(self,data)
  }


  // Entity access: `client.ListMemberAssignment().list()` / `client.ListMemberAssignment().load({ id })`.
  ListMemberAssignment(data?: any) {
    const self = this
    return new ListMemberAssignmentEntity(self,data)
  }


  // Entity access: `client.ListObservabilityDestination().list()` / `client.ListObservabilityDestination().load({ id })`.
  ListObservabilityDestination(data?: any) {
    const self = this
    return new ListObservabilityDestinationEntity(self,data)
  }


  // Entity access: `client.ListPreset().list()` / `client.ListPreset().load({ id })`.
  ListPreset(data?: any) {
    const self = this
    return new ListPresetEntity(self,data)
  }


  // Entity access: `client.ListPresetVersion().list()` / `client.ListPresetVersion().load({ id })`.
  ListPresetVersion(data?: any) {
    const self = this
    return new ListPresetVersionEntity(self,data)
  }


  // Entity access: `client.ListWorkspace().list()` / `client.ListWorkspace().load({ id })`.
  ListWorkspace(data?: any) {
    const self = this
    return new ListWorkspaceEntity(self,data)
  }


  // Entity access: `client.ListWorkspaceBudget().list()` / `client.ListWorkspaceBudget().load({ id })`.
  ListWorkspaceBudget(data?: any) {
    const self = this
    return new ListWorkspaceBudgetEntity(self,data)
  }


  // Entity access: `client.ListWorkspaceMember().list()` / `client.ListWorkspaceMember().load({ id })`.
  ListWorkspaceMember(data?: any) {
    const self = this
    return new ListWorkspaceMemberEntity(self,data)
  }


  // Entity access: `client.Member().list()` / `client.Member().load({ id })`.
  Member(data?: any) {
    const self = this
    return new MemberEntity(self,data)
  }


  // Entity access: `client.Message().list()` / `client.Message().load({ id })`.
  Message(data?: any) {
    const self = this
    return new MessageEntity(self,data)
  }


  // Entity access: `client.Meta().list()` / `client.Meta().load({ id })`.
  Meta(data?: any) {
    const self = this
    return new MetaEntity(self,data)
  }


  // Entity access: `client.Model().list()` / `client.Model().load({ id })`.
  Model(data?: any) {
    const self = this
    return new ModelEntity(self,data)
  }


  // Entity access: `client.ModelsCount().list()` / `client.ModelsCount().load({ id })`.
  ModelsCount(data?: any) {
    const self = this
    return new ModelsCountEntity(self,data)
  }


  // Entity access: `client.ModelsList().list()` / `client.ModelsList().load({ id })`.
  ModelsList(data?: any) {
    const self = this
    return new ModelsListEntity(self,data)
  }


  // Entity access: `client.OAuth().list()` / `client.OAuth().load({ id })`.
  OAuth(data?: any) {
    const self = this
    return new OAuthEntity(self,data)
  }


  // Entity access: `client.ObservabilityDestination().list()` / `client.ObservabilityDestination().load({ id })`.
  ObservabilityDestination(data?: any) {
    const self = this
    return new ObservabilityDestinationEntity(self,data)
  }


  // Entity access: `client.OpenResponsesResult().list()` / `client.OpenResponsesResult().load({ id })`.
  OpenResponsesResult(data?: any) {
    const self = this
    return new OpenResponsesResultEntity(self,data)
  }


  // Entity access: `client.Organization().list()` / `client.Organization().load({ id })`.
  Organization(data?: any) {
    const self = this
    return new OrganizationEntity(self,data)
  }


  // Entity access: `client.Preset().list()` / `client.Preset().load({ id })`.
  Preset(data?: any) {
    const self = this
    return new PresetEntity(self,data)
  }


  // Entity access: `client.PresetVersion().list()` / `client.PresetVersion().load({ id })`.
  PresetVersion(data?: any) {
    const self = this
    return new PresetVersionEntity(self,data)
  }


  // Entity access: `client.Provider().list()` / `client.Provider().load({ id })`.
  Provider(data?: any) {
    const self = this
    return new ProviderEntity(self,data)
  }


  // Entity access: `client.Query().list()` / `client.Query().load({ id })`.
  Query(data?: any) {
    const self = this
    return new QueryEntity(self,data)
  }


  // Entity access: `client.RankingsDaily().list()` / `client.RankingsDaily().load({ id })`.
  RankingsDaily(data?: any) {
    const self = this
    return new RankingsDailyEntity(self,data)
  }


  // Entity access: `client.Remove().list()` / `client.Remove().load({ id })`.
  Remove(data?: any) {
    const self = this
    return new RemoveEntity(self,data)
  }


  // Entity access: `client.Rerank().list()` / `client.Rerank().load({ id })`.
  Rerank(data?: any) {
    const self = this
    return new RerankEntity(self,data)
  }


  // Entity access: `client.Response().list()` / `client.Response().load({ id })`.
  Response(data?: any) {
    const self = this
    return new ResponseEntity(self,data)
  }


  // Entity access: `client.Speech().list()` / `client.Speech().load({ id })`.
  Speech(data?: any) {
    const self = this
    return new SpeechEntity(self,data)
  }


  // Entity access: `client.Stt().list()` / `client.Stt().load({ id })`.
  Stt(data?: any) {
    const self = this
    return new SttEntity(self,data)
  }


  // Entity access: `client.SubmitGenerationFeedback().list()` / `client.SubmitGenerationFeedback().load({ id })`.
  SubmitGenerationFeedback(data?: any) {
    const self = this
    return new SubmitGenerationFeedbackEntity(self,data)
  }


  // Entity access: `client.Task().list()` / `client.Task().load({ id })`.
  Task(data?: any) {
    const self = this
    return new TaskEntity(self,data)
  }


  // Entity access: `client.Transcription().list()` / `client.Transcription().load({ id })`.
  Transcription(data?: any) {
    const self = this
    return new TranscriptionEntity(self,data)
  }


  // Entity access: `client.Tts().list()` / `client.Tts().load({ id })`.
  Tts(data?: any) {
    const self = this
    return new TtsEntity(self,data)
  }


  // Entity access: `client.UnifiedBenchmark().list()` / `client.UnifiedBenchmark().load({ id })`.
  UnifiedBenchmark(data?: any) {
    const self = this
    return new UnifiedBenchmarkEntity(self,data)
  }


  // Entity access: `client.UpdateByokKey().list()` / `client.UpdateByokKey().load({ id })`.
  UpdateByokKey(data?: any) {
    const self = this
    return new UpdateByokKeyEntity(self,data)
  }


  // Entity access: `client.UpdateGuardrail().list()` / `client.UpdateGuardrail().load({ id })`.
  UpdateGuardrail(data?: any) {
    const self = this
    return new UpdateGuardrailEntity(self,data)
  }


  // Entity access: `client.UpdateObservabilityDestination().list()` / `client.UpdateObservabilityDestination().load({ id })`.
  UpdateObservabilityDestination(data?: any) {
    const self = this
    return new UpdateObservabilityDestinationEntity(self,data)
  }


  // Entity access: `client.UpdateWorkspace().list()` / `client.UpdateWorkspace().load({ id })`.
  UpdateWorkspace(data?: any) {
    const self = this
    return new UpdateWorkspaceEntity(self,data)
  }


  // Entity access: `client.UpsertWorkspaceBudget().list()` / `client.UpsertWorkspaceBudget().load({ id })`.
  UpsertWorkspaceBudget(data?: any) {
    const self = this
    return new UpsertWorkspaceBudgetEntity(self,data)
  }


  // Entity access: `client.User().list()` / `client.User().load({ id })`.
  User(data?: any) {
    const self = this
    return new UserEntity(self,data)
  }


  // Entity access: `client.Version().list()` / `client.Version().load({ id })`.
  Version(data?: any) {
    const self = this
    return new VersionEntity(self,data)
  }


  // Entity access: `client.Video().list()` / `client.Video().load({ id })`.
  Video(data?: any) {
    const self = this
    return new VideoEntity(self,data)
  }


  // Entity access: `client.VideoGeneration().list()` / `client.VideoGeneration().load({ id })`.
  VideoGeneration(data?: any) {
    const self = this
    return new VideoGenerationEntity(self,data)
  }


  // Entity access: `client.VideoModelsList().list()` / `client.VideoModelsList().load({ id })`.
  VideoModelsList(data?: any) {
    const self = this
    return new VideoModelsListEntity(self,data)
  }


  // Entity access: `client.Workspace().list()` / `client.Workspace().load({ id })`.
  Workspace(data?: any) {
    const self = this
    return new WorkspaceEntity(self,data)
  }


  // Entity access: `client.WorkspaceBudget().list()` / `client.WorkspaceBudget().load({ id })`.
  WorkspaceBudget(data?: any) {
    const self = this
    return new WorkspaceBudgetEntity(self,data)
  }


  // Entity access: `client.Zdr().list()` / `client.Zdr().load({ id })`.
  Zdr(data?: any) {
    const self = this
    return new ZdrEntity(self,data)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new OpenrouterModelsSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return OpenrouterModelsSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'OpenrouterModels' }
  }

  toString() {
    return 'OpenrouterModels ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = OpenrouterModelsSDK


export {
  stdutil,
  config,

  BaseFeature,
  OpenrouterModelsEntityBase,

  OpenrouterModelsSDK,
  SDK,
}


