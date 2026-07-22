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
`load()` returns the bare record (a `dict`) and raises on error.

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
    activitys = client.Activity().list()
    print(activitys)
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

# Entity ops return the bare record and raise on error.
activity = client.Activity().list()
# activity contains the mock response record
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

Entity operations return the bare result data (a `dict` for single-entity
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

Create an instance: `activity = client.Activity()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byok_usage_inference` | `float` |  |
| `completion_token` | `int` |  |
| `date` | `str` |  |
| `endpoint_id` | `str` |  |
| `model` | `str` |  |
| `model_permaslug` | `str` |  |
| `prompt_token` | `int` |  |
| `provider_name` | `str` |  |
| `reasoning_token` | `int` |  |
| `request` | `int` |  |
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
| `creator_user_id` | `Any` |  |
| `data` | `dict` |  |
| `disabled` | `bool` |  |
| `expires_at` | `Any` |  |
| `hash` | `str` |  |
| `include_byok_in_limit` | `bool` |  |
| `label` | `str` |  |
| `limit` | `Any` |  |
| `limit_remaining` | `Any` |  |
| `limit_reset` | `Any` |  |
| `name` | `str` |  |
| `updated_at` | `Any` |  |
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
    "data": {},  # dict
    "hash": "example_hash",  # str
    "label": "example_label",  # str
    "limit_remaining": "example_limit_remaining",  # Any
    "name": "example_name",  # str
    "updated_at": "example_updated_at",  # Any
    "usage": 1,  # float
    "usage_daily": 1,  # float
    "usage_monthly": 1,  # float
    "usage_weekly": 1,  # float
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
| `total_request` | `int` |  |
| `total_token` | `str` |  |

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
| `classifier_dimension` | `dict` |  |
| `classifier_filter` | `dict` |  |
| `data` | `dict` |  |
| `dimension` | `list` |  |
| `filter` | `list` |  |
| `granularity` | `str` |  |
| `group_limit` | `int` |  |
| `limit` | `int` |  |
| `metric` | `list` |  |
| `order_by` | `dict` |  |
| `time_range` | `dict` |  |

#### Example: Load

```python
beta_analytics = client.BetaAnalytics().load()
```

#### Example: Create

```python
beta_analytics = client.BetaAnalytics().create({
    "classifier_dimension": {},  # dict
    "classifier_filter": {},  # dict
    "data": {},  # dict
    "metric": [],  # list
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
| `user_id` | `list` |  |

#### Example: Create

```python
bulk_add_workspace_member = client.BulkAddWorkspaceMember().create({
    "workspace_id": "example_workspace_id",  # str
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
| `key_hash` | `list` |  |

#### Example: Create

```python
bulk_assign_key = client.BulkAssignKey().create({
    "guardrail_id": "example_guardrail_id",  # str
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
| `member_user_id` | `list` |  |

#### Example: Create

```python
bulk_assign_member = client.BulkAssignMember().create({
    "guardrail_id": "example_guardrail_id",  # str
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
| `user_id` | `list` |  |

#### Example: Create

```python
bulk_remove_workspace_member = client.BulkRemoveWorkspaceMember().create({
    "workspace_id": "example_workspace_id",  # str
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
| `key_hash` | `list` |  |
| `unassigned_count` | `int` |  |

#### Example: Create

```python
bulk_unassign_key = client.BulkUnassignKey().create({
    "guardrail_id": "example_guardrail_id",  # str
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
| `member_user_id` | `list` |  |
| `unassigned_count` | `int` |  |

#### Example: Create

```python
bulk_unassign_member = client.BulkUnassignMember().create({
    "guardrail_id": "example_guardrail_id",  # str
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
| `allowed_api_key_hash` | `Any` |  |
| `allowed_model` | `Any` |  |
| `allowed_user_id` | `Any` |  |
| `created_at` | `str` |  |
| `data` | `Any` |  |
| `disabled` | `bool` |  |
| `id` | `str` |  |
| `is_fallback` | `bool` |  |
| `key` | `str` |  |
| `label` | `str` |  |
| `name` | `Any` |  |
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
    "allowed_api_key_hash": "example_allowed_api_key_hash",  # Any
    "created_at": "example_created_at",  # str
    "data": "example_data",  # Any
    "id": "example_id",  # str
    "key": "example_key",  # str
    "label": "example_label",  # str
    "provider": "example_provider",  # str
    "sort_order": 1,  # int
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
| `choice` | `list` |  |
| `created` | `int` |  |
| `debug` | `dict` |  |
| `frequency_penalty` | `Any` |  |
| `id` | `str` |  |
| `image_config` | `dict` |  |
| `logit_bia` | `Any` |  |
| `logprob` | `Any` |  |
| `max_completion_token` | `Any` |  |
| `max_token` | `Any` |  |
| `message` | `list` |  |
| `metadata` | `dict` |  |
| `min_p` | `Any` |  |
| `modality` | `list` |  |
| `model` | `str` |  |
| `object` | `str` |  |
| `openrouter_metadata` | `dict` |  |
| `parallel_tool_call` | `Any` |  |
| `plugin` | `list` |  |
| `prediction` | `Any` |  |
| `presence_penalty` | `Any` |  |
| `prompt_cache_key` | `Any` |  |
| `prompt_cache_option` | `Any` |  |
| `provider` | `Any` |  |
| `reasoning` | `dict` |  |
| `reasoning_effort` | `Any` |  |
| `repetition_penalty` | `Any` |  |
| `response_format` | `Any` |  |
| `route` | `Any` |  |
| `seed` | `Any` |  |
| `service_tier` | `Any` |  |
| `session_id` | `str` |  |
| `stop` | `Any` |  |
| `stop_server_tools_when` | `list` |  |
| `stream` | `bool` |  |
| `stream_option` | `Any` |  |
| `system_fingerprint` | `Any` |  |
| `temperature` | `Any` |  |
| `tool` | `list` |  |
| `tool_choice` | `Any` |  |
| `top_a` | `Any` |  |
| `top_k` | `Any` |  |
| `top_logprob` | `Any` |  |
| `top_p` | `Any` |  |
| `trace` | `dict` |  |
| `usage` | `dict` |  |
| `user` | `str` |  |

#### Example: Create

```python
chat_result = client.ChatResult().create({
    "cache_control": {},  # dict
    "choice": [],  # list
    "created": 1,  # int
    "id": "example_id",  # str
    "message": [],  # list
    "model": "example_model",  # str
    "object": "example_object",  # str
    "openrouter_metadata": {},  # dict
    "prediction": "example_prediction",  # Any
    "prompt_cache_option": "example_prompt_cache_option",  # Any
    "system_fingerprint": "example_system_fingerprint",  # Any
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
| `api_key_hash` | `Any` |  |
| `config` | `dict` |  |
| `enabled` | `bool` |  |
| `filter_rule` | `Any` |  |
| `name` | `str` |  |
| `privacy_mode` | `bool` |  |
| `sampling_rate` | `float` |  |
| `type` | `str` |  |
| `workspace_id` | `str` |  |

#### Example: Create

```python
create_observability_destination = client.CreateObservabilityDestination().create({
    "config": {},  # dict
    "filter_rule": "example_filter_rule",  # Any
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
| `background` | `Any` |  |
| `cache_control` | `dict` |  |
| `context_management` | `Any` |  |
| `data` | `Any` |  |
| `debug` | `dict` |  |
| `fallback` | `Any` |  |
| `frequency_penalty` | `Any` |  |
| `image_config` | `dict` |  |
| `include` | `Any` |  |
| `input` | `Any` |  |
| `instruction` | `Any` |  |
| `logit_bia` | `Any` |  |
| `logprob` | `Any` |  |
| `max_completion_token` | `Any` |  |
| `max_output_token` | `Any` |  |
| `max_token` | `Any` |  |
| `max_tool_call` | `Any` |  |
| `message` | `list` |  |
| `metadata` | `dict` |  |
| `min_p` | `Any` |  |
| `modality` | `list` |  |
| `model` | `str` |  |
| `output_config` | `dict` |  |
| `parallel_tool_call` | `Any` |  |
| `plugin` | `list` |  |
| `prediction` | `Any` |  |
| `presence_penalty` | `Any` |  |
| `previous_response_id` | `str` |  |
| `prompt` | `Any` |  |
| `prompt_cache_key` | `Any` |  |
| `prompt_cache_option` | `Any` |  |
| `provider` | `Any` |  |
| `reasoning` | `dict` |  |
| `reasoning_effort` | `Any` |  |
| `repetition_penalty` | `Any` |  |
| `response_format` | `Any` |  |
| `route` | `Any` |  |
| `safety_identifier` | `Any` |  |
| `seed` | `Any` |  |
| `service_tier` | `Any` |  |
| `session_id` | `str` |  |
| `speed` | `Any` |  |
| `stop` | `Any` |  |
| `stop_sequence` | `list` |  |
| `stop_server_tools_when` | `list` |  |
| `store` | `bool` |  |
| `stream` | `bool` |  |
| `stream_option` | `Any` |  |
| `system` | `Any` |  |
| `temperature` | `Any` |  |
| `text` | `Any` |  |
| `thinking` | `Any` |  |
| `tool` | `list` |  |
| `tool_choice` | `Any` |  |
| `top_a` | `Any` |  |
| `top_k` | `Any` |  |
| `top_logprob` | `Any` |  |
| `top_p` | `Any` |  |
| `trace` | `dict` |  |
| `truncation` | `Any` |  |
| `user` | `str` |  |

#### Example: Create

```python
create_preset_from_inference = client.CreatePresetFromInference().create({
    "slug": "example_slug",  # str
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
| `data` | `dict` |  |

#### Example: Load

```python
credit = client.Credit().load()
```

#### Example: Create

```python
credit = client.Credit().create({
    "data": {},  # dict
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
| `dimension` | `int` |  |
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
| `architecture` | `dict` |  |
| `benchmark` | `dict` |  |
| `canonical_slug` | `str` |  |
| `context_length` | `Any` |  |
| `created` | `int` |  |
| `data` | `dict` |  |
| `default_parameter` | `Any` |  |
| `description` | `str` |  |
| `expiration_date` | `Any` |  |
| `hugging_face_id` | `Any` |  |
| `id` | `str` |  |
| `knowledge_cutoff` | `Any` |  |
| `latency_last_30m` | `Any` |  |
| `link` | `dict` |  |
| `max_completion_token` | `Any` |  |
| `max_prompt_token` | `Any` |  |
| `model_id` | `str` |  |
| `model_name` | `str` |  |
| `name` | `str` |  |
| `per_request_limit` | `Any` |  |
| `pricing` | `dict` |  |
| `provider_name` | `str` |  |
| `quantization` | `Any` |  |
| `reasoning` | `dict` |  |
| `status` | `int` |  |
| `supported_parameter` | `list` |  |
| `supported_voice` | `Any` |  |
| `supports_implicit_caching` | `bool` |  |
| `tag` | `str` |  |
| `throughput_last_30m` | `Any` |  |
| `top_provider` | `dict` |  |
| `uptime_last_1d` | `Any` |  |
| `uptime_last_30m` | `Any` |  |
| `uptime_last_5m` | `Any` |  |

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
| `size_byte` | `int` |  |
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
    "size_byte": 1,  # int
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
| `data` | `dict` |  |

#### Example: Load

```python
generation = client.Generation().load()
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
| `data` | `dict` |  |

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
| `allowed_model` | `Any` |  |
| `allowed_provider` | `Any` |  |
| `content_filter` | `Any` |  |
| `content_filter_builtin` | `Any` |  |
| `created_at` | `str` |  |
| `data` | `Any` |  |
| `description` | `Any` |  |
| `enforce_zdr` | `Any` |  |
| `enforce_zdr_anthropic` | `Any` |  |
| `enforce_zdr_google` | `Any` |  |
| `enforce_zdr_openai` | `Any` |  |
| `enforce_zdr_other` | `Any` |  |
| `enforce_zdr_xai` | `Any` |  |
| `id` | `str` |  |
| `ignored_model` | `Any` |  |
| `ignored_provider` | `Any` |  |
| `limit_usd` | `Any` |  |
| `name` | `str` |  |
| `reset_interval` | `Any` |  |
| `updated_at` | `Any` |  |
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
    "data": "example_data",  # Any
    "id": "example_id",  # str
    "name": "example_name",  # str
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
| `input_reference` | `list` |  |
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
| `allowed_passthrough_parameter` | `list` |  |
| `pricing` | `list` |  |
| `provider_name` | `str` |  |
| `provider_slug` | `str` |  |
| `provider_tag` | `Any` |  |
| `supported_parameter` | `Any` |  |
| `supports_streaming` | `bool` |  |

#### Example: List

```python
image_model_endpoints = client.ImageModelEndpoint().list()
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
| `endpoint` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `supported_parameter` | `dict` |  |
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
| `assigned_by` | `Any` |  |
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
| `assigned_by` | `Any` |  |
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
| `system_prompt` | `Any` |  |
| `updated_at` | `str` |  |
| `version` | `int` |  |

#### Example: List

```python
list_preset_versions = client.ListPresetVersion().list()
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
| `reset_interval` | `Any` |  |
| `updated_at` | `str` |  |
| `workspace_id` | `str` |  |

#### Example: List

```python
list_workspace_budgets = client.ListWorkspaceBudget().list()
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
list_workspace_members = client.ListWorkspaceMember().list()
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
| `context_management` | `Any` |  |
| `fallback` | `Any` |  |
| `max_token` | `int` |  |
| `message` | `Any` |  |
| `metadata` | `dict` |  |
| `model` | `str` |  |
| `output_config` | `dict` |  |
| `plugin` | `list` |  |
| `provider` | `Any` |  |
| `route` | `Any` |  |
| `service_tier` | `str` |  |
| `session_id` | `str` |  |
| `speed` | `Any` |  |
| `stop_sequence` | `list` |  |
| `stop_server_tools_when` | `list` |  |
| `stream` | `bool` |  |
| `system` | `Any` |  |
| `temperature` | `float` |  |
| `thinking` | `Any` |  |
| `tool` | `list` |  |
| `tool_choice` | `Any` |  |
| `top_k` | `int` |  |
| `top_p` | `float` |  |
| `trace` | `dict` |  |
| `user` | `str` |  |

#### Example: Create

```python
message = client.Message().create({
    "cache_control": {},  # dict
    "message": "example_message",  # Any
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
| `benchmark` | `dict` |  |
| `canonical_slug` | `str` |  |
| `context_length` | `Any` |  |
| `created` | `int` |  |
| `data` | `dict` |  |
| `default_parameter` | `Any` |  |
| `description` | `str` |  |
| `expiration_date` | `Any` |  |
| `hugging_face_id` | `Any` |  |
| `id` | `str` |  |
| `knowledge_cutoff` | `Any` |  |
| `link` | `dict` |  |
| `name` | `str` |  |
| `per_request_limit` | `Any` |  |
| `pricing` | `dict` |  |
| `reasoning` | `dict` |  |
| `supported_parameter` | `list` |  |
| `supported_voice` | `Any` |  |
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
| `data` | `dict` |  |

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
| `benchmark` | `dict` |  |
| `canonical_slug` | `str` |  |
| `context_length` | `Any` |  |
| `created` | `int` |  |
| `default_parameter` | `Any` |  |
| `description` | `str` |  |
| `expiration_date` | `Any` |  |
| `hugging_face_id` | `Any` |  |
| `id` | `str` |  |
| `knowledge_cutoff` | `Any` |  |
| `link` | `dict` |  |
| `name` | `str` |  |
| `per_request_limit` | `Any` |  |
| `pricing` | `dict` |  |
| `reasoning` | `dict` |  |
| `supported_parameter` | `list` |  |
| `supported_voice` | `Any` |  |
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
| `callback_url` | `str` |  |
| `code` | `str` |  |
| `code_challenge` | `str` |  |
| `code_challenge_method` | `Any` |  |
| `code_verifier` | `str` |  |
| `data` | `dict` |  |
| `expires_at` | `Any` |  |
| `key` | `str` |  |
| `key_label` | `str` |  |
| `limit` | `float` |  |
| `spawn_agent` | `str` |  |
| `spawn_cloud` | `str` |  |
| `usage_limit_type` | `str` |  |
| `user_id` | `Any` |  |
| `workspace_id` | `str` |  |

#### Example: Create

```python
o_auth = client.OAuth().create({
    "callback_url": "example_callback_url",  # str
    "code": "example_code",  # str
    "data": {},  # dict
    "key": "example_key",  # str
    "user_id": "example_user_id",  # Any
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
| `data` | `Any` |  |

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
| `background` | `Any` |  |
| `cache_control` | `dict` |  |
| `debug` | `dict` |  |
| `frequency_penalty` | `Any` |  |
| `image_config` | `dict` |  |
| `include` | `Any` |  |
| `input` | `Any` |  |
| `instruction` | `Any` |  |
| `max_output_token` | `Any` |  |
| `max_tool_call` | `Any` |  |
| `metadata` | `Any` |  |
| `modality` | `list` |  |
| `model` | `str` |  |
| `parallel_tool_call` | `Any` |  |
| `plugin` | `list` |  |
| `presence_penalty` | `Any` |  |
| `previous_response_id` | `str` |  |
| `prompt` | `Any` |  |
| `prompt_cache_key` | `Any` |  |
| `prompt_cache_option` | `Any` |  |
| `provider` | `Any` |  |
| `reasoning` | `Any` |  |
| `route` | `Any` |  |
| `safety_identifier` | `Any` |  |
| `service_tier` | `Any` |  |
| `session_id` | `str` |  |
| `stop_server_tools_when` | `list` |  |
| `store` | `bool` |  |
| `stream` | `bool` |  |
| `temperature` | `Any` |  |
| `text` | `Any` |  |
| `tool` | `list` |  |
| `tool_choice` | `Any` |  |
| `top_k` | `int` |  |
| `top_logprob` | `Any` |  |
| `top_p` | `Any` |  |
| `trace` | `dict` |  |
| `truncation` | `Any` |  |
| `user` | `str` |  |

#### Example: Create

```python
open_responses_result = client.OpenResponsesResult().create({
    "cache_control": {},  # dict
    "prompt": "example_prompt",  # Any
    "prompt_cache_option": "example_prompt_cache_option",  # Any
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
| `first_name` | `Any` |  |
| `id` | `str` |  |
| `last_name` | `Any` |  |
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
| `creator_user_id` | `Any` |  |
| `data` | `Any` |  |
| `description` | `Any` |  |
| `designated_version_id` | `Any` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `slug` | `str` |  |
| `status` | `str` |  |
| `status_updated_at` | `Any` |  |
| `updated_at` | `str` |  |
| `workspace_id` | `Any` |  |

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
| `data` | `Any` |  |

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
| `datacenter` | `Any` |  |
| `headquarter` | `Any` |  |
| `name` | `str` |  |
| `privacy_policy_url` | `Any` |  |
| `slug` | `str` |  |
| `status_page_url` | `Any` |  |
| `terms_of_service_url` | `Any` |  |

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
| `total_token` | `str` |  |

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
| `document` | `list` |  |
| `id` | `str` |  |
| `model` | `str` |  |
| `provider` | `str` |  |
| `query` | `str` |  |
| `result` | `list` |  |
| `top_n` | `int` |  |
| `usage` | `dict` |  |

#### Example: Create

```python
rerank = client.Rerank().create({
    "document": [],  # list
    "model": "example_model",  # str
    "query": "example_query",  # str
    "result": [],  # list
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
| `segment` | `list` |  |
| `task` | `str` |  |
| `temperature` | `float` |  |
| `text` | `str` |  |
| `timestamp_granularity` | `list` |  |
| `usage` | `dict` |  |
| `word` | `list` |  |

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
| `data` | `dict` |  |
| `generation_id` | `str` |  |

#### Example: Create

```python
submit_generation_feedback = client.SubmitGenerationFeedback().create({
    "category": "example_category",  # str
    "data": {},  # dict
    "generation_id": "example_generation_id",  # str
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
| `data` | `dict` |  |

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
| `allowed_model` | `Any` |  |
| `allowed_user_id` | `Any` |  |
| `data` | `Any` |  |
| `disabled` | `bool` |  |
| `is_fallback` | `bool` |  |
| `key` | `str` |  |
| `name` | `Any` |  |


### UpdateGuardrail

Create an instance: `update_guardrail = client.UpdateGuardrail()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_model` | `Any` |  |
| `allowed_provider` | `Any` |  |
| `content_filter` | `Any` |  |
| `content_filter_builtin` | `Any` |  |
| `data` | `Any` |  |
| `description` | `Any` |  |
| `enforce_zdr` | `Any` |  |
| `enforce_zdr_anthropic` | `Any` |  |
| `enforce_zdr_google` | `Any` |  |
| `enforce_zdr_openai` | `Any` |  |
| `enforce_zdr_other` | `Any` |  |
| `enforce_zdr_xai` | `Any` |  |
| `ignored_model` | `Any` |  |
| `ignored_provider` | `Any` |  |
| `limit_usd` | `Any` |  |
| `name` | `str` |  |
| `reset_interval` | `Any` |  |


### UpdateObservabilityDestination

Create an instance: `update_observability_destination = client.UpdateObservabilityDestination()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hash` | `Any` |  |
| `config` | `dict` |  |
| `data` | `Any` |  |
| `enabled` | `bool` |  |
| `filter_rule` | `Any` |  |
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
| `created_by` | `Any` |  |
| `data` | `Any` |  |
| `default_image_model` | `Any` |  |
| `default_provider_sort` | `Any` |  |
| `default_text_model` | `Any` |  |
| `description` | `Any` |  |
| `id` | `str` |  |
| `io_logging_api_key_id` | `Any` |  |
| `io_logging_sampling_rate` | `float` |  |
| `is_data_discount_logging_enabled` | `bool` |  |
| `is_observability_broadcast_enabled` | `bool` |  |
| `is_observability_io_logging_enabled` | `bool` |  |
| `name` | `str` |  |
| `slug` | `str` |  |
| `updated_at` | `Any` |  |

#### Example: List

```python
update_workspaces = client.UpdateWorkspace().list()
```

#### Example: Create

```python
update_workspace = client.UpdateWorkspace().create({
    "created_at": "example_created_at",  # str
    "created_by": "example_created_by",  # Any
    "data": "example_data",  # Any
    "id": "example_id",  # str
    "name": "example_name",  # str
    "slug": "example_slug",  # str
    "updated_at": "example_updated_at",  # Any
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
| `data` | `Any` |  |
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
| `frame_image` | `list` |  |
| `generate_audio` | `bool` |  |
| `generation_id` | `str` |  |
| `id` | `str` |  |
| `input_reference` | `list` |  |
| `model` | `str` |  |
| `polling_url` | `str` |  |
| `prompt` | `str` |  |
| `provider` | `dict` |  |
| `resolution` | `str` |  |
| `seed` | `int` |  |
| `size` | `str` |  |
| `status` | `str` |  |
| `unsigned_url` | `list` |  |
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
| `allowed_passthrough_parameter` | `list` |  |
| `canonical_slug` | `str` |  |
| `created` | `int` |  |
| `description` | `str` |  |
| `generate_audio` | `Any` |  |
| `hugging_face_id` | `Any` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `pricing_skus` | `Any` |  |
| `seed` | `Any` |  |
| `supported_aspect_ratio` | `Any` |  |
| `supported_duration` | `Any` |  |
| `supported_frame_image` | `Any` |  |
| `supported_resolution` | `Any` |  |
| `supported_size` | `Any` |  |

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
| `data` | `Any` |  |

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
activity = client.Activity()
activity.list()

# activity.data_get() now returns the activity data from the last list
# activity.match_get() returns the last match criteria
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
