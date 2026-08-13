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
  print(item["date"])
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
local organizations, err = client:Organization():list()
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

local result, err = client:Organization():list()
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
| `Add` | `(data) -> AddEntity` | Create an Add entity instance. |
| `ApiKey` | `(data) -> ApiKeyEntity` | Create an ApiKey entity instance. |
| `AppRanking` | `(data) -> AppRankingEntity` | Create an AppRanking entity instance. |
| `Benchmark` | `(data) -> BenchmarkEntity` | Create a Benchmark entity instance. |
| `BetaAnalytics` | `(data) -> BetaAnalyticsEntity` | Create a BetaAnalytics entity instance. |
| `Budget` | `(data) -> BudgetEntity` | Create a Budget entity instance. |
| `BulkAddWorkspaceMember` | `(data) -> BulkAddWorkspaceMemberEntity` | Create a BulkAddWorkspaceMember entity instance. |
| `BulkAssignKey` | `(data) -> BulkAssignKeyEntity` | Create a BulkAssignKey entity instance. |
| `BulkAssignMember` | `(data) -> BulkAssignMemberEntity` | Create a BulkAssignMember entity instance. |
| `BulkRemoveWorkspaceMember` | `(data) -> BulkRemoveWorkspaceMemberEntity` | Create a BulkRemoveWorkspaceMember entity instance. |
| `BulkUnassignKey` | `(data) -> BulkUnassignKeyEntity` | Create a BulkUnassignKey entity instance. |
| `BulkUnassignMember` | `(data) -> BulkUnassignMemberEntity` | Create a BulkUnassignMember entity instance. |
| `Byok` | `(data) -> ByokEntity` | Create a Byok entity instance. |
| `ChatResult` | `(data) -> ChatResultEntity` | Create a ChatResult entity instance. |
| `Code` | `(data) -> CodeEntity` | Create a Code entity instance. |
| `Coinbase` | `(data) -> CoinbaseEntity` | Create a Coinbase entity instance. |
| `Completion` | `(data) -> CompletionEntity` | Create a Completion entity instance. |
| `Content` | `(data) -> ContentEntity` | Create a Content entity instance. |
| `Count` | `(data) -> CountEntity` | Create a Count entity instance. |
| `CreateByokKey` | `(data) -> CreateByokKeyEntity` | Create a CreateByokKey entity instance. |
| `CreateGuardrail` | `(data) -> CreateGuardrailEntity` | Create a CreateGuardrail entity instance. |
| `CreateObservabilityDestination` | `(data) -> CreateObservabilityDestinationEntity` | Create a CreateObservabilityDestination entity instance. |
| `CreatePresetFromInference` | `(data) -> CreatePresetFromInferenceEntity` | Create a CreatePresetFromInference entity instance. |
| `CreateWorkspace` | `(data) -> CreateWorkspaceEntity` | Create a CreateWorkspace entity instance. |
| `Credit` | `(data) -> CreditEntity` | Create a Credit entity instance. |
| `Destination` | `(data) -> DestinationEntity` | Create a Destination entity instance. |
| `Embedding` | `(data) -> EmbeddingEntity` | Create an Embedding entity instance. |
| `Endpoint` | `(data) -> EndpointEntity` | Create an Endpoint entity instance. |
| `Feedback` | `(data) -> FeedbackEntity` | Create a Feedback entity instance. |
| `File` | `(data) -> FileEntity` | Create a File entity instance. |
| `Generation` | `(data) -> GenerationEntity` | Create a Generation entity instance. |
| `GenerationContent` | `(data) -> GenerationContentEntity` | Create a GenerationContent entity instance. |
| `Guardrail` | `(data) -> GuardrailEntity` | Create a Guardrail entity instance. |
| `Image` | `(data) -> ImageEntity` | Create an Image entity instance. |
| `ImageModelEndpoint` | `(data) -> ImageModelEndpointEntity` | Create an ImageModelEndpoint entity instance. |
| `ImageModelsList` | `(data) -> ImageModelsListEntity` | Create an ImageModelsList entity instance. |
| `Key` | `(data) -> KeyEntity` | Create a Key entity instance. |
| `ListByokKey` | `(data) -> ListByokKeyEntity` | Create a ListByokKey entity instance. |
| `ListGuardrail` | `(data) -> ListGuardrailEntity` | Create a ListGuardrail entity instance. |
| `ListKeyAssignment` | `(data) -> ListKeyAssignmentEntity` | Create a ListKeyAssignment entity instance. |
| `ListMemberAssignment` | `(data) -> ListMemberAssignmentEntity` | Create a ListMemberAssignment entity instance. |
| `ListObservabilityDestination` | `(data) -> ListObservabilityDestinationEntity` | Create a ListObservabilityDestination entity instance. |
| `ListPreset` | `(data) -> ListPresetEntity` | Create a ListPreset entity instance. |
| `ListPresetVersion` | `(data) -> ListPresetVersionEntity` | Create a ListPresetVersion entity instance. |
| `ListWorkspace` | `(data) -> ListWorkspaceEntity` | Create a ListWorkspace entity instance. |
| `ListWorkspaceBudget` | `(data) -> ListWorkspaceBudgetEntity` | Create a ListWorkspaceBudget entity instance. |
| `ListWorkspaceMember` | `(data) -> ListWorkspaceMemberEntity` | Create a ListWorkspaceMember entity instance. |
| `Member` | `(data) -> MemberEntity` | Create a Member entity instance. |
| `Message` | `(data) -> MessageEntity` | Create a Message entity instance. |
| `Meta` | `(data) -> MetaEntity` | Create a Meta entity instance. |
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
| `Query` | `(data) -> QueryEntity` | Create a Query entity instance. |
| `RankingsDaily` | `(data) -> RankingsDailyEntity` | Create a RankingsDaily entity instance. |
| `Remove` | `(data) -> RemoveEntity` | Create a Remove entity instance. |
| `Rerank` | `(data) -> RerankEntity` | Create a Rerank entity instance. |
| `Response` | `(data) -> ResponseEntity` | Create a Response entity instance. |
| `Speech` | `(data) -> SpeechEntity` | Create a Speech entity instance. |
| `Stt` | `(data) -> SttEntity` | Create a Stt entity instance. |
| `SubmitGenerationFeedback` | `(data) -> SubmitGenerationFeedbackEntity` | Create a SubmitGenerationFeedback entity instance. |
| `Task` | `(data) -> TaskEntity` | Create a Task entity instance. |
| `Transcription` | `(data) -> TranscriptionEntity` | Create a Transcription entity instance. |
| `Tts` | `(data) -> TtsEntity` | Create a Tts entity instance. |
| `UnifiedBenchmark` | `(data) -> UnifiedBenchmarkEntity` | Create an UnifiedBenchmark entity instance. |
| `UpdateByokKey` | `(data) -> UpdateByokKeyEntity` | Create an UpdateByokKey entity instance. |
| `UpdateGuardrail` | `(data) -> UpdateGuardrailEntity` | Create an UpdateGuardrail entity instance. |
| `UpdateObservabilityDestination` | `(data) -> UpdateObservabilityDestinationEntity` | Create an UpdateObservabilityDestination entity instance. |
| `UpdateWorkspace` | `(data) -> UpdateWorkspaceEntity` | Create an UpdateWorkspace entity instance. |
| `UpsertWorkspaceBudget` | `(data) -> UpsertWorkspaceBudgetEntity` | Create an UpsertWorkspaceBudget entity instance. |
| `User` | `(data) -> UserEntity` | Create an User entity instance. |
| `Version` | `(data) -> VersionEntity` | Create a Version entity instance. |
| `Video` | `(data) -> VideoEntity` | Create a Video entity instance. |
| `VideoGeneration` | `(data) -> VideoGenerationEntity` | Create a VideoGeneration entity instance. |
| `VideoModelsList` | `(data) -> VideoModelsListEntity` | Create a VideoModelsList entity instance. |
| `Workspace` | `(data) -> WorkspaceEntity` | Create a Workspace entity instance. |
| `WorkspaceBudget` | `(data) -> WorkspaceBudgetEntity` | Create a WorkspaceBudget entity instance. |
| `Zdr` | `(data) -> ZdrEntity` | Create a Zdr entity instance. |

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
| `byok_usage_inference` |  |
| `completion_tokens` |  |
| `date` |  |
| `endpoint_id` |  |
| `model` |  |
| `model_permaslug` |  |
| `prompt_tokens` |  |
| `provider_name` |  |
| `reasoning_tokens` |  |
| `requests` |  |
| `usage` |  |

