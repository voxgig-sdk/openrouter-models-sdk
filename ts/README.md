# OpenrouterModels TypeScript SDK



The TypeScript SDK for the OpenrouterModels API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Activity()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
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
import { OpenrouterModelsSDK } from '@voxgig-sdk/openrouter-models-sdk'

const client = new OpenrouterModelsSDK({
  apikey: process.env.OPENROUTER_MODELS_APIKEY,
})
```

### 2. List activity records

`list()` resolves to an array of Activity ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

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
  const providers = await client.Provider().list()
  console.log(providers)
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

const provider = await client.Provider().list()
// provider is the entity, populated with mock response data
// — call provider.data() for the record itself
console.log(provider)
```

You can also use the instance method:

```ts
const client = new OpenrouterModelsSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Provider()

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

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


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
| `ApiKey(data?)` | `ApiKeyEntity` | Create an ApiKey entity instance. |
| `AppRanking(data?)` | `AppRankingEntity` | Create an AppRanking entity instance. |
| `BetaAnalytics(data?)` | `BetaAnalyticsEntity` | Create a BetaAnalytics entity instance. |
| `BulkAddWorkspaceMember(data?)` | `BulkAddWorkspaceMemberEntity` | Create a BulkAddWorkspaceMember entity instance. |
| `BulkAssignKey(data?)` | `BulkAssignKeyEntity` | Create a BulkAssignKey entity instance. |
| `BulkAssignMember(data?)` | `BulkAssignMemberEntity` | Create a BulkAssignMember entity instance. |
| `BulkRemoveWorkspaceMember(data?)` | `BulkRemoveWorkspaceMemberEntity` | Create a BulkRemoveWorkspaceMember entity instance. |
| `BulkUnassignKey(data?)` | `BulkUnassignKeyEntity` | Create a BulkUnassignKey entity instance. |
| `BulkUnassignMember(data?)` | `BulkUnassignMemberEntity` | Create a BulkUnassignMember entity instance. |
| `Byok(data?)` | `ByokEntity` | Create a Byok entity instance. |
| `ChatResult(data?)` | `ChatResultEntity` | Create a ChatResult entity instance. |
| `Completion(data?)` | `CompletionEntity` | Create a Completion entity instance. |
| `CreateObservabilityDestination(data?)` | `CreateObservabilityDestinationEntity` | Create a CreateObservabilityDestination entity instance. |
| `Credit(data?)` | `CreditEntity` | Create a Credit entity instance. |
| `Embedding(data?)` | `EmbeddingEntity` | Create an Embedding entity instance. |
| `Endpoint(data?)` | `EndpointEntity` | Create an Endpoint entity instance. |
| `File(data?)` | `FileEntity` | Create a File entity instance. |
| `Generation(data?)` | `GenerationEntity` | Create a Generation entity instance. |
| `GenerationContentData(data?)` | `GenerationContentDataEntity` | Create a GenerationContentData entity instance. |
| `Guardrail(data?)` | `GuardrailEntity` | Create a Guardrail entity instance. |
| `Image(data?)` | `ImageEntity` | Create an Image entity instance. |
| `ImageModelEndpoint(data?)` | `ImageModelEndpointEntity` | Create an ImageModelEndpoint entity instance. |
| `ImageModelListItem(data?)` | `ImageModelListItemEntity` | Create an ImageModelListItem entity instance. |
| `Key(data?)` | `KeyEntity` | Create a Key entity instance. |
| `ListObservabilityDestination(data?)` | `ListObservabilityDestinationEntity` | Create a ListObservabilityDestination entity instance. |
| `ListPresetVersion(data?)` | `ListPresetVersionEntity` | Create a ListPresetVersion entity instance. |
| `Member(data?)` | `MemberEntity` | Create a Member entity instance. |
| `Message(data?)` | `MessageEntity` | Create a Message entity instance. |
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
| `RankingsDaily(data?)` | `RankingsDailyEntity` | Create a RankingsDaily entity instance. |
| `Rerank(data?)` | `RerankEntity` | Create a Rerank entity instance. |
| `Response(data?)` | `ResponseEntity` | Create a Response entity instance. |
| `Stt(data?)` | `SttEntity` | Create a Stt entity instance. |
| `SubmitGenerationFeedback(data?)` | `SubmitGenerationFeedbackEntity` | Create a SubmitGenerationFeedback entity instance. |
| `Task(data?)` | `TaskEntity` | Create a Task entity instance. |
| `Tts(data?)` | `TtsEntity` | Create a Tts entity instance. |
| `UnifiedBenchmark(data?)` | `UnifiedBenchmarkEntity` | Create an UnifiedBenchmark entity instance. |
| `UpdateByokKey(data?)` | `UpdateByokKeyEntity` | Create an UpdateByokKey entity instance. |
| `UpdateGuardrail(data?)` | `UpdateGuardrailEntity` | Create an UpdateGuardrail entity instance. |
| `UpdateObservabilityDestination(data?)` | `UpdateObservabilityDestinationEntity` | Create an UpdateObservabilityDestination entity instance. |
| `UpdateWorkspace(data?)` | `UpdateWorkspaceEntity` | Create an UpdateWorkspace entity instance. |
| `UpsertWorkspaceBudget(data?)` | `UpsertWorkspaceBudgetEntity` | Create an UpsertWorkspaceBudget entity instance. |
| `Video(data?)` | `VideoEntity` | Create a Video entity instance. |
| `VideoGeneration(data?)` | `VideoGenerationEntity` | Create a VideoGeneration entity instance. |
| `VideoModel(data?)` | `VideoModelEntity` | Create a VideoModel entity instance. |
| `Workspace(data?)` | `WorkspaceEntity` | Create a Workspace entity instance. |
| `WorkspaceBudget(data?)` | `WorkspaceBudgetEntity` | Create a WorkspaceBudget entity instance. |
| `WorkspaceMember(data?)` | `WorkspaceMemberEntity` | Create a WorkspaceMember entity instance. |
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
| `byok_usage_inference` | BYOK inference cost in USD (external credits spent) |
| `completion_tokens` | Total completion tokens generated |
| `date` | Date of the activity (YYYY-MM-DD format) |
| `endpoint_id` | Unique identifier for the endpoint |
| `model` | Model slug (e.g., "openai/gpt-4.1") |
| `model_permaslug` | Model permaslug (e.g., "openai/gpt-4.1-2025-04-14") |
| `prompt_tokens` | Total prompt tokens used |
| `provider_name` | Name of the provider serving this endpoint |
| `reasoning_tokens` | Total reasoning tokens used |
| `requests` | Number of requests made |
| `usage` | Total cost in USD (OpenRouter credits spent) |

Operations: list.

API path: `/activity`

#### ApiKey

| Field | Description |
| --- | --- |
| `byok_usage` | Total external BYOK usage (in USD) for the API key |
| `byok_usage_daily` | External BYOK usage (in USD) for the current UTC day |
| `byok_usage_monthly` | External BYOK usage (in USD) for current UTC month |
| `byok_usage_weekly` | External BYOK usage (in USD) for the current UTC week (Monday-Sunday) |
| `created_at` | ISO 8601 timestamp of when the API key was created |
| `creator_user_id` | The user ID of the key creator. |
| `disabled` | Whether the API key is disabled |
| `expires_at` | ISO 8601 UTC timestamp when the API key expires, or null if no expiration |
| `hash` | Unique hash identifier for the API key |
| `id` |  |
| `include_byok_in_limit` | Whether to include external BYOK usage in the credit limit |
| `is_free_tier` | Whether this is a free tier API key |
| `is_management_key` | Whether this is a management key |
| `is_provisioning_key` | Whether this is a management key |
| `label` | Human-readable label for the API key |
| `limit` | Spending limit for the API key in USD |
| `limit_remaining` | Remaining spending limit in USD |
| `limit_reset` | Type of limit reset for the API key |
| `name` | Name of the API key |
| `rate_limit` | Legacy rate limit information about a key. |
| `updated_at` | ISO 8601 timestamp of when the API key was last updated |
| `usage` | Total OpenRouter credit usage (in USD) for the API key |
| `usage_daily` | OpenRouter credit usage (in USD) for the current UTC day |
| `usage_monthly` | OpenRouter credit usage (in USD) for the current UTC month |
| `usage_weekly` | OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday) |
| `workspace_id` | The workspace ID this API key belongs to. |

Operations: create, list, load, remove, update.

API path: `/keys`

#### AppRanking

| Field | Description |
| --- | --- |
| `app_id` | Stable numeric identifier of the app on OpenRouter. |
| `app_name` | Public display name of the app. |
| `rank` | 1-based position of the app within this response, per the requested `sort`. |
| `total_requests` | Number of requests attributed to the app inside the date window. |
| `total_tokens` | Sum of `prompt_tokens + completion_tokens` attributed to the app inside the date window, returned as a decimal string so 64-bit values are not truncated. |

Operations: list.

API path: `/datasets/app-rankings`

#### BetaAnalytics

| Field | Description |
| --- | --- |
| `cachedAt` |  |
| `classifier_dimensions` | Group results by custom classifier tags, breaking down metrics by the specified dimension values. |
| `classifier_filters` | Filter results to generations with specific classifier tag values. |
| `data` |  |
| `dimensions` |  |
| `filters` |  |
| `granularities` |  |
| `granularity` | Time granularity |
| `group_limit` | Maximum rows per distinct combination of dimensions. |
| `limit` | Maximum total rows returned. |
| `metadata` |  |
| `metrics` |  |
| `operators` |  |
| `order_by` |  |
| `time_range` |  |
| `warnings` | Warnings about filter resolution issues (e.g. |

Operations: create, load.

API path: `/analytics/query`

#### BulkAddWorkspaceMember

| Field | Description |
| --- | --- |
| `added_count` | Number of workspace memberships created or updated |
| `data` | List of added workspace memberships |
| `user_ids` | List of user IDs to add to the workspace. |

Operations: create.

API path: `/workspaces/{id}/members/add`

#### BulkAssignKey

| Field | Description |
| --- | --- |
| `assigned_count` | Number of keys successfully assigned |
| `key_hashes` | Array of API key hashes to assign to the guardrail |

Operations: create.

API path: `/guardrails/{id}/assignments/keys`

#### BulkAssignMember

| Field | Description |
| --- | --- |
| `assigned_count` | Number of members successfully assigned |
| `member_user_ids` | Array of member user IDs to assign to the guardrail |

Operations: create.

API path: `/guardrails/{id}/assignments/members`

#### BulkRemoveWorkspaceMember

| Field | Description |
| --- | --- |
| `removed_count` | Number of members removed |
| `user_ids` | List of user IDs to remove from the workspace |

Operations: create.

API path: `/workspaces/{id}/members/remove`

#### BulkUnassignKey

| Field | Description |
| --- | --- |
| `key_hashes` | Array of API key hashes to unassign from the guardrail |
| `unassigned_count` | Number of keys successfully unassigned |

Operations: create.

API path: `/guardrails/{id}/assignments/keys/remove`

#### BulkUnassignMember

| Field | Description |
| --- | --- |
| `member_user_ids` | Array of member user IDs to unassign from the guardrail |
| `unassigned_count` | Number of members successfully unassigned |

Operations: create.

API path: `/guardrails/{id}/assignments/members/remove`

#### Byok

| Field | Description |
| --- | --- |
| `allowed_api_key_hashes` | Optional allowlist of OpenRouter API key hashes (`api_keys.hash`) that may use this credential. |
| `allowed_models` | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | Optional allowlist of user IDs that may use this credential. |
| `created_at` | ISO timestamp of when the credential was created. |
| `disabled` | Whether this credential is currently disabled. |
| `id` | Stable public identifier for this BYOK credential. |
| `is_fallback` | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | The raw provider API key or credential. |
| `label` | Short masked snippet of the key (e.g. |
| `name` | Optional human-readable name for the credential. |
| `provider` | The upstream provider this credential authenticates against, as a lowercase slug (e.g. |
| `sort_order` | Position within the provider — credentials are tried in ascending sort order. |
| `workspace_id` | ID of the workspace this credential belongs to. |

Operations: create, list, load, remove.

API path: `/byok`

#### ChatResult

| Field | Description |
| --- | --- |
| `cache_control` | Enable automatic prompt caching. |
| `choices` | List of completion choices |
| `created` | Unix timestamp of creation |
| `debug` | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | Frequency penalty (-2.0 to 2.0) |
| `id` | Unique completion identifier |
| `image_config` | Provider-specific image configuration options. |
| `logit_bias` | Token logit bias adjustments |
| `logprobs` | Return log probabilities |
| `max_completion_tokens` | Maximum tokens in completion |
| `max_tokens` | Maximum tokens (deprecated, use max_completion_tokens). |
| `messages` | List of messages for the conversation |
| `metadata` | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | Minimum probability threshold relative to the most likely token. |
| `modalities` | Output modalities for the response. |
| `model` | Model used for completion |
| `models` | Models to use for completion |
| `object` |  |
| `openrouter_metadata` |  |
| `parallel_tool_calls` | Whether to enable parallel function calling during tool use. |
| `plugins` | Plugins you want to enable for this request, including their settings. |
| `prediction` | Static predicted output content. |
| `presence_penalty` | Presence penalty (-2.0 to 2.0) |
| `prompt_cache_key` |  |
| `prompt_cache_options` | Request-level prompt-cache controls. |
| `provider` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | Configuration options for reasoning models |
| `reasoning_effort` | Shorthand for setting reasoning effort. |
| `repetition_penalty` | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | Response format configuration |
| `route` | **DEPRECATED** Use providers.sort.partition instead. |
| `seed` | Random seed for deterministic outputs |
| `service_tier` | The service tier used by the upstream provider for this request |
| `session_id` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop` | Stop sequences (up to 4) |
| `stop_server_tools_when` | Stop conditions for the server-tool agent loop. |
| `stream` | Enable streaming response |
| `stream_options` | Streaming configuration options |
| `system_fingerprint` | System fingerprint |
| `temperature` | Sampling temperature (0-2) |
| `tool_choice` | Tool choice configuration |
| `tools` | Available tools for function calling |
| `top_a` | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | Number of top log probabilities to return (0-20) |
| `top_p` | Nucleus sampling parameter (0-1) |
| `trace` | Metadata for observability and tracing. |
| `usage` | Token usage statistics |
| `user` | Unique user identifier |

