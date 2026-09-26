# OpenrouterModels Ruby SDK Reference

Complete API reference for the OpenrouterModels Ruby SDK.


## OpenrouterModelsSDK

### Constructor

```ruby
require_relative 'OpenrouterModels_sdk'

client = OpenrouterModelsSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `OpenrouterModelsSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = OpenrouterModelsSDK.test
```


### Instance Methods

#### `Activity(data = nil)`

Create a new `Activity` entity instance. Pass `nil` for no initial data.

#### `ApiKey(data = nil)`

Create a new `ApiKey` entity instance. Pass `nil` for no initial data.

#### `AppRanking(data = nil)`

Create a new `AppRanking` entity instance. Pass `nil` for no initial data.

#### `BetaAnalytics(data = nil)`

Create a new `BetaAnalytics` entity instance. Pass `nil` for no initial data.

#### `BulkAddWorkspaceMember(data = nil)`

Create a new `BulkAddWorkspaceMember` entity instance. Pass `nil` for no initial data.

#### `BulkAssignKey(data = nil)`

Create a new `BulkAssignKey` entity instance. Pass `nil` for no initial data.

#### `BulkAssignMember(data = nil)`

Create a new `BulkAssignMember` entity instance. Pass `nil` for no initial data.

#### `BulkRemoveWorkspaceMember(data = nil)`

Create a new `BulkRemoveWorkspaceMember` entity instance. Pass `nil` for no initial data.

#### `BulkUnassignKey(data = nil)`

Create a new `BulkUnassignKey` entity instance. Pass `nil` for no initial data.

#### `BulkUnassignMember(data = nil)`

Create a new `BulkUnassignMember` entity instance. Pass `nil` for no initial data.

#### `Byok(data = nil)`

Create a new `Byok` entity instance. Pass `nil` for no initial data.

#### `ChatResult(data = nil)`

Create a new `ChatResult` entity instance. Pass `nil` for no initial data.

#### `Completion(data = nil)`

Create a new `Completion` entity instance. Pass `nil` for no initial data.

#### `CreateObservabilityDestination(data = nil)`

Create a new `CreateObservabilityDestination` entity instance. Pass `nil` for no initial data.

#### `Credit(data = nil)`

Create a new `Credit` entity instance. Pass `nil` for no initial data.

#### `Embedding(data = nil)`

Create a new `Embedding` entity instance. Pass `nil` for no initial data.

#### `Endpoint(data = nil)`

Create a new `Endpoint` entity instance. Pass `nil` for no initial data.

#### `File(data = nil)`

Create a new `File` entity instance. Pass `nil` for no initial data.

#### `Generation(data = nil)`

Create a new `Generation` entity instance. Pass `nil` for no initial data.

#### `GenerationContentData(data = nil)`

Create a new `GenerationContentData` entity instance. Pass `nil` for no initial data.

#### `Guardrail(data = nil)`

Create a new `Guardrail` entity instance. Pass `nil` for no initial data.

#### `Image(data = nil)`

Create a new `Image` entity instance. Pass `nil` for no initial data.

#### `ImageModelEndpoint(data = nil)`

Create a new `ImageModelEndpoint` entity instance. Pass `nil` for no initial data.

#### `ImageModelListItem(data = nil)`

Create a new `ImageModelListItem` entity instance. Pass `nil` for no initial data.

#### `Key(data = nil)`

Create a new `Key` entity instance. Pass `nil` for no initial data.

#### `ListObservabilityDestination(data = nil)`

Create a new `ListObservabilityDestination` entity instance. Pass `nil` for no initial data.

#### `ListPresetVersion(data = nil)`

Create a new `ListPresetVersion` entity instance. Pass `nil` for no initial data.

#### `Member(data = nil)`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `Message(data = nil)`

Create a new `Message` entity instance. Pass `nil` for no initial data.

#### `Model(data = nil)`

Create a new `Model` entity instance. Pass `nil` for no initial data.

#### `ModelsCount(data = nil)`

Create a new `ModelsCount` entity instance. Pass `nil` for no initial data.

#### `ModelsList(data = nil)`

Create a new `ModelsList` entity instance. Pass `nil` for no initial data.

#### `OAuth(data = nil)`

Create a new `OAuth` entity instance. Pass `nil` for no initial data.

#### `ObservabilityDestination(data = nil)`

Create a new `ObservabilityDestination` entity instance. Pass `nil` for no initial data.

#### `OpenResponsesResult(data = nil)`

Create a new `OpenResponsesResult` entity instance. Pass `nil` for no initial data.

#### `Organization(data = nil)`

Create a new `Organization` entity instance. Pass `nil` for no initial data.

#### `Preset(data = nil)`

Create a new `Preset` entity instance. Pass `nil` for no initial data.

#### `PresetVersion(data = nil)`

Create a new `PresetVersion` entity instance. Pass `nil` for no initial data.

#### `Provider(data = nil)`

Create a new `Provider` entity instance. Pass `nil` for no initial data.

#### `RankingsDaily(data = nil)`

Create a new `RankingsDaily` entity instance. Pass `nil` for no initial data.

#### `Rerank(data = nil)`

Create a new `Rerank` entity instance. Pass `nil` for no initial data.

#### `Response(data = nil)`

Create a new `Response` entity instance. Pass `nil` for no initial data.

#### `Stt(data = nil)`

Create a new `Stt` entity instance. Pass `nil` for no initial data.

#### `SubmitGenerationFeedback(data = nil)`

Create a new `SubmitGenerationFeedback` entity instance. Pass `nil` for no initial data.

#### `Task(data = nil)`

Create a new `Task` entity instance. Pass `nil` for no initial data.

#### `Tts(data = nil)`

Create a new `Tts` entity instance. Pass `nil` for no initial data.

#### `UnifiedBenchmark(data = nil)`

Create a new `UnifiedBenchmark` entity instance. Pass `nil` for no initial data.

#### `UpdateByokKey(data = nil)`

Create a new `UpdateByokKey` entity instance. Pass `nil` for no initial data.

#### `UpdateGuardrail(data = nil)`

Create a new `UpdateGuardrail` entity instance. Pass `nil` for no initial data.

#### `UpdateObservabilityDestination(data = nil)`

Create a new `UpdateObservabilityDestination` entity instance. Pass `nil` for no initial data.

#### `UpdateWorkspace(data = nil)`

Create a new `UpdateWorkspace` entity instance. Pass `nil` for no initial data.

#### `UpsertWorkspaceBudget(data = nil)`

Create a new `UpsertWorkspaceBudget` entity instance. Pass `nil` for no initial data.

#### `Video(data = nil)`

Create a new `Video` entity instance. Pass `nil` for no initial data.

#### `VideoGeneration(data = nil)`

Create a new `VideoGeneration` entity instance. Pass `nil` for no initial data.

#### `VideoModel(data = nil)`

Create a new `VideoModel` entity instance. Pass `nil` for no initial data.

#### `Workspace(data = nil)`

Create a new `Workspace` entity instance. Pass `nil` for no initial data.

#### `WorkspaceBudget(data = nil)`

Create a new `WorkspaceBudget` entity instance. Pass `nil` for no initial data.

#### `WorkspaceMember(data = nil)`

Create a new `WorkspaceMember` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## ActivityEntity

```ruby
activity = client.Activity
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byok_usage_inference` | `Float` | Yes | BYOK inference cost in USD (external credits spent) |
| `completion_tokens` | `Integer` | Yes | Total completion tokens generated |
| `date` | `String` | Yes | Date of the activity (YYYY-MM-DD format) |
| `endpoint_id` | `String` | Yes | Unique identifier for the endpoint |
| `model` | `String` | Yes | Model slug (e.g., "openai/gpt-4.1") |
| `model_permaslug` | `String` | Yes | Model permaslug (e.g., "openai/gpt-4.1-2025-04-14") |
| `prompt_tokens` | `Integer` | Yes | Total prompt tokens used |
| `provider_name` | `String` | Yes | Name of the provider serving this endpoint |
| `reasoning_tokens` | `Integer` | Yes | Total reasoning tokens used |
| `requests` | `Integer` | Yes | Number of requests made |
| `usage` | `Float` | Yes | Total cost in USD (OpenRouter credits spent) |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Activity.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ActivityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiKeyEntity

```ruby
api_key = client.ApiKey
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byok_usage` | `Float` | Yes | Total external BYOK usage (in USD) for the API key |
| `byok_usage_daily` | `Float` | Yes | External BYOK usage (in USD) for the current UTC day |
| `byok_usage_monthly` | `Float` | Yes | External BYOK usage (in USD) for current UTC month |
| `byok_usage_weekly` | `Float` | Yes | External BYOK usage (in USD) for the current UTC week (Monday-Sunday) |
| `created_at` | `String` | Yes | ISO 8601 timestamp of when the API key was created |
| `creator_user_id` | `Object` | Yes | The user ID of the key creator. |
| `disabled` | `Boolean` | Yes | Whether the API key is disabled |
| `expires_at` | `Object` | No | ISO 8601 UTC timestamp when the API key expires, or null if no expiration |
| `hash` | `String` | Yes | Unique hash identifier for the API key |
| `id` | `String` | No |  |
| `include_byok_in_limit` | `Boolean` | Yes | Whether to include external BYOK usage in the credit limit |
| `is_free_tier` | `Boolean` | Yes | Whether this is a free tier API key |
| `is_management_key` | `Boolean` | Yes | Whether this is a management key |
| `is_provisioning_key` | `Boolean` | Yes | Whether this is a management key |
| `label` | `String` | Yes | Human-readable label for the API key |
| `limit` | `Object` | Yes | Spending limit for the API key in USD |
| `limit_remaining` | `Object` | Yes | Remaining spending limit in USD |
| `limit_reset` | `Object` | Yes | Type of limit reset for the API key |
| `name` | `String` | Yes | Name of the API key |
| `rate_limit` | `Hash` | Yes | Legacy rate limit information about a key. |
| `updated_at` | `Object` | Yes | ISO 8601 timestamp of when the API key was last updated |
| `usage` | `Float` | Yes | Total OpenRouter credit usage (in USD) for the API key |
| `usage_daily` | `Float` | Yes | OpenRouter credit usage (in USD) for the current UTC day |
| `usage_monthly` | `Float` | Yes | OpenRouter credit usage (in USD) for the current UTC month |
| `usage_weekly` | `Float` | Yes | OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday) |
| `workspace_id` | `String` | Yes | The workspace ID this API key belongs to. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiKey.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiKey.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiKey.load({ "id" => "api_key_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ApiKey.remove({ "id" => "api_key_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiKey.update({
  "id" => "api_key_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AppRankingEntity

```ruby
app_ranking = client.AppRanking
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `Integer` | Yes | Stable numeric identifier of the app on OpenRouter. |
| `app_name` | `String` | Yes | Public display name of the app. |
| `rank` | `Integer` | Yes | 1-based position of the app within this response, per the requested `sort`. |
| `total_requests` | `Integer` | Yes | Number of requests attributed to the app inside the date window. |
| `total_tokens` | `String` | Yes | Sum of `prompt_tokens + completion_tokens` attributed to the app inside the date window, returned as a decimal string so 64-bit values are not truncated. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AppRanking.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AppRankingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BetaAnalyticsEntity

