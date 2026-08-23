# OpenrouterModels Golang SDK Reference

Complete API reference for the OpenrouterModels Golang SDK.


## OpenrouterModelsSDK

### Constructor

```go
func NewOpenrouterModelsSDK(options map[string]any) *OpenrouterModelsSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *OpenrouterModelsSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *OpenrouterModelsSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Activity(data map[string]any) OpenrouterModelsEntity`

Create a new `Activity` entity instance. Pass `nil` for no initial data.

#### `Add(data map[string]any) OpenrouterModelsEntity`

Create a new `Add` entity instance. Pass `nil` for no initial data.

#### `ApiKey(data map[string]any) OpenrouterModelsEntity`

Create a new `ApiKey` entity instance. Pass `nil` for no initial data.

#### `AppRanking(data map[string]any) OpenrouterModelsEntity`

Create a new `AppRanking` entity instance. Pass `nil` for no initial data.

#### `Benchmark(data map[string]any) OpenrouterModelsEntity`

Create a new `Benchmark` entity instance. Pass `nil` for no initial data.

#### `BetaAnalytics(data map[string]any) OpenrouterModelsEntity`

Create a new `BetaAnalytics` entity instance. Pass `nil` for no initial data.

#### `Budget(data map[string]any) OpenrouterModelsEntity`

Create a new `Budget` entity instance. Pass `nil` for no initial data.

#### `BulkAddWorkspaceMember(data map[string]any) OpenrouterModelsEntity`

Create a new `BulkAddWorkspaceMember` entity instance. Pass `nil` for no initial data.

#### `BulkAssignKey(data map[string]any) OpenrouterModelsEntity`

Create a new `BulkAssignKey` entity instance. Pass `nil` for no initial data.

#### `BulkAssignMember(data map[string]any) OpenrouterModelsEntity`

Create a new `BulkAssignMember` entity instance. Pass `nil` for no initial data.

#### `BulkRemoveWorkspaceMember(data map[string]any) OpenrouterModelsEntity`

Create a new `BulkRemoveWorkspaceMember` entity instance. Pass `nil` for no initial data.

#### `BulkUnassignKey(data map[string]any) OpenrouterModelsEntity`

Create a new `BulkUnassignKey` entity instance. Pass `nil` for no initial data.

#### `BulkUnassignMember(data map[string]any) OpenrouterModelsEntity`

Create a new `BulkUnassignMember` entity instance. Pass `nil` for no initial data.

#### `Byok(data map[string]any) OpenrouterModelsEntity`

Create a new `Byok` entity instance. Pass `nil` for no initial data.

#### `ChatResult(data map[string]any) OpenrouterModelsEntity`

Create a new `ChatResult` entity instance. Pass `nil` for no initial data.

#### `Code(data map[string]any) OpenrouterModelsEntity`

Create a new `Code` entity instance. Pass `nil` for no initial data.

#### `Coinbase(data map[string]any) OpenrouterModelsEntity`

Create a new `Coinbase` entity instance. Pass `nil` for no initial data.

#### `Completion(data map[string]any) OpenrouterModelsEntity`

Create a new `Completion` entity instance. Pass `nil` for no initial data.

#### `Content(data map[string]any) OpenrouterModelsEntity`

Create a new `Content` entity instance. Pass `nil` for no initial data.

#### `Count(data map[string]any) OpenrouterModelsEntity`

Create a new `Count` entity instance. Pass `nil` for no initial data.

#### `CreateByokKey(data map[string]any) OpenrouterModelsEntity`

Create a new `CreateByokKey` entity instance. Pass `nil` for no initial data.

#### `CreateGuardrail(data map[string]any) OpenrouterModelsEntity`

Create a new `CreateGuardrail` entity instance. Pass `nil` for no initial data.

#### `CreateObservabilityDestination(data map[string]any) OpenrouterModelsEntity`

Create a new `CreateObservabilityDestination` entity instance. Pass `nil` for no initial data.

#### `CreatePresetFromInference(data map[string]any) OpenrouterModelsEntity`

Create a new `CreatePresetFromInference` entity instance. Pass `nil` for no initial data.

#### `CreateWorkspace(data map[string]any) OpenrouterModelsEntity`

Create a new `CreateWorkspace` entity instance. Pass `nil` for no initial data.

#### `Credit(data map[string]any) OpenrouterModelsEntity`

Create a new `Credit` entity instance. Pass `nil` for no initial data.

#### `Destination(data map[string]any) OpenrouterModelsEntity`

Create a new `Destination` entity instance. Pass `nil` for no initial data.

#### `Embedding(data map[string]any) OpenrouterModelsEntity`

Create a new `Embedding` entity instance. Pass `nil` for no initial data.

#### `Endpoint(data map[string]any) OpenrouterModelsEntity`

Create a new `Endpoint` entity instance. Pass `nil` for no initial data.

#### `Feedback(data map[string]any) OpenrouterModelsEntity`

Create a new `Feedback` entity instance. Pass `nil` for no initial data.

#### `File(data map[string]any) OpenrouterModelsEntity`

Create a new `File` entity instance. Pass `nil` for no initial data.

#### `Generation(data map[string]any) OpenrouterModelsEntity`

Create a new `Generation` entity instance. Pass `nil` for no initial data.

#### `GenerationContent(data map[string]any) OpenrouterModelsEntity`

Create a new `GenerationContent` entity instance. Pass `nil` for no initial data.

#### `Guardrail(data map[string]any) OpenrouterModelsEntity`

Create a new `Guardrail` entity instance. Pass `nil` for no initial data.

#### `Image(data map[string]any) OpenrouterModelsEntity`

Create a new `Image` entity instance. Pass `nil` for no initial data.

#### `ImageModelEndpoint(data map[string]any) OpenrouterModelsEntity`

Create a new `ImageModelEndpoint` entity instance. Pass `nil` for no initial data.

#### `ImageModelsList(data map[string]any) OpenrouterModelsEntity`

Create a new `ImageModelsList` entity instance. Pass `nil` for no initial data.

#### `Key(data map[string]any) OpenrouterModelsEntity`

Create a new `Key` entity instance. Pass `nil` for no initial data.

#### `ListByokKey(data map[string]any) OpenrouterModelsEntity`

Create a new `ListByokKey` entity instance. Pass `nil` for no initial data.

#### `ListGuardrail(data map[string]any) OpenrouterModelsEntity`

Create a new `ListGuardrail` entity instance. Pass `nil` for no initial data.

#### `ListKeyAssignment(data map[string]any) OpenrouterModelsEntity`

Create a new `ListKeyAssignment` entity instance. Pass `nil` for no initial data.

#### `ListMemberAssignment(data map[string]any) OpenrouterModelsEntity`

Create a new `ListMemberAssignment` entity instance. Pass `nil` for no initial data.

#### `ListObservabilityDestination(data map[string]any) OpenrouterModelsEntity`

Create a new `ListObservabilityDestination` entity instance. Pass `nil` for no initial data.

#### `ListPreset(data map[string]any) OpenrouterModelsEntity`

Create a new `ListPreset` entity instance. Pass `nil` for no initial data.

#### `ListPresetVersion(data map[string]any) OpenrouterModelsEntity`

Create a new `ListPresetVersion` entity instance. Pass `nil` for no initial data.

#### `ListWorkspace(data map[string]any) OpenrouterModelsEntity`

Create a new `ListWorkspace` entity instance. Pass `nil` for no initial data.

#### `ListWorkspaceBudget(data map[string]any) OpenrouterModelsEntity`

Create a new `ListWorkspaceBudget` entity instance. Pass `nil` for no initial data.

#### `ListWorkspaceMember(data map[string]any) OpenrouterModelsEntity`

Create a new `ListWorkspaceMember` entity instance. Pass `nil` for no initial data.

#### `Member(data map[string]any) OpenrouterModelsEntity`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `Message(data map[string]any) OpenrouterModelsEntity`

Create a new `Message` entity instance. Pass `nil` for no initial data.

#### `Meta(data map[string]any) OpenrouterModelsEntity`

Create a new `Meta` entity instance. Pass `nil` for no initial data.

#### `Model(data map[string]any) OpenrouterModelsEntity`

Create a new `Model` entity instance. Pass `nil` for no initial data.

#### `ModelsCount(data map[string]any) OpenrouterModelsEntity`

Create a new `ModelsCount` entity instance. Pass `nil` for no initial data.

#### `ModelsList(data map[string]any) OpenrouterModelsEntity`

Create a new `ModelsList` entity instance. Pass `nil` for no initial data.

#### `OAuth(data map[string]any) OpenrouterModelsEntity`

Create a new `OAuth` entity instance. Pass `nil` for no initial data.

#### `ObservabilityDestination(data map[string]any) OpenrouterModelsEntity`

Create a new `ObservabilityDestination` entity instance. Pass `nil` for no initial data.

#### `OpenResponsesResult(data map[string]any) OpenrouterModelsEntity`

Create a new `OpenResponsesResult` entity instance. Pass `nil` for no initial data.

#### `Organization(data map[string]any) OpenrouterModelsEntity`

Create a new `Organization` entity instance. Pass `nil` for no initial data.

#### `Preset(data map[string]any) OpenrouterModelsEntity`

Create a new `Preset` entity instance. Pass `nil` for no initial data.

#### `PresetVersion(data map[string]any) OpenrouterModelsEntity`

Create a new `PresetVersion` entity instance. Pass `nil` for no initial data.

#### `Provider(data map[string]any) OpenrouterModelsEntity`

Create a new `Provider` entity instance. Pass `nil` for no initial data.

#### `Query(data map[string]any) OpenrouterModelsEntity`