Operations: create.

API path: `/chat/completions`

#### Completion

| Field | Description |
| --- | --- |
| `cache_control` | Enable automatic prompt caching. |
| `debug` | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | Frequency penalty (-2.0 to 2.0) |
| `image_config` | Provider-specific image configuration options. |
| `logit_bias` | Token logit bias adjustments |
| `logprobs` | Return log probabilities |
| `max_completion_tokens` | Maximum tokens in completion |
| `max_tokens` | Maximum tokens (deprecated, use max_completion_tokens). |
| `messages` | List of messages for the conversation |
| `metadata` | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | Minimum probability threshold relative to the most likely token. |
| `modalities` | Output modalities for the response. |
| `model` | Model to use for completion |
| `models` | Models to use for completion |
| `parallel_tool_calls` | Whether to enable parallel function calling during tool use. |
| `plugins` | Plugins you want to enable for this request, including their settings. |
| `prediction` | Static predicted output content. |
| `presence_penalty` | Presence penalty (-2.0 to 2.0) |
| `prompt_cache_key` |  |
| `prompt_cache_options` | Request-level prompt-cache controls. |
| `provider` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | Configuration options for reasoning models |
| `reasoning_effort` | Shorthand for setting reasoning effort. |
| `repetition_penalty` | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | Response format configuration |
| `route` | **DEPRECATED** Use providers.sort.partition instead. |
| `seed` | Random seed for deterministic outputs |
| `service_tier` | The service tier to use for processing this request. |
| `session_id` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop` | Stop sequences (up to 4) |
| `stop_server_tools_when` | Stop conditions for the server-tool agent loop. |
| `stream` | Enable streaming response |
| `stream_options` | Streaming configuration options |
| `temperature` | Sampling temperature (0-2) |
| `tool_choice` | Tool choice configuration |
| `tools` | Available tools for function calling |
| `top_a` | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | Number of top log probabilities to return (0-20) |
| `top_p` | Nucleus sampling parameter (0-1) |
| `trace` | Metadata for observability and tracing. |
| `user` | Unique user identifier |

Operations: create.

API path: `/presets/{slug}/chat/completions`

#### CreateObservabilityDestination

| Field | Description |
| --- | --- |
| `api_key_hashes` | Optional allowlist of OpenRouter API key hashes whose traffic is forwarded. |
| `config` | Provider-specific configuration. |
| `enabled` | Whether this destination should be enabled immediately. |
| `filter_rules` | Optional structured filter rules controlling which events are forwarded. |
| `name` | Human-readable name for the destination. |
| `privacy_mode` | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | Sampling rate between 0.0001 and 1 (1 = 100%). |
| `type` | The destination type. |
| `workspace_id` | Optional workspace ID. |

Operations: create.

API path: `/observability/destinations`

#### Credit

| Field | Description |
| --- | --- |
| `total_credits` | Total credits purchased |
| `total_usage` | Total credits used |

Operations: create, load.

API path: `/credits/coinbase`

#### Embedding

| Field | Description |
| --- | --- |
| `data` | List of embedding objects |
| `dimensions` | The number of dimensions for the output embeddings |
| `encoding_format` | The format of the output embeddings |
| `id` | Unique identifier for the embeddings response |
| `input` | Text, token, or multimodal input(s) to embed |
| `input_type` | The type of input (e.g. |
| `model` | The model used for embeddings |
| `object` |  |
| `provider` |  |
| `usage` | Token usage statistics |
| `user` | A unique identifier for the end-user |

Operations: create.

API path: `/embeddings`

#### Endpoint

| Field | Description |
| --- | --- |
| `architecture` | Model architecture information |
| `benchmarks` | Third-party benchmark rankings for this model. |
| `canonical_slug` | Canonical slug for the model |
| `context_length` | Maximum context length in tokens |
| `created` | Unix timestamp of when the model was created |
| `default_parameters` | Default parameters for this model |
| `description` | Description of the model |
| `endpoints` | List of available endpoints for this model |
| `expiration_date` | The date after which the model may be removed. |
| `hugging_face_id` | Hugging Face model identifier, if applicable |
| `id` | Unique identifier for the model |
| `knowledge_cutoff` | The date up to which the model was trained on data. |
| `links` | Related API endpoints and resources for this model. |
| `name` | Display name of the model |
| `per_request_limits` | Per-request token limits |
| `pricing` | Pricing information for the model |
| `reasoning` | Reasoning effort configuration. |
| `supported_parameters` | List of supported parameters for this model |
| `supported_voices` | List of supported voice identifiers for TTS models. |
| `top_provider` | Information about the top provider for this model |

Operations: list, load.

API path: `/models`

#### File

| Field | Description |
| --- | --- |
| `created_at` |  |
| `downloadable` |  |
| `filename` |  |
| `id` |  |
| `mime_type` |  |
| `size_bytes` |  |
| `type` |  |

Operations: create, list, load, remove.

API path: `/files`

#### Generation

| Field | Description |
| --- | --- |
| `api_type` | Type of API used for the generation |
| `app_id` | ID of the app that made the request |
| `cache_discount` | Discount applied due to caching |
| `cancelled` | Whether the generation was cancelled |
| `created_at` | ISO 8601 timestamp of when the generation was created |
| `data_region` | The data region this generation was routed through. |
| `external_user` | External user identifier |
| `finish_reason` | Reason the generation finished |
| `generation_time` | Time taken for generation in milliseconds |
| `http_referer` | Referer header from the request |
| `id` | Unique identifier for the generation |
| `is_byok` | Whether this used bring-your-own-key |
| `latency` | Total latency in milliseconds |
| `model` | Model used for the generation |
| `moderation_latency` | Moderation latency in milliseconds |
| `native_finish_reason` | Native finish reason as reported by provider |
| `native_tokens_cached` | Native cached tokens as reported by provider |
| `native_tokens_completion` | Native completion tokens as reported by provider |
| `native_tokens_completion_images` | Native completion image tokens as reported by provider |
| `native_tokens_prompt` | Native prompt tokens as reported by provider |
| `native_tokens_reasoning` | Native reasoning tokens as reported by provider |
| `num_fetches` | Number of web fetches performed |
| `num_input_audio_prompt` | Number of audio inputs in the prompt |
| `num_media_completion` | Number of media items in the completion |
| `num_media_prompt` | Number of media items in the prompt |
| `num_search_results` | Number of search results included |
| `origin` | Origin URL of the request |
| `preset_id` | ID of the preset used for this generation, null if no preset was used |
| `provider_name` | Name of the provider that served the request |
| `provider_responses` | List of provider responses for this generation, including fallback attempts |
| `request_id` | Unique identifier grouping all generations from a single API request |
| `response_cache_source_id` | If this generation was served from response cache, contains the original generation ID. |
| `router` | Router used for the request (e.g., openrouter/auto) |
| `service_tier` | Service tier the upstream provider reported running this request on, or null if it did not report one. |
| `session_id` | Session identifier grouping multiple generations in the same session |
| `streamed` | Whether the response was streamed |
| `tokens_completion` | Number of tokens in the completion |
| `tokens_prompt` | Number of tokens in the prompt |
| `total_cost` | Total cost of the generation in USD |
| `upstream_id` | Upstream provider's identifier for this generation |
| `upstream_inference_cost` | Cost charged by the upstream provider |
| `usage` | Usage amount in USD |
| `user_agent` | User-Agent header from the request |
| `web_search_engine` | The resolved web search engine used for this generation (e.g. |

Operations: load.

API path: `/generation`

#### GenerationContentData

| Field | Description |
| --- | --- |
| `input` | The input to the generation — either a prompt string or an array of messages |
| `output` | The output from the generation |

Operations: load.

API path: `/generation/content`

#### Guardrail

| Field | Description |
| --- | --- |
| `allowed_models` | Array of model canonical_slugs (immutable identifiers) |
| `allowed_providers` | List of allowed provider IDs |
| `content_filter_builtins` | Builtin content filters applied to requests. |
| `content_filters` | Custom regex content filters applied to request messages |
| `created_at` | ISO 8601 timestamp of when the guardrail was created |
| `description` | Description of the guardrail |
| `enforce_zdr` | Deprecated. |
| `enforce_zdr_anthropic` | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | Whether to enforce zero data retention for xAI models. |
| `id` | Unique identifier for the guardrail |
| `ignored_models` | Array of model canonical_slugs to exclude from routing |
| `ignored_providers` | List of provider IDs to exclude from routing |
| `limit_usd` | Spending limit in USD |
| `name` | Name of the guardrail |
| `reset_interval` | Interval at which the limit resets (daily, weekly, monthly) |
| `updated_at` | ISO 8601 timestamp of when the guardrail was last updated |
| `workspace_id` | The workspace ID this guardrail belongs to. |

Operations: create, list, load, remove.

API path: `/guardrails`

#### Image

| Field | Description |
| --- | --- |
| `aspect_ratio` | Normalized aspect ratio of the generated image. |
| `background` | Background treatment. |
| `created` | Unix timestamp (seconds) when the image was generated |
| `data` | Generated images |
| `input_references` | Reference images to guide image-to-image generation, as base64 data URLs or HTTP(S) URLs. |
| `model` | The image generation model to use |
| `n` | Number of images to generate (1-10). |
| `output_compression` | Compression level (0-100) for webp/jpeg output. |
| `output_format` | Encoding of the returned image bytes. |
| `prompt` | Text description of the desired image |
| `provider` | Provider routing preferences and provider-specific passthrough configuration. |
| `quality` | Rendering quality. |
| `resolution` | Normalized resolution tier of the generated image. |
| `seed` | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | Optional. |
| `stream` | If true, partial images are streamed as SSE events as they become available. |
| `usage` | Token and cost usage for the image generation request, when available |

Operations: create.

API path: `/images`

#### ImageModelEndpoint

| Field | Description |
| --- | --- |
| `allowed_passthrough_parameters` | Provider-specific options accepted under provider.options[provider_slug]. |
| `pricing` | Billable pricing lines for this endpoint. |
| `provider_name` | Provider display name |
| `provider_slug` | Provider slug |
| `provider_tag` | Provider tag for request-side selection |
| `supported_parameters` |  |
| `supports_streaming` | Whether this endpoint supports native SSE streaming (`stream: true` in the request). |

Operations: list.

API path: `/images/models/{author}/{slug}/endpoints`

#### ImageModelListItem

| Field | Description |
| --- | --- |
| `architecture` |  |
| `created` | Unix timestamp (seconds) of when the model was created |
| `description` |  |
| `endpoints` | Relative URL to the full per-endpoint records for this model |
| `id` | Model slug |
| `name` | Display name |
| `supported_parameters` | Union of supported parameters across every endpoint of this model. |
| `supports_streaming` | Whether any endpoint of this model supports native SSE streaming on the dedicated Image API (i.e. |

Operations: list.

API path: `/images/models`

#### Key

| Field | Description |
| --- | --- |
| `assigned_by` | User ID of who made the assignment |
| `created_at` | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | ID of the guardrail |
| `id` | Unique identifier for the assignment |
| `key_hash` | Hash of the assigned API key |
| `key_label` | Label of the API key |
| `key_name` | Name of the API key |

Operations: list.

API path: `/guardrails/{id}/assignments/keys`

#### ListObservabilityDestination

| Field | Description |
| --- | --- |
| `data` | List of observability destinations. |
| `total_count` | Total number of destinations matching the filters. |

Operations: list.

API path: `/observability/destinations`

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

#### Member

| Field | Description |
| --- | --- |
| `assigned_by` | User ID of who made the assignment |
| `created_at` | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | ID of the guardrail |
| `id` | Unique identifier for the assignment |
| `organization_id` | Organization ID |
| `user_id` | Clerk user ID of the assigned member |

Operations: list.

API path: `/guardrails/{id}/assignments/members`

#### Message

| Field | Description |
| --- | --- |
| `cache_control` | Enable automatic prompt caching. |
| `context_management` |  |
| `fallbacks` | Fallback models to try if the primary model fails or refuses, in order. |
| `max_tokens` |  |
| `messages` |  |
| `metadata` |  |
| `model` |  |
| `models` |  |
| `output_config` | Configuration for controlling output behavior. |
| `plugins` | Plugins you want to enable for this request, including their settings. |
| `provider` | When multiple model providers are available, optionally indicate your routing preference. |
| `route` | **DEPRECATED** Use providers.sort.partition instead. |
| `service_tier` |  |
| `session_id` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `speed` |  |
| `stop_sequences` |  |
| `stop_server_tools_when` | Stop conditions for the server-tool agent loop. |
| `stream` |  |
| `system` |  |
| `temperature` |  |
| `thinking` |  |
| `tool_choice` |  |
| `tools` |  |
| `top_k` |  |
| `top_p` |  |
| `trace` | Metadata for observability and tracing. |
| `user` | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

Operations: create.

API path: `/presets/{slug}/messages`

#### Model

| Field | Description |
| --- | --- |
| `architecture` | Model architecture information |
| `benchmarks` | Third-party benchmark rankings for this model. |
| `canonical_slug` | Canonical slug for the model |
| `context_length` | Maximum context length in tokens |
| `created` | Unix timestamp of when the model was created |
| `default_parameters` | Default parameters for this model |
| `description` | Description of the model |
| `expiration_date` | The date after which the model may be removed. |
| `hugging_face_id` | Hugging Face model identifier, if applicable |
| `id` | Unique identifier for the model |
| `knowledge_cutoff` | The date up to which the model was trained on data. |
| `links` | Related API endpoints and resources for this model. |
| `name` | Display name of the model |
| `per_request_limits` | Per-request token limits |
| `pricing` | Pricing information for the model |
| `reasoning` | Reasoning effort configuration. |
| `supported_parameters` | List of supported parameters for this model |
| `supported_voices` | List of supported voice identifiers for TTS models. |
| `top_provider` | Information about the top provider for this model |

Operations: list, load.

API path: `/embeddings/models`

#### ModelsCount

| Field | Description |
| --- | --- |
| `count` | Total number of available models |

Operations: load.

API path: `/models/count`

#### ModelsList

| Field | Description |
| --- | --- |
| `architecture` | Model architecture information |
| `benchmarks` | Third-party benchmark rankings for this model. |
| `canonical_slug` | Canonical slug for the model |
| `context_length` | Maximum context length in tokens |
| `created` | Unix timestamp of when the model was created |
| `default_parameters` | Default parameters for this model |
| `description` | Description of the model |
| `expiration_date` | The date after which the model may be removed. |
| `hugging_face_id` | Hugging Face model identifier, if applicable |
| `id` | Unique identifier for the model |
| `knowledge_cutoff` | The date up to which the model was trained on data. |
| `links` | Related API endpoints and resources for this model. |
| `name` | Display name of the model |
| `per_request_limits` | Per-request token limits |
| `pricing` | Pricing information for the model |
| `reasoning` | Reasoning effort configuration. |
| `supported_parameters` | List of supported parameters for this model |
| `supported_voices` | List of supported voice identifiers for TTS models. |
| `top_provider` | Information about the top provider for this model |

Operations: list.

API path: `/models/user`

#### OAuth

| Field | Description |
| --- | --- |
| `app_id` | The application ID associated with this auth code |
| `callback_url` | The callback URL to redirect to after authorization. |
| `code` | The authorization code received from the OAuth redirect |
| `code_challenge` | PKCE code challenge for enhanced security |
| `code_challenge_method` | The method used to generate the code challenge |
| `code_verifier` | The code verifier if code_challenge was used in the authorization request |
| `created_at` | ISO 8601 timestamp of when the auth code was created |
| `expires_at` | Optional expiration time for the API key to be created |
| `id` | The authorization code ID to use in the exchange request |
| `key` | The API key to use for OpenRouter requests |
| `key_label` | Optional custom label for the API key. |
| `limit` | Credit limit for the API key to be created |
| `spawn_agent` | Agent identifier for spawn telemetry |
| `spawn_cloud` | Cloud identifier for spawn telemetry |
| `usage_limit_type` | Optional credit limit reset interval. |
| `user_id` | User ID associated with the API key |
| `workspace_id` | Optional workspace ID to associate the API key with |

Operations: create.

API path: `/auth/keys`

#### ObservabilityDestination

| Field | Description |
| --- | --- |
| `data` |  |
| `id` |  |

Operations: load, remove.

API path: `/observability/destinations/{id}`

#### OpenResponsesResult

| Field | Description |
| --- | --- |
| `background` |  |
| `cache_control` | Enable automatic prompt caching. |
| `debug` | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` |  |
| `image_config` | Provider-specific image configuration options. |
| `include` |  |
| `input` | Input for a response request - can be a string or array of items |
| `instructions` |  |
| `max_output_tokens` |  |
| `max_tool_calls` |  |
| `metadata` | Metadata key-value pairs for the request. |
| `modalities` | Output modalities for the response. |
| `model` |  |
| `models` |  |
| `parallel_tool_calls` |  |
| `plugins` | Plugins you want to enable for this request, including their settings. |
| `presence_penalty` |  |
| `previous_response_id` | Not supported. |
| `prompt` |  |
| `prompt_cache_key` |  |
| `prompt_cache_options` | Request-level prompt-cache controls. |
| `provider` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | Configuration for reasoning mode in the response |
| `route` | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` |  |
| `service_tier` |  |
| `session_id` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop_server_tools_when` | Stop conditions for the server-tool agent loop. |
| `store` |  |
| `stream` |  |
| `temperature` |  |
| `text` | Text output configuration including format and verbosity |
| `tool_choice` |  |
| `tools` |  |
| `top_k` |  |
| `top_logprobs` |  |
| `top_p` |  |
| `trace` | Metadata for observability and tracing. |
| `truncation` |  |
| `user` | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

