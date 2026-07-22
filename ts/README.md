# OpenrouterModels TypeScript SDK



The TypeScript SDK for the OpenrouterModels API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Activity()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/openrouter-models-sdk/releases](https://github.com/voxgig-sdk/openrouter-models-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { OpenrouterModelsSDK } from '@voxgig-sdk/openrouter-models'

const client = new OpenrouterModelsSDK({
  apikey: process.env.OPENROUTER_MODELS_APIKEY,
})
```

### 2. List activity records

`list()` resolves to an array of Activity objects — iterate it directly:

```ts
const activitys = await client.Activity().list()

for (const activity of activitys) {
  console.log(activity)
}
```

### 3. Load an endpoint

Endpoint is nested under author, so provide the `author`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const endpoint = await client.Endpoint().load({
    author: 'example_author',
    slug: 'example_slug',
  })
  console.log(endpoint)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const activitys = await client.Activity().list()
  console.log(activitys)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = OpenrouterModelsSDK.test()

const activity = await client.Activity().list()
// activity is a bare entity populated with mock response data
console.log(activity)
```

You can also use the instance method:

```ts
const client = new OpenrouterModelsSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Activity()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new OpenrouterModelsSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
OPENROUTER_MODELS_TEST_LIVE=TRUE
OPENROUTER_MODELS_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```


## Reference

### OpenrouterModelsSDK

#### Constructor

```ts
new OpenrouterModelsSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Activity(data?)` | `ActivityEntity` | Create an Activity entity instance. |
| `Add(data?)` | `AddEntity` | Create an Add entity instance. |
| `ApiKey(data?)` | `ApiKeyEntity` | Create an ApiKey entity instance. |
| `AppRanking(data?)` | `AppRankingEntity` | Create an AppRanking entity instance. |
| `Benchmark(data?)` | `BenchmarkEntity` | Create a Benchmark entity instance. |
| `BetaAnalytics(data?)` | `BetaAnalyticsEntity` | Create a BetaAnalytics entity instance. |
| `Budget(data?)` | `BudgetEntity` | Create a Budget entity instance. |
| `BulkAddWorkspaceMember(data?)` | `BulkAddWorkspaceMemberEntity` | Create a BulkAddWorkspaceMember entity instance. |
| `BulkAssignKey(data?)` | `BulkAssignKeyEntity` | Create a BulkAssignKey entity instance. |
| `BulkAssignMember(data?)` | `BulkAssignMemberEntity` | Create a BulkAssignMember entity instance. |
| `BulkRemoveWorkspaceMember(data?)` | `BulkRemoveWorkspaceMemberEntity` | Create a BulkRemoveWorkspaceMember entity instance. |
| `BulkUnassignKey(data?)` | `BulkUnassignKeyEntity` | Create a BulkUnassignKey entity instance. |
| `BulkUnassignMember(data?)` | `BulkUnassignMemberEntity` | Create a BulkUnassignMember entity instance. |
| `Byok(data?)` | `ByokEntity` | Create a Byok entity instance. |
| `ChatResult(data?)` | `ChatResultEntity` | Create a ChatResult entity instance. |
| `Code(data?)` | `CodeEntity` | Create a Code entity instance. |
| `Coinbase(data?)` | `CoinbaseEntity` | Create a Coinbase entity instance. |
| `Completion(data?)` | `CompletionEntity` | Create a Completion entity instance. |
| `Content(data?)` | `ContentEntity` | Create a Content entity instance. |
| `Count(data?)` | `CountEntity` | Create a Count entity instance. |
| `CreateByokKey(data?)` | `CreateByokKeyEntity` | Create a CreateByokKey entity instance. |
| `CreateGuardrail(data?)` | `CreateGuardrailEntity` | Create a CreateGuardrail entity instance. |
| `CreateObservabilityDestination(data?)` | `CreateObservabilityDestinationEntity` | Create a CreateObservabilityDestination entity instance. |
| `CreatePresetFromInference(data?)` | `CreatePresetFromInferenceEntity` | Create a CreatePresetFromInference entity instance. |
| `CreateWorkspace(data?)` | `CreateWorkspaceEntity` | Create a CreateWorkspace entity instance. |
| `Credit(data?)` | `CreditEntity` | Create a Credit entity instance. |
| `Destination(data?)` | `DestinationEntity` | Create a Destination entity instance. |
| `Embedding(data?)` | `EmbeddingEntity` | Create an Embedding entity instance. |
| `Endpoint(data?)` | `EndpointEntity` | Create an Endpoint entity instance. |
| `Feedback(data?)` | `FeedbackEntity` | Create a Feedback entity instance. |
| `File(data?)` | `FileEntity` | Create a File entity instance. |
| `Generation(data?)` | `GenerationEntity` | Create a Generation entity instance. |
| `GenerationContent(data?)` | `GenerationContentEntity` | Create a GenerationContent entity instance. |
| `Guardrail(data?)` | `GuardrailEntity` | Create a Guardrail entity instance. |
| `Image(data?)` | `ImageEntity` | Create an Image entity instance. |
| `ImageModelEndpoint(data?)` | `ImageModelEndpointEntity` | Create an ImageModelEndpoint entity instance. |
| `ImageModelsList(data?)` | `ImageModelsListEntity` | Create an ImageModelsList entity instance. |
| `Key(data?)` | `KeyEntity` | Create a Key entity instance. |
| `ListByokKey(data?)` | `ListByokKeyEntity` | Create a ListByokKey entity instance. |
| `ListGuardrail(data?)` | `ListGuardrailEntity` | Create a ListGuardrail entity instance. |
| `ListKeyAssignment(data?)` | `ListKeyAssignmentEntity` | Create a ListKeyAssignment entity instance. |
| `ListMemberAssignment(data?)` | `ListMemberAssignmentEntity` | Create a ListMemberAssignment entity instance. |
| `ListObservabilityDestination(data?)` | `ListObservabilityDestinationEntity` | Create a ListObservabilityDestination entity instance. |
| `ListPreset(data?)` | `ListPresetEntity` | Create a ListPreset entity instance. |
| `ListPresetVersion(data?)` | `ListPresetVersionEntity` | Create a ListPresetVersion entity instance. |
| `ListWorkspace(data?)` | `ListWorkspaceEntity` | Create a ListWorkspace entity instance. |
| `ListWorkspaceBudget(data?)` | `ListWorkspaceBudgetEntity` | Create a ListWorkspaceBudget entity instance. |
| `ListWorkspaceMember(data?)` | `ListWorkspaceMemberEntity` | Create a ListWorkspaceMember entity instance. |
| `Member(data?)` | `MemberEntity` | Create a Member entity instance. |
| `Message(data?)` | `MessageEntity` | Create a Message entity instance. |
| `Meta(data?)` | `MetaEntity` | Create a Meta entity instance. |
| `Model(data?)` | `ModelEntity` | Create a Model entity instance. |
| `ModelsCount(data?)` | `ModelsCountEntity` | Create a ModelsCount entity instance. |
| `ModelsList(data?)` | `ModelsListEntity` | Create a ModelsList entity instance. |
| `OAuth(data?)` | `OAuthEntity` | Create an OAuth entity instance. |
| `ObservabilityDestination(data?)` | `ObservabilityDestinationEntity` | Create an ObservabilityDestination entity instance. |
| `OpenResponsesResult(data?)` | `OpenResponsesResultEntity` | Create an OpenResponsesResult entity instance. |
| `Organization(data?)` | `OrganizationEntity` | Create an Organization entity instance. |
| `Preset(data?)` | `PresetEntity` | Create a Preset entity instance. |
| `PresetVersion(data?)` | `PresetVersionEntity` | Create a PresetVersion entity instance. |
| `Provider(data?)` | `ProviderEntity` | Create a Provider entity instance. |
| `Query(data?)` | `QueryEntity` | Create a Query entity instance. |
| `RankingsDaily(data?)` | `RankingsDailyEntity` | Create a RankingsDaily entity instance. |
| `Remove(data?)` | `RemoveEntity` | Create a Remove entity instance. |
| `Rerank(data?)` | `RerankEntity` | Create a Rerank entity instance. |
| `Response(data?)` | `ResponseEntity` | Create a Response entity instance. |
| `Speech(data?)` | `SpeechEntity` | Create a Speech entity instance. |
| `Stt(data?)` | `SttEntity` | Create a Stt entity instance. |
| `SubmitGenerationFeedback(data?)` | `SubmitGenerationFeedbackEntity` | Create a SubmitGenerationFeedback entity instance. |
| `Task(data?)` | `TaskEntity` | Create a Task entity instance. |
| `Transcription(data?)` | `TranscriptionEntity` | Create a Transcription entity instance. |
| `Tts(data?)` | `TtsEntity` | Create a Tts entity instance. |
| `UnifiedBenchmark(data?)` | `UnifiedBenchmarkEntity` | Create an UnifiedBenchmark entity instance. |
| `UpdateByokKey(data?)` | `UpdateByokKeyEntity` | Create an UpdateByokKey entity instance. |
| `UpdateGuardrail(data?)` | `UpdateGuardrailEntity` | Create an UpdateGuardrail entity instance. |
| `UpdateObservabilityDestination(data?)` | `UpdateObservabilityDestinationEntity` | Create an UpdateObservabilityDestination entity instance. |
| `UpdateWorkspace(data?)` | `UpdateWorkspaceEntity` | Create an UpdateWorkspace entity instance. |
| `UpsertWorkspaceBudget(data?)` | `UpsertWorkspaceBudgetEntity` | Create an UpsertWorkspaceBudget entity instance. |
| `User(data?)` | `UserEntity` | Create an User entity instance. |
| `Version(data?)` | `VersionEntity` | Create a Version entity instance. |
| `Video(data?)` | `VideoEntity` | Create a Video entity instance. |
| `VideoGeneration(data?)` | `VideoGenerationEntity` | Create a VideoGeneration entity instance. |
| `VideoModelsList(data?)` | `VideoModelsListEntity` | Create a VideoModelsList entity instance. |
| `Workspace(data?)` | `WorkspaceEntity` | Create a Workspace entity instance. |
| `WorkspaceBudget(data?)` | `WorkspaceBudgetEntity` | Create a WorkspaceBudget entity instance. |
| `Zdr(data?)` | `ZdrEntity` | Create a Zdr entity instance. |
| `tester(testopts?, sdkopts?)` | `OpenrouterModelsSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `OpenrouterModelsSDK.test(testopts?, sdkopts?)` | `OpenrouterModelsSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): OpenrouterModelsSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Activity

