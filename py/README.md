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

Create an instance: `activity = client.Activity()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byok_usage_inference` | `float` |  |
| `completion_tokens` | `int` |  |
| `date` | `str` |  |
| `endpoint_id` | `str` |  |
| `model` | `str` |  |
| `model_permaslug` | `str` |  |
| `prompt_tokens` | `int` |  |
| `provider_name` | `str` |  |
| `reasoning_tokens` | `int` |  |
| `requests` | `int` |  |
| `usage` | `float` |  |

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
| `byok_usage` | `float` |  |
| `byok_usage_daily` | `float` |  |
| `byok_usage_monthly` | `float` |  |
| `byok_usage_weekly` | `float` |  |
| `created_at` | `str` |  |
| `creator_user_id` | `str | None` |  |
| `disabled` | `bool` |  |
| `expires_at` | `str | None` |  |
| `hash` | `str` |  |
| `include_byok_in_limit` | `bool` |  |
| `is_free_tier` | `bool` |  |
| `is_management_key` | `bool` |  |
| `is_provisioning_key` | `bool` |  |
| `label` | `str` |  |
| `limit` | `float | None` |  |
| `limit_remaining` | `float | None` |  |
| `limit_reset` | `str | None` |  |
| `name` | `str` |  |
| `rate_limit` | `dict` |  |
| `updated_at` | `str | None` |  |
| `usage` | `float` |  |
| `usage_daily` | `float` |  |
| `usage_monthly` | `float` |  |
| `usage_weekly` | `float` |  |
| `workspace_id` | `str` |  |

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
    "limit": "example_limit",  # float | None
    "limit_remaining": "example_limit_remaining",  # float | None
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
| `app_id` | `int` |  |
| `app_name` | `str` |  |
| `rank` | `int` |  |
| `total_requests` | `int` |  |
| `total_tokens` | `str` |  |

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
| `classifier_dimensions` | `dict` |  |
| `classifier_filters` | `dict` |  |
| `data` | `list` |  |
| `dimensions` | `list` |  |
| `filters` | `list` |  |
| `granularities` | `list` |  |
| `granularity` | `str` |  |
| `group_limit` | `int` |  |
| `limit` | `int` |  |
| `metadata` | `dict` |  |
| `metrics` | `list` |  |
| `operators` | `list` |  |
| `order_by` | `dict` |  |
| `time_range` | `dict` |  |
| `warnings` | `list` |  |

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
| `added_count` | `int` |  |
| `data` | `list` |  |
| `user_ids` | `list` |  |

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
| `assigned_count` | `int` |  |
| `key_hashes` | `list` |  |

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
| `assigned_count` | `int` |  |
| `member_user_ids` | `list` |  |

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
| `removed_count` | `int` |  |
| `user_ids` | `list` |  |

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
| `key_hashes` | `list` |  |
| `unassigned_count` | `int` |  |

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
| `member_user_ids` | `list` |  |
| `unassigned_count` | `int` |  |

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
| `allowed_api_key_hashes` | `list | None` |  |
| `allowed_models` | `list | None` |  |
| `allowed_user_ids` | `list | None` |  |
| `created_at` | `str` |  |
| `disabled` | `bool` |  |
| `id` | `str` |  |
| `is_fallback` | `bool` |  |
| `key` | `str` |  |
| `label` | `str` |  |
| `name` | `str | None` |  |
| `provider` | `str` |  |
| `sort_order` | `int` |  |
| `workspace_id` | `str` |  |

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
    "allowed_api_key_hashes": "example_allowed_api_key_hashes",  # list | None
    "allowed_models": "example_allowed_models",  # list | None
    "allowed_user_ids": "example_allowed_user_ids",  # list | None
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
| `cache_control` | `dict` |  |
| `choices` | `list` |  |
| `created` | `int` |  |
| `debug` | `dict` |  |
| `frequency_penalty` | `float | None` |  |
| `id` | `str` |  |
| `image_config` | `dict` |  |
| `logit_bias` | `dict | None` |  |
| `logprobs` | `bool | None` |  |
| `max_completion_tokens` | `int | None` |  |
| `max_tokens` | `int | None` |  |
| `messages` | `list` |  |
| `metadata` | `dict` |  |
| `min_p` | `float | None` |  |
| `modalities` | `list` |  |
| `model` | `str` |  |
| `models` | `list` |  |
| `object` | `str` |  |
| `openrouter_metadata` | `dict` |  |
| `parallel_tool_calls` | `bool | None` |  |
| `plugins` | `list` |  |
| `prediction` | `dict | None` |  |
| `presence_penalty` | `float | None` |  |
| `prompt_cache_key` | `str | None` |  |
| `prompt_cache_options` | `dict | None` |  |
| `provider` | `dict | None` |  |
| `reasoning` | `dict` |  |
| `reasoning_effort` | `str | None` |  |
| `repetition_penalty` | `float | None` |  |
| `response_format` | `Any` |  |
| `route` | `str | None` |  |
| `seed` | `int | None` |  |
| `service_tier` | `str | None` |  |
| `session_id` | `str` |  |
| `stop` | `Any` |  |
| `stop_server_tools_when` | `list` |  |
| `stream` | `bool` |  |
| `stream_options` | `dict | None` |  |
| `system_fingerprint` | `str | None` |  |
| `temperature` | `float | None` |  |
| `tool_choice` | `Any` |  |
| `tools` | `list` |  |
| `top_a` | `float | None` |  |
| `top_k` | `int | None` |  |
| `top_logprobs` | `int | None` |  |
| `top_p` | `float | None` |  |
| `trace` | `dict` |  |
| `usage` | `dict` |  |
| `user` | `str` |  |

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
    "prediction": "example_prediction",  # dict | None
    "prompt_cache_options": "example_prompt_cache_options",  # dict | None
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
| `api_key_hashes` | `list | None` |  |
| `config` | `dict` |  |
| `enabled` | `bool` |  |
| `filter_rules` | `dict | None` |  |
| `name` | `str` |  |
| `privacy_mode` | `bool` |  |
| `sampling_rate` | `float` |  |
| `type` | `str` |  |
| `workspace_id` | `str` |  |