Operations: create.

API path: `/responses`

#### Organization

| Field | Description |
| --- | --- |

Operations: list.

API path: `/organization/members`

#### Preset

| Field | Description |
| --- | --- |
| `created_at` |  |
| `creator_user_id` |  |
| `description` |  |
| `designated_version` | A specific version of a preset, containing config and optional system prompt. |
| `designated_version_id` |  |
| `id` |  |
| `name` |  |
| `slug` |  |
| `status` | The status of a preset. |
| `status_updated_at` |  |
| `updated_at` |  |
| `workspace_id` |  |

Operations: list, load.

API path: `/presets`

#### PresetVersion

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

Operations: load.

API path: `/presets/{slug}/versions/{version}`

#### Provider

| Field | Description |
| --- | --- |
| `datacenters` | ISO 3166-1 Alpha-2 country codes of the provider datacenter locations |
| `headquarters` | ISO 3166-1 Alpha-2 country code of the provider headquarters |
| `name` | Display name of the provider |
| `privacy_policy_url` | URL to the provider's privacy policy |
| `slug` | URL-friendly identifier for the provider |
| `status_page_url` | URL to the provider's status page |
| `terms_of_service_url` | URL to the provider's terms of service |

Operations: list.

API path: `/providers`

#### RankingsDaily

