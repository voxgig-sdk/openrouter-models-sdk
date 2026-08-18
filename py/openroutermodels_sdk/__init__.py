# OpenrouterModels SDK

from openroutermodels_sdk.utility.voxgig_struct import voxgig_struct as vs
from openroutermodels_sdk.core.utility_type import OpenrouterModelsUtility
from openroutermodels_sdk.core.spec import OpenrouterModelsSpec
from openroutermodels_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from openroutermodels_sdk.utility import register

# Load features
from openroutermodels_sdk.feature.base_feature import OpenrouterModelsBaseFeature
from openroutermodels_sdk.features import _make_feature


class OpenrouterModelsSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = OpenrouterModelsUtility()
        self._utility = utility

        from openroutermodels_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        extend = vs.getprop(self.options, "extend")
        if isinstance(extend, list):
            for f in extend:
                if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                    utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return OpenrouterModelsUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = OpenrouterModelsSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "OpenrouterModelsSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("OpenrouterModelsSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Activity(self, data=None) -> "ActivityEntity":
        """Entity factory: client.Activity().list() / client.Activity().load({"id": ...})."""
        from openroutermodels_sdk.entity.activity_entity import ActivityEntity
        return ActivityEntity(self, data)


    def Add(self, data=None) -> "AddEntity":
        """Entity factory: client.Add().list() / client.Add().load({"id": ...})."""
        from openroutermodels_sdk.entity.add_entity import AddEntity
        return AddEntity(self, data)


    def ApiKey(self, data=None) -> "ApiKeyEntity":
        """Entity factory: client.ApiKey().list() / client.ApiKey().load({"id": ...})."""
        from openroutermodels_sdk.entity.api_key_entity import ApiKeyEntity
        return ApiKeyEntity(self, data)


    def AppRanking(self, data=None) -> "AppRankingEntity":
        """Entity factory: client.AppRanking().list() / client.AppRanking().load({"id": ...})."""
        from openroutermodels_sdk.entity.app_ranking_entity import AppRankingEntity
        return AppRankingEntity(self, data)


    def Benchmark(self, data=None) -> "BenchmarkEntity":
        """Entity factory: client.Benchmark().list() / client.Benchmark().load({"id": ...})."""
        from openroutermodels_sdk.entity.benchmark_entity import BenchmarkEntity
        return BenchmarkEntity(self, data)


    def BetaAnalytics(self, data=None) -> "BetaAnalyticsEntity":
        """Entity factory: client.BetaAnalytics().list() / client.BetaAnalytics().load({"id": ...})."""
        from openroutermodels_sdk.entity.beta_analytics_entity import BetaAnalyticsEntity
        return BetaAnalyticsEntity(self, data)


    def Budget(self, data=None) -> "BudgetEntity":
        """Entity factory: client.Budget().list() / client.Budget().load({"id": ...})."""
        from openroutermodels_sdk.entity.budget_entity import BudgetEntity
        return BudgetEntity(self, data)


    def BulkAddWorkspaceMember(self, data=None) -> "BulkAddWorkspaceMemberEntity":
        """Entity factory: client.BulkAddWorkspaceMember().list() / client.BulkAddWorkspaceMember().load({"id": ...})."""
        from openroutermodels_sdk.entity.bulk_add_workspace_member_entity import BulkAddWorkspaceMemberEntity
        return BulkAddWorkspaceMemberEntity(self, data)


    def BulkAssignKey(self, data=None) -> "BulkAssignKeyEntity":
        """Entity factory: client.BulkAssignKey().list() / client.BulkAssignKey().load({"id": ...})."""
        from openroutermodels_sdk.entity.bulk_assign_key_entity import BulkAssignKeyEntity
        return BulkAssignKeyEntity(self, data)


    def BulkAssignMember(self, data=None) -> "BulkAssignMemberEntity":
        """Entity factory: client.BulkAssignMember().list() / client.BulkAssignMember().load({"id": ...})."""
        from openroutermodels_sdk.entity.bulk_assign_member_entity import BulkAssignMemberEntity
        return BulkAssignMemberEntity(self, data)


    def BulkRemoveWorkspaceMember(self, data=None) -> "BulkRemoveWorkspaceMemberEntity":
        """Entity factory: client.BulkRemoveWorkspaceMember().list() / client.BulkRemoveWorkspaceMember().load({"id": ...})."""
        from openroutermodels_sdk.entity.bulk_remove_workspace_member_entity import BulkRemoveWorkspaceMemberEntity
        return BulkRemoveWorkspaceMemberEntity(self, data)


    def BulkUnassignKey(self, data=None) -> "BulkUnassignKeyEntity":
        """Entity factory: client.BulkUnassignKey().list() / client.BulkUnassignKey().load({"id": ...})."""
        from openroutermodels_sdk.entity.bulk_unassign_key_entity import BulkUnassignKeyEntity
        return BulkUnassignKeyEntity(self, data)


    def BulkUnassignMember(self, data=None) -> "BulkUnassignMemberEntity":
        """Entity factory: client.BulkUnassignMember().list() / client.BulkUnassignMember().load({"id": ...})."""
        from openroutermodels_sdk.entity.bulk_unassign_member_entity import BulkUnassignMemberEntity
        return BulkUnassignMemberEntity(self, data)


    def Byok(self, data=None) -> "ByokEntity":
        """Entity factory: client.Byok().list() / client.Byok().load({"id": ...})."""
        from openroutermodels_sdk.entity.byok_entity import ByokEntity
        return ByokEntity(self, data)


    def ChatResult(self, data=None) -> "ChatResultEntity":
        """Entity factory: client.ChatResult().list() / client.ChatResult().load({"id": ...})."""
        from openroutermodels_sdk.entity.chat_result_entity import ChatResultEntity
        return ChatResultEntity(self, data)


    def Code(self, data=None) -> "CodeEntity":
        """Entity factory: client.Code().list() / client.Code().load({"id": ...})."""
        from openroutermodels_sdk.entity.code_entity import CodeEntity
        return CodeEntity(self, data)


    def Coinbase(self, data=None) -> "CoinbaseEntity":
        """Entity factory: client.Coinbase().list() / client.Coinbase().load({"id": ...})."""
        from openroutermodels_sdk.entity.coinbase_entity import CoinbaseEntity
        return CoinbaseEntity(self, data)


    def Completion(self, data=None) -> "CompletionEntity":
        """Entity factory: client.Completion().list() / client.Completion().load({"id": ...})."""
        from openroutermodels_sdk.entity.completion_entity import CompletionEntity
        return CompletionEntity(self, data)


    def Content(self, data=None) -> "ContentEntity":
        """Entity factory: client.Content().list() / client.Content().load({"id": ...})."""
        from openroutermodels_sdk.entity.content_entity import ContentEntity
        return ContentEntity(self, data)


    def Count(self, data=None) -> "CountEntity":
        """Entity factory: client.Count().list() / client.Count().load({"id": ...})."""
        from openroutermodels_sdk.entity.count_entity import CountEntity
        return CountEntity(self, data)


    def CreateByokKey(self, data=None) -> "CreateByokKeyEntity":
        """Entity factory: client.CreateByokKey().list() / client.CreateByokKey().load({"id": ...})."""
        from openroutermodels_sdk.entity.create_byok_key_entity import CreateByokKeyEntity
        return CreateByokKeyEntity(self, data)


    def CreateGuardrail(self, data=None) -> "CreateGuardrailEntity":
        """Entity factory: client.CreateGuardrail().list() / client.CreateGuardrail().load({"id": ...})."""
        from openroutermodels_sdk.entity.create_guardrail_entity import CreateGuardrailEntity
        return CreateGuardrailEntity(self, data)


    def CreateObservabilityDestination(self, data=None) -> "CreateObservabilityDestinationEntity":
        """Entity factory: client.CreateObservabilityDestination().list() / client.CreateObservabilityDestination().load({"id": ...})."""
        from openroutermodels_sdk.entity.create_observability_destination_entity import CreateObservabilityDestinationEntity
        return CreateObservabilityDestinationEntity(self, data)


    def CreatePresetFromInference(self, data=None) -> "CreatePresetFromInferenceEntity":
        """Entity factory: client.CreatePresetFromInference().list() / client.CreatePresetFromInference().load({"id": ...})."""
        from openroutermodels_sdk.entity.create_preset_from_inference_entity import CreatePresetFromInferenceEntity
        return CreatePresetFromInferenceEntity(self, data)


    def CreateWorkspace(self, data=None) -> "CreateWorkspaceEntity":
        """Entity factory: client.CreateWorkspace().list() / client.CreateWorkspace().load({"id": ...})."""
        from openroutermodels_sdk.entity.create_workspace_entity import CreateWorkspaceEntity
        return CreateWorkspaceEntity(self, data)


    def Credit(self, data=None) -> "CreditEntity":
        """Entity factory: client.Credit().list() / client.Credit().load({"id": ...})."""
        from openroutermodels_sdk.entity.credit_entity import CreditEntity
        return CreditEntity(self, data)


    def Destination(self, data=None) -> "DestinationEntity":
        """Entity factory: client.Destination().list() / client.Destination().load({"id": ...})."""
        from openroutermodels_sdk.entity.destination_entity import DestinationEntity
        return DestinationEntity(self, data)


    def Embedding(self, data=None) -> "EmbeddingEntity":
        """Entity factory: client.Embedding().list() / client.Embedding().load({"id": ...})."""
        from openroutermodels_sdk.entity.embedding_entity import EmbeddingEntity
        return EmbeddingEntity(self, data)


    def Endpoint(self, data=None) -> "EndpointEntity":
        """Entity factory: client.Endpoint().list() / client.Endpoint().load({"id": ...})."""
        from openroutermodels_sdk.entity.endpoint_entity import EndpointEntity
        return EndpointEntity(self, data)


    def Feedback(self, data=None) -> "FeedbackEntity":
        """Entity factory: client.Feedback().list() / client.Feedback().load({"id": ...})."""
        from openroutermodels_sdk.entity.feedback_entity import FeedbackEntity
        return FeedbackEntity(self, data)


    def File(self, data=None) -> "FileEntity":
        """Entity factory: client.File().list() / client.File().load({"id": ...})."""
        from openroutermodels_sdk.entity.file_entity import FileEntity
        return FileEntity(self, data)


    def Generation(self, data=None) -> "GenerationEntity":
        """Entity factory: client.Generation().list() / client.Generation().load({"id": ...})."""
        from openroutermodels_sdk.entity.generation_entity import GenerationEntity
        return GenerationEntity(self, data)


    def GenerationContent(self, data=None) -> "GenerationContentEntity":
        """Entity factory: client.GenerationContent().list() / client.GenerationContent().load({"id": ...})."""
        from openroutermodels_sdk.entity.generation_content_entity import GenerationContentEntity
        return GenerationContentEntity(self, data)


    def Guardrail(self, data=None) -> "GuardrailEntity":
        """Entity factory: client.Guardrail().list() / client.Guardrail().load({"id": ...})."""
        from openroutermodels_sdk.entity.guardrail_entity import GuardrailEntity
        return GuardrailEntity(self, data)


    def Image(self, data=None) -> "ImageEntity":
        """Entity factory: client.Image().list() / client.Image().load({"id": ...})."""
        from openroutermodels_sdk.entity.image_entity import ImageEntity
        return ImageEntity(self, data)


    def ImageModelEndpoint(self, data=None) -> "ImageModelEndpointEntity":
        """Entity factory: client.ImageModelEndpoint().list() / client.ImageModelEndpoint().load({"id": ...})."""
        from openroutermodels_sdk.entity.image_model_endpoint_entity import ImageModelEndpointEntity
        return ImageModelEndpointEntity(self, data)


    def ImageModelsList(self, data=None) -> "ImageModelsListEntity":
        """Entity factory: client.ImageModelsList().list() / client.ImageModelsList().load({"id": ...})."""
        from openroutermodels_sdk.entity.image_models_list_entity import ImageModelsListEntity
        return ImageModelsListEntity(self, data)


    def Key(self, data=None) -> "KeyEntity":
        """Entity factory: client.Key().list() / client.Key().load({"id": ...})."""
        from openroutermodels_sdk.entity.key_entity import KeyEntity
        return KeyEntity(self, data)


    def ListByokKey(self, data=None) -> "ListByokKeyEntity":
        """Entity factory: client.ListByokKey().list() / client.ListByokKey().load({"id": ...})."""
        from openroutermodels_sdk.entity.list_byok_key_entity import ListByokKeyEntity
        return ListByokKeyEntity(self, data)


    def ListGuardrail(self, data=None) -> "ListGuardrailEntity":
        """Entity factory: client.ListGuardrail().list() / client.ListGuardrail().load({"id": ...})."""
        from openroutermodels_sdk.entity.list_guardrail_entity import ListGuardrailEntity
        return ListGuardrailEntity(self, data)


    def ListKeyAssignment(self, data=None) -> "ListKeyAssignmentEntity":
        """Entity factory: client.ListKeyAssignment().list() / client.ListKeyAssignment().load({"id": ...})."""
        from openroutermodels_sdk.entity.list_key_assignment_entity import ListKeyAssignmentEntity
        return ListKeyAssignmentEntity(self, data)


    def ListMemberAssignment(self, data=None) -> "ListMemberAssignmentEntity":
        """Entity factory: client.ListMemberAssignment().list() / client.ListMemberAssignment().load({"id": ...})."""
        from openroutermodels_sdk.entity.list_member_assignment_entity import ListMemberAssignmentEntity
        return ListMemberAssignmentEntity(self, data)


    def ListObservabilityDestination(self, data=None) -> "ListObservabilityDestinationEntity":
        """Entity factory: client.ListObservabilityDestination().list() / client.ListObservabilityDestination().load({"id": ...})."""
        from openroutermodels_sdk.entity.list_observability_destination_entity import ListObservabilityDestinationEntity
        return ListObservabilityDestinationEntity(self, data)


    def ListPreset(self, data=None) -> "ListPresetEntity":
        """Entity factory: client.ListPreset().list() / client.ListPreset().load({"id": ...})."""
        from openroutermodels_sdk.entity.list_preset_entity import ListPresetEntity
        return ListPresetEntity(self, data)


    def ListPresetVersion(self, data=None) -> "ListPresetVersionEntity":
        """Entity factory: client.ListPresetVersion().list() / client.ListPresetVersion().load({"id": ...})."""
        from openroutermodels_sdk.entity.list_preset_version_entity import ListPresetVersionEntity
        return ListPresetVersionEntity(self, data)


    def ListWorkspace(self, data=None) -> "ListWorkspaceEntity":
        """Entity factory: client.ListWorkspace().list() / client.ListWorkspace().load({"id": ...})."""
        from openroutermodels_sdk.entity.list_workspace_entity import ListWorkspaceEntity
        return ListWorkspaceEntity(self, data)


    def ListWorkspaceBudget(self, data=None) -> "ListWorkspaceBudgetEntity":
        """Entity factory: client.ListWorkspaceBudget().list() / client.ListWorkspaceBudget().load({"id": ...})."""
        from openroutermodels_sdk.entity.list_workspace_budget_entity import ListWorkspaceBudgetEntity
        return ListWorkspaceBudgetEntity(self, data)


    def ListWorkspaceMember(self, data=None) -> "ListWorkspaceMemberEntity":
        """Entity factory: client.ListWorkspaceMember().list() / client.ListWorkspaceMember().load({"id": ...})."""
        from openroutermodels_sdk.entity.list_workspace_member_entity import ListWorkspaceMemberEntity
        return ListWorkspaceMemberEntity(self, data)


    def Member(self, data=None) -> "MemberEntity":
        """Entity factory: client.Member().list() / client.Member().load({"id": ...})."""
        from openroutermodels_sdk.entity.member_entity import MemberEntity
        return MemberEntity(self, data)


    def Message(self, data=None) -> "MessageEntity":
        """Entity factory: client.Message().list() / client.Message().load({"id": ...})."""
        from openroutermodels_sdk.entity.message_entity import MessageEntity
        return MessageEntity(self, data)


    def Meta(self, data=None) -> "MetaEntity":
        """Entity factory: client.Meta().list() / client.Meta().load({"id": ...})."""
        from openroutermodels_sdk.entity.meta_entity import MetaEntity
        return MetaEntity(self, data)


    def Model(self, data=None) -> "ModelEntity":
        """Entity factory: client.Model().list() / client.Model().load({"id": ...})."""
        from openroutermodels_sdk.entity.model_entity import ModelEntity
        return ModelEntity(self, data)


    def ModelsCount(self, data=None) -> "ModelsCountEntity":
        """Entity factory: client.ModelsCount().list() / client.ModelsCount().load({"id": ...})."""
        from openroutermodels_sdk.entity.models_count_entity import ModelsCountEntity
        return ModelsCountEntity(self, data)


    def ModelsList(self, data=None) -> "ModelsListEntity":
        """Entity factory: client.ModelsList().list() / client.ModelsList().load({"id": ...})."""
        from openroutermodels_sdk.entity.models_list_entity import ModelsListEntity
        return ModelsListEntity(self, data)


    def OAuth(self, data=None) -> "OAuthEntity":
        """Entity factory: client.OAuth().list() / client.OAuth().load({"id": ...})."""
        from openroutermodels_sdk.entity.o_auth_entity import OAuthEntity
        return OAuthEntity(self, data)


    def ObservabilityDestination(self, data=None) -> "ObservabilityDestinationEntity":
        """Entity factory: client.ObservabilityDestination().list() / client.ObservabilityDestination().load({"id": ...})."""
        from openroutermodels_sdk.entity.observability_destination_entity import ObservabilityDestinationEntity
        return ObservabilityDestinationEntity(self, data)


    def OpenResponsesResult(self, data=None) -> "OpenResponsesResultEntity":
        """Entity factory: client.OpenResponsesResult().list() / client.OpenResponsesResult().load({"id": ...})."""
        from openroutermodels_sdk.entity.open_responses_result_entity import OpenResponsesResultEntity
        return OpenResponsesResultEntity(self, data)


    def Organization(self, data=None) -> "OrganizationEntity":
        """Entity factory: client.Organization().list() / client.Organization().load({"id": ...})."""
        from openroutermodels_sdk.entity.organization_entity import OrganizationEntity
        return OrganizationEntity(self, data)


    def Preset(self, data=None) -> "PresetEntity":
        """Entity factory: client.Preset().list() / client.Preset().load({"id": ...})."""
        from openroutermodels_sdk.entity.preset_entity import PresetEntity
        return PresetEntity(self, data)


    def PresetVersion(self, data=None) -> "PresetVersionEntity":
        """Entity factory: client.PresetVersion().list() / client.PresetVersion().load({"id": ...})."""
        from openroutermodels_sdk.entity.preset_version_entity import PresetVersionEntity
        return PresetVersionEntity(self, data)


    def Provider(self, data=None) -> "ProviderEntity":
        """Entity factory: client.Provider().list() / client.Provider().load({"id": ...})."""
        from openroutermodels_sdk.entity.provider_entity import ProviderEntity
        return ProviderEntity(self, data)


    def Query(self, data=None) -> "QueryEntity":
        """Entity factory: client.Query().list() / client.Query().load({"id": ...})."""
        from openroutermodels_sdk.entity.query_entity import QueryEntity
        return QueryEntity(self, data)


    def RankingsDaily(self, data=None) -> "RankingsDailyEntity":
        """Entity factory: client.RankingsDaily().list() / client.RankingsDaily().load({"id": ...})."""
        from openroutermodels_sdk.entity.rankings_daily_entity import RankingsDailyEntity
        return RankingsDailyEntity(self, data)


    def Remove(self, data=None) -> "RemoveEntity":
        """Entity factory: client.Remove().list() / client.Remove().load({"id": ...})."""
        from openroutermodels_sdk.entity.remove_entity import RemoveEntity
        return RemoveEntity(self, data)


    def Rerank(self, data=None) -> "RerankEntity":
        """Entity factory: client.Rerank().list() / client.Rerank().load({"id": ...})."""
        from openroutermodels_sdk.entity.rerank_entity import RerankEntity
        return RerankEntity(self, data)


    def Response(self, data=None) -> "ResponseEntity":
        """Entity factory: client.Response().list() / client.Response().load({"id": ...})."""
        from openroutermodels_sdk.entity.response_entity import ResponseEntity
        return ResponseEntity(self, data)


    def Speech(self, data=None) -> "SpeechEntity":
        """Entity factory: client.Speech().list() / client.Speech().load({"id": ...})."""
        from openroutermodels_sdk.entity.speech_entity import SpeechEntity
        return SpeechEntity(self, data)


    def Stt(self, data=None) -> "SttEntity":
        """Entity factory: client.Stt().list() / client.Stt().load({"id": ...})."""
        from openroutermodels_sdk.entity.stt_entity import SttEntity
        return SttEntity(self, data)


    def SubmitGenerationFeedback(self, data=None) -> "SubmitGenerationFeedbackEntity":
        """Entity factory: client.SubmitGenerationFeedback().list() / client.SubmitGenerationFeedback().load({"id": ...})."""
        from openroutermodels_sdk.entity.submit_generation_feedback_entity import SubmitGenerationFeedbackEntity
        return SubmitGenerationFeedbackEntity(self, data)


    def Task(self, data=None) -> "TaskEntity":
        """Entity factory: client.Task().list() / client.Task().load({"id": ...})."""
        from openroutermodels_sdk.entity.task_entity import TaskEntity
        return TaskEntity(self, data)


    def Transcription(self, data=None) -> "TranscriptionEntity":
        """Entity factory: client.Transcription().list() / client.Transcription().load({"id": ...})."""
        from openroutermodels_sdk.entity.transcription_entity import TranscriptionEntity
        return TranscriptionEntity(self, data)


    def Tts(self, data=None) -> "TtsEntity":
        """Entity factory: client.Tts().list() / client.Tts().load({"id": ...})."""
        from openroutermodels_sdk.entity.tts_entity import TtsEntity
        return TtsEntity(self, data)


    def UnifiedBenchmark(self, data=None) -> "UnifiedBenchmarkEntity":
        """Entity factory: client.UnifiedBenchmark().list() / client.UnifiedBenchmark().load({"id": ...})."""
        from openroutermodels_sdk.entity.unified_benchmark_entity import UnifiedBenchmarkEntity
        return UnifiedBenchmarkEntity(self, data)


    def UpdateByokKey(self, data=None) -> "UpdateByokKeyEntity":
        """Entity factory: client.UpdateByokKey().list() / client.UpdateByokKey().load({"id": ...})."""
        from openroutermodels_sdk.entity.update_byok_key_entity import UpdateByokKeyEntity
        return UpdateByokKeyEntity(self, data)


    def UpdateGuardrail(self, data=None) -> "UpdateGuardrailEntity":
        """Entity factory: client.UpdateGuardrail().list() / client.UpdateGuardrail().load({"id": ...})."""
        from openroutermodels_sdk.entity.update_guardrail_entity import UpdateGuardrailEntity
        return UpdateGuardrailEntity(self, data)


    def UpdateObservabilityDestination(self, data=None) -> "UpdateObservabilityDestinationEntity":
        """Entity factory: client.UpdateObservabilityDestination().list() / client.UpdateObservabilityDestination().load({"id": ...})."""
        from openroutermodels_sdk.entity.update_observability_destination_entity import UpdateObservabilityDestinationEntity
        return UpdateObservabilityDestinationEntity(self, data)


    def UpdateWorkspace(self, data=None) -> "UpdateWorkspaceEntity":
        """Entity factory: client.UpdateWorkspace().list() / client.UpdateWorkspace().load({"id": ...})."""
        from openroutermodels_sdk.entity.update_workspace_entity import UpdateWorkspaceEntity
        return UpdateWorkspaceEntity(self, data)


    def UpsertWorkspaceBudget(self, data=None) -> "UpsertWorkspaceBudgetEntity":
        """Entity factory: client.UpsertWorkspaceBudget().list() / client.UpsertWorkspaceBudget().load({"id": ...})."""
        from openroutermodels_sdk.entity.upsert_workspace_budget_entity import UpsertWorkspaceBudgetEntity
        return UpsertWorkspaceBudgetEntity(self, data)


    def User(self, data=None) -> "UserEntity":
        """Entity factory: client.User().list() / client.User().load({"id": ...})."""
        from openroutermodels_sdk.entity.user_entity import UserEntity
        return UserEntity(self, data)


    def Version(self, data=None) -> "VersionEntity":
        """Entity factory: client.Version().list() / client.Version().load({"id": ...})."""
        from openroutermodels_sdk.entity.version_entity import VersionEntity
        return VersionEntity(self, data)


    def Video(self, data=None) -> "VideoEntity":
        """Entity factory: client.Video().list() / client.Video().load({"id": ...})."""
        from openroutermodels_sdk.entity.video_entity import VideoEntity
        return VideoEntity(self, data)


    def VideoGeneration(self, data=None) -> "VideoGenerationEntity":
        """Entity factory: client.VideoGeneration().list() / client.VideoGeneration().load({"id": ...})."""
        from openroutermodels_sdk.entity.video_generation_entity import VideoGenerationEntity
        return VideoGenerationEntity(self, data)


    def VideoModelsList(self, data=None) -> "VideoModelsListEntity":
        """Entity factory: client.VideoModelsList().list() / client.VideoModelsList().load({"id": ...})."""
        from openroutermodels_sdk.entity.video_models_list_entity import VideoModelsListEntity
        return VideoModelsListEntity(self, data)


    def Workspace(self, data=None) -> "WorkspaceEntity":
        """Entity factory: client.Workspace().list() / client.Workspace().load({"id": ...})."""
        from openroutermodels_sdk.entity.workspace_entity import WorkspaceEntity
        return WorkspaceEntity(self, data)


    def WorkspaceBudget(self, data=None) -> "WorkspaceBudgetEntity":
        """Entity factory: client.WorkspaceBudget().list() / client.WorkspaceBudget().load({"id": ...})."""
        from openroutermodels_sdk.entity.workspace_budget_entity import WorkspaceBudgetEntity
        return WorkspaceBudgetEntity(self, data)


    def Zdr(self, data=None) -> "ZdrEntity":
        """Entity factory: client.Zdr().list() / client.Zdr().load({"id": ...})."""
        from openroutermodels_sdk.entity.zdr_entity import ZdrEntity
        return ZdrEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "OpenrouterModelsSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from openroutermodels_sdk.entity.activity_entity import ActivityEntity
    from openroutermodels_sdk.entity.add_entity import AddEntity
    from openroutermodels_sdk.entity.api_key_entity import ApiKeyEntity
    from openroutermodels_sdk.entity.app_ranking_entity import AppRankingEntity
    from openroutermodels_sdk.entity.benchmark_entity import BenchmarkEntity
    from openroutermodels_sdk.entity.beta_analytics_entity import BetaAnalyticsEntity
    from openroutermodels_sdk.entity.budget_entity import BudgetEntity
    from openroutermodels_sdk.entity.bulk_add_workspace_member_entity import BulkAddWorkspaceMemberEntity
    from openroutermodels_sdk.entity.bulk_assign_key_entity import BulkAssignKeyEntity
    from openroutermodels_sdk.entity.bulk_assign_member_entity import BulkAssignMemberEntity
    from openroutermodels_sdk.entity.bulk_remove_workspace_member_entity import BulkRemoveWorkspaceMemberEntity
    from openroutermodels_sdk.entity.bulk_unassign_key_entity import BulkUnassignKeyEntity
    from openroutermodels_sdk.entity.bulk_unassign_member_entity import BulkUnassignMemberEntity
    from openroutermodels_sdk.entity.byok_entity import ByokEntity
    from openroutermodels_sdk.entity.chat_result_entity import ChatResultEntity
    from openroutermodels_sdk.entity.code_entity import CodeEntity
    from openroutermodels_sdk.entity.coinbase_entity import CoinbaseEntity
    from openroutermodels_sdk.entity.completion_entity import CompletionEntity
    from openroutermodels_sdk.entity.content_entity import ContentEntity
    from openroutermodels_sdk.entity.count_entity import CountEntity
    from openroutermodels_sdk.entity.create_byok_key_entity import CreateByokKeyEntity
    from openroutermodels_sdk.entity.create_guardrail_entity import CreateGuardrailEntity
    from openroutermodels_sdk.entity.create_observability_destination_entity import CreateObservabilityDestinationEntity
    from openroutermodels_sdk.entity.create_preset_from_inference_entity import CreatePresetFromInferenceEntity
    from openroutermodels_sdk.entity.create_workspace_entity import CreateWorkspaceEntity
    from openroutermodels_sdk.entity.credit_entity import CreditEntity
    from openroutermodels_sdk.entity.destination_entity import DestinationEntity
    from openroutermodels_sdk.entity.embedding_entity import EmbeddingEntity
    from openroutermodels_sdk.entity.endpoint_entity import EndpointEntity
    from openroutermodels_sdk.entity.feedback_entity import FeedbackEntity
    from openroutermodels_sdk.entity.file_entity import FileEntity
    from openroutermodels_sdk.entity.generation_entity import GenerationEntity
    from openroutermodels_sdk.entity.generation_content_entity import GenerationContentEntity
    from openroutermodels_sdk.entity.guardrail_entity import GuardrailEntity
    from openroutermodels_sdk.entity.image_entity import ImageEntity
    from openroutermodels_sdk.entity.image_model_endpoint_entity import ImageModelEndpointEntity
    from openroutermodels_sdk.entity.image_models_list_entity import ImageModelsListEntity
    from openroutermodels_sdk.entity.key_entity import KeyEntity
    from openroutermodels_sdk.entity.list_byok_key_entity import ListByokKeyEntity
    from openroutermodels_sdk.entity.list_guardrail_entity import ListGuardrailEntity
    from openroutermodels_sdk.entity.list_key_assignment_entity import ListKeyAssignmentEntity
    from openroutermodels_sdk.entity.list_member_assignment_entity import ListMemberAssignmentEntity
    from openroutermodels_sdk.entity.list_observability_destination_entity import ListObservabilityDestinationEntity
    from openroutermodels_sdk.entity.list_preset_entity import ListPresetEntity
    from openroutermodels_sdk.entity.list_preset_version_entity import ListPresetVersionEntity
    from openroutermodels_sdk.entity.list_workspace_entity import ListWorkspaceEntity
    from openroutermodels_sdk.entity.list_workspace_budget_entity import ListWorkspaceBudgetEntity
    from openroutermodels_sdk.entity.list_workspace_member_entity import ListWorkspaceMemberEntity
    from openroutermodels_sdk.entity.member_entity import MemberEntity
    from openroutermodels_sdk.entity.message_entity import MessageEntity
    from openroutermodels_sdk.entity.meta_entity import MetaEntity
    from openroutermodels_sdk.entity.model_entity import ModelEntity
    from openroutermodels_sdk.entity.models_count_entity import ModelsCountEntity
    from openroutermodels_sdk.entity.models_list_entity import ModelsListEntity
    from openroutermodels_sdk.entity.o_auth_entity import OAuthEntity
    from openroutermodels_sdk.entity.observability_destination_entity import ObservabilityDestinationEntity
    from openroutermodels_sdk.entity.open_responses_result_entity import OpenResponsesResultEntity
    from openroutermodels_sdk.entity.organization_entity import OrganizationEntity
    from openroutermodels_sdk.entity.preset_entity import PresetEntity
    from openroutermodels_sdk.entity.preset_version_entity import PresetVersionEntity
    from openroutermodels_sdk.entity.provider_entity import ProviderEntity
    from openroutermodels_sdk.entity.query_entity import QueryEntity
    from openroutermodels_sdk.entity.rankings_daily_entity import RankingsDailyEntity
    from openroutermodels_sdk.entity.remove_entity import RemoveEntity
    from openroutermodels_sdk.entity.rerank_entity import RerankEntity
    from openroutermodels_sdk.entity.response_entity import ResponseEntity
    from openroutermodels_sdk.entity.speech_entity import SpeechEntity
    from openroutermodels_sdk.entity.stt_entity import SttEntity
    from openroutermodels_sdk.entity.submit_generation_feedback_entity import SubmitGenerationFeedbackEntity
    from openroutermodels_sdk.entity.task_entity import TaskEntity
    from openroutermodels_sdk.entity.transcription_entity import TranscriptionEntity
    from openroutermodels_sdk.entity.tts_entity import TtsEntity
    from openroutermodels_sdk.entity.unified_benchmark_entity import UnifiedBenchmarkEntity
    from openroutermodels_sdk.entity.update_byok_key_entity import UpdateByokKeyEntity
    from openroutermodels_sdk.entity.update_guardrail_entity import UpdateGuardrailEntity
    from openroutermodels_sdk.entity.update_observability_destination_entity import UpdateObservabilityDestinationEntity
    from openroutermodels_sdk.entity.update_workspace_entity import UpdateWorkspaceEntity
    from openroutermodels_sdk.entity.upsert_workspace_budget_entity import UpsertWorkspaceBudgetEntity
    from openroutermodels_sdk.entity.user_entity import UserEntity
    from openroutermodels_sdk.entity.version_entity import VersionEntity
    from openroutermodels_sdk.entity.video_entity import VideoEntity
    from openroutermodels_sdk.entity.video_generation_entity import VideoGenerationEntity
    from openroutermodels_sdk.entity.video_models_list_entity import VideoModelsListEntity
    from openroutermodels_sdk.entity.workspace_entity import WorkspaceEntity
    from openroutermodels_sdk.entity.workspace_budget_entity import WorkspaceBudgetEntity
    from openroutermodels_sdk.entity.zdr_entity import ZdrEntity