#### Example: Create

```python
create_observability_destination = client.CreateObservabilityDestination().create({
    "config": {},  # dict
    "filter_rules": "example_filter_rules",  # dict | None
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
| `cache_control` | `dict` |  |
| `context_management` | `dict | None` |  |
| `debug` | `dict` |  |
| `fallbacks` | `list | None` |  |
| `frequency_penalty` | `float | None` |  |
| `image_config` | `dict` |  |
| `include` | `list | None` |  |
| `input` | `Any` |  |
| `instructions` | `str | None` |  |
| `logit_bias` | `dict | None` |  |
| `logprobs` | `bool | None` |  |
| `max_completion_tokens` | `int | None` |  |
| `max_output_tokens` | `int | None` |  |
| `max_tokens` | `int | None` |  |
| `max_tool_calls` | `int | None` |  |
| `messages` | `list` |  |
| `metadata` | `dict` |  |
| `min_p` | `float | None` |  |
| `modalities` | `list` |  |
| `model` | `str` |  |
| `models` | `list` |  |
| `output_config` | `dict` |  |
| `parallel_tool_calls` | `bool | None` |  |
| `plugins` | `list` |  |
| `prediction` | `dict | None` |  |
| `presence_penalty` | `float | None` |  |
| `previous_response_id` | `str` |  |
| `prompt` | `dict | None` |  |
| `prompt_cache_key` | `str | None` |  |
| `prompt_cache_options` | `dict | None` |  |
| `provider` | `dict | None` |  |
| `reasoning` | `dict` |  |
| `reasoning_effort` | `str | None` |  |
| `repetition_penalty` | `float | None` |  |
| `response_format` | `Any` |  |
| `route` | `str | None` |  |
| `safety_identifier` | `str | None` |  |
| `seed` | `int | None` |  |
| `service_tier` | `str | None` |  |
| `session_id` | `str` |  |
| `speed` | `Any` |  |
| `stop` | `Any` |  |
| `stop_sequences` | `list` |  |
| `stop_server_tools_when` | `list` |  |
| `store` | `bool` |  |
| `stream` | `bool` |  |
| `stream_options` | `dict | None` |  |
| `system` | `Any` |  |
| `temperature` | `float | None` |  |
| `text` | `Any` |  |
| `thinking` | `Any` |  |
| `tool_choice` | `Any` |  |
| `tools` | `list` |  |
| `top_a` | `float | None` |  |
| `top_k` | `int | None` |  |
| `top_logprobs` | `int | None` |  |
| `top_p` | `float | None` |  |
| `trace` | `dict` |  |
| `truncation` | `str | None` |  |
| `user` | `str` |  |

#### Example: Create

```python
create_preset_from_inference = client.CreatePresetFromInference().create({
    "slug": "example_slug",  # str
    "cache_control": {},  # dict
    "messages": [],  # list
    "prediction": "example_prediction",  # dict | None
    "prompt": "example_prompt",  # dict | None
    "prompt_cache_options": "example_prompt_cache_options",  # dict | None
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
| `total_credits` | `float` |  |
| `total_usage` | `float` |  |

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
| `data` | `list` |  |
| `dimensions` | `int` |  |
| `encoding_format` | `str` |  |
| `id` | `str` |  |
| `input` | `Any` |  |
| `input_type` | `str` |  |
| `model` | `str` |  |
| `object` | `str` |  |
| `provider` | `Any` |  |
| `usage` | `dict` |  |
| `user` | `str` |  |

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
| `architecture` | `Any` |  |
| `benchmarks` | `dict` |  |
| `canonical_slug` | `str` |  |
| `context_length` | `int | None` |  |
| `created` | `int` |  |
| `default_parameters` | `dict | None` |  |
| `description` | `str` |  |
| `endpoints` | `list` |  |
| `expiration_date` | `str | None` |  |
| `hugging_face_id` | `str | None` |  |
| `id` | `str` |  |
| `knowledge_cutoff` | `str | None` |  |
| `latency_last_30m` | `dict | None` |  |
| `links` | `dict` |  |
| `max_completion_tokens` | `int | None` |  |
| `max_prompt_tokens` | `int | None` |  |
| `model_id` | `str` |  |
| `model_name` | `str` |  |
| `name` | `str` |  |
| `per_request_limits` | `dict | None` |  |
| `pricing` | `dict` |  |
| `provider_name` | `str` |  |
| `quantization` | `Any` |  |
| `reasoning` | `dict` |  |
| `status` | `int` |  |
| `supported_parameters` | `list` |  |
| `supported_voices` | `list | None` |  |
| `supports_implicit_caching` | `bool` |  |
| `tag` | `str` |  |
| `throughput_last_30m` | `Any` |  |
| `top_provider` | `dict` |  |
| `uptime_last_1d` | `float | None` |  |
| `uptime_last_30m` | `float | None` |  |
| `uptime_last_5m` | `float | None` |  |

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
| `api_type` | `str | None` |  |
| `app_id` | `int | None` |  |
| `cache_discount` | `float | None` |  |
| `cancelled` | `bool | None` |  |
| `created_at` | `str` |  |
| `data_region` | `str` |  |
| `external_user` | `str | None` |  |
| `finish_reason` | `str | None` |  |
| `generation_time` | `float | None` |  |
| `http_referer` | `str | None` |  |
| `id` | `str` |  |
| `is_byok` | `bool` |  |
| `latency` | `float | None` |  |
| `model` | `str` |  |
| `moderation_latency` | `float | None` |  |
| `native_finish_reason` | `str | None` |  |
| `native_tokens_cached` | `int | None` |  |
| `native_tokens_completion` | `int | None` |  |
| `native_tokens_completion_images` | `int | None` |  |
| `native_tokens_prompt` | `int | None` |  |
| `native_tokens_reasoning` | `int | None` |  |
| `num_fetches` | `int | None` |  |
| `num_input_audio_prompt` | `int | None` |  |
| `num_media_completion` | `int | None` |  |
| `num_media_prompt` | `int | None` |  |
| `num_search_results` | `int | None` |  |
| `origin` | `str` |  |
| `preset_id` | `str | None` |  |
| `provider_name` | `str | None` |  |
| `provider_responses` | `list | None` |  |
| `request_id` | `str | None` |  |
| `response_cache_source_id` | `str | None` |  |
| `router` | `str | None` |  |
| `service_tier` | `str | None` |  |
| `session_id` | `str | None` |  |
| `streamed` | `bool | None` |  |
| `tokens_completion` | `int | None` |  |
| `tokens_prompt` | `int | None` |  |
| `total_cost` | `float` |  |
| `upstream_id` | `str | None` |  |
| `upstream_inference_cost` | `float | None` |  |
| `usage` | `float` |  |
| `user_agent` | `str | None` |  |
| `web_search_engine` | `str | None` |  |

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
| `input` | `Any` |  |
| `output` | `dict` |  |

#### Example: Load

```python
generation_content = client.GenerationContent().load()
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
| `allowed_models` | `list | None` |  |
| `allowed_providers` | `list | None` |  |
| `content_filter_builtins` | `list | None` |  |
| `content_filters` | `list | None` |  |
| `created_at` | `str` |  |
| `description` | `str | None` |  |
| `enforce_zdr` | `bool | None` |  |
| `enforce_zdr_anthropic` | `bool | None` |  |
| `enforce_zdr_google` | `bool | None` |  |
| `enforce_zdr_openai` | `bool | None` |  |
| `enforce_zdr_other` | `bool | None` |  |
| `enforce_zdr_xai` | `bool | None` |  |
| `id` | `str` |  |
| `ignored_models` | `list | None` |  |
| `ignored_providers` | `list | None` |  |
| `limit_usd` | `float | None` |  |
| `name` | `str` |  |
| `reset_interval` | `str | None` |  |
| `updated_at` | `str | None` |  |
| `workspace_id` | `str` |  |

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
| `aspect_ratio` | `str` |  |
| `background` | `str` |  |
| `created` | `int` |  |
| `data` | `list` |  |
| `input_references` | `list` |  |
| `model` | `str` |  |
| `n` | `int` |  |
| `output_compression` | `int` |  |
| `output_format` | `str` |  |
| `prompt` | `str` |  |
| `provider` | `dict` |  |
| `quality` | `str` |  |
| `resolution` | `str` |  |
| `seed` | `int` |  |
| `size` | `str` |  |
| `stream` | `bool` |  |
| `usage` | `dict` |  |

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
| `allowed_passthrough_parameters` | `list` |  |
| `pricing` | `list` |  |
| `provider_name` | `str` |  |
| `provider_slug` | `str` |  |
| `provider_tag` | `str | None` |  |
| `supported_parameters` | `Any` |  |
| `supports_streaming` | `bool` |  |

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
| `created` | `int` |  |
| `description` | `str` |  |
| `endpoints` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `supported_parameters` | `dict` |  |
| `supports_streaming` | `bool` |  |

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
| `assigned_by` | `str | None` |  |
| `created_at` | `str` |  |
| `guardrail_id` | `str` |  |
| `id` | `str` |  |
| `key_hash` | `str` |  |
| `key_label` | `str` |  |
| `key_name` | `str` |  |

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
| `assigned_by` | `str | None` |  |
| `created_at` | `str` |  |
| `guardrail_id` | `str` |  |
| `id` | `str` |  |
| `organization_id` | `str` |  |
| `user_id` | `str` |  |

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
| `data` | `list` |  |
| `total_count` | `int` |  |

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
| `created_at` | `str` |  |
| `id` | `str` |  |
| `limit_usd` | `float` |  |
| `reset_interval` | `str | None` |  |
| `updated_at` | `str` |  |
| `workspace_id` | `str` |  |

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
| `created_at` | `str` |  |
| `id` | `str` |  |
| `role` | `str` |  |
| `user_id` | `str` |  |
| `workspace_id` | `str` |  |

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
| `cache_control` | `dict` |  |
| `context_management` | `dict | None` |  |
| `fallbacks` | `list | None` |  |
| `max_tokens` | `int` |  |
| `messages` | `list | None` |  |
| `metadata` | `dict` |  |
| `model` | `str` |  |
| `models` | `list` |  |
| `output_config` | `dict` |  |
| `plugins` | `list` |  |
| `provider` | `dict | None` |  |
| `route` | `str | None` |  |
| `service_tier` | `str` |  |
| `session_id` | `str` |  |
| `speed` | `Any` |  |
| `stop_sequences` | `list` |  |
| `stop_server_tools_when` | `list` |  |
| `stream` | `bool` |  |
| `system` | `Any` |  |
| `temperature` | `float` |  |
| `thinking` | `Any` |  |
| `tool_choice` | `Any` |  |
| `tools` | `list` |  |
| `top_k` | `int` |  |
| `top_p` | `float` |  |
| `trace` | `dict` |  |
| `user` | `str` |  |

#### Example: Create

```python
message = client.Message().create({
    "cache_control": {},  # dict
    "messages": "example_messages",  # list | None
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
| `architecture` | `dict` |  |
| `benchmarks` | `dict` |  |
| `canonical_slug` | `str` |  |
| `context_length` | `int | None` |  |
| `created` | `int` |  |
| `default_parameters` | `dict | None` |  |
| `description` | `str` |  |
| `expiration_date` | `str | None` |  |
| `hugging_face_id` | `str | None` |  |
| `id` | `str` |  |
| `knowledge_cutoff` | `str | None` |  |
| `links` | `dict` |  |
| `name` | `str` |  |
| `per_request_limits` | `dict | None` |  |
| `pricing` | `dict` |  |
| `reasoning` | `dict` |  |
| `supported_parameters` | `list` |  |
| `supported_voices` | `list | None` |  |
| `top_provider` | `dict` |  |

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
| `count` | `int` |  |

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
| `architecture` | `dict` |  |
| `benchmarks` | `dict` |  |
| `canonical_slug` | `str` |  |
| `context_length` | `int | None` |  |
| `created` | `int` |  |
| `default_parameters` | `dict | None` |  |
| `description` | `str` |  |
| `expiration_date` | `str | None` |  |
| `hugging_face_id` | `str | None` |  |
| `id` | `str` |  |
| `knowledge_cutoff` | `str | None` |  |
| `links` | `dict` |  |
| `name` | `str` |  |
| `per_request_limits` | `dict | None` |  |
| `pricing` | `dict` |  |
| `reasoning` | `dict` |  |
| `supported_parameters` | `list` |  |
| `supported_voices` | `list | None` |  |
| `top_provider` | `dict` |  |

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
| `app_id` | `int` |  |
| `callback_url` | `str` |  |
| `code` | `str` |  |
| `code_challenge` | `str` |  |
| `code_challenge_method` | `str | None` |  |
| `code_verifier` | `str` |  |
| `created_at` | `str` |  |
| `expires_at` | `str | None` |  |
| `id` | `str` |  |
| `key` | `str` |  |
| `key_label` | `str` |  |
| `limit` | `float` |  |
| `spawn_agent` | `str` |  |
| `spawn_cloud` | `str` |  |
| `usage_limit_type` | `str` |  |
| `user_id` | `str | None` |  |
| `workspace_id` | `str` |  |

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
| `cache_control` | `dict` |  |
| `debug` | `dict` |  |
| `frequency_penalty` | `float | None` |  |
| `image_config` | `dict` |  |
| `include` | `list | None` |  |
| `input` | `Any` |  |
| `instructions` | `str | None` |  |
| `max_output_tokens` | `int | None` |  |
| `max_tool_calls` | `int | None` |  |
| `metadata` | `dict | None` |  |
| `modalities` | `list` |  |
| `model` | `str` |  |
| `models` | `list` |  |
| `parallel_tool_calls` | `bool | None` |  |
| `plugins` | `list` |  |
| `presence_penalty` | `float | None` |  |
| `previous_response_id` | `str` |  |
| `prompt` | `dict | None` |  |
| `prompt_cache_key` | `str | None` |  |
| `prompt_cache_options` | `dict | None` |  |
| `provider` | `dict | None` |  |
| `reasoning` | `Any` |  |
| `route` | `str | None` |  |
| `safety_identifier` | `str | None` |  |
| `service_tier` | `str | None` |  |
| `session_id` | `str` |  |
| `stop_server_tools_when` | `list` |  |
| `store` | `bool` |  |
| `stream` | `bool` |  |
| `temperature` | `float | None` |  |
| `text` | `Any` |  |
| `tool_choice` | `Any` |  |
| `tools` | `list` |  |
| `top_k` | `int` |  |
| `top_logprobs` | `int | None` |  |
| `top_p` | `float | None` |  |
| `trace` | `dict` |  |
| `truncation` | `str | None` |  |
| `user` | `str` |  |

#### Example: Create

```python
open_responses_result = client.OpenResponsesResult().create({
    "cache_control": {},  # dict
    "prompt": "example_prompt",  # dict | None
    "prompt_cache_options": "example_prompt_cache_options",  # dict | None
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
| `email` | `str` |  |
| `first_name` | `str | None` |  |
| `id` | `str` |  |
| `last_name` | `str | None` |  |
| `role` | `str` |  |

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
| `designated_version` | `dict | None` |  |
| `designated_version_id` | `str | None` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `slug` | `str` |  |
| `status` | `str` |  |
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
| `datacenters` | `list | None` |  |
| `headquarters` | `str | None` |  |
| `name` | `str` |  |
| `privacy_policy_url` | `str | None` |  |
| `slug` | `str` |  |
| `status_page_url` | `str | None` |  |
| `terms_of_service_url` | `str | None` |  |

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
| `date` | `str` |  |
| `model_permaslug` | `str` |  |
| `total_tokens` | `str` |  |

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
| `documents` | `list` |  |
| `id` | `str` |  |
| `model` | `str` |  |
| `provider` | `str` |  |
| `query` | `str` |  |
| `results` | `list` |  |
| `top_n` | `int` |  |
| `usage` | `dict` |  |

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
| `duration` | `float` |  |
| `input_audio` | `dict` |  |
| `language` | `str` |  |
| `model` | `str` |  |
| `provider` | `dict` |  |
| `response_format` | `str` |  |
| `segments` | `list` |  |
| `task` | `str` |  |
| `temperature` | `float` |  |
| `text` | `str` |  |
| `timestamp_granularities` | `list` |  |
| `usage` | `dict` |  |
| `words` | `list` |  |

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
| `category` | `str` |  |
| `comment` | `str` |  |
| `generation_id` | `str` |  |
| `success` | `bool` |  |

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
| `as_of` | `str` |  |
| `classifications` | `list` |  |
| `macro_categories` | `list` |  |
| `window_days` | `int` |  |

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
| `input` | `str` |  |
| `model` | `str` |  |
| `provider` | `dict` |  |
| `response_format` | `str` |  |
| `speed` | `float` |  |
| `voice` | `str` |  |

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
| `allowed_models` | `list | None` |  |
| `allowed_user_ids` | `list | None` |  |
| `disabled` | `bool` |  |
| `is_fallback` | `bool` |  |
| `key` | `str` |  |
| `name` | `str | None` |  |


### UpdateGuardrail

Create an instance: `update_guardrail = client.UpdateGuardrail()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_models` | `list | None` |  |
| `allowed_providers` | `list | None` |  |
| `content_filter_builtins` | `list | None` |  |
| `content_filters` | `list | None` |  |
| `description` | `str | None` |  |
| `enforce_zdr` | `bool | None` |  |
| `enforce_zdr_anthropic` | `bool | None` |  |
| `enforce_zdr_google` | `bool | None` |  |
| `enforce_zdr_openai` | `bool | None` |  |
| `enforce_zdr_other` | `bool | None` |  |
| `enforce_zdr_xai` | `bool | None` |  |
| `ignored_models` | `list | None` |  |
| `ignored_providers` | `list | None` |  |
| `limit_usd` | `float | None` |  |
| `name` | `str` |  |
| `reset_interval` | `str | None` |  |


### UpdateObservabilityDestination

Create an instance: `update_observability_destination = client.UpdateObservabilityDestination()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hashes` | `list | None` |  |
| `config` | `dict` |  |
| `enabled` | `bool` |  |
| `filter_rules` | `Any` |  |
| `name` | `str` |  |
| `privacy_mode` | `bool` |  |
| `sampling_rate` | `float` |  |


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
| `created_at` | `str` |  |
| `created_by` | `str | None` |  |
| `default_image_model` | `str | None` |  |
| `default_provider_sort` | `str | None` |  |
| `default_text_model` | `str | None` |  |
| `description` | `str | None` |  |
| `id` | `str` |  |
| `io_logging_api_key_ids` | `list | None` |  |
| `io_logging_sampling_rate` | `float` |  |
| `is_data_discount_logging_enabled` | `bool` |  |
| `is_observability_broadcast_enabled` | `bool` |  |
| `is_observability_io_logging_enabled` | `bool` |  |
| `name` | `str` |  |
| `slug` | `str` |  |
| `updated_at` | `str | None` |  |

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
| `limit_usd` | `float` |  |


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
| `aspect_ratio` | `str` |  |
| `callback_url` | `str` |  |
| `duration` | `int` |  |
| `error` | `str` |  |
| `frame_images` | `list` |  |
| `generate_audio` | `bool` |  |
| `generation_id` | `str` |  |
| `id` | `str` |  |
| `input_references` | `list` |  |
| `model` | `str` |  |
| `polling_url` | `str` |  |
| `prompt` | `str` |  |
| `provider` | `dict` |  |
| `resolution` | `str` |  |
| `seed` | `int` |  |
| `size` | `str` |  |
| `status` | `str` |  |
| `unsigned_urls` | `list` |  |
| `usage` | `dict` |  |

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
| `allowed_passthrough_parameters` | `list` |  |
| `canonical_slug` | `str` |  |
| `created` | `int` |  |
| `description` | `str` |  |
| `generate_audio` | `bool | None` |  |
| `hugging_face_id` | `str | None` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `pricing_skus` | `dict | None` |  |
| `seed` | `bool | None` |  |
| `supported_aspect_ratios` | `list | None` |  |
| `supported_durations` | `list | None` |  |
| `supported_frame_images` | `list | None` |  |
| `supported_resolutions` | `list | None` |  |
| `supported_sizes` | `list | None` |  |

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
| `created_at` | `str` |  |
| `created_by` | `str | None` |  |
| `default_image_model` | `str | None` |  |
| `default_provider_sort` | `str | None` |  |
| `default_text_model` | `str | None` |  |
| `description` | `str | None` |  |
| `id` | `str` |  |
| `io_logging_api_key_ids` | `list | None` |  |
| `io_logging_sampling_rate` | `float` |  |
| `is_data_discount_logging_enabled` | `bool` |  |
| `is_observability_broadcast_enabled` | `bool` |  |
| `is_observability_io_logging_enabled` | `bool` |  |
| `name` | `str` |  |
| `slug` | `str` |  |
| `updated_at` | `str | None` |  |

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


### Zdr

Create an instance: `zdr = client.Zdr()`


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

- **TestFeature**: In-memory mock transport for testing without a live server

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
