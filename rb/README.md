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
  providers = client.Provider.list()
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
provider = client.Provider.list()
puts provider
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

Create an instance: `activity = client.Activity`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byok_usage_inference` | `Float` | BYOK inference cost in USD (external credits spent) |
| `completion_tokens` | `Integer` | Total completion tokens generated |
| `date` | `String` | Date of the activity (YYYY-MM-DD format) |
| `endpoint_id` | `String` | Unique identifier for the endpoint |
| `model` | `String` | Model slug (e.g., "openai/gpt-4.1") |
| `model_permaslug` | `String` | Model permaslug (e.g., "openai/gpt-4.1-2025-04-14") |
| `prompt_tokens` | `Integer` | Total prompt tokens used |
| `provider_name` | `String` | Name of the provider serving this endpoint |
| `reasoning_tokens` | `Integer` | Total reasoning tokens used |
| `requests` | `Integer` | Number of requests made |
| `usage` | `Float` | Total cost in USD (OpenRouter credits spent) |

#### Example: List

```ruby
# list returns an Array of Activity records (raises on error).
activitys = client.Activity.list
```


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
| `byok_usage` | `Float` | Total external BYOK usage (in USD) for the API key |
| `byok_usage_daily` | `Float` | External BYOK usage (in USD) for the current UTC day |
| `byok_usage_monthly` | `Float` | External BYOK usage (in USD) for current UTC month |
| `byok_usage_weekly` | `Float` | External BYOK usage (in USD) for the current UTC week (Monday-Sunday) |
| `created_at` | `String` | ISO 8601 timestamp of when the API key was created |
| `creator_user_id` | `Object` | The user ID of the key creator. |
| `disabled` | `Boolean` | Whether the API key is disabled |
| `expires_at` | `Object` | ISO 8601 UTC timestamp when the API key expires, or null if no expiration |
| `hash` | `String` | Unique hash identifier for the API key |
| `id` | `String` |  |
| `include_byok_in_limit` | `Boolean` | Whether to include external BYOK usage in the credit limit |
| `is_free_tier` | `Boolean` | Whether this is a free tier API key |
| `is_management_key` | `Boolean` | Whether this is a management key |
| `is_provisioning_key` | `Boolean` | Whether this is a management key |
| `label` | `String` | Human-readable label for the API key |
| `limit` | `Object` | Spending limit for the API key in USD |
| `limit_remaining` | `Object` | Remaining spending limit in USD |
| `limit_reset` | `Object` | Type of limit reset for the API key |
| `name` | `String` | Name of the API key |
| `rate_limit` | `Hash` | Legacy rate limit information about a key. |
| `updated_at` | `Object` | ISO 8601 timestamp of when the API key was last updated |
| `usage` | `Float` | Total OpenRouter credit usage (in USD) for the API key |
| `usage_daily` | `Float` | OpenRouter credit usage (in USD) for the current UTC day |
| `usage_monthly` | `Float` | OpenRouter credit usage (in USD) for the current UTC month |
| `usage_weekly` | `Float` | OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday) |
| `workspace_id` | `String` | The workspace ID this API key belongs to. |

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
  "limit" => 1, # Object
  "limit_remaining" => 1, # Object
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
| `app_id` | `Integer` | Stable numeric identifier of the app on OpenRouter. |
| `app_name` | `String` | Public display name of the app. |
| `rank` | `Integer` | 1-based position of the app within this response, per the requested `sort`. |
| `total_requests` | `Integer` | Number of requests attributed to the app inside the date window. |
| `total_tokens` | `String` | Sum of `prompt_tokens + completion_tokens` attributed to the app inside the date window, returned as a decimal string so 64-bit values are not truncated. |

#### Example: List

```ruby
# list returns an Array of AppRanking records (raises on error).
app_rankings = client.AppRanking.list
```


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
| `classifier_dimensions` | `Hash` | Group results by custom classifier tags, breaking down metrics by the specified dimension values. |
| `classifier_filters` | `Hash` | Filter results to generations with specific classifier tag values. |
| `data` | `Array` |  |
| `dimensions` | `Array` |  |
| `filters` | `Array` |  |
| `granularities` | `Array` |  |
| `granularity` | `String` | Time granularity |
| `group_limit` | `Integer` | Maximum rows per distinct combination of dimensions. |
| `limit` | `Integer` | Maximum total rows returned. |
| `metadata` | `Hash` |  |
| `metrics` | `Array` |  |
| `operators` | `Array` |  |
| `order_by` | `Hash` |  |
| `time_range` | `Hash` |  |
| `warnings` | `Array` | Warnings about filter resolution issues (e.g. |

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


### BulkAddWorkspaceMember

Create an instance: `bulk_add_workspace_member = client.BulkAddWorkspaceMember`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `added_count` | `Integer` | Number of workspace memberships created or updated |
| `data` | `Array` | List of added workspace memberships |
| `user_ids` | `Array` | List of user IDs to add to the workspace. |

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
| `assigned_count` | `Integer` | Number of keys successfully assigned |
| `key_hashes` | `Array` | Array of API key hashes to assign to the guardrail |

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
| `assigned_count` | `Integer` | Number of members successfully assigned |
| `member_user_ids` | `Array` | Array of member user IDs to assign to the guardrail |

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
| `removed_count` | `Integer` | Number of members removed |
| `user_ids` | `Array` | List of user IDs to remove from the workspace |

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
| `key_hashes` | `Array` | Array of API key hashes to unassign from the guardrail |
| `unassigned_count` | `Integer` | Number of keys successfully unassigned |

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
| `member_user_ids` | `Array` | Array of member user IDs to unassign from the guardrail |
| `unassigned_count` | `Integer` | Number of members successfully unassigned |

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
| `allowed_api_key_hashes` | `Object` | Optional allowlist of OpenRouter API key hashes (`api_keys.hash`) that may use this credential. |
| `allowed_models` | `Object` | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `Object` | Optional allowlist of user IDs that may use this credential. |
| `created_at` | `String` | ISO timestamp of when the credential was created. |
| `disabled` | `Boolean` | Whether this credential is currently disabled. |
| `id` | `String` | Stable public identifier for this BYOK credential. |
| `is_fallback` | `Boolean` | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `String` | The raw provider API key or credential. |
| `label` | `String` | Short masked snippet of the key (e.g. |
| `name` | `Object` | Optional human-readable name for the credential. |
| `provider` | `String` | The upstream provider this credential authenticates against, as a lowercase slug (e.g. |
| `sort_order` | `Integer` | Position within the provider — credentials are tried in ascending sort order. |
| `workspace_id` | `String` | ID of the workspace this credential belongs to. |

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
  "allowed_api_key_hashes" => [], # Object
  "allowed_models" => [], # Object
  "allowed_user_ids" => [], # Object
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
| `cache_control` | `Hash` | Enable automatic prompt caching. |
| `choices` | `Array` | List of completion choices |
| `created` | `Integer` | Unix timestamp of creation |
| `debug` | `Hash` | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `Object` | Frequency penalty (-2.0 to 2.0) |
| `id` | `String` | Unique completion identifier |
| `image_config` | `Hash` | Provider-specific image configuration options. |
| `logit_bias` | `Object` | Token logit bias adjustments |
| `logprobs` | `Object` | Return log probabilities |
| `max_completion_tokens` | `Object` | Maximum tokens in completion |
| `max_tokens` | `Object` | Maximum tokens (deprecated, use max_completion_tokens). |
| `messages` | `Array` | List of messages for the conversation |
| `metadata` | `Hash` | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `Object` | Minimum probability threshold relative to the most likely token. |
| `modalities` | `Array` | Output modalities for the response. |
| `model` | `String` | Model used for completion |
| `models` | `Array` | Models to use for completion |
| `object` | `String` |  |
| `openrouter_metadata` | `Hash` |  |
| `parallel_tool_calls` | `Object` | Whether to enable parallel function calling during tool use. |
| `plugins` | `Array` | Plugins you want to enable for this request, including their settings. |
| `prediction` | `Object` | Static predicted output content. |
| `presence_penalty` | `Object` | Presence penalty (-2.0 to 2.0) |
| `prompt_cache_key` | `Object` |  |
| `prompt_cache_options` | `Object` | Request-level prompt-cache controls. |
| `provider` | `Object` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `Hash` | Configuration options for reasoning models |
| `reasoning_effort` | `Object` | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `Object` | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `Object` | Response format configuration |
| `route` | `Object` | **DEPRECATED** Use providers.sort.partition instead. |
| `seed` | `Object` | Random seed for deterministic outputs |
| `service_tier` | `Object` | The service tier used by the upstream provider for this request |
| `session_id` | `String` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop` | `Object` | Stop sequences (up to 4) |
| `stop_server_tools_when` | `Array` | Stop conditions for the server-tool agent loop. |
| `stream` | `Boolean` | Enable streaming response |
| `stream_options` | `Object` | Streaming configuration options |
| `system_fingerprint` | `Object` | System fingerprint |
| `temperature` | `Object` | Sampling temperature (0-2) |
| `tool_choice` | `Object` | Tool choice configuration |
| `tools` | `Array` | Available tools for function calling |
| `top_a` | `Object` | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `Object` | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `Object` | Number of top log probabilities to return (0-20) |
| `top_p` | `Object` | Nucleus sampling parameter (0-1) |
| `trace` | `Hash` | Metadata for observability and tracing. |
| `usage` | `Hash` | Token usage statistics |
| `user` | `String` | Unique user identifier |

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
  "prediction" => {}, # Object
  "prompt_cache_options" => {}, # Object
  "system_fingerprint" => "example_system_fingerprint", # Object
  "usage" => {}, # Hash
})
```


### Completion

Create an instance: `completion = client.Completion`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_control` | `Hash` | Enable automatic prompt caching. |
| `debug` | `Hash` | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `Object` | Frequency penalty (-2.0 to 2.0) |
| `image_config` | `Hash` | Provider-specific image configuration options. |
| `logit_bias` | `Object` | Token logit bias adjustments |
| `logprobs` | `Object` | Return log probabilities |
| `max_completion_tokens` | `Object` | Maximum tokens in completion |
| `max_tokens` | `Object` | Maximum tokens (deprecated, use max_completion_tokens). |
| `messages` | `Array` | List of messages for the conversation |
| `metadata` | `Hash` | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `Object` | Minimum probability threshold relative to the most likely token. |
| `modalities` | `Array` | Output modalities for the response. |
| `model` | `String` | Model to use for completion |
| `models` | `Array` | Models to use for completion |
| `parallel_tool_calls` | `Object` | Whether to enable parallel function calling during tool use. |
| `plugins` | `Array` | Plugins you want to enable for this request, including their settings. |
| `prediction` | `Object` | Static predicted output content. |
| `presence_penalty` | `Object` | Presence penalty (-2.0 to 2.0) |
| `prompt_cache_key` | `Object` |  |
| `prompt_cache_options` | `Object` | Request-level prompt-cache controls. |
| `provider` | `Object` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `Hash` | Configuration options for reasoning models |
| `reasoning_effort` | `Object` | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `Object` | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `Object` | Response format configuration |
| `route` | `Object` | **DEPRECATED** Use providers.sort.partition instead. |
| `seed` | `Object` | Random seed for deterministic outputs |
| `service_tier` | `Object` | The service tier to use for processing this request. |
| `session_id` | `String` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop` | `Object` | Stop sequences (up to 4) |
| `stop_server_tools_when` | `Array` | Stop conditions for the server-tool agent loop. |
| `stream` | `Boolean` | Enable streaming response |
| `stream_options` | `Object` | Streaming configuration options |
| `temperature` | `Object` | Sampling temperature (0-2) |
| `tool_choice` | `Object` | Tool choice configuration |
| `tools` | `Array` | Available tools for function calling |
| `top_a` | `Object` | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `Object` | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `Object` | Number of top log probabilities to return (0-20) |
| `top_p` | `Object` | Nucleus sampling parameter (0-1) |
| `trace` | `Hash` | Metadata for observability and tracing. |
| `user` | `String` | Unique user identifier |

#### Example: Create

```ruby
completion = client.Completion.create({
  "slug" => "example_slug", # String
  "cache_control" => {}, # Hash
  "messages" => [], # Array
  "prediction" => {}, # Object
  "prompt_cache_options" => {}, # Object
})
```


### CreateObservabilityDestination

Create an instance: `create_observability_destination = client.CreateObservabilityDestination`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hashes` | `Object` | Optional allowlist of OpenRouter API key hashes whose traffic is forwarded. |
| `config` | `Hash` | Provider-specific configuration. |
| `enabled` | `Boolean` | Whether this destination should be enabled immediately. |
| `filter_rules` | `Object` | Optional structured filter rules controlling which events are forwarded. |
| `name` | `String` | Human-readable name for the destination. |
| `privacy_mode` | `Boolean` | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `Float` | Sampling rate between 0.0001 and 1 (1 = 100%). |
| `type` | `String` | The destination type. |
| `workspace_id` | `String` | Optional workspace ID. |