| Field | Description |
| --- | --- |
| `byok_usage_inference` |  |
| `completion_token` |  |
| `date` |  |
| `endpoint_id` |  |
| `model` |  |
| `model_permaslug` |  |
| `prompt_token` |  |
| `provider_name` |  |
| `reasoning_token` |  |
| `request` |  |
| `usage` |  |

Operations: list.

API path: `/activity`

#### Add

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### ApiKey

| Field | Description |
| --- | --- |
| `byok_usage` |  |
| `byok_usage_daily` |  |
| `byok_usage_monthly` |  |
| `byok_usage_weekly` |  |
| `created_at` |  |
| `creator_user_id` |  |
| `data` |  |
| `disabled` |  |
| `expires_at` |  |
| `hash` |  |
| `include_byok_in_limit` |  |
| `label` |  |
| `limit` |  |
| `limit_remaining` |  |
| `limit_reset` |  |
| `name` |  |
| `updated_at` |  |
| `usage` |  |
| `usage_daily` |  |
| `usage_monthly` |  |
| `usage_weekly` |  |
| `workspace_id` |  |

Operations: create, list, load, remove, update.

API path: `/keys`

#### AppRanking

| Field | Description |
| --- | --- |
| `app_id` |  |
| `app_name` |  |
| `rank` |  |
| `total_request` |  |
| `total_token` |  |

Operations: list.

API path: `/datasets/app-rankings`

#### Benchmark

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### BetaAnalytics

| Field | Description |
| --- | --- |
| `classifier_dimension` |  |
| `classifier_filter` |  |
| `data` |  |
| `dimension` |  |
| `filter` |  |
| `granularity` |  |
| `group_limit` |  |
| `limit` |  |
| `metric` |  |
| `order_by` |  |
| `time_range` |  |

Operations: create, load.

API path: `/analytics/query`

#### Budget

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### BulkAddWorkspaceMember

| Field | Description |
| --- | --- |
| `added_count` |  |
| `data` |  |
| `user_id` |  |

Operations: create.

API path: `/workspaces/{id}/members/add`

#### BulkAssignKey

| Field | Description |
| --- | --- |
| `assigned_count` |  |
| `key_hash` |  |

Operations: create.

API path: `/guardrails/{id}/assignments/keys`

#### BulkAssignMember

| Field | Description |
| --- | --- |
| `assigned_count` |  |
| `member_user_id` |  |

Operations: create.

API path: `/guardrails/{id}/assignments/members`

#### BulkRemoveWorkspaceMember

| Field | Description |
| --- | --- |
| `removed_count` |  |
| `user_id` |  |

Operations: create.

API path: `/workspaces/{id}/members/remove`

#### BulkUnassignKey

| Field | Description |
| --- | --- |
| `key_hash` |  |
| `unassigned_count` |  |

Operations: create.

API path: `/guardrails/{id}/assignments/keys/remove`

#### BulkUnassignMember

| Field | Description |
| --- | --- |
| `member_user_id` |  |
| `unassigned_count` |  |

Operations: create.

API path: `/guardrails/{id}/assignments/members/remove`

#### Byok

| Field | Description |
| --- | --- |
| `allowed_api_key_hash` |  |
| `allowed_model` |  |
| `allowed_user_id` |  |
| `created_at` |  |
| `data` |  |
| `disabled` |  |
| `id` |  |
| `is_fallback` |  |
| `key` |  |
| `label` |  |
| `name` |  |
| `provider` |  |
| `sort_order` |  |
| `workspace_id` |  |

Operations: create, list, load, remove.

API path: `/byok`

#### ChatResult

| Field | Description |
| --- | --- |
| `cache_control` |  |
| `choice` |  |
| `created` |  |
| `debug` |  |
| `frequency_penalty` |  |
| `id` |  |
| `image_config` |  |
| `logit_bia` |  |
| `logprob` |  |
| `max_completion_token` |  |
| `max_token` |  |
| `message` |  |
| `metadata` |  |
| `min_p` |  |
| `modality` |  |
| `model` |  |
| `object` |  |
| `openrouter_metadata` |  |
| `parallel_tool_call` |  |
| `plugin` |  |
| `prediction` |  |
| `presence_penalty` |  |
| `prompt_cache_key` |  |
| `prompt_cache_option` |  |
| `provider` |  |
| `reasoning` |  |
| `reasoning_effort` |  |
| `repetition_penalty` |  |
| `response_format` |  |
| `route` |  |
| `seed` |  |
| `service_tier` |  |
| `session_id` |  |
| `stop` |  |
| `stop_server_tools_when` |  |
| `stream` |  |
| `stream_option` |  |
| `system_fingerprint` |  |
| `temperature` |  |
| `tool` |  |
| `tool_choice` |  |
| `top_a` |  |
| `top_k` |  |
| `top_logprob` |  |
| `top_p` |  |
| `trace` |  |
| `usage` |  |
| `user` |  |

Operations: create.

API path: `/chat/completions`

#### Code

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Coinbase

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Completion

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Content

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Count

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### CreateByokKey

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### CreateGuardrail

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### CreateObservabilityDestination

| Field | Description |
| --- | --- |
| `api_key_hash` |  |
| `config` |  |
| `enabled` |  |
| `filter_rule` |  |
| `name` |  |
| `privacy_mode` |  |
| `sampling_rate` |  |
| `type` |  |
| `workspace_id` |  |

Operations: create.

API path: `/observability/destinations`

#### CreatePresetFromInference

| Field | Description |
| --- | --- |
| `background` |  |
| `cache_control` |  |
| `context_management` |  |
| `data` |  |
| `debug` |  |
| `fallback` |  |
| `frequency_penalty` |  |
| `image_config` |  |
| `include` |  |
| `input` |  |
| `instruction` |  |
| `logit_bia` |  |
| `logprob` |  |
| `max_completion_token` |  |
| `max_output_token` |  |
| `max_token` |  |
| `max_tool_call` |  |
| `message` |  |
| `metadata` |  |
| `min_p` |  |
| `modality` |  |
| `model` |  |
| `output_config` |  |
| `parallel_tool_call` |  |
| `plugin` |  |
| `prediction` |  |
| `presence_penalty` |  |
| `previous_response_id` |  |
| `prompt` |  |
| `prompt_cache_key` |  |
| `prompt_cache_option` |  |
| `provider` |  |
| `reasoning` |  |
| `reasoning_effort` |  |
| `repetition_penalty` |  |
| `response_format` |  |
| `route` |  |
| `safety_identifier` |  |
| `seed` |  |
| `service_tier` |  |
| `session_id` |  |
| `speed` |  |
| `stop` |  |
| `stop_sequence` |  |
| `stop_server_tools_when` |  |
| `store` |  |
| `stream` |  |
| `stream_option` |  |
| `system` |  |
| `temperature` |  |
| `text` |  |
| `thinking` |  |
| `tool` |  |
| `tool_choice` |  |
| `top_a` |  |
| `top_k` |  |
| `top_logprob` |  |
| `top_p` |  |
| `trace` |  |
| `truncation` |  |
| `user` |  |

Operations: create.

API path: `/presets/{slug}/chat/completions`

#### CreateWorkspace

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Credit

| Field | Description |
| --- | --- |
| `data` |  |

Operations: create, load.

API path: `/credits/coinbase`

#### Destination

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Embedding

