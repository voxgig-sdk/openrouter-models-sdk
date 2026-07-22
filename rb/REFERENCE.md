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

#### `Add(data = nil)`

Create a new `Add` entity instance. Pass `nil` for no initial data.

#### `ApiKey(data = nil)`

Create a new `ApiKey` entity instance. Pass `nil` for no initial data.

#### `AppRanking(data = nil)`

Create a new `AppRanking` entity instance. Pass `nil` for no initial data.

#### `Benchmark(data = nil)`

Create a new `Benchmark` entity instance. Pass `nil` for no initial data.

#### `BetaAnalytics(data = nil)`

Create a new `BetaAnalytics` entity instance. Pass `nil` for no initial data.

#### `Budget(data = nil)`

Create a new `Budget` entity instance. Pass `nil` for no initial data.

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

#### `Code(data = nil)`

Create a new `Code` entity instance. Pass `nil` for no initial data.

#### `Coinbase(data = nil)`

Create a new `Coinbase` entity instance. Pass `nil` for no initial data.

#### `Completion(data = nil)`

Create a new `Completion` entity instance. Pass `nil` for no initial data.

#### `Content(data = nil)`

Create a new `Content` entity instance. Pass `nil` for no initial data.

#### `Count(data = nil)`

Create a new `Count` entity instance. Pass `nil` for no initial data.

#### `CreateByokKey(data = nil)`

Create a new `CreateByokKey` entity instance. Pass `nil` for no initial data.

#### `CreateGuardrail(data = nil)`

Create a new `CreateGuardrail` entity instance. Pass `nil` for no initial data.

#### `CreateObservabilityDestination(data = nil)`

Create a new `CreateObservabilityDestination` entity instance. Pass `nil` for no initial data.

#### `CreatePresetFromInference(data = nil)`

Create a new `CreatePresetFromInference` entity instance. Pass `nil` for no initial data.

#### `CreateWorkspace(data = nil)`

Create a new `CreateWorkspace` entity instance. Pass `nil` for no initial data.

#### `Credit(data = nil)`

Create a new `Credit` entity instance. Pass `nil` for no initial data.

#### `Destination(data = nil)`

Create a new `Destination` entity instance. Pass `nil` for no initial data.

#### `Embedding(data = nil)`

Create a new `Embedding` entity instance. Pass `nil` for no initial data.

#### `Endpoint(data = nil)`

Create a new `Endpoint` entity instance. Pass `nil` for no initial data.

#### `Feedback(data = nil)`

Create a new `Feedback` entity instance. Pass `nil` for no initial data.

#### `File(data = nil)`

Create a new `File` entity instance. Pass `nil` for no initial data.

#### `Generation(data = nil)`

Create a new `Generation` entity instance. Pass `nil` for no initial data.

#### `GenerationContent(data = nil)`

Create a new `GenerationContent` entity instance. Pass `nil` for no initial data.

#### `Guardrail(data = nil)`

Create a new `Guardrail` entity instance. Pass `nil` for no initial data.

#### `Image(data = nil)`

Create a new `Image` entity instance. Pass `nil` for no initial data.

#### `ImageModelEndpoint(data = nil)`

Create a new `ImageModelEndpoint` entity instance. Pass `nil` for no initial data.

#### `ImageModelsList(data = nil)`

Create a new `ImageModelsList` entity instance. Pass `nil` for no initial data.

#### `Key(data = nil)`

Create a new `Key` entity instance. Pass `nil` for no initial data.

#### `ListByokKey(data = nil)`

Create a new `ListByokKey` entity instance. Pass `nil` for no initial data.

#### `ListGuardrail(data = nil)`

Create a new `ListGuardrail` entity instance. Pass `nil` for no initial data.

#### `ListKeyAssignment(data = nil)`

Create a new `ListKeyAssignment` entity instance. Pass `nil` for no initial data.

#### `ListMemberAssignment(data = nil)`

Create a new `ListMemberAssignment` entity instance. Pass `nil` for no initial data.

#### `ListObservabilityDestination(data = nil)`

Create a new `ListObservabilityDestination` entity instance. Pass `nil` for no initial data.

#### `ListPreset(data = nil)`

Create a new `ListPreset` entity instance. Pass `nil` for no initial data.

#### `ListPresetVersion(data = nil)`

Create a new `ListPresetVersion` entity instance. Pass `nil` for no initial data.

#### `ListWorkspace(data = nil)`

Create a new `ListWorkspace` entity instance. Pass `nil` for no initial data.

#### `ListWorkspaceBudget(data = nil)`

Create a new `ListWorkspaceBudget` entity instance. Pass `nil` for no initial data.

#### `ListWorkspaceMember(data = nil)`

Create a new `ListWorkspaceMember` entity instance. Pass `nil` for no initial data.

#### `Member(data = nil)`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `Message(data = nil)`

Create a new `Message` entity instance. Pass `nil` for no initial data.

#### `Meta(data = nil)`

Create a new `Meta` entity instance. Pass `nil` for no initial data.

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

#### `Query(data = nil)`

Create a new `Query` entity instance. Pass `nil` for no initial data.

