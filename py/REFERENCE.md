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

#### `ApiKey(data=None)`

Create a new `ApiKeyEntity` instance. Pass `None` for no initial data.

#### `AppRanking(data=None)`

Create a new `AppRankingEntity` instance. Pass `None` for no initial data.

#### `BetaAnalytics(data=None)`

Create a new `BetaAnalyticsEntity` instance. Pass `None` for no initial data.

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

#### `Completion(data=None)`

Create a new `CompletionEntity` instance. Pass `None` for no initial data.

#### `CreateObservabilityDestination(data=None)`

Create a new `CreateObservabilityDestinationEntity` instance. Pass `None` for no initial data.

#### `Credit(data=None)`

Create a new `CreditEntity` instance. Pass `None` for no initial data.

#### `Embedding(data=None)`

Create a new `EmbeddingEntity` instance. Pass `None` for no initial data.

#### `Endpoint(data=None)`

Create a new `EndpointEntity` instance. Pass `None` for no initial data.

#### `File(data=None)`

Create a new `FileEntity` instance. Pass `None` for no initial data.

#### `Generation(data=None)`

Create a new `GenerationEntity` instance. Pass `None` for no initial data.

#### `GenerationContentData(data=None)`

Create a new `GenerationContentDataEntity` instance. Pass `None` for no initial data.

#### `Guardrail(data=None)`

Create a new `GuardrailEntity` instance. Pass `None` for no initial data.

#### `Image(data=None)`

Create a new `ImageEntity` instance. Pass `None` for no initial data.

#### `ImageModelEndpoint(data=None)`

Create a new `ImageModelEndpointEntity` instance. Pass `None` for no initial data.

#### `ImageModelListItem(data=None)`

Create a new `ImageModelListItemEntity` instance. Pass `None` for no initial data.

#### `Key(data=None)`

Create a new `KeyEntity` instance. Pass `None` for no initial data.

#### `ListObservabilityDestination(data=None)`

Create a new `ListObservabilityDestinationEntity` instance. Pass `None` for no initial data.

#### `ListPresetVersion(data=None)`

Create a new `ListPresetVersionEntity` instance. Pass `None` for no initial data.

#### `Member(data=None)`

Create a new `MemberEntity` instance. Pass `None` for no initial data.

#### `Message(data=None)`

Create a new `MessageEntity` instance. Pass `None` for no initial data.

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

#### `RankingsDaily(data=None)`

Create a new `RankingsDailyEntity` instance. Pass `None` for no initial data.

#### `Rerank(data=None)`

Create a new `RerankEntity` instance. Pass `None` for no initial data.

#### `Response(data=None)`

Create a new `ResponseEntity` instance. Pass `None` for no initial data.

#### `Stt(data=None)`

Create a new `SttEntity` instance. Pass `None` for no initial data.

#### `SubmitGenerationFeedback(data=None)`

Create a new `SubmitGenerationFeedbackEntity` instance. Pass `None` for no initial data.

#### `Task(data=None)`

Create a new `TaskEntity` instance. Pass `None` for no initial data.

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

#### `Video(data=None)`

Create a new `VideoEntity` instance. Pass `None` for no initial data.

#### `VideoGeneration(data=None)`

Create a new `VideoGenerationEntity` instance. Pass `None` for no initial data.

#### `VideoModel(data=None)`

Create a new `VideoModelEntity` instance. Pass `None` for no initial data.

#### `Workspace(data=None)`

Create a new `WorkspaceEntity` instance. Pass `None` for no initial data.

#### `WorkspaceBudget(data=None)`

Create a new `WorkspaceBudgetEntity` instance. Pass `None` for no initial data.

#### `WorkspaceMember(data=None)`

Create a new `WorkspaceMemberEntity` instance. Pass `None` for no initial data.

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
| `byok_usage_inference` | `float` | Yes | BYOK inference cost in USD (external credits spent) |
| `completion_tokens` | `int` | Yes | Total completion tokens generated |
| `date` | `str` | Yes | Date of the activity (YYYY-MM-DD format) |
| `endpoint_id` | `str` | Yes | Unique identifier for the endpoint |
| `model` | `str` | Yes | Model slug (e.g., "openai/gpt-4.1") |
| `model_permaslug` | `str` | Yes | Model permaslug (e.g., "openai/gpt-4.1-2025-04-14") |
| `prompt_tokens` | `int` | Yes | Total prompt tokens used |
| `provider_name` | `str` | Yes | Name of the provider serving this endpoint |
| `reasoning_tokens` | `int` | Yes | Total reasoning tokens used |
| `requests` | `int` | Yes | Number of requests made |
| `usage` | `float` | Yes | Total cost in USD (OpenRouter credits spent) |

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

## ApiKeyEntity

```python
api_key = client.ApiKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byok_usage` | `float` | Yes | Total external BYOK usage (in USD) for the API key |
| `byok_usage_daily` | `float` | Yes | External BYOK usage (in USD) for the current UTC day |
| `byok_usage_monthly` | `float` | Yes | External BYOK usage (in USD) for current UTC month |
| `byok_usage_weekly` | `float` | Yes | External BYOK usage (in USD) for the current UTC week (Monday-Sunday) |
| `created_at` | `str` | Yes | ISO 8601 timestamp of when the API key was created |
| `creator_user_id` | `str | None` | Yes | The user ID of the key creator. |
| `disabled` | `bool` | Yes | Whether the API key is disabled |
| `expires_at` | `str | None` | No | ISO 8601 UTC timestamp when the API key expires, or null if no expiration |
| `hash` | `str` | Yes | Unique hash identifier for the API key |
| `id` | `str` | No |  |
| `include_byok_in_limit` | `bool` | Yes | Whether to include external BYOK usage in the credit limit |
| `is_free_tier` | `bool` | Yes | Whether this is a free tier API key |
| `is_management_key` | `bool` | Yes | Whether this is a management key |
| `is_provisioning_key` | `bool` | Yes | Whether this is a management key |
| `label` | `str` | Yes | Human-readable label for the API key |
| `limit` | `float | None` | Yes | Spending limit for the API key in USD |
| `limit_remaining` | `float | None` | Yes | Remaining spending limit in USD |
| `limit_reset` | `str | None` | Yes | Type of limit reset for the API key |
| `name` | `str` | Yes | Name of the API key |
| `rate_limit` | `dict` | Yes | Legacy rate limit information about a key. |
| `updated_at` | `str | None` | Yes | ISO 8601 timestamp of when the API key was last updated |
| `usage` | `float` | Yes | Total OpenRouter credit usage (in USD) for the API key |
| `usage_daily` | `float` | Yes | OpenRouter credit usage (in USD) for the current UTC day |
| `usage_monthly` | `float` | Yes | OpenRouter credit usage (in USD) for the current UTC month |
| `usage_weekly` | `float` | Yes | OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday) |
| `workspace_id` | `str` | Yes | The workspace ID this API key belongs to. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `byok_usage` | - | - | - | - | - |
| `byok_usage_daily` | - | - | - | - | - |
| `byok_usage_monthly` | - | - | - | - | - |
| `byok_usage_weekly` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `creator_user_id` | - | - | Yes | - | - |
| `disabled` | - | - | - | Yes | - |
| `expires_at` | - | - | - | - | - |
| `hash` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `include_byok_in_limit` | - | - | Yes | Yes | - |
| `is_free_tier` | - | - | - | - | - |
| `is_management_key` | - | - | - | - | - |
| `is_provisioning_key` | - | - | - | - | - |
| `label` | - | - | - | - | - |
| `limit` | - | - | Yes | Yes | - |
| `limit_remaining` | - | - | - | - | - |
| `limit_reset` | - | - | Yes | Yes | - |
| `name` | - | - | - | Yes | - |
| `rate_limit` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `usage` | - | - | - | - | - |
| `usage_daily` | - | - | - | - | - |
| `usage_monthly` | - | - | - | - | - |
| `usage_weekly` | - | - | - | - | - |
| `workspace_id` | - | - | Yes | - | - |

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
| `app_id` | `int` | Yes | Stable numeric identifier of the app on OpenRouter. |
| `app_name` | `str` | Yes | Public display name of the app. |
| `rank` | `int` | Yes | 1-based position of the app within this response, per the requested `sort`. |
| `total_requests` | `int` | Yes | Number of requests attributed to the app inside the date window. |
| `total_tokens` | `str` | Yes | Sum of `prompt_tokens + completion_tokens` attributed to the app inside the date window, returned as a decimal string so 64-bit values are not truncated. |

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