| Field | Description |
| --- | --- |
| `data` |  |
| `dimension` |  |
| `encoding_format` |  |
| `id` |  |
| `input` |  |
| `input_type` |  |
| `model` |  |
| `object` |  |
| `provider` |  |
| `usage` |  |
| `user` |  |

Operations: create.

API path: `/embeddings`

#### Endpoint

| Field | Description |
| --- | --- |
| `architecture` |  |
| `benchmark` |  |
| `canonical_slug` |  |
| `context_length` |  |
| `created` |  |
| `data` |  |
| `default_parameter` |  |
| `description` |  |
| `expiration_date` |  |
| `hugging_face_id` |  |
| `id` |  |
| `knowledge_cutoff` |  |
| `latency_last_30m` |  |
| `link` |  |
| `max_completion_token` |  |
| `max_prompt_token` |  |
| `model_id` |  |
| `model_name` |  |
| `name` |  |
| `per_request_limit` |  |
| `pricing` |  |
| `provider_name` |  |
| `quantization` |  |
| `reasoning` |  |
| `status` |  |
| `supported_parameter` |  |
| `supported_voice` |  |
| `supports_implicit_caching` |  |
| `tag` |  |
| `throughput_last_30m` |  |
| `top_provider` |  |
| `uptime_last_1d` |  |
| `uptime_last_30m` |  |
| `uptime_last_5m` |  |

Operations: list, load.

API path: `/models`

#### Feedback

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### File

| Field | Description |
| --- | --- |
| `created_at` |  |
| `downloadable` |  |
| `filename` |  |
| `id` |  |
| `mime_type` |  |
| `size_byte` |  |
| `type` |  |

Operations: create, list, load, remove.

API path: `/files`

#### Generation

| Field | Description |
| --- | --- |
| `data` |  |

Operations: load.

API path: `/generation`

#### GenerationContent

| Field | Description |
| --- | --- |
| `data` |  |

Operations: load.

API path: `/generation/content`

#### Guardrail

| Field | Description |
| --- | --- |
| `allowed_model` |  |
| `allowed_provider` |  |
| `content_filter` |  |
| `content_filter_builtin` |  |
| `created_at` |  |
| `data` |  |
| `description` |  |
| `enforce_zdr` |  |
| `enforce_zdr_anthropic` |  |
| `enforce_zdr_google` |  |
| `enforce_zdr_openai` |  |
| `enforce_zdr_other` |  |
| `enforce_zdr_xai` |  |
| `id` |  |
| `ignored_model` |  |
| `ignored_provider` |  |
| `limit_usd` |  |
| `name` |  |
| `reset_interval` |  |
| `updated_at` |  |
| `workspace_id` |  |

Operations: create, list, load, remove.

API path: `/guardrails`

#### Image

| Field | Description |
| --- | --- |
| `aspect_ratio` |  |
| `background` |  |
| `created` |  |
| `data` |  |
| `input_reference` |  |
| `model` |  |
| `n` |  |
| `output_compression` |  |
| `output_format` |  |
| `prompt` |  |
| `provider` |  |
| `quality` |  |
| `resolution` |  |
| `seed` |  |
| `size` |  |
| `stream` |  |
| `usage` |  |

Operations: create.

API path: `/images`

#### ImageModelEndpoint

| Field | Description |
| --- | --- |
| `allowed_passthrough_parameter` |  |
| `pricing` |  |
| `provider_name` |  |
| `provider_slug` |  |
| `provider_tag` |  |
| `supported_parameter` |  |
| `supports_streaming` |  |

Operations: list.

API path: `/images/models/{author}/{slug}/endpoints`

#### ImageModelsList

| Field | Description |
| --- | --- |
| `architecture` |  |
| `created` |  |
| `description` |  |
| `endpoint` |  |
| `id` |  |
| `name` |  |
| `supported_parameter` |  |
| `supports_streaming` |  |

Operations: list.

API path: `/images/models`

#### Key

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### ListByokKey

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### ListGuardrail

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### ListKeyAssignment

| Field | Description |
| --- | --- |
| `assigned_by` |  |
| `created_at` |  |
| `guardrail_id` |  |
| `id` |  |
| `key_hash` |  |
| `key_label` |  |
| `key_name` |  |

Operations: list.

API path: `/guardrails/{id}/assignments/keys`

#### ListMemberAssignment

| Field | Description |
| --- | --- |
| `assigned_by` |  |
| `created_at` |  |
| `guardrail_id` |  |
| `id` |  |
| `organization_id` |  |
| `user_id` |  |

Operations: list.

API path: `/guardrails/{id}/assignments/members`

#### ListObservabilityDestination

| Field | Description |
| --- | --- |
| `data` |  |
| `total_count` |  |

Operations: list.

API path: `/observability/destinations`

#### ListPreset

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### ListPresetVersion

| Field | Description |
| --- | --- |
| `config` |  |
| `created_at` |  |
| `creator_id` |  |
| `id` |  |
| `preset_id` |  |
| `system_prompt` |  |
| `updated_at` |  |
| `version` |  |

Operations: list.

API path: `/presets/{slug}/versions`

#### ListWorkspace

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### ListWorkspaceBudget

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `limit_usd` |  |
| `reset_interval` |  |
| `updated_at` |  |
| `workspace_id` |  |

Operations: list.

API path: `/workspaces/{id}/budgets`

#### ListWorkspaceMember

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `role` |  |
| `user_id` |  |
| `workspace_id` |  |

Operations: list.

API path: `/workspaces/{id}/members`

#### Member

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Message

| Field | Description |
| --- | --- |
| `cache_control` |  |
| `context_management` |  |
| `fallback` |  |
| `max_token` |  |
| `message` |  |
| `metadata` |  |
| `model` |  |
| `output_config` |  |
| `plugin` |  |
| `provider` |  |
| `route` |  |
| `service_tier` |  |
| `session_id` |  |
| `speed` |  |
| `stop_sequence` |  |
| `stop_server_tools_when` |  |
| `stream` |  |
| `system` |  |
| `temperature` |  |
| `thinking` |  |
| `tool` |  |
| `tool_choice` |  |
| `top_k` |  |
| `top_p` |  |
| `trace` |  |
| `user` |  |

Operations: create.

API path: `/messages`

#### Meta

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Model

| Field | Description |
| --- | --- |
| `architecture` |  |
| `benchmark` |  |
| `canonical_slug` |  |
| `context_length` |  |
| `created` |  |
| `data` |  |
| `default_parameter` |  |
| `description` |  |
| `expiration_date` |  |
| `hugging_face_id` |  |
| `id` |  |
| `knowledge_cutoff` |  |
| `link` |  |
| `name` |  |
| `per_request_limit` |  |
| `pricing` |  |
| `reasoning` |  |
| `supported_parameter` |  |
| `supported_voice` |  |
| `top_provider` |  |

Operations: list, load.

API path: `/embeddings/models`

#### ModelsCount

| Field | Description |
| --- | --- |
| `data` |  |

Operations: load.

API path: `/models/count`

#### ModelsList

| Field | Description |
| --- | --- |
| `architecture` |  |
| `benchmark` |  |
| `canonical_slug` |  |
| `context_length` |  |
| `created` |  |
| `default_parameter` |  |
| `description` |  |
| `expiration_date` |  |
| `hugging_face_id` |  |
| `id` |  |
| `knowledge_cutoff` |  |
| `link` |  |
| `name` |  |
| `per_request_limit` |  |
| `pricing` |  |
| `reasoning` |  |
| `supported_parameter` |  |
| `supported_voice` |  |
| `top_provider` |  |

Operations: list.

API path: `/models/user`

#### OAuth

| Field | Description |
| --- | --- |
| `callback_url` |  |
| `code` |  |
| `code_challenge` |  |
| `code_challenge_method` |  |
| `code_verifier` |  |
| `data` |  |
| `expires_at` |  |
| `key` |  |
| `key_label` |  |
| `limit` |  |
| `spawn_agent` |  |
| `spawn_cloud` |  |
| `usage_limit_type` |  |
| `user_id` |  |
| `workspace_id` |  |

Operations: create.

API path: `/auth/keys`

#### ObservabilityDestination

| Field | Description |
| --- | --- |
| `data` |  |

Operations: load, remove.

API path: `/observability/destinations/{id}`

#### OpenResponsesResult

| Field | Description |
| --- | --- |
| `background` |  |
| `cache_control` |  |
| `debug` |  |
| `frequency_penalty` |  |
| `image_config` |  |
| `include` |  |
| `input` |  |
| `instruction` |  |
| `max_output_token` |  |
| `max_tool_call` |  |
| `metadata` |  |
| `modality` |  |
| `model` |  |
| `parallel_tool_call` |  |
| `plugin` |  |
| `presence_penalty` |  |
| `previous_response_id` |  |
| `prompt` |  |
| `prompt_cache_key` |  |
| `prompt_cache_option` |  |
| `provider` |  |
| `reasoning` |  |
| `route` |  |
| `safety_identifier` |  |
| `service_tier` |  |
| `session_id` |  |
| `stop_server_tools_when` |  |
| `store` |  |
| `stream` |  |
| `temperature` |  |
| `text` |  |
| `tool` |  |
| `tool_choice` |  |
| `top_k` |  |
| `top_logprob` |  |
| `top_p` |  |
| `trace` |  |
| `truncation` |  |
| `user` |  |