#### Example: Create

```ruby
create_observability_destination = client.CreateObservabilityDestination.create({
  "config" => {}, # Hash
  "filter_rules" => {}, # Object
  "name" => "example_name", # String
  "type" => "example_type", # String
})
```


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
| `total_credits` | `Float` | Total credits purchased |
| `total_usage` | `Float` | Total credits used |

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


### Embedding

Create an instance: `embedding = client.Embedding`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Array` | List of embedding objects |
| `dimensions` | `Integer` | The number of dimensions for the output embeddings |
| `encoding_format` | `String` | The format of the output embeddings |
| `id` | `String` | Unique identifier for the embeddings response |
| `input` | `Object` | Text, token, or multimodal input(s) to embed |
| `input_type` | `String` | The type of input (e.g. |
| `model` | `String` | The model used for embeddings |
| `object` | `String` |  |
| `provider` | `Object` |  |
| `usage` | `Hash` | Token usage statistics |
| `user` | `String` | A unique identifier for the end-user |

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
| `architecture` | `Object` | Model architecture information |
| `benchmarks` | `Hash` | Third-party benchmark rankings for this model. |
| `canonical_slug` | `String` | Canonical slug for the model |
| `context_length` | `Object` | Maximum context length in tokens |
| `created` | `Integer` | Unix timestamp of when the model was created |
| `default_parameters` | `Object` | Default parameters for this model |
| `description` | `String` | Description of the model |
| `endpoints` | `Array` | List of available endpoints for this model |
| `expiration_date` | `Object` | The date after which the model may be removed. |
| `hugging_face_id` | `Object` | Hugging Face model identifier, if applicable |
| `id` | `String` | Unique identifier for the model |
| `knowledge_cutoff` | `Object` | The date up to which the model was trained on data. |
| `links` | `Hash` | Related API endpoints and resources for this model. |
| `name` | `String` | Display name of the model |
| `per_request_limits` | `Object` | Per-request token limits |
| `pricing` | `Hash` | Pricing information for the model |
| `reasoning` | `Hash` | Reasoning effort configuration. |
| `supported_parameters` | `Array` | List of supported parameters for this model |
| `supported_voices` | `Object` | List of supported voice identifiers for TTS models. |
| `top_provider` | `Hash` | Information about the top provider for this model |

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
| `api_type` | `Object` | Type of API used for the generation |
| `app_id` | `Object` | ID of the app that made the request |
| `cache_discount` | `Object` | Discount applied due to caching |
| `cancelled` | `Object` | Whether the generation was cancelled |
| `created_at` | `String` | ISO 8601 timestamp of when the generation was created |
| `data_region` | `String` | The data region this generation was routed through. |
| `external_user` | `Object` | External user identifier |
| `finish_reason` | `Object` | Reason the generation finished |
| `generation_time` | `Object` | Time taken for generation in milliseconds |
| `http_referer` | `Object` | Referer header from the request |
| `id` | `String` | Unique identifier for the generation |
| `is_byok` | `Boolean` | Whether this used bring-your-own-key |
| `latency` | `Object` | Total latency in milliseconds |
| `model` | `String` | Model used for the generation |
| `moderation_latency` | `Object` | Moderation latency in milliseconds |
| `native_finish_reason` | `Object` | Native finish reason as reported by provider |
| `native_tokens_cached` | `Object` | Native cached tokens as reported by provider |
| `native_tokens_completion` | `Object` | Native completion tokens as reported by provider |
| `native_tokens_completion_images` | `Object` | Native completion image tokens as reported by provider |
| `native_tokens_prompt` | `Object` | Native prompt tokens as reported by provider |
| `native_tokens_reasoning` | `Object` | Native reasoning tokens as reported by provider |
| `num_fetches` | `Object` | Number of web fetches performed |
| `num_input_audio_prompt` | `Object` | Number of audio inputs in the prompt |
| `num_media_completion` | `Object` | Number of media items in the completion |
| `num_media_prompt` | `Object` | Number of media items in the prompt |
| `num_search_results` | `Object` | Number of search results included |
| `origin` | `String` | Origin URL of the request |
| `preset_id` | `Object` | ID of the preset used for this generation, null if no preset was used |
| `provider_name` | `Object` | Name of the provider that served the request |
| `provider_responses` | `Object` | List of provider responses for this generation, including fallback attempts |
| `request_id` | `Object` | Unique identifier grouping all generations from a single API request |
| `response_cache_source_id` | `Object` | If this generation was served from response cache, contains the original generation ID. |
| `router` | `Object` | Router used for the request (e.g., openrouter/auto) |
| `service_tier` | `Object` | Service tier the upstream provider reported running this request on, or null if it did not report one. |
| `session_id` | `Object` | Session identifier grouping multiple generations in the same session |
| `streamed` | `Object` | Whether the response was streamed |
| `tokens_completion` | `Object` | Number of tokens in the completion |
| `tokens_prompt` | `Object` | Number of tokens in the prompt |
| `total_cost` | `Float` | Total cost of the generation in USD |
| `upstream_id` | `Object` | Upstream provider's identifier for this generation |
| `upstream_inference_cost` | `Object` | Cost charged by the upstream provider |
| `usage` | `Float` | Usage amount in USD |
| `user_agent` | `Object` | User-Agent header from the request |
| `web_search_engine` | `Object` | The resolved web search engine used for this generation (e.g. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Generation record (raises on error).
generation = client.Generation.load({ "id" => "generation_id" })
```


