# OpenrouterModels Lua SDK Reference

Complete API reference for the OpenrouterModels Lua SDK.


## OpenrouterModelsSDK

### Constructor

```lua
local sdk = require("openrouter-models_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Activity(data)`

Create a new `Activity` entity instance. Pass `nil` for no initial data.

#### `Add(data)`

Create a new `Add` entity instance. Pass `nil` for no initial data.

#### `ApiKey(data)`

Create a new `ApiKey` entity instance. Pass `nil` for no initial data.

#### `AppRanking(data)`

Create a new `AppRanking` entity instance. Pass `nil` for no initial data.

#### `Benchmark(data)`

Create a new `Benchmark` entity instance. Pass `nil` for no initial data.

#### `BetaAnalytics(data)`

Create a new `BetaAnalytics` entity instance. Pass `nil` for no initial data.

#### `Budget(data)`

Create a new `Budget` entity instance. Pass `nil` for no initial data.

#### `BulkAddWorkspaceMember(data)`

Create a new `BulkAddWorkspaceMember` entity instance. Pass `nil` for no initial data.

#### `BulkAssignKey(data)`

Create a new `BulkAssignKey` entity instance. Pass `nil` for no initial data.

#### `BulkAssignMember(data)`

Create a new `BulkAssignMember` entity instance. Pass `nil` for no initial data.

#### `BulkRemoveWorkspaceMember(data)`

Create a new `BulkRemoveWorkspaceMember` entity instance. Pass `nil` for no initial data.

#### `BulkUnassignKey(data)`

Create a new `BulkUnassignKey` entity instance. Pass `nil` for no initial data.

#### `BulkUnassignMember(data)`

Create a new `BulkUnassignMember` entity instance. Pass `nil` for no initial data.

#### `Byok(data)`

Create a new `Byok` entity instance. Pass `nil` for no initial data.

#### `ChatResult(data)`

Create a new `ChatResult` entity instance. Pass `nil` for no initial data.

#### `Code(data)`

Create a new `Code` entity instance. Pass `nil` for no initial data.

#### `Coinbase(data)`

Create a new `Coinbase` entity instance. Pass `nil` for no initial data.

#### `Completion(data)`

Create a new `Completion` entity instance. Pass `nil` for no initial data.

#### `Content(data)`

Create a new `Content` entity instance. Pass `nil` for no initial data.

#### `Count(data)`

Create a new `Count` entity instance. Pass `nil` for no initial data.

#### `CreateByokKey(data)`

Create a new `CreateByokKey` entity instance. Pass `nil` for no initial data.

#### `CreateGuardrail(data)`

Create a new `CreateGuardrail` entity instance. Pass `nil` for no initial data.

#### `CreateObservabilityDestination(data)`

Create a new `CreateObservabilityDestination` entity instance. Pass `nil` for no initial data.

#### `CreatePresetFromInference(data)`

Create a new `CreatePresetFromInference` entity instance. Pass `nil` for no initial data.

#### `CreateWorkspace(data)`

Create a new `CreateWorkspace` entity instance. Pass `nil` for no initial data.

#### `Credit(data)`

Create a new `Credit` entity instance. Pass `nil` for no initial data.

#### `Destination(data)`

Create a new `Destination` entity instance. Pass `nil` for no initial data.

#### `Embedding(data)`

Create a new `Embedding` entity instance. Pass `nil` for no initial data.

#### `Endpoint(data)`

Create a new `Endpoint` entity instance. Pass `nil` for no initial data.

#### `Feedback(data)`

Create a new `Feedback` entity instance. Pass `nil` for no initial data.

#### `File(data)`

Create a new `File` entity instance. Pass `nil` for no initial data.

#### `Generation(data)`

Create a new `Generation` entity instance. Pass `nil` for no initial data.

#### `GenerationContent(data)`

Create a new `GenerationContent` entity instance. Pass `nil` for no initial data.

#### `Guardrail(data)`

Create a new `Guardrail` entity instance. Pass `nil` for no initial data.

#### `Image(data)`

Create a new `Image` entity instance. Pass `nil` for no initial data.

#### `ImageModelEndpoint(data)`

Create a new `ImageModelEndpoint` entity instance. Pass `nil` for no initial data.

#### `ImageModelsList(data)`

Create a new `ImageModelsList` entity instance. Pass `nil` for no initial data.

#### `Key(data)`

Create a new `Key` entity instance. Pass `nil` for no initial data.

#### `ListByokKey(data)`

Create a new `ListByokKey` entity instance. Pass `nil` for no initial data.

#### `ListGuardrail(data)`

Create a new `ListGuardrail` entity instance. Pass `nil` for no initial data.

#### `ListKeyAssignment(data)`

Create a new `ListKeyAssignment` entity instance. Pass `nil` for no initial data.

#### `ListMemberAssignment(data)`

Create a new `ListMemberAssignment` entity instance. Pass `nil` for no initial data.

#### `ListObservabilityDestination(data)`

Create a new `ListObservabilityDestination` entity instance. Pass `nil` for no initial data.

#### `ListPreset(data)`

Create a new `ListPreset` entity instance. Pass `nil` for no initial data.

#### `ListPresetVersion(data)`

Create a new `ListPresetVersion` entity instance. Pass `nil` for no initial data.

#### `ListWorkspace(data)`

Create a new `ListWorkspace` entity instance. Pass `nil` for no initial data.

#### `ListWorkspaceBudget(data)`

Create a new `ListWorkspaceBudget` entity instance. Pass `nil` for no initial data.

#### `ListWorkspaceMember(data)`

Create a new `ListWorkspaceMember` entity instance. Pass `nil` for no initial data.

#### `Member(data)`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `Message(data)`

Create a new `Message` entity instance. Pass `nil` for no initial data.