Operations: create.

API path: `/responses`

#### Organization

| Field | Description |
| --- | --- |
| `email` |  |
| `first_name` |  |
| `id` |  |
| `last_name` |  |
| `role` |  |

Operations: list.

API path: `/organization/members`

#### Preset

| Field | Description |
| --- | --- |
| `created_at` |  |
| `creator_user_id` |  |
| `data` |  |
| `description` |  |
| `designated_version_id` |  |
| `id` |  |
| `name` |  |
| `slug` |  |
| `status` |  |
| `status_updated_at` |  |
| `updated_at` |  |
| `workspace_id` |  |

Operations: list, load.

API path: `/presets`

#### PresetVersion

| Field | Description |
| --- | --- |
| `data` |  |

Operations: load.

API path: `/presets/{slug}/versions/{version}`

#### Provider

| Field | Description |
| --- | --- |
| `datacenter` |  |
| `headquarter` |  |
| `name` |  |
| `privacy_policy_url` |  |
| `slug` |  |
| `status_page_url` |  |
| `terms_of_service_url` |  |

Operations: list.

API path: `/providers`

#### Query

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### RankingsDaily

| Field | Description |
| --- | --- |
| `date` |  |
| `model_permaslug` |  |
| `total_token` |  |

Operations: list.

API path: `/datasets/rankings-daily`

#### Remove

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Rerank

| Field | Description |
| --- | --- |
| `document` |  |
| `id` |  |
| `model` |  |
| `provider` |  |
| `query` |  |
| `result` |  |
| `top_n` |  |
| `usage` |  |

Operations: create.

API path: `/rerank`

#### Response

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Speech

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Stt

| Field | Description |
| --- | --- |
| `duration` |  |
| `input_audio` |  |
| `language` |  |
| `model` |  |
| `provider` |  |
| `response_format` |  |
| `segment` |  |
| `task` |  |
| `temperature` |  |
| `text` |  |
| `timestamp_granularity` |  |
| `usage` |  |
| `word` |  |

Operations: create.

API path: `/audio/transcriptions`

#### SubmitGenerationFeedback

| Field | Description |
| --- | --- |
| `category` |  |
| `comment` |  |
| `data` |  |
| `generation_id` |  |

Operations: create.

API path: `/generation/feedback`

#### Task

| Field | Description |
| --- | --- |
| `data` |  |

Operations: load.

API path: `/classifications/task`

#### Transcription

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Tts

| Field | Description |
| --- | --- |
| `input` |  |
| `model` |  |
| `provider` |  |
| `response_format` |  |
| `speed` |  |
| `voice` |  |

Operations: create.

API path: `/audio/speech`

#### UnifiedBenchmark

| Field | Description |
| --- | --- |
| `data` |  |
| `meta` |  |

Operations: list.

API path: `/benchmarks`

#### UpdateByokKey

| Field | Description |
| --- | --- |
| `allowed_model` |  |
| `allowed_user_id` |  |
| `data` |  |
| `disabled` |  |
| `is_fallback` |  |
| `key` |  |
| `name` |  |

Operations: update.

API path: `/byok/{id}`

#### UpdateGuardrail

| Field | Description |
| --- | --- |
| `allowed_model` |  |
| `allowed_provider` |  |
| `content_filter` |  |
| `content_filter_builtin` |  |
| `data` |  |
| `description` |  |
| `enforce_zdr` |  |
| `enforce_zdr_anthropic` |  |
| `enforce_zdr_google` |  |
| `enforce_zdr_openai` |  |
| `enforce_zdr_other` |  |
| `enforce_zdr_xai` |  |
| `ignored_model` |  |
| `ignored_provider` |  |
| `limit_usd` |  |
| `name` |  |
| `reset_interval` |  |

Operations: update.

API path: `/guardrails/{id}`

#### UpdateObservabilityDestination

| Field | Description |
| --- | --- |
| `api_key_hash` |  |
| `config` |  |
| `data` |  |
| `enabled` |  |
| `filter_rule` |  |
| `name` |  |
| `privacy_mode` |  |
| `sampling_rate` |  |

Operations: update.

API path: `/observability/destinations/{id}`

#### UpdateWorkspace

| Field | Description |
| --- | --- |
| `created_at` |  |
| `created_by` |  |
| `data` |  |
| `default_image_model` |  |
| `default_provider_sort` |  |
| `default_text_model` |  |
| `description` |  |
| `id` |  |
| `io_logging_api_key_id` |  |
| `io_logging_sampling_rate` |  |
| `is_data_discount_logging_enabled` |  |
| `is_observability_broadcast_enabled` |  |
| `is_observability_io_logging_enabled` |  |
| `name` |  |
| `slug` |  |
| `updated_at` |  |

Operations: create, list, update.

API path: `/workspaces`

#### UpsertWorkspaceBudget

| Field | Description |
| --- | --- |
| `data` |  |
| `limit_usd` |  |

Operations: update.

API path: `/workspaces/{id}/budgets/{interval}`

#### User

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Version

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Video

| Field | Description |
| --- | --- |
| `aspect_ratio` |  |
| `callback_url` |  |
| `duration` |  |
| `error` |  |
| `frame_image` |  |
| `generate_audio` |  |
| `generation_id` |  |
| `id` |  |
| `input_reference` |  |
| `model` |  |
| `polling_url` |  |
| `prompt` |  |
| `provider` |  |
| `resolution` |  |
| `seed` |  |
| `size` |  |
| `status` |  |
| `unsigned_url` |  |
| `usage` |  |

Operations: create, load.

API path: `/videos`

#### VideoGeneration

| Field | Description |
| --- | --- |

Operations: load.

API path: `/videos/{jobId}/content`

#### VideoModelsList

| Field | Description |
| --- | --- |
| `allowed_passthrough_parameter` |  |
| `canonical_slug` |  |
| `created` |  |
| `description` |  |
| `generate_audio` |  |
| `hugging_face_id` |  |
| `id` |  |
| `name` |  |
| `pricing_skus` |  |
| `seed` |  |
| `supported_aspect_ratio` |  |
| `supported_duration` |  |
| `supported_frame_image` |  |
| `supported_resolution` |  |
| `supported_size` |  |

Operations: list.

API path: `/videos/models`

#### Workspace

| Field | Description |
| --- | --- |
| `data` |  |

Operations: load, remove.

API path: `/workspaces/{id}`

#### WorkspaceBudget

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/workspaces/{id}/budgets/{interval}`

#### Zdr

| Field | Description |
| --- | --- |

Operations: .

API path: ``



## Entities


### Activity

Create an instance: `const activity = client.Activity()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byok_usage_inference` | `number` |  |
| `completion_token` | `number` |  |
| `date` | `string` |  |
| `endpoint_id` | `string` |  |
| `model` | `string` |  |
| `model_permaslug` | `string` |  |
| `prompt_token` | `number` |  |
| `provider_name` | `string` |  |
| `reasoning_token` | `number` |  |
| `request` | `number` |  |
| `usage` | `number` |  |

#### Example: List

```ts
const activitys = await client.Activity().list()
```


### Add

Create an instance: `const add = client.Add()`


### ApiKey

Create an instance: `const api_key = client.ApiKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byok_usage` | `number` |  |
| `byok_usage_daily` | `number` |  |
| `byok_usage_monthly` | `number` |  |
| `byok_usage_weekly` | `number` |  |
| `created_at` | `string` |  |
| `creator_user_id` | `any` |  |
| `data` | `Record<string, any>` |  |
| `disabled` | `boolean` |  |
| `expires_at` | `any` |  |
| `hash` | `string` |  |
| `include_byok_in_limit` | `boolean` |  |
| `label` | `string` |  |
| `limit` | `any` |  |
| `limit_remaining` | `any` |  |
| `limit_reset` | `any` |  |
| `name` | `string` |  |
| `updated_at` | `any` |  |
| `usage` | `number` |  |
| `usage_daily` | `number` |  |
| `usage_monthly` | `number` |  |
| `usage_weekly` | `number` |  |
| `workspace_id` | `string` |  |

#### Example: Load

```ts
const api_key = await client.ApiKey().load({ id: 'api_key_id' })
```

#### Example: List

```ts
const api_keys = await client.ApiKey().list()
```

#### Example: Create

```ts
const api_key = await client.ApiKey().create({
  byok_usage: 1,
  byok_usage_daily: 1,
  byok_usage_monthly: 1,
  byok_usage_weekly: 1,
  created_at: 'example_created_at',
  data: {},
  hash: 'example_hash',
  label: 'example_label',
  limit_remaining: 'example_limit_remaining',
  name: 'example_name',
  updated_at: 'example_updated_at',
  usage: 1,
  usage_daily: 1,
  usage_monthly: 1,
  usage_weekly: 1,
})
```


### AppRanking

Create an instance: `const app_ranking = client.AppRanking()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `number` |  |
| `app_name` | `string` |  |
| `rank` | `number` |  |
| `total_request` | `number` |  |
| `total_token` | `string` |  |

