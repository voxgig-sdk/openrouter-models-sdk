# OpenrouterModels Python SDK



The Python SDK for the OpenrouterModels API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Activity()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/openrouter-models-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from openroutermodels_sdk import OpenrouterModelsSDK

client = OpenrouterModelsSDK({
    "apikey": os.environ.get("OPENROUTER_MODELS_APIKEY"),
})
```

### 2. List activity records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    activitys = client.Activity().list()
    for activity in activitys:
        print(activity)
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load an endpoint

Endpoint is nested under author, so provide the `author`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    endpoint = client.Endpoint().load({"author": "example_author", "slug": "example_slug"})
    print(endpoint)
except Exception as err:
    print(f"load failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    organizations = client.Organization().list()
    print(organizations)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = OpenrouterModelsSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
organization = client.Organization().list()
# organization contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = OpenrouterModelsSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### OpenrouterModelsSDK

```python
from openroutermodels_sdk import OpenrouterModelsSDK

client = OpenrouterModelsSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = OpenrouterModelsSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### OpenrouterModelsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

#### Add

| Field | Description |
| --- | --- |

Operations: .

API path: ``

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

#### Benchmark

| Field | Description |
| --- | --- |

Operations: .

API path: ``

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

#### Budget

| Field | Description |
| --- | --- |

Operations: .

API path: ``

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

#### CreatePresetFromInference

| Field | Description |
| --- | --- |
| `background` |  |
| `cache_control` | Enable automatic prompt caching. |
| `context_management` |  |
| `debug` | Debug options for inspecting request transformations (streaming only) |
| `fallbacks` | Fallback models to try if the primary model fails or refuses, in order. |
| `frequency_penalty` | Frequency penalty (-2.0 to 2.0) |
| `image_config` | Provider-specific image configuration options. |
| `include` |  |
| `input` | Input for a response request - can be a string or array of items |
| `instructions` |  |
| `logit_bias` | Token logit bias adjustments |
| `logprobs` | Return log probabilities |
| `max_completion_tokens` | Maximum tokens in completion |
| `max_output_tokens` |  |
| `max_tokens` | Maximum tokens (deprecated, use max_completion_tokens). |
| `max_tool_calls` |  |
| `messages` | List of messages for the conversation |
| `metadata` | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | Minimum probability threshold relative to the most likely token. |
| `modalities` | Output modalities for the response. |
| `model` | Model to use for completion |
| `models` | Models to use for completion |
| `output_config` | Configuration for controlling output behavior. |
| `parallel_tool_calls` | Whether to enable parallel function calling during tool use. |
| `plugins` | Plugins you want to enable for this request, including their settings. |
| `prediction` | Static predicted output content. |
| `presence_penalty` | Presence penalty (-2.0 to 2.0) |
| `previous_response_id` | Not supported. |
| `prompt` |  |
| `prompt_cache_key` |  |
| `prompt_cache_options` | Request-level prompt-cache controls. |
| `provider` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | Configuration options for reasoning models |
| `reasoning_effort` | Shorthand for setting reasoning effort. |
| `repetition_penalty` | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | Response format configuration |
| `route` | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` |  |
| `seed` | Random seed for deterministic outputs |
| `service_tier` | The service tier to use for processing this request. |
| `session_id` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `speed` |  |
| `stop` | Stop sequences (up to 4) |
| `stop_sequences` |  |
| `stop_server_tools_when` | Stop conditions for the server-tool agent loop. |
| `store` |  |
| `stream` | Enable streaming response |
| `stream_options` | Streaming configuration options |
| `system` |  |
| `temperature` | Sampling temperature (0-2) |
| `text` | Text output configuration including format and verbosity |
| `thinking` |  |
| `tool_choice` | Tool choice configuration |
| `tools` | Available tools for function calling |
| `top_a` | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | Number of top log probabilities to return (0-20) |
| `top_p` | Nucleus sampling parameter (0-1) |
| `trace` | Metadata for observability and tracing. |
| `truncation` |  |
| `user` | Unique user identifier |

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
| `total_credits` | Total credits purchased |
| `total_usage` | Total credits used |

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
| `latency_last_30m` | Latency percentiles in milliseconds over the last 30 minutes. |
| `links` | Related API endpoints and resources for this model. |
| `max_completion_tokens` |  |
| `max_prompt_tokens` |  |
| `model_id` | The unique identifier for the model (permaslug) |
| `model_name` |  |
| `name` | Display name of the model |
| `per_request_limits` | Per-request token limits |
| `pricing` | Pricing information for the model |
| `provider_name` |  |
| `quantization` |  |
| `reasoning` | Reasoning effort configuration. |
| `status` |  |
| `supported_parameters` | List of supported parameters for this model |
| `supported_voices` | List of supported voice identifiers for TTS models. |
| `supports_implicit_caching` |  |
| `tag` |  |
| `throughput_last_30m` |  |
| `top_provider` | Information about the top provider for this model |
| `uptime_last_1d` | Uptime percentage over the last 1 day, calculated as successful requests / (successful + error requests) * 100. |
| `uptime_last_30m` |  |
| `uptime_last_5m` | Uptime percentage over the last 5 minutes, calculated as successful requests / (successful + error requests) * 100. |

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

#### GenerationContent

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

#### ImageModelsList

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
| `assigned_by` | User ID of who made the assignment |
| `created_at` | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | ID of the guardrail |
| `id` | Unique identifier for the assignment |
| `key_hash` | Hash of the assigned API key |
| `key_label` | Label of the API key |
| `key_name` | Name of the API key |

Operations: List.

API path: `/guardrails/{id}/assignments/keys`

#### ListMemberAssignment

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

#### ListObservabilityDestination

| Field | Description |
| --- | --- |
| `data` | List of observability destinations. |
| `total_count` | Total number of destinations matching the filters. |

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
| `created_at` | ISO 8601 timestamp of when the budget was created |
| `id` | Unique identifier for the budget |
| `limit_usd` | Spending limit in USD for this interval |
| `reset_interval` | Interval at which spend resets. |
| `updated_at` | ISO 8601 timestamp of when the budget was last updated |
| `workspace_id` | ID of the workspace the budget belongs to |

Operations: List.

API path: `/workspaces/{id}/budgets`

#### ListWorkspaceMember

| Field | Description |
| --- | --- |
| `created_at` | ISO 8601 timestamp of when the membership was created |
| `id` | Unique identifier for the workspace membership |
| `role` | Role of the member in the workspace |
| `user_id` | Clerk user ID of the member |
| `workspace_id` | ID of the workspace |

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

API path: `/messages`

#### Meta

| Field | Description |
| --- | --- |

Operations: .

API path: ``

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
| `email` | Email address of the member |
| `first_name` | First name of the member |
| `id` | User ID of the organization member |
| `last_name` | Last name of the member |
| `role` | Role of the member in the organization |

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

#### Query

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### RankingsDaily

| Field | Description |
| --- | --- |
| `date` | UTC calendar date the row is aggregated over (YYYY-MM-DD). |
| `model_permaslug` | Model variant permaslug (e.g. |
| `total_tokens` | Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated. |

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

#### Transcription

| Field | Description |
| --- | --- |

Operations: .

API path: ``

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

#### VideoModelsList

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
| `id` |  |

Operations: Remove.

API path: `/workspaces/{id}/budgets/{interval}`

#### Zdr

| Field | Description |
| --- | --- |

Operations: .

API path: ``



## Entities


### Activity

Create an instance: `activity = client.Activity()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byok_usage_inference` | `float` | BYOK inference cost in USD (external credits spent) |
| `completion_tokens` | `int` | Total completion tokens generated |
| `date` | `str` | Date of the activity (YYYY-MM-DD format) |
| `endpoint_id` | `str` | Unique identifier for the endpoint |
| `model` | `str` | Model slug (e.g., "openai/gpt-4.1") |
| `model_permaslug` | `str` | Model permaslug (e.g., "openai/gpt-4.1-2025-04-14") |
| `prompt_tokens` | `int` | Total prompt tokens used |
| `provider_name` | `str` | Name of the provider serving this endpoint |
| `reasoning_tokens` | `int` | Total reasoning tokens used |
| `requests` | `int` | Number of requests made |
| `usage` | `float` | Total cost in USD (OpenRouter credits spent) |

#### Example: List

```python
activitys = client.Activity().list()
```


### Add

Create an instance: `add = client.Add()`


### ApiKey

Create an instance: `api_key = client.ApiKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byok_usage` | `float` | Total external BYOK usage (in USD) for the API key |
| `byok_usage_daily` | `float` | External BYOK usage (in USD) for the current UTC day |
| `byok_usage_monthly` | `float` | External BYOK usage (in USD) for current UTC month |
| `byok_usage_weekly` | `float` | External BYOK usage (in USD) for the current UTC week (Monday-Sunday) |
| `created_at` | `str` | ISO 8601 timestamp of when the API key was created |
| `creator_user_id` | `str | None` | The user ID of the key creator. |
| `disabled` | `bool` | Whether the API key is disabled |
| `expires_at` | `str | None` | ISO 8601 UTC timestamp when the API key expires, or null if no expiration |
| `hash` | `str` | Unique hash identifier for the API key |
| `id` | `str` |  |
| `include_byok_in_limit` | `bool` | Whether to include external BYOK usage in the credit limit |
| `is_free_tier` | `bool` | Whether this is a free tier API key |
| `is_management_key` | `bool` | Whether this is a management key |
| `is_provisioning_key` | `bool` | Whether this is a management key |
| `label` | `str` | Human-readable label for the API key |
| `limit` | `float | None` | Spending limit for the API key in USD |
| `limit_remaining` | `float | None` | Remaining spending limit in USD |
| `limit_reset` | `str | None` | Type of limit reset for the API key |
| `name` | `str` | Name of the API key |
| `rate_limit` | `dict` | Legacy rate limit information about a key. |
| `updated_at` | `str | None` | ISO 8601 timestamp of when the API key was last updated |
| `usage` | `float` | Total OpenRouter credit usage (in USD) for the API key |
| `usage_daily` | `float` | OpenRouter credit usage (in USD) for the current UTC day |
| `usage_monthly` | `float` | OpenRouter credit usage (in USD) for the current UTC month |
| `usage_weekly` | `float` | OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday) |
| `workspace_id` | `str` | The workspace ID this API key belongs to. |

#### Example: Load

```python
api_key = client.ApiKey().load({"id": "api_key_id"})
```

#### Example: List

```python
api_keys = client.ApiKey().list()
```

#### Example: Create

```python
api_key = client.ApiKey().create({
    "byok_usage": 1,  # float
    "byok_usage_daily": 1,  # float
    "byok_usage_monthly": 1,  # float
    "byok_usage_weekly": 1,  # float
    "created_at": "example_created_at",  # str
    "creator_user_id": "example_creator_user_id",  # str | None
    "disabled": True,  # bool
    "hash": "example_hash",  # str
    "include_byok_in_limit": True,  # bool
    "is_free_tier": True,  # bool
    "is_management_key": True,  # bool
    "is_provisioning_key": True,  # bool
    "label": "example_label",  # str
    "limit": 1,  # float | None
    "limit_remaining": 1,  # float | None
    "limit_reset": "example_limit_reset",  # str | None
    "name": "example_name",  # str
    "rate_limit": {},  # dict
    "updated_at": "example_updated_at",  # str | None
    "usage": 1,  # float
    "usage_daily": 1,  # float
    "usage_monthly": 1,  # float
    "usage_weekly": 1,  # float
    "workspace_id": "example_workspace_id",  # str
})
```


### AppRanking

Create an instance: `app_ranking = client.AppRanking()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `int` | Stable numeric identifier of the app on OpenRouter. |
| `app_name` | `str` | Public display name of the app. |
| `rank` | `int` | 1-based position of the app within this response, per the requested `sort`. |
| `total_requests` | `int` | Number of requests attributed to the app inside the date window. |
| `total_tokens` | `str` | Sum of `prompt_tokens + completion_tokens` attributed to the app inside the date window, returned as a decimal string so 64-bit values are not truncated. |

