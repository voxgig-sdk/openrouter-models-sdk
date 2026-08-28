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
| `byok_usage_inference` | `number` | Yes | BYOK inference cost in USD (external credits spent) |
| `completion_tokens` | `number` | Yes | Total completion tokens generated |
| `date` | `string` | Yes | Date of the activity (YYYY-MM-DD format) |
| `endpoint_id` | `string` | Yes | Unique identifier for the endpoint |
| `model` | `string` | Yes | Model slug (e.g., "openai/gpt-4.1") |
| `model_permaslug` | `string` | Yes | Model permaslug (e.g., "openai/gpt-4.1-2025-04-14") |
| `prompt_tokens` | `number` | Yes | Total prompt tokens used |
| `provider_name` | `string` | Yes | Name of the provider serving this endpoint |
| `reasoning_tokens` | `number` | Yes | Total reasoning tokens used |
| `requests` | `number` | Yes | Number of requests made |
| `usage` | `number` | Yes | Total cost in USD (OpenRouter credits spent) |

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
| `byok_usage` | `number` | Yes | Total external BYOK usage (in USD) for the API key |
| `byok_usage_daily` | `number` | Yes | External BYOK usage (in USD) for the current UTC day |
| `byok_usage_monthly` | `number` | Yes | External BYOK usage (in USD) for current UTC month |
| `byok_usage_weekly` | `number` | Yes | External BYOK usage (in USD) for the current UTC week (Monday-Sunday) |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the API key was created |
| `creator_user_id` | `string|nil` | Yes | The user ID of the key creator. |
| `disabled` | `boolean` | Yes | Whether the API key is disabled |
| `expires_at` | `string|nil` | No | ISO 8601 UTC timestamp when the API key expires, or null if no expiration |
| `hash` | `string` | Yes | Unique hash identifier for the API key |
| `id` | `string` | No |  |
| `include_byok_in_limit` | `boolean` | Yes | Whether to include external BYOK usage in the credit limit |
| `is_free_tier` | `boolean` | Yes | Whether this is a free tier API key |
| `is_management_key` | `boolean` | Yes | Whether this is a management key |
| `is_provisioning_key` | `boolean` | Yes | Whether this is a management key |
| `label` | `string` | Yes | Human-readable label for the API key |
| `limit` | `number|nil` | Yes | Spending limit for the API key in USD |
| `limit_remaining` | `number|nil` | Yes | Remaining spending limit in USD |
| `limit_reset` | `string|nil` | Yes | Type of limit reset for the API key |
| `name` | `string` | Yes | Name of the API key |
| `rate_limit` | `table` | Yes | Legacy rate limit information about a key. |
| `updated_at` | `string|nil` | Yes | ISO 8601 timestamp of when the API key was last updated |
| `usage` | `number` | Yes | Total OpenRouter credit usage (in USD) for the API key |
| `usage_daily` | `number` | Yes | OpenRouter credit usage (in USD) for the current UTC day |
| `usage_monthly` | `number` | Yes | OpenRouter credit usage (in USD) for the current UTC month |
| `usage_weekly` | `number` | Yes | OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday) |
| `workspace_id` | `string` | Yes | The workspace ID this API key belongs to. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiKey():create({
  byok_usage = --[[ number ]],
  byok_usage_daily = --[[ number ]],
  byok_usage_monthly = --[[ number ]],
  byok_usage_weekly = --[[ number ]],
  created_at = --[[ string ]],
  creator_user_id = --[[ string|nil ]],
  disabled = --[[ boolean ]],
  hash = --[[ string ]],
  include_byok_in_limit = --[[ boolean ]],
  is_free_tier = --[[ boolean ]],
  is_management_key = --[[ boolean ]],
  is_provisioning_key = --[[ boolean ]],
  label = --[[ string ]],
  limit = --[[ number|nil ]],
  limit_remaining = --[[ number|nil ]],
  limit_reset = --[[ string|nil ]],
  name = --[[ string ]],
  rate_limit = --[[ table ]],
  updated_at = --[[ string|nil ]],
  usage = --[[ number ]],
  usage_daily = --[[ number ]],
  usage_monthly = --[[ number ]],
  usage_weekly = --[[ number ]],
  workspace_id = --[[ string ]],
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
| `app_id` | `number` | Yes | Stable numeric identifier of the app on OpenRouter. |
| `app_name` | `string` | Yes | Public display name of the app. |
| `rank` | `number` | Yes | 1-based position of the app within this response, per the requested `sort`. |
| `total_requests` | `number` | Yes | Number of requests attributed to the app inside the date window. |
| `total_tokens` | `string` | Yes | Sum of `prompt_tokens + completion_tokens` attributed to the app inside the date window, returned as a decimal string so 64-bit values are not truncated. |

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
| `cachedAt` | `number` | No |  |
| `classifier_dimensions` | `table` | Yes | Group results by custom classifier tags, breaking down metrics by the specified dimension values. |
| `classifier_filters` | `table` | Yes | Filter results to generations with specific classifier tag values. |
| `data` | `table` | Yes |  |
| `dimensions` | `table` | Yes |  |
| `filters` | `table` | No |  |
| `granularities` | `table` | Yes |  |
| `granularity` | `string` | No | Time granularity |
| `group_limit` | `number` | No | Maximum rows per distinct combination of dimensions. |
| `limit` | `number` | No | Maximum total rows returned. |
| `metadata` | `table` | Yes |  |
| `metrics` | `table` | Yes |  |
| `operators` | `table` | Yes |  |
| `order_by` | `table` | Yes |  |
| `time_range` | `table` | Yes |  |
| `warnings` | `table` | No | Warnings about filter resolution issues (e.g. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BetaAnalytics():create({
  classifier_dimensions = --[[ table ]],
  classifier_filters = --[[ table ]],
  data = --[[ table ]],
  dimensions = --[[ table ]],
  granularities = --[[ table ]],
  metadata = --[[ table ]],
  metrics = --[[ table ]],
  operators = --[[ table ]],
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
| `added_count` | `number` | Yes | Number of workspace memberships created or updated |
| `data` | `table` | Yes | List of added workspace memberships |
| `user_ids` | `table` | Yes | List of user IDs to add to the workspace. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BulkAddWorkspaceMember():create({
  workspace_id = --[[ string ]],
  added_count = --[[ number ]],
  data = --[[ table ]],
  user_ids = --[[ table ]],
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
| `assigned_count` | `number` | Yes | Number of keys successfully assigned |
| `key_hashes` | `table` | Yes | Array of API key hashes to assign to the guardrail |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BulkAssignKey():create({
  guardrail_id = --[[ string ]],
  assigned_count = --[[ number ]],
  key_hashes = --[[ table ]],
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
| `assigned_count` | `number` | Yes | Number of members successfully assigned |
| `member_user_ids` | `table` | Yes | Array of member user IDs to assign to the guardrail |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BulkAssignMember():create({
  guardrail_id = --[[ string ]],
  assigned_count = --[[ number ]],
  member_user_ids = --[[ table ]],
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
| `removed_count` | `number` | Yes | Number of members removed |
| `user_ids` | `table` | Yes | List of user IDs to remove from the workspace |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BulkRemoveWorkspaceMember():create({
  workspace_id = --[[ string ]],
  removed_count = --[[ number ]],
  user_ids = --[[ table ]],
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
| `key_hashes` | `table` | Yes | Array of API key hashes to unassign from the guardrail |
| `unassigned_count` | `number` | Yes | Number of keys successfully unassigned |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BulkUnassignKey():create({
  guardrail_id = --[[ string ]],
  key_hashes = --[[ table ]],
  unassigned_count = --[[ number ]],
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
| `member_user_ids` | `table` | Yes | Array of member user IDs to unassign from the guardrail |
| `unassigned_count` | `number` | Yes | Number of members successfully unassigned |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BulkUnassignMember():create({
  guardrail_id = --[[ string ]],
  member_user_ids = --[[ table ]],
  unassigned_count = --[[ number ]],
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
| `allowed_api_key_hashes` | `table|nil` | Yes | Optional allowlist of OpenRouter API key hashes (`api_keys.hash`) that may use this credential. |
| `allowed_models` | `table|nil` | Yes | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `table|nil` | Yes | Optional allowlist of user IDs that may use this credential. |
| `created_at` | `string` | Yes | ISO timestamp of when the credential was created. |
| `disabled` | `boolean` | Yes | Whether this credential is currently disabled. |
| `id` | `string` | Yes | Stable public identifier for this BYOK credential. |
| `is_fallback` | `boolean` | Yes | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `string` | Yes | The raw provider API key or credential. |
| `label` | `string` | Yes | Short masked snippet of the key (e.g. |
| `name` | `string|nil` | No | Optional human-readable name for the credential. |
| `provider` | `string` | Yes | The upstream provider this credential authenticates against, as a lowercase slug (e.g. |
| `sort_order` | `number` | Yes | Position within the provider — credentials are tried in ascending sort order. |
| `workspace_id` | `string` | Yes | ID of the workspace this credential belongs to. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Byok():create({
  allowed_api_key_hashes = --[[ table|nil ]],
  allowed_models = --[[ table|nil ]],
  allowed_user_ids = --[[ table|nil ]],
  created_at = --[[ string ]],
  disabled = --[[ boolean ]],
  id = --[[ string ]],
  is_fallback = --[[ boolean ]],
  key = --[[ string ]],
  label = --[[ string ]],
  provider = --[[ string ]],
  sort_order = --[[ number ]],
  workspace_id = --[[ string ]],
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
| `cache_control` | `table` | Yes | Enable automatic prompt caching. |
| `choices` | `table` | Yes | List of completion choices |
| `created` | `number` | Yes | Unix timestamp of creation |
| `debug` | `table` | No | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `number|nil` | No | Frequency penalty (-2.0 to 2.0) |
| `id` | `string` | Yes | Unique completion identifier |
| `image_config` | `table` | No | Provider-specific image configuration options. |
| `logit_bias` | `table|nil` | No | Token logit bias adjustments |
| `logprobs` | `boolean|nil` | No | Return log probabilities |
| `max_completion_tokens` | `number|nil` | No | Maximum tokens in completion |
| `max_tokens` | `number|nil` | No | Maximum tokens (deprecated, use max_completion_tokens). |
| `messages` | `table` | Yes | List of messages for the conversation |
| `metadata` | `table` | No | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `number|nil` | No | Minimum probability threshold relative to the most likely token. |
| `modalities` | `table` | No | Output modalities for the response. |
| `model` | `string` | Yes | Model used for completion |
| `models` | `table` | No | Models to use for completion |
| `object` | `string` | Yes |  |
| `openrouter_metadata` | `table` | Yes |  |
| `parallel_tool_calls` | `boolean|nil` | No | Whether to enable parallel function calling during tool use. |
| `plugins` | `table` | No | Plugins you want to enable for this request, including their settings. |
| `prediction` | `table|nil` | Yes | Static predicted output content. |
| `presence_penalty` | `number|nil` | No | Presence penalty (-2.0 to 2.0) |
| `prompt_cache_key` | `string|nil` | No |  |
| `prompt_cache_options` | `table|nil` | Yes | Request-level prompt-cache controls. |
| `provider` | `table|nil` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `table` | No | Configuration options for reasoning models |
| `reasoning_effort` | `string|nil` | No | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `number|nil` | No | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `any` | No | Response format configuration |
| `route` | `string|nil` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `seed` | `number|nil` | No | Random seed for deterministic outputs |
| `service_tier` | `string|nil` | No | The service tier used by the upstream provider for this request |
| `session_id` | `string` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop` | `any` | No | Stop sequences (up to 4) |
| `stop_server_tools_when` | `table` | No | Stop conditions for the server-tool agent loop. |
| `stream` | `boolean` | No | Enable streaming response |
| `stream_options` | `table|nil` | No | Streaming configuration options |
| `system_fingerprint` | `string|nil` | Yes | System fingerprint |
| `temperature` | `number|nil` | No | Sampling temperature (0-2) |
| `tool_choice` | `any` | No | Tool choice configuration |
| `tools` | `table` | No | Available tools for function calling |
| `top_a` | `number|nil` | No | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `number|nil` | No | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `number|nil` | No | Number of top log probabilities to return (0-20) |
| `top_p` | `number|nil` | No | Nucleus sampling parameter (0-1) |
| `trace` | `table` | No | Metadata for observability and tracing. |
| `usage` | `table` | Yes | Token usage statistics |
| `user` | `string` | No | Unique user identifier |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ChatResult():create({
  cache_control = --[[ table ]],
  choices = --[[ table ]],
  created = --[[ number ]],
  id = --[[ string ]],
  messages = --[[ table ]],
  model = --[[ string ]],
  object = --[[ string ]],
  openrouter_metadata = --[[ table ]],
  prediction = --[[ table|nil ]],
  prompt_cache_options = --[[ table|nil ]],
  system_fingerprint = --[[ string|nil ]],
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
| `api_key_hashes` | `table|nil` | No | Optional allowlist of OpenRouter API key hashes whose traffic is forwarded. |
| `config` | `table` | Yes | Provider-specific configuration. |
| `enabled` | `boolean` | No | Whether this destination should be enabled immediately. |
| `filter_rules` | `table|nil` | Yes | Optional structured filter rules controlling which events are forwarded. |
| `name` | `string` | Yes | Human-readable name for the destination. |
| `privacy_mode` | `boolean` | No | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `number` | No | Sampling rate between 0.0001 and 1 (1 = 100%). |
| `type` | `string` | Yes | The destination type. |
| `workspace_id` | `string` | No | Optional workspace ID. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CreateObservabilityDestination():create({
  config = --[[ table ]],
  filter_rules = --[[ table|nil ]],
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
| `background` | `boolean|nil` | No |  |
| `cache_control` | `table` | Yes | Enable automatic prompt caching. |
| `context_management` | `table|nil` | No |  |
| `debug` | `table` | No | Debug options for inspecting request transformations (streaming only) |
| `fallbacks` | `table|nil` | No | Fallback models to try if the primary model fails or refuses, in order. |
| `frequency_penalty` | `number|nil` | No | Frequency penalty (-2.0 to 2.0) |
| `image_config` | `table` | No | Provider-specific image configuration options. |
| `include` | `table|nil` | No |  |
| `input` | `any` | No | Input for a response request - can be a string or array of items |
| `instructions` | `string|nil` | No |  |
| `logit_bias` | `table|nil` | No | Token logit bias adjustments |
| `logprobs` | `boolean|nil` | No | Return log probabilities |
| `max_completion_tokens` | `number|nil` | No | Maximum tokens in completion |
| `max_output_tokens` | `number|nil` | No |  |
| `max_tokens` | `number|nil` | No | Maximum tokens (deprecated, use max_completion_tokens). |
| `max_tool_calls` | `number|nil` | No |  |
| `messages` | `table` | Yes | List of messages for the conversation |
| `metadata` | `table` | No | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `number|nil` | No | Minimum probability threshold relative to the most likely token. |
| `modalities` | `table` | No | Output modalities for the response. |
| `model` | `string` | No | Model to use for completion |
| `models` | `table` | No | Models to use for completion |
| `output_config` | `table` | No | Configuration for controlling output behavior. |
| `parallel_tool_calls` | `boolean|nil` | No | Whether to enable parallel function calling during tool use. |
| `plugins` | `table` | No | Plugins you want to enable for this request, including their settings. |
| `prediction` | `table|nil` | Yes | Static predicted output content. |
| `presence_penalty` | `number|nil` | No | Presence penalty (-2.0 to 2.0) |
| `previous_response_id` | `string` | No | Not supported. |
| `prompt` | `table|nil` | Yes |  |
| `prompt_cache_key` | `string|nil` | No |  |
| `prompt_cache_options` | `table|nil` | Yes | Request-level prompt-cache controls. |
| `provider` | `table|nil` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `table` | No | Configuration options for reasoning models |
| `reasoning_effort` | `string|nil` | No | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `number|nil` | No | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `any` | No | Response format configuration |
| `route` | `string|nil` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `string|nil` | No |  |
| `seed` | `number|nil` | No | Random seed for deterministic outputs |
| `service_tier` | `string|nil` | No | The service tier to use for processing this request. |
| `session_id` | `string` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `speed` | `any` | No |  |
| `stop` | `any` | No | Stop sequences (up to 4) |
| `stop_sequences` | `table` | No |  |
| `stop_server_tools_when` | `table` | No | Stop conditions for the server-tool agent loop. |
| `store` | `boolean` | No |  |
| `stream` | `boolean` | No | Enable streaming response |
| `stream_options` | `table|nil` | No | Streaming configuration options |
| `system` | `any` | No |  |
| `temperature` | `number|nil` | No | Sampling temperature (0-2) |
| `text` | `any` | No | Text output configuration including format and verbosity |
| `thinking` | `any` | No |  |
| `tool_choice` | `any` | No | Tool choice configuration |
| `tools` | `table` | No | Available tools for function calling |
| `top_a` | `number|nil` | No | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `number|nil` | No | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `number|nil` | No | Number of top log probabilities to return (0-20) |
| `top_p` | `number|nil` | No | Nucleus sampling parameter (0-1) |
| `trace` | `table` | No | Metadata for observability and tracing. |
| `truncation` | `string|nil` | No |  |
| `user` | `string` | No | Unique user identifier |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `background` | - |
| `cache_control` | - |
| `context_management` | - |
| `debug` | - |
| `fallbacks` | - |
| `frequency_penalty` | - |
| `image_config` | - |
| `include` | - |
| `input` | - |
| `instructions` | - |
| `logit_bias` | - |
| `logprobs` | - |
| `max_completion_tokens` | - |
| `max_output_tokens` | - |
| `max_tokens` | - |
| `max_tool_calls` | - |
| `messages` | - |
| `metadata` | - |
| `min_p` | - |
| `modalities` | - |
| `model` | Yes |
| `models` | - |
| `output_config` | - |
| `parallel_tool_calls` | - |
| `plugins` | - |
| `prediction` | - |
| `presence_penalty` | - |
| `previous_response_id` | - |
| `prompt` | - |
| `prompt_cache_key` | - |
| `prompt_cache_options` | - |
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
| `stop_sequences` | - |
| `stop_server_tools_when` | - |
| `store` | - |
| `stream` | - |
| `stream_options` | - |
| `system` | - |
| `temperature` | - |
| `text` | - |
| `thinking` | - |
| `tool_choice` | - |
| `tools` | - |
| `top_a` | - |
| `top_k` | - |
| `top_logprobs` | - |
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
  cache_control = --[[ table ]],
  messages = --[[ table ]],
  prediction = --[[ table|nil ]],
  prompt = --[[ table|nil ]],
  prompt_cache_options = --[[ table|nil ]],
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
| `total_credits` | `number` | Yes | Total credits purchased |
| `total_usage` | `number` | Yes | Total credits used |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Credit():create({
  total_credits = --[[ number ]],
  total_usage = --[[ number ]],
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
| `data` | `table` | Yes | List of embedding objects |
| `dimensions` | `number` | No | The number of dimensions for the output embeddings |
| `encoding_format` | `string` | No | The format of the output embeddings |
| `id` | `string` | No | Unique identifier for the embeddings response |
| `input` | `any` | Yes | Text, token, or multimodal input(s) to embed |
| `input_type` | `string` | No | The type of input (e.g. |
| `model` | `string` | Yes | The model used for embeddings |
| `object` | `string` | Yes |  |
| `provider` | `any` | No |  |
| `usage` | `table` | Yes | Token usage statistics |
| `user` | `string` | No | A unique identifier for the end-user |

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
| `architecture` | `any` | Yes | Model architecture information |
| `benchmarks` | `table` | Yes | Third-party benchmark rankings for this model. |
| `canonical_slug` | `string` | Yes | Canonical slug for the model |
| `context_length` | `number|nil` | Yes | Maximum context length in tokens |
| `created` | `number` | Yes | Unix timestamp of when the model was created |
| `default_parameters` | `table|nil` | Yes | Default parameters for this model |
| `description` | `string` | Yes | Description of the model |
| `endpoints` | `table` | Yes | List of available endpoints for this model |
| `expiration_date` | `string|nil` | No | The date after which the model may be removed. |
| `hugging_face_id` | `string|nil` | No | Hugging Face model identifier, if applicable |
| `id` | `string` | Yes | Unique identifier for the model |
| `knowledge_cutoff` | `string|nil` | No | The date up to which the model was trained on data. |
| `latency_last_30m` | `table|nil` | Yes | Latency percentiles in milliseconds over the last 30 minutes. |
| `links` | `table` | Yes | Related API endpoints and resources for this model. |
| `max_completion_tokens` | `number|nil` | Yes |  |
| `max_prompt_tokens` | `number|nil` | Yes |  |
| `model_id` | `string` | Yes | The unique identifier for the model (permaslug) |
| `model_name` | `string` | Yes |  |
| `name` | `string` | Yes | Display name of the model |
| `per_request_limits` | `table|nil` | Yes | Per-request token limits |
| `pricing` | `table` | Yes | Pricing information for the model |
| `provider_name` | `string` | Yes |  |
| `quantization` | `any` | Yes |  |
| `reasoning` | `table` | Yes | Reasoning effort configuration. |
| `status` | `number` | No |  |
| `supported_parameters` | `table` | Yes | List of supported parameters for this model |
| `supported_voices` | `table|nil` | Yes | List of supported voice identifiers for TTS models. |
| `supports_implicit_caching` | `boolean` | Yes |  |
| `tag` | `string` | Yes |  |
| `throughput_last_30m` | `any` | Yes |  |
| `top_provider` | `table` | Yes | Information about the top provider for this model |
| `uptime_last_1d` | `number|nil` | Yes | Uptime percentage over the last 1 day, calculated as successful requests / (successful + error requests) * 100. |
| `uptime_last_30m` | `number|nil` | Yes |  |
| `uptime_last_5m` | `number|nil` | Yes | Uptime percentage over the last 5 minutes, calculated as successful requests / (successful + error requests) * 100. |

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
| `latency_last_30m` | - | - |
| `links` | - | - |
| `max_completion_tokens` | - | - |
| `max_prompt_tokens` | - | - |
| `model_id` | - | - |
| `model_name` | - | - |
| `name` | - | - |
| `per_request_limits` | - | - |
| `pricing` | - | - |
| `provider_name` | - | - |
| `quantization` | - | - |
| `reasoning` | - | - |
| `status` | - | - |
| `supported_parameters` | - | - |
| `supported_voices` | - | - |
| `supports_implicit_caching` | - | - |
| `tag` | - | - |
| `throughput_last_30m` | - | - |
| `top_provider` | - | - |
| `uptime_last_1d` | - | - |
| `uptime_last_30m` | - | - |
| `uptime_last_5m` | - | - |

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
| `size_bytes` | `number` | Yes |  |
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
  size_bytes = --[[ number ]],
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
| `api_type` | `string|nil` | Yes | Type of API used for the generation |
| `app_id` | `number|nil` | Yes | ID of the app that made the request |
| `cache_discount` | `number|nil` | Yes | Discount applied due to caching |
| `cancelled` | `boolean|nil` | Yes | Whether the generation was cancelled |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the generation was created |
| `data_region` | `string` | Yes | The data region this generation was routed through. |
| `external_user` | `string|nil` | Yes | External user identifier |
| `finish_reason` | `string|nil` | Yes | Reason the generation finished |
| `generation_time` | `number|nil` | Yes | Time taken for generation in milliseconds |
| `http_referer` | `string|nil` | Yes | Referer header from the request |
| `id` | `string` | Yes | Unique identifier for the generation |
| `is_byok` | `boolean` | Yes | Whether this used bring-your-own-key |
| `latency` | `number|nil` | Yes | Total latency in milliseconds |
| `model` | `string` | Yes | Model used for the generation |
| `moderation_latency` | `number|nil` | Yes | Moderation latency in milliseconds |
| `native_finish_reason` | `string|nil` | Yes | Native finish reason as reported by provider |
| `native_tokens_cached` | `number|nil` | Yes | Native cached tokens as reported by provider |
| `native_tokens_completion` | `number|nil` | Yes | Native completion tokens as reported by provider |
| `native_tokens_completion_images` | `number|nil` | Yes | Native completion image tokens as reported by provider |
| `native_tokens_prompt` | `number|nil` | Yes | Native prompt tokens as reported by provider |
| `native_tokens_reasoning` | `number|nil` | Yes | Native reasoning tokens as reported by provider |
| `num_fetches` | `number|nil` | Yes | Number of web fetches performed |
| `num_input_audio_prompt` | `number|nil` | Yes | Number of audio inputs in the prompt |
| `num_media_completion` | `number|nil` | Yes | Number of media items in the completion |
| `num_media_prompt` | `number|nil` | Yes | Number of media items in the prompt |
| `num_search_results` | `number|nil` | Yes | Number of search results included |
| `origin` | `string` | Yes | Origin URL of the request |
| `preset_id` | `string|nil` | Yes | ID of the preset used for this generation, null if no preset was used |
| `provider_name` | `string|nil` | Yes | Name of the provider that served the request |
| `provider_responses` | `table|nil` | Yes | List of provider responses for this generation, including fallback attempts |
| `request_id` | `string|nil` | No | Unique identifier grouping all generations from a single API request |
| `response_cache_source_id` | `string|nil` | No | If this generation was served from response cache, contains the original generation ID. |
| `router` | `string|nil` | Yes | Router used for the request (e.g., openrouter/auto) |
| `service_tier` | `string|nil` | Yes | Service tier the upstream provider reported running this request on, or null if it did not report one. |
| `session_id` | `string|nil` | No | Session identifier grouping multiple generations in the same session |
| `streamed` | `boolean|nil` | Yes | Whether the response was streamed |
| `tokens_completion` | `number|nil` | Yes | Number of tokens in the completion |
| `tokens_prompt` | `number|nil` | Yes | Number of tokens in the prompt |
| `total_cost` | `number` | Yes | Total cost of the generation in USD |
| `upstream_id` | `string|nil` | Yes | Upstream provider's identifier for this generation |
| `upstream_inference_cost` | `number|nil` | Yes | Cost charged by the upstream provider |
| `usage` | `number` | Yes | Usage amount in USD |
| `user_agent` | `string|nil` | Yes | User-Agent header from the request |
| `web_search_engine` | `string|nil` | Yes | The resolved web search engine used for this generation (e.g. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Generation():load({ id = "generation_id" })
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
| `input` | `any` | Yes | The input to the generation — either a prompt string or an array of messages |
| `output` | `table` | Yes | The output from the generation |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GenerationContent():load({ id = "generation_content_id" })
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
| `allowed_models` | `table|nil` | No | Array of model canonical_slugs (immutable identifiers) |
| `allowed_providers` | `table|nil` | No | List of allowed provider IDs |
| `content_filter_builtins` | `table|nil` | No | Builtin content filters applied to requests. |
| `content_filters` | `table|nil` | No | Custom regex content filters applied to request messages |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the guardrail was created |
| `description` | `string|nil` | No | Description of the guardrail |
| `enforce_zdr` | `boolean|nil` | No | Deprecated. |
| `enforce_zdr_anthropic` | `boolean|nil` | No | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `boolean|nil` | No | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `boolean|nil` | No | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `boolean|nil` | No | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `boolean|nil` | No | Whether to enforce zero data retention for xAI models. |
| `id` | `string` | Yes | Unique identifier for the guardrail |
| `ignored_models` | `table|nil` | No | Array of model canonical_slugs to exclude from routing |
| `ignored_providers` | `table|nil` | No | List of provider IDs to exclude from routing |
| `limit_usd` | `number|nil` | No | Spending limit in USD |
| `name` | `string` | Yes | Name of the guardrail |
| `reset_interval` | `string|nil` | No | Interval at which the limit resets (daily, weekly, monthly) |
| `updated_at` | `string|nil` | No | ISO 8601 timestamp of when the guardrail was last updated |
| `workspace_id` | `string` | Yes | The workspace ID this guardrail belongs to. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Guardrail():create({
  created_at = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  workspace_id = --[[ string ]],
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
| `aspect_ratio` | `string` | No | Normalized aspect ratio of the generated image. |
| `background` | `string` | No | Background treatment. |
| `created` | `number` | Yes | Unix timestamp (seconds) when the image was generated |
| `data` | `table` | Yes | Generated images |
| `input_references` | `table` | No | Reference images to guide image-to-image generation, as base64 data URLs or HTTP(S) URLs. |
| `model` | `string` | Yes | The image generation model to use |
| `n` | `number` | No | Number of images to generate (1-10). |
| `output_compression` | `number` | No | Compression level (0-100) for webp/jpeg output. |
| `output_format` | `string` | No | Encoding of the returned image bytes. |
| `prompt` | `string` | Yes | Text description of the desired image |
| `provider` | `table` | No | Provider routing preferences and provider-specific passthrough configuration. |
| `quality` | `string` | No | Rendering quality. |
| `resolution` | `string` | No | Normalized resolution tier of the generated image. |
| `seed` | `number` | No | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `string` | No | Optional. |
| `stream` | `boolean` | No | If true, partial images are streamed as SSE events as they become available. |
| `usage` | `table` | Yes | Token and cost usage for the image generation request, when available |

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
| `allowed_passthrough_parameters` | `table` | Yes | Provider-specific options accepted under provider.options[provider_slug]. |
| `pricing` | `table` | Yes | Billable pricing lines for this endpoint. |
| `provider_name` | `string` | Yes | Provider display name |
| `provider_slug` | `string` | Yes | Provider slug |
| `provider_tag` | `string|nil` | Yes | Provider tag for request-side selection |
| `supported_parameters` | `any` | Yes |  |
| `supports_streaming` | `boolean` | Yes | Whether this endpoint supports native SSE streaming (`stream: true` in the request). |

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
| `created` | `number` | Yes | Unix timestamp (seconds) of when the model was created |
| `description` | `string` | Yes |  |
| `endpoints` | `string` | Yes | Relative URL to the full per-endpoint records for this model |
| `id` | `string` | Yes | Model slug |
| `name` | `string` | Yes | Display name |
| `supported_parameters` | `table` | Yes | Union of supported parameters across every endpoint of this model. |
| `supports_streaming` | `boolean` | Yes | Whether any endpoint of this model supports native SSE streaming on the dedicated Image API (i.e. |

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
| `assigned_by` | `string|nil` | Yes | User ID of who made the assignment |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `string` | Yes | ID of the guardrail |
| `id` | `string` | Yes | Unique identifier for the assignment |
| `key_hash` | `string` | Yes | Hash of the assigned API key |
| `key_label` | `string` | Yes | Label of the API key |
| `key_name` | `string` | Yes | Name of the API key |

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
| `assigned_by` | `string|nil` | Yes | User ID of who made the assignment |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `string` | Yes | ID of the guardrail |
| `id` | `string` | Yes | Unique identifier for the assignment |
| `organization_id` | `string` | Yes | Organization ID |
| `user_id` | `string` | Yes | Clerk user ID of the assigned member |

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
| `data` | `table` | Yes | List of observability destinations. |
| `total_count` | `number` | Yes | Total number of destinations matching the filters. |

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
| `system_prompt` | `string|nil` | Yes |  |
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
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the budget was created |
| `id` | `string` | Yes | Unique identifier for the budget |
| `limit_usd` | `number` | Yes | Spending limit in USD for this interval |
| `reset_interval` | `string|nil` | Yes | Interval at which spend resets. |
| `updated_at` | `string` | Yes | ISO 8601 timestamp of when the budget was last updated |
| `workspace_id` | `string` | Yes | ID of the workspace the budget belongs to |

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
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the membership was created |
| `id` | `string` | Yes | Unique identifier for the workspace membership |
| `role` | `string` | Yes | Role of the member in the workspace |
| `user_id` | `string` | Yes | Clerk user ID of the member |
| `workspace_id` | `string` | Yes | ID of the workspace |

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
| `cache_control` | `table` | Yes | Enable automatic prompt caching. |
| `context_management` | `table|nil` | No |  |
| `fallbacks` | `table|nil` | No | Fallback models to try if the primary model fails or refuses, in order. |
| `max_tokens` | `number` | No |  |
| `messages` | `table|nil` | Yes |  |
| `metadata` | `table` | No |  |
| `model` | `string` | Yes |  |
| `models` | `table` | No |  |
| `output_config` | `table` | No | Configuration for controlling output behavior. |
| `plugins` | `table` | No | Plugins you want to enable for this request, including their settings. |
| `provider` | `table|nil` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `route` | `string|nil` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `service_tier` | `string` | No |  |
| `session_id` | `string` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `speed` | `any` | No |  |
| `stop_sequences` | `table` | No |  |
| `stop_server_tools_when` | `table` | No | Stop conditions for the server-tool agent loop. |
| `stream` | `boolean` | No |  |
| `system` | `any` | No |  |
| `temperature` | `number` | No |  |
| `thinking` | `any` | No |  |
| `tool_choice` | `any` | No |  |
| `tools` | `table` | No |  |
| `top_k` | `number` | No |  |
| `top_p` | `number` | No |  |
| `trace` | `table` | No | Metadata for observability and tracing. |
| `user` | `string` | No | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Message():create({
  cache_control = --[[ table ]],
  messages = --[[ table|nil ]],
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
| `architecture` | `table` | Yes | Model architecture information |
| `benchmarks` | `table` | Yes | Third-party benchmark rankings for this model. |
| `canonical_slug` | `string` | Yes | Canonical slug for the model |
| `context_length` | `number|nil` | Yes | Maximum context length in tokens |
| `created` | `number` | Yes | Unix timestamp of when the model was created |
| `default_parameters` | `table|nil` | Yes | Default parameters for this model |
| `description` | `string` | No | Description of the model |
| `expiration_date` | `string|nil` | No | The date after which the model may be removed. |
| `hugging_face_id` | `string|nil` | No | Hugging Face model identifier, if applicable |
| `id` | `string` | Yes | Unique identifier for the model |
| `knowledge_cutoff` | `string|nil` | No | The date up to which the model was trained on data. |
| `links` | `table` | Yes | Related API endpoints and resources for this model. |
| `name` | `string` | Yes | Display name of the model |
| `per_request_limits` | `table|nil` | Yes | Per-request token limits |
| `pricing` | `table` | Yes | Pricing information for the model |
| `reasoning` | `table` | Yes | Reasoning effort configuration. |
| `supported_parameters` | `table` | Yes | List of supported parameters for this model |
| `supported_voices` | `table|nil` | Yes | List of supported voice identifiers for TTS models. |
| `top_provider` | `table` | Yes | Information about the top provider for this model |

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
| `count` | `number` | Yes | Total number of available models |

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
| `architecture` | `table` | Yes | Model architecture information |
| `benchmarks` | `table` | Yes | Third-party benchmark rankings for this model. |
| `canonical_slug` | `string` | Yes | Canonical slug for the model |
| `context_length` | `number|nil` | Yes | Maximum context length in tokens |
| `created` | `number` | Yes | Unix timestamp of when the model was created |
| `default_parameters` | `table|nil` | Yes | Default parameters for this model |
| `description` | `string` | No | Description of the model |
| `expiration_date` | `string|nil` | No | The date after which the model may be removed. |
| `hugging_face_id` | `string|nil` | No | Hugging Face model identifier, if applicable |
| `id` | `string` | Yes | Unique identifier for the model |
| `knowledge_cutoff` | `string|nil` | No | The date up to which the model was trained on data. |
| `links` | `table` | Yes | Related API endpoints and resources for this model. |
| `name` | `string` | Yes | Display name of the model |
| `per_request_limits` | `table|nil` | Yes | Per-request token limits |
| `pricing` | `table` | Yes | Pricing information for the model |
| `reasoning` | `table` | Yes | Reasoning effort configuration. |
| `supported_parameters` | `table` | Yes | List of supported parameters for this model |
| `supported_voices` | `table|nil` | Yes | List of supported voice identifiers for TTS models. |
| `top_provider` | `table` | Yes | Information about the top provider for this model |

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
| `app_id` | `number` | Yes | The application ID associated with this auth code |
| `callback_url` | `string` | Yes | The callback URL to redirect to after authorization. |
| `code` | `string` | Yes | The authorization code received from the OAuth redirect |
| `code_challenge` | `string` | No | PKCE code challenge for enhanced security |
| `code_challenge_method` | `string|nil` | No | The method used to generate the code challenge |
| `code_verifier` | `string` | No | The code verifier if code_challenge was used in the authorization request |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the auth code was created |
| `expires_at` | `string|nil` | No | Optional expiration time for the API key to be created |
| `id` | `string` | Yes | The authorization code ID to use in the exchange request |
| `key` | `string` | Yes | The API key to use for OpenRouter requests |
| `key_label` | `string` | No | Optional custom label for the API key. |
| `limit` | `number` | No | Credit limit for the API key to be created |
| `spawn_agent` | `string` | No | Agent identifier for spawn telemetry |
| `spawn_cloud` | `string` | No | Cloud identifier for spawn telemetry |
| `usage_limit_type` | `string` | No | Optional credit limit reset interval. |
| `user_id` | `string|nil` | Yes | User ID associated with the API key |
| `workspace_id` | `string` | No | Optional workspace ID to associate the API key with |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OAuth():create({
  app_id = --[[ number ]],
  callback_url = --[[ string ]],
  code = --[[ string ]],
  created_at = --[[ string ]],
  id = --[[ string ]],
  key = --[[ string ]],
  user_id = --[[ string|nil ]],
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
| `data` | `table` | No |  |
| `id` | `string` | No |  |

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
| `background` | `boolean|nil` | No |  |
| `cache_control` | `table` | Yes | Enable automatic prompt caching. |
| `debug` | `table` | No | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `number|nil` | No |  |
| `image_config` | `table` | No | Provider-specific image configuration options. |
| `include` | `table|nil` | No |  |
| `input` | `any` | No | Input for a response request - can be a string or array of items |
| `instructions` | `string|nil` | No |  |
| `max_output_tokens` | `number|nil` | No |  |
| `max_tool_calls` | `number|nil` | No |  |
| `metadata` | `table|nil` | No | Metadata key-value pairs for the request. |
| `modalities` | `table` | No | Output modalities for the response. |
| `model` | `string` | No |  |
| `models` | `table` | No |  |
| `parallel_tool_calls` | `boolean|nil` | No |  |
| `plugins` | `table` | No | Plugins you want to enable for this request, including their settings. |
| `presence_penalty` | `number|nil` | No |  |
| `previous_response_id` | `string` | No | Not supported. |
| `prompt` | `table|nil` | Yes |  |
| `prompt_cache_key` | `string|nil` | No |  |
| `prompt_cache_options` | `table|nil` | Yes | Request-level prompt-cache controls. |
| `provider` | `table|nil` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `any` | No | Configuration for reasoning mode in the response |
| `route` | `string|nil` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `string|nil` | No |  |
| `service_tier` | `string|nil` | No |  |
| `session_id` | `string` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop_server_tools_when` | `table` | No | Stop conditions for the server-tool agent loop. |
| `store` | `boolean` | No |  |
| `stream` | `boolean` | No |  |
| `temperature` | `number|nil` | No |  |
| `text` | `any` | No | Text output configuration including format and verbosity |
| `tool_choice` | `any` | No |  |
| `tools` | `table` | No |  |
| `top_k` | `number` | No |  |
| `top_logprobs` | `number|nil` | No |  |
| `top_p` | `number|nil` | No |  |
| `trace` | `table` | No | Metadata for observability and tracing. |
| `truncation` | `string|nil` | No |  |
| `user` | `string` | No | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OpenResponsesResult():create({
  cache_control = --[[ table ]],
  prompt = --[[ table|nil ]],
  prompt_cache_options = --[[ table|nil ]],
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
| `email` | `string` | Yes | Email address of the member |
| `first_name` | `string|nil` | Yes | First name of the member |
| `id` | `string` | Yes | User ID of the organization member |
| `last_name` | `string|nil` | Yes | Last name of the member |
| `role` | `string` | Yes | Role of the member in the organization |

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
| `creator_user_id` | `string|nil` | Yes |  |
| `description` | `string|nil` | Yes |  |
| `designated_version` | `table|nil` | Yes | A specific version of a preset, containing config and optional system prompt. |
| `designated_version_id` | `string|nil` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `status` | `string` | Yes | The status of a preset. |
| `status_updated_at` | `string|nil` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workspace_id` | `string|nil` | Yes |  |

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
| `config` | `table` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `preset_id` | `string` | Yes |  |
| `system_prompt` | `string|nil` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `version` | `number` | Yes |  |

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
| `datacenters` | `table|nil` | No | ISO 3166-1 Alpha-2 country codes of the provider datacenter locations |
| `headquarters` | `string|nil` | No | ISO 3166-1 Alpha-2 country code of the provider headquarters |
| `name` | `string` | Yes | Display name of the provider |
| `privacy_policy_url` | `string|nil` | Yes | URL to the provider's privacy policy |
| `slug` | `string` | Yes | URL-friendly identifier for the provider |
| `status_page_url` | `string|nil` | No | URL to the provider's status page |
| `terms_of_service_url` | `string|nil` | No | URL to the provider's terms of service |

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
| `date` | `string` | Yes | UTC calendar date the row is aggregated over (YYYY-MM-DD). |
| `model_permaslug` | `string` | Yes | Model variant permaslug (e.g. |
| `total_tokens` | `string` | Yes | Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated. |

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
| `documents` | `table` | Yes | The list of documents to rerank. |
| `id` | `string` | No | Unique identifier for the rerank response (ORID format) |
| `model` | `string` | Yes | The model used for reranking |
| `provider` | `string` | No | The provider that served the rerank request |
| `query` | `string` | Yes | The search query to rerank documents against |
| `results` | `table` | Yes | List of rerank results sorted by relevance |
| `top_n` | `number` | No | Number of most relevant documents to return |
| `usage` | `table` | No | Usage statistics |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Rerank():create({
  documents = --[[ table ]],
  model = --[[ string ]],
  query = --[[ string ]],
  results = --[[ table ]],
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
| `duration` | `number` | No | Duration of the input audio in seconds, present when response_format is verbose_json |
| `input_audio` | `table` | Yes | Base64-encoded audio to transcribe |
| `language` | `string` | No | Detected or forced language, present when response_format is verbose_json |
| `model` | `string` | Yes | STT model identifier |
| `provider` | `table` | No | Provider-specific passthrough configuration |
| `response_format` | `string` | No | Output format. |
| `segments` | `table` | No | Timestamped transcript segments, present when response_format is verbose_json |
| `task` | `string` | No | The task performed, present when response_format is verbose_json |
| `temperature` | `number` | No | Sampling temperature for transcription |
| `text` | `string` | Yes | The transcribed text |
| `timestamp_granularities` | `table` | No | Timestamp detail levels to include when response_format is "verbose_json". |
| `usage` | `table` | No | Aggregated usage statistics for the request |
| `words` | `table` | No | Timestamped words, present when the provider returns word-level timestamps |

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
| `category` | `string` | Yes | The category of feedback being reported |
| `comment` | `string` | No | An optional free-text comment describing the feedback |
| `generation_id` | `string` | Yes | The generation to submit feedback on |
| `success` | `boolean` | Yes | Whether the feedback was recorded |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SubmitGenerationFeedback():create({
  category = --[[ string ]],
  generation_id = --[[ string ]],
  success = --[[ boolean ]],
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
| `as_of` | `string` | Yes | UTC date (YYYY-MM-DD) of the window upper bound (yesterday). |
| `classifications` | `table` | Yes | Per-task classification market-share data, sorted by usage_share descending. |
| `macro_categories` | `table` | Yes | Aggregate market-share data per macro-category (code, data, agent, general). |
| `window_days` | `number` | Yes | Number of trailing days covered by this snapshot. |

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
| `input` | `string` | Yes | Text to synthesize |
| `model` | `string` | Yes | TTS model identifier |
| `provider` | `table` | No | Provider-specific passthrough configuration |
| `response_format` | `string` | No | Audio output format |
| `speed` | `number` | No | Playback speed multiplier. |
| `voice` | `string` | Yes | Voice identifier (provider-specific). |

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
| `allowed_models` | `table|nil` | No | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `table|nil` | No | Optional allowlist of user IDs that may use this credential. |
| `disabled` | `boolean` | No | Whether this credential is disabled. |
| `id` | `string` | No |  |
| `is_fallback` | `boolean` | No | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `string` | No | A new raw provider API key to rotate the credential in-place. |
| `name` | `string|nil` | No | Optional human-readable name for the credential. |

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
| `allowed_models` | `table|nil` | No | Array of model identifiers (slug or canonical_slug accepted) |
| `allowed_providers` | `table|nil` | No | New list of allowed provider IDs |
| `content_filter_builtins` | `table|nil` | No | Builtin content filters to apply. |
| `content_filters` | `table|nil` | No | Custom regex content filters to apply. |
| `description` | `string|nil` | No | New description for the guardrail |
| `enforce_zdr` | `boolean|nil` | No | Deprecated. |
| `enforce_zdr_anthropic` | `boolean|nil` | No | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `boolean|nil` | No | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `boolean|nil` | No | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `boolean|nil` | No | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `boolean|nil` | No | Whether to enforce zero data retention for xAI models. |
| `id` | `string` | No |  |
| `ignored_models` | `table|nil` | No | Array of model identifiers to exclude from routing (slug or canonical_slug accepted) |
| `ignored_providers` | `table|nil` | No | List of provider IDs to exclude from routing |
| `limit_usd` | `number|nil` | No | New spending limit in USD |
| `name` | `string` | No | New name for the guardrail |
| `reset_interval` | `string|nil` | No | Interval at which the limit resets (daily, weekly, monthly) |

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
| `api_key_hashes` | `table|nil` | No | Optional allowlist of OpenRouter API key hashes. |
| `config` | `table` | No | Provider-specific configuration fields to update. |
| `enabled` | `boolean` | No | Whether the destination is enabled. |
| `filter_rules` | `any` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No | Human-readable name for the destination. |
| `privacy_mode` | `boolean` | No | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `number` | No | Sampling rate between 0.0001 and 1 (1 = 100%). |

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
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the workspace was created |
| `created_by` | `string|nil` | Yes | User ID of the workspace creator |
| `default_image_model` | `string|nil` | No | Default image model for this workspace |
| `default_provider_sort` | `string|nil` | No | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `string|nil` | No | Default text model for this workspace |
| `description` | `string|nil` | No | Description of the workspace |
| `id` | `string` | Yes | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `table|nil` | No | Optional array of API key IDs to filter I/O logging |
| `io_logging_sampling_rate` | `number` | No | Sampling rate for I/O logging (0.0001-1) |
| `is_data_discount_logging_enabled` | `boolean` | No | Whether data discount logging is enabled |
| `is_observability_broadcast_enabled` | `boolean` | No | Whether broadcast is enabled |
| `is_observability_io_logging_enabled` | `boolean` | No | Whether private logging is enabled |
| `name` | `string` | Yes | Name for the new workspace |
| `slug` | `string` | Yes | URL-friendly slug (lowercase alphanumeric segments separated by single hyphens, no leading/trailing hyphens) |
| `updated_at` | `string|nil` | Yes | ISO 8601 timestamp of when the workspace was last updated |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:UpdateWorkspace():create({
  created_at = --[[ string ]],
  created_by = --[[ string|nil ]],
  id = --[[ string ]],
  name = --[[ string ]],
  slug = --[[ string ]],
  updated_at = --[[ string|nil ]],
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
| `id` | `string` | No |  |
| `limit_usd` | `number` | Yes | Spending limit in USD. |

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
| `aspect_ratio` | `string` | No | Aspect ratio of the generated video |
| `callback_url` | `string` | No | URL to receive a webhook notification when the video generation job completes. |
| `duration` | `number` | No | Duration of the generated video in seconds |
| `error` | `string` | No |  |
| `frame_images` | `table` | No | Images to use as the first and/or last frame of the generated video. |
| `generate_audio` | `boolean` | No | Whether to generate audio alongside the video. |
| `generation_id` | `string` | No | The generation ID associated with this video generation job. |
| `id` | `string` | Yes |  |
| `input_references` | `table` | No | Reference assets to guide video generation. |
| `model` | `string` | Yes |  |
| `polling_url` | `string` | Yes |  |
| `prompt` | `string` | No | Text prompt describing the video to generate. |
| `provider` | `table` | No | Provider-specific passthrough configuration |
| `resolution` | `string` | No | Resolution of the generated video |
| `seed` | `number` | No | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `string` | No | Exact pixel dimensions of the generated video in "WIDTHxHEIGHT" format (e.g. |
| `status` | `string` | Yes |  |
| `unsigned_urls` | `table` | No |  |
| `usage` | `table` | No | Usage and cost information for the video generation. |

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

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

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
| `allowed_passthrough_parameters` | `table` | Yes | List of parameters that are allowed to be passed through to the provider |
| `canonical_slug` | `string` | Yes | Canonical slug for the model |
| `created` | `number` | Yes | Unix timestamp of when the model was created |
| `description` | `string` | No | Description of the model |
| `generate_audio` | `boolean|nil` | Yes | Whether the model supports generating audio alongside video |
| `hugging_face_id` | `string|nil` | No | Hugging Face model identifier, if applicable |
| `id` | `string` | Yes | Unique identifier for the model |
| `name` | `string` | Yes | Display name of the model |
| `pricing_skus` | `table|nil` | No | Pricing SKUs with provider prefix stripped, values as strings |
| `seed` | `boolean|nil` | Yes | Whether the model supports deterministic generation via seed parameter |
| `supported_aspect_ratios` | `table|nil` | Yes | Supported output aspect ratios |
| `supported_durations` | `table|nil` | Yes | Supported video durations in seconds |
| `supported_frame_images` | `table|nil` | Yes | Supported frame image types (e.g. |
| `supported_resolutions` | `table|nil` | Yes | Supported output resolutions |
| `supported_sizes` | `table|nil` | Yes | Supported output sizes (width x height) |

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
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the workspace was created |
| `created_by` | `string|nil` | Yes | User ID of the workspace creator |
| `default_image_model` | `string|nil` | Yes | Default image model for this workspace |
| `default_provider_sort` | `string|nil` | Yes | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `string|nil` | Yes | Default text model for this workspace |
| `description` | `string|nil` | Yes | Description of the workspace |
| `id` | `string` | Yes | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `table|nil` | Yes | Optional array of API key IDs to filter I/O logging. |
| `io_logging_sampling_rate` | `number` | Yes | Sampling rate for I/O logging (0.0001-1). |
| `is_data_discount_logging_enabled` | `boolean` | Yes | Whether data discount logging is enabled for this workspace |
| `is_observability_broadcast_enabled` | `boolean` | Yes | Whether broadcast is enabled for this workspace |
| `is_observability_io_logging_enabled` | `boolean` | Yes | Whether private logging is enabled for this workspace |
| `name` | `string` | Yes | Name of the workspace |
| `slug` | `string` | Yes | URL-friendly slug for the workspace |
| `updated_at` | `string|nil` | Yes | ISO 8601 timestamp of when the workspace was last updated |

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

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