### GenerationContentData

Create an instance: `generation_content_data = client.GenerationContentData`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `Object` | The input to the generation — either a prompt string or an array of messages |
| `output` | `Hash` | The output from the generation |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the GenerationContentData record (raises on error).
generation_content_data = client.GenerationContentData.load({ "id" => "generation_content_data_id" })
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
| `allowed_models` | `Object` | Array of model canonical_slugs (immutable identifiers) |
| `allowed_providers` | `Object` | List of allowed provider IDs |
| `content_filter_builtins` | `Object` | Builtin content filters applied to requests. |
| `content_filters` | `Object` | Custom regex content filters applied to request messages |
| `created_at` | `String` | ISO 8601 timestamp of when the guardrail was created |
| `description` | `Object` | Description of the guardrail |
| `enforce_zdr` | `Object` | Deprecated. |
| `enforce_zdr_anthropic` | `Object` | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `Object` | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `Object` | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `Object` | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `Object` | Whether to enforce zero data retention for xAI models. |
| `id` | `String` | Unique identifier for the guardrail |
| `ignored_models` | `Object` | Array of model canonical_slugs to exclude from routing |
| `ignored_providers` | `Object` | List of provider IDs to exclude from routing |
| `limit_usd` | `Object` | Spending limit in USD |
| `name` | `String` | Name of the guardrail |
| `reset_interval` | `Object` | Interval at which the limit resets (daily, weekly, monthly) |
| `updated_at` | `Object` | ISO 8601 timestamp of when the guardrail was last updated |
| `workspace_id` | `String` | The workspace ID this guardrail belongs to. |

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
| `aspect_ratio` | `String` | Normalized aspect ratio of the generated image. |
| `background` | `String` | Background treatment. |
| `created` | `Integer` | Unix timestamp (seconds) when the image was generated |
| `data` | `Array` | Generated images |
| `input_references` | `Array` | Reference images to guide image-to-image generation, as base64 data URLs or HTTP(S) URLs. |
| `model` | `String` | The image generation model to use |
| `n` | `Integer` | Number of images to generate (1-10). |
| `output_compression` | `Integer` | Compression level (0-100) for webp/jpeg output. |
| `output_format` | `String` | Encoding of the returned image bytes. |
| `prompt` | `String` | Text description of the desired image |
| `provider` | `Hash` | Provider routing preferences and provider-specific passthrough configuration. |
| `quality` | `String` | Rendering quality. |
| `resolution` | `String` | Normalized resolution tier of the generated image. |
| `seed` | `Integer` | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `String` | Optional. |
| `stream` | `Boolean` | If true, partial images are streamed as SSE events as they become available. |
| `usage` | `Hash` | Token and cost usage for the image generation request, when available |

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
| `allowed_passthrough_parameters` | `Array` | Provider-specific options accepted under provider.options[provider_slug]. |
| `pricing` | `Array` | Billable pricing lines for this endpoint. |
| `provider_name` | `String` | Provider display name |
| `provider_slug` | `String` | Provider slug |
| `provider_tag` | `Object` | Provider tag for request-side selection |
| `supported_parameters` | `Object` |  |
| `supports_streaming` | `Boolean` | Whether this endpoint supports native SSE streaming (`stream: true` in the request). |