Operations: List.

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
| `disabled` |  |
| `expires_at` |  |
| `hash` |  |
| `include_byok_in_limit` |  |
| `is_free_tier` |  |
| `is_management_key` |  |
| `is_provisioning_key` |  |
| `label` |  |
| `limit` |  |
| `limit_remaining` |  |
| `limit_reset` |  |
| `name` |  |
| `rate_limit` |  |
| `updated_at` |  |
| `usage` |  |
| `usage_daily` |  |
| `usage_monthly` |  |
| `usage_weekly` |  |
| `workspace_id` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/keys`

#### AppRanking

| Field | Description |
| --- | --- |
| `app_id` |  |
| `app_name` |  |
| `rank` |  |
| `total_requests` |  |
| `total_tokens` |  |

Operations: List.

API path: `/datasets/app-rankings`

#### Benchmark

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### BetaAnalytics

| Field | Description |
| --- | --- |
| `cachedAt` |  |
| `classifier_dimensions` |  |
| `classifier_filters` |  |
| `data` |  |
| `dimensions` |  |
| `filters` |  |
| `granularities` |  |
| `granularity` |  |
| `group_limit` |  |
| `limit` |  |
| `metadata` |  |
| `metrics` |  |
| `operators` |  |
| `order_by` |  |
| `time_range` |  |
| `warnings` |  |

Operations: Create, Load.

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
| `user_ids` |  |

Operations: Create.

API path: `/workspaces/{id}/members/add`

#### BulkAssignKey

| Field | Description |
| --- | --- |
| `assigned_count` |  |
| `key_hashes` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/keys`

#### BulkAssignMember

| Field | Description |
| --- | --- |
| `assigned_count` |  |
| `member_user_ids` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/members`

#### BulkRemoveWorkspaceMember

| Field | Description |
| --- | --- |
| `removed_count` |  |
| `user_ids` |  |

Operations: Create.

API path: `/workspaces/{id}/members/remove`

#### BulkUnassignKey

| Field | Description |
| --- | --- |
| `key_hashes` |  |
| `unassigned_count` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/keys/remove`

#### BulkUnassignMember