| Field | Description |
| --- | --- |
| `date` | UTC calendar date the row is aggregated over (YYYY-MM-DD). |
| `model_permaslug` | Model variant permaslug (e.g. |
| `total_tokens` | Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated. |

Operations: list.

API path: `/datasets/rankings-daily`

#### Rerank

| Field | Description |
| --- | --- |
| `documents` | The list of documents to rerank. |
| `id` | Unique identifier for the rerank response (ORID format) |
| `model` | The model used for reranking |
| `provider` | The provider that served the rerank request |
| `query` | The search query to rerank documents against |
| `results` | List of rerank results sorted by relevance |
| `top_n` | Number of most relevant documents to return |
| `usage` | Usage statistics |

Operations: create.

API path: `/rerank`

#### Response

| Field | Description |
| --- | --- |
| `background` |  |
| `cache_control` | Enable automatic prompt caching. |
| `debug` | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` |  |
| `image_config` | Provider-specific image configuration options. |
| `include` |  |
| `input` | Input for a response request - can be a string or array of items |
| `instructions` |  |
| `max_output_tokens` |  |
| `max_tool_calls` |  |
| `metadata` | Metadata key-value pairs for the request. |
| `modalities` | Output modalities for the response. |
| `model` |  |
| `models` |  |
| `parallel_tool_calls` |  |
| `plugins` | Plugins you want to enable for this request, including their settings. |
| `presence_penalty` |  |
| `previous_response_id` | Not supported. |
| `prompt` |  |
| `prompt_cache_key` |  |
| `prompt_cache_options` | Request-level prompt-cache controls. |
| `provider` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | Configuration for reasoning mode in the response |
| `route` | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` |  |
| `service_tier` |  |
| `session_id` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop_server_tools_when` | Stop conditions for the server-tool agent loop. |
| `store` |  |
| `stream` |  |
| `temperature` |  |
| `text` | Text output configuration including format and verbosity |
| `tool_choice` |  |
| `tools` |  |
| `top_k` |  |
| `top_logprobs` |  |
| `top_p` |  |
| `trace` | Metadata for observability and tracing. |
| `truncation` |  |
| `user` | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

Operations: create.

API path: `/presets/{slug}/responses`

#### Stt

| Field | Description |
| --- | --- |
| `duration` | Duration of the input audio in seconds, present when response_format is verbose_json |
| `input_audio` | Base64-encoded audio to transcribe |
| `language` | Detected or forced language, present when response_format is verbose_json |
| `model` | STT model identifier |
| `provider` | Provider-specific passthrough configuration |
| `response_format` | Output format. |
| `segments` | Timestamped transcript segments, present when response_format is verbose_json |
| `task` | The task performed, present when response_format is verbose_json |
| `temperature` | Sampling temperature for transcription |
| `text` | The transcribed text |
| `timestamp_granularities` | Timestamp detail levels to include when response_format is "verbose_json". |
| `usage` | Aggregated usage statistics for the request |
| `words` | Timestamped words, present when the provider returns word-level timestamps |

Operations: create.

API path: `/audio/transcriptions`

#### SubmitGenerationFeedback

| Field | Description |
| --- | --- |
| `category` | The category of feedback being reported |
| `comment` | An optional free-text comment describing the feedback |
| `generation_id` | The generation to submit feedback on |
| `success` | Whether the feedback was recorded |

Operations: create.

API path: `/generation/feedback`

#### Task

| Field | Description |
| --- | --- |
| `as_of` | UTC date (YYYY-MM-DD) of the window upper bound (yesterday). |
| `classifications` | Per-task classification market-share data, sorted by usage_share descending. |
| `macro_categories` | Aggregate market-share data per macro-category (code, data, agent, general). |
| `window_days` | Number of trailing days covered by this snapshot. |

Operations: load.

API path: `/classifications/task`

#### Tts

| Field | Description |
| --- | --- |
| `input` | Text to synthesize |
| `model` | TTS model identifier |
| `provider` | Provider-specific passthrough configuration |
| `response_format` | Audio output format |
| `speed` | Playback speed multiplier. |
| `voice` | Voice identifier (provider-specific). |

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
| `allowed_models` | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | Optional allowlist of user IDs that may use this credential. |
| `disabled` | Whether this credential is disabled. |
| `id` |  |
| `is_fallback` | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | A new raw provider API key to rotate the credential in-place. |
| `name` | Optional human-readable name for the credential. |

Operations: update.

API path: `/byok/{id}`

#### UpdateGuardrail

| Field | Description |
| --- | --- |
| `allowed_models` | Array of model identifiers (slug or canonical_slug accepted) |
| `allowed_providers` | New list of allowed provider IDs |
| `content_filter_builtins` | Builtin content filters to apply. |
| `content_filters` | Custom regex content filters to apply. |
| `description` | New description for the guardrail |
| `enforce_zdr` | Deprecated. |
| `enforce_zdr_anthropic` | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | Whether to enforce zero data retention for xAI models. |
| `id` |  |
| `ignored_models` | Array of model identifiers to exclude from routing (slug or canonical_slug accepted) |
| `ignored_providers` | List of provider IDs to exclude from routing |
| `limit_usd` | New spending limit in USD |
| `name` | New name for the guardrail |
| `reset_interval` | Interval at which the limit resets (daily, weekly, monthly) |

Operations: update.

API path: `/guardrails/{id}`

#### UpdateObservabilityDestination

| Field | Description |
| --- | --- |
| `api_key_hashes` | Optional allowlist of OpenRouter API key hashes. |
| `config` | Provider-specific configuration fields to update. |
| `enabled` | Whether the destination is enabled. |
| `filter_rules` |  |
| `id` |  |
| `name` | Human-readable name for the destination. |
| `privacy_mode` | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | Sampling rate between 0.0001 and 1 (1 = 100%). |

Operations: update.

API path: `/observability/destinations/{id}`

#### UpdateWorkspace

| Field | Description |
| --- | --- |
| `created_at` | ISO 8601 timestamp of when the workspace was created |
| `created_by` | User ID of the workspace creator |
| `default_image_model` | Default image model for this workspace |
| `default_provider_sort` | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | Default text model for this workspace |
| `description` | Description of the workspace |
| `id` | Unique identifier for the workspace |
| `io_logging_api_key_ids` | Optional array of API key IDs to filter I/O logging |
| `io_logging_sampling_rate` | Sampling rate for I/O logging (0.0001-1) |
| `is_data_discount_logging_enabled` | Whether data discount logging is enabled |
| `is_observability_broadcast_enabled` | Whether broadcast is enabled |
| `is_observability_io_logging_enabled` | Whether private logging is enabled |
| `name` | Name for the new workspace |
| `slug` | URL-friendly slug (lowercase alphanumeric segments separated by single hyphens, no leading/trailing hyphens) |
| `updated_at` | ISO 8601 timestamp of when the workspace was last updated |

Operations: create, list, update.

API path: `/workspaces`

#### UpsertWorkspaceBudget

| Field | Description |
| --- | --- |
| `id` |  |
| `limit_usd` | Spending limit in USD. |

Operations: update.

API path: `/workspaces/{id}/budgets/{interval}`

#### Video

| Field | Description |
| --- | --- |
| `aspect_ratio` | Aspect ratio of the generated video |
| `callback_url` | URL to receive a webhook notification when the video generation job completes. |
| `duration` | Duration of the generated video in seconds |
| `error` |  |
| `frame_images` | Images to use as the first and/or last frame of the generated video. |
| `generate_audio` | Whether to generate audio alongside the video. |
| `generation_id` | The generation ID associated with this video generation job. |
| `id` |  |
| `input_references` | Reference assets to guide video generation. |
| `model` |  |
| `polling_url` |  |
| `prompt` | Text prompt describing the video to generate. |
| `provider` | Provider-specific passthrough configuration |
| `resolution` | Resolution of the generated video |
| `seed` | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | Exact pixel dimensions of the generated video in "WIDTHxHEIGHT" format (e.g. |
| `status` |  |
| `unsigned_urls` |  |
| `usage` | Usage and cost information for the video generation. |

Operations: create, load.

API path: `/videos`

#### VideoGeneration

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

API path: `/videos/{jobId}/content`

#### VideoModel

| Field | Description |
| --- | --- |
| `allowed_passthrough_parameters` | List of parameters that are allowed to be passed through to the provider |
| `canonical_slug` | Canonical slug for the model |
| `created` | Unix timestamp of when the model was created |
| `description` | Description of the model |
| `generate_audio` | Whether the model supports generating audio alongside video |
| `hugging_face_id` | Hugging Face model identifier, if applicable |
| `id` | Unique identifier for the model |
| `name` | Display name of the model |
| `pricing_skus` | Pricing SKUs with provider prefix stripped, values as strings |
| `seed` | Whether the model supports deterministic generation via seed parameter |
| `supported_aspect_ratios` | Supported output aspect ratios |
| `supported_durations` | Supported video durations in seconds |
| `supported_frame_images` | Supported frame image types (e.g. |
| `supported_resolutions` | Supported output resolutions |
| `supported_sizes` | Supported output sizes (width x height) |

Operations: list.

API path: `/videos/models`

#### Workspace

| Field | Description |
| --- | --- |
| `created_at` | ISO 8601 timestamp of when the workspace was created |
| `created_by` | User ID of the workspace creator |
| `default_image_model` | Default image model for this workspace |
| `default_provider_sort` | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | Default text model for this workspace |
| `description` | Description of the workspace |
| `id` | Unique identifier for the workspace |
| `io_logging_api_key_ids` | Optional array of API key IDs to filter I/O logging. |
| `io_logging_sampling_rate` | Sampling rate for I/O logging (0.0001-1). |
| `is_data_discount_logging_enabled` | Whether data discount logging is enabled for this workspace |
| `is_observability_broadcast_enabled` | Whether broadcast is enabled for this workspace |
| `is_observability_io_logging_enabled` | Whether private logging is enabled for this workspace |
| `name` | Name of the workspace |
| `slug` | URL-friendly slug for the workspace |
| `updated_at` | ISO 8601 timestamp of when the workspace was last updated |

Operations: load, remove.

API path: `/workspaces/{id}`

#### WorkspaceBudget

| Field | Description |
| --- | --- |
| `created_at` | ISO 8601 timestamp of when the budget was created |
| `id` | Unique identifier for the budget |
| `limit_usd` | Spending limit in USD for this interval |
| `reset_interval` | Interval at which spend resets. |
| `updated_at` | ISO 8601 timestamp of when the budget was last updated |
| `workspace_id` | ID of the workspace the budget belongs to |

Operations: list, remove.

API path: `/workspaces/{id}/budgets`

#### WorkspaceMember

| Field | Description |
| --- | --- |
| `created_at` | ISO 8601 timestamp of when the membership was created |
| `id` | Unique identifier for the workspace membership |
| `role` | Role of the member in the workspace |
| `user_id` | Clerk user ID of the member |
| `workspace_id` | ID of the workspace |

Operations: list.

API path: `/workspaces/{id}/members`



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
| `byok_usage_inference` | `number` | BYOK inference cost in USD (external credits spent) |
| `completion_tokens` | `number` | Total completion tokens generated |
| `date` | `string` | Date of the activity (YYYY-MM-DD format) |
| `endpoint_id` | `string` | Unique identifier for the endpoint |
| `model` | `string` | Model slug (e.g., "openai/gpt-4.1") |
| `model_permaslug` | `string` | Model permaslug (e.g., "openai/gpt-4.1-2025-04-14") |
| `prompt_tokens` | `number` | Total prompt tokens used |
| `provider_name` | `string` | Name of the provider serving this endpoint |
| `reasoning_tokens` | `number` | Total reasoning tokens used |
| `requests` | `number` | Number of requests made |
| `usage` | `number` | Total cost in USD (OpenRouter credits spent) |

#### Example: List

```ts
const activitys = await client.Activity().list()
```


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
| `byok_usage` | `number` | Total external BYOK usage (in USD) for the API key |
| `byok_usage_daily` | `number` | External BYOK usage (in USD) for the current UTC day |
| `byok_usage_monthly` | `number` | External BYOK usage (in USD) for current UTC month |
| `byok_usage_weekly` | `number` | External BYOK usage (in USD) for the current UTC week (Monday-Sunday) |
| `created_at` | `string` | ISO 8601 timestamp of when the API key was created |
| `creator_user_id` | `string | null` | The user ID of the key creator. |
| `disabled` | `boolean` | Whether the API key is disabled |
| `expires_at` | `string | null` | ISO 8601 UTC timestamp when the API key expires, or null if no expiration |
| `hash` | `string` | Unique hash identifier for the API key |
| `id` | `string` |  |
| `include_byok_in_limit` | `boolean` | Whether to include external BYOK usage in the credit limit |
| `is_free_tier` | `boolean` | Whether this is a free tier API key |
| `is_management_key` | `boolean` | Whether this is a management key |
| `is_provisioning_key` | `boolean` | Whether this is a management key |
| `label` | `string` | Human-readable label for the API key |
| `limit` | `number | null` | Spending limit for the API key in USD |
| `limit_remaining` | `number | null` | Remaining spending limit in USD |
| `limit_reset` | `string | null` | Type of limit reset for the API key |
| `name` | `string` | Name of the API key |
| `rate_limit` | `Record<string, any>` | Legacy rate limit information about a key. |
| `updated_at` | `string | null` | ISO 8601 timestamp of when the API key was last updated |
| `usage` | `number` | Total OpenRouter credit usage (in USD) for the API key |
| `usage_daily` | `number` | OpenRouter credit usage (in USD) for the current UTC day |
| `usage_monthly` | `number` | OpenRouter credit usage (in USD) for the current UTC month |
| `usage_weekly` | `number` | OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday) |
| `workspace_id` | `string` | The workspace ID this API key belongs to. |

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
  creator_user_id: 'example_creator_user_id',
  disabled: true,
  hash: 'example_hash',
  include_byok_in_limit: true,
  is_free_tier: true,
  is_management_key: true,
  is_provisioning_key: true,
  label: 'example_label',
  limit: 1,
  limit_remaining: 1,
  limit_reset: 'example_limit_reset',
  name: 'example_name',
  rate_limit: {},
  updated_at: 'example_updated_at',
  usage: 1,
  usage_daily: 1,
  usage_monthly: 1,
  usage_weekly: 1,
  workspace_id: 'example_workspace_id',
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
| `app_id` | `number` | Stable numeric identifier of the app on OpenRouter. |
| `app_name` | `string` | Public display name of the app. |
| `rank` | `number` | 1-based position of the app within this response, per the requested `sort`. |
| `total_requests` | `number` | Number of requests attributed to the app inside the date window. |
| `total_tokens` | `string` | Sum of `prompt_tokens + completion_tokens` attributed to the app inside the date window, returned as a decimal string so 64-bit values are not truncated. |

#### Example: List

```ts
const app_rankings = await client.AppRanking().list()
```


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
| `cachedAt` | `number` |  |
| `classifier_dimensions` | `Record<string, any>` | Group results by custom classifier tags, breaking down metrics by the specified dimension values. |
| `classifier_filters` | `Record<string, any>` | Filter results to generations with specific classifier tag values. |
| `data` | `any[]` |  |
| `dimensions` | `any[]` |  |
| `filters` | `any[]` |  |
| `granularities` | `any[]` |  |
| `granularity` | `string` | Time granularity |
| `group_limit` | `number` | Maximum rows per distinct combination of dimensions. |
| `limit` | `number` | Maximum total rows returned. |
| `metadata` | `Record<string, any>` |  |
| `metrics` | `any[]` |  |
| `operators` | `any[]` |  |
| `order_by` | `Record<string, any>` |  |
| `time_range` | `Record<string, any>` |  |
| `warnings` | `any[]` | Warnings about filter resolution issues (e.g. |

#### Example: Load

```ts
const beta_analytics = await client.BetaAnalytics().load()
```

#### Example: Create

```ts
const beta_analytics = await client.BetaAnalytics().create({
  classifier_dimensions: {},
  classifier_filters: {},
  data: [],
  dimensions: [],
  granularities: [],
  metadata: {},
  metrics: [],
  operators: [],
  order_by: {},
  time_range: {},
})
```


### BulkAddWorkspaceMember

Create an instance: `const bulk_add_workspace_member = client.BulkAddWorkspaceMember()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `added_count` | `number` | Number of workspace memberships created or updated |
| `data` | `any[]` | List of added workspace memberships |
| `user_ids` | `any[]` | List of user IDs to add to the workspace. |

#### Example: Create

```ts
const bulk_add_workspace_member = await client.BulkAddWorkspaceMember().create({
  workspace_id: 'example_workspace_id',
  added_count: 1,
  data: [],
  user_ids: [],
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
| `assigned_count` | `number` | Number of keys successfully assigned |
| `key_hashes` | `any[]` | Array of API key hashes to assign to the guardrail |

#### Example: Create

```ts
const bulk_assign_key = await client.BulkAssignKey().create({
  guardrail_id: 'example_guardrail_id',
  assigned_count: 1,
  key_hashes: [],
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
| `assigned_count` | `number` | Number of members successfully assigned |
| `member_user_ids` | `any[]` | Array of member user IDs to assign to the guardrail |

#### Example: Create

```ts
const bulk_assign_member = await client.BulkAssignMember().create({
  guardrail_id: 'example_guardrail_id',
  assigned_count: 1,
  member_user_ids: [],
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
| `removed_count` | `number` | Number of members removed |
| `user_ids` | `any[]` | List of user IDs to remove from the workspace |

#### Example: Create

```ts
const bulk_remove_workspace_member = await client.BulkRemoveWorkspaceMember().create({
  workspace_id: 'example_workspace_id',
  removed_count: 1,
  user_ids: [],
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
| `key_hashes` | `any[]` | Array of API key hashes to unassign from the guardrail |
| `unassigned_count` | `number` | Number of keys successfully unassigned |

#### Example: Create

```ts
const bulk_unassign_key = await client.BulkUnassignKey().create({
  guardrail_id: 'example_guardrail_id',
  key_hashes: [],
  unassigned_count: 1,
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
| `member_user_ids` | `any[]` | Array of member user IDs to unassign from the guardrail |
| `unassigned_count` | `number` | Number of members successfully unassigned |

#### Example: Create

```ts
const bulk_unassign_member = await client.BulkUnassignMember().create({
  guardrail_id: 'example_guardrail_id',
  member_user_ids: [],
  unassigned_count: 1,
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
| `allowed_api_key_hashes` | `any[] | null` | Optional allowlist of OpenRouter API key hashes (`api_keys.hash`) that may use this credential. |
| `allowed_models` | `any[] | null` | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `any[] | null` | Optional allowlist of user IDs that may use this credential. |
| `created_at` | `string` | ISO timestamp of when the credential was created. |
| `disabled` | `boolean` | Whether this credential is currently disabled. |
| `id` | `string` | Stable public identifier for this BYOK credential. |
| `is_fallback` | `boolean` | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `string` | The raw provider API key or credential. |
| `label` | `string` | Short masked snippet of the key (e.g. |
| `name` | `string | null` | Optional human-readable name for the credential. |
| `provider` | `string` | The upstream provider this credential authenticates against, as a lowercase slug (e.g. |
| `sort_order` | `number` | Position within the provider — credentials are tried in ascending sort order. |
| `workspace_id` | `string` | ID of the workspace this credential belongs to. |

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
  allowed_api_key_hashes: [],
  allowed_models: [],
  allowed_user_ids: [],
  created_at: 'example_created_at',
  disabled: true,
  id: 'example_id',
  is_fallback: true,
  key: 'example_key',
  label: 'example_label',
  provider: 'example_provider',
  sort_order: 1,
  workspace_id: 'example_workspace_id',
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
| `cache_control` | `Record<string, any>` | Enable automatic prompt caching. |
| `choices` | `any[]` | List of completion choices |
| `created` | `number` | Unix timestamp of creation |
| `debug` | `Record<string, any>` | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `number | null` | Frequency penalty (-2.0 to 2.0) |
| `id` | `string` | Unique completion identifier |
| `image_config` | `Record<string, any>` | Provider-specific image configuration options. |
| `logit_bias` | `Record<string, any> | null` | Token logit bias adjustments |
| `logprobs` | `boolean | null` | Return log probabilities |
| `max_completion_tokens` | `number | null` | Maximum tokens in completion |
| `max_tokens` | `number | null` | Maximum tokens (deprecated, use max_completion_tokens). |
| `messages` | `any[]` | List of messages for the conversation |
| `metadata` | `Record<string, any>` | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `number | null` | Minimum probability threshold relative to the most likely token. |
| `modalities` | `any[]` | Output modalities for the response. |
| `model` | `string` | Model used for completion |
| `models` | `any[]` | Models to use for completion |
| `object` | `string` |  |
| `openrouter_metadata` | `Record<string, any>` |  |
| `parallel_tool_calls` | `boolean | null` | Whether to enable parallel function calling during tool use. |
| `plugins` | `any[]` | Plugins you want to enable for this request, including their settings. |
| `prediction` | `Record<string, any> | null` | Static predicted output content. |
| `presence_penalty` | `number | null` | Presence penalty (-2.0 to 2.0) |
| `prompt_cache_key` | `string | null` |  |
| `prompt_cache_options` | `Record<string, any> | null` | Request-level prompt-cache controls. |
| `provider` | `Record<string, any> | null` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `Record<string, any>` | Configuration options for reasoning models |
| `reasoning_effort` | `string | null` | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `number | null` | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `any` | Response format configuration |
| `route` | `string | null` | **DEPRECATED** Use providers.sort.partition instead. |
| `seed` | `number | null` | Random seed for deterministic outputs |
| `service_tier` | `string | null` | The service tier used by the upstream provider for this request |
| `session_id` | `string` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop` | `any` | Stop sequences (up to 4) |
| `stop_server_tools_when` | `any[]` | Stop conditions for the server-tool agent loop. |
| `stream` | `boolean` | Enable streaming response |
| `stream_options` | `Record<string, any> | null` | Streaming configuration options |
| `system_fingerprint` | `string | null` | System fingerprint |
| `temperature` | `number | null` | Sampling temperature (0-2) |
| `tool_choice` | `any` | Tool choice configuration |
| `tools` | `any[]` | Available tools for function calling |
| `top_a` | `number | null` | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `number | null` | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `number | null` | Number of top log probabilities to return (0-20) |
| `top_p` | `number | null` | Nucleus sampling parameter (0-1) |
| `trace` | `Record<string, any>` | Metadata for observability and tracing. |
| `usage` | `Record<string, any>` | Token usage statistics |
| `user` | `string` | Unique user identifier |

#### Example: Create

```ts
const chat_result = await client.ChatResult().create({
  cache_control: {},
  choices: [],
  created: 1,
  id: 'example_id',
  messages: [],
  model: 'example_model',
  object: 'example_object',
  openrouter_metadata: {},
  prediction: {},
  prompt_cache_options: {},
  system_fingerprint: 'example_system_fingerprint',
  usage: {},
})
```


### Completion

Create an instance: `const completion = client.Completion()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_control` | `Record<string, any>` | Enable automatic prompt caching. |
| `debug` | `Record<string, any>` | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `number | null` | Frequency penalty (-2.0 to 2.0) |
| `image_config` | `Record<string, any>` | Provider-specific image configuration options. |
| `logit_bias` | `Record<string, any> | null` | Token logit bias adjustments |
| `logprobs` | `boolean | null` | Return log probabilities |
| `max_completion_tokens` | `number | null` | Maximum tokens in completion |
| `max_tokens` | `number | null` | Maximum tokens (deprecated, use max_completion_tokens). |
| `messages` | `any[]` | List of messages for the conversation |
| `metadata` | `Record<string, any>` | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `number | null` | Minimum probability threshold relative to the most likely token. |
| `modalities` | `any[]` | Output modalities for the response. |
| `model` | `string` | Model to use for completion |
| `models` | `any[]` | Models to use for completion |
| `parallel_tool_calls` | `boolean | null` | Whether to enable parallel function calling during tool use. |
| `plugins` | `any[]` | Plugins you want to enable for this request, including their settings. |
| `prediction` | `Record<string, any> | null` | Static predicted output content. |
| `presence_penalty` | `number | null` | Presence penalty (-2.0 to 2.0) |
| `prompt_cache_key` | `string | null` |  |
| `prompt_cache_options` | `Record<string, any> | null` | Request-level prompt-cache controls. |
| `provider` | `Record<string, any> | null` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `Record<string, any>` | Configuration options for reasoning models |
| `reasoning_effort` | `string | null` | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `number | null` | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `any` | Response format configuration |
| `route` | `string | null` | **DEPRECATED** Use providers.sort.partition instead. |
| `seed` | `number | null` | Random seed for deterministic outputs |
| `service_tier` | `string | null` | The service tier to use for processing this request. |
| `session_id` | `string` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop` | `any` | Stop sequences (up to 4) |
| `stop_server_tools_when` | `any[]` | Stop conditions for the server-tool agent loop. |
| `stream` | `boolean` | Enable streaming response |
| `stream_options` | `Record<string, any> | null` | Streaming configuration options |
| `temperature` | `number | null` | Sampling temperature (0-2) |
| `tool_choice` | `any` | Tool choice configuration |
| `tools` | `any[]` | Available tools for function calling |
| `top_a` | `number | null` | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `number | null` | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `number | null` | Number of top log probabilities to return (0-20) |
| `top_p` | `number | null` | Nucleus sampling parameter (0-1) |
| `trace` | `Record<string, any>` | Metadata for observability and tracing. |
| `user` | `string` | Unique user identifier |

#### Example: Create

```ts
const completion = await client.Completion().create({
  slug: 'example_slug',
  cache_control: {},
  messages: [],
  prediction: {},
  prompt_cache_options: {},
})
```


### CreateObservabilityDestination

Create an instance: `const create_observability_destination = client.CreateObservabilityDestination()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hashes` | `any[] | null` | Optional allowlist of OpenRouter API key hashes whose traffic is forwarded. |
| `config` | `Record<string, any>` | Provider-specific configuration. |
| `enabled` | `boolean` | Whether this destination should be enabled immediately. |
| `filter_rules` | `Record<string, any> | null` | Optional structured filter rules controlling which events are forwarded. |
| `name` | `string` | Human-readable name for the destination. |
| `privacy_mode` | `boolean` | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `number` | Sampling rate between 0.0001 and 1 (1 = 100%). |
| `type` | `string` | The destination type. |
| `workspace_id` | `string` | Optional workspace ID. |

#### Example: Create

```ts
const create_observability_destination = await client.CreateObservabilityDestination().create({
  config: {},
  filter_rules: {},
  name: 'example_name',
  type: 'example_type',
})
```


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
| `total_credits` | `number` | Total credits purchased |
| `total_usage` | `number` | Total credits used |

#### Example: Load

```ts
const credit = await client.Credit().load()
```

#### Example: Create

```ts
const credit = await client.Credit().create({
  total_credits: 1,
  total_usage: 1,
})
```


### Embedding

Create an instance: `const embedding = client.Embedding()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` | List of embedding objects |
| `dimensions` | `number` | The number of dimensions for the output embeddings |
| `encoding_format` | `string` | The format of the output embeddings |
| `id` | `string` | Unique identifier for the embeddings response |
| `input` | `any` | Text, token, or multimodal input(s) to embed |
| `input_type` | `string` | The type of input (e.g. |
| `model` | `string` | The model used for embeddings |
| `object` | `string` |  |
| `provider` | `any` |  |
| `usage` | `Record<string, any>` | Token usage statistics |
| `user` | `string` | A unique identifier for the end-user |

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
| `architecture` | `any` | Model architecture information |
| `benchmarks` | `Record<string, any>` | Third-party benchmark rankings for this model. |
| `canonical_slug` | `string` | Canonical slug for the model |
| `context_length` | `number | null` | Maximum context length in tokens |
| `created` | `number` | Unix timestamp of when the model was created |
| `default_parameters` | `Record<string, any> | null` | Default parameters for this model |
| `description` | `string` | Description of the model |
| `endpoints` | `any[]` | List of available endpoints for this model |
| `expiration_date` | `string | null` | The date after which the model may be removed. |
| `hugging_face_id` | `string | null` | Hugging Face model identifier, if applicable |
| `id` | `string` | Unique identifier for the model |
| `knowledge_cutoff` | `string | null` | The date up to which the model was trained on data. |
| `links` | `Record<string, any>` | Related API endpoints and resources for this model. |
| `name` | `string` | Display name of the model |
| `per_request_limits` | `Record<string, any> | null` | Per-request token limits |
| `pricing` | `Record<string, any>` | Pricing information for the model |
| `reasoning` | `Record<string, any>` | Reasoning effort configuration. |
| `supported_parameters` | `any[]` | List of supported parameters for this model |
| `supported_voices` | `any[] | null` | List of supported voice identifiers for TTS models. |
| `top_provider` | `Record<string, any>` | Information about the top provider for this model |

#### Example: Load

```ts
const endpoint = await client.Endpoint().load({ author: 'author', slug: 'slug' })
```

#### Example: List

```ts
const endpoints = await client.Endpoint().list()
```


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
| `size_bytes` | `number` |  |
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
  size_bytes: 1,
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
| `api_type` | `string | null` | Type of API used for the generation |
| `app_id` | `number | null` | ID of the app that made the request |
| `cache_discount` | `number | null` | Discount applied due to caching |
| `cancelled` | `boolean | null` | Whether the generation was cancelled |
| `created_at` | `string` | ISO 8601 timestamp of when the generation was created |
| `data_region` | `string` | The data region this generation was routed through. |
| `external_user` | `string | null` | External user identifier |
| `finish_reason` | `string | null` | Reason the generation finished |
| `generation_time` | `number | null` | Time taken for generation in milliseconds |
| `http_referer` | `string | null` | Referer header from the request |
| `id` | `string` | Unique identifier for the generation |
| `is_byok` | `boolean` | Whether this used bring-your-own-key |
| `latency` | `number | null` | Total latency in milliseconds |
| `model` | `string` | Model used for the generation |
| `moderation_latency` | `number | null` | Moderation latency in milliseconds |
| `native_finish_reason` | `string | null` | Native finish reason as reported by provider |
| `native_tokens_cached` | `number | null` | Native cached tokens as reported by provider |
| `native_tokens_completion` | `number | null` | Native completion tokens as reported by provider |
| `native_tokens_completion_images` | `number | null` | Native completion image tokens as reported by provider |
| `native_tokens_prompt` | `number | null` | Native prompt tokens as reported by provider |
| `native_tokens_reasoning` | `number | null` | Native reasoning tokens as reported by provider |
| `num_fetches` | `number | null` | Number of web fetches performed |
| `num_input_audio_prompt` | `number | null` | Number of audio inputs in the prompt |
| `num_media_completion` | `number | null` | Number of media items in the completion |
| `num_media_prompt` | `number | null` | Number of media items in the prompt |
| `num_search_results` | `number | null` | Number of search results included |
| `origin` | `string` | Origin URL of the request |
| `preset_id` | `string | null` | ID of the preset used for this generation, null if no preset was used |
| `provider_name` | `string | null` | Name of the provider that served the request |
| `provider_responses` | `any[] | null` | List of provider responses for this generation, including fallback attempts |
| `request_id` | `string | null` | Unique identifier grouping all generations from a single API request |
| `response_cache_source_id` | `string | null` | If this generation was served from response cache, contains the original generation ID. |
| `router` | `string | null` | Router used for the request (e.g., openrouter/auto) |
| `service_tier` | `string | null` | Service tier the upstream provider reported running this request on, or null if it did not report one. |
| `session_id` | `string | null` | Session identifier grouping multiple generations in the same session |
| `streamed` | `boolean | null` | Whether the response was streamed |
| `tokens_completion` | `number | null` | Number of tokens in the completion |
| `tokens_prompt` | `number | null` | Number of tokens in the prompt |
| `total_cost` | `number` | Total cost of the generation in USD |
| `upstream_id` | `string | null` | Upstream provider's identifier for this generation |
| `upstream_inference_cost` | `number | null` | Cost charged by the upstream provider |
| `usage` | `number` | Usage amount in USD |
| `user_agent` | `string | null` | User-Agent header from the request |
| `web_search_engine` | `string | null` | The resolved web search engine used for this generation (e.g. |

#### Example: Load

```ts
const generation = await client.Generation().load({ id: 'generation_id' })
```


### GenerationContentData

Create an instance: `const generation_content_data = client.GenerationContentData()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `any` | The input to the generation — either a prompt string or an array of messages |
| `output` | `Record<string, any>` | The output from the generation |

#### Example: Load

```ts
const generation_content_data = await client.GenerationContentData().load({ id: 'generation_content_data_id' })
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
| `allowed_models` | `any[] | null` | Array of model canonical_slugs (immutable identifiers) |
| `allowed_providers` | `any[] | null` | List of allowed provider IDs |
| `content_filter_builtins` | `any[] | null` | Builtin content filters applied to requests. |
| `content_filters` | `any[] | null` | Custom regex content filters applied to request messages |
| `created_at` | `string` | ISO 8601 timestamp of when the guardrail was created |
| `description` | `string | null` | Description of the guardrail |
| `enforce_zdr` | `boolean | null` | Deprecated. |
| `enforce_zdr_anthropic` | `boolean | null` | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `boolean | null` | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `boolean | null` | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `boolean | null` | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `boolean | null` | Whether to enforce zero data retention for xAI models. |
| `id` | `string` | Unique identifier for the guardrail |
| `ignored_models` | `any[] | null` | Array of model canonical_slugs to exclude from routing |
| `ignored_providers` | `any[] | null` | List of provider IDs to exclude from routing |
| `limit_usd` | `number | null` | Spending limit in USD |
| `name` | `string` | Name of the guardrail |
| `reset_interval` | `string | null` | Interval at which the limit resets (daily, weekly, monthly) |
| `updated_at` | `string | null` | ISO 8601 timestamp of when the guardrail was last updated |
| `workspace_id` | `string` | The workspace ID this guardrail belongs to. |

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
  id: 'example_id',
  name: 'example_name',
  workspace_id: 'example_workspace_id',
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
| `aspect_ratio` | `string` | Normalized aspect ratio of the generated image. |
| `background` | `string` | Background treatment. |
| `created` | `number` | Unix timestamp (seconds) when the image was generated |
| `data` | `any[]` | Generated images |
| `input_references` | `any[]` | Reference images to guide image-to-image generation, as base64 data URLs or HTTP(S) URLs. |
| `model` | `string` | The image generation model to use |
| `n` | `number` | Number of images to generate (1-10). |
| `output_compression` | `number` | Compression level (0-100) for webp/jpeg output. |
| `output_format` | `string` | Encoding of the returned image bytes. |
| `prompt` | `string` | Text description of the desired image |
| `provider` | `Record<string, any>` | Provider routing preferences and provider-specific passthrough configuration. |
| `quality` | `string` | Rendering quality. |
| `resolution` | `string` | Normalized resolution tier of the generated image. |
| `seed` | `number` | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `string` | Optional. |
| `stream` | `boolean` | If true, partial images are streamed as SSE events as they become available. |
| `usage` | `Record<string, any>` | Token and cost usage for the image generation request, when available |

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
| `allowed_passthrough_parameters` | `any[]` | Provider-specific options accepted under provider.options[provider_slug]. |
| `pricing` | `any[]` | Billable pricing lines for this endpoint. |
| `provider_name` | `string` | Provider display name |
| `provider_slug` | `string` | Provider slug |
| `provider_tag` | `string | null` | Provider tag for request-side selection |
| `supported_parameters` | `any` |  |
| `supports_streaming` | `boolean` | Whether this endpoint supports native SSE streaming (`stream: true` in the request). |

#### Example: List

```ts
const image_model_endpoints = await client.ImageModelEndpoint().list({ model_id: "example", slug: "example" })
```


### ImageModelListItem

Create an instance: `const image_model_list_item = client.ImageModelListItem()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `Record<string, any>` |  |
| `created` | `number` | Unix timestamp (seconds) of when the model was created |
| `description` | `string` |  |
| `endpoints` | `string` | Relative URL to the full per-endpoint records for this model |
| `id` | `string` | Model slug |
| `name` | `string` | Display name |
| `supported_parameters` | `Record<string, any>` | Union of supported parameters across every endpoint of this model. |
| `supports_streaming` | `boolean` | Whether any endpoint of this model supports native SSE streaming on the dedicated Image API (i.e. |

#### Example: List

```ts
const image_model_list_items = await client.ImageModelListItem().list()
```


### Key

Create an instance: `const key = client.Key()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_by` | `string | null` | User ID of who made the assignment |
| `created_at` | `string` | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `string` | ID of the guardrail |
| `id` | `string` | Unique identifier for the assignment |
| `key_hash` | `string` | Hash of the assigned API key |
| `key_label` | `string` | Label of the API key |
| `key_name` | `string` | Name of the API key |

#### Example: List

```ts
const keys = await client.Key().list()
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
| `data` | `any[]` | List of observability destinations. |
| `total_count` | `number` | Total number of destinations matching the filters. |

#### Example: List

```ts
const list_observability_destinations = await client.ListObservabilityDestination().list()
```


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
| `system_prompt` | `string | null` |  |
| `updated_at` | `string` |  |
| `version` | `number` |  |

#### Example: List

```ts
const list_preset_versions = await client.ListPresetVersion().list({ slug: "example" })
```


### Member

Create an instance: `const member = client.Member()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_by` | `string | null` | User ID of who made the assignment |
| `created_at` | `string` | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `string` | ID of the guardrail |
| `id` | `string` | Unique identifier for the assignment |
| `organization_id` | `string` | Organization ID |
| `user_id` | `string` | Clerk user ID of the assigned member |

#### Example: List

```ts
const members = await client.Member().list()
```


### Message

Create an instance: `const message = client.Message()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_control` | `Record<string, any>` | Enable automatic prompt caching. |
| `context_management` | `Record<string, any> | null` |  |
| `fallbacks` | `any[] | null` | Fallback models to try if the primary model fails or refuses, in order. |
| `max_tokens` | `number` |  |
| `messages` | `any[] | null` |  |
| `metadata` | `Record<string, any>` |  |
| `model` | `string` |  |
| `models` | `any[]` |  |
| `output_config` | `Record<string, any>` | Configuration for controlling output behavior. |
| `plugins` | `any[]` | Plugins you want to enable for this request, including their settings. |
| `provider` | `Record<string, any> | null` | When multiple model providers are available, optionally indicate your routing preference. |
| `route` | `string | null` | **DEPRECATED** Use providers.sort.partition instead. |
| `service_tier` | `string` |  |
| `session_id` | `string` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `speed` | `any` |  |
| `stop_sequences` | `any[]` |  |
| `stop_server_tools_when` | `any[]` | Stop conditions for the server-tool agent loop. |
| `stream` | `boolean` |  |
| `system` | `any` |  |
| `temperature` | `number` |  |
| `thinking` | `any` |  |
| `tool_choice` | `any` |  |
| `tools` | `any[]` |  |
| `top_k` | `number` |  |
| `top_p` | `number` |  |
| `trace` | `Record<string, any>` | Metadata for observability and tracing. |
| `user` | `string` | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

#### Example: Create

```ts
const message = await client.Message().create({
  cache_control: {},
  messages: [],
  model: 'example_model',
})
```


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
| `architecture` | `Record<string, any>` | Model architecture information |
| `benchmarks` | `Record<string, any>` | Third-party benchmark rankings for this model. |
| `canonical_slug` | `string` | Canonical slug for the model |
| `context_length` | `number | null` | Maximum context length in tokens |
| `created` | `number` | Unix timestamp of when the model was created |
| `default_parameters` | `Record<string, any> | null` | Default parameters for this model |
| `description` | `string` | Description of the model |
| `expiration_date` | `string | null` | The date after which the model may be removed. |
| `hugging_face_id` | `string | null` | Hugging Face model identifier, if applicable |
| `id` | `string` | Unique identifier for the model |
| `knowledge_cutoff` | `string | null` | The date up to which the model was trained on data. |
| `links` | `Record<string, any>` | Related API endpoints and resources for this model. |
| `name` | `string` | Display name of the model |
| `per_request_limits` | `Record<string, any> | null` | Per-request token limits |
| `pricing` | `Record<string, any>` | Pricing information for the model |
| `reasoning` | `Record<string, any>` | Reasoning effort configuration. |
| `supported_parameters` | `any[]` | List of supported parameters for this model |
| `supported_voices` | `any[] | null` | List of supported voice identifiers for TTS models. |
| `top_provider` | `Record<string, any>` | Information about the top provider for this model |

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
| `count` | `number` | Total number of available models |

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
| `architecture` | `Record<string, any>` | Model architecture information |
| `benchmarks` | `Record<string, any>` | Third-party benchmark rankings for this model. |
| `canonical_slug` | `string` | Canonical slug for the model |
| `context_length` | `number | null` | Maximum context length in tokens |
| `created` | `number` | Unix timestamp of when the model was created |
| `default_parameters` | `Record<string, any> | null` | Default parameters for this model |
| `description` | `string` | Description of the model |
| `expiration_date` | `string | null` | The date after which the model may be removed. |
| `hugging_face_id` | `string | null` | Hugging Face model identifier, if applicable |
| `id` | `string` | Unique identifier for the model |
| `knowledge_cutoff` | `string | null` | The date up to which the model was trained on data. |
| `links` | `Record<string, any>` | Related API endpoints and resources for this model. |
| `name` | `string` | Display name of the model |
| `per_request_limits` | `Record<string, any> | null` | Per-request token limits |
| `pricing` | `Record<string, any>` | Pricing information for the model |
| `reasoning` | `Record<string, any>` | Reasoning effort configuration. |
| `supported_parameters` | `any[]` | List of supported parameters for this model |
| `supported_voices` | `any[] | null` | List of supported voice identifiers for TTS models. |
| `top_provider` | `Record<string, any>` | Information about the top provider for this model |

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
| `app_id` | `number` | The application ID associated with this auth code |
| `callback_url` | `string` | The callback URL to redirect to after authorization. |
| `code` | `string` | The authorization code received from the OAuth redirect |
| `code_challenge` | `string` | PKCE code challenge for enhanced security |
| `code_challenge_method` | `string | null` | The method used to generate the code challenge |
| `code_verifier` | `string` | The code verifier if code_challenge was used in the authorization request |
| `created_at` | `string` | ISO 8601 timestamp of when the auth code was created |
| `expires_at` | `string | null` | Optional expiration time for the API key to be created |
| `id` | `string` | The authorization code ID to use in the exchange request |
| `key` | `string` | The API key to use for OpenRouter requests |
| `key_label` | `string` | Optional custom label for the API key. |
| `limit` | `number` | Credit limit for the API key to be created |
| `spawn_agent` | `string` | Agent identifier for spawn telemetry |
| `spawn_cloud` | `string` | Cloud identifier for spawn telemetry |
| `usage_limit_type` | `string` | Optional credit limit reset interval. |
| `user_id` | `string | null` | User ID associated with the API key |
| `workspace_id` | `string` | Optional workspace ID to associate the API key with |

#### Example: Create

```ts
const o_auth = await client.OAuth().create({
  app_id: 1,
  callback_url: 'example_callback_url',
  code: 'example_code',
  created_at: 'example_created_at',
  id: 'example_id',
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
| `data` | `Record<string, any>` |  |
| `id` | `string` |  |

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
| `background` | `boolean | null` |  |
| `cache_control` | `Record<string, any>` | Enable automatic prompt caching. |
| `debug` | `Record<string, any>` | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `number | null` |  |
| `image_config` | `Record<string, any>` | Provider-specific image configuration options. |
| `include` | `any[] | null` |  |
| `input` | `any` | Input for a response request - can be a string or array of items |
| `instructions` | `string | null` |  |
| `max_output_tokens` | `number | null` |  |
| `max_tool_calls` | `number | null` |  |
| `metadata` | `Record<string, any> | null` | Metadata key-value pairs for the request. |
| `modalities` | `any[]` | Output modalities for the response. |
| `model` | `string` |  |
| `models` | `any[]` |  |
| `parallel_tool_calls` | `boolean | null` |  |
| `plugins` | `any[]` | Plugins you want to enable for this request, including their settings. |
| `presence_penalty` | `number | null` |  |
| `previous_response_id` | `string` | Not supported. |
| `prompt` | `Record<string, any> | null` |  |
| `prompt_cache_key` | `string | null` |  |
| `prompt_cache_options` | `Record<string, any> | null` | Request-level prompt-cache controls. |
| `provider` | `Record<string, any> | null` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `any` | Configuration for reasoning mode in the response |
| `route` | `string | null` | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `string | null` |  |
| `service_tier` | `string | null` |  |
| `session_id` | `string` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop_server_tools_when` | `any[]` | Stop conditions for the server-tool agent loop. |
| `store` | `boolean` |  |
| `stream` | `boolean` |  |
| `temperature` | `number | null` |  |
| `text` | `any` | Text output configuration including format and verbosity |
| `tool_choice` | `any` |  |
| `tools` | `any[]` |  |
| `top_k` | `number` |  |
| `top_logprobs` | `number | null` |  |
| `top_p` | `number | null` |  |
| `trace` | `Record<string, any>` | Metadata for observability and tracing. |
| `truncation` | `string | null` |  |
| `user` | `string` | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

#### Example: Create

```ts
const open_responses_result = await client.OpenResponsesResult().create({
  cache_control: {},
  prompt: {},
  prompt_cache_options: {},
})
```


### Organization

Create an instance: `const organization = client.Organization()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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
| `creator_user_id` | `string | null` |  |
| `description` | `string | null` |  |
| `designated_version` | `Record<string, any> | null` | A specific version of a preset, containing config and optional system prompt. |
| `designated_version_id` | `string | null` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `status` | `string` | The status of a preset. |
| `status_updated_at` | `string | null` |  |
| `updated_at` | `string` |  |
| `workspace_id` | `string | null` |  |

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
| `config` | `Record<string, any>` |  |
| `created_at` | `string` |  |
| `creator_id` | `string` |  |
| `id` | `string` |  |
| `preset_id` | `string` |  |
| `system_prompt` | `string | null` |  |
| `updated_at` | `string` |  |
| `version` | `number` |  |

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
| `datacenters` | `any[] | null` | ISO 3166-1 Alpha-2 country codes of the provider datacenter locations |
| `headquarters` | `string | null` | ISO 3166-1 Alpha-2 country code of the provider headquarters |
| `name` | `string` | Display name of the provider |
| `privacy_policy_url` | `string | null` | URL to the provider's privacy policy |
| `slug` | `string` | URL-friendly identifier for the provider |
| `status_page_url` | `string | null` | URL to the provider's status page |
| `terms_of_service_url` | `string | null` | URL to the provider's terms of service |

#### Example: List

```ts
const providers = await client.Provider().list()
```


### RankingsDaily

Create an instance: `const rankings_daily = client.RankingsDaily()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` | UTC calendar date the row is aggregated over (YYYY-MM-DD). |
| `model_permaslug` | `string` | Model variant permaslug (e.g. |
| `total_tokens` | `string` | Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated. |

#### Example: List

```ts
const rankings_dailys = await client.RankingsDaily().list()
```


### Rerank

Create an instance: `const rerank = client.Rerank()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `documents` | `any[]` | The list of documents to rerank. |
| `id` | `string` | Unique identifier for the rerank response (ORID format) |
| `model` | `string` | The model used for reranking |
| `provider` | `string` | The provider that served the rerank request |
| `query` | `string` | The search query to rerank documents against |
| `results` | `any[]` | List of rerank results sorted by relevance |
| `top_n` | `number` | Number of most relevant documents to return |
| `usage` | `Record<string, any>` | Usage statistics |

#### Example: Create

```ts
const rerank = await client.Rerank().create({
  documents: [],
  model: 'example_model',
  query: 'example_query',
  results: [],
})
```


### Response

Create an instance: `const response = client.Response()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `background` | `boolean | null` |  |
| `cache_control` | `Record<string, any>` | Enable automatic prompt caching. |
| `debug` | `Record<string, any>` | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `number | null` |  |
| `image_config` | `Record<string, any>` | Provider-specific image configuration options. |
| `include` | `any[] | null` |  |
| `input` | `any` | Input for a response request - can be a string or array of items |
| `instructions` | `string | null` |  |
| `max_output_tokens` | `number | null` |  |
| `max_tool_calls` | `number | null` |  |
| `metadata` | `Record<string, any> | null` | Metadata key-value pairs for the request. |
| `modalities` | `any[]` | Output modalities for the response. |
| `model` | `string` |  |
| `models` | `any[]` |  |
| `parallel_tool_calls` | `boolean | null` |  |
| `plugins` | `any[]` | Plugins you want to enable for this request, including their settings. |
| `presence_penalty` | `number | null` |  |
| `previous_response_id` | `string` | Not supported. |
| `prompt` | `Record<string, any> | null` |  |
| `prompt_cache_key` | `string | null` |  |
| `prompt_cache_options` | `Record<string, any> | null` | Request-level prompt-cache controls. |
| `provider` | `Record<string, any> | null` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `any` | Configuration for reasoning mode in the response |
| `route` | `string | null` | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `string | null` |  |
| `service_tier` | `string | null` |  |
| `session_id` | `string` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop_server_tools_when` | `any[]` | Stop conditions for the server-tool agent loop. |
| `store` | `boolean` |  |
| `stream` | `boolean` |  |
| `temperature` | `number | null` |  |
| `text` | `any` | Text output configuration including format and verbosity |
| `tool_choice` | `any` |  |
| `tools` | `any[]` |  |
| `top_k` | `number` |  |
| `top_logprobs` | `number | null` |  |
| `top_p` | `number | null` |  |
| `trace` | `Record<string, any>` | Metadata for observability and tracing. |
| `truncation` | `string | null` |  |
| `user` | `string` | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

#### Example: Create

```ts
const response = await client.Response().create({
  slug: 'example_slug',
  cache_control: {},
  prompt: {},
  prompt_cache_options: {},
})
```


### Stt

Create an instance: `const stt = client.Stt()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `duration` | `number` | Duration of the input audio in seconds, present when response_format is verbose_json |
| `input_audio` | `Record<string, any>` | Base64-encoded audio to transcribe |
| `language` | `string` | Detected or forced language, present when response_format is verbose_json |
| `model` | `string` | STT model identifier |
| `provider` | `Record<string, any>` | Provider-specific passthrough configuration |
| `response_format` | `string` | Output format. |
| `segments` | `any[]` | Timestamped transcript segments, present when response_format is verbose_json |
| `task` | `string` | The task performed, present when response_format is verbose_json |
| `temperature` | `number` | Sampling temperature for transcription |
| `text` | `string` | The transcribed text |
| `timestamp_granularities` | `any[]` | Timestamp detail levels to include when response_format is "verbose_json". |
| `usage` | `Record<string, any>` | Aggregated usage statistics for the request |
| `words` | `any[]` | Timestamped words, present when the provider returns word-level timestamps |

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
| `category` | `string` | The category of feedback being reported |
| `comment` | `string` | An optional free-text comment describing the feedback |
| `generation_id` | `string` | The generation to submit feedback on |
| `success` | `boolean` | Whether the feedback was recorded |

#### Example: Create

```ts
const submit_generation_feedback = await client.SubmitGenerationFeedback().create({
  category: 'example_category',
  generation_id: 'example_generation_id',
  success: true,
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
| `as_of` | `string` | UTC date (YYYY-MM-DD) of the window upper bound (yesterday). |
| `classifications` | `any[]` | Per-task classification market-share data, sorted by usage_share descending. |
| `macro_categories` | `any[]` | Aggregate market-share data per macro-category (code, data, agent, general). |
| `window_days` | `number` | Number of trailing days covered by this snapshot. |

#### Example: Load

```ts
const task = await client.Task().load()
```


### Tts

Create an instance: `const tts = client.Tts()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `string` | Text to synthesize |
| `model` | `string` | TTS model identifier |
| `provider` | `Record<string, any>` | Provider-specific passthrough configuration |
| `response_format` | `string` | Audio output format |
| `speed` | `number` | Playback speed multiplier. |
| `voice` | `string` | Voice identifier (provider-specific). |

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
| `allowed_models` | `any[] | null` | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `any[] | null` | Optional allowlist of user IDs that may use this credential. |
| `disabled` | `boolean` | Whether this credential is disabled. |
| `id` | `string` |  |
| `is_fallback` | `boolean` | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `string` | A new raw provider API key to rotate the credential in-place. |
| `name` | `string | null` | Optional human-readable name for the credential. |


### UpdateGuardrail

Create an instance: `const update_guardrail = client.UpdateGuardrail()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_models` | `any[] | null` | Array of model identifiers (slug or canonical_slug accepted) |
| `allowed_providers` | `any[] | null` | New list of allowed provider IDs |
| `content_filter_builtins` | `any[] | null` | Builtin content filters to apply. |
| `content_filters` | `any[] | null` | Custom regex content filters to apply. |
| `description` | `string | null` | New description for the guardrail |
| `enforce_zdr` | `boolean | null` | Deprecated. |
| `enforce_zdr_anthropic` | `boolean | null` | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `boolean | null` | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `boolean | null` | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `boolean | null` | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `boolean | null` | Whether to enforce zero data retention for xAI models. |
| `id` | `string` |  |
| `ignored_models` | `any[] | null` | Array of model identifiers to exclude from routing (slug or canonical_slug accepted) |
| `ignored_providers` | `any[] | null` | List of provider IDs to exclude from routing |
| `limit_usd` | `number | null` | New spending limit in USD |
| `name` | `string` | New name for the guardrail |
| `reset_interval` | `string | null` | Interval at which the limit resets (daily, weekly, monthly) |


### UpdateObservabilityDestination

Create an instance: `const update_observability_destination = client.UpdateObservabilityDestination()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hashes` | `any[] | null` | Optional allowlist of OpenRouter API key hashes. |
| `config` | `Record<string, any>` | Provider-specific configuration fields to update. |
| `enabled` | `boolean` | Whether the destination is enabled. |
| `filter_rules` | `any` |  |
| `id` | `string` |  |
| `name` | `string` | Human-readable name for the destination. |
| `privacy_mode` | `boolean` | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `number` | Sampling rate between 0.0001 and 1 (1 = 100%). |


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
| `created_at` | `string` | ISO 8601 timestamp of when the workspace was created |
| `created_by` | `string | null` | User ID of the workspace creator |
| `default_image_model` | `string | null` | Default image model for this workspace |
| `default_provider_sort` | `string | null` | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `string | null` | Default text model for this workspace |
| `description` | `string | null` | Description of the workspace |
| `id` | `string` | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `any[] | null` | Optional array of API key IDs to filter I/O logging |
| `io_logging_sampling_rate` | `number` | Sampling rate for I/O logging (0.0001-1) |
| `is_data_discount_logging_enabled` | `boolean` | Whether data discount logging is enabled |
| `is_observability_broadcast_enabled` | `boolean` | Whether broadcast is enabled |
| `is_observability_io_logging_enabled` | `boolean` | Whether private logging is enabled |
| `name` | `string` | Name for the new workspace |
| `slug` | `string` | URL-friendly slug (lowercase alphanumeric segments separated by single hyphens, no leading/trailing hyphens) |
| `updated_at` | `string | null` | ISO 8601 timestamp of when the workspace was last updated |

#### Example: List

```ts
const update_workspaces = await client.UpdateWorkspace().list()
```

#### Example: Create

```ts
const update_workspace = await client.UpdateWorkspace().create({
  created_at: 'example_created_at',
  created_by: 'example_created_by',
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
| `id` | `string` |  |
| `limit_usd` | `number` | Spending limit in USD. |


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
| `aspect_ratio` | `string` | Aspect ratio of the generated video |
| `callback_url` | `string` | URL to receive a webhook notification when the video generation job completes. |
| `duration` | `number` | Duration of the generated video in seconds |
| `error` | `string` |  |
| `frame_images` | `any[]` | Images to use as the first and/or last frame of the generated video. |
| `generate_audio` | `boolean` | Whether to generate audio alongside the video. |
| `generation_id` | `string` | The generation ID associated with this video generation job. |
| `id` | `string` |  |
| `input_references` | `any[]` | Reference assets to guide video generation. |
| `model` | `string` |  |
| `polling_url` | `string` |  |
| `prompt` | `string` | Text prompt describing the video to generate. |
| `provider` | `Record<string, any>` | Provider-specific passthrough configuration |
| `resolution` | `string` | Resolution of the generated video |
| `seed` | `number` | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `string` | Exact pixel dimensions of the generated video in "WIDTHxHEIGHT" format (e.g. |
| `status` | `string` |  |
| `unsigned_urls` | `any[]` |  |
| `usage` | `Record<string, any>` | Usage and cost information for the video generation. |

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

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const video_generation = await client.VideoGeneration().load({ id: 'video_generation_id' })
```


### VideoModel

Create an instance: `const video_model = client.VideoModel()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_passthrough_parameters` | `any[]` | List of parameters that are allowed to be passed through to the provider |
| `canonical_slug` | `string` | Canonical slug for the model |
| `created` | `number` | Unix timestamp of when the model was created |
| `description` | `string` | Description of the model |
| `generate_audio` | `boolean | null` | Whether the model supports generating audio alongside video |
| `hugging_face_id` | `string | null` | Hugging Face model identifier, if applicable |
| `id` | `string` | Unique identifier for the model |
| `name` | `string` | Display name of the model |
| `pricing_skus` | `Record<string, any> | null` | Pricing SKUs with provider prefix stripped, values as strings |
| `seed` | `boolean | null` | Whether the model supports deterministic generation via seed parameter |
| `supported_aspect_ratios` | `any[] | null` | Supported output aspect ratios |
| `supported_durations` | `any[] | null` | Supported video durations in seconds |
| `supported_frame_images` | `any[] | null` | Supported frame image types (e.g. |
| `supported_resolutions` | `any[] | null` | Supported output resolutions |
| `supported_sizes` | `any[] | null` | Supported output sizes (width x height) |

#### Example: List

```ts
const video_models = await client.VideoModel().list()
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
| `created_at` | `string` | ISO 8601 timestamp of when the workspace was created |
| `created_by` | `string | null` | User ID of the workspace creator |
| `default_image_model` | `string | null` | Default image model for this workspace |
| `default_provider_sort` | `string | null` | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `string | null` | Default text model for this workspace |
| `description` | `string | null` | Description of the workspace |
| `id` | `string` | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `any[] | null` | Optional array of API key IDs to filter I/O logging. |
| `io_logging_sampling_rate` | `number` | Sampling rate for I/O logging (0.0001-1). |
| `is_data_discount_logging_enabled` | `boolean` | Whether data discount logging is enabled for this workspace |
| `is_observability_broadcast_enabled` | `boolean` | Whether broadcast is enabled for this workspace |
| `is_observability_io_logging_enabled` | `boolean` | Whether private logging is enabled for this workspace |
| `name` | `string` | Name of the workspace |
| `slug` | `string` | URL-friendly slug for the workspace |
| `updated_at` | `string | null` | ISO 8601 timestamp of when the workspace was last updated |

#### Example: Load

```ts
const workspace = await client.Workspace().load({ id: 'workspace_id' })
```


### WorkspaceBudget

Create an instance: `const workspace_budget = client.WorkspaceBudget()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | ISO 8601 timestamp of when the budget was created |
| `id` | `string` | Unique identifier for the budget |
| `limit_usd` | `number` | Spending limit in USD for this interval |
| `reset_interval` | `string | null` | Interval at which spend resets. |
| `updated_at` | `string` | ISO 8601 timestamp of when the budget was last updated |
| `workspace_id` | `string` | ID of the workspace the budget belongs to |

#### Example: List

```ts
const workspace_budgets = await client.WorkspaceBudget().list({ id: "example" })
```


### WorkspaceMember

Create an instance: `const workspace_member = client.WorkspaceMember()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | ISO 8601 timestamp of when the membership was created |
| `id` | `string` | Unique identifier for the workspace membership |
| `role` | `string` | Role of the member in the workspace |
| `user_id` | `string` | Clerk user ID of the member |
| `workspace_id` | `string` | ID of the workspace |

#### Example: List

```ts
const workspace_members = await client.WorkspaceMember().list({ id: "example" })
```

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Rate limiting |
| [`retry`](#retry) | Retry |
| [`test`](#test) | Test transport |
| [`timeout`](#timeout) | Timeout |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Rate limiting.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Retry.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Timeout.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Open types

32 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `open_responses_result` | `input` | 49 | 19 levels |
| `response` | `input` | 49 | 19 levels |
| `open_responses_result` | `tools` | 27 | 12 levels |
| `response` | `tools` | 27 | 12 levels |
| `message` | `tools` | 13 | 6 levels |
| `chat_result` | `tools` | 12 | 6 levels |
| `completion` | `tools` | 12 | 6 levels |
| `message` | `messages` | 12 | 14 levels |
| `open_responses_result` | `tool_choice` | 8 | 4 levels |
| `response` | `tool_choice` | 8 | 4 levels |
| `chat_result` | `plugins` | 5 | 12 levels |
| `chat_result` | `tool_choice` | 5 | 0 levels |
| `completion` | `plugins` | 5 | 12 levels |
| `completion` | `tool_choice` | 5 | 0 levels |
| `embedding` | `input` | 5 | 6 levels |
| `message` | `plugins` | 5 | 12 levels |
| `open_responses_result` | `plugins` | 5 | 12 levels |
| `response` | `plugins` | 5 | 12 levels |
| `image` | `usage` | 4 | 3 levels |
| `message` | `tool_choice` | 4 | 0 levels |
| `open_responses_result` | `prompt` | 4 | 3 levels |
| `response` | `prompt` | 4 | 3 levels |
| `beta_analytics` | `classifier_filters` | 3 | 8 levels |
| `beta_analytics` | `filters` | 3 | 6 levels |
| `chat_result` | `image_config` | 3 | 1 level |
| `completion` | `image_config` | 3 | 1 level |
| `message` | `context_management` | 3 | 7 levels |
| `message` | `thinking` | 3 | 0 levels |
| `open_responses_result` | `image_config` | 3 | 1 level |
| `open_responses_result` | `text` | 3 | 4 levels |
| `response` | `image_config` | 3 | 1 level |
| `response` | `text` | 3 | 4 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

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

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

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
import { OpenrouterModelsSDK } from '@voxgig-sdk/openrouter-models-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const provider = client.Provider()
await provider.list()

// provider.data() now returns the provider data from the last `list`
// provider.match() returns the last match criteria
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