#### Example: List

```ruby
# list returns an Array of ImageModelEndpoint records (raises on error).
image_model_endpoints = client.ImageModelEndpoint.list
```


### ImageModelListItem

Create an instance: `image_model_list_item = client.ImageModelListItem`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `Hash` |  |
| `created` | `Integer` | Unix timestamp (seconds) of when the model was created |
| `description` | `String` |  |
| `endpoints` | `String` | Relative URL to the full per-endpoint records for this model |
| `id` | `String` | Model slug |
| `name` | `String` | Display name |
| `supported_parameters` | `Hash` | Union of supported parameters across every endpoint of this model. |
| `supports_streaming` | `Boolean` | Whether any endpoint of this model supports native SSE streaming on the dedicated Image API (i.e. |

#### Example: List

```ruby
# list returns an Array of ImageModelListItem records (raises on error).
image_model_list_items = client.ImageModelListItem.list
```


### Key

Create an instance: `key = client.Key`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_by` | `Object` | User ID of who made the assignment |
| `created_at` | `String` | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `String` | ID of the guardrail |
| `id` | `String` | Unique identifier for the assignment |
| `key_hash` | `String` | Hash of the assigned API key |
| `key_label` | `String` | Label of the API key |
| `key_name` | `String` | Name of the API key |

#### Example: List

```ruby
# list returns an Array of Key records (raises on error).
keys = client.Key.list
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
| `data` | `Array` | List of observability destinations. |
| `total_count` | `Integer` | Total number of destinations matching the filters. |

#### Example: List

```ruby
# list returns an Array of ListObservabilityDestination records (raises on error).
list_observability_destinations = client.ListObservabilityDestination.list
```


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


### Member

Create an instance: `member = client.Member`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_by` | `Object` | User ID of who made the assignment |
| `created_at` | `String` | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `String` | ID of the guardrail |
| `id` | `String` | Unique identifier for the assignment |
| `organization_id` | `String` | Organization ID |
| `user_id` | `String` | Clerk user ID of the assigned member |

#### Example: List

```ruby
# list returns an Array of Member records (raises on error).
members = client.Member.list
```


### Message

Create an instance: `message = client.Message`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_control` | `Hash` | Enable automatic prompt caching. |
| `context_management` | `Object` |  |
| `fallbacks` | `Object` | Fallback models to try if the primary model fails or refuses, in order. |
| `max_tokens` | `Integer` |  |
| `messages` | `Object` |  |
| `metadata` | `Hash` |  |
| `model` | `String` |  |
| `models` | `Array` |  |
| `output_config` | `Hash` | Configuration for controlling output behavior. |
| `plugins` | `Array` | Plugins you want to enable for this request, including their settings. |
| `provider` | `Object` | When multiple model providers are available, optionally indicate your routing preference. |
| `route` | `Object` | **DEPRECATED** Use providers.sort.partition instead. |
| `service_tier` | `String` |  |
| `session_id` | `String` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `speed` | `Object` |  |
| `stop_sequences` | `Array` |  |
| `stop_server_tools_when` | `Array` | Stop conditions for the server-tool agent loop. |
| `stream` | `Boolean` |  |
| `system` | `Object` |  |
| `temperature` | `Float` |  |
| `thinking` | `Object` |  |
| `tool_choice` | `Object` |  |
| `tools` | `Array` |  |
| `top_k` | `Integer` |  |
| `top_p` | `Float` |  |
| `trace` | `Hash` | Metadata for observability and tracing. |
| `user` | `String` | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

#### Example: Create

```ruby
message = client.Message.create({
  "cache_control" => {}, # Hash
  "messages" => [], # Object
  "model" => "example_model", # String
})
```


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
| `architecture` | `Hash` | Model architecture information |
| `benchmarks` | `Hash` | Third-party benchmark rankings for this model. |
| `canonical_slug` | `String` | Canonical slug for the model |
| `context_length` | `Object` | Maximum context length in tokens |
| `created` | `Integer` | Unix timestamp of when the model was created |
| `default_parameters` | `Object` | Default parameters for this model |
| `description` | `String` | Description of the model |
| `expiration_date` | `Object` | The date after which the model may be removed. |
| `hugging_face_id` | `Object` | Hugging Face model identifier, if applicable |
| `id` | `String` | Unique identifier for the model |
| `knowledge_cutoff` | `Object` | The date up to which the model was trained on data. |
| `links` | `Hash` | Related API endpoints and resources for this model. |
| `name` | `String` | Display name of the model |
| `per_request_limits` | `Object` | Per-request token limits |
| `pricing` | `Hash` | Pricing information for the model |
| `reasoning` | `Hash` | Reasoning effort configuration. |
| `supported_parameters` | `Array` | List of supported parameters for this model |
| `supported_voices` | `Object` | List of supported voice identifiers for TTS models. |
| `top_provider` | `Hash` | Information about the top provider for this model |

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
| `count` | `Integer` | Total number of available models |

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
| `architecture` | `Hash` | Model architecture information |
| `benchmarks` | `Hash` | Third-party benchmark rankings for this model. |
| `canonical_slug` | `String` | Canonical slug for the model |
| `context_length` | `Object` | Maximum context length in tokens |
| `created` | `Integer` | Unix timestamp of when the model was created |
| `default_parameters` | `Object` | Default parameters for this model |
| `description` | `String` | Description of the model |
| `expiration_date` | `Object` | The date after which the model may be removed. |
| `hugging_face_id` | `Object` | Hugging Face model identifier, if applicable |
| `id` | `String` | Unique identifier for the model |
| `knowledge_cutoff` | `Object` | The date up to which the model was trained on data. |
| `links` | `Hash` | Related API endpoints and resources for this model. |
| `name` | `String` | Display name of the model |
| `per_request_limits` | `Object` | Per-request token limits |
| `pricing` | `Hash` | Pricing information for the model |
| `reasoning` | `Hash` | Reasoning effort configuration. |
| `supported_parameters` | `Array` | List of supported parameters for this model |
| `supported_voices` | `Object` | List of supported voice identifiers for TTS models. |
| `top_provider` | `Hash` | Information about the top provider for this model |

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
| `app_id` | `Integer` | The application ID associated with this auth code |
| `callback_url` | `String` | The callback URL to redirect to after authorization. |
| `code` | `String` | The authorization code received from the OAuth redirect |
| `code_challenge` | `String` | PKCE code challenge for enhanced security |
| `code_challenge_method` | `Object` | The method used to generate the code challenge |
| `code_verifier` | `String` | The code verifier if code_challenge was used in the authorization request |
| `created_at` | `String` | ISO 8601 timestamp of when the auth code was created |
| `expires_at` | `Object` | Optional expiration time for the API key to be created |
| `id` | `String` | The authorization code ID to use in the exchange request |
| `key` | `String` | The API key to use for OpenRouter requests |
| `key_label` | `String` | Optional custom label for the API key. |
| `limit` | `Float` | Credit limit for the API key to be created |
| `spawn_agent` | `String` | Agent identifier for spawn telemetry |
| `spawn_cloud` | `String` | Cloud identifier for spawn telemetry |
| `usage_limit_type` | `String` | Optional credit limit reset interval. |
| `user_id` | `Object` | User ID associated with the API key |
| `workspace_id` | `String` | Optional workspace ID to associate the API key with |

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
| `id` | `String` |  |

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
| `cache_control` | `Hash` | Enable automatic prompt caching. |
| `debug` | `Hash` | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `Object` |  |
| `image_config` | `Hash` | Provider-specific image configuration options. |
| `include` | `Object` |  |
| `input` | `Object` | Input for a response request - can be a string or array of items |
| `instructions` | `Object` |  |
| `max_output_tokens` | `Object` |  |
| `max_tool_calls` | `Object` |  |
| `metadata` | `Object` | Metadata key-value pairs for the request. |
| `modalities` | `Array` | Output modalities for the response. |
| `model` | `String` |  |
| `models` | `Array` |  |
| `parallel_tool_calls` | `Object` |  |
| `plugins` | `Array` | Plugins you want to enable for this request, including their settings. |
| `presence_penalty` | `Object` |  |
| `previous_response_id` | `String` | Not supported. |
| `prompt` | `Object` |  |
| `prompt_cache_key` | `Object` |  |
| `prompt_cache_options` | `Object` | Request-level prompt-cache controls. |
| `provider` | `Object` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `Object` | Configuration for reasoning mode in the response |
| `route` | `Object` | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `Object` |  |
| `service_tier` | `Object` |  |
| `session_id` | `String` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop_server_tools_when` | `Array` | Stop conditions for the server-tool agent loop. |
| `store` | `Boolean` |  |
| `stream` | `Boolean` |  |
| `temperature` | `Object` |  |
| `text` | `Object` | Text output configuration including format and verbosity |
| `tool_choice` | `Object` |  |
| `tools` | `Array` |  |
| `top_k` | `Integer` |  |
| `top_logprobs` | `Object` |  |
| `top_p` | `Object` |  |
| `trace` | `Hash` | Metadata for observability and tracing. |
| `truncation` | `Object` |  |
| `user` | `String` | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

#### Example: Create

```ruby
open_responses_result = client.OpenResponsesResult.create({
  "cache_control" => {}, # Hash
  "prompt" => {}, # Object
  "prompt_cache_options" => {}, # Object
})
```


### Organization

Create an instance: `organization = client.Organization`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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
| `designated_version` | `Object` | A specific version of a preset, containing config and optional system prompt. |
| `designated_version_id` | `Object` |  |
| `id` | `String` |  |
| `name` | `String` |  |
| `slug` | `String` |  |
| `status` | `String` | The status of a preset. |
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
| `datacenters` | `Object` | ISO 3166-1 Alpha-2 country codes of the provider datacenter locations |
| `headquarters` | `Object` | ISO 3166-1 Alpha-2 country code of the provider headquarters |
| `name` | `String` | Display name of the provider |
| `privacy_policy_url` | `Object` | URL to the provider's privacy policy |
| `slug` | `String` | URL-friendly identifier for the provider |
| `status_page_url` | `Object` | URL to the provider's status page |
| `terms_of_service_url` | `Object` | URL to the provider's terms of service |

#### Example: List

```ruby
# list returns an Array of Provider records (raises on error).
providers = client.Provider.list
```


### RankingsDaily

Create an instance: `rankings_daily = client.RankingsDaily`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `String` | UTC calendar date the row is aggregated over (YYYY-MM-DD). |
| `model_permaslug` | `String` | Model variant permaslug (e.g. |
| `total_tokens` | `String` | Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated. |

#### Example: List

```ruby
# list returns an Array of RankingsDaily records (raises on error).
rankings_dailys = client.RankingsDaily.list
```


### Rerank

Create an instance: `rerank = client.Rerank`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `documents` | `Array` | The list of documents to rerank. |
| `id` | `String` | Unique identifier for the rerank response (ORID format) |
| `model` | `String` | The model used for reranking |
| `provider` | `String` | The provider that served the rerank request |
| `query` | `String` | The search query to rerank documents against |
| `results` | `Array` | List of rerank results sorted by relevance |
| `top_n` | `Integer` | Number of most relevant documents to return |
| `usage` | `Hash` | Usage statistics |

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

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `background` | `Object` |  |
| `cache_control` | `Hash` | Enable automatic prompt caching. |
| `debug` | `Hash` | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `Object` |  |
| `image_config` | `Hash` | Provider-specific image configuration options. |
| `include` | `Object` |  |
| `input` | `Object` | Input for a response request - can be a string or array of items |
| `instructions` | `Object` |  |
| `max_output_tokens` | `Object` |  |
| `max_tool_calls` | `Object` |  |
| `metadata` | `Object` | Metadata key-value pairs for the request. |
| `modalities` | `Array` | Output modalities for the response. |
| `model` | `String` |  |
| `models` | `Array` |  |
| `parallel_tool_calls` | `Object` |  |
| `plugins` | `Array` | Plugins you want to enable for this request, including their settings. |
| `presence_penalty` | `Object` |  |
| `previous_response_id` | `String` | Not supported. |
| `prompt` | `Object` |  |
| `prompt_cache_key` | `Object` |  |
| `prompt_cache_options` | `Object` | Request-level prompt-cache controls. |
| `provider` | `Object` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `Object` | Configuration for reasoning mode in the response |
| `route` | `Object` | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `Object` |  |
| `service_tier` | `Object` |  |
| `session_id` | `String` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop_server_tools_when` | `Array` | Stop conditions for the server-tool agent loop. |
| `store` | `Boolean` |  |
| `stream` | `Boolean` |  |
| `temperature` | `Object` |  |
| `text` | `Object` | Text output configuration including format and verbosity |
| `tool_choice` | `Object` |  |
| `tools` | `Array` |  |
| `top_k` | `Integer` |  |
| `top_logprobs` | `Object` |  |
| `top_p` | `Object` |  |
| `trace` | `Hash` | Metadata for observability and tracing. |
| `truncation` | `Object` |  |
| `user` | `String` | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

#### Example: Create

```ruby
response = client.Response.create({
  "slug" => "example_slug", # String
  "cache_control" => {}, # Hash
  "prompt" => {}, # Object
  "prompt_cache_options" => {}, # Object
})
```


### Stt

Create an instance: `stt = client.Stt`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `duration` | `Float` | Duration of the input audio in seconds, present when response_format is verbose_json |
| `input_audio` | `Hash` | Base64-encoded audio to transcribe |
| `language` | `String` | Detected or forced language, present when response_format is verbose_json |
| `model` | `String` | STT model identifier |
| `provider` | `Hash` | Provider-specific passthrough configuration |
| `response_format` | `String` | Output format. |
| `segments` | `Array` | Timestamped transcript segments, present when response_format is verbose_json |
| `task` | `String` | The task performed, present when response_format is verbose_json |
| `temperature` | `Float` | Sampling temperature for transcription |
| `text` | `String` | The transcribed text |
| `timestamp_granularities` | `Array` | Timestamp detail levels to include when response_format is "verbose_json". |
| `usage` | `Hash` | Aggregated usage statistics for the request |
| `words` | `Array` | Timestamped words, present when the provider returns word-level timestamps |

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
| `category` | `String` | The category of feedback being reported |
| `comment` | `String` | An optional free-text comment describing the feedback |
| `generation_id` | `String` | The generation to submit feedback on |
| `success` | `Boolean` | Whether the feedback was recorded |

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
| `as_of` | `String` | UTC date (YYYY-MM-DD) of the window upper bound (yesterday). |
| `classifications` | `Array` | Per-task classification market-share data, sorted by usage_share descending. |
| `macro_categories` | `Array` | Aggregate market-share data per macro-category (code, data, agent, general). |
| `window_days` | `Integer` | Number of trailing days covered by this snapshot. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Task record (raises on error).
task = client.Task.load()
```


### Tts

Create an instance: `tts = client.Tts`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `String` | Text to synthesize |
| `model` | `String` | TTS model identifier |
| `provider` | `Hash` | Provider-specific passthrough configuration |
| `response_format` | `String` | Audio output format |
| `speed` | `Float` | Playback speed multiplier. |
| `voice` | `String` | Voice identifier (provider-specific). |

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
| `allowed_models` | `Object` | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `Object` | Optional allowlist of user IDs that may use this credential. |
| `disabled` | `Boolean` | Whether this credential is disabled. |
| `id` | `String` |  |
| `is_fallback` | `Boolean` | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `String` | A new raw provider API key to rotate the credential in-place. |
| `name` | `Object` | Optional human-readable name for the credential. |


### UpdateGuardrail

Create an instance: `update_guardrail = client.UpdateGuardrail`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_models` | `Object` | Array of model identifiers (slug or canonical_slug accepted) |
| `allowed_providers` | `Object` | New list of allowed provider IDs |
| `content_filter_builtins` | `Object` | Builtin content filters to apply. |
| `content_filters` | `Object` | Custom regex content filters to apply. |
| `description` | `Object` | New description for the guardrail |
| `enforce_zdr` | `Object` | Deprecated. |
| `enforce_zdr_anthropic` | `Object` | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `Object` | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `Object` | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `Object` | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `Object` | Whether to enforce zero data retention for xAI models. |
| `id` | `String` |  |
| `ignored_models` | `Object` | Array of model identifiers to exclude from routing (slug or canonical_slug accepted) |
| `ignored_providers` | `Object` | List of provider IDs to exclude from routing |
| `limit_usd` | `Object` | New spending limit in USD |
| `name` | `String` | New name for the guardrail |
| `reset_interval` | `Object` | Interval at which the limit resets (daily, weekly, monthly) |


### UpdateObservabilityDestination

Create an instance: `update_observability_destination = client.UpdateObservabilityDestination`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hashes` | `Object` | Optional allowlist of OpenRouter API key hashes. |
| `config` | `Hash` | Provider-specific configuration fields to update. |
| `enabled` | `Boolean` | Whether the destination is enabled. |
| `filter_rules` | `Object` |  |
| `id` | `String` |  |
| `name` | `String` | Human-readable name for the destination. |
| `privacy_mode` | `Boolean` | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `Float` | Sampling rate between 0.0001 and 1 (1 = 100%). |


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
| `created_at` | `String` | ISO 8601 timestamp of when the workspace was created |
| `created_by` | `Object` | User ID of the workspace creator |
| `default_image_model` | `Object` | Default image model for this workspace |
| `default_provider_sort` | `Object` | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `Object` | Default text model for this workspace |
| `description` | `Object` | Description of the workspace |
| `id` | `String` | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `Object` | Optional array of API key IDs to filter I/O logging |
| `io_logging_sampling_rate` | `Float` | Sampling rate for I/O logging (0.0001-1) |
| `is_data_discount_logging_enabled` | `Boolean` | Whether data discount logging is enabled |
| `is_observability_broadcast_enabled` | `Boolean` | Whether broadcast is enabled |
| `is_observability_io_logging_enabled` | `Boolean` | Whether private logging is enabled |
| `name` | `String` | Name for the new workspace |
| `slug` | `String` | URL-friendly slug (lowercase alphanumeric segments separated by single hyphens, no leading/trailing hyphens) |
| `updated_at` | `Object` | ISO 8601 timestamp of when the workspace was last updated |

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
| `id` | `String` |  |
| `limit_usd` | `Float` | Spending limit in USD. |


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
| `aspect_ratio` | `String` | Aspect ratio of the generated video |
| `callback_url` | `String` | URL to receive a webhook notification when the video generation job completes. |
| `duration` | `Integer` | Duration of the generated video in seconds |
| `error` | `String` |  |
| `frame_images` | `Array` | Images to use as the first and/or last frame of the generated video. |
| `generate_audio` | `Boolean` | Whether to generate audio alongside the video. |
| `generation_id` | `String` | The generation ID associated with this video generation job. |
| `id` | `String` |  |
| `input_references` | `Array` | Reference assets to guide video generation. |
| `model` | `String` |  |
| `polling_url` | `String` |  |
| `prompt` | `String` | Text prompt describing the video to generate. |
| `provider` | `Hash` | Provider-specific passthrough configuration |
| `resolution` | `String` | Resolution of the generated video |
| `seed` | `Integer` | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `String` | Exact pixel dimensions of the generated video in "WIDTHxHEIGHT" format (e.g. |
| `status` | `String` |  |
| `unsigned_urls` | `Array` |  |
| `usage` | `Hash` | Usage and cost information for the video generation. |

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

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the VideoGeneration record (raises on error).
video_generation = client.VideoGeneration.load({ "id" => "video_generation_id" })
```


### VideoModel

Create an instance: `video_model = client.VideoModel`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_passthrough_parameters` | `Array` | List of parameters that are allowed to be passed through to the provider |
| `canonical_slug` | `String` | Canonical slug for the model |
| `created` | `Integer` | Unix timestamp of when the model was created |
| `description` | `String` | Description of the model |
| `generate_audio` | `Object` | Whether the model supports generating audio alongside video |
| `hugging_face_id` | `Object` | Hugging Face model identifier, if applicable |
| `id` | `String` | Unique identifier for the model |
| `name` | `String` | Display name of the model |
| `pricing_skus` | `Object` | Pricing SKUs with provider prefix stripped, values as strings |
| `seed` | `Object` | Whether the model supports deterministic generation via seed parameter |
| `supported_aspect_ratios` | `Object` | Supported output aspect ratios |
| `supported_durations` | `Object` | Supported video durations in seconds |
| `supported_frame_images` | `Object` | Supported frame image types (e.g. |
| `supported_resolutions` | `Object` | Supported output resolutions |
| `supported_sizes` | `Object` | Supported output sizes (width x height) |

#### Example: List

```ruby
# list returns an Array of VideoModel records (raises on error).
video_models = client.VideoModel.list
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
| `created_at` | `String` | ISO 8601 timestamp of when the workspace was created |
| `created_by` | `Object` | User ID of the workspace creator |
| `default_image_model` | `Object` | Default image model for this workspace |
| `default_provider_sort` | `Object` | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `Object` | Default text model for this workspace |
| `description` | `Object` | Description of the workspace |
| `id` | `String` | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `Object` | Optional array of API key IDs to filter I/O logging. |
| `io_logging_sampling_rate` | `Float` | Sampling rate for I/O logging (0.0001-1). |
| `is_data_discount_logging_enabled` | `Boolean` | Whether data discount logging is enabled for this workspace |
| `is_observability_broadcast_enabled` | `Boolean` | Whether broadcast is enabled for this workspace |
| `is_observability_io_logging_enabled` | `Boolean` | Whether private logging is enabled for this workspace |
| `name` | `String` | Name of the workspace |
| `slug` | `String` | URL-friendly slug for the workspace |
| `updated_at` | `Object` | ISO 8601 timestamp of when the workspace was last updated |

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
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` | ISO 8601 timestamp of when the budget was created |
| `id` | `String` | Unique identifier for the budget |
| `limit_usd` | `Float` | Spending limit in USD for this interval |
| `reset_interval` | `Object` | Interval at which spend resets. |
| `updated_at` | `String` | ISO 8601 timestamp of when the budget was last updated |
| `workspace_id` | `String` | ID of the workspace the budget belongs to |

#### Example: List

```ruby
# list returns an Array of WorkspaceBudget records (raises on error).
workspace_budgets = client.WorkspaceBudget.list
```


### WorkspaceMember

Create an instance: `workspace_member = client.WorkspaceMember`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` | ISO 8601 timestamp of when the membership was created |
| `id` | `String` | Unique identifier for the workspace membership |
| `role` | `String` | Role of the member in the workspace |
| `user_id` | `String` | Clerk user ID of the member |
| `workspace_id` | `String` | ID of the workspace |

#### Example: List

```ruby
# list returns an Array of WorkspaceMember records (raises on error).
workspace_members = client.WorkspaceMember.list
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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

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
├── schema.rb                  -- Generated option + entity specs
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
provider = client.Provider
provider.list()

# provider.data_get now returns the provider data from the last list
# provider.match_get returns the last match criteria
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