#### `RankingsDaily(data = nil)`

Create a new `RankingsDaily` entity instance. Pass `nil` for no initial data.

#### `Remove(data = nil)`

Create a new `Remove` entity instance. Pass `nil` for no initial data.

#### `Rerank(data = nil)`

Create a new `Rerank` entity instance. Pass `nil` for no initial data.

#### `Response(data = nil)`

Create a new `Response` entity instance. Pass `nil` for no initial data.

#### `Speech(data = nil)`

Create a new `Speech` entity instance. Pass `nil` for no initial data.

#### `Stt(data = nil)`

Create a new `Stt` entity instance. Pass `nil` for no initial data.

#### `SubmitGenerationFeedback(data = nil)`

Create a new `SubmitGenerationFeedback` entity instance. Pass `nil` for no initial data.

#### `Task(data = nil)`

Create a new `Task` entity instance. Pass `nil` for no initial data.

#### `Transcription(data = nil)`

Create a new `Transcription` entity instance. Pass `nil` for no initial data.

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

#### `User(data = nil)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `Version(data = nil)`

Create a new `Version` entity instance. Pass `nil` for no initial data.

#### `Video(data = nil)`

Create a new `Video` entity instance. Pass `nil` for no initial data.

#### `VideoGeneration(data = nil)`

Create a new `VideoGeneration` entity instance. Pass `nil` for no initial data.

#### `VideoModelsList(data = nil)`

Create a new `VideoModelsList` entity instance. Pass `nil` for no initial data.

#### `Workspace(data = nil)`

Create a new `Workspace` entity instance. Pass `nil` for no initial data.

#### `WorkspaceBudget(data = nil)`

Create a new `WorkspaceBudget` entity instance. Pass `nil` for no initial data.

#### `Zdr(data = nil)`

Create a new `Zdr` entity instance. Pass `nil` for no initial data.

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
| `byok_usage_inference` | `Float` | Yes |  |
| `completion_token` | `Integer` | Yes |  |
| `date` | `String` | Yes |  |
| `endpoint_id` | `String` | Yes |  |
| `model` | `String` | Yes |  |
| `model_permaslug` | `String` | Yes |  |
| `prompt_token` | `Integer` | Yes |  |
| `provider_name` | `String` | Yes |  |
| `reasoning_token` | `Integer` | Yes |  |
| `request` | `Integer` | Yes |  |
| `usage` | `Float` | Yes |  |

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

## AddEntity

```ruby
add = client.Add
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

Create a new `AddEntity` instance with the same client and
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
| `byok_usage` | `Float` | Yes |  |
| `byok_usage_daily` | `Float` | Yes |  |
| `byok_usage_monthly` | `Float` | Yes |  |
| `byok_usage_weekly` | `Float` | Yes |  |
| `created_at` | `String` | Yes |  |
| `creator_user_id` | `Object` | No |  |
| `data` | `Hash` | Yes |  |
| `disabled` | `Boolean` | No |  |
| `expires_at` | `Object` | No |  |
| `hash` | `String` | Yes |  |
| `include_byok_in_limit` | `Boolean` | No |  |
| `label` | `String` | Yes |  |
| `limit` | `Object` | No |  |
| `limit_remaining` | `Object` | Yes |  |
| `limit_reset` | `Object` | No |  |
| `name` | `String` | Yes |  |
| `updated_at` | `Object` | Yes |  |
| `usage` | `Float` | Yes |  |
| `usage_daily` | `Float` | Yes |  |
| `usage_monthly` | `Float` | Yes |  |
| `usage_weekly` | `Float` | Yes |  |
| `workspace_id` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiKey.create({
  "byok_usage" => 1, # Float
  "byok_usage_daily" => 1, # Float
  "byok_usage_monthly" => 1, # Float
  "byok_usage_weekly" => 1, # Float
  "created_at" => "example_created_at", # String
  "data" => {}, # Hash
  "hash" => "example_hash", # String
  "label" => "example_label", # String
  "limit_remaining" => "example_limit_remaining", # Object
  "name" => "example_name", # String
  "updated_at" => "example_updated_at", # Object
  "usage" => 1, # Float
  "usage_daily" => 1, # Float
  "usage_monthly" => 1, # Float
  "usage_weekly" => 1, # Float
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
| `app_id` | `Integer` | Yes |  |
| `app_name` | `String` | Yes |  |
| `rank` | `Integer` | Yes |  |
| `total_request` | `Integer` | Yes |  |
| `total_token` | `String` | Yes |  |

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

## BenchmarkEntity

```ruby
benchmark = client.Benchmark
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

