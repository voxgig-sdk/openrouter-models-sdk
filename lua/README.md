# OpenrouterModels Lua SDK



The Lua SDK for the OpenrouterModels API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Activity()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/openrouter-models-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("openrouter-models_sdk")

local client = sdk.new({
  apikey = os.getenv("OPENROUTER_MODELS_APIKEY"),
})
```

### 2. List activity records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local activitys, err = client:Activity():list()
if err then error(err) end

for _, item in ipairs(activitys) do
  print(item)
end
```

### 3. Load an endpoint

Endpoint is nested under author, so provide the `author`.

```lua
local endpoint, err = client:Endpoint():load({ author = "example_author", slug = "example_slug" })
if err then error(err) end
print(endpoint)
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local providers, err = client:Provider():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:Provider():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
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
cd lua && busted test/
```


## Reference

### OpenrouterModelsSDK

```lua
local sdk = require("openrouter-models_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### OpenrouterModelsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Activity` | `(data) -> ActivityEntity` | Create an Activity entity instance. |
| `ApiKey` | `(data) -> ApiKeyEntity` | Create an ApiKey entity instance. |
| `AppRanking` | `(data) -> AppRankingEntity` | Create an AppRanking entity instance. |
| `BetaAnalytics` | `(data) -> BetaAnalyticsEntity` | Create a BetaAnalytics entity instance. |
| `BulkAddWorkspaceMember` | `(data) -> BulkAddWorkspaceMemberEntity` | Create a BulkAddWorkspaceMember entity instance. |
| `BulkAssignKey` | `(data) -> BulkAssignKeyEntity` | Create a BulkAssignKey entity instance. |
| `BulkAssignMember` | `(data) -> BulkAssignMemberEntity` | Create a BulkAssignMember entity instance. |
| `BulkRemoveWorkspaceMember` | `(data) -> BulkRemoveWorkspaceMemberEntity` | Create a BulkRemoveWorkspaceMember entity instance. |
| `BulkUnassignKey` | `(data) -> BulkUnassignKeyEntity` | Create a BulkUnassignKey entity instance. |
| `BulkUnassignMember` | `(data) -> BulkUnassignMemberEntity` | Create a BulkUnassignMember entity instance. |
| `Byok` | `(data) -> ByokEntity` | Create a Byok entity instance. |
| `ChatResult` | `(data) -> ChatResultEntity` | Create a ChatResult entity instance. |
| `Completion` | `(data) -> CompletionEntity` | Create a Completion entity instance. |
| `CreateObservabilityDestination` | `(data) -> CreateObservabilityDestinationEntity` | Create a CreateObservabilityDestination entity instance. |
| `Credit` | `(data) -> CreditEntity` | Create a Credit entity instance. |
| `Embedding` | `(data) -> EmbeddingEntity` | Create an Embedding entity instance. |
| `Endpoint` | `(data) -> EndpointEntity` | Create an Endpoint entity instance. |
| `File` | `(data) -> FileEntity` | Create a File entity instance. |
| `Generation` | `(data) -> GenerationEntity` | Create a Generation entity instance. |
| `GenerationContentData` | `(data) -> GenerationContentDataEntity` | Create a GenerationContentData entity instance. |
| `Guardrail` | `(data) -> GuardrailEntity` | Create a Guardrail entity instance. |
| `Image` | `(data) -> ImageEntity` | Create an Image entity instance. |
| `ImageModelEndpoint` | `(data) -> ImageModelEndpointEntity` | Create an ImageModelEndpoint entity instance. |
| `ImageModelListItem` | `(data) -> ImageModelListItemEntity` | Create an ImageModelListItem entity instance. |
| `Key` | `(data) -> KeyEntity` | Create a Key entity instance. |
| `ListObservabilityDestination` | `(data) -> ListObservabilityDestinationEntity` | Create a ListObservabilityDestination entity instance. |
| `ListPresetVersion` | `(data) -> ListPresetVersionEntity` | Create a ListPresetVersion entity instance. |
| `Member` | `(data) -> MemberEntity` | Create a Member entity instance. |
| `Message` | `(data) -> MessageEntity` | Create a Message entity instance. |
| `Model` | `(data) -> ModelEntity` | Create a Model entity instance. |
| `ModelsCount` | `(data) -> ModelsCountEntity` | Create a ModelsCount entity instance. |
| `ModelsList` | `(data) -> ModelsListEntity` | Create a ModelsList entity instance. |
| `OAuth` | `(data) -> OAuthEntity` | Create an OAuth entity instance. |
| `ObservabilityDestination` | `(data) -> ObservabilityDestinationEntity` | Create an ObservabilityDestination entity instance. |
| `OpenResponsesResult` | `(data) -> OpenResponsesResultEntity` | Create an OpenResponsesResult entity instance. |
| `Organization` | `(data) -> OrganizationEntity` | Create an Organization entity instance. |
| `Preset` | `(data) -> PresetEntity` | Create a Preset entity instance. |
| `PresetVersion` | `(data) -> PresetVersionEntity` | Create a PresetVersion entity instance. |
| `Provider` | `(data) -> ProviderEntity` | Create a Provider entity instance. |
| `RankingsDaily` | `(data) -> RankingsDailyEntity` | Create a RankingsDaily entity instance. |
| `Rerank` | `(data) -> RerankEntity` | Create a Rerank entity instance. |
| `Response` | `(data) -> ResponseEntity` | Create a Response entity instance. |
| `Stt` | `(data) -> SttEntity` | Create a Stt entity instance. |
| `SubmitGenerationFeedback` | `(data) -> SubmitGenerationFeedbackEntity` | Create a SubmitGenerationFeedback entity instance. |
| `Task` | `(data) -> TaskEntity` | Create a Task entity instance. |
| `Tts` | `(data) -> TtsEntity` | Create a Tts entity instance. |
| `UnifiedBenchmark` | `(data) -> UnifiedBenchmarkEntity` | Create an UnifiedBenchmark entity instance. |
| `UpdateByokKey` | `(data) -> UpdateByokKeyEntity` | Create an UpdateByokKey entity instance. |
| `UpdateGuardrail` | `(data) -> UpdateGuardrailEntity` | Create an UpdateGuardrail entity instance. |
| `UpdateObservabilityDestination` | `(data) -> UpdateObservabilityDestinationEntity` | Create an UpdateObservabilityDestination entity instance. |
| `UpdateWorkspace` | `(data) -> UpdateWorkspaceEntity` | Create an UpdateWorkspace entity instance. |
| `UpsertWorkspaceBudget` | `(data) -> UpsertWorkspaceBudgetEntity` | Create an UpsertWorkspaceBudget entity instance. |
| `Video` | `(data) -> VideoEntity` | Create a Video entity instance. |
| `VideoGeneration` | `(data) -> VideoGenerationEntity` | Create a VideoGeneration entity instance. |
| `VideoModel` | `(data) -> VideoModelEntity` | Create a VideoModel entity instance. |
| `Workspace` | `(data) -> WorkspaceEntity` | Create a Workspace entity instance. |
| `WorkspaceBudget` | `(data) -> WorkspaceBudgetEntity` | Create a WorkspaceBudget entity instance. |
| `WorkspaceMember` | `(data) -> WorkspaceMemberEntity` | Create a WorkspaceMember entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local api_key, err = client:ApiKey():load({ id = "example_id" })
    if err then error(err) end
    -- api_key is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Operations: List.

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

Operations: Create, List, Load, Remove, Update.

API path: `/keys`

#### AppRanking

| Field | Description |
| --- | --- |
| `app_id` | Stable numeric identifier of the app on OpenRouter. |
| `app_name` | Public display name of the app. |
| `rank` | 1-based position of the app within this response, per the requested `sort`. |
| `total_requests` | Number of requests attributed to the app inside the date window. |
| `total_tokens` | Sum of `prompt_tokens + completion_tokens` attributed to the app inside the date window, returned as a decimal string so 64-bit values are not truncated. |

Operations: List.

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

Operations: Create, Load.

API path: `/analytics/query`

#### BulkAddWorkspaceMember

| Field | Description |
| --- | --- |
| `added_count` | Number of workspace memberships created or updated |
| `data` | List of added workspace memberships |
| `user_ids` | List of user IDs to add to the workspace. |

Operations: Create.

API path: `/workspaces/{id}/members/add`

#### BulkAssignKey