#### `Meta(data)`

Create a new `Meta` entity instance. Pass `nil` for no initial data.

#### `Model(data)`

Create a new `Model` entity instance. Pass `nil` for no initial data.

#### `ModelsCount(data)`

Create a new `ModelsCount` entity instance. Pass `nil` for no initial data.

#### `ModelsList(data)`

Create a new `ModelsList` entity instance. Pass `nil` for no initial data.

#### `OAuth(data)`

Create a new `OAuth` entity instance. Pass `nil` for no initial data.

#### `ObservabilityDestination(data)`

Create a new `ObservabilityDestination` entity instance. Pass `nil` for no initial data.

#### `OpenResponsesResult(data)`

Create a new `OpenResponsesResult` entity instance. Pass `nil` for no initial data.

#### `Organization(data)`

Create a new `Organization` entity instance. Pass `nil` for no initial data.

#### `Preset(data)`

Create a new `Preset` entity instance. Pass `nil` for no initial data.

#### `PresetVersion(data)`

Create a new `PresetVersion` entity instance. Pass `nil` for no initial data.

#### `Provider(data)`

Create a new `Provider` entity instance. Pass `nil` for no initial data.

#### `Query(data)`

Create a new `Query` entity instance. Pass `nil` for no initial data.

#### `RankingsDaily(data)`

Create a new `RankingsDaily` entity instance. Pass `nil` for no initial data.

#### `Remove(data)`

Create a new `Remove` entity instance. Pass `nil` for no initial data.

#### `Rerank(data)`

Create a new `Rerank` entity instance. Pass `nil` for no initial data.

#### `Response(data)`

Create a new `Response` entity instance. Pass `nil` for no initial data.

#### `Speech(data)`

Create a new `Speech` entity instance. Pass `nil` for no initial data.

#### `Stt(data)`

Create a new `Stt` entity instance. Pass `nil` for no initial data.

#### `SubmitGenerationFeedback(data)`

Create a new `SubmitGenerationFeedback` entity instance. Pass `nil` for no initial data.

#### `Task(data)`

Create a new `Task` entity instance. Pass `nil` for no initial data.

#### `Transcription(data)`

Create a new `Transcription` entity instance. Pass `nil` for no initial data.

#### `Tts(data)`

Create a new `Tts` entity instance. Pass `nil` for no initial data.

#### `UnifiedBenchmark(data)`

Create a new `UnifiedBenchmark` entity instance. Pass `nil` for no initial data.

#### `UpdateByokKey(data)`

Create a new `UpdateByokKey` entity instance. Pass `nil` for no initial data.

#### `UpdateGuardrail(data)`

Create a new `UpdateGuardrail` entity instance. Pass `nil` for no initial data.

#### `UpdateObservabilityDestination(data)`

Create a new `UpdateObservabilityDestination` entity instance. Pass `nil` for no initial data.

#### `UpdateWorkspace(data)`

Create a new `UpdateWorkspace` entity instance. Pass `nil` for no initial data.

#### `UpsertWorkspaceBudget(data)`

Create a new `UpsertWorkspaceBudget` entity instance. Pass `nil` for no initial data.

#### `User(data)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `Version(data)`

Create a new `Version` entity instance. Pass `nil` for no initial data.

#### `Video(data)`

Create a new `Video` entity instance. Pass `nil` for no initial data.

#### `VideoGeneration(data)`

Create a new `VideoGeneration` entity instance. Pass `nil` for no initial data.

#### `VideoModelsList(data)`

Create a new `VideoModelsList` entity instance. Pass `nil` for no initial data.

#### `Workspace(data)`

Create a new `Workspace` entity instance. Pass `nil` for no initial data.

#### `WorkspaceBudget(data)`

Create a new `WorkspaceBudget` entity instance. Pass `nil` for no initial data.

#### `Zdr(data)`

Create a new `Zdr` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ActivityEntity

```lua
local activity = client:Activity(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byok_usage_inference` | `number` | Yes |  |
| `completion_token` | `number` | Yes |  |
| `date` | `string` | Yes |  |
| `endpoint_id` | `string` | Yes |  |
| `model` | `string` | Yes |  |
| `model_permaslug` | `string` | Yes |  |
| `prompt_token` | `number` | Yes |  |
| `provider_name` | `string` | Yes |  |
| `reasoning_token` | `number` | Yes |  |
| `request` | `number` | Yes |  |
| `usage` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Activity():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AddEntity