```ruby
beta_analytics = client.BetaAnalytics
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cachedAt` | `Float` | No |  |
| `classifier_dimensions` | `Hash` | Yes | Group results by custom classifier tags, breaking down metrics by the specified dimension values. |
| `classifier_filters` | `Hash` | Yes | Filter results to generations with specific classifier tag values. |
| `data` | `Array` | Yes |  |
| `dimensions` | `Array` | Yes |  |
| `filters` | `Array` | No |  |
| `granularities` | `Array` | Yes |  |
| `granularity` | `String` | No | Time granularity |
| `group_limit` | `Integer` | No | Maximum rows per distinct combination of dimensions. |
| `limit` | `Integer` | No | Maximum total rows returned. |
| `metadata` | `Hash` | Yes |  |
| `metrics` | `Array` | Yes |  |
| `operators` | `Array` | Yes |  |
| `order_by` | `Hash` | Yes |  |
| `time_range` | `Hash` | Yes |  |
| `warnings` | `Array` | No | Warnings about filter resolution issues (e.g. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BetaAnalytics.create({
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.BetaAnalytics.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BetaAnalyticsEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BulkAddWorkspaceMemberEntity

```ruby
bulk_add_workspace_member = client.BulkAddWorkspaceMember
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `added_count` | `Integer` | Yes | Number of workspace memberships created or updated |
| `data` | `Array` | Yes | List of added workspace memberships |
| `user_ids` | `Array` | Yes | List of user IDs to add to the workspace. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BulkAddWorkspaceMember.create({
  "workspace_id" => "example_workspace_id", # String
  "added_count" => 1, # Integer
  "data" => [], # Array
  "user_ids" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BulkAddWorkspaceMemberEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BulkAssignKeyEntity

```ruby
bulk_assign_key = client.BulkAssignKey
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_count` | `Integer` | Yes | Number of keys successfully assigned |
| `key_hashes` | `Array` | Yes | Array of API key hashes to assign to the guardrail |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BulkAssignKey.create({
  "guardrail_id" => "example_guardrail_id", # String
  "assigned_count" => 1, # Integer
  "key_hashes" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BulkAssignKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BulkAssignMemberEntity

```ruby
bulk_assign_member = client.BulkAssignMember
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_count` | `Integer` | Yes | Number of members successfully assigned |
| `member_user_ids` | `Array` | Yes | Array of member user IDs to assign to the guardrail |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BulkAssignMember.create({
  "guardrail_id" => "example_guardrail_id", # String
  "assigned_count" => 1, # Integer
  "member_user_ids" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BulkAssignMemberEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BulkRemoveWorkspaceMemberEntity

```ruby
bulk_remove_workspace_member = client.BulkRemoveWorkspaceMember
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `removed_count` | `Integer` | Yes | Number of members removed |
| `user_ids` | `Array` | Yes | List of user IDs to remove from the workspace |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BulkRemoveWorkspaceMember.create({
  "workspace_id" => "example_workspace_id", # String
  "removed_count" => 1, # Integer
  "user_ids" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BulkRemoveWorkspaceMemberEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BulkUnassignKeyEntity

```ruby
bulk_unassign_key = client.BulkUnassignKey
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key_hashes` | `Array` | Yes | Array of API key hashes to unassign from the guardrail |
| `unassigned_count` | `Integer` | Yes | Number of keys successfully unassigned |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BulkUnassignKey.create({
  "guardrail_id" => "example_guardrail_id", # String
  "key_hashes" => [], # Array
  "unassigned_count" => 1, # Integer
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BulkUnassignKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BulkUnassignMemberEntity

```ruby
bulk_unassign_member = client.BulkUnassignMember
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `member_user_ids` | `Array` | Yes | Array of member user IDs to unassign from the guardrail |
| `unassigned_count` | `Integer` | Yes | Number of members successfully unassigned |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BulkUnassignMember.create({
  "guardrail_id" => "example_guardrail_id", # String
  "member_user_ids" => [], # Array
  "unassigned_count" => 1, # Integer
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BulkUnassignMemberEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ByokEntity

```ruby
byok = client.Byok
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_api_key_hashes` | `Object` | Yes | Optional allowlist of OpenRouter API key hashes (`api_keys.hash`) that may use this credential. |
| `allowed_models` | `Object` | Yes | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `Object` | Yes | Optional allowlist of user IDs that may use this credential. |
| `created_at` | `String` | Yes | ISO timestamp of when the credential was created. |
| `disabled` | `Boolean` | Yes | Whether this credential is currently disabled. |
| `id` | `String` | Yes | Stable public identifier for this BYOK credential. |
| `is_fallback` | `Boolean` | Yes | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `String` | Yes | The raw provider API key or credential. |
| `label` | `String` | Yes | Short masked snippet of the key (e.g. |
| `name` | `Object` | No | Optional human-readable name for the credential. |
| `provider` | `String` | Yes | The upstream provider this credential authenticates against, as a lowercase slug (e.g. |
| `sort_order` | `Integer` | Yes | Position within the provider — credentials are tried in ascending sort order. |
| `workspace_id` | `String` | Yes | ID of the workspace this credential belongs to. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Byok.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Byok.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Byok.load({ "id" => "byok_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Byok.remove({ "id" => "byok_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ByokEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ChatResultEntity

```ruby
chat_result = client.ChatResult
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_control` | `Hash` | Yes | Enable automatic prompt caching. |
| `choices` | `Array` | Yes | List of completion choices |
| `created` | `Integer` | Yes | Unix timestamp of creation |
| `debug` | `Hash` | No | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `Object` | No | Frequency penalty (-2.0 to 2.0) |
| `id` | `String` | Yes | Unique completion identifier |
| `image_config` | `Hash` | No | Provider-specific image configuration options. |
| `logit_bias` | `Object` | No | Token logit bias adjustments |
| `logprobs` | `Object` | No | Return log probabilities |
| `max_completion_tokens` | `Object` | No | Maximum tokens in completion |
| `max_tokens` | `Object` | No | Maximum tokens (deprecated, use max_completion_tokens). |
| `messages` | `Array` | Yes | List of messages for the conversation |
| `metadata` | `Hash` | No | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `Object` | No | Minimum probability threshold relative to the most likely token. |
| `modalities` | `Array` | No | Output modalities for the response. |
| `model` | `String` | Yes | Model used for completion |
| `models` | `Array` | No | Models to use for completion |
| `object` | `String` | Yes |  |
| `openrouter_metadata` | `Hash` | Yes |  |
| `parallel_tool_calls` | `Object` | No | Whether to enable parallel function calling during tool use. |
| `plugins` | `Array` | No | Plugins you want to enable for this request, including their settings. |
| `prediction` | `Object` | Yes | Static predicted output content. |
| `presence_penalty` | `Object` | No | Presence penalty (-2.0 to 2.0) |
| `prompt_cache_key` | `Object` | No |  |
| `prompt_cache_options` | `Object` | Yes | Request-level prompt-cache controls. |
| `provider` | `Object` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `Hash` | No | Configuration options for reasoning models |
| `reasoning_effort` | `Object` | No | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `Object` | No | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `Object` | No | Response format configuration |
| `route` | `Object` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `seed` | `Object` | No | Random seed for deterministic outputs |
| `service_tier` | `Object` | No | The service tier used by the upstream provider for this request |
| `session_id` | `String` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop` | `Object` | No | Stop sequences (up to 4) |
| `stop_server_tools_when` | `Array` | No | Stop conditions for the server-tool agent loop. |
| `stream` | `Boolean` | No | Enable streaming response |
| `stream_options` | `Object` | No | Streaming configuration options |
| `system_fingerprint` | `Object` | Yes | System fingerprint |
| `temperature` | `Object` | No | Sampling temperature (0-2) |
| `tool_choice` | `Object` | No | Tool choice configuration |
| `tools` | `Array` | No | Available tools for function calling |
| `top_a` | `Object` | No | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `Object` | No | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `Object` | No | Number of top log probabilities to return (0-20) |
| `top_p` | `Object` | No | Nucleus sampling parameter (0-1) |
| `trace` | `Hash` | No | Metadata for observability and tracing. |
| `usage` | `Hash` | Yes | Token usage statistics |
| `user` | `String` | No | Unique user identifier |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ChatResult.create({
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

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ChatResultEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CompletionEntity

```ruby
completion = client.Completion
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_control` | `Hash` | Yes | Enable automatic prompt caching. |
| `debug` | `Hash` | No | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `Object` | No | Frequency penalty (-2.0 to 2.0) |
| `image_config` | `Hash` | No | Provider-specific image configuration options. |
| `logit_bias` | `Object` | No | Token logit bias adjustments |
| `logprobs` | `Object` | No | Return log probabilities |
| `max_completion_tokens` | `Object` | No | Maximum tokens in completion |
| `max_tokens` | `Object` | No | Maximum tokens (deprecated, use max_completion_tokens). |
| `messages` | `Array` | Yes | List of messages for the conversation |
| `metadata` | `Hash` | No | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `Object` | No | Minimum probability threshold relative to the most likely token. |
| `modalities` | `Array` | No | Output modalities for the response. |
| `model` | `String` | No | Model to use for completion |
| `models` | `Array` | No | Models to use for completion |
| `parallel_tool_calls` | `Object` | No | Whether to enable parallel function calling during tool use. |
| `plugins` | `Array` | No | Plugins you want to enable for this request, including their settings. |
| `prediction` | `Object` | Yes | Static predicted output content. |
| `presence_penalty` | `Object` | No | Presence penalty (-2.0 to 2.0) |
| `prompt_cache_key` | `Object` | No |  |
| `prompt_cache_options` | `Object` | Yes | Request-level prompt-cache controls. |
| `provider` | `Object` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `Hash` | No | Configuration options for reasoning models |
| `reasoning_effort` | `Object` | No | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `Object` | No | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `Object` | No | Response format configuration |
| `route` | `Object` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `seed` | `Object` | No | Random seed for deterministic outputs |
| `service_tier` | `Object` | No | The service tier to use for processing this request. |
| `session_id` | `String` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop` | `Object` | No | Stop sequences (up to 4) |
| `stop_server_tools_when` | `Array` | No | Stop conditions for the server-tool agent loop. |
| `stream` | `Boolean` | No | Enable streaming response |
| `stream_options` | `Object` | No | Streaming configuration options |
| `temperature` | `Object` | No | Sampling temperature (0-2) |
| `tool_choice` | `Object` | No | Tool choice configuration |
| `tools` | `Array` | No | Available tools for function calling |
| `top_a` | `Object` | No | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `Object` | No | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `Object` | No | Number of top log probabilities to return (0-20) |
| `top_p` | `Object` | No | Nucleus sampling parameter (0-1) |
| `trace` | `Hash` | No | Metadata for observability and tracing. |
| `user` | `String` | No | Unique user identifier |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Completion.create({
  "slug" => "example_slug", # String
  "cache_control" => {}, # Hash
  "messages" => [], # Array
  "prediction" => {}, # Object
  "prompt_cache_options" => {}, # Object
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CompletionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CreateObservabilityDestinationEntity

```ruby
create_observability_destination = client.CreateObservabilityDestination
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_key_hashes` | `Object` | No | Optional allowlist of OpenRouter API key hashes whose traffic is forwarded. |
| `config` | `Hash` | Yes | Provider-specific configuration. |
| `enabled` | `Boolean` | No | Whether this destination should be enabled immediately. |
| `filter_rules` | `Object` | Yes | Optional structured filter rules controlling which events are forwarded. |
| `name` | `String` | Yes | Human-readable name for the destination. |
| `privacy_mode` | `Boolean` | No | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `Float` | No | Sampling rate between 0.0001 and 1 (1 = 100%). |
| `type` | `String` | Yes | The destination type. |
| `workspace_id` | `String` | No | Optional workspace ID. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CreateObservabilityDestination.create({
  "config" => {}, # Hash
  "filter_rules" => {}, # Object
  "name" => "example_name", # String
  "type" => "example_type", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CreateObservabilityDestinationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CreditEntity

```ruby
credit = client.Credit
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total_credits` | `Float` | Yes | Total credits purchased |
| `total_usage` | `Float` | Yes | Total credits used |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Credit.create({
  "total_credits" => 1, # Float
  "total_usage" => 1, # Float
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Credit.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CreditEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EmbeddingEntity

```ruby
embedding = client.Embedding
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | Yes | List of embedding objects |
| `dimensions` | `Integer` | No | The number of dimensions for the output embeddings |
| `encoding_format` | `String` | No | The format of the output embeddings |
| `id` | `String` | No | Unique identifier for the embeddings response |
| `input` | `Object` | Yes | Text, token, or multimodal input(s) to embed |
| `input_type` | `String` | No | The type of input (e.g. |
| `model` | `String` | Yes | The model used for embeddings |
| `object` | `String` | Yes |  |
| `provider` | `Object` | No |  |
| `usage` | `Hash` | Yes | Token usage statistics |
| `user` | `String` | No | A unique identifier for the end-user |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Embedding.create({
  "data" => [], # Array
  "input" => "example_input", # Object
  "model" => "example_model", # String
  "object" => "example_object", # String
  "usage" => {}, # Hash
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EmbeddingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EndpointEntity

```ruby
endpoint = client.Endpoint
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `Object` | Yes | Model architecture information |
| `benchmarks` | `Hash` | Yes | Third-party benchmark rankings for this model. |
| `canonical_slug` | `String` | Yes | Canonical slug for the model |
| `context_length` | `Object` | Yes | Maximum context length in tokens |
| `created` | `Integer` | Yes | Unix timestamp of when the model was created |
| `default_parameters` | `Object` | Yes | Default parameters for this model |
| `description` | `String` | Yes | Description of the model |
| `endpoints` | `Array` | Yes | List of available endpoints for this model |
| `expiration_date` | `Object` | No | The date after which the model may be removed. |
| `hugging_face_id` | `Object` | No | Hugging Face model identifier, if applicable |
| `id` | `String` | Yes | Unique identifier for the model |
| `knowledge_cutoff` | `Object` | No | The date up to which the model was trained on data. |
| `links` | `Hash` | Yes | Related API endpoints and resources for this model. |
| `name` | `String` | Yes | Display name of the model |
| `per_request_limits` | `Object` | Yes | Per-request token limits |
| `pricing` | `Hash` | Yes | Pricing information for the model |
| `reasoning` | `Hash` | Yes | Reasoning effort configuration. |
| `supported_parameters` | `Array` | Yes | List of supported parameters for this model |
| `supported_voices` | `Object` | Yes | List of supported voice identifiers for TTS models. |
| `top_provider` | `Hash` | Yes | Information about the top provider for this model |

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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Endpoint.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Endpoint.load({ "author" => "author", "slug" => "slug" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EndpointEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FileEntity

```ruby
file = client.File
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes |  |
| `downloadable` | `Boolean` | Yes |  |
| `filename` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `mime_type` | `String` | Yes |  |
| `size_bytes` | `Integer` | Yes |  |
| `type` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.File.create({
  "created_at" => "example_created_at", # String
  "downloadable" => true, # Boolean
  "filename" => "example_filename", # String
  "id" => "example_id", # String
  "mime_type" => "example_mime_type", # String
  "size_bytes" => 1, # Integer
  "type" => "example_type", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.File.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.File.load({ "id" => "file_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.File.remove({ "id" => "file_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FileEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GenerationEntity

```ruby
generation = client.Generation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_type` | `Object` | Yes | Type of API used for the generation |
| `app_id` | `Object` | Yes | ID of the app that made the request |
| `cache_discount` | `Object` | Yes | Discount applied due to caching |
| `cancelled` | `Object` | Yes | Whether the generation was cancelled |
| `created_at` | `String` | Yes | ISO 8601 timestamp of when the generation was created |
| `data_region` | `String` | Yes | The data region this generation was routed through. |
| `external_user` | `Object` | Yes | External user identifier |
| `finish_reason` | `Object` | Yes | Reason the generation finished |
| `generation_time` | `Object` | Yes | Time taken for generation in milliseconds |
| `http_referer` | `Object` | Yes | Referer header from the request |
| `id` | `String` | Yes | Unique identifier for the generation |
| `is_byok` | `Boolean` | Yes | Whether this used bring-your-own-key |
| `latency` | `Object` | Yes | Total latency in milliseconds |
| `model` | `String` | Yes | Model used for the generation |
| `moderation_latency` | `Object` | Yes | Moderation latency in milliseconds |
| `native_finish_reason` | `Object` | Yes | Native finish reason as reported by provider |
| `native_tokens_cached` | `Object` | Yes | Native cached tokens as reported by provider |
| `native_tokens_completion` | `Object` | Yes | Native completion tokens as reported by provider |
| `native_tokens_completion_images` | `Object` | Yes | Native completion image tokens as reported by provider |
| `native_tokens_prompt` | `Object` | Yes | Native prompt tokens as reported by provider |
| `native_tokens_reasoning` | `Object` | Yes | Native reasoning tokens as reported by provider |
| `num_fetches` | `Object` | Yes | Number of web fetches performed |
| `num_input_audio_prompt` | `Object` | Yes | Number of audio inputs in the prompt |
| `num_media_completion` | `Object` | Yes | Number of media items in the completion |
| `num_media_prompt` | `Object` | Yes | Number of media items in the prompt |
| `num_search_results` | `Object` | Yes | Number of search results included |
| `origin` | `String` | Yes | Origin URL of the request |
| `preset_id` | `Object` | Yes | ID of the preset used for this generation, null if no preset was used |
| `provider_name` | `Object` | Yes | Name of the provider that served the request |
| `provider_responses` | `Object` | Yes | List of provider responses for this generation, including fallback attempts |
| `request_id` | `Object` | No | Unique identifier grouping all generations from a single API request |
| `response_cache_source_id` | `Object` | No | If this generation was served from response cache, contains the original generation ID. |
| `router` | `Object` | Yes | Router used for the request (e.g., openrouter/auto) |
| `service_tier` | `Object` | Yes | Service tier the upstream provider reported running this request on, or null if it did not report one. |
| `session_id` | `Object` | No | Session identifier grouping multiple generations in the same session |
| `streamed` | `Object` | Yes | Whether the response was streamed |
| `tokens_completion` | `Object` | Yes | Number of tokens in the completion |
| `tokens_prompt` | `Object` | Yes | Number of tokens in the prompt |
| `total_cost` | `Float` | Yes | Total cost of the generation in USD |
| `upstream_id` | `Object` | Yes | Upstream provider's identifier for this generation |
| `upstream_inference_cost` | `Object` | Yes | Cost charged by the upstream provider |
| `usage` | `Float` | Yes | Usage amount in USD |
| `user_agent` | `Object` | Yes | User-Agent header from the request |
| `web_search_engine` | `Object` | Yes | The resolved web search engine used for this generation (e.g. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Generation.load({ "id" => "generation_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GenerationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GenerationContentDataEntity

```ruby
generation_content_data = client.GenerationContentData
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `Object` | Yes | The input to the generation — either a prompt string or an array of messages |
| `output` | `Hash` | Yes | The output from the generation |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.GenerationContentData.load({ "id" => "generation_content_data_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GenerationContentDataEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GuardrailEntity

```ruby
guardrail = client.Guardrail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_models` | `Object` | No | Array of model canonical_slugs (immutable identifiers) |
| `allowed_providers` | `Object` | No | List of allowed provider IDs |
| `content_filter_builtins` | `Object` | No | Builtin content filters applied to requests. |
| `content_filters` | `Object` | No | Custom regex content filters applied to request messages |
| `created_at` | `String` | Yes | ISO 8601 timestamp of when the guardrail was created |
| `description` | `Object` | No | Description of the guardrail |
| `enforce_zdr` | `Object` | No | Deprecated. |
| `enforce_zdr_anthropic` | `Object` | No | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `Object` | No | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `Object` | No | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `Object` | No | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `Object` | No | Whether to enforce zero data retention for xAI models. |
| `id` | `String` | Yes | Unique identifier for the guardrail |
| `ignored_models` | `Object` | No | Array of model canonical_slugs to exclude from routing |
| `ignored_providers` | `Object` | No | List of provider IDs to exclude from routing |
| `limit_usd` | `Object` | No | Spending limit in USD |
| `name` | `String` | Yes | Name of the guardrail |
| `reset_interval` | `Object` | No | Interval at which the limit resets (daily, weekly, monthly) |
| `updated_at` | `Object` | No | ISO 8601 timestamp of when the guardrail was last updated |
| `workspace_id` | `String` | Yes | The workspace ID this guardrail belongs to. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Guardrail.create({
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "name" => "example_name", # String
  "workspace_id" => "example_workspace_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Guardrail.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Guardrail.load({ "id" => "guardrail_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Guardrail.remove({ "id" => "guardrail_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GuardrailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImageEntity

```ruby
image = client.Image
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `String` | No | Normalized aspect ratio of the generated image. |
| `background` | `String` | No | Background treatment. |
| `created` | `Integer` | Yes | Unix timestamp (seconds) when the image was generated |
| `data` | `Array` | Yes | Generated images |
| `input_references` | `Array` | No | Reference images to guide image-to-image generation, as base64 data URLs or HTTP(S) URLs. |
| `model` | `String` | Yes | The image generation model to use |
| `n` | `Integer` | No | Number of images to generate (1-10). |
| `output_compression` | `Integer` | No | Compression level (0-100) for webp/jpeg output. |
| `output_format` | `String` | No | Encoding of the returned image bytes. |
| `prompt` | `String` | Yes | Text description of the desired image |
| `provider` | `Hash` | No | Provider routing preferences and provider-specific passthrough configuration. |
| `quality` | `String` | No | Rendering quality. |
| `resolution` | `String` | No | Normalized resolution tier of the generated image. |
| `seed` | `Integer` | No | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `String` | No | Optional. |
| `stream` | `Boolean` | No | If true, partial images are streamed as SSE events as they become available. |
| `usage` | `Hash` | Yes | Token and cost usage for the image generation request, when available |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Image.create({
  "created" => 1, # Integer
  "data" => [], # Array
  "model" => "example_model", # String
  "prompt" => "example_prompt", # String
  "usage" => {}, # Hash
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImageModelEndpointEntity

```ruby
image_model_endpoint = client.ImageModelEndpoint
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_passthrough_parameters` | `Array` | Yes | Provider-specific options accepted under provider.options[provider_slug]. |
| `pricing` | `Array` | Yes | Billable pricing lines for this endpoint. |
| `provider_name` | `String` | Yes | Provider display name |
| `provider_slug` | `String` | Yes | Provider slug |
| `provider_tag` | `Object` | Yes | Provider tag for request-side selection |
| `supported_parameters` | `Object` | Yes |  |
| `supports_streaming` | `Boolean` | Yes | Whether this endpoint supports native SSE streaming (`stream: true` in the request). |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ImageModelEndpoint.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImageModelEndpointEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImageModelListItemEntity

```ruby
image_model_list_item = client.ImageModelListItem
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `Hash` | Yes |  |
| `created` | `Integer` | Yes | Unix timestamp (seconds) of when the model was created |
| `description` | `String` | Yes |  |
| `endpoints` | `String` | Yes | Relative URL to the full per-endpoint records for this model |
| `id` | `String` | Yes | Model slug |
| `name` | `String` | Yes | Display name |
| `supported_parameters` | `Hash` | Yes | Union of supported parameters across every endpoint of this model. |
| `supports_streaming` | `Boolean` | Yes | Whether any endpoint of this model supports native SSE streaming on the dedicated Image API (i.e. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ImageModelListItem.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImageModelListItemEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## KeyEntity

```ruby
key = client.Key
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_by` | `Object` | Yes | User ID of who made the assignment |
| `created_at` | `String` | Yes | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `String` | Yes | ID of the guardrail |
| `id` | `String` | Yes | Unique identifier for the assignment |
| `key_hash` | `String` | Yes | Hash of the assigned API key |
| `key_label` | `String` | Yes | Label of the API key |
| `key_name` | `String` | Yes | Name of the API key |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Key.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `KeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListObservabilityDestinationEntity

```ruby
list_observability_destination = client.ListObservabilityDestination
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | Yes | List of observability destinations. |
| `total_count` | `Integer` | Yes | Total number of destinations matching the filters. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListObservabilityDestination.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListObservabilityDestinationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListPresetVersionEntity

```ruby
list_preset_version = client.ListPresetVersion
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Hash` | Yes |  |
| `created_at` | `String` | Yes |  |
| `creator_id` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `preset_id` | `String` | Yes |  |
| `system_prompt` | `Object` | Yes |  |
| `updated_at` | `String` | Yes |  |
| `version` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListPresetVersion.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListPresetVersionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MemberEntity

```ruby
member = client.Member
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_by` | `Object` | Yes | User ID of who made the assignment |
| `created_at` | `String` | Yes | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `String` | Yes | ID of the guardrail |
| `id` | `String` | Yes | Unique identifier for the assignment |
| `organization_id` | `String` | Yes | Organization ID |
| `user_id` | `String` | Yes | Clerk user ID of the assigned member |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Member.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MessageEntity

```ruby
message = client.Message
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_control` | `Hash` | Yes | Enable automatic prompt caching. |
| `context_management` | `Object` | No |  |
| `fallbacks` | `Object` | No | Fallback models to try if the primary model fails or refuses, in order. |
| `max_tokens` | `Integer` | No |  |
| `messages` | `Object` | Yes |  |
| `metadata` | `Hash` | No |  |
| `model` | `String` | Yes |  |
| `models` | `Array` | No |  |
| `output_config` | `Hash` | No | Configuration for controlling output behavior. |
| `plugins` | `Array` | No | Plugins you want to enable for this request, including their settings. |
| `provider` | `Object` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `route` | `Object` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `service_tier` | `String` | No |  |
| `session_id` | `String` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `speed` | `Object` | No |  |
| `stop_sequences` | `Array` | No |  |
| `stop_server_tools_when` | `Array` | No | Stop conditions for the server-tool agent loop. |
| `stream` | `Boolean` | No |  |
| `system` | `Object` | No |  |
| `temperature` | `Float` | No |  |
| `thinking` | `Object` | No |  |
| `tool_choice` | `Object` | No |  |
| `tools` | `Array` | No |  |
| `top_k` | `Integer` | No |  |
| `top_p` | `Float` | No |  |
| `trace` | `Hash` | No | Metadata for observability and tracing. |
| `user` | `String` | No | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Message.create({
  "cache_control" => {}, # Hash
  "messages" => [], # Object
  "model" => "example_model", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MessageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ModelEntity

```ruby
model = client.Model
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `Hash` | Yes | Model architecture information |
| `benchmarks` | `Hash` | Yes | Third-party benchmark rankings for this model. |
| `canonical_slug` | `String` | Yes | Canonical slug for the model |
| `context_length` | `Object` | Yes | Maximum context length in tokens |
| `created` | `Integer` | Yes | Unix timestamp of when the model was created |
| `default_parameters` | `Object` | Yes | Default parameters for this model |
| `description` | `String` | No | Description of the model |
| `expiration_date` | `Object` | No | The date after which the model may be removed. |
| `hugging_face_id` | `Object` | No | Hugging Face model identifier, if applicable |
| `id` | `String` | Yes | Unique identifier for the model |
| `knowledge_cutoff` | `Object` | No | The date up to which the model was trained on data. |
| `links` | `Hash` | Yes | Related API endpoints and resources for this model. |
| `name` | `String` | Yes | Display name of the model |
| `per_request_limits` | `Object` | Yes | Per-request token limits |
| `pricing` | `Hash` | Yes | Pricing information for the model |
| `reasoning` | `Hash` | Yes | Reasoning effort configuration. |
| `supported_parameters` | `Array` | Yes | List of supported parameters for this model |
| `supported_voices` | `Object` | Yes | List of supported voice identifiers for TTS models. |
| `top_provider` | `Hash` | Yes | Information about the top provider for this model |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Model.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Model.load({ "author" => "author", "slug" => "slug" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ModelEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ModelsCountEntity

```ruby
models_count = client.ModelsCount
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `Integer` | Yes | Total number of available models |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ModelsCount.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ModelsCountEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ModelsListEntity

```ruby
models_list = client.ModelsList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `Hash` | Yes | Model architecture information |
| `benchmarks` | `Hash` | Yes | Third-party benchmark rankings for this model. |
| `canonical_slug` | `String` | Yes | Canonical slug for the model |
| `context_length` | `Object` | Yes | Maximum context length in tokens |
| `created` | `Integer` | Yes | Unix timestamp of when the model was created |
| `default_parameters` | `Object` | Yes | Default parameters for this model |
| `description` | `String` | No | Description of the model |
| `expiration_date` | `Object` | No | The date after which the model may be removed. |
| `hugging_face_id` | `Object` | No | Hugging Face model identifier, if applicable |
| `id` | `String` | Yes | Unique identifier for the model |
| `knowledge_cutoff` | `Object` | No | The date up to which the model was trained on data. |
| `links` | `Hash` | Yes | Related API endpoints and resources for this model. |
| `name` | `String` | Yes | Display name of the model |
| `per_request_limits` | `Object` | Yes | Per-request token limits |
| `pricing` | `Hash` | Yes | Pricing information for the model |
| `reasoning` | `Hash` | Yes | Reasoning effort configuration. |
| `supported_parameters` | `Array` | Yes | List of supported parameters for this model |
| `supported_voices` | `Object` | Yes | List of supported voice identifiers for TTS models. |
| `top_provider` | `Hash` | Yes | Information about the top provider for this model |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ModelsList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ModelsListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OAuthEntity

```ruby
o_auth = client.OAuth
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `Integer` | Yes | The application ID associated with this auth code |
| `callback_url` | `String` | Yes | The callback URL to redirect to after authorization. |
| `code` | `String` | Yes | The authorization code received from the OAuth redirect |
| `code_challenge` | `String` | No | PKCE code challenge for enhanced security |
| `code_challenge_method` | `Object` | No | The method used to generate the code challenge |
| `code_verifier` | `String` | No | The code verifier if code_challenge was used in the authorization request |
| `created_at` | `String` | Yes | ISO 8601 timestamp of when the auth code was created |
| `expires_at` | `Object` | No | Optional expiration time for the API key to be created |
| `id` | `String` | Yes | The authorization code ID to use in the exchange request |
| `key` | `String` | Yes | The API key to use for OpenRouter requests |
| `key_label` | `String` | No | Optional custom label for the API key. |
| `limit` | `Float` | No | Credit limit for the API key to be created |
| `spawn_agent` | `String` | No | Agent identifier for spawn telemetry |
| `spawn_cloud` | `String` | No | Cloud identifier for spawn telemetry |
| `usage_limit_type` | `String` | No | Optional credit limit reset interval. |
| `user_id` | `Object` | Yes | User ID associated with the API key |
| `workspace_id` | `String` | No | Optional workspace ID to associate the API key with |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.OAuth.create({
  "app_id" => 1, # Integer
  "callback_url" => "example_callback_url", # String
  "code" => "example_code", # String
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "key" => "example_key", # String
  "user_id" => "example_user_id", # Object
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OAuthEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ObservabilityDestinationEntity

```ruby
observability_destination = client.ObservabilityDestination
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Hash` | No |  |
| `id` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ObservabilityDestination.load({ "id" => "observability_destination_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ObservabilityDestination.remove({ "id" => "observability_destination_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ObservabilityDestinationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OpenResponsesResultEntity

```ruby
open_responses_result = client.OpenResponsesResult
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `background` | `Object` | No |  |
| `cache_control` | `Hash` | Yes | Enable automatic prompt caching. |
| `debug` | `Hash` | No | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `Object` | No |  |
| `image_config` | `Hash` | No | Provider-specific image configuration options. |
| `include` | `Object` | No |  |
| `input` | `Object` | No | Input for a response request - can be a string or array of items |
| `instructions` | `Object` | No |  |
| `max_output_tokens` | `Object` | No |  |
| `max_tool_calls` | `Object` | No |  |
| `metadata` | `Object` | No | Metadata key-value pairs for the request. |
| `modalities` | `Array` | No | Output modalities for the response. |
| `model` | `String` | No |  |
| `models` | `Array` | No |  |
| `parallel_tool_calls` | `Object` | No |  |
| `plugins` | `Array` | No | Plugins you want to enable for this request, including their settings. |
| `presence_penalty` | `Object` | No |  |
| `previous_response_id` | `String` | No | Not supported. |
| `prompt` | `Object` | Yes |  |
| `prompt_cache_key` | `Object` | No |  |
| `prompt_cache_options` | `Object` | Yes | Request-level prompt-cache controls. |
| `provider` | `Object` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `Object` | No | Configuration for reasoning mode in the response |
| `route` | `Object` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `Object` | No |  |
| `service_tier` | `Object` | No |  |
| `session_id` | `String` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop_server_tools_when` | `Array` | No | Stop conditions for the server-tool agent loop. |
| `store` | `Boolean` | No |  |
| `stream` | `Boolean` | No |  |
| `temperature` | `Object` | No |  |
| `text` | `Object` | No | Text output configuration including format and verbosity |
| `tool_choice` | `Object` | No |  |
| `tools` | `Array` | No |  |
| `top_k` | `Integer` | No |  |
| `top_logprobs` | `Object` | No |  |
| `top_p` | `Object` | No |  |
| `trace` | `Hash` | No | Metadata for observability and tracing. |
| `truncation` | `Object` | No |  |
| `user` | `String` | No | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.OpenResponsesResult.create({
  "cache_control" => {}, # Hash
  "prompt" => {}, # Object
  "prompt_cache_options" => {}, # Object
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OpenResponsesResultEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationEntity

```ruby
organization = client.Organization
```

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Organization.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PresetEntity

```ruby
preset = client.Preset
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes |  |
| `creator_user_id` | `Object` | Yes |  |
| `description` | `Object` | Yes |  |
| `designated_version` | `Object` | Yes | A specific version of a preset, containing config and optional system prompt. |
| `designated_version_id` | `Object` | Yes |  |
| `id` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `slug` | `String` | Yes |  |
| `status` | `String` | Yes | The status of a preset. |
| `status_updated_at` | `Object` | Yes |  |
| `updated_at` | `String` | Yes |  |
| `workspace_id` | `Object` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Preset.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Preset.load({ "id" => "preset_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PresetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PresetVersionEntity

```ruby
preset_version = client.PresetVersion
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Hash` | Yes |  |
| `created_at` | `String` | Yes |  |
| `creator_id` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `preset_id` | `String` | Yes |  |
| `system_prompt` | `Object` | Yes |  |
| `updated_at` | `String` | Yes |  |
| `version` | `Integer` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PresetVersion.load({ "id" => "preset_version_id", "slug" => "slug" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PresetVersionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProviderEntity

```ruby
provider = client.Provider
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `datacenters` | `Object` | No | ISO 3166-1 Alpha-2 country codes of the provider datacenter locations |
| `headquarters` | `Object` | No | ISO 3166-1 Alpha-2 country code of the provider headquarters |
| `name` | `String` | Yes | Display name of the provider |
| `privacy_policy_url` | `Object` | Yes | URL to the provider's privacy policy |
| `slug` | `String` | Yes | URL-friendly identifier for the provider |
| `status_page_url` | `Object` | No | URL to the provider's status page |
| `terms_of_service_url` | `Object` | No | URL to the provider's terms of service |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Provider.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProviderEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RankingsDailyEntity

```ruby
rankings_daily = client.RankingsDaily
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `String` | Yes | UTC calendar date the row is aggregated over (YYYY-MM-DD). |
| `model_permaslug` | `String` | Yes | Model variant permaslug (e.g. |
| `total_tokens` | `String` | Yes | Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.RankingsDaily.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RankingsDailyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RerankEntity

```ruby
rerank = client.Rerank
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `documents` | `Array` | Yes | The list of documents to rerank. |
| `id` | `String` | No | Unique identifier for the rerank response (ORID format) |
| `model` | `String` | Yes | The model used for reranking |
| `provider` | `String` | No | The provider that served the rerank request |
| `query` | `String` | Yes | The search query to rerank documents against |
| `results` | `Array` | Yes | List of rerank results sorted by relevance |
| `top_n` | `Integer` | No | Number of most relevant documents to return |
| `usage` | `Hash` | No | Usage statistics |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Rerank.create({
  "documents" => [], # Array
  "model" => "example_model", # String
  "query" => "example_query", # String
  "results" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RerankEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ResponseEntity

```ruby
response = client.Response
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `background` | `Object` | No |  |
| `cache_control` | `Hash` | Yes | Enable automatic prompt caching. |
| `debug` | `Hash` | No | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `Object` | No |  |
| `image_config` | `Hash` | No | Provider-specific image configuration options. |
| `include` | `Object` | No |  |
| `input` | `Object` | No | Input for a response request - can be a string or array of items |
| `instructions` | `Object` | No |  |
| `max_output_tokens` | `Object` | No |  |
| `max_tool_calls` | `Object` | No |  |
| `metadata` | `Object` | No | Metadata key-value pairs for the request. |
| `modalities` | `Array` | No | Output modalities for the response. |
| `model` | `String` | No |  |
| `models` | `Array` | No |  |
| `parallel_tool_calls` | `Object` | No |  |
| `plugins` | `Array` | No | Plugins you want to enable for this request, including their settings. |
| `presence_penalty` | `Object` | No |  |
| `previous_response_id` | `String` | No | Not supported. |
| `prompt` | `Object` | Yes |  |
| `prompt_cache_key` | `Object` | No |  |
| `prompt_cache_options` | `Object` | Yes | Request-level prompt-cache controls. |
| `provider` | `Object` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `Object` | No | Configuration for reasoning mode in the response |
| `route` | `Object` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `Object` | No |  |
| `service_tier` | `Object` | No |  |
| `session_id` | `String` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop_server_tools_when` | `Array` | No | Stop conditions for the server-tool agent loop. |
| `store` | `Boolean` | No |  |
| `stream` | `Boolean` | No |  |
| `temperature` | `Object` | No |  |
| `text` | `Object` | No | Text output configuration including format and verbosity |
| `tool_choice` | `Object` | No |  |
| `tools` | `Array` | No |  |
| `top_k` | `Integer` | No |  |
| `top_logprobs` | `Object` | No |  |
| `top_p` | `Object` | No |  |
| `trace` | `Hash` | No | Metadata for observability and tracing. |
| `truncation` | `Object` | No |  |
| `user` | `String` | No | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Response.create({
  "slug" => "example_slug", # String
  "cache_control" => {}, # Hash
  "prompt" => {}, # Object
  "prompt_cache_options" => {}, # Object
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ResponseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SttEntity

```ruby
stt = client.Stt
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `duration` | `Float` | No | Duration of the input audio in seconds, present when response_format is verbose_json |
| `input_audio` | `Hash` | Yes | Base64-encoded audio to transcribe |
| `language` | `String` | No | Detected or forced language, present when response_format is verbose_json |
| `model` | `String` | Yes | STT model identifier |
| `provider` | `Hash` | No | Provider-specific passthrough configuration |
| `response_format` | `String` | No | Output format. |
| `segments` | `Array` | No | Timestamped transcript segments, present when response_format is verbose_json |
| `task` | `String` | No | The task performed, present when response_format is verbose_json |
| `temperature` | `Float` | No | Sampling temperature for transcription |
| `text` | `String` | Yes | The transcribed text |
| `timestamp_granularities` | `Array` | No | Timestamp detail levels to include when response_format is "verbose_json". |
| `usage` | `Hash` | No | Aggregated usage statistics for the request |
| `words` | `Array` | No | Timestamped words, present when the provider returns word-level timestamps |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Stt.create({
  "input_audio" => {}, # Hash
  "model" => "example_model", # String
  "text" => "example_text", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SttEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubmitGenerationFeedbackEntity

```ruby
submit_generation_feedback = client.SubmitGenerationFeedback
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `String` | Yes | The category of feedback being reported |
| `comment` | `String` | No | An optional free-text comment describing the feedback |
| `generation_id` | `String` | Yes | The generation to submit feedback on |
| `success` | `Boolean` | Yes | Whether the feedback was recorded |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SubmitGenerationFeedback.create({
  "category" => "example_category", # String
  "generation_id" => "example_generation_id", # String
  "success" => true, # Boolean
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubmitGenerationFeedbackEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TaskEntity

```ruby
task = client.Task
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `as_of` | `String` | Yes | UTC date (YYYY-MM-DD) of the window upper bound (yesterday). |
| `classifications` | `Array` | Yes | Per-task classification market-share data, sorted by usage_share descending. |
| `macro_categories` | `Array` | Yes | Aggregate market-share data per macro-category (code, data, agent, general). |
| `window_days` | `Integer` | Yes | Number of trailing days covered by this snapshot. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Task.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TaskEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TtsEntity

```ruby
tts = client.Tts
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `String` | Yes | Text to synthesize |
| `model` | `String` | Yes | TTS model identifier |
| `provider` | `Hash` | No | Provider-specific passthrough configuration |
| `response_format` | `String` | No | Audio output format |
| `speed` | `Float` | No | Playback speed multiplier. |
| `voice` | `String` | Yes | Voice identifier (provider-specific). |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Tts.create({
  "input" => "example_input", # String
  "model" => "example_model", # String
  "voice" => "example_voice", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TtsEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UnifiedBenchmarkEntity

```ruby
unified_benchmark = client.UnifiedBenchmark
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | Yes |  |
| `meta` | `Hash` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.UnifiedBenchmark.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UnifiedBenchmarkEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UpdateByokKeyEntity

```ruby
update_byok_key = client.UpdateByokKey
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_models` | `Object` | No | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `Object` | No | Optional allowlist of user IDs that may use this credential. |
| `disabled` | `Boolean` | No | Whether this credential is disabled. |
| `id` | `String` | No |  |
| `is_fallback` | `Boolean` | No | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `String` | No | A new raw provider API key to rotate the credential in-place. |
| `name` | `Object` | No | Optional human-readable name for the credential. |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.UpdateByokKey.update({
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UpdateByokKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UpdateGuardrailEntity

```ruby
update_guardrail = client.UpdateGuardrail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_models` | `Object` | No | Array of model identifiers (slug or canonical_slug accepted) |
| `allowed_providers` | `Object` | No | New list of allowed provider IDs |
| `content_filter_builtins` | `Object` | No | Builtin content filters to apply. |
| `content_filters` | `Object` | No | Custom regex content filters to apply. |
| `description` | `Object` | No | New description for the guardrail |
| `enforce_zdr` | `Object` | No | Deprecated. |
| `enforce_zdr_anthropic` | `Object` | No | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `Object` | No | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `Object` | No | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `Object` | No | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `Object` | No | Whether to enforce zero data retention for xAI models. |
| `id` | `String` | No |  |
| `ignored_models` | `Object` | No | Array of model identifiers to exclude from routing (slug or canonical_slug accepted) |
| `ignored_providers` | `Object` | No | List of provider IDs to exclude from routing |
| `limit_usd` | `Object` | No | New spending limit in USD |
| `name` | `String` | No | New name for the guardrail |
| `reset_interval` | `Object` | No | Interval at which the limit resets (daily, weekly, monthly) |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.UpdateGuardrail.update({
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UpdateGuardrailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UpdateObservabilityDestinationEntity

```ruby
update_observability_destination = client.UpdateObservabilityDestination
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_key_hashes` | `Object` | No | Optional allowlist of OpenRouter API key hashes. |
| `config` | `Hash` | No | Provider-specific configuration fields to update. |
| `enabled` | `Boolean` | No | Whether the destination is enabled. |
| `filter_rules` | `Object` | No |  |
| `id` | `String` | No |  |
| `name` | `String` | No | Human-readable name for the destination. |
| `privacy_mode` | `Boolean` | No | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `Float` | No | Sampling rate between 0.0001 and 1 (1 = 100%). |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.UpdateObservabilityDestination.update({
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UpdateObservabilityDestinationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UpdateWorkspaceEntity

```ruby
update_workspace = client.UpdateWorkspace
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | ISO 8601 timestamp of when the workspace was created |
| `created_by` | `Object` | Yes | User ID of the workspace creator |
| `default_image_model` | `Object` | No | Default image model for this workspace |
| `default_provider_sort` | `Object` | No | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `Object` | No | Default text model for this workspace |
| `description` | `Object` | No | Description of the workspace |
| `id` | `String` | Yes | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `Object` | No | Optional array of API key IDs to filter I/O logging |
| `io_logging_sampling_rate` | `Float` | No | Sampling rate for I/O logging (0.0001-1) |
| `is_data_discount_logging_enabled` | `Boolean` | No | Whether data discount logging is enabled |
| `is_observability_broadcast_enabled` | `Boolean` | No | Whether broadcast is enabled |
| `is_observability_io_logging_enabled` | `Boolean` | No | Whether private logging is enabled |
| `name` | `String` | Yes | Name for the new workspace |
| `slug` | `String` | Yes | URL-friendly slug (lowercase alphanumeric segments separated by single hyphens, no leading/trailing hyphens) |
| `updated_at` | `Object` | Yes | ISO 8601 timestamp of when the workspace was last updated |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.UpdateWorkspace.create({
  "created_at" => "example_created_at", # String
  "created_by" => "example_created_by", # Object
  "id" => "example_id", # String
  "name" => "example_name", # String
  "slug" => "example_slug", # String
  "updated_at" => "example_updated_at", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.UpdateWorkspace.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.UpdateWorkspace.update({
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UpdateWorkspaceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UpsertWorkspaceBudgetEntity

```ruby
upsert_workspace_budget = client.UpsertWorkspaceBudget
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `limit_usd` | `Float` | Yes | Spending limit in USD. |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.UpsertWorkspaceBudget.update({
  "id" => "id",
  "workspace_id" => "workspace_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UpsertWorkspaceBudgetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## VideoEntity

```ruby
video = client.Video
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `String` | No | Aspect ratio of the generated video |
| `callback_url` | `String` | No | URL to receive a webhook notification when the video generation job completes. |
| `duration` | `Integer` | No | Duration of the generated video in seconds |
| `error` | `String` | No |  |
| `frame_images` | `Array` | No | Images to use as the first and/or last frame of the generated video. |
| `generate_audio` | `Boolean` | No | Whether to generate audio alongside the video. |
| `generation_id` | `String` | No | The generation ID associated with this video generation job. |
| `id` | `String` | Yes |  |
| `input_references` | `Array` | No | Reference assets to guide video generation. |
| `model` | `String` | Yes |  |
| `polling_url` | `String` | Yes |  |
| `prompt` | `String` | No | Text prompt describing the video to generate. |
| `provider` | `Hash` | No | Provider-specific passthrough configuration |
| `resolution` | `String` | No | Resolution of the generated video |
| `seed` | `Integer` | No | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `String` | No | Exact pixel dimensions of the generated video in "WIDTHxHEIGHT" format (e.g. |
| `status` | `String` | Yes |  |
| `unsigned_urls` | `Array` | No |  |
| `usage` | `Hash` | No | Usage and cost information for the video generation. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Video.create({
  "id" => "example_id", # String
  "model" => "example_model", # String
  "polling_url" => "example_polling_url", # String
  "status" => "example_status", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Video.load({ "id" => "video_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `VideoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## VideoGenerationEntity

```ruby
video_generation = client.VideoGeneration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.VideoGeneration.load({ "id" => "video_generation_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `VideoGenerationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## VideoModelEntity

```ruby
video_model = client.VideoModel
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_passthrough_parameters` | `Array` | Yes | List of parameters that are allowed to be passed through to the provider |
| `canonical_slug` | `String` | Yes | Canonical slug for the model |
| `created` | `Integer` | Yes | Unix timestamp of when the model was created |
| `description` | `String` | No | Description of the model |
| `generate_audio` | `Object` | Yes | Whether the model supports generating audio alongside video |
| `hugging_face_id` | `Object` | No | Hugging Face model identifier, if applicable |
| `id` | `String` | Yes | Unique identifier for the model |
| `name` | `String` | Yes | Display name of the model |
| `pricing_skus` | `Object` | No | Pricing SKUs with provider prefix stripped, values as strings |
| `seed` | `Object` | Yes | Whether the model supports deterministic generation via seed parameter |
| `supported_aspect_ratios` | `Object` | Yes | Supported output aspect ratios |
| `supported_durations` | `Object` | Yes | Supported video durations in seconds |
| `supported_frame_images` | `Object` | Yes | Supported frame image types (e.g. |
| `supported_resolutions` | `Object` | Yes | Supported output resolutions |
| `supported_sizes` | `Object` | Yes | Supported output sizes (width x height) |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.VideoModel.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `VideoModelEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkspaceEntity

```ruby
workspace = client.Workspace
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | ISO 8601 timestamp of when the workspace was created |
| `created_by` | `Object` | Yes | User ID of the workspace creator |
| `default_image_model` | `Object` | Yes | Default image model for this workspace |
| `default_provider_sort` | `Object` | Yes | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `Object` | Yes | Default text model for this workspace |
| `description` | `Object` | Yes | Description of the workspace |
| `id` | `String` | Yes | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `Object` | Yes | Optional array of API key IDs to filter I/O logging. |
| `io_logging_sampling_rate` | `Float` | Yes | Sampling rate for I/O logging (0.0001-1). |
| `is_data_discount_logging_enabled` | `Boolean` | Yes | Whether data discount logging is enabled for this workspace |
| `is_observability_broadcast_enabled` | `Boolean` | Yes | Whether broadcast is enabled for this workspace |
| `is_observability_io_logging_enabled` | `Boolean` | Yes | Whether private logging is enabled for this workspace |
| `name` | `String` | Yes | Name of the workspace |
| `slug` | `String` | Yes | URL-friendly slug for the workspace |
| `updated_at` | `Object` | Yes | ISO 8601 timestamp of when the workspace was last updated |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Workspace.load({ "id" => "workspace_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Workspace.remove({ "id" => "workspace_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkspaceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkspaceBudgetEntity

```ruby
workspace_budget = client.WorkspaceBudget
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | ISO 8601 timestamp of when the budget was created |
| `id` | `String` | Yes | Unique identifier for the budget |
| `limit_usd` | `Float` | Yes | Spending limit in USD for this interval |
| `reset_interval` | `Object` | Yes | Interval at which spend resets. |
| `updated_at` | `String` | Yes | ISO 8601 timestamp of when the budget was last updated |
| `workspace_id` | `String` | Yes | ID of the workspace the budget belongs to |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WorkspaceBudget.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.WorkspaceBudget.remove({ "id" => "id", "workspace_id" => "workspace_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkspaceBudgetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkspaceMemberEntity

```ruby
workspace_member = client.WorkspaceMember
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | ISO 8601 timestamp of when the membership was created |
| `id` | `String` | Yes | Unique identifier for the workspace membership |
| `role` | `String` | Yes | Role of the member in the workspace |
| `user_id` | `String` | Yes | Clerk user ID of the member |
| `workspace_id` | `String` | Yes | ID of the workspace |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WorkspaceMember.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkspaceMemberEntity` instance with the same client and
options.

#### `get_name -> String`

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

```ruby
client = OpenrouterModelsSDK.new({
  "feature" => {
    "ratelimit" => { "active" => true },
    "retry" => { "active" => true },
    "test" => { "active" => true },
    "timeout" => { "active" => true },
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

