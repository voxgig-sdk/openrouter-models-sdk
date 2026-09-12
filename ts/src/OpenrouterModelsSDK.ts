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
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
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


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('OpenrouterModelsSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
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
  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('OpenrouterModelsSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('OpenrouterModelsSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Activity().list()` / `client.Activity().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Activity(entopts?: Record<string, any>) {
    const self = this
    return new ActivityEntity(self, entopts)
  }


  // Entity access: `client.Add().list()` / `client.Add().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Add(entopts?: Record<string, any>) {
    const self = this
    return new AddEntity(self, entopts)
  }


  // Entity access: `client.ApiKey().list()` / `client.ApiKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiKey(entopts?: Record<string, any>) {
    const self = this
    return new ApiKeyEntity(self, entopts)
  }


  // Entity access: `client.AppRanking().list()` / `client.AppRanking().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AppRanking(entopts?: Record<string, any>) {
    const self = this
    return new AppRankingEntity(self, entopts)
  }


  // Entity access: `client.Benchmark().list()` / `client.Benchmark().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Benchmark(entopts?: Record<string, any>) {
    const self = this
    return new BenchmarkEntity(self, entopts)
  }


  // Entity access: `client.BetaAnalytics().list()` / `client.BetaAnalytics().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BetaAnalytics(entopts?: Record<string, any>) {
    const self = this
    return new BetaAnalyticsEntity(self, entopts)
  }


  // Entity access: `client.Budget().list()` / `client.Budget().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Budget(entopts?: Record<string, any>) {
    const self = this
    return new BudgetEntity(self, entopts)
  }


  // Entity access: `client.BulkAddWorkspaceMember().list()` / `client.BulkAddWorkspaceMember().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BulkAddWorkspaceMember(entopts?: Record<string, any>) {
    const self = this
    return new BulkAddWorkspaceMemberEntity(self, entopts)
  }


  // Entity access: `client.BulkAssignKey().list()` / `client.BulkAssignKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BulkAssignKey(entopts?: Record<string, any>) {
    const self = this
    return new BulkAssignKeyEntity(self, entopts)
  }


  // Entity access: `client.BulkAssignMember().list()` / `client.BulkAssignMember().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BulkAssignMember(entopts?: Record<string, any>) {
    const self = this
    return new BulkAssignMemberEntity(self, entopts)
  }


  // Entity access: `client.BulkRemoveWorkspaceMember().list()` / `client.BulkRemoveWorkspaceMember().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BulkRemoveWorkspaceMember(entopts?: Record<string, any>) {
    const self = this
    return new BulkRemoveWorkspaceMemberEntity(self, entopts)
  }


  // Entity access: `client.BulkUnassignKey().list()` / `client.BulkUnassignKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BulkUnassignKey(entopts?: Record<string, any>) {
    const self = this
    return new BulkUnassignKeyEntity(self, entopts)
  }


  // Entity access: `client.BulkUnassignMember().list()` / `client.BulkUnassignMember().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BulkUnassignMember(entopts?: Record<string, any>) {
    const self = this
    return new BulkUnassignMemberEntity(self, entopts)
  }


  // Entity access: `client.Byok().list()` / `client.Byok().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Byok(entopts?: Record<string, any>) {
    const self = this
    return new ByokEntity(self, entopts)
  }


  // Entity access: `client.ChatResult().list()` / `client.ChatResult().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ChatResult(entopts?: Record<string, any>) {
    const self = this
    return new ChatResultEntity(self, entopts)
  }


  // Entity access: `client.Code().list()` / `client.Code().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Code(entopts?: Record<string, any>) {
    const self = this
    return new CodeEntity(self, entopts)
  }


  // Entity access: `client.Coinbase().list()` / `client.Coinbase().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Coinbase(entopts?: Record<string, any>) {
    const self = this
    return new CoinbaseEntity(self, entopts)
  }


  // Entity access: `client.Completion().list()` / `client.Completion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Completion(entopts?: Record<string, any>) {
    const self = this
    return new CompletionEntity(self, entopts)
  }


  // Entity access: `client.Content().list()` / `client.Content().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Content(entopts?: Record<string, any>) {
    const self = this
    return new ContentEntity(self, entopts)
  }


  // Entity access: `client.Count().list()` / `client.Count().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Count(entopts?: Record<string, any>) {
    const self = this
    return new CountEntity(self, entopts)
  }


  // Entity access: `client.CreateByokKey().list()` / `client.CreateByokKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreateByokKey(entopts?: Record<string, any>) {
    const self = this
    return new CreateByokKeyEntity(self, entopts)
  }


  // Entity access: `client.CreateGuardrail().list()` / `client.CreateGuardrail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreateGuardrail(entopts?: Record<string, any>) {
    const self = this
    return new CreateGuardrailEntity(self, entopts)
  }


  // Entity access: `client.CreateObservabilityDestination().list()` / `client.CreateObservabilityDestination().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreateObservabilityDestination(entopts?: Record<string, any>) {
    const self = this
    return new CreateObservabilityDestinationEntity(self, entopts)
  }


  // Entity access: `client.CreatePresetFromInference().list()` / `client.CreatePresetFromInference().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreatePresetFromInference(entopts?: Record<string, any>) {
    const self = this
    return new CreatePresetFromInferenceEntity(self, entopts)
  }


  // Entity access: `client.CreateWorkspace().list()` / `client.CreateWorkspace().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreateWorkspace(entopts?: Record<string, any>) {
    const self = this
    return new CreateWorkspaceEntity(self, entopts)
  }


  // Entity access: `client.Credit().list()` / `client.Credit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Credit(entopts?: Record<string, any>) {
    const self = this
    return new CreditEntity(self, entopts)
  }


  // Entity access: `client.Destination().list()` / `client.Destination().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Destination(entopts?: Record<string, any>) {
    const self = this
    return new DestinationEntity(self, entopts)
  }


  // Entity access: `client.Embedding().list()` / `client.Embedding().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Embedding(entopts?: Record<string, any>) {
    const self = this
    return new EmbeddingEntity(self, entopts)
  }


  // Entity access: `client.Endpoint().list()` / `client.Endpoint().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Endpoint(entopts?: Record<string, any>) {
    const self = this
    return new EndpointEntity(self, entopts)
  }


  // Entity access: `client.Feedback().list()` / `client.Feedback().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Feedback(entopts?: Record<string, any>) {
    const self = this
    return new FeedbackEntity(self, entopts)
  }


  // Entity access: `client.File().list()` / `client.File().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  File(entopts?: Record<string, any>) {
    const self = this
    return new FileEntity(self, entopts)
  }


  // Entity access: `client.Generation().list()` / `client.Generation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Generation(entopts?: Record<string, any>) {
    const self = this
    return new GenerationEntity(self, entopts)
  }


  // Entity access: `client.GenerationContent().list()` / `client.GenerationContent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GenerationContent(entopts?: Record<string, any>) {
    const self = this
    return new GenerationContentEntity(self, entopts)
  }


  // Entity access: `client.Guardrail().list()` / `client.Guardrail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Guardrail(entopts?: Record<string, any>) {
    const self = this
    return new GuardrailEntity(self, entopts)
  }


  // Entity access: `client.Image().list()` / `client.Image().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Image(entopts?: Record<string, any>) {
    const self = this
    return new ImageEntity(self, entopts)
  }


  // Entity access: `client.ImageModelEndpoint().list()` / `client.ImageModelEndpoint().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ImageModelEndpoint(entopts?: Record<string, any>) {
    const self = this
    return new ImageModelEndpointEntity(self, entopts)
  }


  // Entity access: `client.ImageModelsList().list()` / `client.ImageModelsList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ImageModelsList(entopts?: Record<string, any>) {
    const self = this
    return new ImageModelsListEntity(self, entopts)
  }


  // Entity access: `client.Key().list()` / `client.Key().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Key(entopts?: Record<string, any>) {
    const self = this
    return new KeyEntity(self, entopts)
  }


  // Entity access: `client.ListByokKey().list()` / `client.ListByokKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListByokKey(entopts?: Record<string, any>) {
    const self = this
    return new ListByokKeyEntity(self, entopts)
  }


  // Entity access: `client.ListGuardrail().list()` / `client.ListGuardrail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListGuardrail(entopts?: Record<string, any>) {
    const self = this
    return new ListGuardrailEntity(self, entopts)
  }


  // Entity access: `client.ListKeyAssignment().list()` / `client.ListKeyAssignment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListKeyAssignment(entopts?: Record<string, any>) {
    const self = this
    return new ListKeyAssignmentEntity(self, entopts)
  }


  // Entity access: `client.ListMemberAssignment().list()` / `client.ListMemberAssignment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListMemberAssignment(entopts?: Record<string, any>) {
    const self = this
    return new ListMemberAssignmentEntity(self, entopts)
  }


  // Entity access: `client.ListObservabilityDestination().list()` / `client.ListObservabilityDestination().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListObservabilityDestination(entopts?: Record<string, any>) {
    const self = this
    return new ListObservabilityDestinationEntity(self, entopts)
  }


  // Entity access: `client.ListPreset().list()` / `client.ListPreset().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListPreset(entopts?: Record<string, any>) {
    const self = this
    return new ListPresetEntity(self, entopts)
  }


  // Entity access: `client.ListPresetVersion().list()` / `client.ListPresetVersion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListPresetVersion(entopts?: Record<string, any>) {
    const self = this
    return new ListPresetVersionEntity(self, entopts)
  }


  // Entity access: `client.ListWorkspace().list()` / `client.ListWorkspace().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListWorkspace(entopts?: Record<string, any>) {
    const self = this
    return new ListWorkspaceEntity(self, entopts)
  }


  // Entity access: `client.ListWorkspaceBudget().list()` / `client.ListWorkspaceBudget().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListWorkspaceBudget(entopts?: Record<string, any>) {
    const self = this
    return new ListWorkspaceBudgetEntity(self, entopts)
  }


  // Entity access: `client.ListWorkspaceMember().list()` / `client.ListWorkspaceMember().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListWorkspaceMember(entopts?: Record<string, any>) {
    const self = this
    return new ListWorkspaceMemberEntity(self, entopts)
  }


  // Entity access: `client.Member().list()` / `client.Member().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Member(entopts?: Record<string, any>) {
    const self = this
    return new MemberEntity(self, entopts)
  }


  // Entity access: `client.Message().list()` / `client.Message().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Message(entopts?: Record<string, any>) {
    const self = this
    return new MessageEntity(self, entopts)
  }


  // Entity access: `client.Meta().list()` / `client.Meta().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Meta(entopts?: Record<string, any>) {
    const self = this
    return new MetaEntity(self, entopts)
  }


  // Entity access: `client.Model().list()` / `client.Model().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Model(entopts?: Record<string, any>) {
    const self = this
    return new ModelEntity(self, entopts)
  }


  // Entity access: `client.ModelsCount().list()` / `client.ModelsCount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ModelsCount(entopts?: Record<string, any>) {
    const self = this
    return new ModelsCountEntity(self, entopts)
  }


  // Entity access: `client.ModelsList().list()` / `client.ModelsList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ModelsList(entopts?: Record<string, any>) {
    const self = this
    return new ModelsListEntity(self, entopts)
  }


  // Entity access: `client.OAuth().list()` / `client.OAuth().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OAuth(entopts?: Record<string, any>) {
    const self = this
    return new OAuthEntity(self, entopts)
  }


  // Entity access: `client.ObservabilityDestination().list()` / `client.ObservabilityDestination().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ObservabilityDestination(entopts?: Record<string, any>) {
    const self = this
    return new ObservabilityDestinationEntity(self, entopts)
  }


  // Entity access: `client.OpenResponsesResult().list()` / `client.OpenResponsesResult().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OpenResponsesResult(entopts?: Record<string, any>) {
    const self = this
    return new OpenResponsesResultEntity(self, entopts)
  }


  // Entity access: `client.Organization().list()` / `client.Organization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Organization(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationEntity(self, entopts)
  }


  // Entity access: `client.Preset().list()` / `client.Preset().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Preset(entopts?: Record<string, any>) {
    const self = this
    return new PresetEntity(self, entopts)
  }


  // Entity access: `client.PresetVersion().list()` / `client.PresetVersion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PresetVersion(entopts?: Record<string, any>) {
    const self = this
    return new PresetVersionEntity(self, entopts)
  }


  // Entity access: `client.Provider().list()` / `client.Provider().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Provider(entopts?: Record<string, any>) {
    const self = this
    return new ProviderEntity(self, entopts)
  }


  // Entity access: `client.Query().list()` / `client.Query().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Query(entopts?: Record<string, any>) {
    const self = this
    return new QueryEntity(self, entopts)
  }


  // Entity access: `client.RankingsDaily().list()` / `client.RankingsDaily().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RankingsDaily(entopts?: Record<string, any>) {
    const self = this
    return new RankingsDailyEntity(self, entopts)
  }


  // Entity access: `client.Remove().list()` / `client.Remove().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Remove(entopts?: Record<string, any>) {
    const self = this
    return new RemoveEntity(self, entopts)
  }


  // Entity access: `client.Rerank().list()` / `client.Rerank().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Rerank(entopts?: Record<string, any>) {
    const self = this
    return new RerankEntity(self, entopts)
  }


  // Entity access: `client.Response().list()` / `client.Response().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Response(entopts?: Record<string, any>) {
    const self = this
    return new ResponseEntity(self, entopts)
  }


  // Entity access: `client.Speech().list()` / `client.Speech().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Speech(entopts?: Record<string, any>) {
    const self = this
    return new SpeechEntity(self, entopts)
  }


  // Entity access: `client.Stt().list()` / `client.Stt().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Stt(entopts?: Record<string, any>) {
    const self = this
    return new SttEntity(self, entopts)
  }


  // Entity access: `client.SubmitGenerationFeedback().list()` / `client.SubmitGenerationFeedback().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubmitGenerationFeedback(entopts?: Record<string, any>) {
    const self = this
    return new SubmitGenerationFeedbackEntity(self, entopts)
  }


  // Entity access: `client.Task().list()` / `client.Task().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Task(entopts?: Record<string, any>) {
    const self = this
    return new TaskEntity(self, entopts)
  }


  // Entity access: `client.Transcription().list()` / `client.Transcription().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Transcription(entopts?: Record<string, any>) {
    const self = this
    return new TranscriptionEntity(self, entopts)
  }


  // Entity access: `client.Tts().list()` / `client.Tts().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Tts(entopts?: Record<string, any>) {
    const self = this
    return new TtsEntity(self, entopts)
  }


  // Entity access: `client.UnifiedBenchmark().list()` / `client.UnifiedBenchmark().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UnifiedBenchmark(entopts?: Record<string, any>) {
    const self = this
    return new UnifiedBenchmarkEntity(self, entopts)
  }


  // Entity access: `client.UpdateByokKey().list()` / `client.UpdateByokKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateByokKey(entopts?: Record<string, any>) {
    const self = this
    return new UpdateByokKeyEntity(self, entopts)
  }


  // Entity access: `client.UpdateGuardrail().list()` / `client.UpdateGuardrail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateGuardrail(entopts?: Record<string, any>) {
    const self = this
    return new UpdateGuardrailEntity(self, entopts)
  }


  // Entity access: `client.UpdateObservabilityDestination().list()` / `client.UpdateObservabilityDestination().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateObservabilityDestination(entopts?: Record<string, any>) {
    const self = this
    return new UpdateObservabilityDestinationEntity(self, entopts)
  }


  // Entity access: `client.UpdateWorkspace().list()` / `client.UpdateWorkspace().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateWorkspace(entopts?: Record<string, any>) {
    const self = this
    return new UpdateWorkspaceEntity(self, entopts)
  }


  // Entity access: `client.UpsertWorkspaceBudget().list()` / `client.UpsertWorkspaceBudget().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpsertWorkspaceBudget(entopts?: Record<string, any>) {
    const self = this
    return new UpsertWorkspaceBudgetEntity(self, entopts)
  }


  // Entity access: `client.User().list()` / `client.User().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  User(entopts?: Record<string, any>) {
    const self = this
    return new UserEntity(self, entopts)
  }


  // Entity access: `client.Version().list()` / `client.Version().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Version(entopts?: Record<string, any>) {
    const self = this
    return new VersionEntity(self, entopts)
  }


  // Entity access: `client.Video().list()` / `client.Video().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Video(entopts?: Record<string, any>) {
    const self = this
    return new VideoEntity(self, entopts)
  }


  // Entity access: `client.VideoGeneration().list()` / `client.VideoGeneration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  VideoGeneration(entopts?: Record<string, any>) {
    const self = this
    return new VideoGenerationEntity(self, entopts)
  }


  // Entity access: `client.VideoModelsList().list()` / `client.VideoModelsList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  VideoModelsList(entopts?: Record<string, any>) {
    const self = this
    return new VideoModelsListEntity(self, entopts)
  }


  // Entity access: `client.Workspace().list()` / `client.Workspace().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Workspace(entopts?: Record<string, any>) {
    const self = this
    return new WorkspaceEntity(self, entopts)
  }


  // Entity access: `client.WorkspaceBudget().list()` / `client.WorkspaceBudget().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkspaceBudget(entopts?: Record<string, any>) {
    const self = this
    return new WorkspaceBudgetEntity(self, entopts)
  }


  // Entity access: `client.Zdr().list()` / `client.Zdr().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Zdr(entopts?: Record<string, any>) {
    const self = this
    return new ZdrEntity(self, entopts)
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