```lua
local add = client:Add(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AddEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiKeyEntity

```lua
local api_key = client:ApiKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byok_usage` | `number` | Yes |  |
| `byok_usage_daily` | `number` | Yes |  |
| `byok_usage_monthly` | `number` | Yes |  |
| `byok_usage_weekly` | `number` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator_user_id` | `any` | No |  |
| `data` | `table` | Yes |  |
| `disabled` | `boolean` | No |  |
| `expires_at` | `any` | No |  |
| `hash` | `string` | Yes |  |
| `include_byok_in_limit` | `boolean` | No |  |
| `label` | `string` | Yes |  |
| `limit` | `any` | No |  |
| `limit_remaining` | `any` | Yes |  |
| `limit_reset` | `any` | No |  |
| `name` | `string` | Yes |  |
| `updated_at` | `any` | Yes |  |
| `usage` | `number` | Yes |  |
| `usage_daily` | `number` | Yes |  |
| `usage_monthly` | `number` | Yes |  |
| `usage_weekly` | `number` | Yes |  |
| `workspace_id` | `string` | No |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiKey():create({
  byok_usage = --[[ number ]],
  byok_usage_daily = --[[ number ]],
  byok_usage_monthly = --[[ number ]],
  byok_usage_weekly = --[[ number ]],
  created_at = --[[ string ]],
  data = --[[ table ]],
  hash = --[[ string ]],
  label = --[[ string ]],
  limit_remaining = --[[ any ]],
  name = --[[ string ]],
  updated_at = --[[ any ]],
  usage = --[[ number ]],
  usage_daily = --[[ number ]],
  usage_monthly = --[[ number ]],
  usage_weekly = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiKey():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiKey():load({ id = "api_key_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ApiKey():remove({ id = "api_key_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiKey():update({
  id = "api_key_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AppRankingEntity

```lua
local app_ranking = client:AppRanking(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `number` | Yes |  |
| `app_name` | `string` | Yes |  |
| `rank` | `number` | Yes |  |
| `total_request` | `number` | Yes |  |
| `total_token` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AppRanking():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AppRankingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BenchmarkEntity

```lua
local benchmark = client:Benchmark(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BenchmarkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BetaAnalyticsEntity

```lua
local beta_analytics = client:BetaAnalytics(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `classifier_dimension` | `table` | Yes |  |
| `classifier_filter` | `table` | Yes |  |
| `data` | `table` | Yes |  |
| `dimension` | `table` | No |  |
| `filter` | `table` | No |  |
| `granularity` | `string` | No |  |
| `group_limit` | `number` | No |  |
| `limit` | `number` | No |  |
| `metric` | `table` | Yes |  |
| `order_by` | `table` | Yes |  |
| `time_range` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BetaAnalytics():create({
  classifier_dimension = --[[ table ]],
  classifier_filter = --[[ table ]],
  data = --[[ table ]],
  metric = --[[ table ]],
  order_by = --[[ table ]],
  time_range = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BetaAnalytics():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BetaAnalyticsEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BudgetEntity

```lua
local budget = client:Budget(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BudgetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BulkAddWorkspaceMemberEntity

```lua
local bulk_add_workspace_member = client:BulkAddWorkspaceMember(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `added_count` | `number` | Yes |  |
| `data` | `table` | Yes |  |
| `user_id` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BulkAddWorkspaceMember():create({
  workspace_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkAddWorkspaceMemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BulkAssignKeyEntity

```lua
local bulk_assign_key = client:BulkAssignKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_count` | `number` | Yes |  |
| `key_hash` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BulkAssignKey():create({
  guardrail_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkAssignKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BulkAssignMemberEntity

```lua
local bulk_assign_member = client:BulkAssignMember(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_count` | `number` | Yes |  |
| `member_user_id` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BulkAssignMember():create({
  guardrail_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkAssignMemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BulkRemoveWorkspaceMemberEntity

```lua
local bulk_remove_workspace_member = client:BulkRemoveWorkspaceMember(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `removed_count` | `number` | Yes |  |
| `user_id` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BulkRemoveWorkspaceMember():create({
  workspace_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkRemoveWorkspaceMemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BulkUnassignKeyEntity

```lua
local bulk_unassign_key = client:BulkUnassignKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key_hash` | `table` | Yes |  |
| `unassigned_count` | `number` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BulkUnassignKey():create({
  guardrail_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkUnassignKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BulkUnassignMemberEntity

```lua
local bulk_unassign_member = client:BulkUnassignMember(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `member_user_id` | `table` | Yes |  |
| `unassigned_count` | `number` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BulkUnassignMember():create({
  guardrail_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkUnassignMemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ByokEntity

```lua
local byok = client:Byok(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_api_key_hash` | `any` | Yes |  |
| `allowed_model` | `any` | No |  |
| `allowed_user_id` | `any` | No |  |
| `created_at` | `string` | Yes |  |
| `data` | `any` | Yes |  |
| `disabled` | `boolean` | No |  |
| `id` | `string` | Yes |  |
| `is_fallback` | `boolean` | No |  |
| `key` | `string` | Yes |  |
| `label` | `string` | Yes |  |
| `name` | `any` | No |  |
| `provider` | `string` | Yes |  |
| `sort_order` | `number` | Yes |  |
| `workspace_id` | `string` | No |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Byok():create({
  allowed_api_key_hash = --[[ any ]],
  created_at = --[[ string ]],
  data = --[[ any ]],
  id = --[[ string ]],
  key = --[[ string ]],
  label = --[[ string ]],
  provider = --[[ string ]],
  sort_order = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Byok():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Byok():load({ id = "byok_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Byok():remove({ id = "byok_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ByokEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ChatResultEntity

```lua
local chat_result = client:ChatResult(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_control` | `table` | Yes |  |
| `choice` | `table` | Yes |  |
| `created` | `number` | Yes |  |
| `debug` | `table` | No |  |
| `frequency_penalty` | `any` | No |  |
| `id` | `string` | Yes |  |
| `image_config` | `table` | No |  |
| `logit_bia` | `any` | No |  |
| `logprob` | `any` | No |  |
| `max_completion_token` | `any` | No |  |
| `max_token` | `any` | No |  |
| `message` | `table` | Yes |  |
| `metadata` | `table` | No |  |
| `min_p` | `any` | No |  |
| `modality` | `table` | No |  |
| `model` | `string` | Yes |  |
| `object` | `string` | Yes |  |
| `openrouter_metadata` | `table` | Yes |  |
| `parallel_tool_call` | `any` | No |  |
| `plugin` | `table` | No |  |
| `prediction` | `any` | Yes |  |
| `presence_penalty` | `any` | No |  |
| `prompt_cache_key` | `any` | No |  |
| `prompt_cache_option` | `any` | Yes |  |
| `provider` | `any` | No |  |
| `reasoning` | `table` | No |  |
| `reasoning_effort` | `any` | No |  |
| `repetition_penalty` | `any` | No |  |
| `response_format` | `any` | No |  |
| `route` | `any` | No |  |
| `seed` | `any` | No |  |
| `service_tier` | `any` | No |  |
| `session_id` | `string` | No |  |
| `stop` | `any` | No |  |
| `stop_server_tools_when` | `table` | No |  |
| `stream` | `boolean` | No |  |
| `stream_option` | `any` | No |  |
| `system_fingerprint` | `any` | Yes |  |
| `temperature` | `any` | No |  |
| `tool` | `table` | No |  |
| `tool_choice` | `any` | No |  |
| `top_a` | `any` | No |  |
| `top_k` | `any` | No |  |
| `top_logprob` | `any` | No |  |
| `top_p` | `any` | No |  |
| `trace` | `table` | No |  |
| `usage` | `table` | Yes |  |
| `user` | `string` | No |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ChatResult():create({
  cache_control = --[[ table ]],
  choice = --[[ table ]],
  created = --[[ number ]],
  id = --[[ string ]],
  message = --[[ table ]],
  model = --[[ string ]],
  object = --[[ string ]],
  openrouter_metadata = --[[ table ]],
  prediction = --[[ any ]],
  prompt_cache_option = --[[ any ]],
  system_fingerprint = --[[ any ]],
  usage = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChatResultEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeEntity

```lua
local code = client:Code(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CoinbaseEntity

```lua
local coinbase = client:Coinbase(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CoinbaseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CompletionEntity

```lua
local completion = client:Completion(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompletionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContentEntity

```lua
local content = client:Content(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CountEntity

```lua
local count = client:Count(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreateByokKeyEntity

```lua
local create_byok_key = client:CreateByokKey(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateByokKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreateGuardrailEntity

```lua
local create_guardrail = client:CreateGuardrail(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateGuardrailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreateObservabilityDestinationEntity

```lua
local create_observability_destination = client:CreateObservabilityDestination(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_key_hash` | `any` | No |  |
| `config` | `table` | Yes |  |
| `enabled` | `boolean` | No |  |
| `filter_rule` | `any` | Yes |  |
| `name` | `string` | Yes |  |
| `privacy_mode` | `boolean` | No |  |
| `sampling_rate` | `number` | No |  |
| `type` | `string` | Yes |  |
| `workspace_id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CreateObservabilityDestination():create({
  config = --[[ table ]],
  filter_rule = --[[ any ]],
  name = --[[ string ]],
  type = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateObservabilityDestinationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreatePresetFromInferenceEntity

```lua
local create_preset_from_inference = client:CreatePresetFromInference(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `background` | `any` | No |  |
| `cache_control` | `table` | Yes |  |
| `context_management` | `any` | No |  |
| `data` | `any` | Yes |  |
| `debug` | `table` | No |  |
| `fallback` | `any` | No |  |
| `frequency_penalty` | `any` | No |  |
| `image_config` | `table` | No |  |
| `include` | `any` | No |  |
| `input` | `any` | No |  |
| `instruction` | `any` | No |  |
| `logit_bia` | `any` | No |  |
| `logprob` | `any` | No |  |
| `max_completion_token` | `any` | No |  |
| `max_output_token` | `any` | No |  |
| `max_token` | `any` | No |  |
| `max_tool_call` | `any` | No |  |
| `message` | `table` | Yes |  |
| `metadata` | `table` | No |  |
| `min_p` | `any` | No |  |
| `modality` | `table` | No |  |
| `model` | `string` | No |  |
| `output_config` | `table` | No |  |
| `parallel_tool_call` | `any` | No |  |
| `plugin` | `table` | No |  |
| `prediction` | `any` | Yes |  |
| `presence_penalty` | `any` | No |  |
| `previous_response_id` | `string` | No |  |
| `prompt` | `any` | Yes |  |
| `prompt_cache_key` | `any` | No |  |
| `prompt_cache_option` | `any` | Yes |  |
| `provider` | `any` | No |  |
| `reasoning` | `table` | No |  |
| `reasoning_effort` | `any` | No |  |
| `repetition_penalty` | `any` | No |  |
| `response_format` | `any` | No |  |
| `route` | `any` | No |  |
| `safety_identifier` | `any` | No |  |
| `seed` | `any` | No |  |
| `service_tier` | `any` | No |  |
| `session_id` | `string` | No |  |
| `speed` | `any` | No |  |
| `stop` | `any` | No |  |
| `stop_sequence` | `table` | No |  |
| `stop_server_tools_when` | `table` | No |  |
| `store` | `boolean` | No |  |
| `stream` | `boolean` | No |  |
| `stream_option` | `any` | No |  |
| `system` | `any` | No |  |
| `temperature` | `any` | No |  |
| `text` | `any` | No |  |
| `thinking` | `any` | No |  |
| `tool` | `table` | No |  |
| `tool_choice` | `any` | No |  |
| `top_a` | `any` | No |  |
| `top_k` | `any` | No |  |
| `top_logprob` | `any` | No |  |
| `top_p` | `any` | No |  |
| `trace` | `table` | No |  |
| `truncation` | `any` | No |  |
| `user` | `string` | No |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CreatePresetFromInference():create({
  slug = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreatePresetFromInferenceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreateWorkspaceEntity

```lua
local create_workspace = client:CreateWorkspace(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateWorkspaceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreditEntity

```lua
local credit = client:Credit(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Credit():create({
  data = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Credit():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreditEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DestinationEntity

```lua
local destination = client:Destination(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DestinationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmbeddingEntity

```lua
local embedding = client:Embedding(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | Yes |  |
| `dimension` | `number` | No |  |
| `encoding_format` | `string` | No |  |
| `id` | `string` | No |  |
| `input` | `any` | Yes |  |
| `input_type` | `string` | No |  |
| `model` | `string` | Yes |  |
| `object` | `string` | Yes |  |
| `provider` | `any` | No |  |
| `usage` | `table` | Yes |  |
| `user` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Embedding():create({
  data = --[[ table ]],
  input = --[[ any ]],
  model = --[[ string ]],
  object = --[[ string ]],
  usage = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmbeddingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EndpointEntity

```lua
local endpoint = client:Endpoint(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `table` | Yes |  |
| `benchmark` | `table` | Yes |  |
| `canonical_slug` | `string` | Yes |  |
| `context_length` | `any` | Yes |  |
| `created` | `number` | Yes |  |
| `data` | `table` | Yes |  |
| `default_parameter` | `any` | Yes |  |
| `description` | `string` | No |  |
| `expiration_date` | `any` | No |  |
| `hugging_face_id` | `any` | No |  |
| `id` | `string` | Yes |  |
| `knowledge_cutoff` | `any` | No |  |
| `latency_last_30m` | `any` | Yes |  |
| `link` | `table` | Yes |  |
| `max_completion_token` | `any` | Yes |  |
| `max_prompt_token` | `any` | Yes |  |
| `model_id` | `string` | Yes |  |
| `model_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `per_request_limit` | `any` | Yes |  |
| `pricing` | `table` | Yes |  |
| `provider_name` | `string` | Yes |  |
| `quantization` | `any` | Yes |  |
| `reasoning` | `table` | Yes |  |
| `status` | `number` | No |  |
| `supported_parameter` | `table` | Yes |  |
| `supported_voice` | `any` | Yes |  |
| `supports_implicit_caching` | `boolean` | Yes |  |
| `tag` | `string` | Yes |  |
| `throughput_last_30m` | `any` | Yes |  |
| `top_provider` | `table` | Yes |  |
| `uptime_last_1d` | `any` | Yes |  |
| `uptime_last_30m` | `any` | Yes |  |
| `uptime_last_5m` | `any` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Endpoint():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Endpoint():load({ author = "author", slug = "slug" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EndpointEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FeedbackEntity

```lua
local feedback = client:Feedback(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeedbackEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FileEntity

```lua
local file = client:File(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `downloadable` | `boolean` | Yes |  |
| `filename` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `mime_type` | `string` | Yes |  |
| `size_byte` | `number` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:File():create({
  created_at = --[[ string ]],
  downloadable = --[[ boolean ]],
  filename = --[[ string ]],
  id = --[[ string ]],
  mime_type = --[[ string ]],
  size_byte = --[[ number ]],
  type = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:File():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:File():load({ id = "file_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:File():remove({ id = "file_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GenerationEntity

```lua
local generation = client:Generation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Generation():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GenerationContentEntity

```lua
local generation_content = client:GenerationContent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GenerationContent():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerationContentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GuardrailEntity

```lua
local guardrail = client:Guardrail(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_model` | `any` | No |  |
| `allowed_provider` | `any` | No |  |
| `content_filter` | `any` | No |  |
| `content_filter_builtin` | `any` | No |  |
| `created_at` | `string` | Yes |  |
| `data` | `any` | Yes |  |
| `description` | `any` | No |  |
| `enforce_zdr` | `any` | No |  |
| `enforce_zdr_anthropic` | `any` | No |  |
| `enforce_zdr_google` | `any` | No |  |
| `enforce_zdr_openai` | `any` | No |  |
| `enforce_zdr_other` | `any` | No |  |
| `enforce_zdr_xai` | `any` | No |  |
| `id` | `string` | Yes |  |
| `ignored_model` | `any` | No |  |
| `ignored_provider` | `any` | No |  |
| `limit_usd` | `any` | No |  |
| `name` | `string` | Yes |  |
| `reset_interval` | `any` | No |  |
| `updated_at` | `any` | No |  |
| `workspace_id` | `string` | No |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Guardrail():create({
  created_at = --[[ string ]],
  data = --[[ any ]],
  id = --[[ string ]],
  name = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Guardrail():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Guardrail():load({ id = "guardrail_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Guardrail():remove({ id = "guardrail_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GuardrailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImageEntity

```lua
local image = client:Image(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `string` | No |  |
| `background` | `string` | No |  |
| `created` | `number` | Yes |  |
| `data` | `table` | Yes |  |
| `input_reference` | `table` | No |  |
| `model` | `string` | Yes |  |
| `n` | `number` | No |  |
| `output_compression` | `number` | No |  |
| `output_format` | `string` | No |  |
| `prompt` | `string` | Yes |  |
| `provider` | `table` | No |  |
| `quality` | `string` | No |  |
| `resolution` | `string` | No |  |
| `seed` | `number` | No |  |
| `size` | `string` | No |  |
| `stream` | `boolean` | No |  |
| `usage` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Image():create({
  created = --[[ number ]],
  data = --[[ table ]],
  model = --[[ string ]],
  prompt = --[[ string ]],
  usage = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImageModelEndpointEntity

```lua
local image_model_endpoint = client:ImageModelEndpoint(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_passthrough_parameter` | `table` | Yes |  |
| `pricing` | `table` | Yes |  |
| `provider_name` | `string` | Yes |  |
| `provider_slug` | `string` | Yes |  |
| `provider_tag` | `any` | Yes |  |
| `supported_parameter` | `any` | Yes |  |
| `supports_streaming` | `boolean` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ImageModelEndpoint():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImageModelEndpointEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImageModelsListEntity

```lua
local image_models_list = client:ImageModelsList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `table` | Yes |  |
| `created` | `number` | Yes |  |
| `description` | `string` | Yes |  |
| `endpoint` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `supported_parameter` | `table` | Yes |  |
| `supports_streaming` | `boolean` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ImageModelsList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImageModelsListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## KeyEntity

```lua
local key = client:Key(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `KeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListByokKeyEntity

```lua
local list_byok_key = client:ListByokKey(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListByokKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListGuardrailEntity

```lua
local list_guardrail = client:ListGuardrail(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListGuardrailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListKeyAssignmentEntity

```lua
local list_key_assignment = client:ListKeyAssignment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_by` | `any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `guardrail_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `key_hash` | `string` | Yes |  |
| `key_label` | `string` | Yes |  |
| `key_name` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListKeyAssignment():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListKeyAssignmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListMemberAssignmentEntity

```lua
local list_member_assignment = client:ListMemberAssignment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_by` | `any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `guardrail_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `organization_id` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListMemberAssignment():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListMemberAssignmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListObservabilityDestinationEntity

```lua
local list_observability_destination = client:ListObservabilityDestination(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | Yes |  |
| `total_count` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListObservabilityDestination():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListObservabilityDestinationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListPresetEntity

```lua
local list_preset = client:ListPreset(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListPresetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListPresetVersionEntity

```lua
local list_preset_version = client:ListPresetVersion(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `table` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `preset_id` | `string` | Yes |  |
| `system_prompt` | `any` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `version` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListPresetVersion():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListPresetVersionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListWorkspaceEntity

```lua
local list_workspace = client:ListWorkspace(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListWorkspaceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListWorkspaceBudgetEntity

```lua
local list_workspace_budget = client:ListWorkspaceBudget(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `limit_usd` | `number` | Yes |  |
| `reset_interval` | `any` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workspace_id` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListWorkspaceBudget():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListWorkspaceBudgetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListWorkspaceMemberEntity

```lua
local list_workspace_member = client:ListWorkspaceMember(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `role` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |
| `workspace_id` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListWorkspaceMember():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListWorkspaceMemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MemberEntity

```lua
local member = client:Member(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MessageEntity

```lua
local message = client:Message(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_control` | `table` | Yes |  |
| `context_management` | `any` | No |  |
| `fallback` | `any` | No |  |
| `max_token` | `number` | No |  |
| `message` | `any` | Yes |  |
| `metadata` | `table` | No |  |
| `model` | `string` | Yes |  |
| `output_config` | `table` | No |  |
| `plugin` | `table` | No |  |
| `provider` | `any` | No |  |
| `route` | `any` | No |  |
| `service_tier` | `string` | No |  |
| `session_id` | `string` | No |  |
| `speed` | `any` | No |  |
| `stop_sequence` | `table` | No |  |
| `stop_server_tools_when` | `table` | No |  |
| `stream` | `boolean` | No |  |
| `system` | `any` | No |  |
| `temperature` | `number` | No |  |
| `thinking` | `any` | No |  |
| `tool` | `table` | No |  |
| `tool_choice` | `any` | No |  |
| `top_k` | `number` | No |  |
| `top_p` | `number` | No |  |
| `trace` | `table` | No |  |
| `user` | `string` | No |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Message():create({
  cache_control = --[[ table ]],
  message = --[[ any ]],
  model = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MessageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MetaEntity

```lua
local meta = client:Meta(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MetaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ModelEntity

```lua
local model = client:Model(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `table` | Yes |  |
| `benchmark` | `table` | Yes |  |
| `canonical_slug` | `string` | Yes |  |
| `context_length` | `any` | Yes |  |
| `created` | `number` | Yes |  |
| `data` | `table` | Yes |  |
| `default_parameter` | `any` | Yes |  |
| `description` | `string` | No |  |
| `expiration_date` | `any` | No |  |
| `hugging_face_id` | `any` | No |  |
| `id` | `string` | Yes |  |
| `knowledge_cutoff` | `any` | No |  |
| `link` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `per_request_limit` | `any` | Yes |  |
| `pricing` | `table` | Yes |  |
| `reasoning` | `table` | Yes |  |
| `supported_parameter` | `table` | Yes |  |
| `supported_voice` | `any` | Yes |  |
| `top_provider` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Model():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Model():load({ author = "author", slug = "slug" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ModelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ModelsCountEntity

```lua
local models_count = client:ModelsCount(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ModelsCount():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ModelsCountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ModelsListEntity

```lua
local models_list = client:ModelsList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `table` | Yes |  |
| `benchmark` | `table` | Yes |  |
| `canonical_slug` | `string` | Yes |  |
| `context_length` | `any` | Yes |  |
| `created` | `number` | Yes |  |
| `default_parameter` | `any` | Yes |  |
| `description` | `string` | No |  |
| `expiration_date` | `any` | No |  |
| `hugging_face_id` | `any` | No |  |
| `id` | `string` | Yes |  |
| `knowledge_cutoff` | `any` | No |  |
| `link` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `per_request_limit` | `any` | Yes |  |
| `pricing` | `table` | Yes |  |
| `reasoning` | `table` | Yes |  |
| `supported_parameter` | `table` | Yes |  |
| `supported_voice` | `any` | Yes |  |
| `top_provider` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ModelsList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ModelsListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OAuthEntity

```lua
local o_auth = client:OAuth(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `callback_url` | `string` | Yes |  |
| `code` | `string` | Yes |  |
| `code_challenge` | `string` | No |  |
| `code_challenge_method` | `any` | No |  |
| `code_verifier` | `string` | No |  |
| `data` | `table` | Yes |  |
| `expires_at` | `any` | No |  |
| `key` | `string` | Yes |  |
| `key_label` | `string` | No |  |
| `limit` | `number` | No |  |
| `spawn_agent` | `string` | No |  |
| `spawn_cloud` | `string` | No |  |
| `usage_limit_type` | `string` | No |  |
| `user_id` | `any` | Yes |  |
| `workspace_id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OAuth():create({
  callback_url = --[[ string ]],
  code = --[[ string ]],
  data = --[[ table ]],
  key = --[[ string ]],
  user_id = --[[ any ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OAuthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ObservabilityDestinationEntity

```lua
local observability_destination = client:ObservabilityDestination(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ObservabilityDestination():load({ id = "observability_destination_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ObservabilityDestination():remove({ id = "observability_destination_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObservabilityDestinationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OpenResponsesResultEntity

```lua
local open_responses_result = client:OpenResponsesResult(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `background` | `any` | No |  |
| `cache_control` | `table` | Yes |  |
| `debug` | `table` | No |  |
| `frequency_penalty` | `any` | No |  |
| `image_config` | `table` | No |  |
| `include` | `any` | No |  |
| `input` | `any` | No |  |
| `instruction` | `any` | No |  |
| `max_output_token` | `any` | No |  |
| `max_tool_call` | `any` | No |  |
| `metadata` | `any` | No |  |
| `modality` | `table` | No |  |
| `model` | `string` | No |  |
| `parallel_tool_call` | `any` | No |  |
| `plugin` | `table` | No |  |
| `presence_penalty` | `any` | No |  |
| `previous_response_id` | `string` | No |  |
| `prompt` | `any` | Yes |  |
| `prompt_cache_key` | `any` | No |  |
| `prompt_cache_option` | `any` | Yes |  |
| `provider` | `any` | No |  |
| `reasoning` | `any` | No |  |
| `route` | `any` | No |  |
| `safety_identifier` | `any` | No |  |
| `service_tier` | `any` | No |  |
| `session_id` | `string` | No |  |
| `stop_server_tools_when` | `table` | No |  |
| `store` | `boolean` | No |  |
| `stream` | `boolean` | No |  |
| `temperature` | `any` | No |  |
| `text` | `any` | No |  |
| `tool` | `table` | No |  |
| `tool_choice` | `any` | No |  |
| `top_k` | `number` | No |  |
| `top_logprob` | `any` | No |  |
| `top_p` | `any` | No |  |
| `trace` | `table` | No |  |
| `truncation` | `any` | No |  |
| `user` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OpenResponsesResult():create({
  cache_control = --[[ table ]],
  prompt = --[[ any ]],
  prompt_cache_option = --[[ any ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OpenResponsesResultEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationEntity

```lua
local organization = client:Organization(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes |  |
| `first_name` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `last_name` | `any` | Yes |  |
| `role` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Organization():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PresetEntity

```lua
local preset = client:Preset(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `creator_user_id` | `any` | Yes |  |
| `data` | `any` | Yes |  |
| `description` | `any` | Yes |  |
| `designated_version_id` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `status_updated_at` | `any` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workspace_id` | `any` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Preset():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Preset():load({ id = "preset_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PresetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PresetVersionEntity

```lua
local preset_version = client:PresetVersion(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PresetVersion():load({ id = "preset_version_id", slug = "slug" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PresetVersionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProviderEntity

```lua
local provider = client:Provider(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `datacenter` | `any` | No |  |
| `headquarter` | `any` | No |  |
| `name` | `string` | Yes |  |
| `privacy_policy_url` | `any` | Yes |  |
| `slug` | `string` | Yes |  |
| `status_page_url` | `any` | No |  |
| `terms_of_service_url` | `any` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Provider():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProviderEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## QueryEntity

```lua
local query = client:Query(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `QueryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RankingsDailyEntity

```lua
local rankings_daily = client:RankingsDaily(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes |  |
| `model_permaslug` | `string` | Yes |  |
| `total_token` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RankingsDaily():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RankingsDailyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RemoveEntity

```lua
local remove = client:Remove(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemoveEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RerankEntity

```lua
local rerank = client:Rerank(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `document` | `table` | Yes |  |
| `id` | `string` | No |  |
| `model` | `string` | Yes |  |
| `provider` | `string` | No |  |
| `query` | `string` | Yes |  |
| `result` | `table` | Yes |  |
| `top_n` | `number` | No |  |
| `usage` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Rerank():create({
  document = --[[ table ]],
  model = --[[ string ]],
  query = --[[ string ]],
  result = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RerankEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ResponseEntity

```lua
local response = client:Response(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResponseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SpeechEntity

```lua
local speech = client:Speech(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SpeechEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SttEntity

```lua
local stt = client:Stt(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `duration` | `number` | No |  |
| `input_audio` | `table` | Yes |  |
| `language` | `string` | No |  |
| `model` | `string` | Yes |  |
| `provider` | `table` | No |  |
| `response_format` | `string` | No |  |
| `segment` | `table` | No |  |
| `task` | `string` | No |  |
| `temperature` | `number` | No |  |
| `text` | `string` | Yes |  |
| `timestamp_granularity` | `table` | No |  |
| `usage` | `table` | No |  |
| `word` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Stt():create({
  input_audio = --[[ table ]],
  model = --[[ string ]],
  text = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SttEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubmitGenerationFeedbackEntity

```lua
local submit_generation_feedback = client:SubmitGenerationFeedback(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes |  |
| `comment` | `string` | No |  |
| `data` | `table` | Yes |  |
| `generation_id` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SubmitGenerationFeedback():create({
  category = --[[ string ]],
  data = --[[ table ]],
  generation_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubmitGenerationFeedbackEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TaskEntity

```lua
local task = client:Task(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Task():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TaskEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TranscriptionEntity

```lua
local transcription = client:Transcription(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TranscriptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TtsEntity

```lua
local tts = client:Tts(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `string` | Yes |  |
| `model` | `string` | Yes |  |
| `provider` | `table` | No |  |
| `response_format` | `string` | No |  |
| `speed` | `number` | No |  |
| `voice` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Tts():create({
  input = --[[ string ]],
  model = --[[ string ]],
  voice = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TtsEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UnifiedBenchmarkEntity

```lua
local unified_benchmark = client:UnifiedBenchmark(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | Yes |  |
| `meta` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:UnifiedBenchmark():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UnifiedBenchmarkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UpdateByokKeyEntity

```lua
local update_byok_key = client:UpdateByokKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_model` | `any` | No |  |
| `allowed_user_id` | `any` | No |  |
| `data` | `any` | Yes |  |
| `disabled` | `boolean` | No |  |
| `is_fallback` | `boolean` | No |  |
| `key` | `string` | No |  |
| `name` | `any` | No |  |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:UpdateByokKey():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateByokKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UpdateGuardrailEntity

```lua
local update_guardrail = client:UpdateGuardrail(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_model` | `any` | No |  |
| `allowed_provider` | `any` | No |  |
| `content_filter` | `any` | No |  |
| `content_filter_builtin` | `any` | No |  |
| `data` | `any` | Yes |  |
| `description` | `any` | No |  |
| `enforce_zdr` | `any` | No |  |
| `enforce_zdr_anthropic` | `any` | No |  |
| `enforce_zdr_google` | `any` | No |  |
| `enforce_zdr_openai` | `any` | No |  |
| `enforce_zdr_other` | `any` | No |  |
| `enforce_zdr_xai` | `any` | No |  |
| `ignored_model` | `any` | No |  |
| `ignored_provider` | `any` | No |  |
| `limit_usd` | `any` | No |  |
| `name` | `string` | No |  |
| `reset_interval` | `any` | No |  |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:UpdateGuardrail():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateGuardrailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UpdateObservabilityDestinationEntity

```lua
local update_observability_destination = client:UpdateObservabilityDestination(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_key_hash` | `any` | No |  |
| `config` | `table` | No |  |
| `data` | `any` | Yes |  |
| `enabled` | `boolean` | No |  |
| `filter_rule` | `any` | No |  |
| `name` | `string` | No |  |
| `privacy_mode` | `boolean` | No |  |
| `sampling_rate` | `number` | No |  |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:UpdateObservabilityDestination():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateObservabilityDestinationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UpdateWorkspaceEntity

```lua
local update_workspace = client:UpdateWorkspace(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `created_by` | `any` | Yes |  |
| `data` | `any` | Yes |  |
| `default_image_model` | `any` | No |  |
| `default_provider_sort` | `any` | No |  |
| `default_text_model` | `any` | No |  |
| `description` | `any` | No |  |
| `id` | `string` | Yes |  |
| `io_logging_api_key_id` | `any` | No |  |
| `io_logging_sampling_rate` | `number` | No |  |
| `is_data_discount_logging_enabled` | `boolean` | No |  |
| `is_observability_broadcast_enabled` | `boolean` | No |  |
| `is_observability_io_logging_enabled` | `boolean` | No |  |
| `name` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `updated_at` | `any` | Yes |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:UpdateWorkspace():create({
  created_at = --[[ string ]],
  created_by = --[[ any ]],
  data = --[[ any ]],
  id = --[[ string ]],
  name = --[[ string ]],
  slug = --[[ string ]],
  updated_at = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:UpdateWorkspace():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:UpdateWorkspace():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateWorkspaceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UpsertWorkspaceBudgetEntity

```lua
local upsert_workspace_budget = client:UpsertWorkspaceBudget(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any` | Yes |  |
| `limit_usd` | `number` | Yes |  |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:UpsertWorkspaceBudget():update({
  id = "id",
  workspace_id = "workspace_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpsertWorkspaceBudgetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserEntity

```lua
local user = client:User(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VersionEntity

```lua
local version = client:Version(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VersionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VideoEntity

```lua
local video = client:Video(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `string` | No |  |
| `callback_url` | `string` | No |  |
| `duration` | `number` | No |  |
| `error` | `string` | No |  |
| `frame_image` | `table` | No |  |
| `generate_audio` | `boolean` | No |  |
| `generation_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `input_reference` | `table` | No |  |
| `model` | `string` | Yes |  |
| `polling_url` | `string` | Yes |  |
| `prompt` | `string` | No |  |
| `provider` | `table` | No |  |
| `resolution` | `string` | No |  |
| `seed` | `number` | No |  |
| `size` | `string` | No |  |
| `status` | `string` | Yes |  |
| `unsigned_url` | `table` | No |  |
| `usage` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Video():create({
  id = --[[ string ]],
  model = --[[ string ]],
  polling_url = --[[ string ]],
  status = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Video():load({ id = "video_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VideoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VideoGenerationEntity

```lua
local video_generation = client:VideoGeneration(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:VideoGeneration():load({ id = "video_generation_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VideoGenerationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VideoModelsListEntity

```lua
local video_models_list = client:VideoModelsList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_passthrough_parameter` | `table` | Yes |  |
| `canonical_slug` | `string` | Yes |  |
| `created` | `number` | Yes |  |
| `description` | `string` | No |  |
| `generate_audio` | `any` | Yes |  |
| `hugging_face_id` | `any` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `pricing_skus` | `any` | No |  |
| `seed` | `any` | Yes |  |
| `supported_aspect_ratio` | `any` | Yes |  |
| `supported_duration` | `any` | Yes |  |
| `supported_frame_image` | `any` | Yes |  |
| `supported_resolution` | `any` | Yes |  |
| `supported_size` | `any` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:VideoModelsList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VideoModelsListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkspaceEntity

```lua
local workspace = client:Workspace(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Workspace():load({ id = "workspace_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Workspace():remove({ id = "workspace_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkspaceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkspaceBudgetEntity

```lua
local workspace_budget = client:WorkspaceBudget(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:WorkspaceBudget():remove({ id = "id", workspace_id = "workspace_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkspaceBudgetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZdrEntity

```lua
local zdr = client:Zdr(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZdrEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