Create a new `Query` entity instance. Pass `nil` for no initial data.

#### `RankingsDaily(data map[string]any) OpenrouterModelsEntity`

Create a new `RankingsDaily` entity instance. Pass `nil` for no initial data.

#### `Remove(data map[string]any) OpenrouterModelsEntity`

Create a new `Remove` entity instance. Pass `nil` for no initial data.

#### `Rerank(data map[string]any) OpenrouterModelsEntity`

Create a new `Rerank` entity instance. Pass `nil` for no initial data.

#### `Response(data map[string]any) OpenrouterModelsEntity`

Create a new `Response` entity instance. Pass `nil` for no initial data.

#### `Speech(data map[string]any) OpenrouterModelsEntity`

Create a new `Speech` entity instance. Pass `nil` for no initial data.

#### `Stt(data map[string]any) OpenrouterModelsEntity`

Create a new `Stt` entity instance. Pass `nil` for no initial data.

#### `SubmitGenerationFeedback(data map[string]any) OpenrouterModelsEntity`

Create a new `SubmitGenerationFeedback` entity instance. Pass `nil` for no initial data.

#### `Task(data map[string]any) OpenrouterModelsEntity`

Create a new `Task` entity instance. Pass `nil` for no initial data.

#### `Transcription(data map[string]any) OpenrouterModelsEntity`

Create a new `Transcription` entity instance. Pass `nil` for no initial data.

#### `Tts(data map[string]any) OpenrouterModelsEntity`

Create a new `Tts` entity instance. Pass `nil` for no initial data.

#### `UnifiedBenchmark(data map[string]any) OpenrouterModelsEntity`

Create a new `UnifiedBenchmark` entity instance. Pass `nil` for no initial data.

#### `UpdateByokKey(data map[string]any) OpenrouterModelsEntity`

Create a new `UpdateByokKey` entity instance. Pass `nil` for no initial data.

#### `UpdateGuardrail(data map[string]any) OpenrouterModelsEntity`

Create a new `UpdateGuardrail` entity instance. Pass `nil` for no initial data.

#### `UpdateObservabilityDestination(data map[string]any) OpenrouterModelsEntity`

Create a new `UpdateObservabilityDestination` entity instance. Pass `nil` for no initial data.

#### `UpdateWorkspace(data map[string]any) OpenrouterModelsEntity`

Create a new `UpdateWorkspace` entity instance. Pass `nil` for no initial data.

#### `UpsertWorkspaceBudget(data map[string]any) OpenrouterModelsEntity`

Create a new `UpsertWorkspaceBudget` entity instance. Pass `nil` for no initial data.

#### `User(data map[string]any) OpenrouterModelsEntity`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `Version(data map[string]any) OpenrouterModelsEntity`

Create a new `Version` entity instance. Pass `nil` for no initial data.

#### `Video(data map[string]any) OpenrouterModelsEntity`

Create a new `Video` entity instance. Pass `nil` for no initial data.

#### `VideoGeneration(data map[string]any) OpenrouterModelsEntity`

Create a new `VideoGeneration` entity instance. Pass `nil` for no initial data.

#### `VideoModelsList(data map[string]any) OpenrouterModelsEntity`

Create a new `VideoModelsList` entity instance. Pass `nil` for no initial data.

#### `Workspace(data map[string]any) OpenrouterModelsEntity`

Create a new `Workspace` entity instance. Pass `nil` for no initial data.

#### `WorkspaceBudget(data map[string]any) OpenrouterModelsEntity`

Create a new `WorkspaceBudget` entity instance. Pass `nil` for no initial data.

#### `Zdr(data map[string]any) OpenrouterModelsEntity`

Create a new `Zdr` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## ActivityEntity