| Field | Description |
| --- | --- |
| `member_user_ids` |  |
| `unassigned_count` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/members/remove`

#### Byok

| Field | Description |
| --- | --- |
| `allowed_api_key_hashes` |  |
| `allowed_models` |  |
| `allowed_user_ids` |  |
| `created_at` |  |
| `disabled` |  |
| `id` |  |
| `is_fallback` |  |
| `key` |  |
| `label` |  |
| `name` |  |
| `provider` |  |
| `sort_order` |  |
| `workspace_id` |  |

Operations: Create, List, Load, Remove.

API path: `/byok`

#### ChatResult

| Field | Description |
| --- | --- |
| `cache_control` |  |
| `choices` |  |
| `created` |  |
| `debug` |  |
| `frequency_penalty` |  |
| `id` |  |
| `image_config` |  |
| `logit_bias` |  |
| `logprobs` |  |
| `max_completion_tokens` |  |
| `max_tokens` |  |
| `messages` |  |
| `metadata` |  |
| `min_p` |  |
| `modalities` |  |
| `model` |  |
| `models` |  |
| `object` |  |
| `openrouter_metadata` |  |
| `parallel_tool_calls` |  |
| `plugins` |  |
| `prediction` |  |
| `presence_penalty` |  |
| `prompt_cache_key` |  |
| `prompt_cache_options` |  |
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
| `stream_options` |  |
| `system_fingerprint` |  |
| `temperature` |  |
| `tool_choice` |  |
| `tools` |  |
| `top_a` |  |
| `top_k` |  |
| `top_logprobs` |  |
| `top_p` |  |
| `trace` |  |
| `usage` |  |
| `user` |  |

Operations: Create.

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
| `api_key_hashes` |  |
| `config` |  |
| `enabled` |  |
| `filter_rules` |  |
| `name` |  |
| `privacy_mode` |  |
| `sampling_rate` |  |
| `type` |  |
| `workspace_id` |  |

Operations: Create.

API path: `/observability/destinations`

#### CreatePresetFromInference

| Field | Description |
| --- | --- |
| `background` |  |
| `cache_control` |  |
| `context_management` |  |
| `debug` |  |
| `fallbacks` |  |
| `frequency_penalty` |  |
| `image_config` |  |
| `include` |  |
| `input` |  |
| `instructions` |  |
| `logit_bias` |  |
| `logprobs` |  |
| `max_completion_tokens` |  |
| `max_output_tokens` |  |
| `max_tokens` |  |
| `max_tool_calls` |  |
| `messages` |  |
| `metadata` |  |
| `min_p` |  |
| `modalities` |  |
| `model` |  |
| `models` |  |
| `output_config` |  |
| `parallel_tool_calls` |  |
| `plugins` |  |
| `prediction` |  |
| `presence_penalty` |  |
| `previous_response_id` |  |
| `prompt` |  |
| `prompt_cache_key` |  |
| `prompt_cache_options` |  |
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
| `stop_sequences` |  |
| `stop_server_tools_when` |  |
| `store` |  |
| `stream` |  |
| `stream_options` |  |
| `system` |  |
| `temperature` |  |
| `text` |  |
| `thinking` |  |
| `tool_choice` |  |
| `tools` |  |
| `top_a` |  |
| `top_k` |  |
| `top_logprobs` |  |
| `top_p` |  |
| `trace` |  |
| `truncation` |  |
| `user` |  |

Operations: Create.

API path: `/presets/{slug}/chat/completions`

#### CreateWorkspace

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Credit

| Field | Description |
| --- | --- |
| `total_credits` |  |
| `total_usage` |  |

Operations: Create, Load.

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
| `dimensions` |  |
| `encoding_format` |  |
| `id` |  |
| `input` |  |
| `input_type` |  |
| `model` |  |
| `object` |  |
| `provider` |  |
| `usage` |  |
| `user` |  |

Operations: Create.

API path: `/embeddings`

#### Endpoint

| Field | Description |
| --- | --- |
| `architecture` |  |
| `benchmarks` |  |
| `canonical_slug` |  |
| `context_length` |  |
| `created` |  |
| `default_parameters` |  |
| `description` |  |
| `endpoints` |  |
| `expiration_date` |  |
| `hugging_face_id` |  |
| `id` |  |
| `knowledge_cutoff` |  |
| `latency_last_30m` |  |
| `links` |  |
| `max_completion_tokens` |  |
| `max_prompt_tokens` |  |
| `model_id` |  |
| `model_name` |  |
| `name` |  |
| `per_request_limits` |  |
| `pricing` |  |
| `provider_name` |  |
| `quantization` |  |
| `reasoning` |  |
| `status` |  |
| `supported_parameters` |  |
| `supported_voices` |  |
| `supports_implicit_caching` |  |
| `tag` |  |
| `throughput_last_30m` |  |
| `top_provider` |  |
| `uptime_last_1d` |  |
| `uptime_last_30m` |  |
| `uptime_last_5m` |  |

Operations: List, Load.

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
| `size_bytes` |  |
| `type` |  |

Operations: Create, List, Load, Remove.

API path: `/files`

#### Generation

| Field | Description |
| --- | --- |
| `api_type` |  |
| `app_id` |  |
| `cache_discount` |  |
| `cancelled` |  |
| `created_at` |  |
| `data_region` |  |
| `external_user` |  |
| `finish_reason` |  |
| `generation_time` |  |
| `http_referer` |  |
| `id` |  |
| `is_byok` |  |
| `latency` |  |
| `model` |  |
| `moderation_latency` |  |
| `native_finish_reason` |  |
| `native_tokens_cached` |  |
| `native_tokens_completion` |  |
| `native_tokens_completion_images` |  |
| `native_tokens_prompt` |  |
| `native_tokens_reasoning` |  |
| `num_fetches` |  |
| `num_input_audio_prompt` |  |
| `num_media_completion` |  |
| `num_media_prompt` |  |
| `num_search_results` |  |
| `origin` |  |
| `preset_id` |  |
| `provider_name` |  |
| `provider_responses` |  |
| `request_id` |  |
| `response_cache_source_id` |  |
| `router` |  |
| `service_tier` |  |
| `session_id` |  |
| `streamed` |  |
| `tokens_completion` |  |
| `tokens_prompt` |  |
| `total_cost` |  |
| `upstream_id` |  |
| `upstream_inference_cost` |  |
| `usage` |  |
| `user_agent` |  |
| `web_search_engine` |  |

Operations: Load.

API path: `/generation`

#### GenerationContent

| Field | Description |
| --- | --- |
| `input` |  |
| `output` |  |

Operations: Load.

API path: `/generation/content`

#### Guardrail

| Field | Description |
| --- | --- |
| `allowed_models` |  |
| `allowed_providers` |  |
| `content_filter_builtins` |  |
| `content_filters` |  |
| `created_at` |  |
| `description` |  |
| `enforce_zdr` |  |
| `enforce_zdr_anthropic` |  |
| `enforce_zdr_google` |  |
| `enforce_zdr_openai` |  |
| `enforce_zdr_other` |  |
| `enforce_zdr_xai` |  |
| `id` |  |
| `ignored_models` |  |
| `ignored_providers` |  |
| `limit_usd` |  |
| `name` |  |
| `reset_interval` |  |
| `updated_at` |  |
| `workspace_id` |  |

Operations: Create, List, Load, Remove.

API path: `/guardrails`

#### Image

| Field | Description |
| --- | --- |
| `aspect_ratio` |  |
| `background` |  |
| `created` |  |
| `data` |  |
| `input_references` |  |
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

Operations: Create.

API path: `/images`

#### ImageModelEndpoint

| Field | Description |
| --- | --- |
| `allowed_passthrough_parameters` |  |
| `pricing` |  |
| `provider_name` |  |
| `provider_slug` |  |
| `provider_tag` |  |
| `supported_parameters` |  |
| `supports_streaming` |  |

Operations: List.

API path: `/images/models/{author}/{slug}/endpoints`

#### ImageModelsList

| Field | Description |
| --- | --- |
| `architecture` |  |
| `created` |  |
| `description` |  |
| `endpoints` |  |
| `id` |  |
| `name` |  |
| `supported_parameters` |  |
| `supports_streaming` |  |

Operations: List.

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

Operations: List.

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

Operations: List.

API path: `/guardrails/{id}/assignments/members`

#### ListObservabilityDestination

| Field | Description |
| --- | --- |
| `data` |  |
| `total_count` |  |

Operations: List.

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

Operations: List.

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

Operations: List.

API path: `/workspaces/{id}/budgets`

#### ListWorkspaceMember

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `role` |  |
| `user_id` |  |
| `workspace_id` |  |

Operations: List.

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
| `fallbacks` |  |
| `max_tokens` |  |
| `messages` |  |
| `metadata` |  |
| `model` |  |
| `models` |  |
| `output_config` |  |
| `plugins` |  |
| `provider` |  |
| `route` |  |
| `service_tier` |  |
| `session_id` |  |
| `speed` |  |
| `stop_sequences` |  |
| `stop_server_tools_when` |  |
| `stream` |  |
| `system` |  |
| `temperature` |  |
| `thinking` |  |
| `tool_choice` |  |
| `tools` |  |
| `top_k` |  |
| `top_p` |  |
| `trace` |  |
| `user` |  |

Operations: Create.

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
| `benchmarks` |  |
| `canonical_slug` |  |
| `context_length` |  |
| `created` |  |
| `default_parameters` |  |
| `description` |  |
| `expiration_date` |  |
| `hugging_face_id` |  |
| `id` |  |
| `knowledge_cutoff` |  |
| `links` |  |
| `name` |  |
| `per_request_limits` |  |
| `pricing` |  |
| `reasoning` |  |
| `supported_parameters` |  |
| `supported_voices` |  |
| `top_provider` |  |

Operations: List, Load.

API path: `/embeddings/models`

#### ModelsCount

| Field | Description |
| --- | --- |
| `count` |  |

Operations: Load.

API path: `/models/count`

#### ModelsList

| Field | Description |
| --- | --- |
| `architecture` |  |
| `benchmarks` |  |
| `canonical_slug` |  |
| `context_length` |  |
| `created` |  |
| `default_parameters` |  |
| `description` |  |
| `expiration_date` |  |
| `hugging_face_id` |  |
| `id` |  |
| `knowledge_cutoff` |  |
| `links` |  |
| `name` |  |
| `per_request_limits` |  |
| `pricing` |  |
| `reasoning` |  |
| `supported_parameters` |  |
| `supported_voices` |  |
| `top_provider` |  |

Operations: List.

API path: `/models/user`

#### OAuth

| Field | Description |
| --- | --- |
| `app_id` |  |
| `callback_url` |  |
| `code` |  |
| `code_challenge` |  |
| `code_challenge_method` |  |
| `code_verifier` |  |
| `created_at` |  |
| `expires_at` |  |
| `id` |  |
| `key` |  |
| `key_label` |  |
| `limit` |  |
| `spawn_agent` |  |
| `spawn_cloud` |  |
| `usage_limit_type` |  |
| `user_id` |  |
| `workspace_id` |  |

Operations: Create.

API path: `/auth/keys`

#### ObservabilityDestination

| Field | Description |
| --- | --- |
| `data` |  |

Operations: Load, Remove.

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
| `instructions` |  |
| `max_output_tokens` |  |
| `max_tool_calls` |  |
| `metadata` |  |
| `modalities` |  |
| `model` |  |
| `models` |  |
| `parallel_tool_calls` |  |
| `plugins` |  |
| `presence_penalty` |  |
| `previous_response_id` |  |
| `prompt` |  |
| `prompt_cache_key` |  |
| `prompt_cache_options` |  |
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
| `tool_choice` |  |
| `tools` |  |
| `top_k` |  |
| `top_logprobs` |  |
| `top_p` |  |
| `trace` |  |
| `truncation` |  |
| `user` |  |

Operations: Create.

API path: `/responses`

#### Organization

| Field | Description |
| --- | --- |
| `email` |  |
| `first_name` |  |
| `id` |  |
| `last_name` |  |
| `role` |  |

Operations: List.

API path: `/organization/members`

#### Preset

| Field | Description |
| --- | --- |
| `created_at` |  |
| `creator_user_id` |  |
| `description` |  |
| `designated_version` |  |
| `designated_version_id` |  |
| `id` |  |
| `name` |  |
| `slug` |  |
| `status` |  |
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
| `datacenters` |  |
| `headquarters` |  |
| `name` |  |
| `privacy_policy_url` |  |
| `slug` |  |
| `status_page_url` |  |
| `terms_of_service_url` |  |

Operations: List.

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
| `total_tokens` |  |

Operations: List.

API path: `/datasets/rankings-daily`

#### Remove

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Rerank

| Field | Description |
| --- | --- |
| `documents` |  |
| `id` |  |
| `model` |  |
| `provider` |  |
| `query` |  |
| `results` |  |
| `top_n` |  |
| `usage` |  |

Operations: Create.

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
| `segments` |  |
| `task` |  |
| `temperature` |  |
| `text` |  |
| `timestamp_granularities` |  |
| `usage` |  |
| `words` |  |

Operations: Create.

API path: `/audio/transcriptions`

#### SubmitGenerationFeedback

| Field | Description |
| --- | --- |
| `category` |  |
| `comment` |  |
| `generation_id` |  |
| `success` |  |

Operations: Create.

API path: `/generation/feedback`

#### Task

| Field | Description |
| --- | --- |
| `as_of` |  |
| `classifications` |  |
| `macro_categories` |  |
| `window_days` |  |

Operations: Load.

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
| `allowed_models` |  |
| `allowed_user_ids` |  |
| `disabled` |  |
| `is_fallback` |  |
| `key` |  |
| `name` |  |

Operations: Update.

API path: `/byok/{id}`

#### UpdateGuardrail

| Field | Description |
| --- | --- |
| `allowed_models` |  |
| `allowed_providers` |  |
| `content_filter_builtins` |  |
| `content_filters` |  |
| `description` |  |
| `enforce_zdr` |  |
| `enforce_zdr_anthropic` |  |
| `enforce_zdr_google` |  |
| `enforce_zdr_openai` |  |
| `enforce_zdr_other` |  |
| `enforce_zdr_xai` |  |
| `ignored_models` |  |
| `ignored_providers` |  |
| `limit_usd` |  |
| `name` |  |
| `reset_interval` |  |

Operations: Update.

API path: `/guardrails/{id}`

#### UpdateObservabilityDestination

| Field | Description |
| --- | --- |
| `api_key_hashes` |  |
| `config` |  |
| `enabled` |  |
| `filter_rules` |  |
| `name` |  |
| `privacy_mode` |  |
| `sampling_rate` |  |

Operations: Update.

API path: `/observability/destinations/{id}`

#### UpdateWorkspace

| Field | Description |
| --- | --- |
| `created_at` |  |
| `created_by` |  |
| `default_image_model` |  |
| `default_provider_sort` |  |
| `default_text_model` |  |
| `description` |  |
| `id` |  |
| `io_logging_api_key_ids` |  |
| `io_logging_sampling_rate` |  |
| `is_data_discount_logging_enabled` |  |
| `is_observability_broadcast_enabled` |  |
| `is_observability_io_logging_enabled` |  |
| `name` |  |
| `slug` |  |
| `updated_at` |  |

Operations: Create, List, Update.

API path: `/workspaces`

#### UpsertWorkspaceBudget

| Field | Description |
| --- | --- |
| `limit_usd` |  |

Operations: Update.

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
| `frame_images` |  |
| `generate_audio` |  |
| `generation_id` |  |
| `id` |  |
| `input_references` |  |
| `model` |  |
| `polling_url` |  |
| `prompt` |  |
| `provider` |  |
| `resolution` |  |
| `seed` |  |
| `size` |  |
| `status` |  |
| `unsigned_urls` |  |
| `usage` |  |

Operations: Create, Load.

API path: `/videos`

#### VideoGeneration

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/videos/{jobId}/content`