## BetaAnalyticsEntity

```python
beta_analytics = client.BetaAnalytics()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cachedAt` | `float` | No |  |
| `classifier_dimensions` | `dict` | Yes | Group results by custom classifier tags, breaking down metrics by the specified dimension values. |
| `classifier_filters` | `dict` | Yes | Filter results to generations with specific classifier tag values. |
| `data` | `list` | Yes |  |
| `dimensions` | `list` | Yes |  |
| `filters` | `list` | No |  |
| `granularities` | `list` | Yes |  |
| `granularity` | `str` | No | Time granularity |
| `group_limit` | `int` | No | Maximum rows per distinct combination of dimensions. |
| `limit` | `int` | No | Maximum total rows returned. |
| `metadata` | `dict` | Yes |  |
| `metrics` | `list` | Yes |  |
| `operators` | `list` | Yes |  |
| `order_by` | `dict` | Yes |  |
| `time_range` | `dict` | Yes |  |
| `warnings` | `list` | No | Warnings about filter resolution issues (e.g. |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `cachedAt` | - | - |
| `classifier_dimensions` | - | - |
| `classifier_filters` | - | - |
| `data` | - | - |
| `dimensions` | - | Yes |
| `filters` | - | - |
| `granularities` | - | - |
| `granularity` | - | - |
| `group_limit` | - | - |
| `limit` | - | - |
| `metadata` | - | - |
| `metrics` | - | - |
| `operators` | - | - |
| `order_by` | - | - |
| `time_range` | - | - |
| `warnings` | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BetaAnalytics().create({
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

## BulkAddWorkspaceMemberEntity

```python
bulk_add_workspace_member = client.BulkAddWorkspaceMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `added_count` | `int` | Yes | Number of workspace memberships created or updated |
| `data` | `list` | Yes | List of added workspace memberships |
| `user_ids` | `list` | Yes | List of user IDs to add to the workspace. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BulkAddWorkspaceMember().create({
    "workspace_id": "example_workspace_id",  # str
    "added_count": 1,  # int
    "data": [],  # list
    "user_ids": [],  # list
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
| `assigned_count` | `int` | Yes | Number of keys successfully assigned |
| `key_hashes` | `list` | Yes | Array of API key hashes to assign to the guardrail |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BulkAssignKey().create({
    "guardrail_id": "example_guardrail_id",  # str
    "assigned_count": 1,  # int
    "key_hashes": [],  # list
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
| `assigned_count` | `int` | Yes | Number of members successfully assigned |
| `member_user_ids` | `list` | Yes | Array of member user IDs to assign to the guardrail |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BulkAssignMember().create({
    "guardrail_id": "example_guardrail_id",  # str
    "assigned_count": 1,  # int
    "member_user_ids": [],  # list
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
| `removed_count` | `int` | Yes | Number of members removed |
| `user_ids` | `list` | Yes | List of user IDs to remove from the workspace |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BulkRemoveWorkspaceMember().create({
    "workspace_id": "example_workspace_id",  # str
    "removed_count": 1,  # int
    "user_ids": [],  # list
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
| `key_hashes` | `list` | Yes | Array of API key hashes to unassign from the guardrail |
| `unassigned_count` | `int` | Yes | Number of keys successfully unassigned |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BulkUnassignKey().create({
    "guardrail_id": "example_guardrail_id",  # str
    "key_hashes": [],  # list
    "unassigned_count": 1,  # int
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
| `member_user_ids` | `list` | Yes | Array of member user IDs to unassign from the guardrail |
| `unassigned_count` | `int` | Yes | Number of members successfully unassigned |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BulkUnassignMember().create({
    "guardrail_id": "example_guardrail_id",  # str
    "member_user_ids": [],  # list
    "unassigned_count": 1,  # int
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
| `allowed_api_key_hashes` | `list | None` | Yes | Optional allowlist of OpenRouter API key hashes (`api_keys.hash`) that may use this credential. |
| `allowed_models` | `list | None` | Yes | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `list | None` | Yes | Optional allowlist of user IDs that may use this credential. |
| `created_at` | `str` | Yes | ISO timestamp of when the credential was created. |
| `disabled` | `bool` | Yes | Whether this credential is currently disabled. |
| `id` | `str` | Yes | Stable public identifier for this BYOK credential. |
| `is_fallback` | `bool` | Yes | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `str` | Yes | The raw provider API key or credential. |
| `label` | `str` | Yes | Short masked snippet of the key (e.g. |
| `name` | `str | None` | No | Optional human-readable name for the credential. |
| `provider` | `str` | Yes | The upstream provider this credential authenticates against, as a lowercase slug (e.g. |
| `sort_order` | `int` | Yes | Position within the provider — credentials are tried in ascending sort order. |
| `workspace_id` | `str` | Yes | ID of the workspace this credential belongs to. |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `allowed_api_key_hashes` | - | - | - | - |
| `allowed_models` | - | - | Yes | - |
| `allowed_user_ids` | - | - | Yes | - |
| `created_at` | - | - | - | - |
| `disabled` | - | - | Yes | - |
| `id` | - | - | - | - |
| `is_fallback` | - | - | Yes | - |
| `key` | - | - | - | - |
| `label` | - | - | - | - |
| `name` | - | - | - | - |
| `provider` | - | - | - | - |
| `sort_order` | - | - | - | - |
| `workspace_id` | - | - | Yes | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Byok().create({
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
| `cache_control` | `dict` | Yes | Enable automatic prompt caching. |
| `choices` | `list` | Yes | List of completion choices |
| `created` | `int` | Yes | Unix timestamp of creation |
| `debug` | `dict` | No | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `float | None` | No | Frequency penalty (-2.0 to 2.0) |
| `id` | `str` | Yes | Unique completion identifier |
| `image_config` | `dict` | No | Provider-specific image configuration options. |
| `logit_bias` | `dict | None` | No | Token logit bias adjustments |
| `logprobs` | `bool | None` | No | Return log probabilities |
| `max_completion_tokens` | `int | None` | No | Maximum tokens in completion |
| `max_tokens` | `int | None` | No | Maximum tokens (deprecated, use max_completion_tokens). |
| `messages` | `list` | Yes | List of messages for the conversation |
| `metadata` | `dict` | No | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `float | None` | No | Minimum probability threshold relative to the most likely token. |
| `modalities` | `list` | No | Output modalities for the response. |
| `model` | `str` | Yes | Model used for completion |
| `models` | `list` | No | Models to use for completion |
| `object` | `str` | Yes |  |
| `openrouter_metadata` | `dict` | Yes |  |
| `parallel_tool_calls` | `bool | None` | No | Whether to enable parallel function calling during tool use. |
| `plugins` | `list` | No | Plugins you want to enable for this request, including their settings. |
| `prediction` | `dict | None` | Yes | Static predicted output content. |
| `presence_penalty` | `float | None` | No | Presence penalty (-2.0 to 2.0) |
| `prompt_cache_key` | `str | None` | No |  |
| `prompt_cache_options` | `dict | None` | Yes | Request-level prompt-cache controls. |
| `provider` | `dict | None` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `dict` | No | Configuration options for reasoning models |
| `reasoning_effort` | `str | None` | No | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `float | None` | No | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `Any` | No | Response format configuration |
| `route` | `str | None` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `seed` | `int | None` | No | Random seed for deterministic outputs |
| `service_tier` | `str | None` | No | The service tier used by the upstream provider for this request |
| `session_id` | `str` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop` | `Any` | No | Stop sequences (up to 4) |
| `stop_server_tools_when` | `list` | No | Stop conditions for the server-tool agent loop. |
| `stream` | `bool` | No | Enable streaming response |
| `stream_options` | `dict | None` | No | Streaming configuration options |
| `system_fingerprint` | `str | None` | Yes | System fingerprint |
| `temperature` | `float | None` | No | Sampling temperature (0-2) |
| `tool_choice` | `Any` | No | Tool choice configuration |
| `tools` | `list` | No | Available tools for function calling |
| `top_a` | `float | None` | No | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `int | None` | No | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `int | None` | No | Number of top log probabilities to return (0-20) |
| `top_p` | `float | None` | No | Nucleus sampling parameter (0-1) |
| `trace` | `dict` | No | Metadata for observability and tracing. |
| `usage` | `dict` | Yes | Token usage statistics |
| `user` | `str` | No | Unique user identifier |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `cache_control` | - |
| `choices` | - |
| `created` | - |
| `debug` | - |
| `frequency_penalty` | - |
| `id` | - |
| `image_config` | - |
| `logit_bias` | - |
| `logprobs` | - |
| `max_completion_tokens` | - |
| `max_tokens` | - |
| `messages` | - |
| `metadata` | - |
| `min_p` | - |
| `modalities` | - |
| `model` | Yes |
| `models` | - |
| `object` | - |
| `openrouter_metadata` | - |
| `parallel_tool_calls` | - |
| `plugins` | - |
| `prediction` | - |
| `presence_penalty` | - |
| `prompt_cache_key` | - |
| `prompt_cache_options` | - |
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
| `stream_options` | - |
| `system_fingerprint` | - |
| `temperature` | - |
| `tool_choice` | - |
| `tools` | - |
| `top_a` | - |
| `top_k` | - |
| `top_logprobs` | - |
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

## CompletionEntity

```python
completion = client.Completion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_control` | `dict` | Yes | Enable automatic prompt caching. |
| `debug` | `dict` | No | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `float | None` | No | Frequency penalty (-2.0 to 2.0) |
| `image_config` | `dict` | No | Provider-specific image configuration options. |
| `logit_bias` | `dict | None` | No | Token logit bias adjustments |
| `logprobs` | `bool | None` | No | Return log probabilities |
| `max_completion_tokens` | `int | None` | No | Maximum tokens in completion |
| `max_tokens` | `int | None` | No | Maximum tokens (deprecated, use max_completion_tokens). |
| `messages` | `list` | Yes | List of messages for the conversation |
| `metadata` | `dict` | No | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `float | None` | No | Minimum probability threshold relative to the most likely token. |
| `modalities` | `list` | No | Output modalities for the response. |
| `model` | `str` | No | Model to use for completion |
| `models` | `list` | No | Models to use for completion |
| `parallel_tool_calls` | `bool | None` | No | Whether to enable parallel function calling during tool use. |
| `plugins` | `list` | No | Plugins you want to enable for this request, including their settings. |
| `prediction` | `dict | None` | Yes | Static predicted output content. |
| `presence_penalty` | `float | None` | No | Presence penalty (-2.0 to 2.0) |
| `prompt_cache_key` | `str | None` | No |  |
| `prompt_cache_options` | `dict | None` | Yes | Request-level prompt-cache controls. |
| `provider` | `dict | None` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `dict` | No | Configuration options for reasoning models |
| `reasoning_effort` | `str | None` | No | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `float | None` | No | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `Any` | No | Response format configuration |
| `route` | `str | None` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `seed` | `int | None` | No | Random seed for deterministic outputs |
| `service_tier` | `str | None` | No | The service tier to use for processing this request. |
| `session_id` | `str` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop` | `Any` | No | Stop sequences (up to 4) |
| `stop_server_tools_when` | `list` | No | Stop conditions for the server-tool agent loop. |
| `stream` | `bool` | No | Enable streaming response |
| `stream_options` | `dict | None` | No | Streaming configuration options |
| `temperature` | `float | None` | No | Sampling temperature (0-2) |
| `tool_choice` | `Any` | No | Tool choice configuration |
| `tools` | `list` | No | Available tools for function calling |
| `top_a` | `float | None` | No | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `int | None` | No | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `int | None` | No | Number of top log probabilities to return (0-20) |
| `top_p` | `float | None` | No | Nucleus sampling parameter (0-1) |
| `trace` | `dict` | No | Metadata for observability and tracing. |
| `user` | `str` | No | Unique user identifier |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Completion().create({
    "slug": "example_slug",  # str
    "cache_control": {},  # dict
    "messages": [],  # list
    "prediction": {},  # dict | None
    "prompt_cache_options": {},  # dict | None
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

Create a new `CompletionEntity` instance with the same options.

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
| `api_key_hashes` | `list | None` | No | Optional allowlist of OpenRouter API key hashes whose traffic is forwarded. |
| `config` | `dict` | Yes | Provider-specific configuration. |
| `enabled` | `bool` | No | Whether this destination should be enabled immediately. |
| `filter_rules` | `dict | None` | Yes | Optional structured filter rules controlling which events are forwarded. |
| `name` | `str` | Yes | Human-readable name for the destination. |
| `privacy_mode` | `bool` | No | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `float` | No | Sampling rate between 0.0001 and 1 (1 = 100%). |
| `type` | `str` | Yes | The destination type. |
| `workspace_id` | `str` | No | Optional workspace ID. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CreateObservabilityDestination().create({
    "config": {},  # dict
    "filter_rules": {},  # dict | None
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

## CreditEntity

```python
credit = client.Credit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total_credits` | `float` | Yes | Total credits purchased |
| `total_usage` | `float` | Yes | Total credits used |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Credit().create({
    "total_credits": 1,  # float
    "total_usage": 1,  # float
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

## EmbeddingEntity

```python
embedding = client.Embedding()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | Yes | List of embedding objects |
| `dimensions` | `int` | No | The number of dimensions for the output embeddings |
| `encoding_format` | `str` | No | The format of the output embeddings |
| `id` | `str` | No | Unique identifier for the embeddings response |
| `input` | `Any` | Yes | Text, token, or multimodal input(s) to embed |
| `input_type` | `str` | No | The type of input (e.g. |
| `model` | `str` | Yes | The model used for embeddings |
| `object` | `str` | Yes |  |
| `provider` | `Any` | No |  |
| `usage` | `dict` | Yes | Token usage statistics |
| `user` | `str` | No | A unique identifier for the end-user |

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
| `architecture` | `Any` | Yes | Model architecture information |
| `benchmarks` | `dict` | Yes | Third-party benchmark rankings for this model. |
| `canonical_slug` | `str` | Yes | Canonical slug for the model |
| `context_length` | `int | None` | Yes | Maximum context length in tokens |
| `created` | `int` | Yes | Unix timestamp of when the model was created |
| `default_parameters` | `dict | None` | Yes | Default parameters for this model |
| `description` | `str` | Yes | Description of the model |
| `endpoints` | `list` | Yes | List of available endpoints for this model |
| `expiration_date` | `str | None` | No | The date after which the model may be removed. |
| `hugging_face_id` | `str | None` | No | Hugging Face model identifier, if applicable |
| `id` | `str` | Yes | Unique identifier for the model |
| `knowledge_cutoff` | `str | None` | No | The date up to which the model was trained on data. |
| `links` | `dict` | Yes | Related API endpoints and resources for this model. |
| `name` | `str` | Yes | Display name of the model |
| `per_request_limits` | `dict | None` | Yes | Per-request token limits |
| `pricing` | `dict` | Yes | Pricing information for the model |
| `reasoning` | `dict` | Yes | Reasoning effort configuration. |
| `supported_parameters` | `list` | Yes | List of supported parameters for this model |
| `supported_voices` | `list | None` | Yes | List of supported voice identifiers for TTS models. |
| `top_provider` | `dict` | Yes | Information about the top provider for this model |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `architecture` | - | - |
| `benchmarks` | - | - |
| `canonical_slug` | - | - |
| `context_length` | - | - |
| `created` | - | - |
| `default_parameters` | - | - |
| `description` | - | Yes |
| `endpoints` | - | - |
| `expiration_date` | - | - |
| `hugging_face_id` | - | - |
| `id` | - | - |
| `knowledge_cutoff` | - | - |
| `links` | - | - |
| `name` | - | - |
| `per_request_limits` | - | - |
| `pricing` | - | - |
| `reasoning` | - | - |
| `supported_parameters` | - | - |
| `supported_voices` | - | - |
| `top_provider` | - | - |

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
| `size_bytes` | `int` | Yes |  |
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
    "size_bytes": 1,  # int
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
| `api_type` | `str | None` | Yes | Type of API used for the generation |
| `app_id` | `int | None` | Yes | ID of the app that made the request |
| `cache_discount` | `float | None` | Yes | Discount applied due to caching |
| `cancelled` | `bool | None` | Yes | Whether the generation was cancelled |
| `created_at` | `str` | Yes | ISO 8601 timestamp of when the generation was created |
| `data_region` | `str` | Yes | The data region this generation was routed through. |
| `external_user` | `str | None` | Yes | External user identifier |
| `finish_reason` | `str | None` | Yes | Reason the generation finished |
| `generation_time` | `float | None` | Yes | Time taken for generation in milliseconds |
| `http_referer` | `str | None` | Yes | Referer header from the request |
| `id` | `str` | Yes | Unique identifier for the generation |
| `is_byok` | `bool` | Yes | Whether this used bring-your-own-key |
| `latency` | `float | None` | Yes | Total latency in milliseconds |
| `model` | `str` | Yes | Model used for the generation |
| `moderation_latency` | `float | None` | Yes | Moderation latency in milliseconds |
| `native_finish_reason` | `str | None` | Yes | Native finish reason as reported by provider |
| `native_tokens_cached` | `int | None` | Yes | Native cached tokens as reported by provider |
| `native_tokens_completion` | `int | None` | Yes | Native completion tokens as reported by provider |
| `native_tokens_completion_images` | `int | None` | Yes | Native completion image tokens as reported by provider |
| `native_tokens_prompt` | `int | None` | Yes | Native prompt tokens as reported by provider |
| `native_tokens_reasoning` | `int | None` | Yes | Native reasoning tokens as reported by provider |
| `num_fetches` | `int | None` | Yes | Number of web fetches performed |
| `num_input_audio_prompt` | `int | None` | Yes | Number of audio inputs in the prompt |
| `num_media_completion` | `int | None` | Yes | Number of media items in the completion |
| `num_media_prompt` | `int | None` | Yes | Number of media items in the prompt |
| `num_search_results` | `int | None` | Yes | Number of search results included |
| `origin` | `str` | Yes | Origin URL of the request |
| `preset_id` | `str | None` | Yes | ID of the preset used for this generation, null if no preset was used |
| `provider_name` | `str | None` | Yes | Name of the provider that served the request |
| `provider_responses` | `list | None` | Yes | List of provider responses for this generation, including fallback attempts |
| `request_id` | `str | None` | No | Unique identifier grouping all generations from a single API request |
| `response_cache_source_id` | `str | None` | No | If this generation was served from response cache, contains the original generation ID. |
| `router` | `str | None` | Yes | Router used for the request (e.g., openrouter/auto) |
| `service_tier` | `str | None` | Yes | Service tier the upstream provider reported running this request on, or null if it did not report one. |
| `session_id` | `str | None` | No | Session identifier grouping multiple generations in the same session |
| `streamed` | `bool | None` | Yes | Whether the response was streamed |
| `tokens_completion` | `int | None` | Yes | Number of tokens in the completion |
| `tokens_prompt` | `int | None` | Yes | Number of tokens in the prompt |
| `total_cost` | `float` | Yes | Total cost of the generation in USD |
| `upstream_id` | `str | None` | Yes | Upstream provider's identifier for this generation |
| `upstream_inference_cost` | `float | None` | Yes | Cost charged by the upstream provider |
| `usage` | `float` | Yes | Usage amount in USD |
| `user_agent` | `str | None` | Yes | User-Agent header from the request |
| `web_search_engine` | `str | None` | Yes | The resolved web search engine used for this generation (e.g. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Generation().load({"id": "generation_id"})
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

## GenerationContentDataEntity

```python
generation_content_data = client.GenerationContentData()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `Any` | Yes | The input to the generation — either a prompt string or an array of messages |
| `output` | `dict` | Yes | The output from the generation |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GenerationContentData().load({"id": "generation_content_data_id"})
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

Create a new `GenerationContentDataEntity` instance with the same options.

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
| `allowed_models` | `list | None` | No | Array of model canonical_slugs (immutable identifiers) |
| `allowed_providers` | `list | None` | No | List of allowed provider IDs |
| `content_filter_builtins` | `list | None` | No | Builtin content filters applied to requests. |
| `content_filters` | `list | None` | No | Custom regex content filters applied to request messages |
| `created_at` | `str` | Yes | ISO 8601 timestamp of when the guardrail was created |
| `description` | `str | None` | No | Description of the guardrail |
| `enforce_zdr` | `bool | None` | No | Deprecated. |
| `enforce_zdr_anthropic` | `bool | None` | No | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `bool | None` | No | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `bool | None` | No | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `bool | None` | No | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `bool | None` | No | Whether to enforce zero data retention for xAI models. |
| `id` | `str` | Yes | Unique identifier for the guardrail |
| `ignored_models` | `list | None` | No | Array of model canonical_slugs to exclude from routing |
| `ignored_providers` | `list | None` | No | List of provider IDs to exclude from routing |
| `limit_usd` | `float | None` | No | Spending limit in USD |
| `name` | `str` | Yes | Name of the guardrail |
| `reset_interval` | `str | None` | No | Interval at which the limit resets (daily, weekly, monthly) |
| `updated_at` | `str | None` | No | ISO 8601 timestamp of when the guardrail was last updated |
| `workspace_id` | `str` | Yes | The workspace ID this guardrail belongs to. |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `allowed_models` | - | - | - | - |
| `allowed_providers` | - | - | - | - |
| `content_filter_builtins` | - | - | - | - |
| `content_filters` | - | - | - | - |
| `created_at` | - | - | - | - |
| `description` | - | - | - | - |
| `enforce_zdr` | - | - | - | - |
| `enforce_zdr_anthropic` | - | - | - | - |
| `enforce_zdr_google` | - | - | - | - |
| `enforce_zdr_openai` | - | - | - | - |
| `enforce_zdr_other` | - | - | - | - |
| `enforce_zdr_xai` | - | - | - | - |
| `id` | - | - | - | - |
| `ignored_models` | - | - | - | - |
| `ignored_providers` | - | - | - | - |
| `limit_usd` | - | - | - | - |
| `name` | - | - | - | - |
| `reset_interval` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `workspace_id` | - | - | Yes | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Guardrail().create({
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "workspace_id": "example_workspace_id",  # str
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
| `aspect_ratio` | `str` | No | Normalized aspect ratio of the generated image. |
| `background` | `str` | No | Background treatment. |
| `created` | `int` | Yes | Unix timestamp (seconds) when the image was generated |
| `data` | `list` | Yes | Generated images |
| `input_references` | `list` | No | Reference images to guide image-to-image generation, as base64 data URLs or HTTP(S) URLs. |
| `model` | `str` | Yes | The image generation model to use |
| `n` | `int` | No | Number of images to generate (1-10). |
| `output_compression` | `int` | No | Compression level (0-100) for webp/jpeg output. |
| `output_format` | `str` | No | Encoding of the returned image bytes. |
| `prompt` | `str` | Yes | Text description of the desired image |
| `provider` | `dict` | No | Provider routing preferences and provider-specific passthrough configuration. |
| `quality` | `str` | No | Rendering quality. |
| `resolution` | `str` | No | Normalized resolution tier of the generated image. |
| `seed` | `int` | No | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `str` | No | Optional. |
| `stream` | `bool` | No | If true, partial images are streamed as SSE events as they become available. |
| `usage` | `dict` | Yes | Token and cost usage for the image generation request, when available |

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
| `allowed_passthrough_parameters` | `list` | Yes | Provider-specific options accepted under provider.options[provider_slug]. |
| `pricing` | `list` | Yes | Billable pricing lines for this endpoint. |
| `provider_name` | `str` | Yes | Provider display name |
| `provider_slug` | `str` | Yes | Provider slug |
| `provider_tag` | `str | None` | Yes | Provider tag for request-side selection |
| `supported_parameters` | `Any` | Yes |  |
| `supports_streaming` | `bool` | Yes | Whether this endpoint supports native SSE streaming (`stream: true` in the request). |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ImageModelEndpoint().list({"model_id": "example", "slug": "example"})
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

## ImageModelListItemEntity

```python
image_model_list_item = client.ImageModelListItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `dict` | Yes |  |
| `created` | `int` | Yes | Unix timestamp (seconds) of when the model was created |
| `description` | `str` | Yes |  |
| `endpoints` | `str` | Yes | Relative URL to the full per-endpoint records for this model |
| `id` | `str` | Yes | Model slug |
| `name` | `str` | Yes | Display name |
| `supported_parameters` | `dict` | Yes | Union of supported parameters across every endpoint of this model. |
| `supports_streaming` | `bool` | Yes | Whether any endpoint of this model supports native SSE streaming on the dedicated Image API (i.e. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ImageModelListItem().list()
for image_model_list_item in results:
    print(image_model_list_item)
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

Create a new `ImageModelListItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## KeyEntity

```python
key = client.Key()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_by` | `str | None` | Yes | User ID of who made the assignment |
| `created_at` | `str` | Yes | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `str` | Yes | ID of the guardrail |
| `id` | `str` | Yes | Unique identifier for the assignment |
| `key_hash` | `str` | Yes | Hash of the assigned API key |
| `key_label` | `str` | Yes | Label of the API key |
| `key_name` | `str` | Yes | Name of the API key |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Key().list()
for key in results:
    print(key)
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

## ListObservabilityDestinationEntity

```python
list_observability_destination = client.ListObservabilityDestination()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | Yes | List of observability destinations. |
| `total_count` | `int` | Yes | Total number of destinations matching the filters. |

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
| `system_prompt` | `str | None` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `version` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListPresetVersion().list({"slug": "example"})
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

## MemberEntity

```python
member = client.Member()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_by` | `str | None` | Yes | User ID of who made the assignment |
| `created_at` | `str` | Yes | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `str` | Yes | ID of the guardrail |
| `id` | `str` | Yes | Unique identifier for the assignment |
| `organization_id` | `str` | Yes | Organization ID |
| `user_id` | `str` | Yes | Clerk user ID of the assigned member |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Member().list()
for member in results:
    print(member)
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
| `cache_control` | `dict` | Yes | Enable automatic prompt caching. |
| `context_management` | `dict | None` | No |  |
| `fallbacks` | `list | None` | No | Fallback models to try if the primary model fails or refuses, in order. |
| `max_tokens` | `int` | No |  |
| `messages` | `list | None` | Yes |  |
| `metadata` | `dict` | No |  |
| `model` | `str` | Yes |  |
| `models` | `list` | No |  |
| `output_config` | `dict` | No | Configuration for controlling output behavior. |
| `plugins` | `list` | No | Plugins you want to enable for this request, including their settings. |
| `provider` | `dict | None` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `route` | `str | None` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `service_tier` | `str` | No |  |
| `session_id` | `str` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `speed` | `Any` | No |  |
| `stop_sequences` | `list` | No |  |
| `stop_server_tools_when` | `list` | No | Stop conditions for the server-tool agent loop. |
| `stream` | `bool` | No |  |
| `system` | `Any` | No |  |
| `temperature` | `float` | No |  |
| `thinking` | `Any` | No |  |
| `tool_choice` | `Any` | No |  |
| `tools` | `list` | No |  |
| `top_k` | `int` | No |  |
| `top_p` | `float` | No |  |
| `trace` | `dict` | No | Metadata for observability and tracing. |
| `user` | `str` | No | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Message().create({
    "cache_control": {},  # dict
    "messages": [],  # list | None
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

## ModelEntity

```python
model = client.Model()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `dict` | Yes | Model architecture information |
| `benchmarks` | `dict` | Yes | Third-party benchmark rankings for this model. |
| `canonical_slug` | `str` | Yes | Canonical slug for the model |
| `context_length` | `int | None` | Yes | Maximum context length in tokens |
| `created` | `int` | Yes | Unix timestamp of when the model was created |
| `default_parameters` | `dict | None` | Yes | Default parameters for this model |
| `description` | `str` | No | Description of the model |
| `expiration_date` | `str | None` | No | The date after which the model may be removed. |
| `hugging_face_id` | `str | None` | No | Hugging Face model identifier, if applicable |
| `id` | `str` | Yes | Unique identifier for the model |
| `knowledge_cutoff` | `str | None` | No | The date up to which the model was trained on data. |
| `links` | `dict` | Yes | Related API endpoints and resources for this model. |
| `name` | `str` | Yes | Display name of the model |
| `per_request_limits` | `dict | None` | Yes | Per-request token limits |
| `pricing` | `dict` | Yes | Pricing information for the model |
| `reasoning` | `dict` | Yes | Reasoning effort configuration. |
| `supported_parameters` | `list` | Yes | List of supported parameters for this model |
| `supported_voices` | `list | None` | Yes | List of supported voice identifiers for TTS models. |
| `top_provider` | `dict` | Yes | Information about the top provider for this model |

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
| `count` | `int` | Yes | Total number of available models |

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
| `architecture` | `dict` | Yes | Model architecture information |
| `benchmarks` | `dict` | Yes | Third-party benchmark rankings for this model. |
| `canonical_slug` | `str` | Yes | Canonical slug for the model |
| `context_length` | `int | None` | Yes | Maximum context length in tokens |
| `created` | `int` | Yes | Unix timestamp of when the model was created |
| `default_parameters` | `dict | None` | Yes | Default parameters for this model |
| `description` | `str` | No | Description of the model |
| `expiration_date` | `str | None` | No | The date after which the model may be removed. |
| `hugging_face_id` | `str | None` | No | Hugging Face model identifier, if applicable |
| `id` | `str` | Yes | Unique identifier for the model |
| `knowledge_cutoff` | `str | None` | No | The date up to which the model was trained on data. |
| `links` | `dict` | Yes | Related API endpoints and resources for this model. |
| `name` | `str` | Yes | Display name of the model |
| `per_request_limits` | `dict | None` | Yes | Per-request token limits |
| `pricing` | `dict` | Yes | Pricing information for the model |
| `reasoning` | `dict` | Yes | Reasoning effort configuration. |
| `supported_parameters` | `list` | Yes | List of supported parameters for this model |
| `supported_voices` | `list | None` | Yes | List of supported voice identifiers for TTS models. |
| `top_provider` | `dict` | Yes | Information about the top provider for this model |

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
| `app_id` | `int` | Yes | The application ID associated with this auth code |
| `callback_url` | `str` | Yes | The callback URL to redirect to after authorization. |
| `code` | `str` | Yes | The authorization code received from the OAuth redirect |
| `code_challenge` | `str` | No | PKCE code challenge for enhanced security |
| `code_challenge_method` | `str | None` | No | The method used to generate the code challenge |
| `code_verifier` | `str` | No | The code verifier if code_challenge was used in the authorization request |
| `created_at` | `str` | Yes | ISO 8601 timestamp of when the auth code was created |
| `expires_at` | `str | None` | No | Optional expiration time for the API key to be created |
| `id` | `str` | Yes | The authorization code ID to use in the exchange request |
| `key` | `str` | Yes | The API key to use for OpenRouter requests |
| `key_label` | `str` | No | Optional custom label for the API key. |
| `limit` | `float` | No | Credit limit for the API key to be created |
| `spawn_agent` | `str` | No | Agent identifier for spawn telemetry |
| `spawn_cloud` | `str` | No | Cloud identifier for spawn telemetry |
| `usage_limit_type` | `str` | No | Optional credit limit reset interval. |
| `user_id` | `str | None` | Yes | User ID associated with the API key |
| `workspace_id` | `str` | No | Optional workspace ID to associate the API key with |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OAuth().create({
    "app_id": 1,  # int
    "callback_url": "example_callback_url",  # str
    "code": "example_code",  # str
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "key": "example_key",  # str
    "user_id": "example_user_id",  # str | None
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
| `data` | `dict` | No |  |
| `id` | `str` | No |  |

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
| `background` | `bool | None` | No |  |
| `cache_control` | `dict` | Yes | Enable automatic prompt caching. |
| `debug` | `dict` | No | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `float | None` | No |  |
| `image_config` | `dict` | No | Provider-specific image configuration options. |
| `include` | `list | None` | No |  |
| `input` | `Any` | No | Input for a response request - can be a string or array of items |
| `instructions` | `str | None` | No |  |
| `max_output_tokens` | `int | None` | No |  |
| `max_tool_calls` | `int | None` | No |  |
| `metadata` | `dict | None` | No | Metadata key-value pairs for the request. |
| `modalities` | `list` | No | Output modalities for the response. |
| `model` | `str` | No |  |
| `models` | `list` | No |  |
| `parallel_tool_calls` | `bool | None` | No |  |
| `plugins` | `list` | No | Plugins you want to enable for this request, including their settings. |
| `presence_penalty` | `float | None` | No |  |
| `previous_response_id` | `str` | No | Not supported. |
| `prompt` | `dict | None` | Yes |  |
| `prompt_cache_key` | `str | None` | No |  |
| `prompt_cache_options` | `dict | None` | Yes | Request-level prompt-cache controls. |
| `provider` | `dict | None` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `Any` | No | Configuration for reasoning mode in the response |
| `route` | `str | None` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `str | None` | No |  |
| `service_tier` | `str | None` | No |  |
| `session_id` | `str` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop_server_tools_when` | `list` | No | Stop conditions for the server-tool agent loop. |
| `store` | `bool` | No |  |
| `stream` | `bool` | No |  |
| `temperature` | `float | None` | No |  |
| `text` | `Any` | No | Text output configuration including format and verbosity |
| `tool_choice` | `Any` | No |  |
| `tools` | `list` | No |  |
| `top_k` | `int` | No |  |
| `top_logprobs` | `int | None` | No |  |
| `top_p` | `float | None` | No |  |
| `trace` | `dict` | No | Metadata for observability and tracing. |
| `truncation` | `str | None` | No |  |
| `user` | `str` | No | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OpenResponsesResult().create({
    "cache_control": {},  # dict
    "prompt": {},  # dict | None
    "prompt_cache_options": {},  # dict | None
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
| `creator_user_id` | `str | None` | Yes |  |
| `description` | `str | None` | Yes |  |
| `designated_version` | `dict | None` | Yes | A specific version of a preset, containing config and optional system prompt. |
| `designated_version_id` | `str | None` | Yes |  |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `slug` | `str` | Yes |  |
| `status` | `str` | Yes | The status of a preset. |
| `status_updated_at` | `str | None` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `workspace_id` | `str | None` | Yes |  |

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
| `config` | `dict` | Yes |  |
| `created_at` | `str` | Yes |  |
| `creator_id` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `preset_id` | `str` | Yes |  |
| `system_prompt` | `str | None` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `version` | `int` | Yes |  |

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
| `datacenters` | `list | None` | No | ISO 3166-1 Alpha-2 country codes of the provider datacenter locations |
| `headquarters` | `str | None` | No | ISO 3166-1 Alpha-2 country code of the provider headquarters |
| `name` | `str` | Yes | Display name of the provider |
| `privacy_policy_url` | `str | None` | Yes | URL to the provider's privacy policy |
| `slug` | `str` | Yes | URL-friendly identifier for the provider |
| `status_page_url` | `str | None` | No | URL to the provider's status page |
| `terms_of_service_url` | `str | None` | No | URL to the provider's terms of service |

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

## RankingsDailyEntity

```python
rankings_daily = client.RankingsDaily()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `str` | Yes | UTC calendar date the row is aggregated over (YYYY-MM-DD). |
| `model_permaslug` | `str` | Yes | Model variant permaslug (e.g. |
| `total_tokens` | `str` | Yes | Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated. |

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

## RerankEntity

```python
rerank = client.Rerank()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `documents` | `list` | Yes | The list of documents to rerank. |
| `id` | `str` | No | Unique identifier for the rerank response (ORID format) |
| `model` | `str` | Yes | The model used for reranking |
| `provider` | `str` | No | The provider that served the rerank request |
| `query` | `str` | Yes | The search query to rerank documents against |
| `results` | `list` | Yes | List of rerank results sorted by relevance |
| `top_n` | `int` | No | Number of most relevant documents to return |
| `usage` | `dict` | No | Usage statistics |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Rerank().create({
    "documents": [],  # list
    "model": "example_model",  # str
    "query": "example_query",  # str
    "results": [],  # list
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

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `background` | `bool | None` | No |  |
| `cache_control` | `dict` | Yes | Enable automatic prompt caching. |
| `debug` | `dict` | No | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `float | None` | No |  |
| `image_config` | `dict` | No | Provider-specific image configuration options. |
| `include` | `list | None` | No |  |
| `input` | `Any` | No | Input for a response request - can be a string or array of items |
| `instructions` | `str | None` | No |  |
| `max_output_tokens` | `int | None` | No |  |
| `max_tool_calls` | `int | None` | No |  |
| `metadata` | `dict | None` | No | Metadata key-value pairs for the request. |
| `modalities` | `list` | No | Output modalities for the response. |
| `model` | `str` | No |  |
| `models` | `list` | No |  |
| `parallel_tool_calls` | `bool | None` | No |  |
| `plugins` | `list` | No | Plugins you want to enable for this request, including their settings. |
| `presence_penalty` | `float | None` | No |  |
| `previous_response_id` | `str` | No | Not supported. |
| `prompt` | `dict | None` | Yes |  |
| `prompt_cache_key` | `str | None` | No |  |
| `prompt_cache_options` | `dict | None` | Yes | Request-level prompt-cache controls. |
| `provider` | `dict | None` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `Any` | No | Configuration for reasoning mode in the response |
| `route` | `str | None` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `str | None` | No |  |
| `service_tier` | `str | None` | No |  |
| `session_id` | `str` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop_server_tools_when` | `list` | No | Stop conditions for the server-tool agent loop. |
| `store` | `bool` | No |  |
| `stream` | `bool` | No |  |
| `temperature` | `float | None` | No |  |
| `text` | `Any` | No | Text output configuration including format and verbosity |
| `tool_choice` | `Any` | No |  |
| `tools` | `list` | No |  |
| `top_k` | `int` | No |  |
| `top_logprobs` | `int | None` | No |  |
| `top_p` | `float | None` | No |  |
| `trace` | `dict` | No | Metadata for observability and tracing. |
| `truncation` | `str | None` | No |  |
| `user` | `str` | No | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Response().create({
    "slug": "example_slug",  # str
    "cache_control": {},  # dict
    "prompt": {},  # dict | None
    "prompt_cache_options": {},  # dict | None
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

Create a new `ResponseEntity` instance with the same options.

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
| `duration` | `float` | No | Duration of the input audio in seconds, present when response_format is verbose_json |
| `input_audio` | `dict` | Yes | Base64-encoded audio to transcribe |
| `language` | `str` | No | Detected or forced language, present when response_format is verbose_json |
| `model` | `str` | Yes | STT model identifier |
| `provider` | `dict` | No | Provider-specific passthrough configuration |
| `response_format` | `str` | No | Output format. |
| `segments` | `list` | No | Timestamped transcript segments, present when response_format is verbose_json |
| `task` | `str` | No | The task performed, present when response_format is verbose_json |
| `temperature` | `float` | No | Sampling temperature for transcription |
| `text` | `str` | Yes | The transcribed text |
| `timestamp_granularities` | `list` | No | Timestamp detail levels to include when response_format is "verbose_json". |
| `usage` | `dict` | No | Aggregated usage statistics for the request |
| `words` | `list` | No | Timestamped words, present when the provider returns word-level timestamps |

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
| `category` | `str` | Yes | The category of feedback being reported |
| `comment` | `str` | No | An optional free-text comment describing the feedback |
| `generation_id` | `str` | Yes | The generation to submit feedback on |
| `success` | `bool` | Yes | Whether the feedback was recorded |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SubmitGenerationFeedback().create({
    "category": "example_category",  # str
    "generation_id": "example_generation_id",  # str
    "success": True,  # bool
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
| `as_of` | `str` | Yes | UTC date (YYYY-MM-DD) of the window upper bound (yesterday). |
| `classifications` | `list` | Yes | Per-task classification market-share data, sorted by usage_share descending. |
| `macro_categories` | `list` | Yes | Aggregate market-share data per macro-category (code, data, agent, general). |
| `window_days` | `int` | Yes | Number of trailing days covered by this snapshot. |

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

## TtsEntity

```python
tts = client.Tts()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `str` | Yes | Text to synthesize |
| `model` | `str` | Yes | TTS model identifier |
| `provider` | `dict` | No | Provider-specific passthrough configuration |
| `response_format` | `str` | No | Audio output format |
| `speed` | `float` | No | Playback speed multiplier. |
| `voice` | `str` | Yes | Voice identifier (provider-specific). |

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
| `allowed_models` | `list | None` | No | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `list | None` | No | Optional allowlist of user IDs that may use this credential. |
| `disabled` | `bool` | No | Whether this credential is disabled. |
| `id` | `str` | No |  |
| `is_fallback` | `bool` | No | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `str` | No | A new raw provider API key to rotate the credential in-place. |
| `name` | `str | None` | No | Optional human-readable name for the credential. |

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
| `allowed_models` | `list | None` | No | Array of model identifiers (slug or canonical_slug accepted) |
| `allowed_providers` | `list | None` | No | New list of allowed provider IDs |
| `content_filter_builtins` | `list | None` | No | Builtin content filters to apply. |
| `content_filters` | `list | None` | No | Custom regex content filters to apply. |
| `description` | `str | None` | No | New description for the guardrail |
| `enforce_zdr` | `bool | None` | No | Deprecated. |
| `enforce_zdr_anthropic` | `bool | None` | No | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `bool | None` | No | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `bool | None` | No | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `bool | None` | No | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `bool | None` | No | Whether to enforce zero data retention for xAI models. |
| `id` | `str` | No |  |
| `ignored_models` | `list | None` | No | Array of model identifiers to exclude from routing (slug or canonical_slug accepted) |
| `ignored_providers` | `list | None` | No | List of provider IDs to exclude from routing |
| `limit_usd` | `float | None` | No | New spending limit in USD |
| `name` | `str` | No | New name for the guardrail |
| `reset_interval` | `str | None` | No | Interval at which the limit resets (daily, weekly, monthly) |

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
| `api_key_hashes` | `list | None` | No | Optional allowlist of OpenRouter API key hashes. |
| `config` | `dict` | No | Provider-specific configuration fields to update. |
| `enabled` | `bool` | No | Whether the destination is enabled. |
| `filter_rules` | `Any` | No |  |
| `id` | `str` | No |  |
| `name` | `str` | No | Human-readable name for the destination. |
| `privacy_mode` | `bool` | No | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `float` | No | Sampling rate between 0.0001 and 1 (1 = 100%). |

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
| `created_at` | `str` | Yes | ISO 8601 timestamp of when the workspace was created |
| `created_by` | `str | None` | Yes | User ID of the workspace creator |
| `default_image_model` | `str | None` | No | Default image model for this workspace |
| `default_provider_sort` | `str | None` | No | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `str | None` | No | Default text model for this workspace |
| `description` | `str | None` | No | Description of the workspace |
| `id` | `str` | Yes | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `list | None` | No | Optional array of API key IDs to filter I/O logging |
| `io_logging_sampling_rate` | `float` | No | Sampling rate for I/O logging (0.0001-1) |
| `is_data_discount_logging_enabled` | `bool` | No | Whether data discount logging is enabled |
| `is_observability_broadcast_enabled` | `bool` | No | Whether broadcast is enabled |
| `is_observability_io_logging_enabled` | `bool` | No | Whether private logging is enabled |
| `name` | `str` | Yes | Name for the new workspace |
| `slug` | `str` | Yes | URL-friendly slug (lowercase alphanumeric segments separated by single hyphens, no leading/trailing hyphens) |
| `updated_at` | `str | None` | Yes | ISO 8601 timestamp of when the workspace was last updated |

### Field Usage by Operation

| Field | list | create | update |
| --- | --- | --- | --- |
| `created_at` | - | - | - |
| `created_by` | - | - | - |
| `default_image_model` | Yes | - | - |
| `default_provider_sort` | Yes | - | - |
| `default_text_model` | Yes | - | - |
| `description` | Yes | - | - |
| `id` | - | - | - |
| `io_logging_api_key_ids` | Yes | - | - |
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
    "created_by": "example_created_by",  # str | None
    "id": "example_id",  # str
    "name": "example_name",  # str
    "slug": "example_slug",  # str
    "updated_at": "example_updated_at",  # str | None
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
| `id` | `str` | No |  |
| `limit_usd` | `float` | Yes | Spending limit in USD. |

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

## VideoEntity

```python
video = client.Video()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `str` | No | Aspect ratio of the generated video |
| `callback_url` | `str` | No | URL to receive a webhook notification when the video generation job completes. |
| `duration` | `int` | No | Duration of the generated video in seconds |
| `error` | `str` | No |  |
| `frame_images` | `list` | No | Images to use as the first and/or last frame of the generated video. |
| `generate_audio` | `bool` | No | Whether to generate audio alongside the video. |
| `generation_id` | `str` | No | The generation ID associated with this video generation job. |
| `id` | `str` | Yes |  |
| `input_references` | `list` | No | Reference assets to guide video generation. |
| `model` | `str` | Yes |  |
| `polling_url` | `str` | Yes |  |
| `prompt` | `str` | No | Text prompt describing the video to generate. |
| `provider` | `dict` | No | Provider-specific passthrough configuration |
| `resolution` | `str` | No | Resolution of the generated video |
| `seed` | `int` | No | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `str` | No | Exact pixel dimensions of the generated video in "WIDTHxHEIGHT" format (e.g. |
| `status` | `str` | Yes |  |
| `unsigned_urls` | `list` | No |  |
| `usage` | `dict` | No | Usage and cost information for the video generation. |

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

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

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

## VideoModelEntity

```python
video_model = client.VideoModel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_passthrough_parameters` | `list` | Yes | List of parameters that are allowed to be passed through to the provider |
| `canonical_slug` | `str` | Yes | Canonical slug for the model |
| `created` | `int` | Yes | Unix timestamp of when the model was created |
| `description` | `str` | No | Description of the model |
| `generate_audio` | `bool | None` | Yes | Whether the model supports generating audio alongside video |
| `hugging_face_id` | `str | None` | No | Hugging Face model identifier, if applicable |
| `id` | `str` | Yes | Unique identifier for the model |
| `name` | `str` | Yes | Display name of the model |
| `pricing_skus` | `dict | None` | No | Pricing SKUs with provider prefix stripped, values as strings |
| `seed` | `bool | None` | Yes | Whether the model supports deterministic generation via seed parameter |
| `supported_aspect_ratios` | `list | None` | Yes | Supported output aspect ratios |
| `supported_durations` | `list | None` | Yes | Supported video durations in seconds |
| `supported_frame_images` | `list | None` | Yes | Supported frame image types (e.g. |
| `supported_resolutions` | `list | None` | Yes | Supported output resolutions |
| `supported_sizes` | `list | None` | Yes | Supported output sizes (width x height) |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.VideoModel().list()
for video_model in results:
    print(video_model)
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

Create a new `VideoModelEntity` instance with the same options.

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
| `created_at` | `str` | Yes | ISO 8601 timestamp of when the workspace was created |
| `created_by` | `str | None` | Yes | User ID of the workspace creator |
| `default_image_model` | `str | None` | Yes | Default image model for this workspace |
| `default_provider_sort` | `str | None` | Yes | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `str | None` | Yes | Default text model for this workspace |
| `description` | `str | None` | Yes | Description of the workspace |
| `id` | `str` | Yes | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `list | None` | Yes | Optional array of API key IDs to filter I/O logging. |
| `io_logging_sampling_rate` | `float` | Yes | Sampling rate for I/O logging (0.0001-1). |
| `is_data_discount_logging_enabled` | `bool` | Yes | Whether data discount logging is enabled for this workspace |
| `is_observability_broadcast_enabled` | `bool` | Yes | Whether broadcast is enabled for this workspace |
| `is_observability_io_logging_enabled` | `bool` | Yes | Whether private logging is enabled for this workspace |
| `name` | `str` | Yes | Name of the workspace |
| `slug` | `str` | Yes | URL-friendly slug for the workspace |
| `updated_at` | `str | None` | Yes | ISO 8601 timestamp of when the workspace was last updated |

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

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | ISO 8601 timestamp of when the budget was created |
| `id` | `str` | Yes | Unique identifier for the budget |
| `limit_usd` | `float` | Yes | Spending limit in USD for this interval |
| `reset_interval` | `str | None` | Yes | Interval at which spend resets. |
| `updated_at` | `str` | Yes | ISO 8601 timestamp of when the budget was last updated |
| `workspace_id` | `str` | Yes | ID of the workspace the budget belongs to |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkspaceBudget().list({"id": "example"})
for workspace_budget in results:
    print(workspace_budget)
```

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

## WorkspaceMemberEntity

```python
workspace_member = client.WorkspaceMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | ISO 8601 timestamp of when the membership was created |
| `id` | `str` | Yes | Unique identifier for the workspace membership |
| `role` | `str` | Yes | Role of the member in the workspace |
| `user_id` | `str` | Yes | Clerk user ID of the member |
| `workspace_id` | `str` | Yes | ID of the workspace |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkspaceMember().list({"id": "example"})
for workspace_member in results:
    print(workspace_member)
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

Create a new `WorkspaceMemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```python
client = OpenrouterModelsSDK({
    "feature": {
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

