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
local activitys, err = client:Activity():list()
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

local result, err = client:Activity():list()
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

    local activity, err = client:Activity():load()
    if err then error(err) end
    -- activity is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Operations: Create, List, Load, Remove, Update.

API path: `/keys`

#### AppRanking

| Field | Description |
| --- | --- |
| `app_id` |  |
| `app_name` |  |
| `rank` |  |
| `total_request` |  |
| `total_token` |  |

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
| `user_id` |  |

Operations: Create.

API path: `/workspaces/{id}/members/add`

#### BulkAssignKey

| Field | Description |
| --- | --- |
| `assigned_count` |  |
| `key_hash` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/keys`

#### BulkAssignMember

| Field | Description |
| --- | --- |
| `assigned_count` |  |
| `member_user_id` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/members`

#### BulkRemoveWorkspaceMember

| Field | Description |
| --- | --- |
| `removed_count` |  |
| `user_id` |  |

Operations: Create.

API path: `/workspaces/{id}/members/remove`

#### BulkUnassignKey

| Field | Description |
| --- | --- |
| `key_hash` |  |
| `unassigned_count` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/keys/remove`

#### BulkUnassignMember

| Field | Description |
| --- | --- |
| `member_user_id` |  |
| `unassigned_count` |  |

Operations: Create.

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

Operations: Create, List, Load, Remove.

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
| `api_key_hash` |  |
| `config` |  |
| `enabled` |  |
| `filter_rule` |  |
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
| `data` |  |

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

Operations: Create.

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
| `size_byte` |  |
| `type` |  |

Operations: Create, List, Load, Remove.

API path: `/files`

#### Generation

| Field | Description |
| --- | --- |
| `data` |  |

Operations: Load.

API path: `/generation`

#### GenerationContent

| Field | Description |
| --- | --- |
| `data` |  |

Operations: Load.

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

Operations: Create, List, Load, Remove.

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

Operations: Create.

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

Operations: List.

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

Operations: List, Load.

API path: `/embeddings/models`

#### ModelsCount

| Field | Description |
| --- | --- |
| `data` |  |

Operations: Load.

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

Operations: List.

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

Operations: List, Load.

API path: `/presets`

#### PresetVersion

| Field | Description |
| --- | --- |
| `data` |  |

Operations: Load.

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
| `total_token` |  |

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
| `document` |  |
| `id` |  |
| `model` |  |
| `provider` |  |
| `query` |  |
| `result` |  |
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
| `segment` |  |
| `task` |  |
| `temperature` |  |
| `text` |  |
| `timestamp_granularity` |  |
| `usage` |  |
| `word` |  |

Operations: Create.

API path: `/audio/transcriptions`

#### SubmitGenerationFeedback

| Field | Description |
| --- | --- |
| `category` |  |
| `comment` |  |
| `data` |  |
| `generation_id` |  |

Operations: Create.

API path: `/generation/feedback`

#### Task

| Field | Description |
| --- | --- |
| `data` |  |

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
| `allowed_model` |  |
| `allowed_user_id` |  |
| `data` |  |
| `disabled` |  |
| `is_fallback` |  |
| `key` |  |
| `name` |  |

Operations: Update.

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

Operations: Update.

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

Operations: Update.

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

Operations: Create, List, Update.

API path: `/workspaces`

#### UpsertWorkspaceBudget

| Field | Description |
| --- | --- |
| `data` |  |
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

Operations: List.

API path: `/videos/models`

#### Workspace

| Field | Description |
| --- | --- |
| `data` |  |

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
| `creator_user_id` | `any` |  |
| `data` | `table` |  |
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
  data = {}, -- table
  hash = "example_hash", -- string
  label = "example_label", -- string
  limit_remaining = "example_limit_remaining", -- any
  name = "example_name", -- string
  updated_at = "example_updated_at", -- any
  usage = 1, -- number
  usage_daily = 1, -- number
  usage_monthly = 1, -- number
  usage_weekly = 1, -- number
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
| `total_request` | `number` |  |
| `total_token` | `string` |  |

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
| `classifier_dimension` | `table` |  |
| `classifier_filter` | `table` |  |
| `data` | `table` |  |
| `dimension` | `table` |  |
| `filter` | `table` |  |
| `granularity` | `string` |  |
| `group_limit` | `number` |  |
| `limit` | `number` |  |
| `metric` | `table` |  |
| `order_by` | `table` |  |
| `time_range` | `table` |  |

#### Example: Load

```lua
local beta_analytics, err = client:BetaAnalytics():load()
```

#### Example: Create

```lua
local beta_analytics, err = client:BetaAnalytics():create({
  classifier_dimension = {}, -- table
  classifier_filter = {}, -- table
  data = {}, -- table
  metric = {}, -- table
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
| `user_id` | `table` |  |

#### Example: Create

```lua
local bulk_add_workspace_member, err = client:BulkAddWorkspaceMember():create({
  workspace_id = "example_workspace_id", -- string
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
| `key_hash` | `table` |  |

#### Example: Create

```lua
local bulk_assign_key, err = client:BulkAssignKey():create({
  guardrail_id = "example_guardrail_id", -- string
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
| `member_user_id` | `table` |  |

#### Example: Create

```lua
local bulk_assign_member, err = client:BulkAssignMember():create({
  guardrail_id = "example_guardrail_id", -- string
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
| `user_id` | `table` |  |

#### Example: Create

```lua
local bulk_remove_workspace_member, err = client:BulkRemoveWorkspaceMember():create({
  workspace_id = "example_workspace_id", -- string
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
| `key_hash` | `table` |  |
| `unassigned_count` | `number` |  |

#### Example: Create

```lua
local bulk_unassign_key, err = client:BulkUnassignKey():create({
  guardrail_id = "example_guardrail_id", -- string
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
| `member_user_id` | `table` |  |
| `unassigned_count` | `number` |  |

#### Example: Create

```lua
local bulk_unassign_member, err = client:BulkUnassignMember():create({
  guardrail_id = "example_guardrail_id", -- string
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
  allowed_api_key_hash = "example_allowed_api_key_hash", -- any
  created_at = "example_created_at", -- string
  data = "example_data", -- any
  id = "example_id", -- string
  key = "example_key", -- string
  label = "example_label", -- string
  provider = "example_provider", -- string
  sort_order = 1, -- number
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
| `choice` | `table` |  |
| `created` | `number` |  |
| `debug` | `table` |  |
| `frequency_penalty` | `any` |  |
| `id` | `string` |  |
| `image_config` | `table` |  |
| `logit_bia` | `any` |  |
| `logprob` | `any` |  |
| `max_completion_token` | `any` |  |
| `max_token` | `any` |  |
| `message` | `table` |  |
| `metadata` | `table` |  |
| `min_p` | `any` |  |
| `modality` | `table` |  |
| `model` | `string` |  |
| `object` | `string` |  |
| `openrouter_metadata` | `table` |  |
| `parallel_tool_call` | `any` |  |
| `plugin` | `table` |  |
| `prediction` | `any` |  |
| `presence_penalty` | `any` |  |
| `prompt_cache_key` | `any` |  |
| `prompt_cache_option` | `any` |  |
| `provider` | `any` |  |
| `reasoning` | `table` |  |
| `reasoning_effort` | `any` |  |
| `repetition_penalty` | `any` |  |
| `response_format` | `any` |  |
| `route` | `any` |  |
| `seed` | `any` |  |
| `service_tier` | `any` |  |
| `session_id` | `string` |  |
| `stop` | `any` |  |
| `stop_server_tools_when` | `table` |  |
| `stream` | `boolean` |  |
| `stream_option` | `any` |  |
| `system_fingerprint` | `any` |  |
| `temperature` | `any` |  |
| `tool` | `table` |  |
| `tool_choice` | `any` |  |
| `top_a` | `any` |  |
| `top_k` | `any` |  |
| `top_logprob` | `any` |  |
| `top_p` | `any` |  |
| `trace` | `table` |  |
| `usage` | `table` |  |
| `user` | `string` |  |

#### Example: Create

```lua
local chat_result, err = client:ChatResult():create({
  cache_control = {}, -- table
  choice = {}, -- table
  created = 1, -- number
  id = "example_id", -- string
  message = {}, -- table
  model = "example_model", -- string
  object = "example_object", -- string
  openrouter_metadata = {}, -- table
  prediction = "example_prediction", -- any
  prompt_cache_option = "example_prompt_cache_option", -- any
  system_fingerprint = "example_system_fingerprint", -- any
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
| `api_key_hash` | `any` |  |
| `config` | `table` |  |
| `enabled` | `boolean` |  |
| `filter_rule` | `any` |  |
| `name` | `string` |  |
| `privacy_mode` | `boolean` |  |
| `sampling_rate` | `number` |  |
| `type` | `string` |  |
| `workspace_id` | `string` |  |

#### Example: Create

```lua
local create_observability_destination, err = client:CreateObservabilityDestination():create({
  config = {}, -- table
  filter_rule = "example_filter_rule", -- any
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
| `background` | `any` |  |
| `cache_control` | `table` |  |
| `context_management` | `any` |  |
| `data` | `any` |  |
| `debug` | `table` |  |
| `fallback` | `any` |  |
| `frequency_penalty` | `any` |  |
| `image_config` | `table` |  |
| `include` | `any` |  |
| `input` | `any` |  |
| `instruction` | `any` |  |
| `logit_bia` | `any` |  |
| `logprob` | `any` |  |
| `max_completion_token` | `any` |  |
| `max_output_token` | `any` |  |
| `max_token` | `any` |  |
| `max_tool_call` | `any` |  |
| `message` | `table` |  |
| `metadata` | `table` |  |
| `min_p` | `any` |  |
| `modality` | `table` |  |
| `model` | `string` |  |
| `output_config` | `table` |  |
| `parallel_tool_call` | `any` |  |
| `plugin` | `table` |  |
| `prediction` | `any` |  |
| `presence_penalty` | `any` |  |
| `previous_response_id` | `string` |  |
| `prompt` | `any` |  |
| `prompt_cache_key` | `any` |  |
| `prompt_cache_option` | `any` |  |
| `provider` | `any` |  |
| `reasoning` | `table` |  |
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
| `stop_sequence` | `table` |  |
| `stop_server_tools_when` | `table` |  |
| `store` | `boolean` |  |
| `stream` | `boolean` |  |
| `stream_option` | `any` |  |
| `system` | `any` |  |
| `temperature` | `any` |  |
| `text` | `any` |  |
| `thinking` | `any` |  |
| `tool` | `table` |  |
| `tool_choice` | `any` |  |
| `top_a` | `any` |  |
| `top_k` | `any` |  |
| `top_logprob` | `any` |  |
| `top_p` | `any` |  |
| `trace` | `table` |  |
| `truncation` | `any` |  |
| `user` | `string` |  |

#### Example: Create

```lua
local create_preset_from_inference, err = client:CreatePresetFromInference():create({
  slug = "example_slug", -- string
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
| `data` | `table` |  |

#### Example: Load

```lua
local credit, err = client:Credit():load()
```

#### Example: Create

```lua
local credit, err = client:Credit():create({
  data = {}, -- table
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
| `dimension` | `number` |  |
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
| `architecture` | `table` |  |
| `benchmark` | `table` |  |
| `canonical_slug` | `string` |  |
| `context_length` | `any` |  |
| `created` | `number` |  |
| `data` | `table` |  |
| `default_parameter` | `any` |  |
| `description` | `string` |  |
| `expiration_date` | `any` |  |
| `hugging_face_id` | `any` |  |
| `id` | `string` |  |
| `knowledge_cutoff` | `any` |  |
| `latency_last_30m` | `any` |  |
| `link` | `table` |  |
| `max_completion_token` | `any` |  |
| `max_prompt_token` | `any` |  |
| `model_id` | `string` |  |
| `model_name` | `string` |  |
| `name` | `string` |  |
| `per_request_limit` | `any` |  |
| `pricing` | `table` |  |
| `provider_name` | `string` |  |
| `quantization` | `any` |  |
| `reasoning` | `table` |  |
| `status` | `number` |  |
| `supported_parameter` | `table` |  |
| `supported_voice` | `any` |  |
| `supports_implicit_caching` | `boolean` |  |
| `tag` | `string` |  |
| `throughput_last_30m` | `any` |  |
| `top_provider` | `table` |  |
| `uptime_last_1d` | `any` |  |
| `uptime_last_30m` | `any` |  |
| `uptime_last_5m` | `any` |  |

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
| `size_byte` | `number` |  |
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
  size_byte = 1, -- number
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
| `data` | `table` |  |

#### Example: Load

```lua
local generation, err = client:Generation():load()
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
| `data` | `table` |  |

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
  data = "example_data", -- any
  id = "example_id", -- string
  name = "example_name", -- string
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
| `input_reference` | `table` |  |
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
| `allowed_passthrough_parameter` | `table` |  |
| `pricing` | `table` |  |
| `provider_name` | `string` |  |
| `provider_slug` | `string` |  |
| `provider_tag` | `any` |  |
| `supported_parameter` | `any` |  |
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
| `endpoint` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `supported_parameter` | `table` |  |
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
| `assigned_by` | `any` |  |
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
| `assigned_by` | `any` |  |
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
| `system_prompt` | `any` |  |
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
| `reset_interval` | `any` |  |
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
| `context_management` | `any` |  |
| `fallback` | `any` |  |
| `max_token` | `number` |  |
| `message` | `any` |  |
| `metadata` | `table` |  |
| `model` | `string` |  |
| `output_config` | `table` |  |
| `plugin` | `table` |  |
| `provider` | `any` |  |
| `route` | `any` |  |
| `service_tier` | `string` |  |
| `session_id` | `string` |  |
| `speed` | `any` |  |
| `stop_sequence` | `table` |  |
| `stop_server_tools_when` | `table` |  |
| `stream` | `boolean` |  |
| `system` | `any` |  |
| `temperature` | `number` |  |
| `thinking` | `any` |  |
| `tool` | `table` |  |
| `tool_choice` | `any` |  |
| `top_k` | `number` |  |
| `top_p` | `number` |  |
| `trace` | `table` |  |
| `user` | `string` |  |

#### Example: Create

```lua
local message, err = client:Message():create({
  cache_control = {}, -- table
  message = "example_message", -- any
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
| `benchmark` | `table` |  |
| `canonical_slug` | `string` |  |
| `context_length` | `any` |  |
| `created` | `number` |  |
| `data` | `table` |  |
| `default_parameter` | `any` |  |
| `description` | `string` |  |
| `expiration_date` | `any` |  |
| `hugging_face_id` | `any` |  |
| `id` | `string` |  |
| `knowledge_cutoff` | `any` |  |
| `link` | `table` |  |
| `name` | `string` |  |
| `per_request_limit` | `any` |  |
| `pricing` | `table` |  |
| `reasoning` | `table` |  |
| `supported_parameter` | `table` |  |
| `supported_voice` | `any` |  |
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
| `data` | `table` |  |

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
| `benchmark` | `table` |  |
| `canonical_slug` | `string` |  |
| `context_length` | `any` |  |
| `created` | `number` |  |
| `default_parameter` | `any` |  |
| `description` | `string` |  |
| `expiration_date` | `any` |  |
| `hugging_face_id` | `any` |  |
| `id` | `string` |  |
| `knowledge_cutoff` | `any` |  |
| `link` | `table` |  |
| `name` | `string` |  |
| `per_request_limit` | `any` |  |
| `pricing` | `table` |  |
| `reasoning` | `table` |  |
| `supported_parameter` | `table` |  |
| `supported_voice` | `any` |  |
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
| `callback_url` | `string` |  |
| `code` | `string` |  |
| `code_challenge` | `string` |  |
| `code_challenge_method` | `any` |  |
| `code_verifier` | `string` |  |
| `data` | `table` |  |
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

```lua
local o_auth, err = client:OAuth():create({
  callback_url = "example_callback_url", -- string
  code = "example_code", -- string
  data = {}, -- table
  key = "example_key", -- string
  user_id = "example_user_id", -- any
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
| `data` | `any` |  |

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
| `background` | `any` |  |
| `cache_control` | `table` |  |
| `debug` | `table` |  |
| `frequency_penalty` | `any` |  |
| `image_config` | `table` |  |
| `include` | `any` |  |
| `input` | `any` |  |
| `instruction` | `any` |  |
| `max_output_token` | `any` |  |
| `max_tool_call` | `any` |  |
| `metadata` | `any` |  |
| `modality` | `table` |  |
| `model` | `string` |  |
| `parallel_tool_call` | `any` |  |
| `plugin` | `table` |  |
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
| `stop_server_tools_when` | `table` |  |
| `store` | `boolean` |  |
| `stream` | `boolean` |  |
| `temperature` | `any` |  |
| `text` | `any` |  |
| `tool` | `table` |  |
| `tool_choice` | `any` |  |
| `top_k` | `number` |  |
| `top_logprob` | `any` |  |
| `top_p` | `any` |  |
| `trace` | `table` |  |
| `truncation` | `any` |  |
| `user` | `string` |  |

#### Example: Create

```lua
local open_responses_result, err = client:OpenResponsesResult():create({
  cache_control = {}, -- table
  prompt = "example_prompt", -- any
  prompt_cache_option = "example_prompt_cache_option", -- any
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
| `first_name` | `any` |  |
| `id` | `string` |  |
| `last_name` | `any` |  |
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
| `data` | `any` |  |

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
| `datacenter` | `any` |  |
| `headquarter` | `any` |  |
| `name` | `string` |  |
| `privacy_policy_url` | `any` |  |
| `slug` | `string` |  |
| `status_page_url` | `any` |  |
| `terms_of_service_url` | `any` |  |

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
| `total_token` | `string` |  |

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
| `document` | `table` |  |
| `id` | `string` |  |
| `model` | `string` |  |
| `provider` | `string` |  |
| `query` | `string` |  |
| `result` | `table` |  |
| `top_n` | `number` |  |
| `usage` | `table` |  |

#### Example: Create

```lua
local rerank, err = client:Rerank():create({
  document = {}, -- table
  model = "example_model", -- string
  query = "example_query", -- string
  result = {}, -- table
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
| `segment` | `table` |  |
| `task` | `string` |  |
| `temperature` | `number` |  |
| `text` | `string` |  |
| `timestamp_granularity` | `table` |  |
| `usage` | `table` |  |
| `word` | `table` |  |

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
| `data` | `table` |  |
| `generation_id` | `string` |  |

#### Example: Create

```lua
local submit_generation_feedback, err = client:SubmitGenerationFeedback():create({
  category = "example_category", -- string
  data = {}, -- table
  generation_id = "example_generation_id", -- string
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
| `data` | `table` |  |

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
| `allowed_model` | `any` |  |
| `allowed_user_id` | `any` |  |
| `data` | `any` |  |
| `disabled` | `boolean` |  |
| `is_fallback` | `boolean` |  |
| `key` | `string` |  |
| `name` | `any` |  |


### UpdateGuardrail

Create an instance: `local update_guardrail = client:UpdateGuardrail(nil)`

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

Create an instance: `local update_observability_destination = client:UpdateObservabilityDestination(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hash` | `any` |  |
| `config` | `table` |  |
| `data` | `any` |  |
| `enabled` | `boolean` |  |
| `filter_rule` | `any` |  |
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

```lua
local update_workspaces, err = client:UpdateWorkspace():list()
```

#### Example: Create

```lua
local update_workspace, err = client:UpdateWorkspace():create({
  created_at = "example_created_at", -- string
  created_by = "example_created_by", -- any
  data = "example_data", -- any
  id = "example_id", -- string
  name = "example_name", -- string
  slug = "example_slug", -- string
  updated_at = "example_updated_at", -- any
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
| `data` | `any` |  |
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
| `frame_image` | `table` |  |
| `generate_audio` | `boolean` |  |
| `generation_id` | `string` |  |
| `id` | `string` |  |
| `input_reference` | `table` |  |
| `model` | `string` |  |
| `polling_url` | `string` |  |
| `prompt` | `string` |  |
| `provider` | `table` |  |
| `resolution` | `string` |  |
| `seed` | `number` |  |
| `size` | `string` |  |
| `status` | `string` |  |
| `unsigned_url` | `table` |  |
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
| `allowed_passthrough_parameter` | `table` |  |
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
| `data` | `any` |  |

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
local activity = client:Activity()
activity:list()

-- activity:data_get() now returns the activity data from the last list
-- activity:match_get() returns the last match criteria
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