#### Example: List

```ts
const app_rankings = await client.AppRanking().list()
```


### Benchmark

Create an instance: `const benchmark = client.Benchmark()`


### BetaAnalytics

Create an instance: `const beta_analytics = client.BetaAnalytics()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `classifier_dimension` | `Record<string, any>` |  |
| `classifier_filter` | `Record<string, any>` |  |
| `data` | `Record<string, any>` |  |
| `dimension` | `any[]` |  |
| `filter` | `any[]` |  |
| `granularity` | `string` |  |
| `group_limit` | `number` |  |
| `limit` | `number` |  |
| `metric` | `any[]` |  |
| `order_by` | `Record<string, any>` |  |
| `time_range` | `Record<string, any>` |  |

#### Example: Load

```ts
const beta_analytics = await client.BetaAnalytics().load()
```

#### Example: Create

```ts
const beta_analytics = await client.BetaAnalytics().create({
  classifier_dimension: {},
  classifier_filter: {},
  data: {},
  metric: [],
  order_by: {},
  time_range: {},
})
```


### Budget

Create an instance: `const budget = client.Budget()`


### BulkAddWorkspaceMember

Create an instance: `const bulk_add_workspace_member = client.BulkAddWorkspaceMember()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `added_count` | `number` |  |
| `data` | `any[]` |  |
| `user_id` | `any[]` |  |

#### Example: Create

```ts
const bulk_add_workspace_member = await client.BulkAddWorkspaceMember().create({
  workspace_id: 'example_workspace_id',
})
```


### BulkAssignKey

Create an instance: `const bulk_assign_key = client.BulkAssignKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_count` | `number` |  |
| `key_hash` | `any[]` |  |

#### Example: Create

```ts
const bulk_assign_key = await client.BulkAssignKey().create({
  guardrail_id: 'example_guardrail_id',
})
```


### BulkAssignMember

Create an instance: `const bulk_assign_member = client.BulkAssignMember()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_count` | `number` |  |
| `member_user_id` | `any[]` |  |

#### Example: Create

```ts
const bulk_assign_member = await client.BulkAssignMember().create({
  guardrail_id: 'example_guardrail_id',
})
```


### BulkRemoveWorkspaceMember

Create an instance: `const bulk_remove_workspace_member = client.BulkRemoveWorkspaceMember()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `removed_count` | `number` |  |
| `user_id` | `any[]` |  |

#### Example: Create

```ts
const bulk_remove_workspace_member = await client.BulkRemoveWorkspaceMember().create({
  workspace_id: 'example_workspace_id',
})
```


### BulkUnassignKey

Create an instance: `const bulk_unassign_key = client.BulkUnassignKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key_hash` | `any[]` |  |
| `unassigned_count` | `number` |  |

#### Example: Create

```ts
const bulk_unassign_key = await client.BulkUnassignKey().create({
  guardrail_id: 'example_guardrail_id',
})
```


### BulkUnassignMember

Create an instance: `const bulk_unassign_member = client.BulkUnassignMember()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `member_user_id` | `any[]` |  |
| `unassigned_count` | `number` |  |

#### Example: Create

```ts
const bulk_unassign_member = await client.BulkUnassignMember().create({
  guardrail_id: 'example_guardrail_id',
})
```


### Byok

Create an instance: `const byok = client.Byok()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_api_key_hash` | `any` |  |
| `allowed_model` | `any` |  |
| `allowed_user_id` | `any` |  |
| `created_at` | `string` |  |
| `data` | `any` |  |
| `disabled` | `boolean` |  |
| `id` | `string` |  |
| `is_fallback` | `boolean` |  |
| `key` | `string` |  |
| `label` | `string` |  |
| `name` | `any` |  |
| `provider` | `string` |  |
| `sort_order` | `number` |  |
| `workspace_id` | `string` |  |

#### Example: Load

```ts
const byok = await client.Byok().load({ id: 'byok_id' })
```

#### Example: List

```ts
const byoks = await client.Byok().list()
```

#### Example: Create

```ts
const byok = await client.Byok().create({
  allowed_api_key_hash: 'example_allowed_api_key_hash',
  created_at: 'example_created_at',
  data: 'example_data',
  id: 'example_id',
  key: 'example_key',
  label: 'example_label',
  provider: 'example_provider',
  sort_order: 1,
})
```


### ChatResult

Create an instance: `const chat_result = client.ChatResult()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_control` | `Record<string, any>` |  |
| `choice` | `any[]` |  |
| `created` | `number` |  |
| `debug` | `Record<string, any>` |  |
| `frequency_penalty` | `any` |  |
| `id` | `string` |  |
| `image_config` | `Record<string, any>` |  |
| `logit_bia` | `any` |  |
| `logprob` | `any` |  |
| `max_completion_token` | `any` |  |
| `max_token` | `any` |  |
| `message` | `any[]` |  |
| `metadata` | `Record<string, any>` |  |
| `min_p` | `any` |  |
| `modality` | `any[]` |  |
| `model` | `string` |  |
| `object` | `string` |  |
| `openrouter_metadata` | `Record<string, any>` |  |
| `parallel_tool_call` | `any` |  |
| `plugin` | `any[]` |  |
| `prediction` | `any` |  |
| `presence_penalty` | `any` |  |
| `prompt_cache_key` | `any` |  |
| `prompt_cache_option` | `any` |  |
| `provider` | `any` |  |
| `reasoning` | `Record<string, any>` |  |
| `reasoning_effort` | `any` |  |
| `repetition_penalty` | `any` |  |
| `response_format` | `any` |  |
| `route` | `any` |  |
| `seed` | `any` |  |
| `service_tier` | `any` |  |
| `session_id` | `string` |  |
| `stop` | `any` |  |
| `stop_server_tools_when` | `any[]` |  |
| `stream` | `boolean` |  |
| `stream_option` | `any` |  |
| `system_fingerprint` | `any` |  |
| `temperature` | `any` |  |
| `tool` | `any[]` |  |
| `tool_choice` | `any` |  |
| `top_a` | `any` |  |
| `top_k` | `any` |  |
| `top_logprob` | `any` |  |
| `top_p` | `any` |  |
| `trace` | `Record<string, any>` |  |
| `usage` | `Record<string, any>` |  |
| `user` | `string` |  |

#### Example: Create

```ts
const chat_result = await client.ChatResult().create({
  cache_control: {},
  choice: [],
  created: 1,
  id: 'example_id',
  message: [],
  model: 'example_model',
  object: 'example_object',
  openrouter_metadata: {},
  prediction: 'example_prediction',
  prompt_cache_option: 'example_prompt_cache_option',
  system_fingerprint: 'example_system_fingerprint',
  usage: {},
})
```


### Code

Create an instance: `const code = client.Code()`


### Coinbase

Create an instance: `const coinbase = client.Coinbase()`


### Completion

Create an instance: `const completion = client.Completion()`


### Content

Create an instance: `const content = client.Content()`


### Count

Create an instance: `const count = client.Count()`


### CreateByokKey

Create an instance: `const create_byok_key = client.CreateByokKey()`


### CreateGuardrail

Create an instance: `const create_guardrail = client.CreateGuardrail()`


### CreateObservabilityDestination

Create an instance: `const create_observability_destination = client.CreateObservabilityDestination()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hash` | `any` |  |
| `config` | `Record<string, any>` |  |
| `enabled` | `boolean` |  |
| `filter_rule` | `any` |  |
| `name` | `string` |  |
| `privacy_mode` | `boolean` |  |
| `sampling_rate` | `number` |  |
| `type` | `string` |  |
| `workspace_id` | `string` |  |

#### Example: Create

```ts
const create_observability_destination = await client.CreateObservabilityDestination().create({
  config: {},
  filter_rule: 'example_filter_rule',
  name: 'example_name',
  type: 'example_type',
})
```


### CreatePresetFromInference