| Field | Description |
| --- | --- |
| `assigned_count` | Number of keys successfully assigned |
| `key_hashes` | Array of API key hashes to assign to the guardrail |

Operations: Create.

API path: `/guardrails/{id}/assignments/keys`

#### BulkAssignMember

| Field | Description |
| --- | --- |
| `assigned_count` | Number of members successfully assigned |
| `member_user_ids` | Array of member user IDs to assign to the guardrail |

Operations: Create.

API path: `/guardrails/{id}/assignments/members`

#### BulkRemoveWorkspaceMember

| Field | Description |
| --- | --- |
| `removed_count` | Number of members removed |
| `user_ids` | List of user IDs to remove from the workspace |

Operations: Create.

API path: `/workspaces/{id}/members/remove`

#### BulkUnassignKey

| Field | Description |
| --- | --- |
| `key_hashes` | Array of API key hashes to unassign from the guardrail |
| `unassigned_count` | Number of keys successfully unassigned |

Operations: Create.

API path: `/guardrails/{id}/assignments/keys/remove`

#### BulkUnassignMember

| Field | Description |
| --- | --- |
| `member_user_ids` | Array of member user IDs to unassign from the guardrail |
| `unassigned_count` | Number of members successfully unassigned |

Operations: Create.

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

Operations: Create, List, Load, Remove.

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

Operations: Create.

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

Operations: Create.

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

Operations: Create.

API path: `/observability/destinations`

#### Credit

| Field | Description |
| --- | --- |
| `total_credits` | Total credits purchased |
| `total_usage` | Total credits used |

Operations: Create, Load.

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

Operations: Create.

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

Operations: List, Load.

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

Operations: Create, List, Load, Remove.

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

Operations: Load.

API path: `/generation`

#### GenerationContentData

| Field | Description |
| --- | --- |
| `input` | The input to the generation — either a prompt string or an array of messages |
| `output` | The output from the generation |

Operations: Load.

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

Operations: Create, List, Load, Remove.

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

Operations: Create.

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

Operations: List.

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

Operations: List.

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

Operations: List.

API path: `/guardrails/{id}/assignments/keys`

#### ListObservabilityDestination

| Field | Description |
| --- | --- |
| `data` | List of observability destinations. |
| `total_count` | Total number of destinations matching the filters. |

Operations: List.

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

Operations: List.

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

Operations: List.

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

Operations: Create.

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

Operations: List, Load.

API path: `/embeddings/models`

#### ModelsCount

| Field | Description |
| --- | --- |
| `count` | Total number of available models |

Operations: Load.

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

Operations: List.

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

Operations: Create.

API path: `/auth/keys`

#### ObservabilityDestination

| Field | Description |
| --- | --- |
| `data` |  |
| `id` |  |

Operations: Load, Remove.

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

Operations: Create.

API path: `/responses`

#### Organization

| Field | Description |
| --- | --- |

Operations: List.

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

Operations: List, Load.

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

Operations: Load.

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

Operations: List.

API path: `/providers`

#### RankingsDaily

| Field | Description |
| --- | --- |
| `date` | UTC calendar date the row is aggregated over (YYYY-MM-DD). |
| `model_permaslug` | Model variant permaslug (e.g. |
| `total_tokens` | Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated. |

Operations: List.

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

Operations: Create.

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

Operations: Create.

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

Operations: Create.

API path: `/audio/transcriptions`

#### SubmitGenerationFeedback

| Field | Description |
| --- | --- |
| `category` | The category of feedback being reported |
| `comment` | An optional free-text comment describing the feedback |
| `generation_id` | The generation to submit feedback on |
| `success` | Whether the feedback was recorded |

Operations: Create.

API path: `/generation/feedback`

#### Task

| Field | Description |
| --- | --- |
| `as_of` | UTC date (YYYY-MM-DD) of the window upper bound (yesterday). |
| `classifications` | Per-task classification market-share data, sorted by usage_share descending. |
| `macro_categories` | Aggregate market-share data per macro-category (code, data, agent, general). |
| `window_days` | Number of trailing days covered by this snapshot. |

Operations: Load.

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

Operations: Create.

API path: `/audio/speech`

#### UnifiedBenchmark

| Field | Description |
| --- | --- |
| `data` |  |
| `meta` |  |

Operations: List.

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

Operations: Update.

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

Operations: Update.

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

Operations: Update.

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

Operations: Create, List, Update.

API path: `/workspaces`

#### UpsertWorkspaceBudget

| Field | Description |
| --- | --- |
| `id` |  |
| `limit_usd` | Spending limit in USD. |

Operations: Update.

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

Operations: Create, Load.

API path: `/videos`

#### VideoGeneration

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load.

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

Operations: List.

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

Operations: Load, Remove.

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

Operations: List, Remove.

API path: `/workspaces/{id}/budgets`

#### WorkspaceMember

| Field | Description |
| --- | --- |
| `created_at` | ISO 8601 timestamp of when the membership was created |
| `id` | Unique identifier for the workspace membership |
| `role` | Role of the member in the workspace |
| `user_id` | Clerk user ID of the member |
| `workspace_id` | ID of the workspace |

Operations: List.

API path: `/workspaces/{id}/members`



## Entities


### Activity

Create an instance: `local activity = client:Activity(nil)`

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

```lua
local activitys, err = client:Activity():list()
```


### ApiKey

Create an instance: `local api_key = client:ApiKey(nil)`

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
| `creator_user_id` | `string|nil` | The user ID of the key creator. |
| `disabled` | `boolean` | Whether the API key is disabled |
| `expires_at` | `string|nil` | ISO 8601 UTC timestamp when the API key expires, or null if no expiration |
| `hash` | `string` | Unique hash identifier for the API key |
| `id` | `string` |  |
| `include_byok_in_limit` | `boolean` | Whether to include external BYOK usage in the credit limit |
| `is_free_tier` | `boolean` | Whether this is a free tier API key |
| `is_management_key` | `boolean` | Whether this is a management key |
| `is_provisioning_key` | `boolean` | Whether this is a management key |
| `label` | `string` | Human-readable label for the API key |
| `limit` | `number|nil` | Spending limit for the API key in USD |
| `limit_remaining` | `number|nil` | Remaining spending limit in USD |
| `limit_reset` | `string|nil` | Type of limit reset for the API key |
| `name` | `string` | Name of the API key |
| `rate_limit` | `table` | Legacy rate limit information about a key. |
| `updated_at` | `string|nil` | ISO 8601 timestamp of when the API key was last updated |
| `usage` | `number` | Total OpenRouter credit usage (in USD) for the API key |
| `usage_daily` | `number` | OpenRouter credit usage (in USD) for the current UTC day |
| `usage_monthly` | `number` | OpenRouter credit usage (in USD) for the current UTC month |
| `usage_weekly` | `number` | OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday) |
| `workspace_id` | `string` | The workspace ID this API key belongs to. |

#### Example: Load

```lua
local api_key, err = client:ApiKey():load({ id = "api_key_id" })
```

#### Example: List

```lua
local api_keys, err = client:ApiKey():list()
```

#### Example: Create

```lua
local api_key, err = client:ApiKey():create({
  byok_usage = 1, -- number
  byok_usage_daily = 1, -- number
  byok_usage_monthly = 1, -- number
  byok_usage_weekly = 1, -- number
  created_at = "example_created_at", -- string
  creator_user_id = "example_creator_user_id", -- string|nil
  disabled = true, -- boolean
  hash = "example_hash", -- string
  include_byok_in_limit = true, -- boolean
  is_free_tier = true, -- boolean
  is_management_key = true, -- boolean
  is_provisioning_key = true, -- boolean
  label = "example_label", -- string
  limit = 1, -- number|nil
  limit_remaining = 1, -- number|nil
  limit_reset = "example_limit_reset", -- string|nil
  name = "example_name", -- string
  rate_limit = {}, -- table
  updated_at = "example_updated_at", -- string|nil
  usage = 1, -- number
  usage_daily = 1, -- number
  usage_monthly = 1, -- number
  usage_weekly = 1, -- number
  workspace_id = "example_workspace_id", -- string
})
```


### AppRanking

Create an instance: `local app_ranking = client:AppRanking(nil)`

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

```lua
local app_rankings, err = client:AppRanking():list()
```


### BetaAnalytics

