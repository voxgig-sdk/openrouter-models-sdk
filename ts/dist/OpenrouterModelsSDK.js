"use strict";
// OpenrouterModels Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.OpenrouterModelsSDK = exports.OpenrouterModelsEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const ActivityEntity_1 = require("./entity/ActivityEntity");
const AddEntity_1 = require("./entity/AddEntity");
const ApiKeyEntity_1 = require("./entity/ApiKeyEntity");
const AppRankingEntity_1 = require("./entity/AppRankingEntity");
const BenchmarkEntity_1 = require("./entity/BenchmarkEntity");
const BetaAnalyticsEntity_1 = require("./entity/BetaAnalyticsEntity");
const BudgetEntity_1 = require("./entity/BudgetEntity");
const BulkAddWorkspaceMemberEntity_1 = require("./entity/BulkAddWorkspaceMemberEntity");
const BulkAssignKeyEntity_1 = require("./entity/BulkAssignKeyEntity");
const BulkAssignMemberEntity_1 = require("./entity/BulkAssignMemberEntity");
const BulkRemoveWorkspaceMemberEntity_1 = require("./entity/BulkRemoveWorkspaceMemberEntity");
const BulkUnassignKeyEntity_1 = require("./entity/BulkUnassignKeyEntity");
const BulkUnassignMemberEntity_1 = require("./entity/BulkUnassignMemberEntity");
const ByokEntity_1 = require("./entity/ByokEntity");
const ChatResultEntity_1 = require("./entity/ChatResultEntity");
const CodeEntity_1 = require("./entity/CodeEntity");
const CoinbaseEntity_1 = require("./entity/CoinbaseEntity");
const CompletionEntity_1 = require("./entity/CompletionEntity");
const ContentEntity_1 = require("./entity/ContentEntity");
const CountEntity_1 = require("./entity/CountEntity");
const CreateByokKeyEntity_1 = require("./entity/CreateByokKeyEntity");
const CreateGuardrailEntity_1 = require("./entity/CreateGuardrailEntity");
const CreateObservabilityDestinationEntity_1 = require("./entity/CreateObservabilityDestinationEntity");
const CreatePresetFromInferenceEntity_1 = require("./entity/CreatePresetFromInferenceEntity");
const CreateWorkspaceEntity_1 = require("./entity/CreateWorkspaceEntity");
const CreditEntity_1 = require("./entity/CreditEntity");
const DestinationEntity_1 = require("./entity/DestinationEntity");
const EmbeddingEntity_1 = require("./entity/EmbeddingEntity");
const EndpointEntity_1 = require("./entity/EndpointEntity");
const FeedbackEntity_1 = require("./entity/FeedbackEntity");
const FileEntity_1 = require("./entity/FileEntity");
const GenerationEntity_1 = require("./entity/GenerationEntity");
const GenerationContentEntity_1 = require("./entity/GenerationContentEntity");
const GuardrailEntity_1 = require("./entity/GuardrailEntity");
const ImageEntity_1 = require("./entity/ImageEntity");
const ImageModelEndpointEntity_1 = require("./entity/ImageModelEndpointEntity");
const ImageModelsListEntity_1 = require("./entity/ImageModelsListEntity");
const KeyEntity_1 = require("./entity/KeyEntity");
const ListByokKeyEntity_1 = require("./entity/ListByokKeyEntity");
const ListGuardrailEntity_1 = require("./entity/ListGuardrailEntity");
const ListKeyAssignmentEntity_1 = require("./entity/ListKeyAssignmentEntity");
const ListMemberAssignmentEntity_1 = require("./entity/ListMemberAssignmentEntity");
const ListObservabilityDestinationEntity_1 = require("./entity/ListObservabilityDestinationEntity");
const ListPresetEntity_1 = require("./entity/ListPresetEntity");
const ListPresetVersionEntity_1 = require("./entity/ListPresetVersionEntity");
const ListWorkspaceEntity_1 = require("./entity/ListWorkspaceEntity");
const ListWorkspaceBudgetEntity_1 = require("./entity/ListWorkspaceBudgetEntity");
const ListWorkspaceMemberEntity_1 = require("./entity/ListWorkspaceMemberEntity");
const MemberEntity_1 = require("./entity/MemberEntity");
const MessageEntity_1 = require("./entity/MessageEntity");
const MetaEntity_1 = require("./entity/MetaEntity");
const ModelEntity_1 = require("./entity/ModelEntity");
const ModelsCountEntity_1 = require("./entity/ModelsCountEntity");
const ModelsListEntity_1 = require("./entity/ModelsListEntity");
const OAuthEntity_1 = require("./entity/OAuthEntity");
const ObservabilityDestinationEntity_1 = require("./entity/ObservabilityDestinationEntity");
const OpenResponsesResultEntity_1 = require("./entity/OpenResponsesResultEntity");
const OrganizationEntity_1 = require("./entity/OrganizationEntity");
const PresetEntity_1 = require("./entity/PresetEntity");
const PresetVersionEntity_1 = require("./entity/PresetVersionEntity");
const ProviderEntity_1 = require("./entity/ProviderEntity");
const QueryEntity_1 = require("./entity/QueryEntity");
const RankingsDailyEntity_1 = require("./entity/RankingsDailyEntity");
const RemoveEntity_1 = require("./entity/RemoveEntity");
const RerankEntity_1 = require("./entity/RerankEntity");
const ResponseEntity_1 = require("./entity/ResponseEntity");
const SpeechEntity_1 = require("./entity/SpeechEntity");
const SttEntity_1 = require("./entity/SttEntity");
const SubmitGenerationFeedbackEntity_1 = require("./entity/SubmitGenerationFeedbackEntity");
const TaskEntity_1 = require("./entity/TaskEntity");
const TranscriptionEntity_1 = require("./entity/TranscriptionEntity");
const TtsEntity_1 = require("./entity/TtsEntity");
const UnifiedBenchmarkEntity_1 = require("./entity/UnifiedBenchmarkEntity");
const UpdateByokKeyEntity_1 = require("./entity/UpdateByokKeyEntity");
const UpdateGuardrailEntity_1 = require("./entity/UpdateGuardrailEntity");
const UpdateObservabilityDestinationEntity_1 = require("./entity/UpdateObservabilityDestinationEntity");
const UpdateWorkspaceEntity_1 = require("./entity/UpdateWorkspaceEntity");
const UpsertWorkspaceBudgetEntity_1 = require("./entity/UpsertWorkspaceBudgetEntity");
const UserEntity_1 = require("./entity/UserEntity");
const VersionEntity_1 = require("./entity/VersionEntity");
const VideoEntity_1 = require("./entity/VideoEntity");
const VideoGenerationEntity_1 = require("./entity/VideoGenerationEntity");
const VideoModelsListEntity_1 = require("./entity/VideoModelsListEntity");
const WorkspaceEntity_1 = require("./entity/WorkspaceEntity");
const WorkspaceBudgetEntity_1 = require("./entity/WorkspaceBudgetEntity");
const ZdrEntity_1 = require("./entity/ZdrEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const OpenrouterModelsEntityBase_1 = require("./OpenrouterModelsEntityBase");
Object.defineProperty(exports, "OpenrouterModelsEntityBase", { enumerable: true, get: function () { return OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class OpenrouterModelsSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        // Build spec directly from SDK options + user-provided fetch args.
        const spec = {
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
        };
        ctx.spec = spec;
        // Merge user-provided headers over SDK defaults.
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        // Apply SDK auth (apikey, auth prefix, etc.)
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('OpenrouterModelsSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path `direct` uses, with the
    // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report a
    // failed query as ok.
    //
    // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('OpenrouterModelsSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('OpenrouterModelsSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Activity().list()` / `client.Activity().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Activity(entopts) {
        const self = this;
        return new ActivityEntity_1.ActivityEntity(self, entopts);
    }
    // Entity access: `client.Add().list()` / `client.Add().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Add(entopts) {
        const self = this;
        return new AddEntity_1.AddEntity(self, entopts);
    }
    // Entity access: `client.ApiKey().list()` / `client.ApiKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiKey(entopts) {
        const self = this;
        return new ApiKeyEntity_1.ApiKeyEntity(self, entopts);
    }
    // Entity access: `client.AppRanking().list()` / `client.AppRanking().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AppRanking(entopts) {
        const self = this;
        return new AppRankingEntity_1.AppRankingEntity(self, entopts);
    }
    // Entity access: `client.Benchmark().list()` / `client.Benchmark().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Benchmark(entopts) {
        const self = this;
        return new BenchmarkEntity_1.BenchmarkEntity(self, entopts);
    }
    // Entity access: `client.BetaAnalytics().list()` / `client.BetaAnalytics().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BetaAnalytics(entopts) {
        const self = this;
        return new BetaAnalyticsEntity_1.BetaAnalyticsEntity(self, entopts);
    }
    // Entity access: `client.Budget().list()` / `client.Budget().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Budget(entopts) {
        const self = this;
        return new BudgetEntity_1.BudgetEntity(self, entopts);
    }
    // Entity access: `client.BulkAddWorkspaceMember().list()` / `client.BulkAddWorkspaceMember().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BulkAddWorkspaceMember(entopts) {
        const self = this;
        return new BulkAddWorkspaceMemberEntity_1.BulkAddWorkspaceMemberEntity(self, entopts);
    }
    // Entity access: `client.BulkAssignKey().list()` / `client.BulkAssignKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BulkAssignKey(entopts) {
        const self = this;
        return new BulkAssignKeyEntity_1.BulkAssignKeyEntity(self, entopts);
    }
    // Entity access: `client.BulkAssignMember().list()` / `client.BulkAssignMember().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BulkAssignMember(entopts) {
        const self = this;
        return new BulkAssignMemberEntity_1.BulkAssignMemberEntity(self, entopts);
    }
    // Entity access: `client.BulkRemoveWorkspaceMember().list()` / `client.BulkRemoveWorkspaceMember().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BulkRemoveWorkspaceMember(entopts) {
        const self = this;
        return new BulkRemoveWorkspaceMemberEntity_1.BulkRemoveWorkspaceMemberEntity(self, entopts);
    }
    // Entity access: `client.BulkUnassignKey().list()` / `client.BulkUnassignKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BulkUnassignKey(entopts) {
        const self = this;
        return new BulkUnassignKeyEntity_1.BulkUnassignKeyEntity(self, entopts);
    }
    // Entity access: `client.BulkUnassignMember().list()` / `client.BulkUnassignMember().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BulkUnassignMember(entopts) {
        const self = this;
        return new BulkUnassignMemberEntity_1.BulkUnassignMemberEntity(self, entopts);
    }
    // Entity access: `client.Byok().list()` / `client.Byok().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Byok(entopts) {
        const self = this;
        return new ByokEntity_1.ByokEntity(self, entopts);
    }
    // Entity access: `client.ChatResult().list()` / `client.ChatResult().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ChatResult(entopts) {
        const self = this;
        return new ChatResultEntity_1.ChatResultEntity(self, entopts);
    }
    // Entity access: `client.Code().list()` / `client.Code().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Code(entopts) {
        const self = this;
        return new CodeEntity_1.CodeEntity(self, entopts);
    }
    // Entity access: `client.Coinbase().list()` / `client.Coinbase().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Coinbase(entopts) {
        const self = this;
        return new CoinbaseEntity_1.CoinbaseEntity(self, entopts);
    }
    // Entity access: `client.Completion().list()` / `client.Completion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Completion(entopts) {
        const self = this;
        return new CompletionEntity_1.CompletionEntity(self, entopts);
    }
    // Entity access: `client.Content().list()` / `client.Content().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Content(entopts) {
        const self = this;
        return new ContentEntity_1.ContentEntity(self, entopts);
    }
    // Entity access: `client.Count().list()` / `client.Count().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Count(entopts) {
        const self = this;
        return new CountEntity_1.CountEntity(self, entopts);
    }
    // Entity access: `client.CreateByokKey().list()` / `client.CreateByokKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateByokKey(entopts) {
        const self = this;
        return new CreateByokKeyEntity_1.CreateByokKeyEntity(self, entopts);
    }
    // Entity access: `client.CreateGuardrail().list()` / `client.CreateGuardrail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateGuardrail(entopts) {
        const self = this;
        return new CreateGuardrailEntity_1.CreateGuardrailEntity(self, entopts);
    }
    // Entity access: `client.CreateObservabilityDestination().list()` / `client.CreateObservabilityDestination().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateObservabilityDestination(entopts) {
        const self = this;
        return new CreateObservabilityDestinationEntity_1.CreateObservabilityDestinationEntity(self, entopts);
    }
    // Entity access: `client.CreatePresetFromInference().list()` / `client.CreatePresetFromInference().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreatePresetFromInference(entopts) {
        const self = this;
        return new CreatePresetFromInferenceEntity_1.CreatePresetFromInferenceEntity(self, entopts);
    }
    // Entity access: `client.CreateWorkspace().list()` / `client.CreateWorkspace().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateWorkspace(entopts) {
        const self = this;
        return new CreateWorkspaceEntity_1.CreateWorkspaceEntity(self, entopts);
    }
    // Entity access: `client.Credit().list()` / `client.Credit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Credit(entopts) {
        const self = this;
        return new CreditEntity_1.CreditEntity(self, entopts);
    }
    // Entity access: `client.Destination().list()` / `client.Destination().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Destination(entopts) {
        const self = this;
        return new DestinationEntity_1.DestinationEntity(self, entopts);
    }
    // Entity access: `client.Embedding().list()` / `client.Embedding().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Embedding(entopts) {
        const self = this;
        return new EmbeddingEntity_1.EmbeddingEntity(self, entopts);
    }
    // Entity access: `client.Endpoint().list()` / `client.Endpoint().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Endpoint(entopts) {
        const self = this;
        return new EndpointEntity_1.EndpointEntity(self, entopts);
    }
    // Entity access: `client.Feedback().list()` / `client.Feedback().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Feedback(entopts) {
        const self = this;
        return new FeedbackEntity_1.FeedbackEntity(self, entopts);
    }
    // Entity access: `client.File().list()` / `client.File().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    File(entopts) {
        const self = this;
        return new FileEntity_1.FileEntity(self, entopts);
    }
    // Entity access: `client.Generation().list()` / `client.Generation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Generation(entopts) {
        const self = this;
        return new GenerationEntity_1.GenerationEntity(self, entopts);
    }
    // Entity access: `client.GenerationContent().list()` / `client.GenerationContent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GenerationContent(entopts) {
        const self = this;
        return new GenerationContentEntity_1.GenerationContentEntity(self, entopts);
    }
    // Entity access: `client.Guardrail().list()` / `client.Guardrail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Guardrail(entopts) {
        const self = this;
        return new GuardrailEntity_1.GuardrailEntity(self, entopts);
    }
    // Entity access: `client.Image().list()` / `client.Image().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Image(entopts) {
        const self = this;
        return new ImageEntity_1.ImageEntity(self, entopts);
    }
    // Entity access: `client.ImageModelEndpoint().list()` / `client.ImageModelEndpoint().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ImageModelEndpoint(entopts) {
        const self = this;
        return new ImageModelEndpointEntity_1.ImageModelEndpointEntity(self, entopts);
    }
    // Entity access: `client.ImageModelsList().list()` / `client.ImageModelsList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ImageModelsList(entopts) {
        const self = this;
        return new ImageModelsListEntity_1.ImageModelsListEntity(self, entopts);
    }
    // Entity access: `client.Key().list()` / `client.Key().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Key(entopts) {
        const self = this;
        return new KeyEntity_1.KeyEntity(self, entopts);
    }
    // Entity access: `client.ListByokKey().list()` / `client.ListByokKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListByokKey(entopts) {
        const self = this;
        return new ListByokKeyEntity_1.ListByokKeyEntity(self, entopts);
    }
    // Entity access: `client.ListGuardrail().list()` / `client.ListGuardrail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListGuardrail(entopts) {
        const self = this;
        return new ListGuardrailEntity_1.ListGuardrailEntity(self, entopts);
    }
    // Entity access: `client.ListKeyAssignment().list()` / `client.ListKeyAssignment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListKeyAssignment(entopts) {
        const self = this;
        return new ListKeyAssignmentEntity_1.ListKeyAssignmentEntity(self, entopts);
    }
    // Entity access: `client.ListMemberAssignment().list()` / `client.ListMemberAssignment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListMemberAssignment(entopts) {
        const self = this;
        return new ListMemberAssignmentEntity_1.ListMemberAssignmentEntity(self, entopts);
    }
    // Entity access: `client.ListObservabilityDestination().list()` / `client.ListObservabilityDestination().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListObservabilityDestination(entopts) {
        const self = this;
        return new ListObservabilityDestinationEntity_1.ListObservabilityDestinationEntity(self, entopts);
    }
    // Entity access: `client.ListPreset().list()` / `client.ListPreset().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListPreset(entopts) {
        const self = this;
        return new ListPresetEntity_1.ListPresetEntity(self, entopts);
    }
    // Entity access: `client.ListPresetVersion().list()` / `client.ListPresetVersion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListPresetVersion(entopts) {
        const self = this;
        return new ListPresetVersionEntity_1.ListPresetVersionEntity(self, entopts);
    }
    // Entity access: `client.ListWorkspace().list()` / `client.ListWorkspace().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListWorkspace(entopts) {
        const self = this;
        return new ListWorkspaceEntity_1.ListWorkspaceEntity(self, entopts);
    }
    // Entity access: `client.ListWorkspaceBudget().list()` / `client.ListWorkspaceBudget().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListWorkspaceBudget(entopts) {
        const self = this;
        return new ListWorkspaceBudgetEntity_1.ListWorkspaceBudgetEntity(self, entopts);
    }
    // Entity access: `client.ListWorkspaceMember().list()` / `client.ListWorkspaceMember().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListWorkspaceMember(entopts) {
        const self = this;
        return new ListWorkspaceMemberEntity_1.ListWorkspaceMemberEntity(self, entopts);
    }
    // Entity access: `client.Member().list()` / `client.Member().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Member(entopts) {
        const self = this;
        return new MemberEntity_1.MemberEntity(self, entopts);
    }
    // Entity access: `client.Message().list()` / `client.Message().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Message(entopts) {
        const self = this;
        return new MessageEntity_1.MessageEntity(self, entopts);
    }
    // Entity access: `client.Meta().list()` / `client.Meta().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Meta(entopts) {
        const self = this;
        return new MetaEntity_1.MetaEntity(self, entopts);
    }
    // Entity access: `client.Model().list()` / `client.Model().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Model(entopts) {
        const self = this;
        return new ModelEntity_1.ModelEntity(self, entopts);
    }
    // Entity access: `client.ModelsCount().list()` / `client.ModelsCount().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ModelsCount(entopts) {
        const self = this;
        return new ModelsCountEntity_1.ModelsCountEntity(self, entopts);
    }
    // Entity access: `client.ModelsList().list()` / `client.ModelsList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ModelsList(entopts) {
        const self = this;
        return new ModelsListEntity_1.ModelsListEntity(self, entopts);
    }
    // Entity access: `client.OAuth().list()` / `client.OAuth().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OAuth(entopts) {
        const self = this;
        return new OAuthEntity_1.OAuthEntity(self, entopts);
    }
    // Entity access: `client.ObservabilityDestination().list()` / `client.ObservabilityDestination().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ObservabilityDestination(entopts) {
        const self = this;
        return new ObservabilityDestinationEntity_1.ObservabilityDestinationEntity(self, entopts);
    }
    // Entity access: `client.OpenResponsesResult().list()` / `client.OpenResponsesResult().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OpenResponsesResult(entopts) {
        const self = this;
        return new OpenResponsesResultEntity_1.OpenResponsesResultEntity(self, entopts);
    }
    // Entity access: `client.Organization().list()` / `client.Organization().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Organization(entopts) {
        const self = this;
        return new OrganizationEntity_1.OrganizationEntity(self, entopts);
    }
    // Entity access: `client.Preset().list()` / `client.Preset().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Preset(entopts) {
        const self = this;
        return new PresetEntity_1.PresetEntity(self, entopts);
    }
    // Entity access: `client.PresetVersion().list()` / `client.PresetVersion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PresetVersion(entopts) {
        const self = this;
        return new PresetVersionEntity_1.PresetVersionEntity(self, entopts);
    }
    // Entity access: `client.Provider().list()` / `client.Provider().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Provider(entopts) {
        const self = this;
        return new ProviderEntity_1.ProviderEntity(self, entopts);
    }
    // Entity access: `client.Query().list()` / `client.Query().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Query(entopts) {
        const self = this;
        return new QueryEntity_1.QueryEntity(self, entopts);
    }
    // Entity access: `client.RankingsDaily().list()` / `client.RankingsDaily().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RankingsDaily(entopts) {
        const self = this;
        return new RankingsDailyEntity_1.RankingsDailyEntity(self, entopts);
    }
    // Entity access: `client.Remove().list()` / `client.Remove().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Remove(entopts) {
        const self = this;
        return new RemoveEntity_1.RemoveEntity(self, entopts);
    }
    // Entity access: `client.Rerank().list()` / `client.Rerank().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Rerank(entopts) {
        const self = this;
        return new RerankEntity_1.RerankEntity(self, entopts);
    }
    // Entity access: `client.Response().list()` / `client.Response().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Response(entopts) {
        const self = this;
        return new ResponseEntity_1.ResponseEntity(self, entopts);
    }
    // Entity access: `client.Speech().list()` / `client.Speech().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Speech(entopts) {
        const self = this;
        return new SpeechEntity_1.SpeechEntity(self, entopts);
    }
    // Entity access: `client.Stt().list()` / `client.Stt().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Stt(entopts) {
        const self = this;
        return new SttEntity_1.SttEntity(self, entopts);
    }
    // Entity access: `client.SubmitGenerationFeedback().list()` / `client.SubmitGenerationFeedback().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubmitGenerationFeedback(entopts) {
        const self = this;
        return new SubmitGenerationFeedbackEntity_1.SubmitGenerationFeedbackEntity(self, entopts);
    }
    // Entity access: `client.Task().list()` / `client.Task().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Task(entopts) {
        const self = this;
        return new TaskEntity_1.TaskEntity(self, entopts);
    }
    // Entity access: `client.Transcription().list()` / `client.Transcription().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Transcription(entopts) {
        const self = this;
        return new TranscriptionEntity_1.TranscriptionEntity(self, entopts);
    }
    // Entity access: `client.Tts().list()` / `client.Tts().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Tts(entopts) {
        const self = this;
        return new TtsEntity_1.TtsEntity(self, entopts);
    }
    // Entity access: `client.UnifiedBenchmark().list()` / `client.UnifiedBenchmark().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UnifiedBenchmark(entopts) {
        const self = this;
        return new UnifiedBenchmarkEntity_1.UnifiedBenchmarkEntity(self, entopts);
    }
    // Entity access: `client.UpdateByokKey().list()` / `client.UpdateByokKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateByokKey(entopts) {
        const self = this;
        return new UpdateByokKeyEntity_1.UpdateByokKeyEntity(self, entopts);
    }
    // Entity access: `client.UpdateGuardrail().list()` / `client.UpdateGuardrail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateGuardrail(entopts) {
        const self = this;
        return new UpdateGuardrailEntity_1.UpdateGuardrailEntity(self, entopts);
    }
    // Entity access: `client.UpdateObservabilityDestination().list()` / `client.UpdateObservabilityDestination().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateObservabilityDestination(entopts) {
        const self = this;
        return new UpdateObservabilityDestinationEntity_1.UpdateObservabilityDestinationEntity(self, entopts);
    }
    // Entity access: `client.UpdateWorkspace().list()` / `client.UpdateWorkspace().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateWorkspace(entopts) {
        const self = this;
        return new UpdateWorkspaceEntity_1.UpdateWorkspaceEntity(self, entopts);
    }
    // Entity access: `client.UpsertWorkspaceBudget().list()` / `client.UpsertWorkspaceBudget().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpsertWorkspaceBudget(entopts) {
        const self = this;
        return new UpsertWorkspaceBudgetEntity_1.UpsertWorkspaceBudgetEntity(self, entopts);
    }
    // Entity access: `client.User().list()` / `client.User().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    User(entopts) {
        const self = this;
        return new UserEntity_1.UserEntity(self, entopts);
    }
    // Entity access: `client.Version().list()` / `client.Version().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Version(entopts) {
        const self = this;
        return new VersionEntity_1.VersionEntity(self, entopts);
    }
    // Entity access: `client.Video().list()` / `client.Video().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Video(entopts) {
        const self = this;
        return new VideoEntity_1.VideoEntity(self, entopts);
    }
    // Entity access: `client.VideoGeneration().list()` / `client.VideoGeneration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    VideoGeneration(entopts) {
        const self = this;
        return new VideoGenerationEntity_1.VideoGenerationEntity(self, entopts);
    }
    // Entity access: `client.VideoModelsList().list()` / `client.VideoModelsList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    VideoModelsList(entopts) {
        const self = this;
        return new VideoModelsListEntity_1.VideoModelsListEntity(self, entopts);
    }
    // Entity access: `client.Workspace().list()` / `client.Workspace().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Workspace(entopts) {
        const self = this;
        return new WorkspaceEntity_1.WorkspaceEntity(self, entopts);
    }
    // Entity access: `client.WorkspaceBudget().list()` / `client.WorkspaceBudget().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkspaceBudget(entopts) {
        const self = this;
        return new WorkspaceBudgetEntity_1.WorkspaceBudgetEntity(self, entopts);
    }
    // Entity access: `client.Zdr().list()` / `client.Zdr().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Zdr(entopts) {
        const self = this;
        return new ZdrEntity_1.ZdrEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new OpenrouterModelsSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return OpenrouterModelsSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'OpenrouterModels' };
    }
    toString() {
        return 'OpenrouterModels ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.OpenrouterModelsSDK = OpenrouterModelsSDK;
const SDK = OpenrouterModelsSDK;
exports.SDK = SDK;
//# sourceMappingURL=OpenrouterModelsSDK.js.map