Create an instance: `const create_preset_from_inference = client.CreatePresetFromInference()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `background` | `any` |  |
| `cache_control` | `Record<string, any>` |  |
| `context_management` | `any` |  |
| `data` | `any` |  |
| `debug` | `Record<string, any>` |  |
| `fallback` | `any` |  |
| `frequency_penalty` | `any` |  |
| `image_config` | `Record<string, any>` |  |
| `include` | `any` |  |
| `input` | `any` |  |
| `instruction` | `any` |  |
| `logit_bia` | `any` |  |
| `logprob` | `any` |  |
| `max_completion_token` | `any` |  |
| `max_output_token` | `any` |  |
| `max_token` | `any` |  |
| `max_tool_call` | `any` |  |
| `message` | `any[]` |  |
| `metadata` | `Record<string, any>` |  |
| `min_p` | `any` |  |
| `modality` | `any[]` |  |
| `model` | `string` |  |
| `output_config` | `Record<string, any>` |  |
| `parallel_tool_call` | `any` |  |
| `plugin` | `any[]` |  |
| `prediction` | `any` |  |
| `presence_penalty` | `any` |  |
| `previous_response_id` | `string` |  |
| `prompt` | `any` |  |
| `prompt_cache_key` | `any` |  |
| `prompt_cache_option` | `any` |  |
| `provider` | `any` |  |
| `reasoning` | `Record<string, any>` |  |
| `reasoning_effort` | `any` |  |
| `repetition_penalty` | `any` |  |
| `response_format` | `any` |  |
| `route` | `any` |  |
| `safety_identifier` | `any` |  |
| `seed` | `any` |  |
| `service_tier` | `any` |  |
| `session_id` | `string` |  |
| `speed` | `any` |  |
| `stop` | `any` |  |
| `stop_sequence` | `any[]` |  |
| `stop_server_tools_when` | `any[]` |  |
| `store` | `boolean` |  |
| `stream` | `boolean` |  |
| `stream_option` | `any` |  |
| `system` | `any` |  |
| `temperature` | `any` |  |
| `text` | `any` |  |
| `thinking` | `any` |  |
| `tool` | `any[]` |  |
| `tool_choice` | `any` |  |
| `top_a` | `any` |  |
| `top_k` | `any` |  |
| `top_logprob` | `any` |  |
| `top_p` | `any` |  |
| `trace` | `Record<string, any>` |  |
| `truncation` | `any` |  |
| `user` | `string` |  |

#### Example: Create

```ts
const create_preset_from_inference = await client.CreatePresetFromInference().create({
  slug: 'example_slug',
})
```


### CreateWorkspace

Create an instance: `const create_workspace = client.CreateWorkspace()`


### Credit

Create an instance: `const credit = client.Credit()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |

#### Example: Load

```ts
const credit = await client.Credit().load()
```

#### Example: Create

```ts
const credit = await client.Credit().create({
  data: {},
})
```


### Destination

Create an instance: `const destination = client.Destination()`


### Embedding

Create an instance: `const embedding = client.Embedding()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `dimension` | `number` |  |
| `encoding_format` | `string` |  |
| `id` | `string` |  |
| `input` | `any` |  |
| `input_type` | `string` |  |
| `model` | `string` |  |
| `object` | `string` |  |
| `provider` | `any` |  |
| `usage` | `Record<string, any>` |  |
| `user` | `string` |  |

#### Example: Create

```ts
const embedding = await client.Embedding().create({
  data: [],
  input: 'example_input',
  model: 'example_model',
  object: 'example_object',
  usage: {},
})
```


### Endpoint

Create an instance: `const endpoint = client.Endpoint()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `Record<string, any>` |  |
| `benchmark` | `Record<string, any>` |  |
| `canonical_slug` | `string` |  |
| `context_length` | `any` |  |
| `created` | `number` |  |
| `data` | `Record<string, any>` |  |
| `default_parameter` | `any` |  |
| `description` | `string` |  |
| `expiration_date` | `any` |  |
| `hugging_face_id` | `any` |  |
| `id` | `string` |  |
| `knowledge_cutoff` | `any` |  |
| `latency_last_30m` | `any` |  |
| `link` | `Record<string, any>` |  |
| `max_completion_token` | `any` |  |
| `max_prompt_token` | `any` |  |
| `model_id` | `string` |  |
| `model_name` | `string` |  |
| `name` | `string` |  |
| `per_request_limit` | `any` |  |
| `pricing` | `Record<string, any>` |  |
| `provider_name` | `string` |  |
| `quantization` | `any` |  |
| `reasoning` | `Record<string, any>` |  |
| `status` | `number` |  |
| `supported_parameter` | `any[]` |  |
| `supported_voice` | `any` |  |
| `supports_implicit_caching` | `boolean` |  |
| `tag` | `string` |  |
| `throughput_last_30m` | `any` |  |
| `top_provider` | `Record<string, any>` |  |
| `uptime_last_1d` | `any` |  |
| `uptime_last_30m` | `any` |  |
| `uptime_last_5m` | `any` |  |

#### Example: Load

```ts
const endpoint = await client.Endpoint().load({ author: 'author', slug: 'slug' })
```

#### Example: List

```ts
const endpoints = await client.Endpoint().list()
```


### Feedback

Create an instance: `const feedback = client.Feedback()`


### File

Create an instance: `const file = client.File()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `downloadable` | `boolean` |  |
| `filename` | `string` |  |
| `id` | `string` |  |
| `mime_type` | `string` |  |
| `size_byte` | `number` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const file = await client.File().load({ id: 'file_id' })
```

#### Example: List

```ts
const files = await client.File().list()
```

#### Example: Create

```ts
const file = await client.File().create({
  created_at: 'example_created_at',
  downloadable: true,
  filename: 'example_filename',
  id: 'example_id',
  mime_type: 'example_mime_type',
  size_byte: 1,
  type: 'example_type',
})
```


### Generation

Create an instance: `const generation = client.Generation()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |

#### Example: Load

```ts
const generation = await client.Generation().load()
```


### GenerationContent

Create an instance: `const generation_content = client.GenerationContent()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |

#### Example: Load

```ts
const generation_content = await client.GenerationContent().load()
```


### Guardrail

Create an instance: `const guardrail = client.Guardrail()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_model` | `any` |  |
| `allowed_provider` | `any` |  |
| `content_filter` | `any` |  |
| `content_filter_builtin` | `any` |  |
| `created_at` | `string` |  |
| `data` | `any` |  |
| `description` | `any` |  |
| `enforce_zdr` | `any` |  |
| `enforce_zdr_anthropic` | `any` |  |
| `enforce_zdr_google` | `any` |  |
| `enforce_zdr_openai` | `any` |  |
| `enforce_zdr_other` | `any` |  |
| `enforce_zdr_xai` | `any` |  |
| `id` | `string` |  |
| `ignored_model` | `any` |  |
| `ignored_provider` | `any` |  |
| `limit_usd` | `any` |  |
| `name` | `string` |  |
| `reset_interval` | `any` |  |
| `updated_at` | `any` |  |
| `workspace_id` | `string` |  |

#### Example: Load

```ts
const guardrail = await client.Guardrail().load({ id: 'guardrail_id' })
```

#### Example: List

```ts
const guardrails = await client.Guardrail().list()
```

#### Example: Create

```ts
const guardrail = await client.Guardrail().create({
  created_at: 'example_created_at',
  data: 'example_data',
  id: 'example_id',
  name: 'example_name',
})
```


### Image

Create an instance: `const image = client.Image()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aspect_ratio` | `string` |  |
| `background` | `string` |  |
| `created` | `number` |  |
| `data` | `any[]` |  |
| `input_reference` | `any[]` |  |
| `model` | `string` |  |
| `n` | `number` |  |
| `output_compression` | `number` |  |
| `output_format` | `string` |  |
| `prompt` | `string` |  |
| `provider` | `Record<string, any>` |  |
| `quality` | `string` |  |
| `resolution` | `string` |  |
| `seed` | `number` |  |
| `size` | `string` |  |
| `stream` | `boolean` |  |
| `usage` | `Record<string, any>` |  |

#### Example: Create

```ts
const image = await client.Image().create({
  created: 1,
  data: [],
  model: 'example_model',
  prompt: 'example_prompt',
  usage: {},
})
```


### ImageModelEndpoint

Create an instance: `const image_model_endpoint = client.ImageModelEndpoint()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_passthrough_parameter` | `any[]` |  |
| `pricing` | `any[]` |  |
| `provider_name` | `string` |  |
| `provider_slug` | `string` |  |
| `provider_tag` | `any` |  |
| `supported_parameter` | `any` |  |
| `supports_streaming` | `boolean` |  |

#### Example: List

```ts
const image_model_endpoints = await client.ImageModelEndpoint().list()
```


### ImageModelsList

Create an instance: `const image_models_list = client.ImageModelsList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `Record<string, any>` |  |
| `created` | `number` |  |
| `description` | `string` |  |
| `endpoint` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `supported_parameter` | `Record<string, any>` |  |
| `supports_streaming` | `boolean` |  |

#### Example: List

```ts
const image_models_lists = await client.ImageModelsList().list()
```


### Key

Create an instance: `const key = client.Key()`


### ListByokKey

Create an instance: `const list_byok_key = client.ListByokKey()`


### ListGuardrail

Create an instance: `const list_guardrail = client.ListGuardrail()`


### ListKeyAssignment

Create an instance: `const list_key_assignment = client.ListKeyAssignment()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_by` | `any` |  |
| `created_at` | `string` |  |
| `guardrail_id` | `string` |  |
| `id` | `string` |  |
| `key_hash` | `string` |  |
| `key_label` | `string` |  |
| `key_name` | `string` |  |

#### Example: List

```ts
const list_key_assignments = await client.ListKeyAssignment().list()
```


### ListMemberAssignment

Create an instance: `const list_member_assignment = client.ListMemberAssignment()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_by` | `any` |  |
| `created_at` | `string` |  |
| `guardrail_id` | `string` |  |
| `id` | `string` |  |
| `organization_id` | `string` |  |
| `user_id` | `string` |  |

#### Example: List

```ts
const list_member_assignments = await client.ListMemberAssignment().list()
```


### ListObservabilityDestination

Create an instance: `const list_observability_destination = client.ListObservabilityDestination()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `total_count` | `number` |  |