Create an instance: `local beta_analytics = client:BetaAnalytics(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cachedAt` | `number` |  |
| `classifier_dimensions` | `table` | Group results by custom classifier tags, breaking down metrics by the specified dimension values. |
| `classifier_filters` | `table` | Filter results to generations with specific classifier tag values. |
| `data` | `table` |  |
| `dimensions` | `table` |  |
| `filters` | `table` |  |
| `granularities` | `table` |  |
| `granularity` | `string` | Time granularity |
| `group_limit` | `number` | Maximum rows per distinct combination of dimensions. |
| `limit` | `number` | Maximum total rows returned. |
| `metadata` | `table` |  |
| `metrics` | `table` |  |
| `operators` | `table` |  |
| `order_by` | `table` |  |
| `time_range` | `table` |  |
| `warnings` | `table` | Warnings about filter resolution issues (e.g. |

#### Example: Load

```lua
local beta_analytics, err = client:BetaAnalytics():load()
```

#### Example: Create

```lua
local beta_analytics, err = client:BetaAnalytics():create({
  classifier_dimensions = {}, -- table
  classifier_filters = {}, -- table
  data = {}, -- table
  dimensions = {}, -- table
  granularities = {}, -- table
  metadata = {}, -- table
  metrics = {}, -- table
  operators = {}, -- table
  order_by = {}, -- table
  time_range = {}, -- table
})
```


### BulkAddWorkspaceMember

Create an instance: `local bulk_add_workspace_member = client:BulkAddWorkspaceMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `added_count` | `number` | Number of workspace memberships created or updated |
| `data` | `table` | List of added workspace memberships |
| `user_ids` | `table` | List of user IDs to add to the workspace. |

#### Example: Create

```lua
local bulk_add_workspace_member, err = client:BulkAddWorkspaceMember():create({
  workspace_id = "example_workspace_id", -- string
  added_count = 1, -- number
  data = {}, -- table
  user_ids = {}, -- table
})
```


### BulkAssignKey

Create an instance: `local bulk_assign_key = client:BulkAssignKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_count` | `number` | Number of keys successfully assigned |
| `key_hashes` | `table` | Array of API key hashes to assign to the guardrail |

#### Example: Create

```lua
local bulk_assign_key, err = client:BulkAssignKey():create({
  guardrail_id = "example_guardrail_id", -- string
  assigned_count = 1, -- number
  key_hashes = {}, -- table
})
```


### BulkAssignMember

Create an instance: `local bulk_assign_member = client:BulkAssignMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_count` | `number` | Number of members successfully assigned |
| `member_user_ids` | `table` | Array of member user IDs to assign to the guardrail |

#### Example: Create

```lua
local bulk_assign_member, err = client:BulkAssignMember():create({
  guardrail_id = "example_guardrail_id", -- string
  assigned_count = 1, -- number
  member_user_ids = {}, -- table
})
```


### BulkRemoveWorkspaceMember

Create an instance: `local bulk_remove_workspace_member = client:BulkRemoveWorkspaceMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `removed_count` | `number` | Number of members removed |
| `user_ids` | `table` | List of user IDs to remove from the workspace |

#### Example: Create

```lua
local bulk_remove_workspace_member, err = client:BulkRemoveWorkspaceMember():create({
  workspace_id = "example_workspace_id", -- string
  removed_count = 1, -- number
  user_ids = {}, -- table
})
```


### BulkUnassignKey

Create an instance: `local bulk_unassign_key = client:BulkUnassignKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key_hashes` | `table` | Array of API key hashes to unassign from the guardrail |
| `unassigned_count` | `number` | Number of keys successfully unassigned |

#### Example: Create

```lua
local bulk_unassign_key, err = client:BulkUnassignKey():create({
  guardrail_id = "example_guardrail_id", -- string
  key_hashes = {}, -- table
  unassigned_count = 1, -- number
})
```


### BulkUnassignMember

Create an instance: `local bulk_unassign_member = client:BulkUnassignMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `member_user_ids` | `table` | Array of member user IDs to unassign from the guardrail |
| `unassigned_count` | `number` | Number of members successfully unassigned |

#### Example: Create

```lua
local bulk_unassign_member, err = client:BulkUnassignMember():create({
  guardrail_id = "example_guardrail_id", -- string
  member_user_ids = {}, -- table
  unassigned_count = 1, -- number
})
```


### Byok

Create an instance: `local byok = client:Byok(nil)`

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
| `allowed_api_key_hashes` | `table|nil` | Optional allowlist of OpenRouter API key hashes (`api_keys.hash`) that may use this credential. |
| `allowed_models` | `table|nil` | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `table|nil` | Optional allowlist of user IDs that may use this credential. |
| `created_at` | `string` | ISO timestamp of when the credential was created. |
| `disabled` | `boolean` | Whether this credential is currently disabled. |
| `id` | `string` | Stable public identifier for this BYOK credential. |
| `is_fallback` | `boolean` | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `string` | The raw provider API key or credential. |
| `label` | `string` | Short masked snippet of the key (e.g. |
| `name` | `string|nil` | Optional human-readable name for the credential. |
| `provider` | `string` | The upstream provider this credential authenticates against, as a lowercase slug (e.g. |
| `sort_order` | `number` | Position within the provider — credentials are tried in ascending sort order. |
| `workspace_id` | `string` | ID of the workspace this credential belongs to. |

#### Example: Load

```lua
local byok, err = client:Byok():load({ id = "byok_id" })
```

#### Example: List

```lua
local byoks, err = client:Byok():list()
```

#### Example: Create

```lua
local byok, err = client:Byok():create({
  allowed_api_key_hashes = {}, -- table|nil
  allowed_models = {}, -- table|nil
  allowed_user_ids = {}, -- table|nil
  created_at = "example_created_at", -- string
  disabled = true, -- boolean
  id = "example_id", -- string
  is_fallback = true, -- boolean
  key = "example_key", -- string
  label = "example_label", -- string
  provider = "example_provider", -- string
  sort_order = 1, -- number
  workspace_id = "example_workspace_id", -- string
})
```


### ChatResult

Create an instance: `local chat_result = client:ChatResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_control` | `table` | Enable automatic prompt caching. |
| `choices` | `table` | List of completion choices |
| `created` | `number` | Unix timestamp of creation |
| `debug` | `table` | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `number|nil` | Frequency penalty (-2.0 to 2.0) |
| `id` | `string` | Unique completion identifier |
| `image_config` | `table` | Provider-specific image configuration options. |
| `logit_bias` | `table|nil` | Token logit bias adjustments |
| `logprobs` | `boolean|nil` | Return log probabilities |
| `max_completion_tokens` | `number|nil` | Maximum tokens in completion |
| `max_tokens` | `number|nil` | Maximum tokens (deprecated, use max_completion_tokens). |
| `messages` | `table` | List of messages for the conversation |
| `metadata` | `table` | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `number|nil` | Minimum probability threshold relative to the most likely token. |
| `modalities` | `table` | Output modalities for the response. |
| `model` | `string` | Model used for completion |
| `models` | `table` | Models to use for completion |
| `object` | `string` |  |
| `openrouter_metadata` | `table` |  |
| `parallel_tool_calls` | `boolean|nil` | Whether to enable parallel function calling during tool use. |
| `plugins` | `table` | Plugins you want to enable for this request, including their settings. |
| `prediction` | `table|nil` | Static predicted output content. |
| `presence_penalty` | `number|nil` | Presence penalty (-2.0 to 2.0) |
| `prompt_cache_key` | `string|nil` |  |
| `prompt_cache_options` | `table|nil` | Request-level prompt-cache controls. |
| `provider` | `table|nil` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `table` | Configuration options for reasoning models |
| `reasoning_effort` | `string|nil` | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `number|nil` | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `any` | Response format configuration |
| `route` | `string|nil` | **DEPRECATED** Use providers.sort.partition instead. |
| `seed` | `number|nil` | Random seed for deterministic outputs |
| `service_tier` | `string|nil` | The service tier used by the upstream provider for this request |
| `session_id` | `string` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop` | `any` | Stop sequences (up to 4) |
| `stop_server_tools_when` | `table` | Stop conditions for the server-tool agent loop. |
| `stream` | `boolean` | Enable streaming response |
| `stream_options` | `table|nil` | Streaming configuration options |
| `system_fingerprint` | `string|nil` | System fingerprint |
| `temperature` | `number|nil` | Sampling temperature (0-2) |
| `tool_choice` | `any` | Tool choice configuration |
| `tools` | `table` | Available tools for function calling |
| `top_a` | `number|nil` | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `number|nil` | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `number|nil` | Number of top log probabilities to return (0-20) |
| `top_p` | `number|nil` | Nucleus sampling parameter (0-1) |
| `trace` | `table` | Metadata for observability and tracing. |
| `usage` | `table` | Token usage statistics |
| `user` | `string` | Unique user identifier |

#### Example: Create

```lua
local chat_result, err = client:ChatResult():create({
  cache_control = {}, -- table
  choices = {}, -- table
  created = 1, -- number
  id = "example_id", -- string
  messages = {}, -- table
  model = "example_model", -- string
  object = "example_object", -- string
  openrouter_metadata = {}, -- table
  prediction = {}, -- table|nil
  prompt_cache_options = {}, -- table|nil
  system_fingerprint = "example_system_fingerprint", -- string|nil
  usage = {}, -- table
})
```


### Completion

Create an instance: `local completion = client:Completion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_control` | `table` | Enable automatic prompt caching. |
| `debug` | `table` | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `number|nil` | Frequency penalty (-2.0 to 2.0) |
| `image_config` | `table` | Provider-specific image configuration options. |
| `logit_bias` | `table|nil` | Token logit bias adjustments |
| `logprobs` | `boolean|nil` | Return log probabilities |
| `max_completion_tokens` | `number|nil` | Maximum tokens in completion |
| `max_tokens` | `number|nil` | Maximum tokens (deprecated, use max_completion_tokens). |
| `messages` | `table` | List of messages for the conversation |
| `metadata` | `table` | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `number|nil` | Minimum probability threshold relative to the most likely token. |
| `modalities` | `table` | Output modalities for the response. |
| `model` | `string` | Model to use for completion |
| `models` | `table` | Models to use for completion |
| `parallel_tool_calls` | `boolean|nil` | Whether to enable parallel function calling during tool use. |
| `plugins` | `table` | Plugins you want to enable for this request, including their settings. |
| `prediction` | `table|nil` | Static predicted output content. |
| `presence_penalty` | `number|nil` | Presence penalty (-2.0 to 2.0) |
| `prompt_cache_key` | `string|nil` |  |
| `prompt_cache_options` | `table|nil` | Request-level prompt-cache controls. |
| `provider` | `table|nil` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `table` | Configuration options for reasoning models |
| `reasoning_effort` | `string|nil` | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `number|nil` | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `any` | Response format configuration |
| `route` | `string|nil` | **DEPRECATED** Use providers.sort.partition instead. |
| `seed` | `number|nil` | Random seed for deterministic outputs |
| `service_tier` | `string|nil` | The service tier to use for processing this request. |
| `session_id` | `string` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop` | `any` | Stop sequences (up to 4) |
| `stop_server_tools_when` | `table` | Stop conditions for the server-tool agent loop. |
| `stream` | `boolean` | Enable streaming response |
| `stream_options` | `table|nil` | Streaming configuration options |
| `temperature` | `number|nil` | Sampling temperature (0-2) |
| `tool_choice` | `any` | Tool choice configuration |
| `tools` | `table` | Available tools for function calling |
| `top_a` | `number|nil` | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `number|nil` | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `number|nil` | Number of top log probabilities to return (0-20) |
| `top_p` | `number|nil` | Nucleus sampling parameter (0-1) |
| `trace` | `table` | Metadata for observability and tracing. |
| `user` | `string` | Unique user identifier |

#### Example: Create

```lua
local completion, err = client:Completion():create({
  slug = "example_slug", -- string
  cache_control = {}, -- table
  messages = {}, -- table
  prediction = {}, -- table|nil
  prompt_cache_options = {}, -- table|nil
})
```


### CreateObservabilityDestination

Create an instance: `local create_observability_destination = client:CreateObservabilityDestination(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hashes` | `table|nil` | Optional allowlist of OpenRouter API key hashes whose traffic is forwarded. |
| `config` | `table` | Provider-specific configuration. |
| `enabled` | `boolean` | Whether this destination should be enabled immediately. |
| `filter_rules` | `table|nil` | Optional structured filter rules controlling which events are forwarded. |
| `name` | `string` | Human-readable name for the destination. |
| `privacy_mode` | `boolean` | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `number` | Sampling rate between 0.0001 and 1 (1 = 100%). |
| `type` | `string` | The destination type. |
| `workspace_id` | `string` | Optional workspace ID. |

#### Example: Create

```lua
local create_observability_destination, err = client:CreateObservabilityDestination():create({
  config = {}, -- table
  filter_rules = {}, -- table|nil
  name = "example_name", -- string
  type = "example_type", -- string
})
```


### Credit

Create an instance: `local credit = client:Credit(nil)`

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

```lua
local credit, err = client:Credit():load()
```

#### Example: Create

```lua
local credit, err = client:Credit():create({
  total_credits = 1, -- number
  total_usage = 1, -- number
})
```


### Embedding

Create an instance: `local embedding = client:Embedding(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` | List of embedding objects |
| `dimensions` | `number` | The number of dimensions for the output embeddings |
| `encoding_format` | `string` | The format of the output embeddings |
| `id` | `string` | Unique identifier for the embeddings response |
| `input` | `any` | Text, token, or multimodal input(s) to embed |
| `input_type` | `string` | The type of input (e.g. |
| `model` | `string` | The model used for embeddings |
| `object` | `string` |  |
| `provider` | `any` |  |
| `usage` | `table` | Token usage statistics |
| `user` | `string` | A unique identifier for the end-user |

#### Example: Create

```lua
local embedding, err = client:Embedding():create({
  data = {}, -- table
  input = "example_input", -- any
  model = "example_model", -- string
  object = "example_object", -- string
  usage = {}, -- table
})
```


### Endpoint

Create an instance: `local endpoint = client:Endpoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `any` | Model architecture information |
| `benchmarks` | `table` | Third-party benchmark rankings for this model. |
| `canonical_slug` | `string` | Canonical slug for the model |
| `context_length` | `number|nil` | Maximum context length in tokens |
| `created` | `number` | Unix timestamp of when the model was created |
| `default_parameters` | `table|nil` | Default parameters for this model |
| `description` | `string` | Description of the model |
| `endpoints` | `table` | List of available endpoints for this model |
| `expiration_date` | `string|nil` | The date after which the model may be removed. |
| `hugging_face_id` | `string|nil` | Hugging Face model identifier, if applicable |
| `id` | `string` | Unique identifier for the model |
| `knowledge_cutoff` | `string|nil` | The date up to which the model was trained on data. |
| `links` | `table` | Related API endpoints and resources for this model. |
| `name` | `string` | Display name of the model |
| `per_request_limits` | `table|nil` | Per-request token limits |
| `pricing` | `table` | Pricing information for the model |
| `reasoning` | `table` | Reasoning effort configuration. |
| `supported_parameters` | `table` | List of supported parameters for this model |
| `supported_voices` | `table|nil` | List of supported voice identifiers for TTS models. |
| `top_provider` | `table` | Information about the top provider for this model |

#### Example: Load

```lua
local endpoint, err = client:Endpoint():load({ author = "author", slug = "slug" })
```

#### Example: List

```lua
local endpoints, err = client:Endpoint():list()
```


### File

Create an instance: `local file = client:File(nil)`

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

```lua
local file, err = client:File():load({ id = "file_id" })
```

#### Example: List

```lua
local files, err = client:File():list()
```

#### Example: Create

```lua
local file, err = client:File():create({
  created_at = "example_created_at", -- string
  downloadable = true, -- boolean
  filename = "example_filename", -- string
  id = "example_id", -- string
  mime_type = "example_mime_type", -- string
  size_bytes = 1, -- number
  type = "example_type", -- string
})
```


### Generation

Create an instance: `local generation = client:Generation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_type` | `string|nil` | Type of API used for the generation |
| `app_id` | `number|nil` | ID of the app that made the request |
| `cache_discount` | `number|nil` | Discount applied due to caching |
| `cancelled` | `boolean|nil` | Whether the generation was cancelled |
| `created_at` | `string` | ISO 8601 timestamp of when the generation was created |
| `data_region` | `string` | The data region this generation was routed through. |
| `external_user` | `string|nil` | External user identifier |
| `finish_reason` | `string|nil` | Reason the generation finished |
| `generation_time` | `number|nil` | Time taken for generation in milliseconds |
| `http_referer` | `string|nil` | Referer header from the request |
| `id` | `string` | Unique identifier for the generation |
| `is_byok` | `boolean` | Whether this used bring-your-own-key |
| `latency` | `number|nil` | Total latency in milliseconds |
| `model` | `string` | Model used for the generation |
| `moderation_latency` | `number|nil` | Moderation latency in milliseconds |
| `native_finish_reason` | `string|nil` | Native finish reason as reported by provider |
| `native_tokens_cached` | `number|nil` | Native cached tokens as reported by provider |
| `native_tokens_completion` | `number|nil` | Native completion tokens as reported by provider |
| `native_tokens_completion_images` | `number|nil` | Native completion image tokens as reported by provider |
| `native_tokens_prompt` | `number|nil` | Native prompt tokens as reported by provider |
| `native_tokens_reasoning` | `number|nil` | Native reasoning tokens as reported by provider |
| `num_fetches` | `number|nil` | Number of web fetches performed |
| `num_input_audio_prompt` | `number|nil` | Number of audio inputs in the prompt |
| `num_media_completion` | `number|nil` | Number of media items in the completion |
| `num_media_prompt` | `number|nil` | Number of media items in the prompt |
| `num_search_results` | `number|nil` | Number of search results included |
| `origin` | `string` | Origin URL of the request |
| `preset_id` | `string|nil` | ID of the preset used for this generation, null if no preset was used |
| `provider_name` | `string|nil` | Name of the provider that served the request |
| `provider_responses` | `table|nil` | List of provider responses for this generation, including fallback attempts |
| `request_id` | `string|nil` | Unique identifier grouping all generations from a single API request |
| `response_cache_source_id` | `string|nil` | If this generation was served from response cache, contains the original generation ID. |
| `router` | `string|nil` | Router used for the request (e.g., openrouter/auto) |
| `service_tier` | `string|nil` | Service tier the upstream provider reported running this request on, or null if it did not report one. |
| `session_id` | `string|nil` | Session identifier grouping multiple generations in the same session |
| `streamed` | `boolean|nil` | Whether the response was streamed |
| `tokens_completion` | `number|nil` | Number of tokens in the completion |
| `tokens_prompt` | `number|nil` | Number of tokens in the prompt |
| `total_cost` | `number` | Total cost of the generation in USD |
| `upstream_id` | `string|nil` | Upstream provider's identifier for this generation |
| `upstream_inference_cost` | `number|nil` | Cost charged by the upstream provider |
| `usage` | `number` | Usage amount in USD |
| `user_agent` | `string|nil` | User-Agent header from the request |
| `web_search_engine` | `string|nil` | The resolved web search engine used for this generation (e.g. |

#### Example: Load

```lua
local generation, err = client:Generation():load({ id = "generation_id" })
```


### GenerationContentData

Create an instance: `local generation_content_data = client:GenerationContentData(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `any` | The input to the generation — either a prompt string or an array of messages |
| `output` | `table` | The output from the generation |

#### Example: Load

```lua
local generation_content_data, err = client:GenerationContentData():load({ id = "generation_content_data_id" })
```


### Guardrail

Create an instance: `local guardrail = client:Guardrail(nil)`

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
| `allowed_models` | `table|nil` | Array of model canonical_slugs (immutable identifiers) |
| `allowed_providers` | `table|nil` | List of allowed provider IDs |
| `content_filter_builtins` | `table|nil` | Builtin content filters applied to requests. |
| `content_filters` | `table|nil` | Custom regex content filters applied to request messages |
| `created_at` | `string` | ISO 8601 timestamp of when the guardrail was created |
| `description` | `string|nil` | Description of the guardrail |
| `enforce_zdr` | `boolean|nil` | Deprecated. |
| `enforce_zdr_anthropic` | `boolean|nil` | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `boolean|nil` | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `boolean|nil` | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `boolean|nil` | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `boolean|nil` | Whether to enforce zero data retention for xAI models. |
| `id` | `string` | Unique identifier for the guardrail |
| `ignored_models` | `table|nil` | Array of model canonical_slugs to exclude from routing |
| `ignored_providers` | `table|nil` | List of provider IDs to exclude from routing |
| `limit_usd` | `number|nil` | Spending limit in USD |
| `name` | `string` | Name of the guardrail |
| `reset_interval` | `string|nil` | Interval at which the limit resets (daily, weekly, monthly) |
| `updated_at` | `string|nil` | ISO 8601 timestamp of when the guardrail was last updated |
| `workspace_id` | `string` | The workspace ID this guardrail belongs to. |

#### Example: Load

```lua
local guardrail, err = client:Guardrail():load({ id = "guardrail_id" })
```

#### Example: List

```lua
local guardrails, err = client:Guardrail():list()
```

#### Example: Create

```lua
local guardrail, err = client:Guardrail():create({
  created_at = "example_created_at", -- string
  id = "example_id", -- string
  name = "example_name", -- string
  workspace_id = "example_workspace_id", -- string
})
```


### Image

Create an instance: `local image = client:Image(nil)`

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
| `data` | `table` | Generated images |
| `input_references` | `table` | Reference images to guide image-to-image generation, as base64 data URLs or HTTP(S) URLs. |
| `model` | `string` | The image generation model to use |
| `n` | `number` | Number of images to generate (1-10). |
| `output_compression` | `number` | Compression level (0-100) for webp/jpeg output. |
| `output_format` | `string` | Encoding of the returned image bytes. |
| `prompt` | `string` | Text description of the desired image |
| `provider` | `table` | Provider routing preferences and provider-specific passthrough configuration. |
| `quality` | `string` | Rendering quality. |
| `resolution` | `string` | Normalized resolution tier of the generated image. |
| `seed` | `number` | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `string` | Optional. |
| `stream` | `boolean` | If true, partial images are streamed as SSE events as they become available. |
| `usage` | `table` | Token and cost usage for the image generation request, when available |

#### Example: Create

```lua
local image, err = client:Image():create({
  created = 1, -- number
  data = {}, -- table
  model = "example_model", -- string
  prompt = "example_prompt", -- string
  usage = {}, -- table
})
```


### ImageModelEndpoint

Create an instance: `local image_model_endpoint = client:ImageModelEndpoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_passthrough_parameters` | `table` | Provider-specific options accepted under provider.options[provider_slug]. |
| `pricing` | `table` | Billable pricing lines for this endpoint. |
| `provider_name` | `string` | Provider display name |
| `provider_slug` | `string` | Provider slug |
| `provider_tag` | `string|nil` | Provider tag for request-side selection |
| `supported_parameters` | `any` |  |
| `supports_streaming` | `boolean` | Whether this endpoint supports native SSE streaming (`stream: true` in the request). |

#### Example: List

```lua
local image_model_endpoints, err = client:ImageModelEndpoint():list()
```


### ImageModelListItem

Create an instance: `local image_model_list_item = client:ImageModelListItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `table` |  |
| `created` | `number` | Unix timestamp (seconds) of when the model was created |
| `description` | `string` |  |
| `endpoints` | `string` | Relative URL to the full per-endpoint records for this model |
| `id` | `string` | Model slug |
| `name` | `string` | Display name |
| `supported_parameters` | `table` | Union of supported parameters across every endpoint of this model. |
| `supports_streaming` | `boolean` | Whether any endpoint of this model supports native SSE streaming on the dedicated Image API (i.e. |

#### Example: List

```lua
local image_model_list_items, err = client:ImageModelListItem():list()
```


### Key

Create an instance: `local key = client:Key(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_by` | `string|nil` | User ID of who made the assignment |
| `created_at` | `string` | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `string` | ID of the guardrail |
| `id` | `string` | Unique identifier for the assignment |
| `key_hash` | `string` | Hash of the assigned API key |
| `key_label` | `string` | Label of the API key |
| `key_name` | `string` | Name of the API key |

#### Example: List

```lua
local keys, err = client:Key():list()
```


### ListObservabilityDestination

Create an instance: `local list_observability_destination = client:ListObservabilityDestination(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` | List of observability destinations. |
| `total_count` | `number` | Total number of destinations matching the filters. |

#### Example: List

```lua
local list_observability_destinations, err = client:ListObservabilityDestination():list()
```


### ListPresetVersion

Create an instance: `local list_preset_version = client:ListPresetVersion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `table` |  |
| `created_at` | `string` |  |
| `creator_id` | `string` |  |
| `id` | `string` |  |
| `preset_id` | `string` |  |
| `system_prompt` | `string|nil` |  |
| `updated_at` | `string` |  |
| `version` | `number` |  |

#### Example: List

```lua
local list_preset_versions, err = client:ListPresetVersion():list()
```


### Member

Create an instance: `local member = client:Member(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_by` | `string|nil` | User ID of who made the assignment |
| `created_at` | `string` | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `string` | ID of the guardrail |
| `id` | `string` | Unique identifier for the assignment |
| `organization_id` | `string` | Organization ID |
| `user_id` | `string` | Clerk user ID of the assigned member |

#### Example: List

```lua
local members, err = client:Member():list()
```


### Message

Create an instance: `local message = client:Message(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_control` | `table` | Enable automatic prompt caching. |
| `context_management` | `table|nil` |  |
| `fallbacks` | `table|nil` | Fallback models to try if the primary model fails or refuses, in order. |
| `max_tokens` | `number` |  |
| `messages` | `table|nil` |  |
| `metadata` | `table` |  |
| `model` | `string` |  |
| `models` | `table` |  |
| `output_config` | `table` | Configuration for controlling output behavior. |
| `plugins` | `table` | Plugins you want to enable for this request, including their settings. |
| `provider` | `table|nil` | When multiple model providers are available, optionally indicate your routing preference. |
| `route` | `string|nil` | **DEPRECATED** Use providers.sort.partition instead. |
| `service_tier` | `string` |  |
| `session_id` | `string` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `speed` | `any` |  |
| `stop_sequences` | `table` |  |
| `stop_server_tools_when` | `table` | Stop conditions for the server-tool agent loop. |
| `stream` | `boolean` |  |
| `system` | `any` |  |
| `temperature` | `number` |  |
| `thinking` | `any` |  |
| `tool_choice` | `any` |  |
| `tools` | `table` |  |
| `top_k` | `number` |  |
| `top_p` | `number` |  |
| `trace` | `table` | Metadata for observability and tracing. |
| `user` | `string` | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

#### Example: Create

```lua
local message, err = client:Message():create({
  cache_control = {}, -- table
  messages = {}, -- table|nil
  model = "example_model", -- string
})
```


### Model

Create an instance: `local model = client:Model(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `table` | Model architecture information |
| `benchmarks` | `table` | Third-party benchmark rankings for this model. |
| `canonical_slug` | `string` | Canonical slug for the model |
| `context_length` | `number|nil` | Maximum context length in tokens |
| `created` | `number` | Unix timestamp of when the model was created |
| `default_parameters` | `table|nil` | Default parameters for this model |
| `description` | `string` | Description of the model |
| `expiration_date` | `string|nil` | The date after which the model may be removed. |
| `hugging_face_id` | `string|nil` | Hugging Face model identifier, if applicable |
| `id` | `string` | Unique identifier for the model |
| `knowledge_cutoff` | `string|nil` | The date up to which the model was trained on data. |
| `links` | `table` | Related API endpoints and resources for this model. |
| `name` | `string` | Display name of the model |
| `per_request_limits` | `table|nil` | Per-request token limits |
| `pricing` | `table` | Pricing information for the model |
| `reasoning` | `table` | Reasoning effort configuration. |
| `supported_parameters` | `table` | List of supported parameters for this model |
| `supported_voices` | `table|nil` | List of supported voice identifiers for TTS models. |
| `top_provider` | `table` | Information about the top provider for this model |

#### Example: Load

```lua
local model, err = client:Model():load({ author = "author", slug = "slug" })
```

#### Example: List

```lua
local models, err = client:Model():list()
```


### ModelsCount

Create an instance: `local models_count = client:ModelsCount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` | Total number of available models |

#### Example: Load

```lua
local models_count, err = client:ModelsCount():load()
```


### ModelsList

Create an instance: `local models_list = client:ModelsList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `table` | Model architecture information |
| `benchmarks` | `table` | Third-party benchmark rankings for this model. |
| `canonical_slug` | `string` | Canonical slug for the model |
| `context_length` | `number|nil` | Maximum context length in tokens |
| `created` | `number` | Unix timestamp of when the model was created |
| `default_parameters` | `table|nil` | Default parameters for this model |
| `description` | `string` | Description of the model |
| `expiration_date` | `string|nil` | The date after which the model may be removed. |
| `hugging_face_id` | `string|nil` | Hugging Face model identifier, if applicable |
| `id` | `string` | Unique identifier for the model |
| `knowledge_cutoff` | `string|nil` | The date up to which the model was trained on data. |
| `links` | `table` | Related API endpoints and resources for this model. |
| `name` | `string` | Display name of the model |
| `per_request_limits` | `table|nil` | Per-request token limits |
| `pricing` | `table` | Pricing information for the model |
| `reasoning` | `table` | Reasoning effort configuration. |
| `supported_parameters` | `table` | List of supported parameters for this model |
| `supported_voices` | `table|nil` | List of supported voice identifiers for TTS models. |
| `top_provider` | `table` | Information about the top provider for this model |

#### Example: List

```lua
local models_lists, err = client:ModelsList():list()
```


### OAuth

Create an instance: `local o_auth = client:OAuth(nil)`

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
| `code_challenge_method` | `string|nil` | The method used to generate the code challenge |
| `code_verifier` | `string` | The code verifier if code_challenge was used in the authorization request |
| `created_at` | `string` | ISO 8601 timestamp of when the auth code was created |
| `expires_at` | `string|nil` | Optional expiration time for the API key to be created |
| `id` | `string` | The authorization code ID to use in the exchange request |
| `key` | `string` | The API key to use for OpenRouter requests |
| `key_label` | `string` | Optional custom label for the API key. |
| `limit` | `number` | Credit limit for the API key to be created |
| `spawn_agent` | `string` | Agent identifier for spawn telemetry |
| `spawn_cloud` | `string` | Cloud identifier for spawn telemetry |
| `usage_limit_type` | `string` | Optional credit limit reset interval. |
| `user_id` | `string|nil` | User ID associated with the API key |
| `workspace_id` | `string` | Optional workspace ID to associate the API key with |

#### Example: Create

```lua
local o_auth, err = client:OAuth():create({
  app_id = 1, -- number
  callback_url = "example_callback_url", -- string
  code = "example_code", -- string
  created_at = "example_created_at", -- string
  id = "example_id", -- string
  key = "example_key", -- string
  user_id = "example_user_id", -- string|nil
})
```


### ObservabilityDestination

Create an instance: `local observability_destination = client:ObservabilityDestination(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `id` | `string` |  |

#### Example: Load

```lua
local observability_destination, err = client:ObservabilityDestination():load({ id = "observability_destination_id" })
```


### OpenResponsesResult

Create an instance: `local open_responses_result = client:OpenResponsesResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `background` | `boolean|nil` |  |
| `cache_control` | `table` | Enable automatic prompt caching. |
| `debug` | `table` | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `number|nil` |  |
| `image_config` | `table` | Provider-specific image configuration options. |
| `include` | `table|nil` |  |
| `input` | `any` | Input for a response request - can be a string or array of items |
| `instructions` | `string|nil` |  |
| `max_output_tokens` | `number|nil` |  |
| `max_tool_calls` | `number|nil` |  |
| `metadata` | `table|nil` | Metadata key-value pairs for the request. |
| `modalities` | `table` | Output modalities for the response. |
| `model` | `string` |  |
| `models` | `table` |  |
| `parallel_tool_calls` | `boolean|nil` |  |
| `plugins` | `table` | Plugins you want to enable for this request, including their settings. |
| `presence_penalty` | `number|nil` |  |
| `previous_response_id` | `string` | Not supported. |
| `prompt` | `table|nil` |  |
| `prompt_cache_key` | `string|nil` |  |
| `prompt_cache_options` | `table|nil` | Request-level prompt-cache controls. |
| `provider` | `table|nil` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `any` | Configuration for reasoning mode in the response |
| `route` | `string|nil` | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `string|nil` |  |
| `service_tier` | `string|nil` |  |
| `session_id` | `string` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop_server_tools_when` | `table` | Stop conditions for the server-tool agent loop. |
| `store` | `boolean` |  |
| `stream` | `boolean` |  |
| `temperature` | `number|nil` |  |
| `text` | `any` | Text output configuration including format and verbosity |
| `tool_choice` | `any` |  |
| `tools` | `table` |  |
| `top_k` | `number` |  |
| `top_logprobs` | `number|nil` |  |
| `top_p` | `number|nil` |  |
| `trace` | `table` | Metadata for observability and tracing. |
| `truncation` | `string|nil` |  |
| `user` | `string` | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

#### Example: Create

```lua
local open_responses_result, err = client:OpenResponsesResult():create({
  cache_control = {}, -- table
  prompt = {}, -- table|nil
  prompt_cache_options = {}, -- table|nil
})
```


### Organization

Create an instance: `local organization = client:Organization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```lua
local organizations, err = client:Organization():list()
```


### Preset

Create an instance: `local preset = client:Preset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `creator_user_id` | `string|nil` |  |
| `description` | `string|nil` |  |
| `designated_version` | `table|nil` | A specific version of a preset, containing config and optional system prompt. |
| `designated_version_id` | `string|nil` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `status` | `string` | The status of a preset. |
| `status_updated_at` | `string|nil` |  |
| `updated_at` | `string` |  |
| `workspace_id` | `string|nil` |  |

#### Example: Load

```lua
local preset, err = client:Preset():load({ id = "preset_id" })
```

#### Example: List

```lua
local presets, err = client:Preset():list()
```


### PresetVersion

Create an instance: `local preset_version = client:PresetVersion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `table` |  |
| `created_at` | `string` |  |
| `creator_id` | `string` |  |
| `id` | `string` |  |
| `preset_id` | `string` |  |
| `system_prompt` | `string|nil` |  |
| `updated_at` | `string` |  |
| `version` | `number` |  |

#### Example: Load

```lua
local preset_version, err = client:PresetVersion():load({ id = "preset_version_id", slug = "slug" })
```


### Provider

Create an instance: `local provider = client:Provider(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `datacenters` | `table|nil` | ISO 3166-1 Alpha-2 country codes of the provider datacenter locations |
| `headquarters` | `string|nil` | ISO 3166-1 Alpha-2 country code of the provider headquarters |
| `name` | `string` | Display name of the provider |
| `privacy_policy_url` | `string|nil` | URL to the provider's privacy policy |
| `slug` | `string` | URL-friendly identifier for the provider |
| `status_page_url` | `string|nil` | URL to the provider's status page |
| `terms_of_service_url` | `string|nil` | URL to the provider's terms of service |

#### Example: List

```lua
local providers, err = client:Provider():list()
```


### RankingsDaily

Create an instance: `local rankings_daily = client:RankingsDaily(nil)`

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

```lua
local rankings_dailys, err = client:RankingsDaily():list()
```


### Rerank

Create an instance: `local rerank = client:Rerank(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `documents` | `table` | The list of documents to rerank. |
| `id` | `string` | Unique identifier for the rerank response (ORID format) |
| `model` | `string` | The model used for reranking |
| `provider` | `string` | The provider that served the rerank request |
| `query` | `string` | The search query to rerank documents against |
| `results` | `table` | List of rerank results sorted by relevance |
| `top_n` | `number` | Number of most relevant documents to return |
| `usage` | `table` | Usage statistics |

#### Example: Create

```lua
local rerank, err = client:Rerank():create({
  documents = {}, -- table
  model = "example_model", -- string
  query = "example_query", -- string
  results = {}, -- table
})
```


### Response

Create an instance: `local response = client:Response(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `background` | `boolean|nil` |  |
| `cache_control` | `table` | Enable automatic prompt caching. |
| `debug` | `table` | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `number|nil` |  |
| `image_config` | `table` | Provider-specific image configuration options. |
| `include` | `table|nil` |  |
| `input` | `any` | Input for a response request - can be a string or array of items |
| `instructions` | `string|nil` |  |
| `max_output_tokens` | `number|nil` |  |
| `max_tool_calls` | `number|nil` |  |
| `metadata` | `table|nil` | Metadata key-value pairs for the request. |
| `modalities` | `table` | Output modalities for the response. |
| `model` | `string` |  |
| `models` | `table` |  |
| `parallel_tool_calls` | `boolean|nil` |  |
| `plugins` | `table` | Plugins you want to enable for this request, including their settings. |
| `presence_penalty` | `number|nil` |  |
| `previous_response_id` | `string` | Not supported. |
| `prompt` | `table|nil` |  |
| `prompt_cache_key` | `string|nil` |  |
| `prompt_cache_options` | `table|nil` | Request-level prompt-cache controls. |
| `provider` | `table|nil` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `any` | Configuration for reasoning mode in the response |
| `route` | `string|nil` | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `string|nil` |  |
| `service_tier` | `string|nil` |  |
| `session_id` | `string` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop_server_tools_when` | `table` | Stop conditions for the server-tool agent loop. |
| `store` | `boolean` |  |
| `stream` | `boolean` |  |
| `temperature` | `number|nil` |  |
| `text` | `any` | Text output configuration including format and verbosity |
| `tool_choice` | `any` |  |
| `tools` | `table` |  |
| `top_k` | `number` |  |
| `top_logprobs` | `number|nil` |  |
| `top_p` | `number|nil` |  |
| `trace` | `table` | Metadata for observability and tracing. |
| `truncation` | `string|nil` |  |
| `user` | `string` | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

#### Example: Create

```lua
local response, err = client:Response():create({
  slug = "example_slug", -- string
  cache_control = {}, -- table
  prompt = {}, -- table|nil
  prompt_cache_options = {}, -- table|nil
})
```


### Stt

Create an instance: `local stt = client:Stt(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `duration` | `number` | Duration of the input audio in seconds, present when response_format is verbose_json |
| `input_audio` | `table` | Base64-encoded audio to transcribe |
| `language` | `string` | Detected or forced language, present when response_format is verbose_json |
| `model` | `string` | STT model identifier |
| `provider` | `table` | Provider-specific passthrough configuration |
| `response_format` | `string` | Output format. |
| `segments` | `table` | Timestamped transcript segments, present when response_format is verbose_json |
| `task` | `string` | The task performed, present when response_format is verbose_json |
| `temperature` | `number` | Sampling temperature for transcription |
| `text` | `string` | The transcribed text |
| `timestamp_granularities` | `table` | Timestamp detail levels to include when response_format is "verbose_json". |
| `usage` | `table` | Aggregated usage statistics for the request |
| `words` | `table` | Timestamped words, present when the provider returns word-level timestamps |

#### Example: Create

```lua
local stt, err = client:Stt():create({
  input_audio = {}, -- table
  model = "example_model", -- string
  text = "example_text", -- string
})
```


### SubmitGenerationFeedback

Create an instance: `local submit_generation_feedback = client:SubmitGenerationFeedback(nil)`

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

```lua
local submit_generation_feedback, err = client:SubmitGenerationFeedback():create({
  category = "example_category", -- string
  generation_id = "example_generation_id", -- string
  success = true, -- boolean
})
```


### Task

Create an instance: `local task = client:Task(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `as_of` | `string` | UTC date (YYYY-MM-DD) of the window upper bound (yesterday). |
| `classifications` | `table` | Per-task classification market-share data, sorted by usage_share descending. |
| `macro_categories` | `table` | Aggregate market-share data per macro-category (code, data, agent, general). |
| `window_days` | `number` | Number of trailing days covered by this snapshot. |

#### Example: Load

```lua
local task, err = client:Task():load()
```


### Tts

Create an instance: `local tts = client:Tts(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `string` | Text to synthesize |
| `model` | `string` | TTS model identifier |
| `provider` | `table` | Provider-specific passthrough configuration |
| `response_format` | `string` | Audio output format |
| `speed` | `number` | Playback speed multiplier. |
| `voice` | `string` | Voice identifier (provider-specific). |

#### Example: Create

```lua
local tts, err = client:Tts():create({
  input = "example_input", -- string
  model = "example_model", -- string
  voice = "example_voice", -- string
})
```


### UnifiedBenchmark

Create an instance: `local unified_benchmark = client:UnifiedBenchmark(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `meta` | `table` |  |

#### Example: List

```lua
local unified_benchmarks, err = client:UnifiedBenchmark():list()
```


### UpdateByokKey

Create an instance: `local update_byok_key = client:UpdateByokKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_models` | `table|nil` | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `table|nil` | Optional allowlist of user IDs that may use this credential. |
| `disabled` | `boolean` | Whether this credential is disabled. |
| `id` | `string` |  |
| `is_fallback` | `boolean` | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `string` | A new raw provider API key to rotate the credential in-place. |
| `name` | `string|nil` | Optional human-readable name for the credential. |


### UpdateGuardrail

Create an instance: `local update_guardrail = client:UpdateGuardrail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_models` | `table|nil` | Array of model identifiers (slug or canonical_slug accepted) |
| `allowed_providers` | `table|nil` | New list of allowed provider IDs |
| `content_filter_builtins` | `table|nil` | Builtin content filters to apply. |
| `content_filters` | `table|nil` | Custom regex content filters to apply. |
| `description` | `string|nil` | New description for the guardrail |
| `enforce_zdr` | `boolean|nil` | Deprecated. |
| `enforce_zdr_anthropic` | `boolean|nil` | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `boolean|nil` | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `boolean|nil` | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `boolean|nil` | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `boolean|nil` | Whether to enforce zero data retention for xAI models. |
| `id` | `string` |  |
| `ignored_models` | `table|nil` | Array of model identifiers to exclude from routing (slug or canonical_slug accepted) |
| `ignored_providers` | `table|nil` | List of provider IDs to exclude from routing |
| `limit_usd` | `number|nil` | New spending limit in USD |
| `name` | `string` | New name for the guardrail |
| `reset_interval` | `string|nil` | Interval at which the limit resets (daily, weekly, monthly) |


### UpdateObservabilityDestination

Create an instance: `local update_observability_destination = client:UpdateObservabilityDestination(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hashes` | `table|nil` | Optional allowlist of OpenRouter API key hashes. |
| `config` | `table` | Provider-specific configuration fields to update. |
| `enabled` | `boolean` | Whether the destination is enabled. |
| `filter_rules` | `any` |  |
| `id` | `string` |  |
| `name` | `string` | Human-readable name for the destination. |
| `privacy_mode` | `boolean` | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `number` | Sampling rate between 0.0001 and 1 (1 = 100%). |


### UpdateWorkspace

Create an instance: `local update_workspace = client:UpdateWorkspace(nil)`

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
| `created_by` | `string|nil` | User ID of the workspace creator |
| `default_image_model` | `string|nil` | Default image model for this workspace |
| `default_provider_sort` | `string|nil` | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `string|nil` | Default text model for this workspace |
| `description` | `string|nil` | Description of the workspace |
| `id` | `string` | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `table|nil` | Optional array of API key IDs to filter I/O logging |
| `io_logging_sampling_rate` | `number` | Sampling rate for I/O logging (0.0001-1) |
| `is_data_discount_logging_enabled` | `boolean` | Whether data discount logging is enabled |
| `is_observability_broadcast_enabled` | `boolean` | Whether broadcast is enabled |
| `is_observability_io_logging_enabled` | `boolean` | Whether private logging is enabled |
| `name` | `string` | Name for the new workspace |
| `slug` | `string` | URL-friendly slug (lowercase alphanumeric segments separated by single hyphens, no leading/trailing hyphens) |
| `updated_at` | `string|nil` | ISO 8601 timestamp of when the workspace was last updated |

#### Example: List

```lua
local update_workspaces, err = client:UpdateWorkspace():list()
```

#### Example: Create

```lua
local update_workspace, err = client:UpdateWorkspace():create({
  created_at = "example_created_at", -- string
  created_by = "example_created_by", -- string|nil
  id = "example_id", -- string
  name = "example_name", -- string
  slug = "example_slug", -- string
  updated_at = "example_updated_at", -- string|nil
})
```


### UpsertWorkspaceBudget

Create an instance: `local upsert_workspace_budget = client:UpsertWorkspaceBudget(nil)`

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

Create an instance: `local video = client:Video(nil)`

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
| `frame_images` | `table` | Images to use as the first and/or last frame of the generated video. |
| `generate_audio` | `boolean` | Whether to generate audio alongside the video. |
| `generation_id` | `string` | The generation ID associated with this video generation job. |
| `id` | `string` |  |
| `input_references` | `table` | Reference assets to guide video generation. |
| `model` | `string` |  |
| `polling_url` | `string` |  |
| `prompt` | `string` | Text prompt describing the video to generate. |
| `provider` | `table` | Provider-specific passthrough configuration |
| `resolution` | `string` | Resolution of the generated video |
| `seed` | `number` | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `string` | Exact pixel dimensions of the generated video in "WIDTHxHEIGHT" format (e.g. |
| `status` | `string` |  |
| `unsigned_urls` | `table` |  |
| `usage` | `table` | Usage and cost information for the video generation. |

#### Example: Load

```lua
local video, err = client:Video():load({ id = "video_id" })
```

#### Example: Create

```lua
local video, err = client:Video():create({
  id = "example_id", -- string
  model = "example_model", -- string
  polling_url = "example_polling_url", -- string
  status = "example_status", -- string
})
```


### VideoGeneration

Create an instance: `local video_generation = client:VideoGeneration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local video_generation, err = client:VideoGeneration():load({ id = "video_generation_id" })
```


### VideoModel

Create an instance: `local video_model = client:VideoModel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_passthrough_parameters` | `table` | List of parameters that are allowed to be passed through to the provider |
| `canonical_slug` | `string` | Canonical slug for the model |
| `created` | `number` | Unix timestamp of when the model was created |
| `description` | `string` | Description of the model |
| `generate_audio` | `boolean|nil` | Whether the model supports generating audio alongside video |
| `hugging_face_id` | `string|nil` | Hugging Face model identifier, if applicable |
| `id` | `string` | Unique identifier for the model |
| `name` | `string` | Display name of the model |
| `pricing_skus` | `table|nil` | Pricing SKUs with provider prefix stripped, values as strings |
| `seed` | `boolean|nil` | Whether the model supports deterministic generation via seed parameter |
| `supported_aspect_ratios` | `table|nil` | Supported output aspect ratios |
| `supported_durations` | `table|nil` | Supported video durations in seconds |
| `supported_frame_images` | `table|nil` | Supported frame image types (e.g. |
| `supported_resolutions` | `table|nil` | Supported output resolutions |
| `supported_sizes` | `table|nil` | Supported output sizes (width x height) |

#### Example: List

```lua
local video_models, err = client:VideoModel():list()
```


### Workspace

Create an instance: `local workspace = client:Workspace(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | ISO 8601 timestamp of when the workspace was created |
| `created_by` | `string|nil` | User ID of the workspace creator |
| `default_image_model` | `string|nil` | Default image model for this workspace |
| `default_provider_sort` | `string|nil` | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `string|nil` | Default text model for this workspace |
| `description` | `string|nil` | Description of the workspace |
| `id` | `string` | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `table|nil` | Optional array of API key IDs to filter I/O logging. |
| `io_logging_sampling_rate` | `number` | Sampling rate for I/O logging (0.0001-1). |
| `is_data_discount_logging_enabled` | `boolean` | Whether data discount logging is enabled for this workspace |
| `is_observability_broadcast_enabled` | `boolean` | Whether broadcast is enabled for this workspace |
| `is_observability_io_logging_enabled` | `boolean` | Whether private logging is enabled for this workspace |
| `name` | `string` | Name of the workspace |
| `slug` | `string` | URL-friendly slug for the workspace |
| `updated_at` | `string|nil` | ISO 8601 timestamp of when the workspace was last updated |

#### Example: Load

```lua
local workspace, err = client:Workspace():load({ id = "workspace_id" })
```


### WorkspaceBudget

Create an instance: `local workspace_budget = client:WorkspaceBudget(nil)`

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
| `reset_interval` | `string|nil` | Interval at which spend resets. |
| `updated_at` | `string` | ISO 8601 timestamp of when the budget was last updated |
| `workspace_id` | `string` | ID of the workspace the budget belongs to |

#### Example: List

```lua
local workspace_budgets, err = client:WorkspaceBudget():list()
```


### WorkspaceMember

Create an instance: `local workspace_member = client:WorkspaceMember(nil)`

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

```lua
local workspace_members, err = client:WorkspaceMember():list()
```

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Client-side rate limiting via a token bucket.

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

Automatic retry of transient failures with exponential backoff.

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

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── openrouter-models_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`openrouter-models_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local provider = client:Provider()
provider:list()

-- provider:data_get() now returns the provider data from the last list
-- provider:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
