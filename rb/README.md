# OpenrouterModels Ruby SDK



The Ruby SDK for the OpenrouterModels API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Activity` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/openrouter-models-sdk/releases](https://github.com/voxgig-sdk/openrouter-models-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "OpenrouterModels_sdk"

client = OpenrouterModelsSDK.new({
  "apikey" => ENV["OPENROUTER_MODELS_APIKEY"],
})
```

### 2. List activity records

```ruby
begin
  # list returns an Array of Activity records — iterate directly.
  activitys = client.Activity.list
  activitys.each do |item|
    puts "#{item["byok_usage_inference"]}"
  end
rescue => err
  warn "list failed: #{err}"
end
```

### 3. Load an endpoint

Endpoint is nested under author, so provide the `author`.

```ruby
begin
  # load returns the ENTITY — call data_get for the Endpoint record (raises on error).
  endpoint = client.Endpoint.load({ "author" => "example_author", "slug" => "example_slug" })
  puts endpoint
rescue => err
  warn "load failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  organizations = client.Organization.list()
rescue => err
  warn "list failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = OpenrouterModelsSDK.test

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
organization = client.Organization.list()
puts organization
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = OpenrouterModelsSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### OpenrouterModelsSDK

```ruby
require_relative "OpenrouterModels_sdk"
client = OpenrouterModelsSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = OpenrouterModelsSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### OpenrouterModelsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `OpenrouterModelsError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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