#### Example: List

```ts
const list_observability_destinations = await client.ListObservabilityDestination().list()
```


### ListPreset

Create an instance: `const list_preset = client.ListPreset()`


### ListPresetVersion

Create an instance: `const list_preset_version = client.ListPresetVersion()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `Record<string, any>` |  |
| `created_at` | `string` |  |
| `creator_id` | `string` |  |
| `id` | `string` |  |
| `preset_id` | `string` |  |
| `system_prompt` | `any` |  |
| `updated_at` | `string` |  |
| `version` | `number` |  |

#### Example: List

```ts
const list_preset_versions = await client.ListPresetVersion().list()
```


### ListWorkspace

Create an instance: `const list_workspace = client.ListWorkspace()`


### ListWorkspaceBudget

Create an instance: `const list_workspace_budget = client.ListWorkspaceBudget()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `limit_usd` | `number` |  |
| `reset_interval` | `any` |  |
| `updated_at` | `string` |  |
| `workspace_id` | `string` |  |

#### Example: List

```ts
const list_workspace_budgets = await client.ListWorkspaceBudget().list()
```


### ListWorkspaceMember

Create an instance: `const list_workspace_member = client.ListWorkspaceMember()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `role` | `string` |  |
| `user_id` | `string` |  |
| `workspace_id` | `string` |  |

#### Example: List

```ts
const list_workspace_members = await client.ListWorkspaceMember().list()
```


### Member

Create an instance: `const member = client.Member()`


### Message

Create an instance: `const message = client.Message()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_control` | `Record<string, any>` |  |
| `context_management` | `any` |  |
| `fallback` | `any` |  |
| `max_token` | `number` |  |
| `message` | `any` |  |
| `metadata` | `Record<string, any>` |  |
| `model` | `string` |  |
| `output_config` | `Record<string, any>` |  |
| `plugin` | `any[]` |  |
| `provider` | `any` |  |
| `route` | `any` |  |
| `service_tier` | `string` |  |
| `session_id` | `string` |  |
| `speed` | `any` |  |
| `stop_sequence` | `any[]` |  |
| `stop_server_tools_when` | `any[]` |  |
| `stream` | `boolean` |  |
| `system` | `any` |  |
| `temperature` | `number` |  |
| `thinking` | `any` |  |
| `tool` | `any[]` |  |
| `tool_choice` | `any` |  |
| `top_k` | `number` |  |
| `top_p` | `number` |  |
| `trace` | `Record<string, any>` |  |
| `user` | `string` |  |

#### Example: Create

```ts
const message = await client.Message().create({
  cache_control: {},
  message: 'example_message',
  model: 'example_model',
})
```


### Meta

Create an instance: `const meta = client.Meta()`


### Model

Create an instance: `const model = client.Model()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `Record<string, any>` |  |
| `benchmark` | `Record<string, any>` |  |
| `canonical_slug` | `string` |  |
| `context_length` | `any` |  |
| `created` | `number` |  |
| `data` | `Record<string, any>` |  |
| `default_parameter` | `any` |  |
| `description` | `string` |  |
| `expiration_date` | `any` |  |
| `hugging_face_id` | `any` |  |
| `id` | `string` |  |
| `knowledge_cutoff` | `any` |  |
| `link` | `Record<string, any>` |  |
| `name` | `string` |  |
| `per_request_limit` | `any` |  |
| `pricing` | `Record<string, any>` |  |
| `reasoning` | `Record<string, any>` |  |
| `supported_parameter` | `any[]` |  |
| `supported_voice` | `any` |  |
| `top_provider` | `Record<string, any>` |  |

#### Example: Load

```ts
const model = await client.Model().load({ author: 'author', slug: 'slug' })
```

#### Example: List

```ts
const models = await client.Model().list()
```


### ModelsCount

Create an instance: `const models_count = client.ModelsCount()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |

#### Example: Load

```ts
const models_count = await client.ModelsCount().load()
```


### ModelsList

Create an instance: `const models_list = client.ModelsList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `Record<string, any>` |  |
| `benchmark` | `Record<string, any>` |  |
| `canonical_slug` | `string` |  |
| `context_length` | `any` |  |
| `created` | `number` |  |
| `default_parameter` | `any` |  |
| `description` | `string` |  |
| `expiration_date` | `any` |  |
| `hugging_face_id` | `any` |  |
| `id` | `string` |  |
| `knowledge_cutoff` | `any` |  |
| `link` | `Record<string, any>` |  |
| `name` | `string` |  |
| `per_request_limit` | `any` |  |
| `pricing` | `Record<string, any>` |  |
| `reasoning` | `Record<string, any>` |  |
| `supported_parameter` | `any[]` |  |
| `supported_voice` | `any` |  |
| `top_provider` | `Record<string, any>` |  |

#### Example: List

```ts
const models_lists = await client.ModelsList().list()
```


### OAuth

Create an instance: `const o_auth = client.OAuth()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `callback_url` | `string` |  |
| `code` | `string` |  |
| `code_challenge` | `string` |  |
| `code_challenge_method` | `any` |  |
| `code_verifier` | `string` |  |
| `data` | `Record<string, any>` |  |
| `expires_at` | `any` |  |
| `key` | `string` |  |
| `key_label` | `string` |  |
| `limit` | `number` |  |
| `spawn_agent` | `string` |  |
| `spawn_cloud` | `string` |  |
| `usage_limit_type` | `string` |  |
| `user_id` | `any` |  |
| `workspace_id` | `string` |  |

#### Example: Create

```ts
const o_auth = await client.OAuth().create({
  callback_url: 'example_callback_url',
  code: 'example_code',
  data: {},
  key: 'example_key',
  user_id: 'example_user_id',
})
```


### ObservabilityDestination

Create an instance: `const observability_destination = client.ObservabilityDestination()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any` |  |

#### Example: Load

```ts
const observability_destination = await client.ObservabilityDestination().load({ id: 'observability_destination_id' })
```


### OpenResponsesResult

Create an instance: `const open_responses_result = client.OpenResponsesResult()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `background` | `any` |  |
| `cache_control` | `Record<string, any>` |  |
| `debug` | `Record<string, any>` |  |
| `frequency_penalty` | `any` |  |
| `image_config` | `Record<string, any>` |  |
| `include` | `any` |  |
| `input` | `any` |  |
| `instruction` | `any` |  |
| `max_output_token` | `any` |  |
| `max_tool_call` | `any` |  |
| `metadata` | `any` |  |
| `modality` | `any[]` |  |
| `model` | `string` |  |
| `parallel_tool_call` | `any` |  |
| `plugin` | `any[]` |  |
| `presence_penalty` | `any` |  |
| `previous_response_id` | `string` |  |
| `prompt` | `any` |  |
| `prompt_cache_key` | `any` |  |
| `prompt_cache_option` | `any` |  |
| `provider` | `any` |  |
| `reasoning` | `any` |  |
| `route` | `any` |  |
| `safety_identifier` | `any` |  |
| `service_tier` | `any` |  |
| `session_id` | `string` |  |
| `stop_server_tools_when` | `any[]` |  |
| `store` | `boolean` |  |
| `stream` | `boolean` |  |
| `temperature` | `any` |  |
| `text` | `any` |  |
| `tool` | `any[]` |  |
| `tool_choice` | `any` |  |
| `top_k` | `number` |  |
| `top_logprob` | `any` |  |
| `top_p` | `any` |  |
| `trace` | `Record<string, any>` |  |
| `truncation` | `any` |  |
| `user` | `string` |  |

#### Example: Create

```ts
const open_responses_result = await client.OpenResponsesResult().create({
  cache_control: {},
  prompt: 'example_prompt',
  prompt_cache_option: 'example_prompt_cache_option',
})
```


### Organization

Create an instance: `const organization = client.Organization()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `first_name` | `any` |  |
| `id` | `string` |  |
| `last_name` | `any` |  |
| `role` | `string` |  |

#### Example: List

```ts
const organizations = await client.Organization().list()
```


### Preset

Create an instance: `const preset = client.Preset()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `creator_user_id` | `any` |  |
| `data` | `any` |  |
| `description` | `any` |  |
| `designated_version_id` | `any` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `status` | `string` |  |
| `status_updated_at` | `any` |  |
| `updated_at` | `string` |  |
| `workspace_id` | `any` |  |

#### Example: Load

```ts
const preset = await client.Preset().load({ id: 'preset_id' })
```

#### Example: List

```ts
const presets = await client.Preset().list()
```


