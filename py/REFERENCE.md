# OpenrouterModels Python SDK Reference

Complete API reference for the OpenrouterModels Python SDK.


## OpenrouterModelsSDK

### Constructor

```python
from openroutermodels_sdk import OpenrouterModelsSDK

client = OpenrouterModelsSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `OpenrouterModelsSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = OpenrouterModelsSDK.test()
```


### Instance Methods

#### `Activity(data=None)`

Create a new `ActivityEntity` instance. Pass `None` for no initial data.

#### `Add(data=None)`

Create a new `AddEntity` instance. Pass `None` for no initial data.

#### `ApiKey(data=None)`

Create a new `ApiKeyEntity` instance. Pass `None` for no initial data.

#### `AppRanking(data=None)`

Create a new `AppRankingEntity` instance. Pass `None` for no initial data.

#### `Benchmark(data=None)`

Create a new `BenchmarkEntity` instance. Pass `None` for no initial data.

#### `BetaAnalytics(data=None)`

Create a new `BetaAnalyticsEntity` instance. Pass `None` for no initial data.

#### `Budget(data=None)`

Create a new `BudgetEntity` instance. Pass `None` for no initial data.

#### `BulkAddWorkspaceMember(data=None)`

Create a new `BulkAddWorkspaceMemberEntity` instance. Pass `None` for no initial data.

#### `BulkAssignKey(data=None)`

Create a new `BulkAssignKeyEntity` instance. Pass `None` for no initial data.

#### `BulkAssignMember(data=None)`

Create a new `BulkAssignMemberEntity` instance. Pass `None` for no initial data.

#### `BulkRemoveWorkspaceMember(data=None)`

Create a new `BulkRemoveWorkspaceMemberEntity` instance. Pass `None` for no initial data.

#### `BulkUnassignKey(data=None)`

Create a new `BulkUnassignKeyEntity` instance. Pass `None` for no initial data.

#### `BulkUnassignMember(data=None)`

Create a new `BulkUnassignMemberEntity` instance. Pass `None` for no initial data.

#### `Byok(data=None)`

Create a new `ByokEntity` instance. Pass `None` for no initial data.

#### `ChatResult(data=None)`

Create a new `ChatResultEntity` instance. Pass `None` for no initial data.

#### `Code(data=None)`

Create a new `CodeEntity` instance. Pass `None` for no initial data.

#### `Coinbase(data=None)`

Create a new `CoinbaseEntity` instance. Pass `None` for no initial data.

#### `Completion(data=None)`

Create a new `CompletionEntity` instance. Pass `None` for no initial data.

#### `Content(data=None)`

Create a new `ContentEntity` instance. Pass `None` for no initial data.

#### `Count(data=None)`

Create a new `CountEntity` instance. Pass `None` for no initial data.

#### `CreateByokKey(data=None)`

Create a new `CreateByokKeyEntity` instance. Pass `None` for no initial data.

#### `CreateGuardrail(data=None)`

Create a new `CreateGuardrailEntity` instance. Pass `None` for no initial data.

#### `CreateObservabilityDestination(data=None)`

Create a new `CreateObservabilityDestinationEntity` instance. Pass `None` for no initial data.

#### `CreatePresetFromInference(data=None)`

Create a new `CreatePresetFromInferenceEntity` instance. Pass `None` for no initial data.

#### `CreateWorkspace(data=None)`

Create a new `CreateWorkspaceEntity` instance. Pass `None` for no initial data.

#### `Credit(data=None)`

Create a new `CreditEntity` instance. Pass `None` for no initial data.

#### `Destination(data=None)`

Create a new `DestinationEntity` instance. Pass `None` for no initial data.

#### `Embedding(data=None)`

Create a new `EmbeddingEntity` instance. Pass `None` for no initial data.

#### `Endpoint(data=None)`

Create a new `EndpointEntity` instance. Pass `None` for no initial data.

#### `Feedback(data=None)`

Create a new `FeedbackEntity` instance. Pass `None` for no initial data.

#### `File(data=None)`

Create a new `FileEntity` instance. Pass `None` for no initial data.

#### `Generation(data=None)`

Create a new `GenerationEntity` instance. Pass `None` for no initial data.

#### `GenerationContent(data=None)`

Create a new `GenerationContentEntity` instance. Pass `None` for no initial data.

#### `Guardrail(data=None)`

Create a new `GuardrailEntity` instance. Pass `None` for no initial data.

#### `Image(data=None)`

Create a new `ImageEntity` instance. Pass `None` for no initial data.

#### `ImageModelEndpoint(data=None)`

Create a new `ImageModelEndpointEntity` instance. Pass `None` for no initial data.

#### `ImageModelsList(data=None)`

Create a new `ImageModelsListEntity` instance. Pass `None` for no initial data.

#### `Key(data=None)`

Create a new `KeyEntity` instance. Pass `None` for no initial data.

#### `ListByokKey(data=None)`

Create a new `ListByokKeyEntity` instance. Pass `None` for no initial data.

#### `ListGuardrail(data=None)`

Create a new `ListGuardrailEntity` instance. Pass `None` for no initial data.

#### `ListKeyAssignment(data=None)`

Create a new `ListKeyAssignmentEntity` instance. Pass `None` for no initial data.

#### `ListMemberAssignment(data=None)`

Create a new `ListMemberAssignmentEntity` instance. Pass `None` for no initial data.

#### `ListObservabilityDestination(data=None)`

Create a new `ListObservabilityDestinationEntity` instance. Pass `None` for no initial data.

#### `ListPreset(data=None)`

Create a new `ListPresetEntity` instance. Pass `None` for no initial data.

#### `ListPresetVersion(data=None)`

Create a new `ListPresetVersionEntity` instance. Pass `None` for no initial data.

#### `ListWorkspace(data=None)`

Create a new `ListWorkspaceEntity` instance. Pass `None` for no initial data.

#### `ListWorkspaceBudget(data=None)`

Create a new `ListWorkspaceBudgetEntity` instance. Pass `None` for no initial data.

#### `ListWorkspaceMember(data=None)`

Create a new `ListWorkspaceMemberEntity` instance. Pass `None` for no initial data.

#### `Member(data=None)`

Create a new `MemberEntity` instance. Pass `None` for no initial data.

#### `Message(data=None)`

Create a new `MessageEntity` instance. Pass `None` for no initial data.

#### `Meta(data=None)`

Create a new `MetaEntity` instance. Pass `None` for no initial data.

#### `Model(data=None)`

Create a new `ModelEntity` instance. Pass `None` for no initial data.

#### `ModelsCount(data=None)`

Create a new `ModelsCountEntity` instance. Pass `None` for no initial data.

#### `ModelsList(data=None)`

Create a new `ModelsListEntity` instance. Pass `None` for no initial data.

#### `OAuth(data=None)`

Create a new `OAuthEntity` instance. Pass `None` for no initial data.

#### `ObservabilityDestination(data=None)`

Create a new `ObservabilityDestinationEntity` instance. Pass `None` for no initial data.

#### `OpenResponsesResult(data=None)`

Create a new `OpenResponsesResultEntity` instance. Pass `None` for no initial data.

#### `Organization(data=None)`

Create a new `OrganizationEntity` instance. Pass `None` for no initial data.

#### `Preset(data=None)`

Create a new `PresetEntity` instance. Pass `None` for no initial data.

#### `PresetVersion(data=None)`

Create a new `PresetVersionEntity` instance. Pass `None` for no initial data.

#### `Provider(data=None)`

Create a new `ProviderEntity` instance. Pass `None` for no initial data.

#### `Query(data=None)`

Create a new `QueryEntity` instance. Pass `None` for no initial data.

#### `RankingsDaily(data=None)`

Create a new `RankingsDailyEntity` instance. Pass `None` for no initial data.

#### `Remove(data=None)`

Create a new `RemoveEntity` instance. Pass `None` for no initial data.

#### `Rerank(data=None)`

Create a new `RerankEntity` instance. Pass `None` for no initial data.

#### `Response(data=None)`

Create a new `ResponseEntity` instance. Pass `None` for no initial data.

#### `Speech(data=None)`

Create a new `SpeechEntity` instance. Pass `None` for no initial data.

#### `Stt(data=None)`

Create a new `SttEntity` instance. Pass `None` for no initial data.

#### `SubmitGenerationFeedback(data=None)`

Create a new `SubmitGenerationFeedbackEntity` instance. Pass `None` for no initial data.

#### `Task(data=None)`

Create a new `TaskEntity` instance. Pass `None` for no initial data.

#### `Transcription(data=None)`

Create a new `TranscriptionEntity` instance. Pass `None` for no initial data.

#### `Tts(data=None)`

Create a new `TtsEntity` instance. Pass `None` for no initial data.

#### `UnifiedBenchmark(data=None)`

Create a new `UnifiedBenchmarkEntity` instance. Pass `None` for no initial data.

#### `UpdateByokKey(data=None)`

Create a new `UpdateByokKeyEntity` instance. Pass `None` for no initial data.

#### `UpdateGuardrail(data=None)`

Create a new `UpdateGuardrailEntity` instance. Pass `None` for no initial data.

#### `UpdateObservabilityDestination(data=None)`

Create a new `UpdateObservabilityDestinationEntity` instance. Pass `None` for no initial data.

#### `UpdateWorkspace(data=None)`

Create a new `UpdateWorkspaceEntity` instance. Pass `None` for no initial data.

#### `UpsertWorkspaceBudget(data=None)`

Create a new `UpsertWorkspaceBudgetEntity` instance. Pass `None` for no initial data.

#### `User(data=None)`

Create a new `UserEntity` instance. Pass `None` for no initial data.

#### `Version(data=None)`

Create a new `VersionEntity` instance. Pass `None` for no initial data.

#### `Video(data=None)`

Create a new `VideoEntity` instance. Pass `None` for no initial data.

#### `VideoGeneration(data=None)`

Create a new `VideoGenerationEntity` instance. Pass `None` for no initial data.

#### `VideoModelsList(data=None)`

Create a new `VideoModelsListEntity` instance. Pass `None` for no initial data.

#### `Workspace(data=None)`

Create a new `WorkspaceEntity` instance. Pass `None` for no initial data.

#### `WorkspaceBudget(data=None)`

Create a new `WorkspaceBudgetEntity` instance. Pass `None` for no initial data.

#### `Zdr(data=None)`

Create a new `ZdrEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ActivityEntity