#### VideoModelsList

| Field | Description |
| --- | --- |
| `allowed_passthrough_parameters` |  |
| `canonical_slug` |  |
| `created` |  |
| `description` |  |
| `generate_audio` |  |
| `hugging_face_id` |  |
| `id` |  |
| `name` |  |
| `pricing_skus` |  |
| `seed` |  |
| `supported_aspect_ratios` |  |
| `supported_durations` |  |
| `supported_frame_images` |  |
| `supported_resolutions` |  |
| `supported_sizes` |  |

Operations: List.

API path: `/videos/models`

#### Workspace

| Field | Description |
| --- | --- |
| `created_at` |  |
| `created_by` |  |
| `default_image_model` |  |
| `default_provider_sort` |  |
| `default_text_model` |  |
| `description` |  |
| `id` |  |
| `io_logging_api_key_ids` |  |
| `io_logging_sampling_rate` |  |
| `is_data_discount_logging_enabled` |  |
| `is_observability_broadcast_enabled` |  |
| `is_observability_io_logging_enabled` |  |
| `name` |  |
| `slug` |  |
| `updated_at` |  |

Operations: Load, Remove.

API path: `/workspaces/{id}`

#### WorkspaceBudget

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/workspaces/{id}/budgets/{interval}`

#### Zdr

| Field | Description |
| --- | --- |

Operations: .

API path: ``



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
| `byok_usage_inference` | `number` |  |
| `completion_tokens` | `number` |  |
| `date` | `string` |  |
| `endpoint_id` | `string` |  |
| `model` | `string` |  |
| `model_permaslug` | `string` |  |
| `prompt_tokens` | `number` |  |
| `provider_name` | `string` |  |
| `reasoning_tokens` | `number` |  |
| `requests` | `number` |  |
| `usage` | `number` |  |

#### Example: List

```lua
local activitys, err = client:Activity():list()
```


### Add

Create an instance: `local add = client:Add(nil)`


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
| `byok_usage` | `number` |  |
| `byok_usage_daily` | `number` |  |
| `byok_usage_monthly` | `number` |  |
| `byok_usage_weekly` | `number` |  |
| `created_at` | `string` |  |
| `creator_user_id` | `string|nil` |  |
| `disabled` | `boolean` |  |
| `expires_at` | `string|nil` |  |
| `hash` | `string` |  |
| `include_byok_in_limit` | `boolean` |  |
| `is_free_tier` | `boolean` |  |
| `is_management_key` | `boolean` |  |
| `is_provisioning_key` | `boolean` |  |
| `label` | `string` |  |
| `limit` | `number|nil` |  |
| `limit_remaining` | `number|nil` |  |
| `limit_reset` | `string|nil` |  |
| `name` | `string` |  |
| `rate_limit` | `table` |  |
| `updated_at` | `string|nil` |  |
| `usage` | `number` |  |
| `usage_daily` | `number` |  |
| `usage_monthly` | `number` |  |
| `usage_weekly` | `number` |  |
| `workspace_id` | `string` |  |

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
  limit = "example_limit", -- number|nil
  limit_remaining = "example_limit_remaining", -- number|nil
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
| `app_id` | `number` |  |
| `app_name` | `string` |  |
| `rank` | `number` |  |
| `total_requests` | `number` |  |
| `total_tokens` | `string` |  |

#### Example: List

```lua
local app_rankings, err = client:AppRanking():list()
```


### Benchmark

Create an instance: `local benchmark = client:Benchmark(nil)`


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
| `classifier_dimensions` | `table` |  |
| `classifier_filters` | `table` |  |
| `data` | `table` |  |
| `dimensions` | `table` |  |
| `filters` | `table` |  |
| `granularities` | `table` |  |
| `granularity` | `string` |  |
| `group_limit` | `number` |  |
| `limit` | `number` |  |
| `metadata` | `table` |  |
| `metrics` | `table` |  |
| `operators` | `table` |  |
| `order_by` | `table` |  |
| `time_range` | `table` |  |
| `warnings` | `table` |  |

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


### Budget

Create an instance: `local budget = client:Budget(nil)`


### BulkAddWorkspaceMember

Create an instance: `local bulk_add_workspace_member = client:BulkAddWorkspaceMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `added_count` | `number` |  |
| `data` | `table` |  |
| `user_ids` | `table` |  |

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
| `assigned_count` | `number` |  |
| `key_hashes` | `table` |  |

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
| `assigned_count` | `number` |  |
| `member_user_ids` | `table` |  |

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
| `removed_count` | `number` |  |
| `user_ids` | `table` |  |

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
| `key_hashes` | `table` |  |
| `unassigned_count` | `number` |  |

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
| `member_user_ids` | `table` |  |
| `unassigned_count` | `number` |  |

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
| `allowed_api_key_hashes` | `table|nil` |  |
| `allowed_models` | `table|nil` |  |
| `allowed_user_ids` | `table|nil` |  |
| `created_at` | `string` |  |
| `disabled` | `boolean` |  |
| `id` | `string` |  |
| `is_fallback` | `boolean` |  |
| `key` | `string` |  |
| `label` | `string` |  |
| `name` | `string|nil` |  |
| `provider` | `string` |  |
| `sort_order` | `number` |  |
| `workspace_id` | `string` |  |

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
  allowed_api_key_hashes = "example_allowed_api_key_hashes", -- table|nil
  allowed_models = "example_allowed_models", -- table|nil
  allowed_user_ids = "example_allowed_user_ids", -- table|nil
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
| `cache_control` | `table` |  |
| `choices` | `table` |  |
| `created` | `number` |  |
| `debug` | `table` |  |
| `frequency_penalty` | `number|nil` |  |
| `id` | `string` |  |
| `image_config` | `table` |  |
| `logit_bias` | `table|nil` |  |
| `logprobs` | `boolean|nil` |  |
| `max_completion_tokens` | `number|nil` |  |
| `max_tokens` | `number|nil` |  |
| `messages` | `table` |  |
| `metadata` | `table` |  |
| `min_p` | `number|nil` |  |
| `modalities` | `table` |  |
| `model` | `string` |  |
| `models` | `table` |  |
| `object` | `string` |  |
| `openrouter_metadata` | `table` |  |
| `parallel_tool_calls` | `boolean|nil` |  |
| `plugins` | `table` |  |
| `prediction` | `table|nil` |  |
| `presence_penalty` | `number|nil` |  |
| `prompt_cache_key` | `string|nil` |  |
| `prompt_cache_options` | `table|nil` |  |
| `provider` | `table|nil` |  |
| `reasoning` | `table` |  |
| `reasoning_effort` | `string|nil` |  |
| `repetition_penalty` | `number|nil` |  |
| `response_format` | `any` |  |
| `route` | `string|nil` |  |
| `seed` | `number|nil` |  |
| `service_tier` | `string|nil` |  |
| `session_id` | `string` |  |
| `stop` | `any` |  |
| `stop_server_tools_when` | `table` |  |
| `stream` | `boolean` |  |
| `stream_options` | `table|nil` |  |
| `system_fingerprint` | `string|nil` |  |
| `temperature` | `number|nil` |  |
| `tool_choice` | `any` |  |
| `tools` | `table` |  |
| `top_a` | `number|nil` |  |
| `top_k` | `number|nil` |  |
| `top_logprobs` | `number|nil` |  |
| `top_p` | `number|nil` |  |
| `trace` | `table` |  |
| `usage` | `table` |  |
| `user` | `string` |  |

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
  prediction = "example_prediction", -- table|nil
  prompt_cache_options = "example_prompt_cache_options", -- table|nil
  system_fingerprint = "example_system_fingerprint", -- string|nil
  usage = {}, -- table
})
```


### Code

Create an instance: `local code = client:Code(nil)`


### Coinbase

Create an instance: `local coinbase = client:Coinbase(nil)`


### Completion

Create an instance: `local completion = client:Completion(nil)`


### Content

Create an instance: `local content = client:Content(nil)`


### Count

Create an instance: `local count = client:Count(nil)`


### CreateByokKey

Create an instance: `local create_byok_key = client:CreateByokKey(nil)`


### CreateGuardrail

Create an instance: `local create_guardrail = client:CreateGuardrail(nil)`


### CreateObservabilityDestination

Create an instance: `local create_observability_destination = client:CreateObservabilityDestination(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hashes` | `table|nil` |  |
| `config` | `table` |  |
| `enabled` | `boolean` |  |
| `filter_rules` | `table|nil` |  |
| `name` | `string` |  |
| `privacy_mode` | `boolean` |  |
| `sampling_rate` | `number` |  |
| `type` | `string` |  |
| `workspace_id` | `string` |  |

#### Example: Create

```lua
local create_observability_destination, err = client:CreateObservabilityDestination():create({
  config = {}, -- table
  filter_rules = "example_filter_rules", -- table|nil
  name = "example_name", -- string
  type = "example_type", -- string
})
```


### CreatePresetFromInference

Create an instance: `local create_preset_from_inference = client:CreatePresetFromInference(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `background` | `boolean|nil` |  |
| `cache_control` | `table` |  |
| `context_management` | `table|nil` |  |
| `debug` | `table` |  |
| `fallbacks` | `table|nil` |  |
| `frequency_penalty` | `number|nil` |  |
| `image_config` | `table` |  |
| `include` | `table|nil` |  |
| `input` | `any` |  |
| `instructions` | `string|nil` |  |
| `logit_bias` | `table|nil` |  |
| `logprobs` | `boolean|nil` |  |
| `max_completion_tokens` | `number|nil` |  |
| `max_output_tokens` | `number|nil` |  |
| `max_tokens` | `number|nil` |  |
| `max_tool_calls` | `number|nil` |  |
| `messages` | `table` |  |
| `metadata` | `table` |  |
| `min_p` | `number|nil` |  |
| `modalities` | `table` |  |
| `model` | `string` |  |
| `models` | `table` |  |
| `output_config` | `table` |  |
| `parallel_tool_calls` | `boolean|nil` |  |
| `plugins` | `table` |  |
| `prediction` | `table|nil` |  |
| `presence_penalty` | `number|nil` |  |
| `previous_response_id` | `string` |  |
| `prompt` | `table|nil` |  |
| `prompt_cache_key` | `string|nil` |  |
| `prompt_cache_options` | `table|nil` |  |
| `provider` | `table|nil` |  |
| `reasoning` | `table` |  |
| `reasoning_effort` | `string|nil` |  |
| `repetition_penalty` | `number|nil` |  |
| `response_format` | `any` |  |
| `route` | `string|nil` |  |
| `safety_identifier` | `string|nil` |  |
| `seed` | `number|nil` |  |
| `service_tier` | `string|nil` |  |
| `session_id` | `string` |  |
| `speed` | `any` |  |
| `stop` | `any` |  |
| `stop_sequences` | `table` |  |
| `stop_server_tools_when` | `table` |  |
| `store` | `boolean` |  |
| `stream` | `boolean` |  |
| `stream_options` | `table|nil` |  |
| `system` | `any` |  |
| `temperature` | `number|nil` |  |
| `text` | `any` |  |
| `thinking` | `any` |  |
| `tool_choice` | `any` |  |
| `tools` | `table` |  |
| `top_a` | `number|nil` |  |
| `top_k` | `number|nil` |  |
| `top_logprobs` | `number|nil` |  |
| `top_p` | `number|nil` |  |
| `trace` | `table` |  |
| `truncation` | `string|nil` |  |
| `user` | `string` |  |

#### Example: Create

```lua
local create_preset_from_inference, err = client:CreatePresetFromInference():create({
  slug = "example_slug", -- string
  cache_control = {}, -- table
  messages = {}, -- table
  prediction = "example_prediction", -- table|nil
  prompt = "example_prompt", -- table|nil
  prompt_cache_options = "example_prompt_cache_options", -- table|nil
})
```


### CreateWorkspace

Create an instance: `local create_workspace = client:CreateWorkspace(nil)`


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
| `total_credits` | `number` |  |
| `total_usage` | `number` |  |

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


### Destination

Create an instance: `local destination = client:Destination(nil)`


### Embedding

Create an instance: `local embedding = client:Embedding(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `dimensions` | `number` |  |
| `encoding_format` | `string` |  |
| `id` | `string` |  |
| `input` | `any` |  |
| `input_type` | `string` |  |
| `model` | `string` |  |
| `object` | `string` |  |
| `provider` | `any` |  |
| `usage` | `table` |  |
| `user` | `string` |  |

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
| `architecture` | `any` |  |
| `benchmarks` | `table` |  |
| `canonical_slug` | `string` |  |
| `context_length` | `number|nil` |  |
| `created` | `number` |  |
| `default_parameters` | `table|nil` |  |
| `description` | `string` |  |
| `endpoints` | `table` |  |
| `expiration_date` | `string|nil` |  |
| `hugging_face_id` | `string|nil` |  |
| `id` | `string` |  |
| `knowledge_cutoff` | `string|nil` |  |
| `latency_last_30m` | `table|nil` |  |
| `links` | `table` |  |
| `max_completion_tokens` | `number|nil` |  |
| `max_prompt_tokens` | `number|nil` |  |
| `model_id` | `string` |  |
| `model_name` | `string` |  |
| `name` | `string` |  |
| `per_request_limits` | `table|nil` |  |
| `pricing` | `table` |  |
| `provider_name` | `string` |  |
| `quantization` | `any` |  |
| `reasoning` | `table` |  |
| `status` | `number` |  |
| `supported_parameters` | `table` |  |
| `supported_voices` | `table|nil` |  |
| `supports_implicit_caching` | `boolean` |  |
| `tag` | `string` |  |
| `throughput_last_30m` | `any` |  |
| `top_provider` | `table` |  |
| `uptime_last_1d` | `number|nil` |  |
| `uptime_last_30m` | `number|nil` |  |
| `uptime_last_5m` | `number|nil` |  |

#### Example: Load

```lua
local endpoint, err = client:Endpoint():load({ author = "author", slug = "slug" })
```

#### Example: List

```lua
local endpoints, err = client:Endpoint():list()
```


### Feedback

Create an instance: `local feedback = client:Feedback(nil)`


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
| `api_type` | `string|nil` |  |
| `app_id` | `number|nil` |  |
| `cache_discount` | `number|nil` |  |
| `cancelled` | `boolean|nil` |  |
| `created_at` | `string` |  |
| `data_region` | `string` |  |
| `external_user` | `string|nil` |  |
| `finish_reason` | `string|nil` |  |
| `generation_time` | `number|nil` |  |
| `http_referer` | `string|nil` |  |
| `id` | `string` |  |
| `is_byok` | `boolean` |  |
| `latency` | `number|nil` |  |
| `model` | `string` |  |
| `moderation_latency` | `number|nil` |  |
| `native_finish_reason` | `string|nil` |  |
| `native_tokens_cached` | `number|nil` |  |
| `native_tokens_completion` | `number|nil` |  |
| `native_tokens_completion_images` | `number|nil` |  |
| `native_tokens_prompt` | `number|nil` |  |
| `native_tokens_reasoning` | `number|nil` |  |
| `num_fetches` | `number|nil` |  |
| `num_input_audio_prompt` | `number|nil` |  |
| `num_media_completion` | `number|nil` |  |
| `num_media_prompt` | `number|nil` |  |
| `num_search_results` | `number|nil` |  |
| `origin` | `string` |  |
| `preset_id` | `string|nil` |  |
| `provider_name` | `string|nil` |  |
| `provider_responses` | `table|nil` |  |
| `request_id` | `string|nil` |  |
| `response_cache_source_id` | `string|nil` |  |
| `router` | `string|nil` |  |
| `service_tier` | `string|nil` |  |
| `session_id` | `string|nil` |  |
| `streamed` | `boolean|nil` |  |
| `tokens_completion` | `number|nil` |  |
| `tokens_prompt` | `number|nil` |  |
| `total_cost` | `number` |  |
| `upstream_id` | `string|nil` |  |
| `upstream_inference_cost` | `number|nil` |  |
| `usage` | `number` |  |
| `user_agent` | `string|nil` |  |
| `web_search_engine` | `string|nil` |  |

#### Example: Load

```lua
local generation, err = client:Generation():load({ id = "generation_id" })
```


### GenerationContent

Create an instance: `local generation_content = client:GenerationContent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `any` |  |
| `output` | `table` |  |

#### Example: Load

```lua
local generation_content, err = client:GenerationContent():load()
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
| `allowed_models` | `table|nil` |  |
| `allowed_providers` | `table|nil` |  |
| `content_filter_builtins` | `table|nil` |  |
| `content_filters` | `table|nil` |  |
| `created_at` | `string` |  |
| `description` | `string|nil` |  |
| `enforce_zdr` | `boolean|nil` |  |
| `enforce_zdr_anthropic` | `boolean|nil` |  |
| `enforce_zdr_google` | `boolean|nil` |  |
| `enforce_zdr_openai` | `boolean|nil` |  |
| `enforce_zdr_other` | `boolean|nil` |  |
| `enforce_zdr_xai` | `boolean|nil` |  |
| `id` | `string` |  |
| `ignored_models` | `table|nil` |  |
| `ignored_providers` | `table|nil` |  |
| `limit_usd` | `number|nil` |  |
| `name` | `string` |  |
| `reset_interval` | `string|nil` |  |
| `updated_at` | `string|nil` |  |
| `workspace_id` | `string` |  |

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
| `aspect_ratio` | `string` |  |
| `background` | `string` |  |
| `created` | `number` |  |
| `data` | `table` |  |
| `input_references` | `table` |  |
| `model` | `string` |  |
| `n` | `number` |  |
| `output_compression` | `number` |  |
| `output_format` | `string` |  |
| `prompt` | `string` |  |
| `provider` | `table` |  |
| `quality` | `string` |  |
| `resolution` | `string` |  |
| `seed` | `number` |  |
| `size` | `string` |  |
| `stream` | `boolean` |  |
| `usage` | `table` |  |

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
| `allowed_passthrough_parameters` | `table` |  |
| `pricing` | `table` |  |
| `provider_name` | `string` |  |
| `provider_slug` | `string` |  |
| `provider_tag` | `string|nil` |  |
| `supported_parameters` | `any` |  |
| `supports_streaming` | `boolean` |  |

#### Example: List

```lua
local image_model_endpoints, err = client:ImageModelEndpoint():list()
```


### ImageModelsList

Create an instance: `local image_models_list = client:ImageModelsList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `table` |  |
| `created` | `number` |  |
| `description` | `string` |  |
| `endpoints` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `supported_parameters` | `table` |  |
| `supports_streaming` | `boolean` |  |

#### Example: List

```lua
local image_models_lists, err = client:ImageModelsList():list()
```


### Key

Create an instance: `local key = client:Key(nil)`


### ListByokKey

Create an instance: `local list_byok_key = client:ListByokKey(nil)`


### ListGuardrail

Create an instance: `local list_guardrail = client:ListGuardrail(nil)`


### ListKeyAssignment

Create an instance: `local list_key_assignment = client:ListKeyAssignment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_by` | `string|nil` |  |
| `created_at` | `string` |  |
| `guardrail_id` | `string` |  |
| `id` | `string` |  |
| `key_hash` | `string` |  |
| `key_label` | `string` |  |
| `key_name` | `string` |  |

#### Example: List

```lua
local list_key_assignments, err = client:ListKeyAssignment():list()
```


### ListMemberAssignment

Create an instance: `local list_member_assignment = client:ListMemberAssignment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_by` | `string|nil` |  |
| `created_at` | `string` |  |
| `guardrail_id` | `string` |  |
| `id` | `string` |  |
| `organization_id` | `string` |  |
| `user_id` | `string` |  |

#### Example: List

```lua
local list_member_assignments, err = client:ListMemberAssignment():list()
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
| `data` | `table` |  |
| `total_count` | `number` |  |

#### Example: List

```lua
local list_observability_destinations, err = client:ListObservabilityDestination():list()
```


### ListPreset

Create an instance: `local list_preset = client:ListPreset(nil)`


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


### ListWorkspace

Create an instance: `local list_workspace = client:ListWorkspace(nil)`


### ListWorkspaceBudget

Create an instance: `local list_workspace_budget = client:ListWorkspaceBudget(nil)`

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
| `reset_interval` | `string|nil` |  |
| `updated_at` | `string` |  |
| `workspace_id` | `string` |  |

#### Example: List

```lua
local list_workspace_budgets, err = client:ListWorkspaceBudget():list()
```


### ListWorkspaceMember

Create an instance: `local list_workspace_member = client:ListWorkspaceMember(nil)`

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

```lua
local list_workspace_members, err = client:ListWorkspaceMember():list()
```


### Member

Create an instance: `local member = client:Member(nil)`


### Message

Create an instance: `local message = client:Message(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_control` | `table` |  |
| `context_management` | `table|nil` |  |
| `fallbacks` | `table|nil` |  |
| `max_tokens` | `number` |  |
| `messages` | `table|nil` |  |
| `metadata` | `table` |  |
| `model` | `string` |  |
| `models` | `table` |  |
| `output_config` | `table` |  |
| `plugins` | `table` |  |
| `provider` | `table|nil` |  |
| `route` | `string|nil` |  |
| `service_tier` | `string` |  |
| `session_id` | `string` |  |
| `speed` | `any` |  |
| `stop_sequences` | `table` |  |
| `stop_server_tools_when` | `table` |  |
| `stream` | `boolean` |  |
| `system` | `any` |  |
| `temperature` | `number` |  |
| `thinking` | `any` |  |
| `tool_choice` | `any` |  |
| `tools` | `table` |  |
| `top_k` | `number` |  |
| `top_p` | `number` |  |
| `trace` | `table` |  |
| `user` | `string` |  |

#### Example: Create

```lua
local message, err = client:Message():create({
  cache_control = {}, -- table
  messages = "example_messages", -- table|nil
  model = "example_model", -- string
})
```


### Meta

Create an instance: `local meta = client:Meta(nil)`


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
| `architecture` | `table` |  |
| `benchmarks` | `table` |  |
| `canonical_slug` | `string` |  |
| `context_length` | `number|nil` |  |
| `created` | `number` |  |
| `default_parameters` | `table|nil` |  |
| `description` | `string` |  |
| `expiration_date` | `string|nil` |  |
| `hugging_face_id` | `string|nil` |  |
| `id` | `string` |  |
| `knowledge_cutoff` | `string|nil` |  |
| `links` | `table` |  |
| `name` | `string` |  |
| `per_request_limits` | `table|nil` |  |
| `pricing` | `table` |  |
| `reasoning` | `table` |  |
| `supported_parameters` | `table` |  |
| `supported_voices` | `table|nil` |  |
| `top_provider` | `table` |  |

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
| `count` | `number` |  |

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
| `architecture` | `table` |  |
| `benchmarks` | `table` |  |
| `canonical_slug` | `string` |  |
| `context_length` | `number|nil` |  |
| `created` | `number` |  |
| `default_parameters` | `table|nil` |  |
| `description` | `string` |  |
| `expiration_date` | `string|nil` |  |
| `hugging_face_id` | `string|nil` |  |
| `id` | `string` |  |
| `knowledge_cutoff` | `string|nil` |  |
| `links` | `table` |  |
| `name` | `string` |  |
| `per_request_limits` | `table|nil` |  |
| `pricing` | `table` |  |
| `reasoning` | `table` |  |
| `supported_parameters` | `table` |  |
| `supported_voices` | `table|nil` |  |
| `top_provider` | `table` |  |

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
| `app_id` | `number` |  |
| `callback_url` | `string` |  |
| `code` | `string` |  |
| `code_challenge` | `string` |  |
| `code_challenge_method` | `string|nil` |  |
| `code_verifier` | `string` |  |
| `created_at` | `string` |  |
| `expires_at` | `string|nil` |  |
| `id` | `string` |  |
| `key` | `string` |  |
| `key_label` | `string` |  |
| `limit` | `number` |  |
| `spawn_agent` | `string` |  |
| `spawn_cloud` | `string` |  |
| `usage_limit_type` | `string` |  |
| `user_id` | `string|nil` |  |
| `workspace_id` | `string` |  |

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
| `cache_control` | `table` |  |
| `debug` | `table` |  |
| `frequency_penalty` | `number|nil` |  |
| `image_config` | `table` |  |
| `include` | `table|nil` |  |
| `input` | `any` |  |
| `instructions` | `string|nil` |  |
| `max_output_tokens` | `number|nil` |  |
| `max_tool_calls` | `number|nil` |  |
| `metadata` | `table|nil` |  |
| `modalities` | `table` |  |
| `model` | `string` |  |
| `models` | `table` |  |
| `parallel_tool_calls` | `boolean|nil` |  |
| `plugins` | `table` |  |
| `presence_penalty` | `number|nil` |  |
| `previous_response_id` | `string` |  |
| `prompt` | `table|nil` |  |
| `prompt_cache_key` | `string|nil` |  |
| `prompt_cache_options` | `table|nil` |  |
| `provider` | `table|nil` |  |
| `reasoning` | `any` |  |
| `route` | `string|nil` |  |
| `safety_identifier` | `string|nil` |  |
| `service_tier` | `string|nil` |  |
| `session_id` | `string` |  |
| `stop_server_tools_when` | `table` |  |
| `store` | `boolean` |  |
| `stream` | `boolean` |  |
| `temperature` | `number|nil` |  |
| `text` | `any` |  |
| `tool_choice` | `any` |  |
| `tools` | `table` |  |
| `top_k` | `number` |  |
| `top_logprobs` | `number|nil` |  |
| `top_p` | `number|nil` |  |
| `trace` | `table` |  |
| `truncation` | `string|nil` |  |
| `user` | `string` |  |

#### Example: Create

```lua
local open_responses_result, err = client:OpenResponsesResult():create({
  cache_control = {}, -- table
  prompt = "example_prompt", -- table|nil
  prompt_cache_options = "example_prompt_cache_options", -- table|nil
})
```


### Organization

Create an instance: `local organization = client:Organization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `first_name` | `string|nil` |  |
| `id` | `string` |  |
| `last_name` | `string|nil` |  |
| `role` | `string` |  |

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
| `designated_version` | `table|nil` |  |
| `designated_version_id` | `string|nil` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `status` | `string` |  |
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
| `datacenters` | `table|nil` |  |
| `headquarters` | `string|nil` |  |
| `name` | `string` |  |
| `privacy_policy_url` | `string|nil` |  |
| `slug` | `string` |  |
| `status_page_url` | `string|nil` |  |
| `terms_of_service_url` | `string|nil` |  |

#### Example: List

```lua
local providers, err = client:Provider():list()
```


### Query

Create an instance: `local query = client:Query(nil)`


### RankingsDaily

Create an instance: `local rankings_daily = client:RankingsDaily(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `model_permaslug` | `string` |  |
| `total_tokens` | `string` |  |

#### Example: List

```lua
local rankings_dailys, err = client:RankingsDaily():list()
```


### Remove

Create an instance: `local remove = client:Remove(nil)`


### Rerank

Create an instance: `local rerank = client:Rerank(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `documents` | `table` |  |
| `id` | `string` |  |
| `model` | `string` |  |
| `provider` | `string` |  |
| `query` | `string` |  |
| `results` | `table` |  |
| `top_n` | `number` |  |
| `usage` | `table` |  |

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


### Speech

Create an instance: `local speech = client:Speech(nil)`


### Stt

Create an instance: `local stt = client:Stt(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `duration` | `number` |  |
| `input_audio` | `table` |  |
| `language` | `string` |  |
| `model` | `string` |  |
| `provider` | `table` |  |
| `response_format` | `string` |  |
| `segments` | `table` |  |
| `task` | `string` |  |
| `temperature` | `number` |  |
| `text` | `string` |  |
| `timestamp_granularities` | `table` |  |
| `usage` | `table` |  |
| `words` | `table` |  |

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
| `category` | `string` |  |
| `comment` | `string` |  |
| `generation_id` | `string` |  |
| `success` | `boolean` |  |

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
| `as_of` | `string` |  |
| `classifications` | `table` |  |
| `macro_categories` | `table` |  |
| `window_days` | `number` |  |

#### Example: Load

```lua
local task, err = client:Task():load()
```


### Transcription

Create an instance: `local transcription = client:Transcription(nil)`


### Tts

Create an instance: `local tts = client:Tts(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `string` |  |
| `model` | `string` |  |
| `provider` | `table` |  |
| `response_format` | `string` |  |
| `speed` | `number` |  |
| `voice` | `string` |  |

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
| `allowed_models` | `table|nil` |  |
| `allowed_user_ids` | `table|nil` |  |
| `disabled` | `boolean` |  |
| `is_fallback` | `boolean` |  |
| `key` | `string` |  |
| `name` | `string|nil` |  |


### UpdateGuardrail

Create an instance: `local update_guardrail = client:UpdateGuardrail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_models` | `table|nil` |  |
| `allowed_providers` | `table|nil` |  |
| `content_filter_builtins` | `table|nil` |  |
| `content_filters` | `table|nil` |  |
| `description` | `string|nil` |  |
| `enforce_zdr` | `boolean|nil` |  |
| `enforce_zdr_anthropic` | `boolean|nil` |  |
| `enforce_zdr_google` | `boolean|nil` |  |
| `enforce_zdr_openai` | `boolean|nil` |  |
| `enforce_zdr_other` | `boolean|nil` |  |
| `enforce_zdr_xai` | `boolean|nil` |  |
| `ignored_models` | `table|nil` |  |
| `ignored_providers` | `table|nil` |  |
| `limit_usd` | `number|nil` |  |
| `name` | `string` |  |
| `reset_interval` | `string|nil` |  |


### UpdateObservabilityDestination

Create an instance: `local update_observability_destination = client:UpdateObservabilityDestination(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hashes` | `table|nil` |  |
| `config` | `table` |  |
| `enabled` | `boolean` |  |
| `filter_rules` | `any` |  |
| `name` | `string` |  |
| `privacy_mode` | `boolean` |  |
| `sampling_rate` | `number` |  |


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
| `created_at` | `string` |  |
| `created_by` | `string|nil` |  |
| `default_image_model` | `string|nil` |  |
| `default_provider_sort` | `string|nil` |  |
| `default_text_model` | `string|nil` |  |
| `description` | `string|nil` |  |
| `id` | `string` |  |
| `io_logging_api_key_ids` | `table|nil` |  |
| `io_logging_sampling_rate` | `number` |  |
| `is_data_discount_logging_enabled` | `boolean` |  |
| `is_observability_broadcast_enabled` | `boolean` |  |
| `is_observability_io_logging_enabled` | `boolean` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `updated_at` | `string|nil` |  |

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
| `limit_usd` | `number` |  |


### User

Create an instance: `local user = client:User(nil)`


### Version

Create an instance: `local version = client:Version(nil)`


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
| `aspect_ratio` | `string` |  |
| `callback_url` | `string` |  |
| `duration` | `number` |  |
| `error` | `string` |  |
| `frame_images` | `table` |  |
| `generate_audio` | `boolean` |  |
| `generation_id` | `string` |  |
| `id` | `string` |  |
| `input_references` | `table` |  |
| `model` | `string` |  |
| `polling_url` | `string` |  |
| `prompt` | `string` |  |
| `provider` | `table` |  |
| `resolution` | `string` |  |
| `seed` | `number` |  |
| `size` | `string` |  |
| `status` | `string` |  |
| `unsigned_urls` | `table` |  |
| `usage` | `table` |  |

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

#### Example: Load

```lua
local video_generation, err = client:VideoGeneration():load({ id = "video_generation_id" })
```


### VideoModelsList

Create an instance: `local video_models_list = client:VideoModelsList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_passthrough_parameters` | `table` |  |
| `canonical_slug` | `string` |  |
| `created` | `number` |  |
| `description` | `string` |  |
| `generate_audio` | `boolean|nil` |  |
| `hugging_face_id` | `string|nil` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `pricing_skus` | `table|nil` |  |
| `seed` | `boolean|nil` |  |
| `supported_aspect_ratios` | `table|nil` |  |
| `supported_durations` | `table|nil` |  |
| `supported_frame_images` | `table|nil` |  |
| `supported_resolutions` | `table|nil` |  |
| `supported_sizes` | `table|nil` |  |

#### Example: List

```lua
local video_models_lists, err = client:VideoModelsList():list()
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
| `created_at` | `string` |  |
| `created_by` | `string|nil` |  |
| `default_image_model` | `string|nil` |  |
| `default_provider_sort` | `string|nil` |  |
| `default_text_model` | `string|nil` |  |
| `description` | `string|nil` |  |
| `id` | `string` |  |
| `io_logging_api_key_ids` | `table|nil` |  |
| `io_logging_sampling_rate` | `number` |  |
| `is_data_discount_logging_enabled` | `boolean` |  |
| `is_observability_broadcast_enabled` | `boolean` |  |
| `is_observability_io_logging_enabled` | `boolean` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `updated_at` | `string|nil` |  |

#### Example: Load

```lua
local workspace, err = client:Workspace():load({ id = "workspace_id" })
```


### WorkspaceBudget

Create an instance: `local workspace_budget = client:WorkspaceBudget(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Zdr

Create an instance: `local zdr = client:Zdr(nil)`


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

- **TestFeature**: In-memory mock transport for testing without a live server

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
local organization = client:Organization()
organization:list()

-- organization:data_get() now returns the organization data from the last list
-- organization:match_get() returns the last match criteria
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