### PresetVersion

Create an instance: `const preset_version = client.PresetVersion()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any` |  |

#### Example: Load

```ts
const preset_version = await client.PresetVersion().load({ id: 'preset_version_id', slug: 'slug' })
```


### Provider

Create an instance: `const provider = client.Provider()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `datacenter` | `any` |  |
| `headquarter` | `any` |  |
| `name` | `string` |  |
| `privacy_policy_url` | `any` |  |
| `slug` | `string` |  |
| `status_page_url` | `any` |  |
| `terms_of_service_url` | `any` |  |

#### Example: List

```ts
const providers = await client.Provider().list()
```


### Query

Create an instance: `const query = client.Query()`


### RankingsDaily

Create an instance: `const rankings_daily = client.RankingsDaily()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `model_permaslug` | `string` |  |
| `total_token` | `string` |  |

#### Example: List

```ts
const rankings_dailys = await client.RankingsDaily().list()
```


### Remove

Create an instance: `const remove = client.Remove()`


### Rerank

Create an instance: `const rerank = client.Rerank()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `document` | `any[]` |  |
| `id` | `string` |  |
| `model` | `string` |  |
| `provider` | `string` |  |
| `query` | `string` |  |
| `result` | `any[]` |  |
| `top_n` | `number` |  |
| `usage` | `Record<string, any>` |  |

#### Example: Create

```ts
const rerank = await client.Rerank().create({
  document: [],
  model: 'example_model',
  query: 'example_query',
  result: [],
})
```


### Response

Create an instance: `const response = client.Response()`


### Speech

Create an instance: `const speech = client.Speech()`


### Stt

Create an instance: `const stt = client.Stt()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `duration` | `number` |  |
| `input_audio` | `Record<string, any>` |  |
| `language` | `string` |  |
| `model` | `string` |  |
| `provider` | `Record<string, any>` |  |
| `response_format` | `string` |  |
| `segment` | `any[]` |  |
| `task` | `string` |  |
| `temperature` | `number` |  |
| `text` | `string` |  |
| `timestamp_granularity` | `any[]` |  |
| `usage` | `Record<string, any>` |  |
| `word` | `any[]` |  |

#### Example: Create

```ts
const stt = await client.Stt().create({
  input_audio: {},
  model: 'example_model',
  text: 'example_text',
})
```


### SubmitGenerationFeedback

Create an instance: `const submit_generation_feedback = client.SubmitGenerationFeedback()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` |  |
| `comment` | `string` |  |
| `data` | `Record<string, any>` |  |
| `generation_id` | `string` |  |

#### Example: Create

```ts
const submit_generation_feedback = await client.SubmitGenerationFeedback().create({
  category: 'example_category',
  data: {},
  generation_id: 'example_generation_id',
})
```


### Task

Create an instance: `const task = client.Task()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |

#### Example: Load

```ts
const task = await client.Task().load()
```


### Transcription

Create an instance: `const transcription = client.Transcription()`


### Tts

Create an instance: `const tts = client.Tts()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `string` |  |
| `model` | `string` |  |
| `provider` | `Record<string, any>` |  |
| `response_format` | `string` |  |
| `speed` | `number` |  |
| `voice` | `string` |  |

#### Example: Create

```ts
const tts = await client.Tts().create({
  input: 'example_input',
  model: 'example_model',
  voice: 'example_voice',
})
```


### UnifiedBenchmark

Create an instance: `const unified_benchmark = client.UnifiedBenchmark()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `meta` | `Record<string, any>` |  |

#### Example: List

```ts
const unified_benchmarks = await client.UnifiedBenchmark().list()
```


### UpdateByokKey

Create an instance: `const update_byok_key = client.UpdateByokKey()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_model` | `any` |  |
| `allowed_user_id` | `any` |  |
| `data` | `any` |  |
| `disabled` | `boolean` |  |
| `is_fallback` | `boolean` |  |
| `key` | `string` |  |
| `name` | `any` |  |


### UpdateGuardrail

Create an instance: `const update_guardrail = client.UpdateGuardrail()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_model` | `any` |  |
| `allowed_provider` | `any` |  |
| `content_filter` | `any` |  |
| `content_filter_builtin` | `any` |  |
| `data` | `any` |  |
| `description` | `any` |  |
| `enforce_zdr` | `any` |  |
| `enforce_zdr_anthropic` | `any` |  |
| `enforce_zdr_google` | `any` |  |
| `enforce_zdr_openai` | `any` |  |
| `enforce_zdr_other` | `any` |  |
| `enforce_zdr_xai` | `any` |  |
| `ignored_model` | `any` |  |
| `ignored_provider` | `any` |  |
| `limit_usd` | `any` |  |
| `name` | `string` |  |
| `reset_interval` | `any` |  |


### UpdateObservabilityDestination

Create an instance: `const update_observability_destination = client.UpdateObservabilityDestination()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hash` | `any` |  |
| `config` | `Record<string, any>` |  |
| `data` | `any` |  |
| `enabled` | `boolean` |  |
| `filter_rule` | `any` |  |
| `name` | `string` |  |
| `privacy_mode` | `boolean` |  |
| `sampling_rate` | `number` |  |


### UpdateWorkspace

Create an instance: `const update_workspace = client.UpdateWorkspace()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `created_by` | `any` |  |
| `data` | `any` |  |
| `default_image_model` | `any` |  |
| `default_provider_sort` | `any` |  |
| `default_text_model` | `any` |  |
| `description` | `any` |  |
| `id` | `string` |  |
| `io_logging_api_key_id` | `any` |  |
| `io_logging_sampling_rate` | `number` |  |
| `is_data_discount_logging_enabled` | `boolean` |  |
| `is_observability_broadcast_enabled` | `boolean` |  |
| `is_observability_io_logging_enabled` | `boolean` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `updated_at` | `any` |  |

#### Example: List

```ts
const update_workspaces = await client.UpdateWorkspace().list()
```

#### Example: Create

```ts
const update_workspace = await client.UpdateWorkspace().create({
  created_at: 'example_created_at',
  created_by: 'example_created_by',
  data: 'example_data',
  id: 'example_id',
  name: 'example_name',
  slug: 'example_slug',
  updated_at: 'example_updated_at',
})
```


### UpsertWorkspaceBudget

Create an instance: `const upsert_workspace_budget = client.UpsertWorkspaceBudget()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any` |  |
| `limit_usd` | `number` |  |


### User

Create an instance: `const user = client.User()`


### Version

Create an instance: `const version = client.Version()`


### Video

Create an instance: `const video = client.Video()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aspect_ratio` | `string` |  |
| `callback_url` | `string` |  |
| `duration` | `number` |  |
| `error` | `string` |  |
| `frame_image` | `any[]` |  |
| `generate_audio` | `boolean` |  |
| `generation_id` | `string` |  |
| `id` | `string` |  |
| `input_reference` | `any[]` |  |
| `model` | `string` |  |
| `polling_url` | `string` |  |
| `prompt` | `string` |  |
| `provider` | `Record<string, any>` |  |
| `resolution` | `string` |  |
| `seed` | `number` |  |
| `size` | `string` |  |
| `status` | `string` |  |
| `unsigned_url` | `any[]` |  |
| `usage` | `Record<string, any>` |  |

#### Example: Load

```ts
const video = await client.Video().load({ id: 'video_id' })
```

#### Example: Create

```ts
const video = await client.Video().create({
  id: 'example_id',
  model: 'example_model',
  polling_url: 'example_polling_url',
  status: 'example_status',
})
```


### VideoGeneration

Create an instance: `const video_generation = client.VideoGeneration()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const video_generation = await client.VideoGeneration().load({ id: 'video_generation_id' })
```


### VideoModelsList

Create an instance: `const video_models_list = client.VideoModelsList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_passthrough_parameter` | `any[]` |  |
| `canonical_slug` | `string` |  |
| `created` | `number` |  |
| `description` | `string` |  |
| `generate_audio` | `any` |  |
| `hugging_face_id` | `any` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `pricing_skus` | `any` |  |
| `seed` | `any` |  |
| `supported_aspect_ratio` | `any` |  |
| `supported_duration` | `any` |  |
| `supported_frame_image` | `any` |  |
| `supported_resolution` | `any` |  |
| `supported_size` | `any` |  |

#### Example: List

```ts
const video_models_lists = await client.VideoModelsList().list()
```


### Workspace

Create an instance: `const workspace = client.Workspace()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any` |  |

#### Example: Load

```ts
const workspace = await client.Workspace().load({ id: 'workspace_id' })
```


### WorkspaceBudget

Create an instance: `const workspace_budget = client.WorkspaceBudget()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Zdr

Create an instance: `const zdr = client.Zdr()`


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
openrouter-models/
├── src/
│   ├── OpenrouterModelsSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { OpenrouterModelsSDK } from '@voxgig-sdk/openrouter-models'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const activity = client.Activity()
await activity.list()

// activity.data() now returns the activity data from the last `list`
// activity.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