```python
activity = client.Activity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byok_usage_inference` | `float` | Yes |  |
| `completion_token` | `int` | Yes |  |
| `date` | `str` | Yes |  |
| `endpoint_id` | `str` | Yes |  |
| `model` | `str` | Yes |  |
| `model_permaslug` | `str` | Yes |  |
| `prompt_token` | `int` | Yes |  |
| `provider_name` | `str` | Yes |  |
| `reasoning_token` | `int` | Yes |  |
| `request` | `int` | Yes |  |
| `usage` | `float` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Activity().list()
for activity in results:
    print(activity)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AddEntity

```python
add = client.Add()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AddEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiKeyEntity

```python
api_key = client.ApiKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byok_usage` | `float` | Yes |  |
| `byok_usage_daily` | `float` | Yes |  |
| `byok_usage_monthly` | `float` | Yes |  |
| `byok_usage_weekly` | `float` | Yes |  |
| `created_at` | `str` | Yes |  |
| `creator_user_id` | `Any` | No |  |
| `data` | `dict` | Yes |  |
| `disabled` | `bool` | No |  |
| `expires_at` | `Any` | No |  |
| `hash` | `str` | Yes |  |
| `include_byok_in_limit` | `bool` | No |  |
| `label` | `str` | Yes |  |
| `limit` | `Any` | No |  |
| `limit_remaining` | `Any` | Yes |  |
| `limit_reset` | `Any` | No |  |
| `name` | `str` | Yes |  |
| `updated_at` | `Any` | Yes |  |
| `usage` | `float` | Yes |  |
| `usage_daily` | `float` | Yes |  |
| `usage_monthly` | `float` | Yes |  |
| `usage_weekly` | `float` | Yes |  |
| `workspace_id` | `str` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `byok_usage` | - | - | - | - | - |
| `byok_usage_daily` | - | - | - | - | - |
| `byok_usage_monthly` | - | - | - | - | - |
| `byok_usage_weekly` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `creator_user_id` | - | Yes | - | - | - |
| `data` | - | - | - | - | - |
| `disabled` | - | Yes | - | - | - |
| `expires_at` | - | - | - | - | - |
| `hash` | - | - | - | - | - |
| `include_byok_in_limit` | - | Yes | - | - | - |
| `label` | - | - | - | - | - |
| `limit` | - | Yes | - | - | - |
| `limit_remaining` | - | - | - | - | - |
| `limit_reset` | - | Yes | - | - | - |
| `name` | - | - | - | Yes | - |
| `updated_at` | - | - | - | - | - |
| `usage` | - | - | - | - | - |
| `usage_daily` | - | - | - | - | - |
| `usage_monthly` | - | - | - | - | - |
| `usage_weekly` | - | - | - | - | - |
| `workspace_id` | - | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiKey().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiKey().list()
for api_key in results:
    print(api_key)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiKey().load({"id": "api_key_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ApiKey().remove({"id": "api_key_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiKey().update({
    "id": "api_key_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AppRankingEntity

```python
app_ranking = client.AppRanking()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `int` | Yes |  |
| `app_name` | `str` | Yes |  |
| `rank` | `int` | Yes |  |
| `total_request` | `int` | Yes |  |
| `total_token` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AppRanking().list()
for app_ranking in results:
    print(app_ranking)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AppRankingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BenchmarkEntity

```python
benchmark = client.Benchmark()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BenchmarkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BetaAnalyticsEntity

```python
beta_analytics = client.BetaAnalytics()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `classifier_dimension` | `dict` | Yes |  |
| `classifier_filter` | `dict` | Yes |  |
| `data` | `dict` | Yes |  |
| `dimension` | `list` | No |  |
| `filter` | `list` | No |  |
| `granularity` | `str` | No |  |
| `group_limit` | `int` | No |  |
| `limit` | `int` | No |  |
| `metric` | `list` | Yes |  |
| `order_by` | `dict` | Yes |  |
| `time_range` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BetaAnalytics().create({
    "classifier_dimension": {},  # dict
    "classifier_filter": {},  # dict
    "data": {},  # dict
    "metric": [],  # list
    "order_by": {},  # dict
    "time_range": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BetaAnalytics().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BetaAnalyticsEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BudgetEntity

```python
budget = client.Budget()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BudgetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BulkAddWorkspaceMemberEntity

```python
bulk_add_workspace_member = client.BulkAddWorkspaceMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `added_count` | `int` | Yes |  |
| `data` | `list` | Yes |  |
| `user_id` | `list` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BulkAddWorkspaceMember().create({
    "workspace_id": "example_workspace_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkAddWorkspaceMemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BulkAssignKeyEntity

```python
bulk_assign_key = client.BulkAssignKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_count` | `int` | Yes |  |
| `key_hash` | `list` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BulkAssignKey().create({
    "guardrail_id": "example_guardrail_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkAssignKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BulkAssignMemberEntity

```python
bulk_assign_member = client.BulkAssignMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_count` | `int` | Yes |  |
| `member_user_id` | `list` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BulkAssignMember().create({
    "guardrail_id": "example_guardrail_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkAssignMemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BulkRemoveWorkspaceMemberEntity

```python
bulk_remove_workspace_member = client.BulkRemoveWorkspaceMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `removed_count` | `int` | Yes |  |
| `user_id` | `list` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BulkRemoveWorkspaceMember().create({
    "workspace_id": "example_workspace_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkRemoveWorkspaceMemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BulkUnassignKeyEntity

```python
bulk_unassign_key = client.BulkUnassignKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key_hash` | `list` | Yes |  |
| `unassigned_count` | `int` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BulkUnassignKey().create({
    "guardrail_id": "example_guardrail_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkUnassignKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BulkUnassignMemberEntity

```python
bulk_unassign_member = client.BulkUnassignMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `member_user_id` | `list` | Yes |  |
| `unassigned_count` | `int` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BulkUnassignMember().create({
    "guardrail_id": "example_guardrail_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkUnassignMemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ByokEntity

```python
byok = client.Byok()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_api_key_hash` | `Any` | Yes |  |
| `allowed_model` | `Any` | No |  |
| `allowed_user_id` | `Any` | No |  |
| `created_at` | `str` | Yes |  |
| `data` | `Any` | Yes |  |
| `disabled` | `bool` | No |  |
| `id` | `str` | Yes |  |
| `is_fallback` | `bool` | No |  |
| `key` | `str` | Yes |  |
| `label` | `str` | Yes |  |
| `name` | `Any` | No |  |
| `provider` | `str` | Yes |  |
| `sort_order` | `int` | Yes |  |
| `workspace_id` | `str` | No |  |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `allowed_api_key_hash` | - | - | - | - |
| `allowed_model` | - | Yes | - | - |
| `allowed_user_id` | - | Yes | - | - |
| `created_at` | - | - | - | - |
| `data` | - | - | - | - |
| `disabled` | - | Yes | - | - |
| `id` | - | - | - | - |
| `is_fallback` | - | Yes | - | - |
| `key` | - | - | - | - |
| `label` | - | - | - | - |
| `name` | - | - | - | - |
| `provider` | - | - | - | - |
| `sort_order` | - | - | - | - |
| `workspace_id` | - | Yes | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Byok().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Byok().list()
for byok in results:
    print(byok)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Byok().load({"id": "byok_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Byok().remove({"id": "byok_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ByokEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ChatResultEntity

```python
chat_result = client.ChatResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_control` | `dict` | Yes |  |
| `choice` | `list` | Yes |  |
| `created` | `int` | Yes |  |
| `debug` | `dict` | No |  |
| `frequency_penalty` | `Any` | No |  |
| `id` | `str` | Yes |  |
| `image_config` | `dict` | No |  |
| `logit_bia` | `Any` | No |  |
| `logprob` | `Any` | No |  |
| `max_completion_token` | `Any` | No |  |
| `max_token` | `Any` | No |  |
| `message` | `list` | Yes |  |
| `metadata` | `dict` | No |  |
| `min_p` | `Any` | No |  |
| `modality` | `list` | No |  |
| `model` | `str` | Yes |  |
| `object` | `str` | Yes |  |
| `openrouter_metadata` | `dict` | Yes |  |
| `parallel_tool_call` | `Any` | No |  |
| `plugin` | `list` | No |  |
| `prediction` | `Any` | Yes |  |
| `presence_penalty` | `Any` | No |  |
| `prompt_cache_key` | `Any` | No |  |
| `prompt_cache_option` | `Any` | Yes |  |
| `provider` | `Any` | No |  |
| `reasoning` | `dict` | No |  |
| `reasoning_effort` | `Any` | No |  |
| `repetition_penalty` | `Any` | No |  |
| `response_format` | `Any` | No |  |
| `route` | `Any` | No |  |
| `seed` | `Any` | No |  |
| `service_tier` | `Any` | No |  |
| `session_id` | `str` | No |  |
| `stop` | `Any` | No |  |
| `stop_server_tools_when` | `list` | No |  |
| `stream` | `bool` | No |  |
| `stream_option` | `Any` | No |  |
| `system_fingerprint` | `Any` | Yes |  |
| `temperature` | `Any` | No |  |
| `tool` | `list` | No |  |
| `tool_choice` | `Any` | No |  |
| `top_a` | `Any` | No |  |
| `top_k` | `Any` | No |  |
| `top_logprob` | `Any` | No |  |
| `top_p` | `Any` | No |  |
| `trace` | `dict` | No |  |
| `usage` | `dict` | Yes |  |
| `user` | `str` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `cache_control` | - |
| `choice` | - |
| `created` | - |
| `debug` | - |
| `frequency_penalty` | - |
| `id` | - |
| `image_config` | - |
| `logit_bia` | - |
| `logprob` | - |
| `max_completion_token` | - |
| `max_token` | - |
| `message` | - |
| `metadata` | - |
| `min_p` | - |
| `modality` | - |
| `model` | Yes |
| `object` | - |
| `openrouter_metadata` | - |
| `parallel_tool_call` | - |
| `plugin` | - |
| `prediction` | - |
| `presence_penalty` | - |
| `prompt_cache_key` | - |
| `prompt_cache_option` | - |
| `provider` | - |
| `reasoning` | - |
| `reasoning_effort` | - |
| `repetition_penalty` | - |
| `response_format` | - |
| `route` | - |
| `seed` | - |
| `service_tier` | - |
| `session_id` | - |
| `stop` | - |
| `stop_server_tools_when` | - |
| `stream` | - |
| `stream_option` | - |
| `system_fingerprint` | - |
| `temperature` | - |
| `tool` | - |
| `tool_choice` | - |
| `top_a` | - |
| `top_k` | - |
| `top_logprob` | - |
| `top_p` | - |
| `trace` | - |
| `usage` | - |
| `user` | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ChatResult().create({
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

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChatResultEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeEntity

```python
code = client.Code()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CoinbaseEntity

```python
coinbase = client.Coinbase()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CoinbaseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CompletionEntity

```python
completion = client.Completion()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompletionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContentEntity

```python
content = client.Content()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CountEntity

```python
count = client.Count()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateByokKeyEntity

```python
create_byok_key = client.CreateByokKey()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateByokKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateGuardrailEntity

```python
create_guardrail = client.CreateGuardrail()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateGuardrailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateObservabilityDestinationEntity

```python
create_observability_destination = client.CreateObservabilityDestination()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_key_hash` | `Any` | No |  |
| `config` | `dict` | Yes |  |
| `enabled` | `bool` | No |  |
| `filter_rule` | `Any` | Yes |  |
| `name` | `str` | Yes |  |
| `privacy_mode` | `bool` | No |  |
| `sampling_rate` | `float` | No |  |
| `type` | `str` | Yes |  |
| `workspace_id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CreateObservabilityDestination().create({
    "config": {},  # dict
    "filter_rule": "example_filter_rule",  # Any
    "name": "example_name",  # str
    "type": "example_type",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateObservabilityDestinationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreatePresetFromInferenceEntity

```python
create_preset_from_inference = client.CreatePresetFromInference()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `background` | `Any` | No |  |
| `cache_control` | `dict` | Yes |  |
| `context_management` | `Any` | No |  |
| `data` | `Any` | Yes |  |
| `debug` | `dict` | No |  |
| `fallback` | `Any` | No |  |
| `frequency_penalty` | `Any` | No |  |
| `image_config` | `dict` | No |  |
| `include` | `Any` | No |  |
| `input` | `Any` | No |  |
| `instruction` | `Any` | No |  |
| `logit_bia` | `Any` | No |  |
| `logprob` | `Any` | No |  |
| `max_completion_token` | `Any` | No |  |
| `max_output_token` | `Any` | No |  |
| `max_token` | `Any` | No |  |
| `max_tool_call` | `Any` | No |  |
| `message` | `list` | Yes |  |
| `metadata` | `dict` | No |  |
| `min_p` | `Any` | No |  |
| `modality` | `list` | No |  |
| `model` | `str` | No |  |
| `output_config` | `dict` | No |  |
| `parallel_tool_call` | `Any` | No |  |
| `plugin` | `list` | No |  |
| `prediction` | `Any` | Yes |  |
| `presence_penalty` | `Any` | No |  |
| `previous_response_id` | `str` | No |  |
| `prompt` | `Any` | Yes |  |
| `prompt_cache_key` | `Any` | No |  |
| `prompt_cache_option` | `Any` | Yes |  |
| `provider` | `Any` | No |  |
| `reasoning` | `dict` | No |  |
| `reasoning_effort` | `Any` | No |  |
| `repetition_penalty` | `Any` | No |  |
| `response_format` | `Any` | No |  |
| `route` | `Any` | No |  |
| `safety_identifier` | `Any` | No |  |
| `seed` | `Any` | No |  |
| `service_tier` | `Any` | No |  |
| `session_id` | `str` | No |  |
| `speed` | `Any` | No |  |
| `stop` | `Any` | No |  |
| `stop_sequence` | `list` | No |  |
| `stop_server_tools_when` | `list` | No |  |
| `store` | `bool` | No |  |
| `stream` | `bool` | No |  |
| `stream_option` | `Any` | No |  |
| `system` | `Any` | No |  |
| `temperature` | `Any` | No |  |
| `text` | `Any` | No |  |
| `thinking` | `Any` | No |  |
| `tool` | `list` | No |  |
| `tool_choice` | `Any` | No |  |
| `top_a` | `Any` | No |  |
| `top_k` | `Any` | No |  |
| `top_logprob` | `Any` | No |  |
| `top_p` | `Any` | No |  |
| `trace` | `dict` | No |  |
| `truncation` | `Any` | No |  |
| `user` | `str` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `background` | - |
| `cache_control` | - |
| `context_management` | - |
| `data` | - |
| `debug` | - |
| `fallback` | - |
| `frequency_penalty` | - |
| `image_config` | - |
| `include` | - |
| `input` | - |
| `instruction` | - |
| `logit_bia` | - |
| `logprob` | - |
| `max_completion_token` | - |
| `max_output_token` | - |
| `max_token` | - |
| `max_tool_call` | - |
| `message` | - |
| `metadata` | - |
| `min_p` | - |
| `modality` | - |
| `model` | Yes |
| `output_config` | - |
| `parallel_tool_call` | - |
| `plugin` | - |
| `prediction` | - |
| `presence_penalty` | - |
| `previous_response_id` | - |
| `prompt` | - |
| `prompt_cache_key` | - |
| `prompt_cache_option` | - |
| `provider` | - |
| `reasoning` | - |
| `reasoning_effort` | - |
| `repetition_penalty` | - |
| `response_format` | - |
| `route` | - |
| `safety_identifier` | - |
| `seed` | - |
| `service_tier` | - |
| `session_id` | - |
| `speed` | - |
| `stop` | - |
| `stop_sequence` | - |
| `stop_server_tools_when` | - |
| `store` | - |
| `stream` | - |
| `stream_option` | - |
| `system` | - |
| `temperature` | - |
| `text` | - |
| `thinking` | - |
| `tool` | - |
| `tool_choice` | - |
| `top_a` | - |
| `top_k` | - |
| `top_logprob` | - |
| `top_p` | - |
| `trace` | - |
| `truncation` | - |
| `user` | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CreatePresetFromInference().create({
    "slug": "example_slug",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreatePresetFromInferenceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateWorkspaceEntity

```python
create_workspace = client.CreateWorkspace()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateWorkspaceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreditEntity

```python
credit = client.Credit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Credit().create({
    "data": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Credit().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreditEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DestinationEntity

```python
destination = client.Destination()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DestinationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmbeddingEntity

```python
embedding = client.Embedding()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | Yes |  |
| `dimension` | `int` | No |  |
| `encoding_format` | `str` | No |  |
| `id` | `str` | No |  |
| `input` | `Any` | Yes |  |
| `input_type` | `str` | No |  |
| `model` | `str` | Yes |  |
| `object` | `str` | Yes |  |
| `provider` | `Any` | No |  |
| `usage` | `dict` | Yes |  |
| `user` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Embedding().create({
    "data": [],  # list
    "input": "example_input",  # Any
    "model": "example_model",  # str
    "object": "example_object",  # str
    "usage": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmbeddingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EndpointEntity

```python
endpoint = client.Endpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `dict` | Yes |  |
| `benchmark` | `dict` | Yes |  |
| `canonical_slug` | `str` | Yes |  |
| `context_length` | `Any` | Yes |  |
| `created` | `int` | Yes |  |
| `data` | `dict` | Yes |  |
| `default_parameter` | `Any` | Yes |  |
| `description` | `str` | No |  |
| `expiration_date` | `Any` | No |  |
| `hugging_face_id` | `Any` | No |  |
| `id` | `str` | Yes |  |
| `knowledge_cutoff` | `Any` | No |  |
| `latency_last_30m` | `Any` | Yes |  |
| `link` | `dict` | Yes |  |
| `max_completion_token` | `Any` | Yes |  |
| `max_prompt_token` | `Any` | Yes |  |
| `model_id` | `str` | Yes |  |
| `model_name` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `per_request_limit` | `Any` | Yes |  |
| `pricing` | `dict` | Yes |  |
| `provider_name` | `str` | Yes |  |
| `quantization` | `Any` | Yes |  |
| `reasoning` | `dict` | Yes |  |
| `status` | `int` | No |  |
| `supported_parameter` | `list` | Yes |  |
| `supported_voice` | `Any` | Yes |  |
| `supports_implicit_caching` | `bool` | Yes |  |
| `tag` | `str` | Yes |  |
| `throughput_last_30m` | `Any` | Yes |  |
| `top_provider` | `dict` | Yes |  |
| `uptime_last_1d` | `Any` | Yes |  |
| `uptime_last_30m` | `Any` | Yes |  |
| `uptime_last_5m` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Endpoint().list()
for endpoint in results:
    print(endpoint)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Endpoint().load({"author": "author", "slug": "slug"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EndpointEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FeedbackEntity

```python
feedback = client.Feedback()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeedbackEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FileEntity

```python
file = client.File()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `downloadable` | `bool` | Yes |  |
| `filename` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `mime_type` | `str` | Yes |  |
| `size_byte` | `int` | Yes |  |
| `type` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.File().create({
    "created_at": "example_created_at",  # str
    "downloadable": True,  # bool
    "filename": "example_filename",  # str
    "id": "example_id",  # str
    "mime_type": "example_mime_type",  # str
    "size_byte": 1,  # int
    "type": "example_type",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.File().list()
for file in results:
    print(file)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.File().load({"id": "file_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.File().remove({"id": "file_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GenerationEntity

```python
generation = client.Generation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Generation().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GenerationContentEntity

```python
generation_content = client.GenerationContent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GenerationContent().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerationContentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GuardrailEntity

```python
guardrail = client.Guardrail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_model` | `Any` | No |  |
| `allowed_provider` | `Any` | No |  |
| `content_filter` | `Any` | No |  |
| `content_filter_builtin` | `Any` | No |  |
| `created_at` | `str` | Yes |  |
| `data` | `Any` | Yes |  |
| `description` | `Any` | No |  |
| `enforce_zdr` | `Any` | No |  |
| `enforce_zdr_anthropic` | `Any` | No |  |
| `enforce_zdr_google` | `Any` | No |  |
| `enforce_zdr_openai` | `Any` | No |  |
| `enforce_zdr_other` | `Any` | No |  |
| `enforce_zdr_xai` | `Any` | No |  |
| `id` | `str` | Yes |  |
| `ignored_model` | `Any` | No |  |
| `ignored_provider` | `Any` | No |  |
| `limit_usd` | `Any` | No |  |
| `name` | `str` | Yes |  |
| `reset_interval` | `Any` | No |  |
| `updated_at` | `Any` | No |  |
| `workspace_id` | `str` | No |  |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `allowed_model` | - | - | - | - |
| `allowed_provider` | - | - | - | - |
| `content_filter` | - | - | - | - |
| `content_filter_builtin` | - | - | - | - |
| `created_at` | - | - | - | - |
| `data` | - | - | - | - |
| `description` | - | - | - | - |
| `enforce_zdr` | - | - | - | - |
| `enforce_zdr_anthropic` | - | - | - | - |
| `enforce_zdr_google` | - | - | - | - |
| `enforce_zdr_openai` | - | - | - | - |
| `enforce_zdr_other` | - | - | - | - |
| `enforce_zdr_xai` | - | - | - | - |
| `id` | - | - | - | - |
| `ignored_model` | - | - | - | - |
| `ignored_provider` | - | - | - | - |
| `limit_usd` | - | - | - | - |
| `name` | - | - | - | - |
| `reset_interval` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `workspace_id` | - | Yes | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Guardrail().create({
    "created_at": "example_created_at",  # str
    "data": "example_data",  # Any
    "id": "example_id",  # str
    "name": "example_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Guardrail().list()
for guardrail in results:
    print(guardrail)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Guardrail().load({"id": "guardrail_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Guardrail().remove({"id": "guardrail_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GuardrailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImageEntity

```python
image = client.Image()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `str` | No |  |
| `background` | `str` | No |  |
| `created` | `int` | Yes |  |
| `data` | `list` | Yes |  |
| `input_reference` | `list` | No |  |
| `model` | `str` | Yes |  |
| `n` | `int` | No |  |
| `output_compression` | `int` | No |  |
| `output_format` | `str` | No |  |
| `prompt` | `str` | Yes |  |
| `provider` | `dict` | No |  |
| `quality` | `str` | No |  |
| `resolution` | `str` | No |  |
| `seed` | `int` | No |  |
| `size` | `str` | No |  |
| `stream` | `bool` | No |  |
| `usage` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Image().create({
    "created": 1,  # int
    "data": [],  # list
    "model": "example_model",  # str
    "prompt": "example_prompt",  # str
    "usage": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImageModelEndpointEntity

```python
image_model_endpoint = client.ImageModelEndpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_passthrough_parameter` | `list` | Yes |  |
| `pricing` | `list` | Yes |  |
| `provider_name` | `str` | Yes |  |
| `provider_slug` | `str` | Yes |  |
| `provider_tag` | `Any` | Yes |  |
| `supported_parameter` | `Any` | Yes |  |
| `supports_streaming` | `bool` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ImageModelEndpoint().list()
for image_model_endpoint in results:
    print(image_model_endpoint)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImageModelEndpointEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImageModelsListEntity

```python
image_models_list = client.ImageModelsList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `dict` | Yes |  |
| `created` | `int` | Yes |  |
| `description` | `str` | Yes |  |
| `endpoint` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `supported_parameter` | `dict` | Yes |  |
| `supports_streaming` | `bool` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ImageModelsList().list()
for image_models_list in results:
    print(image_models_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImageModelsListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## KeyEntity

```python
key = client.Key()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `KeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListByokKeyEntity

```python
list_byok_key = client.ListByokKey()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListByokKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListGuardrailEntity

```python
list_guardrail = client.ListGuardrail()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListGuardrailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListKeyAssignmentEntity

```python
list_key_assignment = client.ListKeyAssignment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_by` | `Any` | Yes |  |
| `created_at` | `str` | Yes |  |
| `guardrail_id` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `key_hash` | `str` | Yes |  |
| `key_label` | `str` | Yes |  |
| `key_name` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListKeyAssignment().list()
for list_key_assignment in results:
    print(list_key_assignment)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListKeyAssignmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListMemberAssignmentEntity

```python
list_member_assignment = client.ListMemberAssignment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_by` | `Any` | Yes |  |
| `created_at` | `str` | Yes |  |
| `guardrail_id` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `organization_id` | `str` | Yes |  |
| `user_id` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListMemberAssignment().list()
for list_member_assignment in results:
    print(list_member_assignment)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListMemberAssignmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListObservabilityDestinationEntity

```python
list_observability_destination = client.ListObservabilityDestination()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | Yes |  |
| `total_count` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListObservabilityDestination().list()
for list_observability_destination in results:
    print(list_observability_destination)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListObservabilityDestinationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListPresetEntity

```python
list_preset = client.ListPreset()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListPresetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListPresetVersionEntity

```python
list_preset_version = client.ListPresetVersion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `dict` | Yes |  |
| `created_at` | `str` | Yes |  |
| `creator_id` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `preset_id` | `str` | Yes |  |
| `system_prompt` | `Any` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `version` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListPresetVersion().list()
for list_preset_version in results:
    print(list_preset_version)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListPresetVersionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListWorkspaceEntity

```python
list_workspace = client.ListWorkspace()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListWorkspaceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListWorkspaceBudgetEntity

```python
list_workspace_budget = client.ListWorkspaceBudget()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `limit_usd` | `float` | Yes |  |
| `reset_interval` | `Any` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `workspace_id` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListWorkspaceBudget().list()
for list_workspace_budget in results:
    print(list_workspace_budget)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListWorkspaceBudgetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListWorkspaceMemberEntity

```python
list_workspace_member = client.ListWorkspaceMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `role` | `str` | Yes |  |
| `user_id` | `str` | Yes |  |
| `workspace_id` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListWorkspaceMember().list()
for list_workspace_member in results:
    print(list_workspace_member)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListWorkspaceMemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MemberEntity

```python
member = client.Member()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MessageEntity

```python
message = client.Message()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_control` | `dict` | Yes |  |
| `context_management` | `Any` | No |  |
| `fallback` | `Any` | No |  |
| `max_token` | `int` | No |  |
| `message` | `Any` | Yes |  |
| `metadata` | `dict` | No |  |
| `model` | `str` | Yes |  |
| `output_config` | `dict` | No |  |
| `plugin` | `list` | No |  |
| `provider` | `Any` | No |  |
| `route` | `Any` | No |  |
| `service_tier` | `str` | No |  |
| `session_id` | `str` | No |  |
| `speed` | `Any` | No |  |
| `stop_sequence` | `list` | No |  |
| `stop_server_tools_when` | `list` | No |  |
| `stream` | `bool` | No |  |
| `system` | `Any` | No |  |
| `temperature` | `float` | No |  |
| `thinking` | `Any` | No |  |
| `tool` | `list` | No |  |
| `tool_choice` | `Any` | No |  |
| `top_k` | `int` | No |  |
| `top_p` | `float` | No |  |
| `trace` | `dict` | No |  |
| `user` | `str` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `cache_control` | - |
| `context_management` | - |
| `fallback` | - |
| `max_token` | - |
| `message` | - |
| `metadata` | - |
| `model` | Yes |
| `output_config` | - |
| `plugin` | - |
| `provider` | - |
| `route` | - |
| `service_tier` | - |
| `session_id` | - |
| `speed` | - |
| `stop_sequence` | - |
| `stop_server_tools_when` | - |
| `stream` | - |
| `system` | - |
| `temperature` | - |
| `thinking` | - |
| `tool` | - |
| `tool_choice` | - |
| `top_k` | - |
| `top_p` | - |
| `trace` | - |
| `user` | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Message().create({
    "cache_control": {},  # dict
    "message": "example_message",  # Any
    "model": "example_model",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MessageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MetaEntity

```python
meta = client.Meta()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MetaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ModelEntity

```python
model = client.Model()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `dict` | Yes |  |
| `benchmark` | `dict` | Yes |  |
| `canonical_slug` | `str` | Yes |  |
| `context_length` | `Any` | Yes |  |
| `created` | `int` | Yes |  |
| `data` | `dict` | Yes |  |
| `default_parameter` | `Any` | Yes |  |
| `description` | `str` | No |  |
| `expiration_date` | `Any` | No |  |
| `hugging_face_id` | `Any` | No |  |
| `id` | `str` | Yes |  |
| `knowledge_cutoff` | `Any` | No |  |
| `link` | `dict` | Yes |  |
| `name` | `str` | Yes |  |
| `per_request_limit` | `Any` | Yes |  |
| `pricing` | `dict` | Yes |  |
| `reasoning` | `dict` | Yes |  |
| `supported_parameter` | `list` | Yes |  |
| `supported_voice` | `Any` | Yes |  |
| `top_provider` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Model().list()
for model in results:
    print(model)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Model().load({"author": "author", "slug": "slug"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ModelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ModelsCountEntity

```python
models_count = client.ModelsCount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ModelsCount().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ModelsCountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ModelsListEntity

```python
models_list = client.ModelsList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `dict` | Yes |  |
| `benchmark` | `dict` | Yes |  |
| `canonical_slug` | `str` | Yes |  |
| `context_length` | `Any` | Yes |  |
| `created` | `int` | Yes |  |
| `default_parameter` | `Any` | Yes |  |
| `description` | `str` | No |  |
| `expiration_date` | `Any` | No |  |
| `hugging_face_id` | `Any` | No |  |
| `id` | `str` | Yes |  |
| `knowledge_cutoff` | `Any` | No |  |
| `link` | `dict` | Yes |  |
| `name` | `str` | Yes |  |
| `per_request_limit` | `Any` | Yes |  |
| `pricing` | `dict` | Yes |  |
| `reasoning` | `dict` | Yes |  |
| `supported_parameter` | `list` | Yes |  |
| `supported_voice` | `Any` | Yes |  |
| `top_provider` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ModelsList().list()
for models_list in results:
    print(models_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ModelsListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OAuthEntity

```python
o_auth = client.OAuth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `callback_url` | `str` | Yes |  |
| `code` | `str` | Yes |  |
| `code_challenge` | `str` | No |  |
| `code_challenge_method` | `Any` | No |  |
| `code_verifier` | `str` | No |  |
| `data` | `dict` | Yes |  |
| `expires_at` | `Any` | No |  |
| `key` | `str` | Yes |  |
| `key_label` | `str` | No |  |
| `limit` | `float` | No |  |
| `spawn_agent` | `str` | No |  |
| `spawn_cloud` | `str` | No |  |
| `usage_limit_type` | `str` | No |  |
| `user_id` | `Any` | Yes |  |
| `workspace_id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OAuth().create({
    "callback_url": "example_callback_url",  # str
    "code": "example_code",  # str
    "data": {},  # dict
    "key": "example_key",  # str
    "user_id": "example_user_id",  # Any
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OAuthEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ObservabilityDestinationEntity

```python
observability_destination = client.ObservabilityDestination()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ObservabilityDestination().load({"id": "observability_destination_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ObservabilityDestination().remove({"id": "observability_destination_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObservabilityDestinationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OpenResponsesResultEntity

```python
open_responses_result = client.OpenResponsesResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `background` | `Any` | No |  |
| `cache_control` | `dict` | Yes |  |
| `debug` | `dict` | No |  |
| `frequency_penalty` | `Any` | No |  |
| `image_config` | `dict` | No |  |
| `include` | `Any` | No |  |
| `input` | `Any` | No |  |
| `instruction` | `Any` | No |  |
| `max_output_token` | `Any` | No |  |
| `max_tool_call` | `Any` | No |  |
| `metadata` | `Any` | No |  |
| `modality` | `list` | No |  |
| `model` | `str` | No |  |
| `parallel_tool_call` | `Any` | No |  |
| `plugin` | `list` | No |  |
| `presence_penalty` | `Any` | No |  |
| `previous_response_id` | `str` | No |  |
| `prompt` | `Any` | Yes |  |
| `prompt_cache_key` | `Any` | No |  |
| `prompt_cache_option` | `Any` | Yes |  |
| `provider` | `Any` | No |  |
| `reasoning` | `Any` | No |  |
| `route` | `Any` | No |  |
| `safety_identifier` | `Any` | No |  |
| `service_tier` | `Any` | No |  |
| `session_id` | `str` | No |  |
| `stop_server_tools_when` | `list` | No |  |
| `store` | `bool` | No |  |
| `stream` | `bool` | No |  |
| `temperature` | `Any` | No |  |
| `text` | `Any` | No |  |
| `tool` | `list` | No |  |
| `tool_choice` | `Any` | No |  |
| `top_k` | `int` | No |  |
| `top_logprob` | `Any` | No |  |
| `top_p` | `Any` | No |  |
| `trace` | `dict` | No |  |
| `truncation` | `Any` | No |  |
| `user` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OpenResponsesResult().create({
    "cache_control": {},  # dict
    "prompt": "example_prompt",  # Any
    "prompt_cache_option": "example_prompt_cache_option",  # Any
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OpenResponsesResultEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationEntity

```python
organization = client.Organization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | Yes |  |
| `first_name` | `Any` | Yes |  |
| `id` | `str` | Yes |  |
| `last_name` | `Any` | Yes |  |
| `role` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Organization().list()
for organization in results:
    print(organization)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PresetEntity

```python
preset = client.Preset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `creator_user_id` | `Any` | Yes |  |
| `data` | `Any` | Yes |  |
| `description` | `Any` | Yes |  |
| `designated_version_id` | `Any` | Yes |  |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `slug` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `status_updated_at` | `Any` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `workspace_id` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Preset().list()
for preset in results:
    print(preset)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Preset().load({"id": "preset_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PresetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PresetVersionEntity

```python
preset_version = client.PresetVersion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PresetVersion().load({"id": "preset_version_id", "slug": "slug"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PresetVersionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProviderEntity

```python
provider = client.Provider()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `datacenter` | `Any` | No |  |
| `headquarter` | `Any` | No |  |
| `name` | `str` | Yes |  |
| `privacy_policy_url` | `Any` | Yes |  |
| `slug` | `str` | Yes |  |
| `status_page_url` | `Any` | No |  |
| `terms_of_service_url` | `Any` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Provider().list()
for provider in results:
    print(provider)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProviderEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## QueryEntity

```python
query = client.Query()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `QueryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RankingsDailyEntity

```python
rankings_daily = client.RankingsDaily()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `str` | Yes |  |
| `model_permaslug` | `str` | Yes |  |
| `total_token` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RankingsDaily().list()
for rankings_daily in results:
    print(rankings_daily)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RankingsDailyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RemoveEntity

```python
remove = client.Remove()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemoveEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RerankEntity

```python
rerank = client.Rerank()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `document` | `list` | Yes |  |
| `id` | `str` | No |  |
| `model` | `str` | Yes |  |
| `provider` | `str` | No |  |
| `query` | `str` | Yes |  |
| `result` | `list` | Yes |  |
| `top_n` | `int` | No |  |
| `usage` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Rerank().create({
    "document": [],  # list
    "model": "example_model",  # str
    "query": "example_query",  # str
    "result": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RerankEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ResponseEntity

```python
response = client.Response()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResponseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SpeechEntity

```python
speech = client.Speech()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SpeechEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SttEntity

```python
stt = client.Stt()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `duration` | `float` | No |  |
| `input_audio` | `dict` | Yes |  |
| `language` | `str` | No |  |
| `model` | `str` | Yes |  |
| `provider` | `dict` | No |  |
| `response_format` | `str` | No |  |
| `segment` | `list` | No |  |
| `task` | `str` | No |  |
| `temperature` | `float` | No |  |
| `text` | `str` | Yes |  |
| `timestamp_granularity` | `list` | No |  |
| `usage` | `dict` | No |  |
| `word` | `list` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Stt().create({
    "input_audio": {},  # dict
    "model": "example_model",  # str
    "text": "example_text",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SttEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubmitGenerationFeedbackEntity

```python
submit_generation_feedback = client.SubmitGenerationFeedback()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `str` | Yes |  |
| `comment` | `str` | No |  |
| `data` | `dict` | Yes |  |
| `generation_id` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SubmitGenerationFeedback().create({
    "category": "example_category",  # str
    "data": {},  # dict
    "generation_id": "example_generation_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubmitGenerationFeedbackEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TaskEntity

```python
task = client.Task()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Task().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TaskEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TranscriptionEntity

```python
transcription = client.Transcription()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TranscriptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TtsEntity

```python
tts = client.Tts()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `str` | Yes |  |
| `model` | `str` | Yes |  |
| `provider` | `dict` | No |  |
| `response_format` | `str` | No |  |
| `speed` | `float` | No |  |
| `voice` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Tts().create({
    "input": "example_input",  # str
    "model": "example_model",  # str
    "voice": "example_voice",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TtsEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UnifiedBenchmarkEntity

```python
unified_benchmark = client.UnifiedBenchmark()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | Yes |  |
| `meta` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.UnifiedBenchmark().list()
for unified_benchmark in results:
    print(unified_benchmark)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UnifiedBenchmarkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateByokKeyEntity

```python
update_byok_key = client.UpdateByokKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_model` | `Any` | No |  |
| `allowed_user_id` | `Any` | No |  |
| `data` | `Any` | Yes |  |
| `disabled` | `bool` | No |  |
| `is_fallback` | `bool` | No |  |
| `key` | `str` | No |  |
| `name` | `Any` | No |  |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UpdateByokKey().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateByokKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateGuardrailEntity

```python
update_guardrail = client.UpdateGuardrail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_model` | `Any` | No |  |
| `allowed_provider` | `Any` | No |  |
| `content_filter` | `Any` | No |  |
| `content_filter_builtin` | `Any` | No |  |
| `data` | `Any` | Yes |  |
| `description` | `Any` | No |  |
| `enforce_zdr` | `Any` | No |  |
| `enforce_zdr_anthropic` | `Any` | No |  |
| `enforce_zdr_google` | `Any` | No |  |
| `enforce_zdr_openai` | `Any` | No |  |
| `enforce_zdr_other` | `Any` | No |  |
| `enforce_zdr_xai` | `Any` | No |  |
| `ignored_model` | `Any` | No |  |
| `ignored_provider` | `Any` | No |  |
| `limit_usd` | `Any` | No |  |
| `name` | `str` | No |  |
| `reset_interval` | `Any` | No |  |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UpdateGuardrail().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateGuardrailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateObservabilityDestinationEntity

```python
update_observability_destination = client.UpdateObservabilityDestination()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_key_hash` | `Any` | No |  |
| `config` | `dict` | No |  |
| `data` | `Any` | Yes |  |
| `enabled` | `bool` | No |  |
| `filter_rule` | `Any` | No |  |
| `name` | `str` | No |  |
| `privacy_mode` | `bool` | No |  |
| `sampling_rate` | `float` | No |  |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UpdateObservabilityDestination().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateObservabilityDestinationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateWorkspaceEntity

```python
update_workspace = client.UpdateWorkspace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `created_by` | `Any` | Yes |  |
| `data` | `Any` | Yes |  |
| `default_image_model` | `Any` | No |  |
| `default_provider_sort` | `Any` | No |  |
| `default_text_model` | `Any` | No |  |
| `description` | `Any` | No |  |
| `id` | `str` | Yes |  |
| `io_logging_api_key_id` | `Any` | No |  |
| `io_logging_sampling_rate` | `float` | No |  |
| `is_data_discount_logging_enabled` | `bool` | No |  |
| `is_observability_broadcast_enabled` | `bool` | No |  |
| `is_observability_io_logging_enabled` | `bool` | No |  |
| `name` | `str` | Yes |  |
| `slug` | `str` | Yes |  |
| `updated_at` | `Any` | Yes |  |

### Field Usage by Operation

| Field | list | create | update |
| --- | --- | --- | --- |
| `created_at` | - | - | - |
| `created_by` | - | - | - |
| `data` | - | - | - |
| `default_image_model` | Yes | - | - |
| `default_provider_sort` | Yes | - | - |
| `default_text_model` | Yes | - | - |
| `description` | Yes | - | - |
| `id` | - | - | - |
| `io_logging_api_key_id` | Yes | - | - |
| `io_logging_sampling_rate` | Yes | - | - |
| `is_data_discount_logging_enabled` | Yes | - | - |
| `is_observability_broadcast_enabled` | Yes | - | - |
| `is_observability_io_logging_enabled` | Yes | - | - |
| `name` | - | - | Yes |
| `slug` | - | - | Yes |
| `updated_at` | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.UpdateWorkspace().create({
    "created_at": "example_created_at",  # str
    "created_by": "example_created_by",  # Any
    "data": "example_data",  # Any
    "id": "example_id",  # str
    "name": "example_name",  # str
    "slug": "example_slug",  # str
    "updated_at": "example_updated_at",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.UpdateWorkspace().list()
for update_workspace in results:
    print(update_workspace)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UpdateWorkspace().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateWorkspaceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpsertWorkspaceBudgetEntity

```python
upsert_workspace_budget = client.UpsertWorkspaceBudget()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Any` | Yes |  |
| `limit_usd` | `float` | Yes |  |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UpsertWorkspaceBudget().update({
    "id": "id",
    "workspace_id": "workspace_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpsertWorkspaceBudgetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserEntity

```python
user = client.User()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VersionEntity

```python
version = client.Version()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VersionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VideoEntity

```python
video = client.Video()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `str` | No |  |
| `callback_url` | `str` | No |  |
| `duration` | `int` | No |  |
| `error` | `str` | No |  |
| `frame_image` | `list` | No |  |
| `generate_audio` | `bool` | No |  |
| `generation_id` | `str` | No |  |
| `id` | `str` | Yes |  |
| `input_reference` | `list` | No |  |
| `model` | `str` | Yes |  |
| `polling_url` | `str` | Yes |  |
| `prompt` | `str` | No |  |
| `provider` | `dict` | No |  |
| `resolution` | `str` | No |  |
| `seed` | `int` | No |  |
| `size` | `str` | No |  |
| `status` | `str` | Yes |  |
| `unsigned_url` | `list` | No |  |
| `usage` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Video().create({
    "id": "example_id",  # str
    "model": "example_model",  # str
    "polling_url": "example_polling_url",  # str
    "status": "example_status",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Video().load({"id": "video_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VideoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VideoGenerationEntity

```python
video_generation = client.VideoGeneration()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.VideoGeneration().load({"id": "video_generation_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VideoGenerationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VideoModelsListEntity

```python
video_models_list = client.VideoModelsList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_passthrough_parameter` | `list` | Yes |  |
| `canonical_slug` | `str` | Yes |  |
| `created` | `int` | Yes |  |
| `description` | `str` | No |  |
| `generate_audio` | `Any` | Yes |  |
| `hugging_face_id` | `Any` | No |  |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `pricing_skus` | `Any` | No |  |
| `seed` | `Any` | Yes |  |
| `supported_aspect_ratio` | `Any` | Yes |  |
| `supported_duration` | `Any` | Yes |  |
| `supported_frame_image` | `Any` | Yes |  |
| `supported_resolution` | `Any` | Yes |  |
| `supported_size` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.VideoModelsList().list()
for video_models_list in results:
    print(video_models_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VideoModelsListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkspaceEntity

```python
workspace = client.Workspace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Workspace().load({"id": "workspace_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Workspace().remove({"id": "workspace_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkspaceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkspaceBudgetEntity

```python
workspace_budget = client.WorkspaceBudget()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.WorkspaceBudget().remove({"id": "id", "workspace_id": "workspace_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkspaceBudgetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZdrEntity

```python
zdr = client.Zdr()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZdrEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = OpenrouterModelsSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