Create a new `BenchmarkEntity` instance with the same client and
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
| `classifier_dimension` | `Hash` | Yes |  |
| `classifier_filter` | `Hash` | Yes |  |
| `data` | `Hash` | Yes |  |
| `dimension` | `Array` | No |  |
| `filter` | `Array` | No |  |
| `granularity` | `String` | No |  |
| `group_limit` | `Integer` | No |  |
| `limit` | `Integer` | No |  |
| `metric` | `Array` | Yes |  |
| `order_by` | `Hash` | Yes |  |
| `time_range` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BetaAnalytics.create({
  "classifier_dimension" => {}, # Hash
  "classifier_filter" => {}, # Hash
  "data" => {}, # Hash
  "metric" => [], # Array
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

## BudgetEntity

```ruby
budget = client.Budget
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

Create a new `BudgetEntity` instance with the same client and
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
| `added_count` | `Integer` | Yes |  |
| `data` | `Array` | Yes |  |
| `user_id` | `Array` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BulkAddWorkspaceMember.create({
  "workspace_id" => "example_workspace_id", # String
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
| `assigned_count` | `Integer` | Yes |  |
| `key_hash` | `Array` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BulkAssignKey.create({
  "guardrail_id" => "example_guardrail_id", # String
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
| `assigned_count` | `Integer` | Yes |  |
| `member_user_id` | `Array` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BulkAssignMember.create({
  "guardrail_id" => "example_guardrail_id", # String
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
| `removed_count` | `Integer` | Yes |  |
| `user_id` | `Array` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BulkRemoveWorkspaceMember.create({
  "workspace_id" => "example_workspace_id", # String
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
| `key_hash` | `Array` | Yes |  |
| `unassigned_count` | `Integer` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BulkUnassignKey.create({
  "guardrail_id" => "example_guardrail_id", # String
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
| `member_user_id` | `Array` | Yes |  |
| `unassigned_count` | `Integer` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BulkUnassignMember.create({
  "guardrail_id" => "example_guardrail_id", # String
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
| `allowed_api_key_hash` | `Object` | Yes |  |
| `allowed_model` | `Object` | No |  |
| `allowed_user_id` | `Object` | No |  |
| `created_at` | `String` | Yes |  |
| `data` | `Object` | Yes |  |
| `disabled` | `Boolean` | No |  |
| `id` | `String` | Yes |  |
| `is_fallback` | `Boolean` | No |  |
| `key` | `String` | Yes |  |
| `label` | `String` | Yes |  |
| `name` | `Object` | No |  |
| `provider` | `String` | Yes |  |
| `sort_order` | `Integer` | Yes |  |
| `workspace_id` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Byok.create({
  "allowed_api_key_hash" => "example_allowed_api_key_hash", # Object
  "created_at" => "example_created_at", # String
  "data" => "example_data", # Object
  "id" => "example_id", # String
  "key" => "example_key", # String
  "label" => "example_label", # String
  "provider" => "example_provider", # String
  "sort_order" => 1, # Integer
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
| `cache_control` | `Hash` | Yes |  |
| `choice` | `Array` | Yes |  |
| `created` | `Integer` | Yes |  |
| `debug` | `Hash` | No |  |
| `frequency_penalty` | `Object` | No |  |
| `id` | `String` | Yes |  |
| `image_config` | `Hash` | No |  |
| `logit_bia` | `Object` | No |  |
| `logprob` | `Object` | No |  |
| `max_completion_token` | `Object` | No |  |
| `max_token` | `Object` | No |  |
| `message` | `Array` | Yes |  |
| `metadata` | `Hash` | No |  |
| `min_p` | `Object` | No |  |
| `modality` | `Array` | No |  |
| `model` | `String` | Yes |  |
| `object` | `String` | Yes |  |
| `openrouter_metadata` | `Hash` | Yes |  |
| `parallel_tool_call` | `Object` | No |  |
| `plugin` | `Array` | No |  |
| `prediction` | `Object` | Yes |  |
| `presence_penalty` | `Object` | No |  |
| `prompt_cache_key` | `Object` | No |  |
| `prompt_cache_option` | `Object` | Yes |  |
| `provider` | `Object` | No |  |
| `reasoning` | `Hash` | No |  |
| `reasoning_effort` | `Object` | No |  |
| `repetition_penalty` | `Object` | No |  |
| `response_format` | `Object` | No |  |
| `route` | `Object` | No |  |
| `seed` | `Object` | No |  |
| `service_tier` | `Object` | No |  |
| `session_id` | `String` | No |  |
| `stop` | `Object` | No |  |
| `stop_server_tools_when` | `Array` | No |  |
| `stream` | `Boolean` | No |  |
| `stream_option` | `Object` | No |  |
| `system_fingerprint` | `Object` | Yes |  |
| `temperature` | `Object` | No |  |
| `tool` | `Array` | No |  |
| `tool_choice` | `Object` | No |  |
| `top_a` | `Object` | No |  |
| `top_k` | `Object` | No |  |
| `top_logprob` | `Object` | No |  |
| `top_p` | `Object` | No |  |
| `trace` | `Hash` | No |  |
| `usage` | `Hash` | Yes |  |
| `user` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ChatResult.create({
  "cache_control" => {}, # Hash
  "choice" => [], # Array
  "created" => 1, # Integer
  "id" => "example_id", # String
  "message" => [], # Array
  "model" => "example_model", # String
  "object" => "example_object", # String
  "openrouter_metadata" => {}, # Hash
  "prediction" => "example_prediction", # Object
  "prompt_cache_option" => "example_prompt_cache_option", # Object
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

## CodeEntity

```ruby
code = client.Code
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

Create a new `CodeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CoinbaseEntity

```ruby
coinbase = client.Coinbase
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

Create a new `CoinbaseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CompletionEntity

```ruby
completion = client.Completion
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

## ContentEntity

```ruby
content = client.Content
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

Create a new `ContentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CountEntity

```ruby
count = client.Count
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

Create a new `CountEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CreateByokKeyEntity

```ruby
create_byok_key = client.CreateByokKey
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

Create a new `CreateByokKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CreateGuardrailEntity

```ruby
create_guardrail = client.CreateGuardrail
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

Create a new `CreateGuardrailEntity` instance with the same client and
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
| `api_key_hash` | `Object` | No |  |
| `config` | `Hash` | Yes |  |
| `enabled` | `Boolean` | No |  |
| `filter_rule` | `Object` | Yes |  |
| `name` | `String` | Yes |  |
| `privacy_mode` | `Boolean` | No |  |
| `sampling_rate` | `Float` | No |  |
| `type` | `String` | Yes |  |
| `workspace_id` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CreateObservabilityDestination.create({
  "config" => {}, # Hash
  "filter_rule" => "example_filter_rule", # Object
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

## CreatePresetFromInferenceEntity

```ruby
create_preset_from_inference = client.CreatePresetFromInference
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `background` | `Object` | No |  |
| `cache_control` | `Hash` | Yes |  |
| `context_management` | `Object` | No |  |
| `data` | `Object` | Yes |  |
| `debug` | `Hash` | No |  |
| `fallback` | `Object` | No |  |
| `frequency_penalty` | `Object` | No |  |
| `image_config` | `Hash` | No |  |
| `include` | `Object` | No |  |
| `input` | `Object` | No |  |
| `instruction` | `Object` | No |  |
| `logit_bia` | `Object` | No |  |
| `logprob` | `Object` | No |  |
| `max_completion_token` | `Object` | No |  |
| `max_output_token` | `Object` | No |  |
| `max_token` | `Object` | No |  |
| `max_tool_call` | `Object` | No |  |
| `message` | `Array` | Yes |  |
| `metadata` | `Hash` | No |  |
| `min_p` | `Object` | No |  |
| `modality` | `Array` | No |  |
| `model` | `String` | No |  |
| `output_config` | `Hash` | No |  |
| `parallel_tool_call` | `Object` | No |  |
| `plugin` | `Array` | No |  |
| `prediction` | `Object` | Yes |  |
| `presence_penalty` | `Object` | No |  |
| `previous_response_id` | `String` | No |  |
| `prompt` | `Object` | Yes |  |
| `prompt_cache_key` | `Object` | No |  |
| `prompt_cache_option` | `Object` | Yes |  |
| `provider` | `Object` | No |  |
| `reasoning` | `Hash` | No |  |
| `reasoning_effort` | `Object` | No |  |
| `repetition_penalty` | `Object` | No |  |
| `response_format` | `Object` | No |  |
| `route` | `Object` | No |  |
| `safety_identifier` | `Object` | No |  |
| `seed` | `Object` | No |  |
| `service_tier` | `Object` | No |  |
| `session_id` | `String` | No |  |
| `speed` | `Object` | No |  |
| `stop` | `Object` | No |  |
| `stop_sequence` | `Array` | No |  |
| `stop_server_tools_when` | `Array` | No |  |
| `store` | `Boolean` | No |  |
| `stream` | `Boolean` | No |  |
| `stream_option` | `Object` | No |  |
| `system` | `Object` | No |  |
| `temperature` | `Object` | No |  |
| `text` | `Object` | No |  |
| `thinking` | `Object` | No |  |
| `tool` | `Array` | No |  |
| `tool_choice` | `Object` | No |  |
| `top_a` | `Object` | No |  |
| `top_k` | `Object` | No |  |
| `top_logprob` | `Object` | No |  |
| `top_p` | `Object` | No |  |
| `trace` | `Hash` | No |  |
| `truncation` | `Object` | No |  |
| `user` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CreatePresetFromInference.create({
  "slug" => "example_slug", # String
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

Create a new `CreatePresetFromInferenceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CreateWorkspaceEntity

```ruby
create_workspace = client.CreateWorkspace
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

Create a new `CreateWorkspaceEntity` instance with the same client and
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
| `data` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Credit.create({
  "data" => {}, # Hash
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

## DestinationEntity

```ruby
destination = client.Destination
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

Create a new `DestinationEntity` instance with the same client and
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
| `data` | `Array` | Yes |  |
| `dimension` | `Integer` | No |  |
| `encoding_format` | `String` | No |  |
| `id` | `String` | No |  |
| `input` | `Object` | Yes |  |
| `input_type` | `String` | No |  |
| `model` | `String` | Yes |  |
| `object` | `String` | Yes |  |
| `provider` | `Object` | No |  |
| `usage` | `Hash` | Yes |  |
| `user` | `String` | No |  |

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
| `architecture` | `Hash` | Yes |  |
| `benchmark` | `Hash` | Yes |  |
| `canonical_slug` | `String` | Yes |  |
| `context_length` | `Object` | Yes |  |
| `created` | `Integer` | Yes |  |
| `data` | `Hash` | Yes |  |
| `default_parameter` | `Object` | Yes |  |
| `description` | `String` | No |  |
| `expiration_date` | `Object` | No |  |
| `hugging_face_id` | `Object` | No |  |
| `id` | `String` | Yes |  |
| `knowledge_cutoff` | `Object` | No |  |
| `latency_last_30m` | `Object` | Yes |  |
| `link` | `Hash` | Yes |  |
| `max_completion_token` | `Object` | Yes |  |
| `max_prompt_token` | `Object` | Yes |  |
| `model_id` | `String` | Yes |  |
| `model_name` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `per_request_limit` | `Object` | Yes |  |
| `pricing` | `Hash` | Yes |  |
| `provider_name` | `String` | Yes |  |
| `quantization` | `Object` | Yes |  |
| `reasoning` | `Hash` | Yes |  |
| `status` | `Integer` | No |  |
| `supported_parameter` | `Array` | Yes |  |
| `supported_voice` | `Object` | Yes |  |
| `supports_implicit_caching` | `Boolean` | Yes |  |
| `tag` | `String` | Yes |  |
| `throughput_last_30m` | `Object` | Yes |  |
| `top_provider` | `Hash` | Yes |  |
| `uptime_last_1d` | `Object` | Yes |  |
| `uptime_last_30m` | `Object` | Yes |  |
| `uptime_last_5m` | `Object` | Yes |  |

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

## FeedbackEntity

```ruby
feedback = client.Feedback
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

Create a new `FeedbackEntity` instance with the same client and
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
| `size_byte` | `Integer` | Yes |  |
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
  "size_byte" => 1, # Integer
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
| `data` | `Hash` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Generation.load()
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

## GenerationContentEntity

```ruby
generation_content = client.GenerationContent
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Hash` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.GenerationContent.load()
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

Create a new `GenerationContentEntity` instance with the same client and
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
| `allowed_model` | `Object` | No |  |
| `allowed_provider` | `Object` | No |  |
| `content_filter` | `Object` | No |  |
| `content_filter_builtin` | `Object` | No |  |
| `created_at` | `String` | Yes |  |
| `data` | `Object` | Yes |  |
| `description` | `Object` | No |  |
| `enforce_zdr` | `Object` | No |  |
| `enforce_zdr_anthropic` | `Object` | No |  |
| `enforce_zdr_google` | `Object` | No |  |
| `enforce_zdr_openai` | `Object` | No |  |
| `enforce_zdr_other` | `Object` | No |  |
| `enforce_zdr_xai` | `Object` | No |  |
| `id` | `String` | Yes |  |
| `ignored_model` | `Object` | No |  |
| `ignored_provider` | `Object` | No |  |
| `limit_usd` | `Object` | No |  |
| `name` | `String` | Yes |  |
| `reset_interval` | `Object` | No |  |
| `updated_at` | `Object` | No |  |
| `workspace_id` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Guardrail.create({
  "created_at" => "example_created_at", # String
  "data" => "example_data", # Object
  "id" => "example_id", # String
  "name" => "example_name", # String
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
| `aspect_ratio` | `String` | No |  |
| `background` | `String` | No |  |
| `created` | `Integer` | Yes |  |
| `data` | `Array` | Yes |  |
| `input_reference` | `Array` | No |  |
| `model` | `String` | Yes |  |
| `n` | `Integer` | No |  |
| `output_compression` | `Integer` | No |  |
| `output_format` | `String` | No |  |
| `prompt` | `String` | Yes |  |
| `provider` | `Hash` | No |  |
| `quality` | `String` | No |  |
| `resolution` | `String` | No |  |
| `seed` | `Integer` | No |  |
| `size` | `String` | No |  |
| `stream` | `Boolean` | No |  |
| `usage` | `Hash` | Yes |  |

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
| `allowed_passthrough_parameter` | `Array` | Yes |  |
| `pricing` | `Array` | Yes |  |
| `provider_name` | `String` | Yes |  |
| `provider_slug` | `String` | Yes |  |
| `provider_tag` | `Object` | Yes |  |
| `supported_parameter` | `Object` | Yes |  |
| `supports_streaming` | `Boolean` | Yes |  |

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

## ImageModelsListEntity

```ruby
image_models_list = client.ImageModelsList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `Hash` | Yes |  |
| `created` | `Integer` | Yes |  |
| `description` | `String` | Yes |  |
| `endpoint` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `supported_parameter` | `Hash` | Yes |  |
| `supports_streaming` | `Boolean` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ImageModelsList.list
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

Create a new `ImageModelsListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## KeyEntity

```ruby
key = client.Key
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

## ListByokKeyEntity

```ruby
list_byok_key = client.ListByokKey
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

Create a new `ListByokKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListGuardrailEntity

```ruby
list_guardrail = client.ListGuardrail
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

Create a new `ListGuardrailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListKeyAssignmentEntity

```ruby
list_key_assignment = client.ListKeyAssignment
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_by` | `Object` | Yes |  |
| `created_at` | `String` | Yes |  |
| `guardrail_id` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `key_hash` | `String` | Yes |  |
| `key_label` | `String` | Yes |  |
| `key_name` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListKeyAssignment.list
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

Create a new `ListKeyAssignmentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListMemberAssignmentEntity

```ruby
list_member_assignment = client.ListMemberAssignment
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_by` | `Object` | Yes |  |
| `created_at` | `String` | Yes |  |
| `guardrail_id` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `organization_id` | `String` | Yes |  |
| `user_id` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListMemberAssignment.list
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

Create a new `ListMemberAssignmentEntity` instance with the same client and
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
| `data` | `Array` | Yes |  |
| `total_count` | `Integer` | Yes |  |

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

## ListPresetEntity

```ruby
list_preset = client.ListPreset
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

Create a new `ListPresetEntity` instance with the same client and
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

## ListWorkspaceEntity

```ruby
list_workspace = client.ListWorkspace
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

Create a new `ListWorkspaceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListWorkspaceBudgetEntity

```ruby
list_workspace_budget = client.ListWorkspaceBudget
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `limit_usd` | `Float` | Yes |  |
| `reset_interval` | `Object` | Yes |  |
| `updated_at` | `String` | Yes |  |
| `workspace_id` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListWorkspaceBudget.list
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

Create a new `ListWorkspaceBudgetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListWorkspaceMemberEntity

```ruby
list_workspace_member = client.ListWorkspaceMember
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `role` | `String` | Yes |  |
| `user_id` | `String` | Yes |  |
| `workspace_id` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListWorkspaceMember.list
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

Create a new `ListWorkspaceMemberEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MemberEntity

```ruby
member = client.Member
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
| `cache_control` | `Hash` | Yes |  |
| `context_management` | `Object` | No |  |
| `fallback` | `Object` | No |  |
| `max_token` | `Integer` | No |  |
| `message` | `Object` | Yes |  |
| `metadata` | `Hash` | No |  |
| `model` | `String` | Yes |  |
| `output_config` | `Hash` | No |  |
| `plugin` | `Array` | No |  |
| `provider` | `Object` | No |  |
| `route` | `Object` | No |  |
| `service_tier` | `String` | No |  |
| `session_id` | `String` | No |  |
| `speed` | `Object` | No |  |
| `stop_sequence` | `Array` | No |  |
| `stop_server_tools_when` | `Array` | No |  |
| `stream` | `Boolean` | No |  |
| `system` | `Object` | No |  |
| `temperature` | `Float` | No |  |
| `thinking` | `Object` | No |  |
| `tool` | `Array` | No |  |
| `tool_choice` | `Object` | No |  |
| `top_k` | `Integer` | No |  |
| `top_p` | `Float` | No |  |
| `trace` | `Hash` | No |  |
| `user` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Message.create({
  "cache_control" => {}, # Hash
  "message" => "example_message", # Object
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

## MetaEntity

```ruby
meta = client.Meta
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

Create a new `MetaEntity` instance with the same client and
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
| `architecture` | `Hash` | Yes |  |
| `benchmark` | `Hash` | Yes |  |
| `canonical_slug` | `String` | Yes |  |
| `context_length` | `Object` | Yes |  |
| `created` | `Integer` | Yes |  |
| `data` | `Hash` | Yes |  |
| `default_parameter` | `Object` | Yes |  |
| `description` | `String` | No |  |
| `expiration_date` | `Object` | No |  |
| `hugging_face_id` | `Object` | No |  |
| `id` | `String` | Yes |  |
| `knowledge_cutoff` | `Object` | No |  |
| `link` | `Hash` | Yes |  |
| `name` | `String` | Yes |  |
| `per_request_limit` | `Object` | Yes |  |
| `pricing` | `Hash` | Yes |  |
| `reasoning` | `Hash` | Yes |  |
| `supported_parameter` | `Array` | Yes |  |
| `supported_voice` | `Object` | Yes |  |
| `top_provider` | `Hash` | Yes |  |

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
| `data` | `Hash` | Yes |  |

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
| `architecture` | `Hash` | Yes |  |
| `benchmark` | `Hash` | Yes |  |
| `canonical_slug` | `String` | Yes |  |
| `context_length` | `Object` | Yes |  |
| `created` | `Integer` | Yes |  |
| `default_parameter` | `Object` | Yes |  |
| `description` | `String` | No |  |
| `expiration_date` | `Object` | No |  |
| `hugging_face_id` | `Object` | No |  |
| `id` | `String` | Yes |  |
| `knowledge_cutoff` | `Object` | No |  |
| `link` | `Hash` | Yes |  |
| `name` | `String` | Yes |  |
| `per_request_limit` | `Object` | Yes |  |
| `pricing` | `Hash` | Yes |  |
| `reasoning` | `Hash` | Yes |  |
| `supported_parameter` | `Array` | Yes |  |
| `supported_voice` | `Object` | Yes |  |
| `top_provider` | `Hash` | Yes |  |

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
| `callback_url` | `String` | Yes |  |
| `code` | `String` | Yes |  |
| `code_challenge` | `String` | No |  |
| `code_challenge_method` | `Object` | No |  |
| `code_verifier` | `String` | No |  |
| `data` | `Hash` | Yes |  |
| `expires_at` | `Object` | No |  |
| `key` | `String` | Yes |  |
| `key_label` | `String` | No |  |
| `limit` | `Float` | No |  |
| `spawn_agent` | `String` | No |  |
| `spawn_cloud` | `String` | No |  |
| `usage_limit_type` | `String` | No |  |
| `user_id` | `Object` | Yes |  |
| `workspace_id` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.OAuth.create({
  "callback_url" => "example_callback_url", # String
  "code" => "example_code", # String
  "data" => {}, # Hash
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
| `data` | `Object` | Yes |  |

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
| `cache_control` | `Hash` | Yes |  |
| `debug` | `Hash` | No |  |
| `frequency_penalty` | `Object` | No |  |
| `image_config` | `Hash` | No |  |
| `include` | `Object` | No |  |
| `input` | `Object` | No |  |
| `instruction` | `Object` | No |  |
| `max_output_token` | `Object` | No |  |
| `max_tool_call` | `Object` | No |  |
| `metadata` | `Object` | No |  |
| `modality` | `Array` | No |  |
| `model` | `String` | No |  |
| `parallel_tool_call` | `Object` | No |  |
| `plugin` | `Array` | No |  |
| `presence_penalty` | `Object` | No |  |
| `previous_response_id` | `String` | No |  |
| `prompt` | `Object` | Yes |  |
| `prompt_cache_key` | `Object` | No |  |
| `prompt_cache_option` | `Object` | Yes |  |
| `provider` | `Object` | No |  |
| `reasoning` | `Object` | No |  |
| `route` | `Object` | No |  |
| `safety_identifier` | `Object` | No |  |
| `service_tier` | `Object` | No |  |
| `session_id` | `String` | No |  |
| `stop_server_tools_when` | `Array` | No |  |
| `store` | `Boolean` | No |  |
| `stream` | `Boolean` | No |  |
| `temperature` | `Object` | No |  |
| `text` | `Object` | No |  |
| `tool` | `Array` | No |  |
| `tool_choice` | `Object` | No |  |
| `top_k` | `Integer` | No |  |
| `top_logprob` | `Object` | No |  |
| `top_p` | `Object` | No |  |
| `trace` | `Hash` | No |  |
| `truncation` | `Object` | No |  |
| `user` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.OpenResponsesResult.create({
  "cache_control" => {}, # Hash
  "prompt" => "example_prompt", # Object
  "prompt_cache_option" => "example_prompt_cache_option", # Object
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

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `String` | Yes |  |
| `first_name` | `Object` | Yes |  |
| `id` | `String` | Yes |  |
| `last_name` | `Object` | Yes |  |
| `role` | `String` | Yes |  |

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
| `data` | `Object` | Yes |  |
| `description` | `Object` | Yes |  |
| `designated_version_id` | `Object` | Yes |  |
| `id` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `slug` | `String` | Yes |  |
| `status` | `String` | Yes |  |
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
| `data` | `Object` | Yes |  |

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
| `datacenter` | `Object` | No |  |
| `headquarter` | `Object` | No |  |
| `name` | `String` | Yes |  |
| `privacy_policy_url` | `Object` | Yes |  |
| `slug` | `String` | Yes |  |
| `status_page_url` | `Object` | No |  |
| `terms_of_service_url` | `Object` | No |  |

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

## QueryEntity

```ruby
query = client.Query
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

Create a new `QueryEntity` instance with the same client and
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
| `date` | `String` | Yes |  |
| `model_permaslug` | `String` | Yes |  |
| `total_token` | `String` | Yes |  |

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

## RemoveEntity

```ruby
remove = client.Remove
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

Create a new `RemoveEntity` instance with the same client and
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
| `document` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `model` | `String` | Yes |  |
| `provider` | `String` | No |  |
| `query` | `String` | Yes |  |
| `result` | `Array` | Yes |  |
| `top_n` | `Integer` | No |  |
| `usage` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Rerank.create({
  "document" => [], # Array
  "model" => "example_model", # String
  "query" => "example_query", # String
  "result" => [], # Array
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

## SpeechEntity

```ruby
speech = client.Speech
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

Create a new `SpeechEntity` instance with the same client and
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
| `duration` | `Float` | No |  |
| `input_audio` | `Hash` | Yes |  |
| `language` | `String` | No |  |
| `model` | `String` | Yes |  |
| `provider` | `Hash` | No |  |
| `response_format` | `String` | No |  |
| `segment` | `Array` | No |  |
| `task` | `String` | No |  |
| `temperature` | `Float` | No |  |
| `text` | `String` | Yes |  |
| `timestamp_granularity` | `Array` | No |  |
| `usage` | `Hash` | No |  |
| `word` | `Array` | No |  |

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
| `category` | `String` | Yes |  |
| `comment` | `String` | No |  |
| `data` | `Hash` | Yes |  |
| `generation_id` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SubmitGenerationFeedback.create({
  "category" => "example_category", # String
  "data" => {}, # Hash
  "generation_id" => "example_generation_id", # String
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
| `data` | `Hash` | Yes |  |

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

## TranscriptionEntity

```ruby
transcription = client.Transcription
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

Create a new `TranscriptionEntity` instance with the same client and
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
| `input` | `String` | Yes |  |
| `model` | `String` | Yes |  |
| `provider` | `Hash` | No |  |
| `response_format` | `String` | No |  |
| `speed` | `Float` | No |  |
| `voice` | `String` | Yes |  |

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
| `allowed_model` | `Object` | No |  |
| `allowed_user_id` | `Object` | No |  |
| `data` | `Object` | Yes |  |
| `disabled` | `Boolean` | No |  |
| `is_fallback` | `Boolean` | No |  |
| `key` | `String` | No |  |
| `name` | `Object` | No |  |

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
| `allowed_model` | `Object` | No |  |
| `allowed_provider` | `Object` | No |  |
| `content_filter` | `Object` | No |  |
| `content_filter_builtin` | `Object` | No |  |
| `data` | `Object` | Yes |  |
| `description` | `Object` | No |  |
| `enforce_zdr` | `Object` | No |  |
| `enforce_zdr_anthropic` | `Object` | No |  |
| `enforce_zdr_google` | `Object` | No |  |
| `enforce_zdr_openai` | `Object` | No |  |
| `enforce_zdr_other` | `Object` | No |  |
| `enforce_zdr_xai` | `Object` | No |  |
| `ignored_model` | `Object` | No |  |
| `ignored_provider` | `Object` | No |  |
| `limit_usd` | `Object` | No |  |
| `name` | `String` | No |  |
| `reset_interval` | `Object` | No |  |

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
| `api_key_hash` | `Object` | No |  |
| `config` | `Hash` | No |  |
| `data` | `Object` | Yes |  |
| `enabled` | `Boolean` | No |  |
| `filter_rule` | `Object` | No |  |
| `name` | `String` | No |  |
| `privacy_mode` | `Boolean` | No |  |
| `sampling_rate` | `Float` | No |  |

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
| `created_at` | `String` | Yes |  |
| `created_by` | `Object` | Yes |  |
| `data` | `Object` | Yes |  |
| `default_image_model` | `Object` | No |  |
| `default_provider_sort` | `Object` | No |  |
| `default_text_model` | `Object` | No |  |
| `description` | `Object` | No |  |
| `id` | `String` | Yes |  |
| `io_logging_api_key_id` | `Object` | No |  |
| `io_logging_sampling_rate` | `Float` | No |  |
| `is_data_discount_logging_enabled` | `Boolean` | No |  |
| `is_observability_broadcast_enabled` | `Boolean` | No |  |
| `is_observability_io_logging_enabled` | `Boolean` | No |  |
| `name` | `String` | Yes |  |
| `slug` | `String` | Yes |  |
| `updated_at` | `Object` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.UpdateWorkspace.create({
  "created_at" => "example_created_at", # String
  "created_by" => "example_created_by", # Object
  "data" => "example_data", # Object
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
| `data` | `Object` | Yes |  |
| `limit_usd` | `Float` | Yes |  |

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

## UserEntity

```ruby
user = client.User
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

Create a new `UserEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## VersionEntity

```ruby
version = client.Version
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

Create a new `VersionEntity` instance with the same client and
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
| `aspect_ratio` | `String` | No |  |
| `callback_url` | `String` | No |  |
| `duration` | `Integer` | No |  |
| `error` | `String` | No |  |
| `frame_image` | `Array` | No |  |
| `generate_audio` | `Boolean` | No |  |
| `generation_id` | `String` | No |  |
| `id` | `String` | Yes |  |
| `input_reference` | `Array` | No |  |
| `model` | `String` | Yes |  |
| `polling_url` | `String` | Yes |  |
| `prompt` | `String` | No |  |
| `provider` | `Hash` | No |  |
| `resolution` | `String` | No |  |
| `seed` | `Integer` | No |  |
| `size` | `String` | No |  |
| `status` | `String` | Yes |  |
| `unsigned_url` | `Array` | No |  |
| `usage` | `Hash` | No |  |

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

## VideoModelsListEntity

```ruby
video_models_list = client.VideoModelsList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_passthrough_parameter` | `Array` | Yes |  |
| `canonical_slug` | `String` | Yes |  |
| `created` | `Integer` | Yes |  |
| `description` | `String` | No |  |
| `generate_audio` | `Object` | Yes |  |
| `hugging_face_id` | `Object` | No |  |
| `id` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `pricing_skus` | `Object` | No |  |
| `seed` | `Object` | Yes |  |
| `supported_aspect_ratio` | `Object` | Yes |  |
| `supported_duration` | `Object` | Yes |  |
| `supported_frame_image` | `Object` | Yes |  |
| `supported_resolution` | `Object` | Yes |  |
| `supported_size` | `Object` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.VideoModelsList.list
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

Create a new `VideoModelsListEntity` instance with the same client and
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
| `data` | `Object` | Yes |  |

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

### Operations

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

## ZdrEntity

```ruby
zdr = client.Zdr
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

Create a new `ZdrEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = OpenrouterModelsSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