#### Example: List

```python
app_rankings = client.AppRanking().list()
```


### Benchmark

Create an instance: `benchmark = client.Benchmark()`


### BetaAnalytics

Create an instance: `beta_analytics = client.BetaAnalytics()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cachedAt` | `float` |  |
| `classifier_dimensions` | `dict` | Group results by custom classifier tags, breaking down metrics by the specified dimension values. |
| `classifier_filters` | `dict` | Filter results to generations with specific classifier tag values. |
| `data` | `list` |  |
| `dimensions` | `list` |  |
| `filters` | `list` |  |
| `granularities` | `list` |  |
| `granularity` | `str` | Time granularity |
| `group_limit` | `int` | Maximum rows per distinct combination of dimensions. |
| `limit` | `int` | Maximum total rows returned. |
| `metadata` | `dict` |  |
| `metrics` | `list` |  |
| `operators` | `list` |  |
| `order_by` | `dict` |  |
| `time_range` | `dict` |  |
| `warnings` | `list` | Warnings about filter resolution issues (e.g. |

#### Example: Load

```python
beta_analytics = client.BetaAnalytics().load()
```

#### Example: Create

```python
beta_analytics = client.BetaAnalytics().create({
    "classifier_dimensions": {},  # dict
    "classifier_filters": {},  # dict
    "data": [],  # list
    "dimensions": [],  # list
    "granularities": [],  # list
    "metadata": {},  # dict
    "metrics": [],  # list
    "operators": [],  # list
    "order_by": {},  # dict
    "time_range": {},  # dict
})
```


### Budget

Create an instance: `budget = client.Budget()`


### BulkAddWorkspaceMember

Create an instance: `bulk_add_workspace_member = client.BulkAddWorkspaceMember()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `added_count` | `int` | Number of workspace memberships created or updated |
| `data` | `list` | List of added workspace memberships |
| `user_ids` | `list` | List of user IDs to add to the workspace. |

#### Example: Create

```python
bulk_add_workspace_member = client.BulkAddWorkspaceMember().create({
    "workspace_id": "example_workspace_id",  # str
    "added_count": 1,  # int
    "data": [],  # list
    "user_ids": [],  # list
})
```


### BulkAssignKey

Create an instance: `bulk_assign_key = client.BulkAssignKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_count` | `int` | Number of keys successfully assigned |
| `key_hashes` | `list` | Array of API key hashes to assign to the guardrail |

#### Example: Create

```python
bulk_assign_key = client.BulkAssignKey().create({
    "guardrail_id": "example_guardrail_id",  # str
    "assigned_count": 1,  # int
    "key_hashes": [],  # list
})
```


### BulkAssignMember

Create an instance: `bulk_assign_member = client.BulkAssignMember()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_count` | `int` | Number of members successfully assigned |
| `member_user_ids` | `list` | Array of member user IDs to assign to the guardrail |

#### Example: Create

```python
bulk_assign_member = client.BulkAssignMember().create({
    "guardrail_id": "example_guardrail_id",  # str
    "assigned_count": 1,  # int
    "member_user_ids": [],  # list
})
```


### BulkRemoveWorkspaceMember

Create an instance: `bulk_remove_workspace_member = client.BulkRemoveWorkspaceMember()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `removed_count` | `int` | Number of members removed |
| `user_ids` | `list` | List of user IDs to remove from the workspace |

#### Example: Create

```python
bulk_remove_workspace_member = client.BulkRemoveWorkspaceMember().create({
    "workspace_id": "example_workspace_id",  # str
    "removed_count": 1,  # int
    "user_ids": [],  # list
})
```


### BulkUnassignKey

Create an instance: `bulk_unassign_key = client.BulkUnassignKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key_hashes` | `list` | Array of API key hashes to unassign from the guardrail |
| `unassigned_count` | `int` | Number of keys successfully unassigned |

#### Example: Create

```python
bulk_unassign_key = client.BulkUnassignKey().create({
    "guardrail_id": "example_guardrail_id",  # str
    "key_hashes": [],  # list
    "unassigned_count": 1,  # int
})
```


### BulkUnassignMember

Create an instance: `bulk_unassign_member = client.BulkUnassignMember()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `member_user_ids` | `list` | Array of member user IDs to unassign from the guardrail |
| `unassigned_count` | `int` | Number of members successfully unassigned |

#### Example: Create

```python
bulk_unassign_member = client.BulkUnassignMember().create({
    "guardrail_id": "example_guardrail_id",  # str
    "member_user_ids": [],  # list
    "unassigned_count": 1,  # int
})
```


### Byok

Create an instance: `byok = client.Byok()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_api_key_hashes` | `list | None` | Optional allowlist of OpenRouter API key hashes (`api_keys.hash`) that may use this credential. |
| `allowed_models` | `list | None` | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `list | None` | Optional allowlist of user IDs that may use this credential. |
| `created_at` | `str` | ISO timestamp of when the credential was created. |
| `disabled` | `bool` | Whether this credential is currently disabled. |
| `id` | `str` | Stable public identifier for this BYOK credential. |
| `is_fallback` | `bool` | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `str` | The raw provider API key or credential. |
| `label` | `str` | Short masked snippet of the key (e.g. |
| `name` | `str | None` | Optional human-readable name for the credential. |
| `provider` | `str` | The upstream provider this credential authenticates against, as a lowercase slug (e.g. |
| `sort_order` | `int` | Position within the provider — credentials are tried in ascending sort order. |
| `workspace_id` | `str` | ID of the workspace this credential belongs to. |

#### Example: Load

```python
byok = client.Byok().load({"id": "byok_id"})
```

#### Example: List

```python
byoks = client.Byok().list()
```

#### Example: Create

```python
byok = client.Byok().create({
    "allowed_api_key_hashes": [],  # list | None
    "allowed_models": [],  # list | None
    "allowed_user_ids": [],  # list | None
    "created_at": "example_created_at",  # str
    "disabled": True,  # bool
    "id": "example_id",  # str
    "is_fallback": True,  # bool
    "key": "example_key",  # str
    "label": "example_label",  # str
    "provider": "example_provider",  # str
    "sort_order": 1,  # int
    "workspace_id": "example_workspace_id",  # str
})
```


### ChatResult

Create an instance: `chat_result = client.ChatResult()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_control` | `dict` | Enable automatic prompt caching. |
| `choices` | `list` | List of completion choices |
| `created` | `int` | Unix timestamp of creation |
| `debug` | `dict` | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `float | None` | Frequency penalty (-2.0 to 2.0) |
| `id` | `str` | Unique completion identifier |
| `image_config` | `dict` | Provider-specific image configuration options. |
| `logit_bias` | `dict | None` | Token logit bias adjustments |
| `logprobs` | `bool | None` | Return log probabilities |
| `max_completion_tokens` | `int | None` | Maximum tokens in completion |
| `max_tokens` | `int | None` | Maximum tokens (deprecated, use max_completion_tokens). |
| `messages` | `list` | List of messages for the conversation |
| `metadata` | `dict` | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `float | None` | Minimum probability threshold relative to the most likely token. |
| `modalities` | `list` | Output modalities for the response. |
| `model` | `str` | Model used for completion |
| `models` | `list` | Models to use for completion |
| `object` | `str` |  |
| `openrouter_metadata` | `dict` |  |
| `parallel_tool_calls` | `bool | None` | Whether to enable parallel function calling during tool use. |
| `plugins` | `list` | Plugins you want to enable for this request, including their settings. |
| `prediction` | `dict | None` | Static predicted output content. |
| `presence_penalty` | `float | None` | Presence penalty (-2.0 to 2.0) |
| `prompt_cache_key` | `str | None` |  |
| `prompt_cache_options` | `dict | None` | Request-level prompt-cache controls. |
| `provider` | `dict | None` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `dict` | Configuration options for reasoning models |
| `reasoning_effort` | `str | None` | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `float | None` | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `Any` | Response format configuration |
| `route` | `str | None` | **DEPRECATED** Use providers.sort.partition instead. |
| `seed` | `int | None` | Random seed for deterministic outputs |
| `service_tier` | `str | None` | The service tier used by the upstream provider for this request |
| `session_id` | `str` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop` | `Any` | Stop sequences (up to 4) |
| `stop_server_tools_when` | `list` | Stop conditions for the server-tool agent loop. |
| `stream` | `bool` | Enable streaming response |
| `stream_options` | `dict | None` | Streaming configuration options |
| `system_fingerprint` | `str | None` | System fingerprint |
| `temperature` | `float | None` | Sampling temperature (0-2) |
| `tool_choice` | `Any` | Tool choice configuration |
| `tools` | `list` | Available tools for function calling |
| `top_a` | `float | None` | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `int | None` | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `int | None` | Number of top log probabilities to return (0-20) |
| `top_p` | `float | None` | Nucleus sampling parameter (0-1) |
| `trace` | `dict` | Metadata for observability and tracing. |
| `usage` | `dict` | Token usage statistics |
| `user` | `str` | Unique user identifier |

#### Example: Create

```python
chat_result = client.ChatResult().create({
    "cache_control": {},  # dict
    "choices": [],  # list
    "created": 1,  # int
    "id": "example_id",  # str
    "messages": [],  # list
    "model": "example_model",  # str
    "object": "example_object",  # str
    "openrouter_metadata": {},  # dict
    "prediction": {},  # dict | None
    "prompt_cache_options": {},  # dict | None
    "system_fingerprint": "example_system_fingerprint",  # str | None
    "usage": {},  # dict
})
```


### Code

Create an instance: `code = client.Code()`


### Coinbase

Create an instance: `coinbase = client.Coinbase()`


### Completion

Create an instance: `completion = client.Completion()`


### Content

Create an instance: `content = client.Content()`


### Count

Create an instance: `count = client.Count()`


### CreateByokKey

Create an instance: `create_byok_key = client.CreateByokKey()`


### CreateGuardrail

Create an instance: `create_guardrail = client.CreateGuardrail()`


### CreateObservabilityDestination

Create an instance: `create_observability_destination = client.CreateObservabilityDestination()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hashes` | `list | None` | Optional allowlist of OpenRouter API key hashes whose traffic is forwarded. |
| `config` | `dict` | Provider-specific configuration. |
| `enabled` | `bool` | Whether this destination should be enabled immediately. |
| `filter_rules` | `dict | None` | Optional structured filter rules controlling which events are forwarded. |
| `name` | `str` | Human-readable name for the destination. |
| `privacy_mode` | `bool` | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `float` | Sampling rate between 0.0001 and 1 (1 = 100%). |
| `type` | `str` | The destination type. |
| `workspace_id` | `str` | Optional workspace ID. |

#### Example: Create

```python
create_observability_destination = client.CreateObservabilityDestination().create({
    "config": {},  # dict
    "filter_rules": {},  # dict | None
    "name": "example_name",  # str
    "type": "example_type",  # str
})
```


### CreatePresetFromInference

Create an instance: `create_preset_from_inference = client.CreatePresetFromInference()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `background` | `bool | None` |  |
| `cache_control` | `dict` | Enable automatic prompt caching. |
| `context_management` | `dict | None` |  |
| `debug` | `dict` | Debug options for inspecting request transformations (streaming only) |
| `fallbacks` | `list | None` | Fallback models to try if the primary model fails or refuses, in order. |
| `frequency_penalty` | `float | None` | Frequency penalty (-2.0 to 2.0) |
| `image_config` | `dict` | Provider-specific image configuration options. |
| `include` | `list | None` |  |
| `input` | `Any` | Input for a response request - can be a string or array of items |
| `instructions` | `str | None` |  |
| `logit_bias` | `dict | None` | Token logit bias adjustments |
| `logprobs` | `bool | None` | Return log probabilities |
| `max_completion_tokens` | `int | None` | Maximum tokens in completion |
| `max_output_tokens` | `int | None` |  |
| `max_tokens` | `int | None` | Maximum tokens (deprecated, use max_completion_tokens). |
| `max_tool_calls` | `int | None` |  |
| `messages` | `list` | List of messages for the conversation |
| `metadata` | `dict` | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `float | None` | Minimum probability threshold relative to the most likely token. |
| `modalities` | `list` | Output modalities for the response. |
| `model` | `str` | Model to use for completion |
| `models` | `list` | Models to use for completion |
| `output_config` | `dict` | Configuration for controlling output behavior. |
| `parallel_tool_calls` | `bool | None` | Whether to enable parallel function calling during tool use. |
| `plugins` | `list` | Plugins you want to enable for this request, including their settings. |
| `prediction` | `dict | None` | Static predicted output content. |
| `presence_penalty` | `float | None` | Presence penalty (-2.0 to 2.0) |
| `previous_response_id` | `str` | Not supported. |
| `prompt` | `dict | None` |  |
| `prompt_cache_key` | `str | None` |  |
| `prompt_cache_options` | `dict | None` | Request-level prompt-cache controls. |
| `provider` | `dict | None` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `dict` | Configuration options for reasoning models |
| `reasoning_effort` | `str | None` | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `float | None` | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `Any` | Response format configuration |
| `route` | `str | None` | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `str | None` |  |
| `seed` | `int | None` | Random seed for deterministic outputs |
| `service_tier` | `str | None` | The service tier to use for processing this request. |
| `session_id` | `str` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `speed` | `Any` |  |
| `stop` | `Any` | Stop sequences (up to 4) |
| `stop_sequences` | `list` |  |
| `stop_server_tools_when` | `list` | Stop conditions for the server-tool agent loop. |
| `store` | `bool` |  |
| `stream` | `bool` | Enable streaming response |
| `stream_options` | `dict | None` | Streaming configuration options |
| `system` | `Any` |  |
| `temperature` | `float | None` | Sampling temperature (0-2) |
| `text` | `Any` | Text output configuration including format and verbosity |
| `thinking` | `Any` |  |
| `tool_choice` | `Any` | Tool choice configuration |
| `tools` | `list` | Available tools for function calling |
| `top_a` | `float | None` | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `int | None` | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `int | None` | Number of top log probabilities to return (0-20) |
| `top_p` | `float | None` | Nucleus sampling parameter (0-1) |
| `trace` | `dict` | Metadata for observability and tracing. |
| `truncation` | `str | None` |  |
| `user` | `str` | Unique user identifier |

#### Example: Create

```python
create_preset_from_inference = client.CreatePresetFromInference().create({
    "slug": "example_slug",  # str
    "cache_control": {},  # dict
    "messages": [],  # list
    "prediction": {},  # dict | None
    "prompt": {},  # dict | None
    "prompt_cache_options": {},  # dict | None
})
```


### CreateWorkspace

Create an instance: `create_workspace = client.CreateWorkspace()`


### Credit

Create an instance: `credit = client.Credit()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `total_credits` | `float` | Total credits purchased |
| `total_usage` | `float` | Total credits used |

#### Example: Load

```python
credit = client.Credit().load()
```

#### Example: Create

```python
credit = client.Credit().create({
    "total_credits": 1,  # float
    "total_usage": 1,  # float
})
```


### Destination

Create an instance: `destination = client.Destination()`


### Embedding

Create an instance: `embedding = client.Embedding()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` | List of embedding objects |
| `dimensions` | `int` | The number of dimensions for the output embeddings |
| `encoding_format` | `str` | The format of the output embeddings |
| `id` | `str` | Unique identifier for the embeddings response |
| `input` | `Any` | Text, token, or multimodal input(s) to embed |
| `input_type` | `str` | The type of input (e.g. |
| `model` | `str` | The model used for embeddings |
| `object` | `str` |  |
| `provider` | `Any` |  |
| `usage` | `dict` | Token usage statistics |
| `user` | `str` | A unique identifier for the end-user |

#### Example: Create

```python
embedding = client.Embedding().create({
    "data": [],  # list
    "input": "example_input",  # Any
    "model": "example_model",  # str
    "object": "example_object",  # str
    "usage": {},  # dict
})
```


### Endpoint

Create an instance: `endpoint = client.Endpoint()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `Any` | Model architecture information |
| `benchmarks` | `dict` | Third-party benchmark rankings for this model. |
| `canonical_slug` | `str` | Canonical slug for the model |
| `context_length` | `int | None` | Maximum context length in tokens |
| `created` | `int` | Unix timestamp of when the model was created |
| `default_parameters` | `dict | None` | Default parameters for this model |
| `description` | `str` | Description of the model |
| `endpoints` | `list` | List of available endpoints for this model |
| `expiration_date` | `str | None` | The date after which the model may be removed. |
| `hugging_face_id` | `str | None` | Hugging Face model identifier, if applicable |
| `id` | `str` | Unique identifier for the model |
| `knowledge_cutoff` | `str | None` | The date up to which the model was trained on data. |
| `latency_last_30m` | `dict | None` | Latency percentiles in milliseconds over the last 30 minutes. |
| `links` | `dict` | Related API endpoints and resources for this model. |
| `max_completion_tokens` | `int | None` |  |
| `max_prompt_tokens` | `int | None` |  |
| `model_id` | `str` | The unique identifier for the model (permaslug) |
| `model_name` | `str` |  |
| `name` | `str` | Display name of the model |
| `per_request_limits` | `dict | None` | Per-request token limits |
| `pricing` | `dict` | Pricing information for the model |
| `provider_name` | `str` |  |
| `quantization` | `Any` |  |
| `reasoning` | `dict` | Reasoning effort configuration. |
| `status` | `int` |  |
| `supported_parameters` | `list` | List of supported parameters for this model |
| `supported_voices` | `list | None` | List of supported voice identifiers for TTS models. |
| `supports_implicit_caching` | `bool` |  |
| `tag` | `str` |  |
| `throughput_last_30m` | `Any` |  |
| `top_provider` | `dict` | Information about the top provider for this model |
| `uptime_last_1d` | `float | None` | Uptime percentage over the last 1 day, calculated as successful requests / (successful + error requests) * 100. |
| `uptime_last_30m` | `float | None` |  |
| `uptime_last_5m` | `float | None` | Uptime percentage over the last 5 minutes, calculated as successful requests / (successful + error requests) * 100. |

#### Example: Load

```python
endpoint = client.Endpoint().load({"author": "author", "slug": "slug"})
```

#### Example: List

```python
endpoints = client.Endpoint().list()
```


### Feedback

Create an instance: `feedback = client.Feedback()`


### File

Create an instance: `file = client.File()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `downloadable` | `bool` |  |
| `filename` | `str` |  |
| `id` | `str` |  |
| `mime_type` | `str` |  |
| `size_bytes` | `int` |  |
| `type` | `str` |  |

#### Example: Load

```python
file = client.File().load({"id": "file_id"})
```

#### Example: List

```python
files = client.File().list()
```

#### Example: Create

```python
file = client.File().create({
    "created_at": "example_created_at",  # str
    "downloadable": True,  # bool
    "filename": "example_filename",  # str
    "id": "example_id",  # str
    "mime_type": "example_mime_type",  # str
    "size_bytes": 1,  # int
    "type": "example_type",  # str
})
```


### Generation

Create an instance: `generation = client.Generation()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_type` | `str | None` | Type of API used for the generation |
| `app_id` | `int | None` | ID of the app that made the request |
| `cache_discount` | `float | None` | Discount applied due to caching |
| `cancelled` | `bool | None` | Whether the generation was cancelled |
| `created_at` | `str` | ISO 8601 timestamp of when the generation was created |
| `data_region` | `str` | The data region this generation was routed through. |
| `external_user` | `str | None` | External user identifier |
| `finish_reason` | `str | None` | Reason the generation finished |
| `generation_time` | `float | None` | Time taken for generation in milliseconds |
| `http_referer` | `str | None` | Referer header from the request |
| `id` | `str` | Unique identifier for the generation |
| `is_byok` | `bool` | Whether this used bring-your-own-key |
| `latency` | `float | None` | Total latency in milliseconds |
| `model` | `str` | Model used for the generation |
| `moderation_latency` | `float | None` | Moderation latency in milliseconds |
| `native_finish_reason` | `str | None` | Native finish reason as reported by provider |
| `native_tokens_cached` | `int | None` | Native cached tokens as reported by provider |
| `native_tokens_completion` | `int | None` | Native completion tokens as reported by provider |
| `native_tokens_completion_images` | `int | None` | Native completion image tokens as reported by provider |
| `native_tokens_prompt` | `int | None` | Native prompt tokens as reported by provider |
| `native_tokens_reasoning` | `int | None` | Native reasoning tokens as reported by provider |
| `num_fetches` | `int | None` | Number of web fetches performed |
| `num_input_audio_prompt` | `int | None` | Number of audio inputs in the prompt |
| `num_media_completion` | `int | None` | Number of media items in the completion |
| `num_media_prompt` | `int | None` | Number of media items in the prompt |
| `num_search_results` | `int | None` | Number of search results included |
| `origin` | `str` | Origin URL of the request |
| `preset_id` | `str | None` | ID of the preset used for this generation, null if no preset was used |
| `provider_name` | `str | None` | Name of the provider that served the request |
| `provider_responses` | `list | None` | List of provider responses for this generation, including fallback attempts |
| `request_id` | `str | None` | Unique identifier grouping all generations from a single API request |
| `response_cache_source_id` | `str | None` | If this generation was served from response cache, contains the original generation ID. |
| `router` | `str | None` | Router used for the request (e.g., openrouter/auto) |
| `service_tier` | `str | None` | Service tier the upstream provider reported running this request on, or null if it did not report one. |
| `session_id` | `str | None` | Session identifier grouping multiple generations in the same session |
| `streamed` | `bool | None` | Whether the response was streamed |
| `tokens_completion` | `int | None` | Number of tokens in the completion |
| `tokens_prompt` | `int | None` | Number of tokens in the prompt |
| `total_cost` | `float` | Total cost of the generation in USD |
| `upstream_id` | `str | None` | Upstream provider's identifier for this generation |
| `upstream_inference_cost` | `float | None` | Cost charged by the upstream provider |
| `usage` | `float` | Usage amount in USD |
| `user_agent` | `str | None` | User-Agent header from the request |
| `web_search_engine` | `str | None` | The resolved web search engine used for this generation (e.g. |

#### Example: Load

```python
generation = client.Generation().load({"id": "generation_id"})
```


### GenerationContent

Create an instance: `generation_content = client.GenerationContent()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `Any` | The input to the generation — either a prompt string or an array of messages |
| `output` | `dict` | The output from the generation |

#### Example: Load

```python
generation_content = client.GenerationContent().load({"id": "generation_content_id"})
```


### Guardrail

Create an instance: `guardrail = client.Guardrail()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_models` | `list | None` | Array of model canonical_slugs (immutable identifiers) |
| `allowed_providers` | `list | None` | List of allowed provider IDs |
| `content_filter_builtins` | `list | None` | Builtin content filters applied to requests. |
| `content_filters` | `list | None` | Custom regex content filters applied to request messages |
| `created_at` | `str` | ISO 8601 timestamp of when the guardrail was created |
| `description` | `str | None` | Description of the guardrail |
| `enforce_zdr` | `bool | None` | Deprecated. |
| `enforce_zdr_anthropic` | `bool | None` | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `bool | None` | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `bool | None` | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `bool | None` | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `bool | None` | Whether to enforce zero data retention for xAI models. |
| `id` | `str` | Unique identifier for the guardrail |
| `ignored_models` | `list | None` | Array of model canonical_slugs to exclude from routing |
| `ignored_providers` | `list | None` | List of provider IDs to exclude from routing |
| `limit_usd` | `float | None` | Spending limit in USD |
| `name` | `str` | Name of the guardrail |
| `reset_interval` | `str | None` | Interval at which the limit resets (daily, weekly, monthly) |
| `updated_at` | `str | None` | ISO 8601 timestamp of when the guardrail was last updated |
| `workspace_id` | `str` | The workspace ID this guardrail belongs to. |

#### Example: Load

```python
guardrail = client.Guardrail().load({"id": "guardrail_id"})
```

#### Example: List

```python
guardrails = client.Guardrail().list()
```

#### Example: Create

```python
guardrail = client.Guardrail().create({
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "workspace_id": "example_workspace_id",  # str
})
```


### Image

Create an instance: `image = client.Image()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aspect_ratio` | `str` | Normalized aspect ratio of the generated image. |
| `background` | `str` | Background treatment. |
| `created` | `int` | Unix timestamp (seconds) when the image was generated |
| `data` | `list` | Generated images |
| `input_references` | `list` | Reference images to guide image-to-image generation, as base64 data URLs or HTTP(S) URLs. |
| `model` | `str` | The image generation model to use |
| `n` | `int` | Number of images to generate (1-10). |
| `output_compression` | `int` | Compression level (0-100) for webp/jpeg output. |
| `output_format` | `str` | Encoding of the returned image bytes. |
| `prompt` | `str` | Text description of the desired image |
| `provider` | `dict` | Provider routing preferences and provider-specific passthrough configuration. |
| `quality` | `str` | Rendering quality. |
| `resolution` | `str` | Normalized resolution tier of the generated image. |
| `seed` | `int` | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `str` | Optional. |
| `stream` | `bool` | If true, partial images are streamed as SSE events as they become available. |
| `usage` | `dict` | Token and cost usage for the image generation request, when available |

#### Example: Create

```python
image = client.Image().create({
    "created": 1,  # int
    "data": [],  # list
    "model": "example_model",  # str
    "prompt": "example_prompt",  # str
    "usage": {},  # dict
})
```


### ImageModelEndpoint

Create an instance: `image_model_endpoint = client.ImageModelEndpoint()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_passthrough_parameters` | `list` | Provider-specific options accepted under provider.options[provider_slug]. |
| `pricing` | `list` | Billable pricing lines for this endpoint. |
| `provider_name` | `str` | Provider display name |
| `provider_slug` | `str` | Provider slug |
| `provider_tag` | `str | None` | Provider tag for request-side selection |
| `supported_parameters` | `Any` |  |
| `supports_streaming` | `bool` | Whether this endpoint supports native SSE streaming (`stream: true` in the request). |

#### Example: List

```python
image_model_endpoints = client.ImageModelEndpoint().list({"model_id": "example", "slug": "example"})
```


### ImageModelsList

Create an instance: `image_models_list = client.ImageModelsList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `dict` |  |
| `created` | `int` | Unix timestamp (seconds) of when the model was created |
| `description` | `str` |  |
| `endpoints` | `str` | Relative URL to the full per-endpoint records for this model |
| `id` | `str` | Model slug |
| `name` | `str` | Display name |
| `supported_parameters` | `dict` | Union of supported parameters across every endpoint of this model. |
| `supports_streaming` | `bool` | Whether any endpoint of this model supports native SSE streaming on the dedicated Image API (i.e. |

#### Example: List

```python
image_models_lists = client.ImageModelsList().list()
```


### Key

Create an instance: `key = client.Key()`


### ListByokKey

Create an instance: `list_byok_key = client.ListByokKey()`


### ListGuardrail

Create an instance: `list_guardrail = client.ListGuardrail()`


### ListKeyAssignment

Create an instance: `list_key_assignment = client.ListKeyAssignment()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_by` | `str | None` | User ID of who made the assignment |
| `created_at` | `str` | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `str` | ID of the guardrail |
| `id` | `str` | Unique identifier for the assignment |
| `key_hash` | `str` | Hash of the assigned API key |
| `key_label` | `str` | Label of the API key |
| `key_name` | `str` | Name of the API key |

#### Example: List

```python
list_key_assignments = client.ListKeyAssignment().list()
```


### ListMemberAssignment

Create an instance: `list_member_assignment = client.ListMemberAssignment()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_by` | `str | None` | User ID of who made the assignment |
| `created_at` | `str` | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `str` | ID of the guardrail |
| `id` | `str` | Unique identifier for the assignment |
| `organization_id` | `str` | Organization ID |
| `user_id` | `str` | Clerk user ID of the assigned member |

#### Example: List

```python
list_member_assignments = client.ListMemberAssignment().list()
```


### ListObservabilityDestination

Create an instance: `list_observability_destination = client.ListObservabilityDestination()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` | List of observability destinations. |
| `total_count` | `int` | Total number of destinations matching the filters. |

#### Example: List

```python
list_observability_destinations = client.ListObservabilityDestination().list()
```


### ListPreset

Create an instance: `list_preset = client.ListPreset()`


### ListPresetVersion

Create an instance: `list_preset_version = client.ListPresetVersion()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `dict` |  |
| `created_at` | `str` |  |
| `creator_id` | `str` |  |
| `id` | `str` |  |
| `preset_id` | `str` |  |
| `system_prompt` | `str | None` |  |
| `updated_at` | `str` |  |
| `version` | `int` |  |

#### Example: List

```python
list_preset_versions = client.ListPresetVersion().list({"slug": "example"})
```


### ListWorkspace

Create an instance: `list_workspace = client.ListWorkspace()`


### ListWorkspaceBudget

Create an instance: `list_workspace_budget = client.ListWorkspaceBudget()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | ISO 8601 timestamp of when the budget was created |
| `id` | `str` | Unique identifier for the budget |
| `limit_usd` | `float` | Spending limit in USD for this interval |
| `reset_interval` | `str | None` | Interval at which spend resets. |
| `updated_at` | `str` | ISO 8601 timestamp of when the budget was last updated |
| `workspace_id` | `str` | ID of the workspace the budget belongs to |

#### Example: List

```python
list_workspace_budgets = client.ListWorkspaceBudget().list({"workspace_id": "example"})
```


### ListWorkspaceMember

Create an instance: `list_workspace_member = client.ListWorkspaceMember()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | ISO 8601 timestamp of when the membership was created |
| `id` | `str` | Unique identifier for the workspace membership |
| `role` | `str` | Role of the member in the workspace |
| `user_id` | `str` | Clerk user ID of the member |
| `workspace_id` | `str` | ID of the workspace |

#### Example: List

```python
list_workspace_members = client.ListWorkspaceMember().list({"workspace_id": "example"})
```


### Member

Create an instance: `member = client.Member()`


### Message

Create an instance: `message = client.Message()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_control` | `dict` | Enable automatic prompt caching. |
| `context_management` | `dict | None` |  |
| `fallbacks` | `list | None` | Fallback models to try if the primary model fails or refuses, in order. |
| `max_tokens` | `int` |  |
| `messages` | `list | None` |  |
| `metadata` | `dict` |  |
| `model` | `str` |  |
| `models` | `list` |  |
| `output_config` | `dict` | Configuration for controlling output behavior. |
| `plugins` | `list` | Plugins you want to enable for this request, including their settings. |
| `provider` | `dict | None` | When multiple model providers are available, optionally indicate your routing preference. |
| `route` | `str | None` | **DEPRECATED** Use providers.sort.partition instead. |
| `service_tier` | `str` |  |
| `session_id` | `str` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `speed` | `Any` |  |
| `stop_sequences` | `list` |  |
| `stop_server_tools_when` | `list` | Stop conditions for the server-tool agent loop. |
| `stream` | `bool` |  |
| `system` | `Any` |  |
| `temperature` | `float` |  |
| `thinking` | `Any` |  |
| `tool_choice` | `Any` |  |
| `tools` | `list` |  |
| `top_k` | `int` |  |
| `top_p` | `float` |  |
| `trace` | `dict` | Metadata for observability and tracing. |
| `user` | `str` | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

#### Example: Create

```python
message = client.Message().create({
    "cache_control": {},  # dict
    "messages": [],  # list | None
    "model": "example_model",  # str
})
```


### Meta

Create an instance: `meta = client.Meta()`


### Model

Create an instance: `model = client.Model()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `dict` | Model architecture information |
| `benchmarks` | `dict` | Third-party benchmark rankings for this model. |
| `canonical_slug` | `str` | Canonical slug for the model |
| `context_length` | `int | None` | Maximum context length in tokens |
| `created` | `int` | Unix timestamp of when the model was created |
| `default_parameters` | `dict | None` | Default parameters for this model |
| `description` | `str` | Description of the model |
| `expiration_date` | `str | None` | The date after which the model may be removed. |
| `hugging_face_id` | `str | None` | Hugging Face model identifier, if applicable |
| `id` | `str` | Unique identifier for the model |
| `knowledge_cutoff` | `str | None` | The date up to which the model was trained on data. |
| `links` | `dict` | Related API endpoints and resources for this model. |
| `name` | `str` | Display name of the model |
| `per_request_limits` | `dict | None` | Per-request token limits |
| `pricing` | `dict` | Pricing information for the model |
| `reasoning` | `dict` | Reasoning effort configuration. |
| `supported_parameters` | `list` | List of supported parameters for this model |
| `supported_voices` | `list | None` | List of supported voice identifiers for TTS models. |
| `top_provider` | `dict` | Information about the top provider for this model |

#### Example: Load

```python
model = client.Model().load({"author": "author", "slug": "slug"})
```

#### Example: List

```python
models = client.Model().list()
```


### ModelsCount

Create an instance: `models_count = client.ModelsCount()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` | Total number of available models |

#### Example: Load

```python
models_count = client.ModelsCount().load()
```


### ModelsList

Create an instance: `models_list = client.ModelsList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `dict` | Model architecture information |
| `benchmarks` | `dict` | Third-party benchmark rankings for this model. |
| `canonical_slug` | `str` | Canonical slug for the model |
| `context_length` | `int | None` | Maximum context length in tokens |
| `created` | `int` | Unix timestamp of when the model was created |
| `default_parameters` | `dict | None` | Default parameters for this model |
| `description` | `str` | Description of the model |
| `expiration_date` | `str | None` | The date after which the model may be removed. |
| `hugging_face_id` | `str | None` | Hugging Face model identifier, if applicable |
| `id` | `str` | Unique identifier for the model |
| `knowledge_cutoff` | `str | None` | The date up to which the model was trained on data. |
| `links` | `dict` | Related API endpoints and resources for this model. |
| `name` | `str` | Display name of the model |
| `per_request_limits` | `dict | None` | Per-request token limits |
| `pricing` | `dict` | Pricing information for the model |
| `reasoning` | `dict` | Reasoning effort configuration. |
| `supported_parameters` | `list` | List of supported parameters for this model |
| `supported_voices` | `list | None` | List of supported voice identifiers for TTS models. |
| `top_provider` | `dict` | Information about the top provider for this model |

#### Example: List

```python
models_lists = client.ModelsList().list()
```


### OAuth

Create an instance: `o_auth = client.OAuth()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `int` | The application ID associated with this auth code |
| `callback_url` | `str` | The callback URL to redirect to after authorization. |
| `code` | `str` | The authorization code received from the OAuth redirect |
| `code_challenge` | `str` | PKCE code challenge for enhanced security |
| `code_challenge_method` | `str | None` | The method used to generate the code challenge |
| `code_verifier` | `str` | The code verifier if code_challenge was used in the authorization request |
| `created_at` | `str` | ISO 8601 timestamp of when the auth code was created |
| `expires_at` | `str | None` | Optional expiration time for the API key to be created |
| `id` | `str` | The authorization code ID to use in the exchange request |
| `key` | `str` | The API key to use for OpenRouter requests |
| `key_label` | `str` | Optional custom label for the API key. |
| `limit` | `float` | Credit limit for the API key to be created |
| `spawn_agent` | `str` | Agent identifier for spawn telemetry |
| `spawn_cloud` | `str` | Cloud identifier for spawn telemetry |
| `usage_limit_type` | `str` | Optional credit limit reset interval. |
| `user_id` | `str | None` | User ID associated with the API key |
| `workspace_id` | `str` | Optional workspace ID to associate the API key with |

#### Example: Create

```python
o_auth = client.OAuth().create({
    "app_id": 1,  # int
    "callback_url": "example_callback_url",  # str
    "code": "example_code",  # str
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "key": "example_key",  # str
    "user_id": "example_user_id",  # str | None
})
```


### ObservabilityDestination

Create an instance: `observability_destination = client.ObservabilityDestination()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `dict` |  |
| `id` | `str` |  |

#### Example: Load

```python
observability_destination = client.ObservabilityDestination().load({"id": "observability_destination_id"})
```


### OpenResponsesResult

Create an instance: `open_responses_result = client.OpenResponsesResult()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `background` | `bool | None` |  |
| `cache_control` | `dict` | Enable automatic prompt caching. |
| `debug` | `dict` | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `float | None` |  |
| `image_config` | `dict` | Provider-specific image configuration options. |
| `include` | `list | None` |  |
| `input` | `Any` | Input for a response request - can be a string or array of items |
| `instructions` | `str | None` |  |
| `max_output_tokens` | `int | None` |  |
| `max_tool_calls` | `int | None` |  |
| `metadata` | `dict | None` | Metadata key-value pairs for the request. |
| `modalities` | `list` | Output modalities for the response. |
| `model` | `str` |  |
| `models` | `list` |  |
| `parallel_tool_calls` | `bool | None` |  |
| `plugins` | `list` | Plugins you want to enable for this request, including their settings. |
| `presence_penalty` | `float | None` |  |
| `previous_response_id` | `str` | Not supported. |
| `prompt` | `dict | None` |  |
| `prompt_cache_key` | `str | None` |  |
| `prompt_cache_options` | `dict | None` | Request-level prompt-cache controls. |
| `provider` | `dict | None` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `Any` | Configuration for reasoning mode in the response |
| `route` | `str | None` | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `str | None` |  |
| `service_tier` | `str | None` |  |
| `session_id` | `str` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop_server_tools_when` | `list` | Stop conditions for the server-tool agent loop. |
| `store` | `bool` |  |
| `stream` | `bool` |  |
| `temperature` | `float | None` |  |
| `text` | `Any` | Text output configuration including format and verbosity |
| `tool_choice` | `Any` |  |
| `tools` | `list` |  |
| `top_k` | `int` |  |
| `top_logprobs` | `int | None` |  |
| `top_p` | `float | None` |  |
| `trace` | `dict` | Metadata for observability and tracing. |
| `truncation` | `str | None` |  |
| `user` | `str` | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

#### Example: Create

```python
open_responses_result = client.OpenResponsesResult().create({
    "cache_control": {},  # dict
    "prompt": {},  # dict | None
    "prompt_cache_options": {},  # dict | None
})
```


### Organization

Create an instance: `organization = client.Organization()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `str` | Email address of the member |
| `first_name` | `str | None` | First name of the member |
| `id` | `str` | User ID of the organization member |
| `last_name` | `str | None` | Last name of the member |
| `role` | `str` | Role of the member in the organization |

#### Example: List

```python
organizations = client.Organization().list()
```


### Preset

Create an instance: `preset = client.Preset()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `creator_user_id` | `str | None` |  |
| `description` | `str | None` |  |
| `designated_version` | `dict | None` | A specific version of a preset, containing config and optional system prompt. |
| `designated_version_id` | `str | None` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `slug` | `str` |  |
| `status` | `str` | The status of a preset. |
| `status_updated_at` | `str | None` |  |
| `updated_at` | `str` |  |
| `workspace_id` | `str | None` |  |

#### Example: Load

```python
preset = client.Preset().load({"id": "preset_id"})
```

#### Example: List

```python
presets = client.Preset().list()
```


### PresetVersion

Create an instance: `preset_version = client.PresetVersion()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `dict` |  |
| `created_at` | `str` |  |
| `creator_id` | `str` |  |
| `id` | `str` |  |
| `preset_id` | `str` |  |
| `system_prompt` | `str | None` |  |
| `updated_at` | `str` |  |
| `version` | `int` |  |

#### Example: Load

```python
preset_version = client.PresetVersion().load({"id": "preset_version_id", "slug": "slug"})
```


### Provider

Create an instance: `provider = client.Provider()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `datacenters` | `list | None` | ISO 3166-1 Alpha-2 country codes of the provider datacenter locations |
| `headquarters` | `str | None` | ISO 3166-1 Alpha-2 country code of the provider headquarters |
| `name` | `str` | Display name of the provider |
| `privacy_policy_url` | `str | None` | URL to the provider's privacy policy |
| `slug` | `str` | URL-friendly identifier for the provider |
| `status_page_url` | `str | None` | URL to the provider's status page |
| `terms_of_service_url` | `str | None` | URL to the provider's terms of service |

#### Example: List

```python
providers = client.Provider().list()
```


### Query

Create an instance: `query = client.Query()`


### RankingsDaily

Create an instance: `rankings_daily = client.RankingsDaily()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `str` | UTC calendar date the row is aggregated over (YYYY-MM-DD). |
| `model_permaslug` | `str` | Model variant permaslug (e.g. |
| `total_tokens` | `str` | Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated. |

#### Example: List

```python
rankings_dailys = client.RankingsDaily().list()
```


### Remove

Create an instance: `remove = client.Remove()`


### Rerank

Create an instance: `rerank = client.Rerank()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `documents` | `list` | The list of documents to rerank. |
| `id` | `str` | Unique identifier for the rerank response (ORID format) |
| `model` | `str` | The model used for reranking |
| `provider` | `str` | The provider that served the rerank request |
| `query` | `str` | The search query to rerank documents against |
| `results` | `list` | List of rerank results sorted by relevance |
| `top_n` | `int` | Number of most relevant documents to return |
| `usage` | `dict` | Usage statistics |

#### Example: Create

```python
rerank = client.Rerank().create({
    "documents": [],  # list
    "model": "example_model",  # str
    "query": "example_query",  # str
    "results": [],  # list
})
```


### Response

Create an instance: `response = client.Response()`


### Speech

Create an instance: `speech = client.Speech()`


### Stt

Create an instance: `stt = client.Stt()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `duration` | `float` | Duration of the input audio in seconds, present when response_format is verbose_json |
| `input_audio` | `dict` | Base64-encoded audio to transcribe |
| `language` | `str` | Detected or forced language, present when response_format is verbose_json |
| `model` | `str` | STT model identifier |
| `provider` | `dict` | Provider-specific passthrough configuration |
| `response_format` | `str` | Output format. |
| `segments` | `list` | Timestamped transcript segments, present when response_format is verbose_json |
| `task` | `str` | The task performed, present when response_format is verbose_json |
| `temperature` | `float` | Sampling temperature for transcription |
| `text` | `str` | The transcribed text |
| `timestamp_granularities` | `list` | Timestamp detail levels to include when response_format is "verbose_json". |
| `usage` | `dict` | Aggregated usage statistics for the request |
| `words` | `list` | Timestamped words, present when the provider returns word-level timestamps |

#### Example: Create

```python
stt = client.Stt().create({
    "input_audio": {},  # dict
    "model": "example_model",  # str
    "text": "example_text",  # str
})
```


### SubmitGenerationFeedback

Create an instance: `submit_generation_feedback = client.SubmitGenerationFeedback()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `str` | The category of feedback being reported |
| `comment` | `str` | An optional free-text comment describing the feedback |
| `generation_id` | `str` | The generation to submit feedback on |
| `success` | `bool` | Whether the feedback was recorded |

#### Example: Create

```python
submit_generation_feedback = client.SubmitGenerationFeedback().create({
    "category": "example_category",  # str
    "generation_id": "example_generation_id",  # str
    "success": True,  # bool
})
```


### Task

Create an instance: `task = client.Task()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `as_of` | `str` | UTC date (YYYY-MM-DD) of the window upper bound (yesterday). |
| `classifications` | `list` | Per-task classification market-share data, sorted by usage_share descending. |
| `macro_categories` | `list` | Aggregate market-share data per macro-category (code, data, agent, general). |
| `window_days` | `int` | Number of trailing days covered by this snapshot. |

#### Example: Load

```python
task = client.Task().load()
```


### Transcription

Create an instance: `transcription = client.Transcription()`


### Tts

Create an instance: `tts = client.Tts()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `str` | Text to synthesize |
| `model` | `str` | TTS model identifier |
| `provider` | `dict` | Provider-specific passthrough configuration |
| `response_format` | `str` | Audio output format |
| `speed` | `float` | Playback speed multiplier. |
| `voice` | `str` | Voice identifier (provider-specific). |

#### Example: Create

```python
tts = client.Tts().create({
    "input": "example_input",  # str
    "model": "example_model",  # str
    "voice": "example_voice",  # str
})
```


### UnifiedBenchmark

Create an instance: `unified_benchmark = client.UnifiedBenchmark()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` |  |
| `meta` | `dict` |  |

#### Example: List

```python
unified_benchmarks = client.UnifiedBenchmark().list()
```


### UpdateByokKey

Create an instance: `update_byok_key = client.UpdateByokKey()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_models` | `list | None` | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `list | None` | Optional allowlist of user IDs that may use this credential. |
| `disabled` | `bool` | Whether this credential is disabled. |
| `id` | `str` |  |
| `is_fallback` | `bool` | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `str` | A new raw provider API key to rotate the credential in-place. |
| `name` | `str | None` | Optional human-readable name for the credential. |


### UpdateGuardrail

Create an instance: `update_guardrail = client.UpdateGuardrail()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_models` | `list | None` | Array of model identifiers (slug or canonical_slug accepted) |
| `allowed_providers` | `list | None` | New list of allowed provider IDs |
| `content_filter_builtins` | `list | None` | Builtin content filters to apply. |
| `content_filters` | `list | None` | Custom regex content filters to apply. |
| `description` | `str | None` | New description for the guardrail |
| `enforce_zdr` | `bool | None` | Deprecated. |
| `enforce_zdr_anthropic` | `bool | None` | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `bool | None` | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `bool | None` | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `bool | None` | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `bool | None` | Whether to enforce zero data retention for xAI models. |
| `id` | `str` |  |
| `ignored_models` | `list | None` | Array of model identifiers to exclude from routing (slug or canonical_slug accepted) |
| `ignored_providers` | `list | None` | List of provider IDs to exclude from routing |
| `limit_usd` | `float | None` | New spending limit in USD |
| `name` | `str` | New name for the guardrail |
| `reset_interval` | `str | None` | Interval at which the limit resets (daily, weekly, monthly) |


### UpdateObservabilityDestination

Create an instance: `update_observability_destination = client.UpdateObservabilityDestination()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hashes` | `list | None` | Optional allowlist of OpenRouter API key hashes. |
| `config` | `dict` | Provider-specific configuration fields to update. |
| `enabled` | `bool` | Whether the destination is enabled. |
| `filter_rules` | `Any` |  |
| `id` | `str` |  |
| `name` | `str` | Human-readable name for the destination. |
| `privacy_mode` | `bool` | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `float` | Sampling rate between 0.0001 and 1 (1 = 100%). |


### UpdateWorkspace

Create an instance: `update_workspace = client.UpdateWorkspace()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | ISO 8601 timestamp of when the workspace was created |
| `created_by` | `str | None` | User ID of the workspace creator |
| `default_image_model` | `str | None` | Default image model for this workspace |
| `default_provider_sort` | `str | None` | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `str | None` | Default text model for this workspace |
| `description` | `str | None` | Description of the workspace |
| `id` | `str` | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `list | None` | Optional array of API key IDs to filter I/O logging |
| `io_logging_sampling_rate` | `float` | Sampling rate for I/O logging (0.0001-1) |
| `is_data_discount_logging_enabled` | `bool` | Whether data discount logging is enabled |
| `is_observability_broadcast_enabled` | `bool` | Whether broadcast is enabled |
| `is_observability_io_logging_enabled` | `bool` | Whether private logging is enabled |
| `name` | `str` | Name for the new workspace |
| `slug` | `str` | URL-friendly slug (lowercase alphanumeric segments separated by single hyphens, no leading/trailing hyphens) |
| `updated_at` | `str | None` | ISO 8601 timestamp of when the workspace was last updated |

#### Example: List

```python
update_workspaces = client.UpdateWorkspace().list()
```

#### Example: Create

```python
update_workspace = client.UpdateWorkspace().create({
    "created_at": "example_created_at",  # str
    "created_by": "example_created_by",  # str | None
    "id": "example_id",  # str
    "name": "example_name",  # str
    "slug": "example_slug",  # str
    "updated_at": "example_updated_at",  # str | None
})
```


### UpsertWorkspaceBudget

Create an instance: `upsert_workspace_budget = client.UpsertWorkspaceBudget()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `limit_usd` | `float` | Spending limit in USD. |


### User

Create an instance: `user = client.User()`


### Version

Create an instance: `version = client.Version()`


### Video

Create an instance: `video = client.Video()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aspect_ratio` | `str` | Aspect ratio of the generated video |
| `callback_url` | `str` | URL to receive a webhook notification when the video generation job completes. |
| `duration` | `int` | Duration of the generated video in seconds |
| `error` | `str` |  |
| `frame_images` | `list` | Images to use as the first and/or last frame of the generated video. |
| `generate_audio` | `bool` | Whether to generate audio alongside the video. |
| `generation_id` | `str` | The generation ID associated with this video generation job. |
| `id` | `str` |  |
| `input_references` | `list` | Reference assets to guide video generation. |
| `model` | `str` |  |
| `polling_url` | `str` |  |
| `prompt` | `str` | Text prompt describing the video to generate. |
| `provider` | `dict` | Provider-specific passthrough configuration |
| `resolution` | `str` | Resolution of the generated video |
| `seed` | `int` | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `str` | Exact pixel dimensions of the generated video in "WIDTHxHEIGHT" format (e.g. |
| `status` | `str` |  |
| `unsigned_urls` | `list` |  |
| `usage` | `dict` | Usage and cost information for the video generation. |

#### Example: Load

```python
video = client.Video().load({"id": "video_id"})
```

#### Example: Create

```python
video = client.Video().create({
    "id": "example_id",  # str
    "model": "example_model",  # str
    "polling_url": "example_polling_url",  # str
    "status": "example_status",  # str
})
```


### VideoGeneration

Create an instance: `video_generation = client.VideoGeneration()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
video_generation = client.VideoGeneration().load({"id": "video_generation_id"})
```


### VideoModelsList

Create an instance: `video_models_list = client.VideoModelsList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_passthrough_parameters` | `list` | List of parameters that are allowed to be passed through to the provider |
| `canonical_slug` | `str` | Canonical slug for the model |
| `created` | `int` | Unix timestamp of when the model was created |
| `description` | `str` | Description of the model |
| `generate_audio` | `bool | None` | Whether the model supports generating audio alongside video |
| `hugging_face_id` | `str | None` | Hugging Face model identifier, if applicable |
| `id` | `str` | Unique identifier for the model |
| `name` | `str` | Display name of the model |
| `pricing_skus` | `dict | None` | Pricing SKUs with provider prefix stripped, values as strings |
| `seed` | `bool | None` | Whether the model supports deterministic generation via seed parameter |
| `supported_aspect_ratios` | `list | None` | Supported output aspect ratios |
| `supported_durations` | `list | None` | Supported video durations in seconds |
| `supported_frame_images` | `list | None` | Supported frame image types (e.g. |
| `supported_resolutions` | `list | None` | Supported output resolutions |
| `supported_sizes` | `list | None` | Supported output sizes (width x height) |

#### Example: List

```python
video_models_lists = client.VideoModelsList().list()
```


### Workspace

Create an instance: `workspace = client.Workspace()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | ISO 8601 timestamp of when the workspace was created |
| `created_by` | `str | None` | User ID of the workspace creator |
| `default_image_model` | `str | None` | Default image model for this workspace |
| `default_provider_sort` | `str | None` | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `str | None` | Default text model for this workspace |
| `description` | `str | None` | Description of the workspace |
| `id` | `str` | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `list | None` | Optional array of API key IDs to filter I/O logging. |
| `io_logging_sampling_rate` | `float` | Sampling rate for I/O logging (0.0001-1). |
| `is_data_discount_logging_enabled` | `bool` | Whether data discount logging is enabled for this workspace |
| `is_observability_broadcast_enabled` | `bool` | Whether broadcast is enabled for this workspace |
| `is_observability_io_logging_enabled` | `bool` | Whether private logging is enabled for this workspace |
| `name` | `str` | Name of the workspace |
| `slug` | `str` | URL-friendly slug for the workspace |
| `updated_at` | `str | None` | ISO 8601 timestamp of when the workspace was last updated |

#### Example: Load

```python
workspace = client.Workspace().load({"id": "workspace_id"})
```


### WorkspaceBudget

Create an instance: `workspace_budget = client.WorkspaceBudget()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Zdr

Create an instance: `zdr = client.Zdr()`

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

30 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `create_preset_from_inference` | `input` | 49 | 19 levels |
| `open_responses_result` | `input` | 49 | 19 levels |
| `open_responses_result` | `tools` | 27 | 12 levels |
| `message` | `tools` | 13 | 6 levels |
| `chat_result` | `tools` | 12 | 6 levels |
| `create_preset_from_inference` | `tools` | 12 | 6 levels |
| `message` | `messages` | 12 | 14 levels |
| `open_responses_result` | `tool_choice` | 8 | 4 levels |
| `chat_result` | `plugins` | 5 | 12 levels |
| `chat_result` | `tool_choice` | 5 | 0 levels |
| `create_preset_from_inference` | `plugins` | 5 | 12 levels |
| `create_preset_from_inference` | `tool_choice` | 5 | 0 levels |
| `embedding` | `input` | 5 | 6 levels |
| `message` | `plugins` | 5 | 12 levels |
| `open_responses_result` | `plugins` | 5 | 12 levels |
| `create_preset_from_inference` | `prompt` | 4 | 3 levels |
| `image` | `usage` | 4 | 3 levels |
| `message` | `tool_choice` | 4 | 0 levels |
| `open_responses_result` | `prompt` | 4 | 3 levels |
| `beta_analytics` | `classifier_filters` | 3 | 8 levels |
| `beta_analytics` | `filters` | 3 | 6 levels |
| `chat_result` | `image_config` | 3 | 1 level |
| `create_preset_from_inference` | `context_management` | 3 | 7 levels |
| `create_preset_from_inference` | `image_config` | 3 | 1 level |
| `create_preset_from_inference` | `text` | 3 | 4 levels |
| `create_preset_from_inference` | `thinking` | 3 | 0 levels |
| `message` | `context_management` | 3 | 7 levels |
| `message` | `thinking` | 3 | 0 levels |
| `open_responses_result` | `image_config` | 3 | 1 level |
| `open_responses_result` | `text` | 3 | 4 levels |

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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── openroutermodels_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`openroutermodels_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
organization = client.Organization()
organization.list()

# organization.data_get() now returns the organization data from the last list
# organization.match_get() returns the last match criteria
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