```go
activity := client.Activity(nil)
fmt.Println(activity.GetName()) // "activity"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byok_usage_inference` | `float64` | Yes | BYOK inference cost in USD (external credits spent) |
| `completion_tokens` | `int` | Yes | Total completion tokens generated |
| `date` | `string` | Yes | Date of the activity (YYYY-MM-DD format) |
| `endpoint_id` | `string` | Yes | Unique identifier for the endpoint |
| `model` | `string` | Yes | Model slug (e.g., "openai/gpt-4.1") |
| `model_permaslug` | `string` | Yes | Model permaslug (e.g., "openai/gpt-4.1-2025-04-14") |
| `prompt_tokens` | `int` | Yes | Total prompt tokens used |
| `provider_name` | `string` | Yes | Name of the provider serving this endpoint |
| `reasoning_tokens` | `int` | Yes | Total reasoning tokens used |
| `requests` | `int` | Yes | Number of requests made |
| `usage` | `float64` | Yes | Total cost in USD (OpenRouter credits spent) |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Activity(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActivityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AddEntity

```go
add := client.Add(nil)
fmt.Println(add.GetName()) // "add"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AddEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiKeyEntity

```go
apiKey := client.ApiKey(nil)
fmt.Println(apiKey.GetName()) // "api_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byok_usage` | `float64` | Yes | Total external BYOK usage (in USD) for the API key |
| `byok_usage_daily` | `float64` | Yes | External BYOK usage (in USD) for the current UTC day |
| `byok_usage_monthly` | `float64` | Yes | External BYOK usage (in USD) for current UTC month |
| `byok_usage_weekly` | `float64` | Yes | External BYOK usage (in USD) for the current UTC week (Monday-Sunday) |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the API key was created |
| `creator_user_id` | `any` | Yes | The user ID of the key creator. |
| `disabled` | `bool` | Yes | Whether the API key is disabled |
| `expires_at` | `any` | No | ISO 8601 UTC timestamp when the API key expires, or null if no expiration |
| `hash` | `string` | Yes | Unique hash identifier for the API key |
| `include_byok_in_limit` | `bool` | Yes | Whether to include external BYOK usage in the credit limit |
| `is_free_tier` | `bool` | Yes | Whether this is a free tier API key |
| `is_management_key` | `bool` | Yes | Whether this is a management key |
| `is_provisioning_key` | `bool` | Yes | Whether this is a management key |
| `label` | `string` | Yes | Human-readable label for the API key |
| `limit` | `any` | Yes | Spending limit for the API key in USD |
| `limit_remaining` | `any` | Yes | Remaining spending limit in USD |
| `limit_reset` | `any` | Yes | Type of limit reset for the API key |
| `name` | `string` | Yes | Name of the API key |
| `rate_limit` | `map[string]any` | Yes | Legacy rate limit information about a key. |
| `updated_at` | `any` | Yes | ISO 8601 timestamp of when the API key was last updated |
| `usage` | `float64` | Yes | Total OpenRouter credit usage (in USD) for the API key |
| `usage_daily` | `float64` | Yes | OpenRouter credit usage (in USD) for the current UTC day |
| `usage_monthly` | `float64` | Yes | OpenRouter credit usage (in USD) for the current UTC month |
| `usage_weekly` | `float64` | Yes | OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday) |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiKey(nil).Load(map[string]any{"id": "api_key_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiKey(nil).Create(map[string]any{
    "byok_usage": 1,
    "byok_usage_daily": 1,
    "byok_usage_monthly": 1,
    "byok_usage_weekly": 1,
    "created_at": "example_created_at",
    "creator_user_id": "example_creator_user_id",
    "disabled": true,
    "hash": "example_hash",
    "include_byok_in_limit": true,
    "is_free_tier": true,
    "is_management_key": true,
    "is_provisioning_key": true,
    "label": "example_label",
    "limit": "example_limit",
    "limit_remaining": "example_limit_remaining",
    "limit_reset": "example_limit_reset",
    "name": "example_name",
    "rate_limit": map[string]any{},
    "updated_at": "example_updated_at",
    "usage": 1,
    "usage_daily": 1,
    "usage_monthly": 1,
    "usage_weekly": 1,
    "workspace_id": "example_workspace_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiKey(nil).Update(map[string]any{
    "id": "api_key_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ApiKey(nil).Remove(map[string]any{"id": "api_key_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AppRankingEntity

```go
appRanking := client.AppRanking(nil)
fmt.Println(appRanking.GetName()) // "app_ranking"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `int` | Yes | Stable numeric identifier of the app on OpenRouter. |
| `app_name` | `string` | Yes | Public display name of the app. |
| `rank` | `int` | Yes | 1-based position of the app within this response, per the requested `sort`. |
| `total_requests` | `int` | Yes | Number of requests attributed to the app inside the date window. |
| `total_tokens` | `string` | Yes | Sum of `prompt_tokens + completion_tokens` attributed to the app inside the date window, returned as a decimal string so 64-bit values are not truncated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AppRanking(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AppRankingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BenchmarkEntity

```go
benchmark := client.Benchmark(nil)
fmt.Println(benchmark.GetName()) // "benchmark"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BenchmarkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BetaAnalyticsEntity

```go
betaAnalytics := client.BetaAnalytics(nil)
fmt.Println(betaAnalytics.GetName()) // "beta_analytics"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cachedAt` | `float64` | No |  |
| `classifier_dimensions` | `map[string]any` | Yes | Group results by custom classifier tags, breaking down metrics by the specified dimension values. |
| `classifier_filters` | `map[string]any` | Yes | Filter results to generations with specific classifier tag values. |
| `data` | `[]any` | Yes |  |
| `dimensions` | `[]any` | Yes |  |
| `filters` | `[]any` | No |  |
| `granularities` | `[]any` | Yes |  |
| `granularity` | `string` | No | Time granularity |
| `group_limit` | `int` | No | Maximum rows per distinct combination of dimensions. |
| `limit` | `int` | No | Maximum total rows returned. |
| `metadata` | `map[string]any` | Yes |  |
| `metrics` | `[]any` | Yes |  |
| `operators` | `[]any` | Yes |  |
| `order_by` | `map[string]any` | Yes |  |
| `time_range` | `map[string]any` | Yes |  |
| `warnings` | `[]any` | No | Warnings about filter resolution issues (e.g. |

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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BetaAnalytics(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BetaAnalytics(nil).Create(map[string]any{
    "classifier_dimensions": map[string]any{},
    "classifier_filters": map[string]any{},
    "data": []any{},
    "dimensions": []any{},
    "granularities": []any{},
    "metadata": map[string]any{},
    "metrics": []any{},
    "operators": []any{},
    "order_by": map[string]any{},
    "time_range": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BetaAnalyticsEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BudgetEntity

```go
budget := client.Budget(nil)
fmt.Println(budget.GetName()) // "budget"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BudgetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BulkAddWorkspaceMemberEntity

```go
bulkAddWorkspaceMember := client.BulkAddWorkspaceMember(nil)
fmt.Println(bulkAddWorkspaceMember.GetName()) // "bulk_add_workspace_member"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `added_count` | `int` | Yes | Number of workspace memberships created or updated |
| `data` | `[]any` | Yes | List of added workspace memberships |
| `user_ids` | `[]any` | Yes | List of user IDs to add to the workspace. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BulkAddWorkspaceMember(nil).Create(map[string]any{
    "workspace_id": "example_workspace_id",
    "added_count": 1,
    "data": []any{},
    "user_ids": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BulkAddWorkspaceMemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BulkAssignKeyEntity

```go
bulkAssignKey := client.BulkAssignKey(nil)
fmt.Println(bulkAssignKey.GetName()) // "bulk_assign_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_count` | `int` | Yes | Number of keys successfully assigned |
| `key_hashes` | `[]any` | Yes | Array of API key hashes to assign to the guardrail |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BulkAssignKey(nil).Create(map[string]any{
    "guardrail_id": "example_guardrail_id",
    "assigned_count": 1,
    "key_hashes": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BulkAssignKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BulkAssignMemberEntity

```go
bulkAssignMember := client.BulkAssignMember(nil)
fmt.Println(bulkAssignMember.GetName()) // "bulk_assign_member"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_count` | `int` | Yes | Number of members successfully assigned |
| `member_user_ids` | `[]any` | Yes | Array of member user IDs to assign to the guardrail |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BulkAssignMember(nil).Create(map[string]any{
    "guardrail_id": "example_guardrail_id",
    "assigned_count": 1,
    "member_user_ids": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BulkAssignMemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BulkRemoveWorkspaceMemberEntity

```go
bulkRemoveWorkspaceMember := client.BulkRemoveWorkspaceMember(nil)
fmt.Println(bulkRemoveWorkspaceMember.GetName()) // "bulk_remove_workspace_member"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `removed_count` | `int` | Yes | Number of members removed |
| `user_ids` | `[]any` | Yes | List of user IDs to remove from the workspace |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BulkRemoveWorkspaceMember(nil).Create(map[string]any{
    "workspace_id": "example_workspace_id",
    "removed_count": 1,
    "user_ids": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BulkRemoveWorkspaceMemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BulkUnassignKeyEntity

```go
bulkUnassignKey := client.BulkUnassignKey(nil)
fmt.Println(bulkUnassignKey.GetName()) // "bulk_unassign_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key_hashes` | `[]any` | Yes | Array of API key hashes to unassign from the guardrail |
| `unassigned_count` | `int` | Yes | Number of keys successfully unassigned |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BulkUnassignKey(nil).Create(map[string]any{
    "guardrail_id": "example_guardrail_id",
    "key_hashes": []any{},
    "unassigned_count": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BulkUnassignKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BulkUnassignMemberEntity

```go
bulkUnassignMember := client.BulkUnassignMember(nil)
fmt.Println(bulkUnassignMember.GetName()) // "bulk_unassign_member"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `member_user_ids` | `[]any` | Yes | Array of member user IDs to unassign from the guardrail |
| `unassigned_count` | `int` | Yes | Number of members successfully unassigned |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BulkUnassignMember(nil).Create(map[string]any{
    "guardrail_id": "example_guardrail_id",
    "member_user_ids": []any{},
    "unassigned_count": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BulkUnassignMemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ByokEntity

```go
byok := client.Byok(nil)
fmt.Println(byok.GetName()) // "byok"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_api_key_hashes` | `any` | Yes | Optional allowlist of OpenRouter API key hashes (`api_keys.hash`) that may use this credential. |
| `allowed_models` | `any` | Yes | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `any` | Yes | Optional allowlist of user IDs that may use this credential. |
| `created_at` | `string` | Yes | ISO timestamp of when the credential was created. |
| `disabled` | `bool` | Yes | Whether this credential is currently disabled. |
| `id` | `string` | Yes | Stable public identifier for this BYOK credential. |
| `is_fallback` | `bool` | Yes | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `string` | Yes | The raw provider API key or credential. |
| `label` | `string` | Yes | Short masked snippet of the key (e.g. |
| `name` | `any` | No | Optional human-readable name for the credential. |
| `provider` | `string` | Yes | The upstream provider this credential authenticates against, as a lowercase slug (e.g. |
| `sort_order` | `int` | Yes | Position within the provider — credentials are tried in ascending sort order. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Byok(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Byok(nil).Load(map[string]any{"id": "byok_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Byok(nil).Create(map[string]any{
    "allowed_api_key_hashes": "example_allowed_api_key_hashes",
    "allowed_models": "example_allowed_models",
    "allowed_user_ids": "example_allowed_user_ids",
    "created_at": "example_created_at",
    "disabled": true,
    "id": "example_id",
    "is_fallback": true,
    "key": "example_key",
    "label": "example_label",
    "provider": "example_provider",
    "sort_order": 1,
    "workspace_id": "example_workspace_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Byok(nil).Remove(map[string]any{"id": "byok_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ByokEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ChatResultEntity

```go
chatResult := client.ChatResult(nil)
fmt.Println(chatResult.GetName()) // "chat_result"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_control` | `map[string]any` | Yes | Enable automatic prompt caching. |
| `choices` | `[]any` | Yes | List of completion choices |
| `created` | `int` | Yes | Unix timestamp of creation |
| `debug` | `map[string]any` | No | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `any` | No | Frequency penalty (-2.0 to 2.0) |
| `id` | `string` | Yes | Unique completion identifier |
| `image_config` | `map[string]any` | No | Provider-specific image configuration options. |
| `logit_bias` | `any` | No | Token logit bias adjustments |
| `logprobs` | `any` | No | Return log probabilities |
| `max_completion_tokens` | `any` | No | Maximum tokens in completion |
| `max_tokens` | `any` | No | Maximum tokens (deprecated, use max_completion_tokens). |
| `messages` | `[]any` | Yes | List of messages for the conversation |
| `metadata` | `map[string]any` | No | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `any` | No | Minimum probability threshold relative to the most likely token. |
| `modalities` | `[]any` | No | Output modalities for the response. |
| `model` | `string` | Yes | Model used for completion |
| `models` | `[]any` | No | Models to use for completion |
| `object` | `string` | Yes |  |
| `openrouter_metadata` | `map[string]any` | Yes |  |
| `parallel_tool_calls` | `any` | No | Whether to enable parallel function calling during tool use. |
| `plugins` | `[]any` | No | Plugins you want to enable for this request, including their settings. |
| `prediction` | `any` | Yes | Static predicted output content. |
| `presence_penalty` | `any` | No | Presence penalty (-2.0 to 2.0) |
| `prompt_cache_key` | `any` | No |  |
| `prompt_cache_options` | `any` | Yes | Request-level prompt-cache controls. |
| `provider` | `any` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `map[string]any` | No | Configuration options for reasoning models |
| `reasoning_effort` | `any` | No | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `any` | No | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `any` | No | Response format configuration |
| `route` | `any` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `seed` | `any` | No | Random seed for deterministic outputs |
| `service_tier` | `any` | No | The service tier used by the upstream provider for this request |
| `session_id` | `string` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop` | `any` | No | Stop sequences (up to 4) |
| `stop_server_tools_when` | `[]any` | No | Stop conditions for the server-tool agent loop. |
| `stream` | `bool` | No | Enable streaming response |
| `stream_options` | `any` | No | Streaming configuration options |
| `system_fingerprint` | `any` | Yes | System fingerprint |
| `temperature` | `any` | No | Sampling temperature (0-2) |
| `tool_choice` | `any` | No | Tool choice configuration |
| `tools` | `[]any` | No | Available tools for function calling |
| `top_a` | `any` | No | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `any` | No | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `any` | No | Number of top log probabilities to return (0-20) |
| `top_p` | `any` | No | Nucleus sampling parameter (0-1) |
| `trace` | `map[string]any` | No | Metadata for observability and tracing. |
| `usage` | `map[string]any` | Yes | Token usage statistics |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ChatResult(nil).Create(map[string]any{
    "cache_control": map[string]any{},
    "choices": []any{},
    "created": 1,
    "id": "example_id",
    "messages": []any{},
    "model": "example_model",
    "object": "example_object",
    "openrouter_metadata": map[string]any{},
    "prediction": "example_prediction",
    "prompt_cache_options": "example_prompt_cache_options",
    "system_fingerprint": "example_system_fingerprint",
    "usage": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ChatResultEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeEntity

```go
code := client.Code(nil)
fmt.Println(code.GetName()) // "code"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CoinbaseEntity

```go
coinbase := client.Coinbase(nil)
fmt.Println(coinbase.GetName()) // "coinbase"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CoinbaseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CompletionEntity

```go
completion := client.Completion(nil)
fmt.Println(completion.GetName()) // "completion"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CompletionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContentEntity

```go
content := client.Content(nil)
fmt.Println(content.GetName()) // "content"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CountEntity

```go
count := client.Count(nil)
fmt.Println(count.GetName()) // "count"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreateByokKeyEntity

```go
createByokKey := client.CreateByokKey(nil)
fmt.Println(createByokKey.GetName()) // "create_byok_key"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreateByokKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreateGuardrailEntity

```go
createGuardrail := client.CreateGuardrail(nil)
fmt.Println(createGuardrail.GetName()) // "create_guardrail"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreateGuardrailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreateObservabilityDestinationEntity

```go
createObservabilityDestination := client.CreateObservabilityDestination(nil)
fmt.Println(createObservabilityDestination.GetName()) // "create_observability_destination"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_key_hashes` | `any` | No | Optional allowlist of OpenRouter API key hashes whose traffic is forwarded. |
| `config` | `map[string]any` | Yes | Provider-specific configuration. |
| `enabled` | `bool` | No | Whether this destination should be enabled immediately. |
| `filter_rules` | `any` | Yes | Optional structured filter rules controlling which events are forwarded. |
| `name` | `string` | Yes | Human-readable name for the destination. |
| `privacy_mode` | `bool` | No | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `float64` | No | Sampling rate between 0.0001 and 1 (1 = 100%). |
| `type` | `string` | Yes | The destination type. |
| `workspace_id` | `string` | No | Optional workspace ID. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CreateObservabilityDestination(nil).Create(map[string]any{
    "config": map[string]any{},
    "filter_rules": "example_filter_rules",
    "name": "example_name",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreateObservabilityDestinationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreatePresetFromInferenceEntity

```go
createPresetFromInference := client.CreatePresetFromInference(nil)
fmt.Println(createPresetFromInference.GetName()) // "create_preset_from_inference"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `background` | `any` | No |  |
| `cache_control` | `map[string]any` | Yes | Enable automatic prompt caching. |
| `context_management` | `any` | No |  |
| `debug` | `map[string]any` | No | Debug options for inspecting request transformations (streaming only) |
| `fallbacks` | `any` | No | Fallback models to try if the primary model fails or refuses, in order. |
| `frequency_penalty` | `any` | No | Frequency penalty (-2.0 to 2.0) |
| `image_config` | `map[string]any` | No | Provider-specific image configuration options. |
| `include` | `any` | No |  |
| `input` | `any` | No | Input for a response request - can be a string or array of items |
| `instructions` | `any` | No |  |
| `logit_bias` | `any` | No | Token logit bias adjustments |
| `logprobs` | `any` | No | Return log probabilities |
| `max_completion_tokens` | `any` | No | Maximum tokens in completion |
| `max_output_tokens` | `any` | No |  |
| `max_tokens` | `any` | No | Maximum tokens (deprecated, use max_completion_tokens). |
| `max_tool_calls` | `any` | No |  |
| `messages` | `[]any` | Yes | List of messages for the conversation |
| `metadata` | `map[string]any` | No | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `any` | No | Minimum probability threshold relative to the most likely token. |
| `modalities` | `[]any` | No | Output modalities for the response. |
| `model` | `string` | No | Model to use for completion |
| `models` | `[]any` | No | Models to use for completion |
| `output_config` | `map[string]any` | No | Configuration for controlling output behavior. |
| `parallel_tool_calls` | `any` | No | Whether to enable parallel function calling during tool use. |
| `plugins` | `[]any` | No | Plugins you want to enable for this request, including their settings. |
| `prediction` | `any` | Yes | Static predicted output content. |
| `presence_penalty` | `any` | No | Presence penalty (-2.0 to 2.0) |
| `previous_response_id` | `string` | No | Not supported. |
| `prompt` | `any` | Yes |  |
| `prompt_cache_key` | `any` | No |  |
| `prompt_cache_options` | `any` | Yes | Request-level prompt-cache controls. |
| `provider` | `any` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `map[string]any` | No | Configuration options for reasoning models |
| `reasoning_effort` | `any` | No | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `any` | No | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `any` | No | Response format configuration |
| `route` | `any` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `any` | No |  |
| `seed` | `any` | No | Random seed for deterministic outputs |
| `service_tier` | `any` | No | The service tier to use for processing this request. |
| `session_id` | `string` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `speed` | `any` | No |  |
| `stop` | `any` | No | Stop sequences (up to 4) |
| `stop_sequences` | `[]any` | No |  |
| `stop_server_tools_when` | `[]any` | No | Stop conditions for the server-tool agent loop. |
| `store` | `bool` | No |  |
| `stream` | `bool` | No | Enable streaming response |
| `stream_options` | `any` | No | Streaming configuration options |
| `system` | `any` | No |  |
| `temperature` | `any` | No | Sampling temperature (0-2) |
| `text` | `any` | No | Text output configuration including format and verbosity |
| `thinking` | `any` | No |  |
| `tool_choice` | `any` | No | Tool choice configuration |
| `tools` | `[]any` | No | Available tools for function calling |
| `top_a` | `any` | No | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `any` | No | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `any` | No | Number of top log probabilities to return (0-20) |
| `top_p` | `any` | No | Nucleus sampling parameter (0-1) |
| `trace` | `map[string]any` | No | Metadata for observability and tracing. |
| `truncation` | `any` | No |  |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CreatePresetFromInference(nil).Create(map[string]any{
    "slug": "example_slug",
    "cache_control": map[string]any{},
    "messages": []any{},
    "prediction": "example_prediction",
    "prompt": "example_prompt",
    "prompt_cache_options": "example_prompt_cache_options",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreatePresetFromInferenceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreateWorkspaceEntity

```go
createWorkspace := client.CreateWorkspace(nil)
fmt.Println(createWorkspace.GetName()) // "create_workspace"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreateWorkspaceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreditEntity

```go
credit := client.Credit(nil)
fmt.Println(credit.GetName()) // "credit"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total_credits` | `float64` | Yes | Total credits purchased |
| `total_usage` | `float64` | Yes | Total credits used |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Credit(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Credit(nil).Create(map[string]any{
    "total_credits": 1,
    "total_usage": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreditEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DestinationEntity

```go
destination := client.Destination(nil)
fmt.Println(destination.GetName()) // "destination"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DestinationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmbeddingEntity

```go
embedding := client.Embedding(nil)
fmt.Println(embedding.GetName()) // "embedding"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | Yes | List of embedding objects |
| `dimensions` | `int` | No | The number of dimensions for the output embeddings |
| `encoding_format` | `string` | No | The format of the output embeddings |
| `id` | `string` | No | Unique identifier for the embeddings response |
| `input` | `any` | Yes | Text, token, or multimodal input(s) to embed |
| `input_type` | `string` | No | The type of input (e.g. |
| `model` | `string` | Yes | The model used for embeddings |
| `object` | `string` | Yes |  |
| `provider` | `any` | No |  |
| `usage` | `map[string]any` | Yes | Token usage statistics |
| `user` | `string` | No | A unique identifier for the end-user |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Embedding(nil).Create(map[string]any{
    "data": []any{},
    "input": "example_input",
    "model": "example_model",
    "object": "example_object",
    "usage": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmbeddingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EndpointEntity

```go
endpoint := client.Endpoint(nil)
fmt.Println(endpoint.GetName()) // "endpoint"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `any` | Yes | Model architecture information |
| `benchmarks` | `map[string]any` | Yes | Third-party benchmark rankings for this model. |
| `canonical_slug` | `string` | Yes | Canonical slug for the model |
| `context_length` | `any` | Yes | Maximum context length in tokens |
| `created` | `int` | Yes | Unix timestamp of when the model was created |
| `default_parameters` | `any` | Yes | Default parameters for this model |
| `description` | `string` | Yes | Description of the model |
| `endpoints` | `[]any` | Yes | List of available endpoints for this model |
| `expiration_date` | `any` | No | The date after which the model may be removed. |
| `hugging_face_id` | `any` | No | Hugging Face model identifier, if applicable |
| `id` | `string` | Yes | Unique identifier for the model |
| `knowledge_cutoff` | `any` | No | The date up to which the model was trained on data. |
| `latency_last_30m` | `any` | Yes | Latency percentiles in milliseconds over the last 30 minutes. |
| `links` | `map[string]any` | Yes | Related API endpoints and resources for this model. |
| `max_completion_tokens` | `any` | Yes |  |
| `max_prompt_tokens` | `any` | Yes |  |
| `model_id` | `string` | Yes | The unique identifier for the model (permaslug) |
| `model_name` | `string` | Yes |  |
| `name` | `string` | Yes | Display name of the model |
| `per_request_limits` | `any` | Yes | Per-request token limits |
| `pricing` | `map[string]any` | Yes | Pricing information for the model |
| `provider_name` | `string` | Yes |  |
| `quantization` | `any` | Yes |  |
| `reasoning` | `map[string]any` | Yes | Reasoning effort configuration. |
| `status` | `int` | No |  |
| `supported_parameters` | `[]any` | Yes | List of supported parameters for this model |
| `supported_voices` | `any` | Yes | List of supported voice identifiers for TTS models. |
| `supports_implicit_caching` | `bool` | Yes |  |
| `tag` | `string` | Yes |  |
| `throughput_last_30m` | `any` | Yes |  |
| `top_provider` | `map[string]any` | Yes | Information about the top provider for this model |
| `uptime_last_1d` | `any` | Yes | Uptime percentage over the last 1 day, calculated as successful requests / (successful + error requests) * 100. |
| `uptime_last_30m` | `any` | Yes |  |
| `uptime_last_5m` | `any` | Yes | Uptime percentage over the last 5 minutes, calculated as successful requests / (successful + error requests) * 100. |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Endpoint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Endpoint(nil).Load(map[string]any{"author": "author", "slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EndpointEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FeedbackEntity

```go
feedback := client.Feedback(nil)
fmt.Println(feedback.GetName()) // "feedback"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FeedbackEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FileEntity

```go
file := client.File(nil)
fmt.Println(file.GetName()) // "file"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `downloadable` | `bool` | Yes |  |
| `filename` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `mime_type` | `string` | Yes |  |
| `size_bytes` | `int` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.File(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.File(nil).Load(map[string]any{"id": "file_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.File(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "downloadable": true,
    "filename": "example_filename",
    "id": "example_id",
    "mime_type": "example_mime_type",
    "size_bytes": 1,
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.File(nil).Remove(map[string]any{"id": "file_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GenerationEntity

```go
generation := client.Generation(nil)
fmt.Println(generation.GetName()) // "generation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_type` | `any` | Yes | Type of API used for the generation |
| `app_id` | `any` | Yes | ID of the app that made the request |
| `cache_discount` | `any` | Yes | Discount applied due to caching |
| `cancelled` | `any` | Yes | Whether the generation was cancelled |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the generation was created |
| `data_region` | `string` | Yes | The data region this generation was routed through. |
| `external_user` | `any` | Yes | External user identifier |
| `finish_reason` | `any` | Yes | Reason the generation finished |
| `generation_time` | `any` | Yes | Time taken for generation in milliseconds |
| `http_referer` | `any` | Yes | Referer header from the request |
| `id` | `string` | Yes | Unique identifier for the generation |
| `is_byok` | `bool` | Yes | Whether this used bring-your-own-key |
| `latency` | `any` | Yes | Total latency in milliseconds |
| `model` | `string` | Yes | Model used for the generation |
| `moderation_latency` | `any` | Yes | Moderation latency in milliseconds |
| `native_finish_reason` | `any` | Yes | Native finish reason as reported by provider |
| `native_tokens_cached` | `any` | Yes | Native cached tokens as reported by provider |
| `native_tokens_completion` | `any` | Yes | Native completion tokens as reported by provider |
| `native_tokens_completion_images` | `any` | Yes | Native completion image tokens as reported by provider |
| `native_tokens_prompt` | `any` | Yes | Native prompt tokens as reported by provider |
| `native_tokens_reasoning` | `any` | Yes | Native reasoning tokens as reported by provider |
| `num_fetches` | `any` | Yes | Number of web fetches performed |
| `num_input_audio_prompt` | `any` | Yes | Number of audio inputs in the prompt |
| `num_media_completion` | `any` | Yes | Number of media items in the completion |
| `num_media_prompt` | `any` | Yes | Number of media items in the prompt |
| `num_search_results` | `any` | Yes | Number of search results included |
| `origin` | `string` | Yes | Origin URL of the request |
| `preset_id` | `any` | Yes | ID of the preset used for this generation, null if no preset was used |
| `provider_name` | `any` | Yes | Name of the provider that served the request |
| `provider_responses` | `any` | Yes | List of provider responses for this generation, including fallback attempts |
| `request_id` | `any` | No | Unique identifier grouping all generations from a single API request |
| `response_cache_source_id` | `any` | No | If this generation was served from response cache, contains the original generation ID. |
| `router` | `any` | Yes | Router used for the request (e.g., openrouter/auto) |
| `service_tier` | `any` | Yes | Service tier the upstream provider reported running this request on, or null if it did not report one. |
| `session_id` | `any` | No | Session identifier grouping multiple generations in the same session |
| `streamed` | `any` | Yes | Whether the response was streamed |
| `tokens_completion` | `any` | Yes | Number of tokens in the completion |
| `tokens_prompt` | `any` | Yes | Number of tokens in the prompt |
| `total_cost` | `float64` | Yes | Total cost of the generation in USD |
| `upstream_id` | `any` | Yes | Upstream provider's identifier for this generation |
| `upstream_inference_cost` | `any` | Yes | Cost charged by the upstream provider |
| `usage` | `float64` | Yes | Usage amount in USD |
| `user_agent` | `any` | Yes | User-Agent header from the request |
| `web_search_engine` | `any` | Yes | The resolved web search engine used for this generation (e.g. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Generation(nil).Load(map[string]any{"id": "generation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GenerationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GenerationContentEntity

```go
generationContent := client.GenerationContent(nil)
fmt.Println(generationContent.GetName()) // "generation_content"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `any` | Yes | The input to the generation — either a prompt string or an array of messages |
| `output` | `map[string]any` | Yes | The output from the generation |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GenerationContent(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GenerationContentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GuardrailEntity

```go
guardrail := client.Guardrail(nil)
fmt.Println(guardrail.GetName()) // "guardrail"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_models` | `any` | No | Array of model canonical_slugs (immutable identifiers) |
| `allowed_providers` | `any` | No | List of allowed provider IDs |
| `content_filter_builtins` | `any` | No | Builtin content filters applied to requests. |
| `content_filters` | `any` | No | Custom regex content filters applied to request messages |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the guardrail was created |
| `description` | `any` | No | Description of the guardrail |
| `enforce_zdr` | `any` | No | Deprecated. |
| `enforce_zdr_anthropic` | `any` | No | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `any` | No | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `any` | No | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `any` | No | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `any` | No | Whether to enforce zero data retention for xAI models. |
| `id` | `string` | Yes | Unique identifier for the guardrail |
| `ignored_models` | `any` | No | Array of model canonical_slugs to exclude from routing |
| `ignored_providers` | `any` | No | List of provider IDs to exclude from routing |
| `limit_usd` | `any` | No | Spending limit in USD |
| `name` | `string` | Yes | Name of the guardrail |
| `reset_interval` | `any` | No | Interval at which the limit resets (daily, weekly, monthly) |
| `updated_at` | `any` | No | ISO 8601 timestamp of when the guardrail was last updated |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Guardrail(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Guardrail(nil).Load(map[string]any{"id": "guardrail_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Guardrail(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "id": "example_id",
    "name": "example_name",
    "workspace_id": "example_workspace_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Guardrail(nil).Remove(map[string]any{"id": "guardrail_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GuardrailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImageEntity

```go
image := client.Image(nil)
fmt.Println(image.GetName()) // "image"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `string` | No | Normalized aspect ratio of the generated image. |
| `background` | `string` | No | Background treatment. |
| `created` | `int` | Yes | Unix timestamp (seconds) when the image was generated |
| `data` | `[]any` | Yes | Generated images |
| `input_references` | `[]any` | No | Reference images to guide image-to-image generation, as base64 data URLs or HTTP(S) URLs. |
| `model` | `string` | Yes | The image generation model to use |
| `n` | `int` | No | Number of images to generate (1-10). |
| `output_compression` | `int` | No | Compression level (0-100) for webp/jpeg output. |
| `output_format` | `string` | No | Encoding of the returned image bytes. |
| `prompt` | `string` | Yes | Text description of the desired image |
| `provider` | `map[string]any` | No | Provider routing preferences and provider-specific passthrough configuration. |
| `quality` | `string` | No | Rendering quality. |
| `resolution` | `string` | No | Normalized resolution tier of the generated image. |
| `seed` | `int` | No | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `string` | No | Optional. |
| `stream` | `bool` | No | If true, partial images are streamed as SSE events as they become available. |
| `usage` | `map[string]any` | Yes | Token and cost usage for the image generation request, when available |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Image(nil).Create(map[string]any{
    "created": 1,
    "data": []any{},
    "model": "example_model",
    "prompt": "example_prompt",
    "usage": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImageModelEndpointEntity

```go
imageModelEndpoint := client.ImageModelEndpoint(nil)
fmt.Println(imageModelEndpoint.GetName()) // "image_model_endpoint"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_passthrough_parameters` | `[]any` | Yes | Provider-specific options accepted under provider.options[provider_slug]. |
| `pricing` | `[]any` | Yes | Billable pricing lines for this endpoint. |
| `provider_name` | `string` | Yes | Provider display name |
| `provider_slug` | `string` | Yes | Provider slug |
| `provider_tag` | `any` | Yes | Provider tag for request-side selection |
| `supported_parameters` | `any` | Yes |  |
| `supports_streaming` | `bool` | Yes | Whether this endpoint supports native SSE streaming (`stream: true` in the request). |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ImageModelEndpoint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImageModelEndpointEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImageModelsListEntity

```go
imageModelsList := client.ImageModelsList(nil)
fmt.Println(imageModelsList.GetName()) // "image_models_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `map[string]any` | Yes |  |
| `created` | `int` | Yes | Unix timestamp (seconds) of when the model was created |
| `description` | `string` | Yes |  |
| `endpoints` | `string` | Yes | Relative URL to the full per-endpoint records for this model |
| `id` | `string` | Yes | Model slug |
| `name` | `string` | Yes | Display name |
| `supported_parameters` | `map[string]any` | Yes | Union of supported parameters across every endpoint of this model. |
| `supports_streaming` | `bool` | Yes | Whether any endpoint of this model supports native SSE streaming on the dedicated Image API (i.e. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ImageModelsList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImageModelsListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## KeyEntity

```go
key := client.Key(nil)
fmt.Println(key.GetName()) // "key"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `KeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListByokKeyEntity

```go
listByokKey := client.ListByokKey(nil)
fmt.Println(listByokKey.GetName()) // "list_byok_key"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListByokKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListGuardrailEntity

```go
listGuardrail := client.ListGuardrail(nil)
fmt.Println(listGuardrail.GetName()) // "list_guardrail"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListGuardrailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListKeyAssignmentEntity

```go
listKeyAssignment := client.ListKeyAssignment(nil)
fmt.Println(listKeyAssignment.GetName()) // "list_key_assignment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_by` | `any` | Yes | User ID of who made the assignment |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `string` | Yes | ID of the guardrail |
| `id` | `string` | Yes | Unique identifier for the assignment |
| `key_hash` | `string` | Yes | Hash of the assigned API key |
| `key_label` | `string` | Yes | Label of the API key |
| `key_name` | `string` | Yes | Name of the API key |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListKeyAssignment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListKeyAssignmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListMemberAssignmentEntity

```go
listMemberAssignment := client.ListMemberAssignment(nil)
fmt.Println(listMemberAssignment.GetName()) // "list_member_assignment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_by` | `any` | Yes | User ID of who made the assignment |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `string` | Yes | ID of the guardrail |
| `id` | `string` | Yes | Unique identifier for the assignment |
| `organization_id` | `string` | Yes | Organization ID |
| `user_id` | `string` | Yes | Clerk user ID of the assigned member |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListMemberAssignment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListMemberAssignmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListObservabilityDestinationEntity

```go
listObservabilityDestination := client.ListObservabilityDestination(nil)
fmt.Println(listObservabilityDestination.GetName()) // "list_observability_destination"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | Yes | List of observability destinations. |
| `total_count` | `int` | Yes | Total number of destinations matching the filters. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListObservabilityDestination(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListObservabilityDestinationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListPresetEntity

```go
listPreset := client.ListPreset(nil)
fmt.Println(listPreset.GetName()) // "list_preset"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListPresetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListPresetVersionEntity

```go
listPresetVersion := client.ListPresetVersion(nil)
fmt.Println(listPresetVersion.GetName()) // "list_preset_version"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `map[string]any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `preset_id` | `string` | Yes |  |
| `system_prompt` | `any` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `version` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListPresetVersion(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListPresetVersionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListWorkspaceEntity

```go
listWorkspace := client.ListWorkspace(nil)
fmt.Println(listWorkspace.GetName()) // "list_workspace"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListWorkspaceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListWorkspaceBudgetEntity

```go
listWorkspaceBudget := client.ListWorkspaceBudget(nil)
fmt.Println(listWorkspaceBudget.GetName()) // "list_workspace_budget"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the budget was created |
| `id` | `string` | Yes | Unique identifier for the budget |
| `limit_usd` | `float64` | Yes | Spending limit in USD for this interval |
| `reset_interval` | `any` | Yes | Interval at which spend resets. |
| `updated_at` | `string` | Yes | ISO 8601 timestamp of when the budget was last updated |
| `workspace_id` | `string` | Yes | ID of the workspace the budget belongs to |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListWorkspaceBudget(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListWorkspaceBudgetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListWorkspaceMemberEntity

```go
listWorkspaceMember := client.ListWorkspaceMember(nil)
fmt.Println(listWorkspaceMember.GetName()) // "list_workspace_member"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListWorkspaceMember(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListWorkspaceMemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MemberEntity

```go
member := client.Member(nil)
fmt.Println(member.GetName()) // "member"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MessageEntity

```go
message := client.Message(nil)
fmt.Println(message.GetName()) // "message"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_control` | `map[string]any` | Yes | Enable automatic prompt caching. |
| `context_management` | `any` | No |  |
| `fallbacks` | `any` | No | Fallback models to try if the primary model fails or refuses, in order. |
| `max_tokens` | `int` | No |  |
| `messages` | `any` | Yes |  |
| `metadata` | `map[string]any` | No |  |
| `model` | `string` | Yes |  |
| `models` | `[]any` | No |  |
| `output_config` | `map[string]any` | No | Configuration for controlling output behavior. |
| `plugins` | `[]any` | No | Plugins you want to enable for this request, including their settings. |
| `provider` | `any` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `route` | `any` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `service_tier` | `string` | No |  |
| `session_id` | `string` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `speed` | `any` | No |  |
| `stop_sequences` | `[]any` | No |  |
| `stop_server_tools_when` | `[]any` | No | Stop conditions for the server-tool agent loop. |
| `stream` | `bool` | No |  |
| `system` | `any` | No |  |
| `temperature` | `float64` | No |  |
| `thinking` | `any` | No |  |
| `tool_choice` | `any` | No |  |
| `tools` | `[]any` | No |  |
| `top_k` | `int` | No |  |
| `top_p` | `float64` | No |  |
| `trace` | `map[string]any` | No | Metadata for observability and tracing. |
| `user` | `string` | No | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Message(nil).Create(map[string]any{
    "cache_control": map[string]any{},
    "messages": "example_messages",
    "model": "example_model",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MessageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MetaEntity

```go
meta := client.Meta(nil)
fmt.Println(meta.GetName()) // "meta"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MetaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ModelEntity

```go
model := client.Model(nil)
fmt.Println(model.GetName()) // "model"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `map[string]any` | Yes | Model architecture information |
| `benchmarks` | `map[string]any` | Yes | Third-party benchmark rankings for this model. |
| `canonical_slug` | `string` | Yes | Canonical slug for the model |
| `context_length` | `any` | Yes | Maximum context length in tokens |
| `created` | `int` | Yes | Unix timestamp of when the model was created |
| `default_parameters` | `any` | Yes | Default parameters for this model |
| `description` | `string` | No | Description of the model |
| `expiration_date` | `any` | No | The date after which the model may be removed. |
| `hugging_face_id` | `any` | No | Hugging Face model identifier, if applicable |
| `id` | `string` | Yes | Unique identifier for the model |
| `knowledge_cutoff` | `any` | No | The date up to which the model was trained on data. |
| `links` | `map[string]any` | Yes | Related API endpoints and resources for this model. |
| `name` | `string` | Yes | Display name of the model |
| `per_request_limits` | `any` | Yes | Per-request token limits |
| `pricing` | `map[string]any` | Yes | Pricing information for the model |
| `reasoning` | `map[string]any` | Yes | Reasoning effort configuration. |
| `supported_parameters` | `[]any` | Yes | List of supported parameters for this model |
| `supported_voices` | `any` | Yes | List of supported voice identifiers for TTS models. |
| `top_provider` | `map[string]any` | Yes | Information about the top provider for this model |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Model(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Model(nil).Load(map[string]any{"author": "author", "slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ModelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ModelsCountEntity

```go
modelsCount := client.ModelsCount(nil)
fmt.Println(modelsCount.GetName()) // "models_count"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | Yes | Total number of available models |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ModelsCount(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ModelsCountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ModelsListEntity

```go
modelsList := client.ModelsList(nil)
fmt.Println(modelsList.GetName()) // "models_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `map[string]any` | Yes | Model architecture information |
| `benchmarks` | `map[string]any` | Yes | Third-party benchmark rankings for this model. |
| `canonical_slug` | `string` | Yes | Canonical slug for the model |
| `context_length` | `any` | Yes | Maximum context length in tokens |
| `created` | `int` | Yes | Unix timestamp of when the model was created |
| `default_parameters` | `any` | Yes | Default parameters for this model |
| `description` | `string` | No | Description of the model |
| `expiration_date` | `any` | No | The date after which the model may be removed. |
| `hugging_face_id` | `any` | No | Hugging Face model identifier, if applicable |
| `id` | `string` | Yes | Unique identifier for the model |
| `knowledge_cutoff` | `any` | No | The date up to which the model was trained on data. |
| `links` | `map[string]any` | Yes | Related API endpoints and resources for this model. |
| `name` | `string` | Yes | Display name of the model |
| `per_request_limits` | `any` | Yes | Per-request token limits |
| `pricing` | `map[string]any` | Yes | Pricing information for the model |
| `reasoning` | `map[string]any` | Yes | Reasoning effort configuration. |
| `supported_parameters` | `[]any` | Yes | List of supported parameters for this model |
| `supported_voices` | `any` | Yes | List of supported voice identifiers for TTS models. |
| `top_provider` | `map[string]any` | Yes | Information about the top provider for this model |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ModelsList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ModelsListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OAuthEntity

```go
oAuth := client.OAuth(nil)
fmt.Println(oAuth.GetName()) // "o_auth"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `int` | Yes | The application ID associated with this auth code |
| `callback_url` | `string` | Yes | The callback URL to redirect to after authorization. |
| `code` | `string` | Yes | The authorization code received from the OAuth redirect |
| `code_challenge` | `string` | No | PKCE code challenge for enhanced security |
| `code_challenge_method` | `any` | No | The method used to generate the code challenge |
| `code_verifier` | `string` | No | The code verifier if code_challenge was used in the authorization request |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the auth code was created |
| `expires_at` | `any` | No | Optional expiration time for the API key to be created |
| `id` | `string` | Yes | The authorization code ID to use in the exchange request |
| `key` | `string` | Yes | The API key to use for OpenRouter requests |
| `key_label` | `string` | No | Optional custom label for the API key. |
| `limit` | `float64` | No | Credit limit for the API key to be created |
| `spawn_agent` | `string` | No | Agent identifier for spawn telemetry |
| `spawn_cloud` | `string` | No | Cloud identifier for spawn telemetry |
| `usage_limit_type` | `string` | No | Optional credit limit reset interval. |
| `user_id` | `any` | Yes | User ID associated with the API key |
| `workspace_id` | `string` | No | Optional workspace ID to associate the API key with |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OAuth(nil).Create(map[string]any{
    "app_id": 1,
    "callback_url": "example_callback_url",
    "code": "example_code",
    "created_at": "example_created_at",
    "id": "example_id",
    "key": "example_key",
    "user_id": "example_user_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OAuthEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ObservabilityDestinationEntity

```go
observabilityDestination := client.ObservabilityDestination(nil)
fmt.Println(observabilityDestination.GetName()) // "observability_destination"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ObservabilityDestination(nil).Load(map[string]any{"id": "observability_destination_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ObservabilityDestination(nil).Remove(map[string]any{"id": "observability_destination_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ObservabilityDestinationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OpenResponsesResultEntity

```go
openResponsesResult := client.OpenResponsesResult(nil)
fmt.Println(openResponsesResult.GetName()) // "open_responses_result"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `background` | `any` | No |  |
| `cache_control` | `map[string]any` | Yes | Enable automatic prompt caching. |
| `debug` | `map[string]any` | No | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `any` | No |  |
| `image_config` | `map[string]any` | No | Provider-specific image configuration options. |
| `include` | `any` | No |  |
| `input` | `any` | No | Input for a response request - can be a string or array of items |
| `instructions` | `any` | No |  |
| `max_output_tokens` | `any` | No |  |
| `max_tool_calls` | `any` | No |  |
| `metadata` | `any` | No | Metadata key-value pairs for the request. |
| `modalities` | `[]any` | No | Output modalities for the response. |
| `model` | `string` | No |  |
| `models` | `[]any` | No |  |
| `parallel_tool_calls` | `any` | No |  |
| `plugins` | `[]any` | No | Plugins you want to enable for this request, including their settings. |
| `presence_penalty` | `any` | No |  |
| `previous_response_id` | `string` | No | Not supported. |
| `prompt` | `any` | Yes |  |
| `prompt_cache_key` | `any` | No |  |
| `prompt_cache_options` | `any` | Yes | Request-level prompt-cache controls. |
| `provider` | `any` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `any` | No | Configuration for reasoning mode in the response |
| `route` | `any` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `any` | No |  |
| `service_tier` | `any` | No |  |
| `session_id` | `string` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop_server_tools_when` | `[]any` | No | Stop conditions for the server-tool agent loop. |
| `store` | `bool` | No |  |
| `stream` | `bool` | No |  |
| `temperature` | `any` | No |  |
| `text` | `any` | No | Text output configuration including format and verbosity |
| `tool_choice` | `any` | No |  |
| `tools` | `[]any` | No |  |
| `top_k` | `int` | No |  |
| `top_logprobs` | `any` | No |  |
| `top_p` | `any` | No |  |
| `trace` | `map[string]any` | No | Metadata for observability and tracing. |
| `truncation` | `any` | No |  |
| `user` | `string` | No | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OpenResponsesResult(nil).Create(map[string]any{
    "cache_control": map[string]any{},
    "prompt": "example_prompt",
    "prompt_cache_options": "example_prompt_cache_options",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OpenResponsesResultEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationEntity

```go
organization := client.Organization(nil)
fmt.Println(organization.GetName()) // "organization"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes | Email address of the member |
| `first_name` | `any` | Yes | First name of the member |
| `id` | `string` | Yes | User ID of the organization member |
| `last_name` | `any` | Yes | Last name of the member |
| `role` | `string` | Yes | Role of the member in the organization |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Organization(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PresetEntity

```go
preset := client.Preset(nil)
fmt.Println(preset.GetName()) // "preset"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `creator_user_id` | `any` | Yes |  |
| `description` | `any` | Yes |  |
| `designated_version` | `any` | Yes | A specific version of a preset, containing config and optional system prompt. |
| `designated_version_id` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `status` | `string` | Yes | The status of a preset. |
| `status_updated_at` | `any` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workspace_id` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Preset(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Preset(nil).Load(map[string]any{"id": "preset_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PresetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PresetVersionEntity

```go
presetVersion := client.PresetVersion(nil)
fmt.Println(presetVersion.GetName()) // "preset_version"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `map[string]any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `preset_id` | `string` | Yes |  |
| `system_prompt` | `any` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `version` | `int` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PresetVersion(nil).Load(map[string]any{"id": "preset_version_id", "slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PresetVersionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProviderEntity

```go
provider := client.Provider(nil)
fmt.Println(provider.GetName()) // "provider"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `datacenters` | `any` | No | ISO 3166-1 Alpha-2 country codes of the provider datacenter locations |
| `headquarters` | `any` | No | ISO 3166-1 Alpha-2 country code of the provider headquarters |
| `name` | `string` | Yes | Display name of the provider |
| `privacy_policy_url` | `any` | Yes | URL to the provider's privacy policy |
| `slug` | `string` | Yes | URL-friendly identifier for the provider |
| `status_page_url` | `any` | No | URL to the provider's status page |
| `terms_of_service_url` | `any` | No | URL to the provider's terms of service |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Provider(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProviderEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## QueryEntity

```go
query := client.Query(nil)
fmt.Println(query.GetName()) // "query"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `QueryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RankingsDailyEntity

```go
rankingsDaily := client.RankingsDaily(nil)
fmt.Println(rankingsDaily.GetName()) // "rankings_daily"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes | UTC calendar date the row is aggregated over (YYYY-MM-DD). |
| `model_permaslug` | `string` | Yes | Model variant permaslug (e.g. |
| `total_tokens` | `string` | Yes | Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RankingsDaily(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RankingsDailyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RemoveEntity

```go
remove := client.Remove(nil)
fmt.Println(remove.GetName()) // "remove"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RemoveEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RerankEntity

```go
rerank := client.Rerank(nil)
fmt.Println(rerank.GetName()) // "rerank"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `documents` | `[]any` | Yes | The list of documents to rerank. |
| `id` | `string` | No | Unique identifier for the rerank response (ORID format) |
| `model` | `string` | Yes | The model used for reranking |
| `provider` | `string` | No | The provider that served the rerank request |
| `query` | `string` | Yes | The search query to rerank documents against |
| `results` | `[]any` | Yes | List of rerank results sorted by relevance |
| `top_n` | `int` | No | Number of most relevant documents to return |
| `usage` | `map[string]any` | No | Usage statistics |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Rerank(nil).Create(map[string]any{
    "documents": []any{},
    "model": "example_model",
    "query": "example_query",
    "results": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RerankEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ResponseEntity

```go
response := client.Response(nil)
fmt.Println(response.GetName()) // "response"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ResponseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SpeechEntity

```go
speech := client.Speech(nil)
fmt.Println(speech.GetName()) // "speech"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SpeechEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SttEntity

```go
stt := client.Stt(nil)
fmt.Println(stt.GetName()) // "stt"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `duration` | `float64` | No | Duration of the input audio in seconds, present when response_format is verbose_json |
| `input_audio` | `map[string]any` | Yes | Base64-encoded audio to transcribe |
| `language` | `string` | No | Detected or forced language, present when response_format is verbose_json |
| `model` | `string` | Yes | STT model identifier |
| `provider` | `map[string]any` | No | Provider-specific passthrough configuration |
| `response_format` | `string` | No | Output format. |
| `segments` | `[]any` | No | Timestamped transcript segments, present when response_format is verbose_json |
| `task` | `string` | No | The task performed, present when response_format is verbose_json |
| `temperature` | `float64` | No | Sampling temperature for transcription |
| `text` | `string` | Yes | The transcribed text |
| `timestamp_granularities` | `[]any` | No | Timestamp detail levels to include when response_format is "verbose_json". |
| `usage` | `map[string]any` | No | Aggregated usage statistics for the request |
| `words` | `[]any` | No | Timestamped words, present when the provider returns word-level timestamps |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Stt(nil).Create(map[string]any{
    "input_audio": map[string]any{},
    "model": "example_model",
    "text": "example_text",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SttEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubmitGenerationFeedbackEntity

```go
submitGenerationFeedback := client.SubmitGenerationFeedback(nil)
fmt.Println(submitGenerationFeedback.GetName()) // "submit_generation_feedback"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes | The category of feedback being reported |
| `comment` | `string` | No | An optional free-text comment describing the feedback |
| `generation_id` | `string` | Yes | The generation to submit feedback on |
| `success` | `bool` | Yes | Whether the feedback was recorded |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SubmitGenerationFeedback(nil).Create(map[string]any{
    "category": "example_category",
    "generation_id": "example_generation_id",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubmitGenerationFeedbackEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TaskEntity

```go
task := client.Task(nil)
fmt.Println(task.GetName()) // "task"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `as_of` | `string` | Yes | UTC date (YYYY-MM-DD) of the window upper bound (yesterday). |
| `classifications` | `[]any` | Yes | Per-task classification market-share data, sorted by usage_share descending. |
| `macro_categories` | `[]any` | Yes | Aggregate market-share data per macro-category (code, data, agent, general). |
| `window_days` | `int` | Yes | Number of trailing days covered by this snapshot. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Task(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TaskEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TranscriptionEntity

```go
transcription := client.Transcription(nil)
fmt.Println(transcription.GetName()) // "transcription"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TranscriptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TtsEntity

```go
tts := client.Tts(nil)
fmt.Println(tts.GetName()) // "tts"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `string` | Yes | Text to synthesize |
| `model` | `string` | Yes | TTS model identifier |
| `provider` | `map[string]any` | No | Provider-specific passthrough configuration |
| `response_format` | `string` | No | Audio output format |
| `speed` | `float64` | No | Playback speed multiplier. |
| `voice` | `string` | Yes | Voice identifier (provider-specific). |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Tts(nil).Create(map[string]any{
    "input": "example_input",
    "model": "example_model",
    "voice": "example_voice",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TtsEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UnifiedBenchmarkEntity

```go
unifiedBenchmark := client.UnifiedBenchmark(nil)
fmt.Println(unifiedBenchmark.GetName()) // "unified_benchmark"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | Yes |  |
| `meta` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.UnifiedBenchmark(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UnifiedBenchmarkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UpdateByokKeyEntity

```go
updateByokKey := client.UpdateByokKey(nil)
fmt.Println(updateByokKey.GetName()) // "update_byok_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_models` | `any` | No | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `any` | No | Optional allowlist of user IDs that may use this credential. |
| `disabled` | `bool` | No | Whether this credential is disabled. |
| `is_fallback` | `bool` | No | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `string` | No | A new raw provider API key to rotate the credential in-place. |
| `name` | `any` | No | Optional human-readable name for the credential. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.UpdateByokKey(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UpdateByokKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UpdateGuardrailEntity

```go
updateGuardrail := client.UpdateGuardrail(nil)
fmt.Println(updateGuardrail.GetName()) // "update_guardrail"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_models` | `any` | No | Array of model identifiers (slug or canonical_slug accepted) |
| `allowed_providers` | `any` | No | New list of allowed provider IDs |
| `content_filter_builtins` | `any` | No | Builtin content filters to apply. |
| `content_filters` | `any` | No | Custom regex content filters to apply. |
| `description` | `any` | No | New description for the guardrail |
| `enforce_zdr` | `any` | No | Deprecated. |
| `enforce_zdr_anthropic` | `any` | No | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `any` | No | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `any` | No | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `any` | No | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `any` | No | Whether to enforce zero data retention for xAI models. |
| `ignored_models` | `any` | No | Array of model identifiers to exclude from routing (slug or canonical_slug accepted) |
| `ignored_providers` | `any` | No | List of provider IDs to exclude from routing |
| `limit_usd` | `any` | No | New spending limit in USD |
| `name` | `string` | No | New name for the guardrail |
| `reset_interval` | `any` | No | Interval at which the limit resets (daily, weekly, monthly) |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.UpdateGuardrail(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UpdateGuardrailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UpdateObservabilityDestinationEntity

```go
updateObservabilityDestination := client.UpdateObservabilityDestination(nil)
fmt.Println(updateObservabilityDestination.GetName()) // "update_observability_destination"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_key_hashes` | `any` | No | Optional allowlist of OpenRouter API key hashes. |
| `config` | `map[string]any` | No | Provider-specific configuration fields to update. |
| `enabled` | `bool` | No | Whether the destination is enabled. |
| `filter_rules` | `any` | No |  |
| `name` | `string` | No | Human-readable name for the destination. |
| `privacy_mode` | `bool` | No | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `float64` | No | Sampling rate between 0.0001 and 1 (1 = 100%). |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.UpdateObservabilityDestination(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UpdateObservabilityDestinationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UpdateWorkspaceEntity

```go
updateWorkspace := client.UpdateWorkspace(nil)
fmt.Println(updateWorkspace.GetName()) // "update_workspace"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the workspace was created |
| `created_by` | `any` | Yes | User ID of the workspace creator |
| `default_image_model` | `any` | No | Default image model for this workspace |
| `default_provider_sort` | `any` | No | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `any` | No | Default text model for this workspace |
| `description` | `any` | No | Description of the workspace |
| `id` | `string` | Yes | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `any` | No | Optional array of API key IDs to filter I/O logging |
| `io_logging_sampling_rate` | `float64` | No | Sampling rate for I/O logging (0.0001-1) |
| `is_data_discount_logging_enabled` | `bool` | No | Whether data discount logging is enabled |
| `is_observability_broadcast_enabled` | `bool` | No | Whether broadcast is enabled |
| `is_observability_io_logging_enabled` | `bool` | No | Whether private logging is enabled |
| `name` | `string` | Yes | Name for the new workspace |
| `slug` | `string` | Yes | URL-friendly slug (lowercase alphanumeric segments separated by single hyphens, no leading/trailing hyphens) |
| `updated_at` | `any` | Yes | ISO 8601 timestamp of when the workspace was last updated |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.UpdateWorkspace(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.UpdateWorkspace(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "created_by": "example_created_by",
    "id": "example_id",
    "name": "example_name",
    "slug": "example_slug",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.UpdateWorkspace(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UpdateWorkspaceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UpsertWorkspaceBudgetEntity

```go
upsertWorkspaceBudget := client.UpsertWorkspaceBudget(nil)
fmt.Println(upsertWorkspaceBudget.GetName()) // "upsert_workspace_budget"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `limit_usd` | `float64` | Yes | Spending limit in USD. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.UpsertWorkspaceBudget(nil).Update(map[string]any{
    "id": "id",
    "workspace_id": "workspace_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UpsertWorkspaceBudgetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserEntity

```go
user := client.User(nil)
fmt.Println(user.GetName()) // "user"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VersionEntity

```go
version := client.Version(nil)
fmt.Println(version.GetName()) // "version"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VersionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VideoEntity

```go
video := client.Video(nil)
fmt.Println(video.GetName()) // "video"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `string` | No | Aspect ratio of the generated video |
| `callback_url` | `string` | No | URL to receive a webhook notification when the video generation job completes. |
| `duration` | `int` | No | Duration of the generated video in seconds |
| `error` | `string` | No |  |
| `frame_images` | `[]any` | No | Images to use as the first and/or last frame of the generated video. |
| `generate_audio` | `bool` | No | Whether to generate audio alongside the video. |
| `generation_id` | `string` | No | The generation ID associated with this video generation job. |
| `id` | `string` | Yes |  |
| `input_references` | `[]any` | No | Reference assets to guide video generation. |
| `model` | `string` | Yes |  |
| `polling_url` | `string` | Yes |  |
| `prompt` | `string` | No | Text prompt describing the video to generate. |
| `provider` | `map[string]any` | No | Provider-specific passthrough configuration |
| `resolution` | `string` | No | Resolution of the generated video |
| `seed` | `int` | No | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `string` | No | Exact pixel dimensions of the generated video in "WIDTHxHEIGHT" format (e.g. |
| `status` | `string` | Yes |  |
| `unsigned_urls` | `[]any` | No |  |
| `usage` | `map[string]any` | No | Usage and cost information for the video generation. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Video(nil).Load(map[string]any{"id": "video_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Video(nil).Create(map[string]any{
    "id": "example_id",
    "model": "example_model",
    "polling_url": "example_polling_url",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VideoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VideoGenerationEntity

```go
videoGeneration := client.VideoGeneration(nil)
fmt.Println(videoGeneration.GetName()) // "video_generation"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.VideoGeneration(nil).Load(map[string]any{"id": "video_generation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VideoGenerationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VideoModelsListEntity

```go
videoModelsList := client.VideoModelsList(nil)
fmt.Println(videoModelsList.GetName()) // "video_models_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_passthrough_parameters` | `[]any` | Yes | List of parameters that are allowed to be passed through to the provider |
| `canonical_slug` | `string` | Yes | Canonical slug for the model |
| `created` | `int` | Yes | Unix timestamp of when the model was created |
| `description` | `string` | No | Description of the model |
| `generate_audio` | `any` | Yes | Whether the model supports generating audio alongside video |
| `hugging_face_id` | `any` | No | Hugging Face model identifier, if applicable |
| `id` | `string` | Yes | Unique identifier for the model |
| `name` | `string` | Yes | Display name of the model |
| `pricing_skus` | `any` | No | Pricing SKUs with provider prefix stripped, values as strings |
| `seed` | `any` | Yes | Whether the model supports deterministic generation via seed parameter |
| `supported_aspect_ratios` | `any` | Yes | Supported output aspect ratios |
| `supported_durations` | `any` | Yes | Supported video durations in seconds |
| `supported_frame_images` | `any` | Yes | Supported frame image types (e.g. |
| `supported_resolutions` | `any` | Yes | Supported output resolutions |
| `supported_sizes` | `any` | Yes | Supported output sizes (width x height) |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.VideoModelsList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VideoModelsListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkspaceEntity

```go
workspace := client.Workspace(nil)
fmt.Println(workspace.GetName()) // "workspace"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the workspace was created |
| `created_by` | `any` | Yes | User ID of the workspace creator |
| `default_image_model` | `any` | Yes | Default image model for this workspace |
| `default_provider_sort` | `any` | Yes | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `any` | Yes | Default text model for this workspace |
| `description` | `any` | Yes | Description of the workspace |
| `id` | `string` | Yes | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `any` | Yes | Optional array of API key IDs to filter I/O logging. |
| `io_logging_sampling_rate` | `float64` | Yes | Sampling rate for I/O logging (0.0001-1). |
| `is_data_discount_logging_enabled` | `bool` | Yes | Whether data discount logging is enabled for this workspace |
| `is_observability_broadcast_enabled` | `bool` | Yes | Whether broadcast is enabled for this workspace |
| `is_observability_io_logging_enabled` | `bool` | Yes | Whether private logging is enabled for this workspace |
| `name` | `string` | Yes | Name of the workspace |
| `slug` | `string` | Yes | URL-friendly slug for the workspace |
| `updated_at` | `any` | Yes | ISO 8601 timestamp of when the workspace was last updated |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Workspace(nil).Load(map[string]any{"id": "workspace_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Workspace(nil).Remove(map[string]any{"id": "workspace_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkspaceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkspaceBudgetEntity

```go
workspaceBudget := client.WorkspaceBudget(nil)
fmt.Println(workspaceBudget.GetName()) // "workspace_budget"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.WorkspaceBudget(nil).Remove(map[string]any{"id": "id", "workspace_id": "workspace_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkspaceBudgetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZdrEntity

```go
zdr := client.Zdr(nil)
fmt.Println(zdr.GetName()) // "zdr"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZdrEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewOpenrouterModelsSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