Create an instance: `activity = client.Activity`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byok_usage_inference` | `Float` |  |
| `completion_tokens` | `Integer` |  |
| `date` | `String` |  |
| `endpoint_id` | `String` |  |
| `model` | `String` |  |
| `model_permaslug` | `String` |  |
| `prompt_tokens` | `Integer` |  |
| `provider_name` | `String` |  |
| `reasoning_tokens` | `Integer` |  |
| `requests` | `Integer` |  |
| `usage` | `Float` |  |

#### Example: List

```ruby
# list returns an Array of Activity records (raises on error).
activitys = client.Activity.list
```


### Add

Create an instance: `add = client.Add`


### ApiKey

Create an instance: `api_key = client.ApiKey`

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
| `byok_usage` | `Float` |  |
| `byok_usage_daily` | `Float` |  |
| `byok_usage_monthly` | `Float` |  |
| `byok_usage_weekly` | `Float` |  |
| `created_at` | `String` |  |
| `creator_user_id` | `Object` |  |
| `disabled` | `Boolean` |  |
| `expires_at` | `Object` |  |
| `hash` | `String` |  |
| `include_byok_in_limit` | `Boolean` |  |
| `is_free_tier` | `Boolean` |  |
| `is_management_key` | `Boolean` |  |
| `is_provisioning_key` | `Boolean` |  |
| `label` | `String` |  |
| `limit` | `Object` |  |
| `limit_remaining` | `Object` |  |
| `limit_reset` | `Object` |  |
| `name` | `String` |  |
| `rate_limit` | `Hash` |  |
| `updated_at` | `Object` |  |
| `usage` | `Float` |  |
| `usage_daily` | `Float` |  |
| `usage_monthly` | `Float` |  |
| `usage_weekly` | `Float` |  |
| `workspace_id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ApiKey record (raises on error).
api_key = client.ApiKey.load({ "id" => "api_key_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiKey records (raises on error).
api_keys = client.ApiKey.list
```

#### Example: Create

```ruby
api_key = client.ApiKey.create({
  "byok_usage" => 1, # Float
  "byok_usage_daily" => 1, # Float
  "byok_usage_monthly" => 1, # Float
  "byok_usage_weekly" => 1, # Float
  "created_at" => "example_created_at", # String
  "creator_user_id" => "example_creator_user_id", # Object
  "disabled" => true, # Boolean
  "hash" => "example_hash", # String
  "include_byok_in_limit" => true, # Boolean
  "is_free_tier" => true, # Boolean
  "is_management_key" => true, # Boolean
  "is_provisioning_key" => true, # Boolean
  "label" => "example_label", # String
  "limit" => "example_limit", # Object
  "limit_remaining" => "example_limit_remaining", # Object
  "limit_reset" => "example_limit_reset", # Object
  "name" => "example_name", # String
  "rate_limit" => {}, # Hash
  "updated_at" => "example_updated_at", # Object
  "usage" => 1, # Float
  "usage_daily" => 1, # Float
  "usage_monthly" => 1, # Float
  "usage_weekly" => 1, # Float
  "workspace_id" => "example_workspace_id", # String
})
```


### AppRanking

Create an instance: `app_ranking = client.AppRanking`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `Integer` |  |
| `app_name` | `String` |  |
| `rank` | `Integer` |  |
| `total_requests` | `Integer` |  |
| `total_tokens` | `String` |  |

#### Example: List

```ruby
# list returns an Array of AppRanking records (raises on error).
app_rankings = client.AppRanking.list
```


### Benchmark

Create an instance: `benchmark = client.Benchmark`


### BetaAnalytics

Create an instance: `beta_analytics = client.BetaAnalytics`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cachedAt` | `Float` |  |
| `classifier_dimensions` | `Hash` |  |
| `classifier_filters` | `Hash` |  |
| `data` | `Array` |  |
| `dimensions` | `Array` |  |
| `filters` | `Array` |  |
| `granularities` | `Array` |  |
| `granularity` | `String` |  |
| `group_limit` | `Integer` |  |
| `limit` | `Integer` |  |
| `metadata` | `Hash` |  |
| `metrics` | `Array` |  |
| `operators` | `Array` |  |
| `order_by` | `Hash` |  |
| `time_range` | `Hash` |  |
| `warnings` | `Array` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the BetaAnalytics record (raises on error).
beta_analytics = client.BetaAnalytics.load()
```

#### Example: Create

```ruby
beta_analytics = client.BetaAnalytics.create({
  "classifier_dimensions" => {}, # Hash
  "classifier_filters" => {}, # Hash
  "data" => [], # Array
  "dimensions" => [], # Array
  "granularities" => [], # Array
  "metadata" => {}, # Hash
  "metrics" => [], # Array
  "operators" => [], # Array
  "order_by" => {}, # Hash
  "time_range" => {}, # Hash
})
```


### Budget

Create an instance: `budget = client.Budget`


### BulkAddWorkspaceMember

Create an instance: `bulk_add_workspace_member = client.BulkAddWorkspaceMember`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `added_count` | `Integer` |  |
| `data` | `Array` |  |
| `user_ids` | `Array` |  |

#### Example: Create

```ruby
bulk_add_workspace_member = client.BulkAddWorkspaceMember.create({
  "workspace_id" => "example_workspace_id", # String
  "added_count" => 1, # Integer
  "data" => [], # Array
  "user_ids" => [], # Array
})
```


### BulkAssignKey

Create an instance: `bulk_assign_key = client.BulkAssignKey`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_count` | `Integer` |  |
| `key_hashes` | `Array` |  |

#### Example: Create

```ruby
bulk_assign_key = client.BulkAssignKey.create({
  "guardrail_id" => "example_guardrail_id", # String
  "assigned_count" => 1, # Integer
  "key_hashes" => [], # Array
})
```


### BulkAssignMember

Create an instance: `bulk_assign_member = client.BulkAssignMember`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_count` | `Integer` |  |
| `member_user_ids` | `Array` |  |

#### Example: Create

```ruby
bulk_assign_member = client.BulkAssignMember.create({
  "guardrail_id" => "example_guardrail_id", # String
  "assigned_count" => 1, # Integer
  "member_user_ids" => [], # Array
})
```


### BulkRemoveWorkspaceMember

Create an instance: `bulk_remove_workspace_member = client.BulkRemoveWorkspaceMember`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `removed_count` | `Integer` |  |
| `user_ids` | `Array` |  |

#### Example: Create

```ruby
bulk_remove_workspace_member = client.BulkRemoveWorkspaceMember.create({
  "workspace_id" => "example_workspace_id", # String
  "removed_count" => 1, # Integer
  "user_ids" => [], # Array
})
```


### BulkUnassignKey

Create an instance: `bulk_unassign_key = client.BulkUnassignKey`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key_hashes` | `Array` |  |
| `unassigned_count` | `Integer` |  |

#### Example: Create

```ruby
bulk_unassign_key = client.BulkUnassignKey.create({
  "guardrail_id" => "example_guardrail_id", # String
  "key_hashes" => [], # Array
  "unassigned_count" => 1, # Integer
})
```


### BulkUnassignMember

Create an instance: `bulk_unassign_member = client.BulkUnassignMember`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `member_user_ids` | `Array` |  |
| `unassigned_count` | `Integer` |  |

#### Example: Create

```ruby
bulk_unassign_member = client.BulkUnassignMember.create({
  "guardrail_id" => "example_guardrail_id", # String
  "member_user_ids" => [], # Array
  "unassigned_count" => 1, # Integer
})
```


### Byok

Create an instance: `byok = client.Byok`

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
| `allowed_api_key_hashes` | `Object` |  |
| `allowed_models` | `Object` |  |
| `allowed_user_ids` | `Object` |  |
| `created_at` | `String` |  |
| `disabled` | `Boolean` |  |
| `id` | `String` |  |
| `is_fallback` | `Boolean` |  |
| `key` | `String` |  |
| `label` | `String` |  |
| `name` | `Object` |  |
| `provider` | `String` |  |
| `sort_order` | `Integer` |  |
| `workspace_id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Byok record (raises on error).
byok = client.Byok.load({ "id" => "byok_id" })
```

#### Example: List

```ruby
# list returns an Array of Byok records (raises on error).
byoks = client.Byok.list
```

#### Example: Create

```ruby
byok = client.Byok.create({
  "allowed_api_key_hashes" => "example_allowed_api_key_hashes", # Object
  "allowed_models" => "example_allowed_models", # Object
  "allowed_user_ids" => "example_allowed_user_ids", # Object
  "created_at" => "example_created_at", # String
  "disabled" => true, # Boolean
  "id" => "example_id", # String
  "is_fallback" => true, # Boolean
  "key" => "example_key", # String
  "label" => "example_label", # String
  "provider" => "example_provider", # String
  "sort_order" => 1, # Integer
  "workspace_id" => "example_workspace_id", # String
})
```


### ChatResult

Create an instance: `chat_result = client.ChatResult`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_control` | `Hash` |  |
| `choices` | `Array` |  |
| `created` | `Integer` |  |
| `debug` | `Hash` |  |
| `frequency_penalty` | `Object` |  |
| `id` | `String` |  |
| `image_config` | `Hash` |  |
| `logit_bias` | `Object` |  |
| `logprobs` | `Object` |  |
| `max_completion_tokens` | `Object` |  |
| `max_tokens` | `Object` |  |
| `messages` | `Array` |  |
| `metadata` | `Hash` |  |
| `min_p` | `Object` |  |
| `modalities` | `Array` |  |
| `model` | `String` |  |
| `models` | `Array` |  |
| `object` | `String` |  |
| `openrouter_metadata` | `Hash` |  |
| `parallel_tool_calls` | `Object` |  |
| `plugins` | `Array` |  |
| `prediction` | `Object` |  |
| `presence_penalty` | `Object` |  |
| `prompt_cache_key` | `Object` |  |
| `prompt_cache_options` | `Object` |  |
| `provider` | `Object` |  |
| `reasoning` | `Hash` |  |
| `reasoning_effort` | `Object` |  |
| `repetition_penalty` | `Object` |  |
| `response_format` | `Object` |  |
| `route` | `Object` |  |
| `seed` | `Object` |  |
| `service_tier` | `Object` |  |
| `session_id` | `String` |  |
| `stop` | `Object` |  |
| `stop_server_tools_when` | `Array` |  |
| `stream` | `Boolean` |  |
| `stream_options` | `Object` |  |
| `system_fingerprint` | `Object` |  |
| `temperature` | `Object` |  |
| `tool_choice` | `Object` |  |
| `tools` | `Array` |  |
| `top_a` | `Object` |  |
| `top_k` | `Object` |  |
| `top_logprobs` | `Object` |  |
| `top_p` | `Object` |  |
| `trace` | `Hash` |  |
| `usage` | `Hash` |  |
| `user` | `String` |  |

#### Example: Create

```ruby
chat_result = client.ChatResult.create({
  "cache_control" => {}, # Hash
  "choices" => [], # Array
  "created" => 1, # Integer
  "id" => "example_id", # String
  "messages" => [], # Array
  "model" => "example_model", # String
  "object" => "example_object", # String
  "openrouter_metadata" => {}, # Hash
  "prediction" => "example_prediction", # Object
  "prompt_cache_options" => "example_prompt_cache_options", # Object
  "system_fingerprint" => "example_system_fingerprint", # Object
  "usage" => {}, # Hash
})
```


### Code

Create an instance: `code = client.Code`


### Coinbase

Create an instance: `coinbase = client.Coinbase`


### Completion

Create an instance: `completion = client.Completion`


### Content

Create an instance: `content = client.Content`


### Count

Create an instance: `count = client.Count`


### CreateByokKey

Create an instance: `create_byok_key = client.CreateByokKey`


### CreateGuardrail

Create an instance: `create_guardrail = client.CreateGuardrail`


### CreateObservabilityDestination

Create an instance: `create_observability_destination = client.CreateObservabilityDestination`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hashes` | `Object` |  |
| `config` | `Hash` |  |
| `enabled` | `Boolean` |  |
| `filter_rules` | `Object` |  |
| `name` | `String` |  |
| `privacy_mode` | `Boolean` |  |
| `sampling_rate` | `Float` |  |
| `type` | `String` |  |
| `workspace_id` | `String` |  |

#### Example: Create

```ruby
create_observability_destination = client.CreateObservabilityDestination.create({
  "config" => {}, # Hash
  "filter_rules" => "example_filter_rules", # Object
  "name" => "example_name", # String
  "type" => "example_type", # String
})
```


### CreatePresetFromInference

Create an instance: `create_preset_from_inference = client.CreatePresetFromInference`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `background` | `Object` |  |
| `cache_control` | `Hash` |  |
| `context_management` | `Object` |  |
| `debug` | `Hash` |  |
| `fallbacks` | `Object` |  |
| `frequency_penalty` | `Object` |  |
| `image_config` | `Hash` |  |
| `include` | `Object` |  |
| `input` | `Object` |  |
| `instructions` | `Object` |  |
| `logit_bias` | `Object` |  |
| `logprobs` | `Object` |  |
| `max_completion_tokens` | `Object` |  |
| `max_output_tokens` | `Object` |  |
| `max_tokens` | `Object` |  |
| `max_tool_calls` | `Object` |  |
| `messages` | `Array` |  |
| `metadata` | `Hash` |  |
| `min_p` | `Object` |  |
| `modalities` | `Array` |  |
| `model` | `String` |  |
| `models` | `Array` |  |
| `output_config` | `Hash` |  |
| `parallel_tool_calls` | `Object` |  |
| `plugins` | `Array` |  |
| `prediction` | `Object` |  |
| `presence_penalty` | `Object` |  |
| `previous_response_id` | `String` |  |
| `prompt` | `Object` |  |
| `prompt_cache_key` | `Object` |  |
| `prompt_cache_options` | `Object` |  |
| `provider` | `Object` |  |
| `reasoning` | `Hash` |  |
| `reasoning_effort` | `Object` |  |
| `repetition_penalty` | `Object` |  |
| `response_format` | `Object` |  |
| `route` | `Object` |  |
| `safety_identifier` | `Object` |  |
| `seed` | `Object` |  |
| `service_tier` | `Object` |  |
| `session_id` | `String` |  |
| `speed` | `Object` |  |
| `stop` | `Object` |  |
| `stop_sequences` | `Array` |  |
| `stop_server_tools_when` | `Array` |  |
| `store` | `Boolean` |  |
| `stream` | `Boolean` |  |
| `stream_options` | `Object` |  |
| `system` | `Object` |  |
| `temperature` | `Object` |  |
| `text` | `Object` |  |
| `thinking` | `Object` |  |
| `tool_choice` | `Object` |  |
| `tools` | `Array` |  |
| `top_a` | `Object` |  |
| `top_k` | `Object` |  |
| `top_logprobs` | `Object` |  |
| `top_p` | `Object` |  |
| `trace` | `Hash` |  |
| `truncation` | `Object` |  |
| `user` | `String` |  |

#### Example: Create

```ruby
create_preset_from_inference = client.CreatePresetFromInference.create({
  "slug" => "example_slug", # String
  "cache_control" => {}, # Hash
  "messages" => [], # Array
  "prediction" => "example_prediction", # Object
  "prompt" => "example_prompt", # Object
  "prompt_cache_options" => "example_prompt_cache_options", # Object
})
```


### CreateWorkspace

Create an instance: `create_workspace = client.CreateWorkspace`


### Credit

Create an instance: `credit = client.Credit`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `total_credits` | `Float` |  |
| `total_usage` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Credit record (raises on error).
credit = client.Credit.load()
```

#### Example: Create

```ruby
credit = client.Credit.create({
  "total_credits" => 1, # Float
  "total_usage" => 1, # Float
})
```


### Destination

Create an instance: `destination = client.Destination`


### Embedding

Create an instance: `embedding = client.Embedding`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Array` |  |
| `dimensions` | `Integer` |  |
| `encoding_format` | `String` |  |
| `id` | `String` |  |
| `input` | `Object` |  |
| `input_type` | `String` |  |
| `model` | `String` |  |
| `object` | `String` |  |
| `provider` | `Object` |  |
| `usage` | `Hash` |  |
| `user` | `String` |  |

#### Example: Create

```ruby
embedding = client.Embedding.create({
  "data" => [], # Array
  "input" => "example_input", # Object
  "model" => "example_model", # String
  "object" => "example_object", # String
  "usage" => {}, # Hash
})
```


### Endpoint

Create an instance: `endpoint = client.Endpoint`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `Object` |  |
| `benchmarks` | `Hash` |  |
| `canonical_slug` | `String` |  |
| `context_length` | `Object` |  |
| `created` | `Integer` |  |
| `default_parameters` | `Object` |  |
| `description` | `String` |  |
| `endpoints` | `Array` |  |
| `expiration_date` | `Object` |  |
| `hugging_face_id` | `Object` |  |
| `id` | `String` |  |
| `knowledge_cutoff` | `Object` |  |
| `latency_last_30m` | `Object` |  |
| `links` | `Hash` |  |
| `max_completion_tokens` | `Object` |  |
| `max_prompt_tokens` | `Object` |  |
| `model_id` | `String` |  |
| `model_name` | `String` |  |
| `name` | `String` |  |
| `per_request_limits` | `Object` |  |
| `pricing` | `Hash` |  |
| `provider_name` | `String` |  |
| `quantization` | `Object` |  |
| `reasoning` | `Hash` |  |
| `status` | `Integer` |  |
| `supported_parameters` | `Array` |  |
| `supported_voices` | `Object` |  |
| `supports_implicit_caching` | `Boolean` |  |
| `tag` | `String` |  |
| `throughput_last_30m` | `Object` |  |
| `top_provider` | `Hash` |  |
| `uptime_last_1d` | `Object` |  |
| `uptime_last_30m` | `Object` |  |
| `uptime_last_5m` | `Object` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Endpoint record (raises on error).
endpoint = client.Endpoint.load({ "author" => "author", "slug" => "slug" })
```

#### Example: List

```ruby
# list returns an Array of Endpoint records (raises on error).
endpoints = client.Endpoint.list
```


### Feedback

Create an instance: `feedback = client.Feedback`


### File

Create an instance: `file = client.File`

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
| `created_at` | `String` |  |
| `downloadable` | `Boolean` |  |
| `filename` | `String` |  |
| `id` | `String` |  |
| `mime_type` | `String` |  |
| `size_bytes` | `Integer` |  |
| `type` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the File record (raises on error).
file = client.File.load({ "id" => "file_id" })
```

#### Example: List

```ruby
# list returns an Array of File records (raises on error).
files = client.File.list
```

#### Example: Create

```ruby
file = client.File.create({
  "created_at" => "example_created_at", # String
  "downloadable" => true, # Boolean
  "filename" => "example_filename", # String
  "id" => "example_id", # String
  "mime_type" => "example_mime_type", # String
  "size_bytes" => 1, # Integer
  "type" => "example_type", # String
})
```


### Generation

Create an instance: `generation = client.Generation`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_type` | `Object` |  |
| `app_id` | `Object` |  |
| `cache_discount` | `Object` |  |
| `cancelled` | `Object` |  |
| `created_at` | `String` |  |
| `data_region` | `String` |  |
| `external_user` | `Object` |  |
| `finish_reason` | `Object` |  |
| `generation_time` | `Object` |  |
| `http_referer` | `Object` |  |
| `id` | `String` |  |
| `is_byok` | `Boolean` |  |
| `latency` | `Object` |  |
| `model` | `String` |  |
| `moderation_latency` | `Object` |  |
| `native_finish_reason` | `Object` |  |
| `native_tokens_cached` | `Object` |  |
| `native_tokens_completion` | `Object` |  |
| `native_tokens_completion_images` | `Object` |  |
| `native_tokens_prompt` | `Object` |  |
| `native_tokens_reasoning` | `Object` |  |
| `num_fetches` | `Object` |  |
| `num_input_audio_prompt` | `Object` |  |
| `num_media_completion` | `Object` |  |
| `num_media_prompt` | `Object` |  |
| `num_search_results` | `Object` |  |
| `origin` | `String` |  |
| `preset_id` | `Object` |  |
| `provider_name` | `Object` |  |
| `provider_responses` | `Object` |  |
| `request_id` | `Object` |  |
| `response_cache_source_id` | `Object` |  |
| `router` | `Object` |  |
| `service_tier` | `Object` |  |
| `session_id` | `Object` |  |
| `streamed` | `Object` |  |
| `tokens_completion` | `Object` |  |
| `tokens_prompt` | `Object` |  |
| `total_cost` | `Float` |  |
| `upstream_id` | `Object` |  |
| `upstream_inference_cost` | `Object` |  |
| `usage` | `Float` |  |
| `user_agent` | `Object` |  |
| `web_search_engine` | `Object` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Generation record (raises on error).
generation = client.Generation.load({ "id" => "generation_id" })
```


### GenerationContent

Create an instance: `generation_content = client.GenerationContent`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `Object` |  |
| `output` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the GenerationContent record (raises on error).
generation_content = client.GenerationContent.load()
```


### Guardrail

Create an instance: `guardrail = client.Guardrail`

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
| `allowed_models` | `Object` |  |
| `allowed_providers` | `Object` |  |
| `content_filter_builtins` | `Object` |  |
| `content_filters` | `Object` |  |
| `created_at` | `String` |  |
| `description` | `Object` |  |
| `enforce_zdr` | `Object` |  |
| `enforce_zdr_anthropic` | `Object` |  |
| `enforce_zdr_google` | `Object` |  |
| `enforce_zdr_openai` | `Object` |  |
| `enforce_zdr_other` | `Object` |  |
| `enforce_zdr_xai` | `Object` |  |
| `id` | `String` |  |
| `ignored_models` | `Object` |  |
| `ignored_providers` | `Object` |  |
| `limit_usd` | `Object` |  |
| `name` | `String` |  |
| `reset_interval` | `Object` |  |
| `updated_at` | `Object` |  |
| `workspace_id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Guardrail record (raises on error).
guardrail = client.Guardrail.load({ "id" => "guardrail_id" })
```

#### Example: List

```ruby
# list returns an Array of Guardrail records (raises on error).
guardrails = client.Guardrail.list
```

#### Example: Create

```ruby
guardrail = client.Guardrail.create({
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "name" => "example_name", # String
  "workspace_id" => "example_workspace_id", # String
})
```


### Image

Create an instance: `image = client.Image`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aspect_ratio` | `String` |  |
| `background` | `String` |  |
| `created` | `Integer` |  |
| `data` | `Array` |  |
| `input_references` | `Array` |  |
| `model` | `String` |  |
| `n` | `Integer` |  |
| `output_compression` | `Integer` |  |
| `output_format` | `String` |  |
| `prompt` | `String` |  |
| `provider` | `Hash` |  |
| `quality` | `String` |  |
| `resolution` | `String` |  |
| `seed` | `Integer` |  |
| `size` | `String` |  |
| `stream` | `Boolean` |  |
| `usage` | `Hash` |  |

#### Example: Create

```ruby
image = client.Image.create({
  "created" => 1, # Integer
  "data" => [], # Array
  "model" => "example_model", # String
  "prompt" => "example_prompt", # String
  "usage" => {}, # Hash
})
```


### ImageModelEndpoint

Create an instance: `image_model_endpoint = client.ImageModelEndpoint`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_passthrough_parameters` | `Array` |  |
| `pricing` | `Array` |  |
| `provider_name` | `String` |  |
| `provider_slug` | `String` |  |
| `provider_tag` | `Object` |  |
| `supported_parameters` | `Object` |  |
| `supports_streaming` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of ImageModelEndpoint records (raises on error).
image_model_endpoints = client.ImageModelEndpoint.list
```


### ImageModelsList

Create an instance: `image_models_list = client.ImageModelsList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `Hash` |  |
| `created` | `Integer` |  |
| `description` | `String` |  |
| `endpoints` | `String` |  |
| `id` | `String` |  |
| `name` | `String` |  |
| `supported_parameters` | `Hash` |  |
| `supports_streaming` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of ImageModelsList records (raises on error).
image_models_lists = client.ImageModelsList.list
```


### Key

Create an instance: `key = client.Key`


### ListByokKey

Create an instance: `list_byok_key = client.ListByokKey`


### ListGuardrail

Create an instance: `list_guardrail = client.ListGuardrail`


### ListKeyAssignment

Create an instance: `list_key_assignment = client.ListKeyAssignment`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_by` | `Object` |  |
| `created_at` | `String` |  |
| `guardrail_id` | `String` |  |
| `id` | `String` |  |
| `key_hash` | `String` |  |
| `key_label` | `String` |  |
| `key_name` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ListKeyAssignment records (raises on error).
list_key_assignments = client.ListKeyAssignment.list
```


### ListMemberAssignment

Create an instance: `list_member_assignment = client.ListMemberAssignment`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_by` | `Object` |  |
| `created_at` | `String` |  |
| `guardrail_id` | `String` |  |
| `id` | `String` |  |
| `organization_id` | `String` |  |
| `user_id` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ListMemberAssignment records (raises on error).
list_member_assignments = client.ListMemberAssignment.list
```


### ListObservabilityDestination

Create an instance: `list_observability_destination = client.ListObservabilityDestination`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Array` |  |
| `total_count` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of ListObservabilityDestination records (raises on error).
list_observability_destinations = client.ListObservabilityDestination.list
```


### ListPreset

Create an instance: `list_preset = client.ListPreset`


### ListPresetVersion

Create an instance: `list_preset_version = client.ListPresetVersion`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `Hash` |  |
| `created_at` | `String` |  |
| `creator_id` | `String` |  |
| `id` | `String` |  |
| `preset_id` | `String` |  |
| `system_prompt` | `Object` |  |
| `updated_at` | `String` |  |
| `version` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of ListPresetVersion records (raises on error).
list_preset_versions = client.ListPresetVersion.list
```


### ListWorkspace

Create an instance: `list_workspace = client.ListWorkspace`


### ListWorkspaceBudget

Create an instance: `list_workspace_budget = client.ListWorkspaceBudget`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `id` | `String` |  |
| `limit_usd` | `Float` |  |
| `reset_interval` | `Object` |  |
| `updated_at` | `String` |  |
| `workspace_id` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ListWorkspaceBudget records (raises on error).
list_workspace_budgets = client.ListWorkspaceBudget.list
```


### ListWorkspaceMember

Create an instance: `list_workspace_member = client.ListWorkspaceMember`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `id` | `String` |  |
| `role` | `String` |  |
| `user_id` | `String` |  |
| `workspace_id` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ListWorkspaceMember records (raises on error).
list_workspace_members = client.ListWorkspaceMember.list
```


### Member

Create an instance: `member = client.Member`


### Message

Create an instance: `message = client.Message`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_control` | `Hash` |  |
| `context_management` | `Object` |  |
| `fallbacks` | `Object` |  |
| `max_tokens` | `Integer` |  |
| `messages` | `Object` |  |
| `metadata` | `Hash` |  |
| `model` | `String` |  |
| `models` | `Array` |  |
| `output_config` | `Hash` |  |
| `plugins` | `Array` |  |
| `provider` | `Object` |  |
| `route` | `Object` |  |
| `service_tier` | `String` |  |
| `session_id` | `String` |  |
| `speed` | `Object` |  |
| `stop_sequences` | `Array` |  |
| `stop_server_tools_when` | `Array` |  |
| `stream` | `Boolean` |  |
| `system` | `Object` |  |
| `temperature` | `Float` |  |
| `thinking` | `Object` |  |
| `tool_choice` | `Object` |  |
| `tools` | `Array` |  |
| `top_k` | `Integer` |  |
| `top_p` | `Float` |  |
| `trace` | `Hash` |  |
| `user` | `String` |  |

#### Example: Create

```ruby
message = client.Message.create({
  "cache_control" => {}, # Hash
  "messages" => "example_messages", # Object
  "model" => "example_model", # String
})
```


### Meta

Create an instance: `meta = client.Meta`


### Model

Create an instance: `model = client.Model`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `Hash` |  |
| `benchmarks` | `Hash` |  |
| `canonical_slug` | `String` |  |
| `context_length` | `Object` |  |
| `created` | `Integer` |  |
| `default_parameters` | `Object` |  |
| `description` | `String` |  |
| `expiration_date` | `Object` |  |
| `hugging_face_id` | `Object` |  |
| `id` | `String` |  |
| `knowledge_cutoff` | `Object` |  |
| `links` | `Hash` |  |
| `name` | `String` |  |
| `per_request_limits` | `Object` |  |
| `pricing` | `Hash` |  |
| `reasoning` | `Hash` |  |
| `supported_parameters` | `Array` |  |
| `supported_voices` | `Object` |  |
| `top_provider` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Model record (raises on error).
model = client.Model.load({ "author" => "author", "slug" => "slug" })
```

#### Example: List

```ruby
# list returns an Array of Model records (raises on error).
models = client.Model.list
```


### ModelsCount

Create an instance: `models_count = client.ModelsCount`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `Integer` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ModelsCount record (raises on error).
models_count = client.ModelsCount.load()
```


### ModelsList

Create an instance: `models_list = client.ModelsList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `Hash` |  |
| `benchmarks` | `Hash` |  |
| `canonical_slug` | `String` |  |
| `context_length` | `Object` |  |
| `created` | `Integer` |  |
| `default_parameters` | `Object` |  |
| `description` | `String` |  |
| `expiration_date` | `Object` |  |
| `hugging_face_id` | `Object` |  |
| `id` | `String` |  |
| `knowledge_cutoff` | `Object` |  |
| `links` | `Hash` |  |
| `name` | `String` |  |
| `per_request_limits` | `Object` |  |
| `pricing` | `Hash` |  |
| `reasoning` | `Hash` |  |
| `supported_parameters` | `Array` |  |
| `supported_voices` | `Object` |  |
| `top_provider` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of ModelsList records (raises on error).
models_lists = client.ModelsList.list
```


### OAuth

Create an instance: `o_auth = client.OAuth`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `Integer` |  |
| `callback_url` | `String` |  |
| `code` | `String` |  |
| `code_challenge` | `String` |  |
| `code_challenge_method` | `Object` |  |
| `code_verifier` | `String` |  |
| `created_at` | `String` |  |
| `expires_at` | `Object` |  |
| `id` | `String` |  |
| `key` | `String` |  |
| `key_label` | `String` |  |
| `limit` | `Float` |  |
| `spawn_agent` | `String` |  |
| `spawn_cloud` | `String` |  |
| `usage_limit_type` | `String` |  |
| `user_id` | `Object` |  |
| `workspace_id` | `String` |  |

#### Example: Create

```ruby
o_auth = client.OAuth.create({
  "app_id" => 1, # Integer
  "callback_url" => "example_callback_url", # String
  "code" => "example_code", # String
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "key" => "example_key", # String
  "user_id" => "example_user_id", # Object
})
```


### ObservabilityDestination

Create an instance: `observability_destination = client.ObservabilityDestination`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ObservabilityDestination record (raises on error).
observability_destination = client.ObservabilityDestination.load({ "id" => "observability_destination_id" })
```


### OpenResponsesResult

Create an instance: `open_responses_result = client.OpenResponsesResult`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `background` | `Object` |  |
| `cache_control` | `Hash` |  |
| `debug` | `Hash` |  |
| `frequency_penalty` | `Object` |  |
| `image_config` | `Hash` |  |
| `include` | `Object` |  |
| `input` | `Object` |  |
| `instructions` | `Object` |  |
| `max_output_tokens` | `Object` |  |
| `max_tool_calls` | `Object` |  |
| `metadata` | `Object` |  |
| `modalities` | `Array` |  |
| `model` | `String` |  |
| `models` | `Array` |  |
| `parallel_tool_calls` | `Object` |  |
| `plugins` | `Array` |  |
| `presence_penalty` | `Object` |  |
| `previous_response_id` | `String` |  |
| `prompt` | `Object` |  |
| `prompt_cache_key` | `Object` |  |
| `prompt_cache_options` | `Object` |  |
| `provider` | `Object` |  |
| `reasoning` | `Object` |  |
| `route` | `Object` |  |
| `safety_identifier` | `Object` |  |
| `service_tier` | `Object` |  |
| `session_id` | `String` |  |
| `stop_server_tools_when` | `Array` |  |
| `store` | `Boolean` |  |
| `stream` | `Boolean` |  |
| `temperature` | `Object` |  |
| `text` | `Object` |  |
| `tool_choice` | `Object` |  |
| `tools` | `Array` |  |
| `top_k` | `Integer` |  |
| `top_logprobs` | `Object` |  |
| `top_p` | `Object` |  |
| `trace` | `Hash` |  |
| `truncation` | `Object` |  |
| `user` | `String` |  |

#### Example: Create

```ruby
open_responses_result = client.OpenResponsesResult.create({
  "cache_control" => {}, # Hash
  "prompt" => "example_prompt", # Object
  "prompt_cache_options" => "example_prompt_cache_options", # Object
})
```


### Organization

Create an instance: `organization = client.Organization`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `String` |  |
| `first_name` | `Object` |  |
| `id` | `String` |  |
| `last_name` | `Object` |  |
| `role` | `String` |  |

#### Example: List

```ruby
# list returns an Array of Organization records (raises on error).
organizations = client.Organization.list
```


### Preset

Create an instance: `preset = client.Preset`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `creator_user_id` | `Object` |  |
| `description` | `Object` |  |
| `designated_version` | `Object` |  |
| `designated_version_id` | `Object` |  |
| `id` | `String` |  |
| `name` | `String` |  |
| `slug` | `String` |  |
| `status` | `String` |  |
| `status_updated_at` | `Object` |  |
| `updated_at` | `String` |  |
| `workspace_id` | `Object` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Preset record (raises on error).
preset = client.Preset.load({ "id" => "preset_id" })
```

#### Example: List

```ruby
# list returns an Array of Preset records (raises on error).
presets = client.Preset.list
```


### PresetVersion

Create an instance: `preset_version = client.PresetVersion`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `Hash` |  |
| `created_at` | `String` |  |
| `creator_id` | `String` |  |
| `id` | `String` |  |
| `preset_id` | `String` |  |
| `system_prompt` | `Object` |  |
| `updated_at` | `String` |  |
| `version` | `Integer` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PresetVersion record (raises on error).
preset_version = client.PresetVersion.load({ "id" => "preset_version_id", "slug" => "slug" })
```


### Provider

Create an instance: `provider = client.Provider`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `datacenters` | `Object` |  |
| `headquarters` | `Object` |  |
| `name` | `String` |  |
| `privacy_policy_url` | `Object` |  |
| `slug` | `String` |  |
| `status_page_url` | `Object` |  |
| `terms_of_service_url` | `Object` |  |

#### Example: List

```ruby
# list returns an Array of Provider records (raises on error).
providers = client.Provider.list
```


### Query

Create an instance: `query = client.Query`


### RankingsDaily

Create an instance: `rankings_daily = client.RankingsDaily`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `String` |  |
| `model_permaslug` | `String` |  |
| `total_tokens` | `String` |  |

#### Example: List

```ruby
# list returns an Array of RankingsDaily records (raises on error).
rankings_dailys = client.RankingsDaily.list
```


### Remove

Create an instance: `remove = client.Remove`


### Rerank

Create an instance: `rerank = client.Rerank`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `documents` | `Array` |  |
| `id` | `String` |  |
| `model` | `String` |  |
| `provider` | `String` |  |
| `query` | `String` |  |
| `results` | `Array` |  |
| `top_n` | `Integer` |  |
| `usage` | `Hash` |  |

#### Example: Create

```ruby
rerank = client.Rerank.create({
  "documents" => [], # Array
  "model" => "example_model", # String
  "query" => "example_query", # String
  "results" => [], # Array
})
```


### Response

Create an instance: `response = client.Response`


### Speech

Create an instance: `speech = client.Speech`


### Stt

Create an instance: `stt = client.Stt`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `duration` | `Float` |  |
| `input_audio` | `Hash` |  |
| `language` | `String` |  |
| `model` | `String` |  |
| `provider` | `Hash` |  |
| `response_format` | `String` |  |
| `segments` | `Array` |  |
| `task` | `String` |  |
| `temperature` | `Float` |  |
| `text` | `String` |  |
| `timestamp_granularities` | `Array` |  |
| `usage` | `Hash` |  |
| `words` | `Array` |  |

#### Example: Create

```ruby
stt = client.Stt.create({
  "input_audio" => {}, # Hash
  "model" => "example_model", # String
  "text" => "example_text", # String
})
```


### SubmitGenerationFeedback

Create an instance: `submit_generation_feedback = client.SubmitGenerationFeedback`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `String` |  |
| `comment` | `String` |  |
| `generation_id` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Create

```ruby
submit_generation_feedback = client.SubmitGenerationFeedback.create({
  "category" => "example_category", # String
  "generation_id" => "example_generation_id", # String
  "success" => true, # Boolean
})
```


### Task

Create an instance: `task = client.Task`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `as_of` | `String` |  |
| `classifications` | `Array` |  |
| `macro_categories` | `Array` |  |
| `window_days` | `Integer` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Task record (raises on error).
task = client.Task.load()
```


### Transcription

Create an instance: `transcription = client.Transcription`


### Tts

Create an instance: `tts = client.Tts`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `String` |  |
| `model` | `String` |  |
| `provider` | `Hash` |  |
| `response_format` | `String` |  |
| `speed` | `Float` |  |
| `voice` | `String` |  |

#### Example: Create

```ruby
tts = client.Tts.create({
  "input" => "example_input", # String
  "model" => "example_model", # String
  "voice" => "example_voice", # String
})
```


### UnifiedBenchmark

Create an instance: `unified_benchmark = client.UnifiedBenchmark`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Array` |  |
| `meta` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of UnifiedBenchmark records (raises on error).
unified_benchmarks = client.UnifiedBenchmark.list
```


### UpdateByokKey

Create an instance: `update_byok_key = client.UpdateByokKey`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_models` | `Object` |  |
| `allowed_user_ids` | `Object` |  |
| `disabled` | `Boolean` |  |
| `is_fallback` | `Boolean` |  |
| `key` | `String` |  |
| `name` | `Object` |  |


### UpdateGuardrail

Create an instance: `update_guardrail = client.UpdateGuardrail`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_models` | `Object` |  |
| `allowed_providers` | `Object` |  |
| `content_filter_builtins` | `Object` |  |
| `content_filters` | `Object` |  |
| `description` | `Object` |  |
| `enforce_zdr` | `Object` |  |
| `enforce_zdr_anthropic` | `Object` |  |
| `enforce_zdr_google` | `Object` |  |
| `enforce_zdr_openai` | `Object` |  |
| `enforce_zdr_other` | `Object` |  |
| `enforce_zdr_xai` | `Object` |  |
| `ignored_models` | `Object` |  |
| `ignored_providers` | `Object` |  |
| `limit_usd` | `Object` |  |
| `name` | `String` |  |
| `reset_interval` | `Object` |  |


### UpdateObservabilityDestination

Create an instance: `update_observability_destination = client.UpdateObservabilityDestination`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hashes` | `Object` |  |
| `config` | `Hash` |  |
| `enabled` | `Boolean` |  |
| `filter_rules` | `Object` |  |
| `name` | `String` |  |
| `privacy_mode` | `Boolean` |  |
| `sampling_rate` | `Float` |  |


### UpdateWorkspace

Create an instance: `update_workspace = client.UpdateWorkspace`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `created_by` | `Object` |  |
| `default_image_model` | `Object` |  |
| `default_provider_sort` | `Object` |  |
| `default_text_model` | `Object` |  |
| `description` | `Object` |  |
| `id` | `String` |  |
| `io_logging_api_key_ids` | `Object` |  |
| `io_logging_sampling_rate` | `Float` |  |
| `is_data_discount_logging_enabled` | `Boolean` |  |
| `is_observability_broadcast_enabled` | `Boolean` |  |
| `is_observability_io_logging_enabled` | `Boolean` |  |
| `name` | `String` |  |
| `slug` | `String` |  |
| `updated_at` | `Object` |  |

#### Example: List

```ruby
# list returns an Array of UpdateWorkspace records (raises on error).
update_workspaces = client.UpdateWorkspace.list
```

#### Example: Create

```ruby
update_workspace = client.UpdateWorkspace.create({
  "created_at" => "example_created_at", # String
  "created_by" => "example_created_by", # Object
  "id" => "example_id", # String
  "name" => "example_name", # String
  "slug" => "example_slug", # String
  "updated_at" => "example_updated_at", # Object
})
```


### UpsertWorkspaceBudget

Create an instance: `upsert_workspace_budget = client.UpsertWorkspaceBudget`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `limit_usd` | `Float` |  |


### User

Create an instance: `user = client.User`


### Version

Create an instance: `version = client.Version`


### Video

Create an instance: `video = client.Video`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aspect_ratio` | `String` |  |
| `callback_url` | `String` |  |
| `duration` | `Integer` |  |
| `error` | `String` |  |
| `frame_images` | `Array` |  |
| `generate_audio` | `Boolean` |  |
| `generation_id` | `String` |  |
| `id` | `String` |  |
| `input_references` | `Array` |  |
| `model` | `String` |  |
| `polling_url` | `String` |  |
| `prompt` | `String` |  |
| `provider` | `Hash` |  |
| `resolution` | `String` |  |
| `seed` | `Integer` |  |
| `size` | `String` |  |
| `status` | `String` |  |
| `unsigned_urls` | `Array` |  |
| `usage` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Video record (raises on error).
video = client.Video.load({ "id" => "video_id" })
```

#### Example: Create

```ruby
video = client.Video.create({
  "id" => "example_id", # String
  "model" => "example_model", # String
  "polling_url" => "example_polling_url", # String
  "status" => "example_status", # String
})
```


### VideoGeneration

Create an instance: `video_generation = client.VideoGeneration`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the VideoGeneration record (raises on error).
video_generation = client.VideoGeneration.load({ "id" => "video_generation_id" })
```


### VideoModelsList

Create an instance: `video_models_list = client.VideoModelsList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_passthrough_parameters` | `Array` |  |
| `canonical_slug` | `String` |  |
| `created` | `Integer` |  |
| `description` | `String` |  |
| `generate_audio` | `Object` |  |
| `hugging_face_id` | `Object` |  |
| `id` | `String` |  |
| `name` | `String` |  |
| `pricing_skus` | `Object` |  |
| `seed` | `Object` |  |
| `supported_aspect_ratios` | `Object` |  |
| `supported_durations` | `Object` |  |
| `supported_frame_images` | `Object` |  |
| `supported_resolutions` | `Object` |  |
| `supported_sizes` | `Object` |  |

#### Example: List

```ruby
# list returns an Array of VideoModelsList records (raises on error).
video_models_lists = client.VideoModelsList.list
```


### Workspace

Create an instance: `workspace = client.Workspace`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `created_by` | `Object` |  |
| `default_image_model` | `Object` |  |
| `default_provider_sort` | `Object` |  |
| `default_text_model` | `Object` |  |
| `description` | `Object` |  |
| `id` | `String` |  |
| `io_logging_api_key_ids` | `Object` |  |
| `io_logging_sampling_rate` | `Float` |  |
| `is_data_discount_logging_enabled` | `Boolean` |  |
| `is_observability_broadcast_enabled` | `Boolean` |  |
| `is_observability_io_logging_enabled` | `Boolean` |  |
| `name` | `String` |  |
| `slug` | `String` |  |
| `updated_at` | `Object` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Workspace record (raises on error).
workspace = client.Workspace.load({ "id" => "workspace_id" })
```


### WorkspaceBudget

Create an instance: `workspace_budget = client.WorkspaceBudget`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Zdr

Create an instance: `zdr = client.Zdr`


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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── OpenrouterModels_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`OpenrouterModels_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```ruby
organization = client.Organization
organization.list()

# organization.data_get now returns the organization data from the last list
# organization.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
