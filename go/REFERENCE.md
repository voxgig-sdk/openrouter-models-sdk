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
| `byok_usage_inference` | `float64` | Yes |  |
| `completion_tokens` | `int` | Yes |  |
| `date` | `string` | Yes |  |
| `endpoint_id` | `string` | Yes |  |
| `model` | `string` | Yes |  |
| `model_permaslug` | `string` | Yes |  |
| `prompt_tokens` | `int` | Yes |  |
| `provider_name` | `string` | Yes |  |
| `reasoning_tokens` | `int` | Yes |  |
| `requests` | `int` | Yes |  |
| `usage` | `float64` | Yes |  |

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
| `byok_usage` | `float64` | Yes |  |
| `byok_usage_daily` | `float64` | Yes |  |
| `byok_usage_monthly` | `float64` | Yes |  |
| `byok_usage_weekly` | `float64` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator_user_id` | `any` | Yes |  |
| `disabled` | `bool` | Yes |  |
| `expires_at` | `any` | No |  |
| `hash` | `string` | Yes |  |
| `include_byok_in_limit` | `bool` | Yes |  |
| `is_free_tier` | `bool` | Yes |  |
| `is_management_key` | `bool` | Yes |  |
| `is_provisioning_key` | `bool` | Yes |  |
| `label` | `string` | Yes |  |
| `limit` | `any` | Yes |  |
| `limit_remaining` | `any` | Yes |  |
| `limit_reset` | `any` | Yes |  |
| `name` | `string` | Yes |  |
| `rate_limit` | `map[string]any` | Yes |  |
| `updated_at` | `any` | Yes |  |
| `usage` | `float64` | Yes |  |
| `usage_daily` | `float64` | Yes |  |
| `usage_monthly` | `float64` | Yes |  |
| `usage_weekly` | `float64` | Yes |  |
| `workspace_id` | `string` | Yes |  |

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
| `app_id` | `int` | Yes |  |
| `app_name` | `string` | Yes |  |
| `rank` | `int` | Yes |  |
| `total_requests` | `int` | Yes |  |
| `total_tokens` | `string` | Yes |  |

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
| `classifier_dimensions` | `map[string]any` | Yes |  |
| `classifier_filters` | `map[string]any` | Yes |  |
| `data` | `[]any` | Yes |  |
| `dimensions` | `[]any` | Yes |  |
| `filters` | `[]any` | No |  |
| `granularities` | `[]any` | Yes |  |
| `granularity` | `string` | No |  |
| `group_limit` | `int` | No |  |
| `limit` | `int` | No |  |
| `metadata` | `map[string]any` | Yes |  |
| `metrics` | `[]any` | Yes |  |
| `operators` | `[]any` | Yes |  |
| `order_by` | `map[string]any` | Yes |  |
| `time_range` | `map[string]any` | Yes |  |
| `warnings` | `[]any` | No |  |

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
| `added_count` | `int` | Yes |  |
| `data` | `[]any` | Yes |  |
| `user_ids` | `[]any` | Yes |  |

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
| `assigned_count` | `int` | Yes |  |
| `key_hashes` | `[]any` | Yes |  |

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
| `assigned_count` | `int` | Yes |  |
| `member_user_ids` | `[]any` | Yes |  |

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
| `removed_count` | `int` | Yes |  |
| `user_ids` | `[]any` | Yes |  |

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
| `key_hashes` | `[]any` | Yes |  |
| `unassigned_count` | `int` | Yes |  |

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
| `member_user_ids` | `[]any` | Yes |  |
| `unassigned_count` | `int` | Yes |  |

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
| `allowed_api_key_hashes` | `any` | Yes |  |
| `allowed_models` | `any` | Yes |  |
| `allowed_user_ids` | `any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `disabled` | `bool` | Yes |  |
| `id` | `string` | Yes |  |
| `is_fallback` | `bool` | Yes |  |
| `key` | `string` | Yes |  |
| `label` | `string` | Yes |  |
| `name` | `any` | No |  |
| `provider` | `string` | Yes |  |
| `sort_order` | `int` | Yes |  |
| `workspace_id` | `string` | Yes |  |

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
| `cache_control` | `map[string]any` | Yes |  |
| `choices` | `[]any` | Yes |  |
| `created` | `int` | Yes |  |
| `debug` | `map[string]any` | No |  |
| `frequency_penalty` | `any` | No |  |
| `id` | `string` | Yes |  |
| `image_config` | `map[string]any` | No |  |
| `logit_bias` | `any` | No |  |
| `logprobs` | `any` | No |  |
| `max_completion_tokens` | `any` | No |  |
| `max_tokens` | `any` | No |  |
| `messages` | `[]any` | Yes |  |
| `metadata` | `map[string]any` | No |  |
| `min_p` | `any` | No |  |
| `modalities` | `[]any` | No |  |
| `model` | `string` | Yes |  |
| `models` | `[]any` | No |  |
| `object` | `string` | Yes |  |
| `openrouter_metadata` | `map[string]any` | Yes |  |
| `parallel_tool_calls` | `any` | No |  |
| `plugins` | `[]any` | No |  |
| `prediction` | `any` | Yes |  |
| `presence_penalty` | `any` | No |  |
| `prompt_cache_key` | `any` | No |  |
| `prompt_cache_options` | `any` | Yes |  |
| `provider` | `any` | No |  |
| `reasoning` | `map[string]any` | No |  |
| `reasoning_effort` | `any` | No |  |
| `repetition_penalty` | `any` | No |  |
| `response_format` | `any` | No |  |
| `route` | `any` | No |  |
| `seed` | `any` | No |  |
| `service_tier` | `any` | No |  |
| `session_id` | `string` | No |  |
| `stop` | `any` | No |  |
| `stop_server_tools_when` | `[]any` | No |  |
| `stream` | `bool` | No |  |
| `stream_options` | `any` | No |  |
| `system_fingerprint` | `any` | Yes |  |
| `temperature` | `any` | No |  |
| `tool_choice` | `any` | No |  |
| `tools` | `[]any` | No |  |
| `top_a` | `any` | No |  |
| `top_k` | `any` | No |  |
| `top_logprobs` | `any` | No |  |
| `top_p` | `any` | No |  |
| `trace` | `map[string]any` | No |  |
| `usage` | `map[string]any` | Yes |  |
| `user` | `string` | No |  |

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
| `api_key_hashes` | `any` | No |  |
| `config` | `map[string]any` | Yes |  |
| `enabled` | `bool` | No |  |
| `filter_rules` | `any` | Yes |  |
| `name` | `string` | Yes |  |
| `privacy_mode` | `bool` | No |  |
| `sampling_rate` | `float64` | No |  |
| `type` | `string` | Yes |  |
| `workspace_id` | `string` | No |  |

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
| `cache_control` | `map[string]any` | Yes |  |
| `context_management` | `any` | No |  |
| `debug` | `map[string]any` | No |  |
| `fallbacks` | `any` | No |  |
| `frequency_penalty` | `any` | No |  |
| `image_config` | `map[string]any` | No |  |
| `include` | `any` | No |  |
| `input` | `any` | No |  |
| `instructions` | `any` | No |  |
| `logit_bias` | `any` | No |  |
| `logprobs` | `any` | No |  |
| `max_completion_tokens` | `any` | No |  |
| `max_output_tokens` | `any` | No |  |
| `max_tokens` | `any` | No |  |
| `max_tool_calls` | `any` | No |  |
| `messages` | `[]any` | Yes |  |
| `metadata` | `map[string]any` | No |  |
| `min_p` | `any` | No |  |
| `modalities` | `[]any` | No |  |
| `model` | `string` | No |  |
| `models` | `[]any` | No |  |
| `output_config` | `map[string]any` | No |  |
| `parallel_tool_calls` | `any` | No |  |
| `plugins` | `[]any` | No |  |
| `prediction` | `any` | Yes |  |
| `presence_penalty` | `any` | No |  |
| `previous_response_id` | `string` | No |  |
| `prompt` | `any` | Yes |  |
| `prompt_cache_key` | `any` | No |  |
| `prompt_cache_options` | `any` | Yes |  |
| `provider` | `any` | No |  |
| `reasoning` | `map[string]any` | No |  |
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
| `stop_sequences` | `[]any` | No |  |
| `stop_server_tools_when` | `[]any` | No |  |
| `store` | `bool` | No |  |
| `stream` | `bool` | No |  |
| `stream_options` | `any` | No |  |
| `system` | `any` | No |  |
| `temperature` | `any` | No |  |
| `text` | `any` | No |  |
| `thinking` | `any` | No |  |
| `tool_choice` | `any` | No |  |
| `tools` | `[]any` | No |  |
| `top_a` | `any` | No |  |
| `top_k` | `any` | No |  |
| `top_logprobs` | `any` | No |  |
| `top_p` | `any` | No |  |
| `trace` | `map[string]any` | No |  |
| `truncation` | `any` | No |  |
| `user` | `string` | No |  |

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
| `total_credits` | `float64` | Yes |  |
| `total_usage` | `float64` | Yes |  |

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
| `data` | `[]any` | Yes |  |
| `dimensions` | `int` | No |  |
| `encoding_format` | `string` | No |  |
| `id` | `string` | No |  |
| `input` | `any` | Yes |  |
| `input_type` | `string` | No |  |
| `model` | `string` | Yes |  |
| `object` | `string` | Yes |  |
| `provider` | `any` | No |  |
| `usage` | `map[string]any` | Yes |  |
| `user` | `string` | No |  |

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
| `architecture` | `any` | Yes |  |
| `benchmarks` | `map[string]any` | Yes |  |
| `canonical_slug` | `string` | Yes |  |
| `context_length` | `any` | Yes |  |
| `created` | `int` | Yes |  |
| `default_parameters` | `any` | Yes |  |
| `description` | `string` | Yes |  |
| `endpoints` | `[]any` | Yes |  |
| `expiration_date` | `any` | No |  |
| `hugging_face_id` | `any` | No |  |
| `id` | `string` | Yes |  |
| `knowledge_cutoff` | `any` | No |  |
| `latency_last_30m` | `any` | Yes |  |
| `links` | `map[string]any` | Yes |  |
| `max_completion_tokens` | `any` | Yes |  |
| `max_prompt_tokens` | `any` | Yes |  |
| `model_id` | `string` | Yes |  |
| `model_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `per_request_limits` | `any` | Yes |  |
| `pricing` | `map[string]any` | Yes |  |
| `provider_name` | `string` | Yes |  |
| `quantization` | `any` | Yes |  |
| `reasoning` | `map[string]any` | Yes |  |
| `status` | `int` | No |  |
| `supported_parameters` | `[]any` | Yes |  |
| `supported_voices` | `any` | Yes |  |
| `supports_implicit_caching` | `bool` | Yes |  |
| `tag` | `string` | Yes |  |
| `throughput_last_30m` | `any` | Yes |  |
| `top_provider` | `map[string]any` | Yes |  |
| `uptime_last_1d` | `any` | Yes |  |
| `uptime_last_30m` | `any` | Yes |  |
| `uptime_last_5m` | `any` | Yes |  |

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
| `api_type` | `any` | Yes |  |
| `app_id` | `any` | Yes |  |
| `cache_discount` | `any` | Yes |  |
| `cancelled` | `any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `data_region` | `string` | Yes |  |
| `external_user` | `any` | Yes |  |
| `finish_reason` | `any` | Yes |  |
| `generation_time` | `any` | Yes |  |
| `http_referer` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `is_byok` | `bool` | Yes |  |
| `latency` | `any` | Yes |  |
| `model` | `string` | Yes |  |
| `moderation_latency` | `any` | Yes |  |
| `native_finish_reason` | `any` | Yes |  |
| `native_tokens_cached` | `any` | Yes |  |
| `native_tokens_completion` | `any` | Yes |  |
| `native_tokens_completion_images` | `any` | Yes |  |
| `native_tokens_prompt` | `any` | Yes |  |
| `native_tokens_reasoning` | `any` | Yes |  |
| `num_fetches` | `any` | Yes |  |
| `num_input_audio_prompt` | `any` | Yes |  |
| `num_media_completion` | `any` | Yes |  |
| `num_media_prompt` | `any` | Yes |  |
| `num_search_results` | `any` | Yes |  |
| `origin` | `string` | Yes |  |
| `preset_id` | `any` | Yes |  |
| `provider_name` | `any` | Yes |  |
| `provider_responses` | `any` | Yes |  |
| `request_id` | `any` | No |  |
| `response_cache_source_id` | `any` | No |  |
| `router` | `any` | Yes |  |
| `service_tier` | `any` | Yes |  |
| `session_id` | `any` | No |  |
| `streamed` | `any` | Yes |  |
| `tokens_completion` | `any` | Yes |  |
| `tokens_prompt` | `any` | Yes |  |
| `total_cost` | `float64` | Yes |  |
| `upstream_id` | `any` | Yes |  |
| `upstream_inference_cost` | `any` | Yes |  |
| `usage` | `float64` | Yes |  |
| `user_agent` | `any` | Yes |  |
| `web_search_engine` | `any` | Yes |  |

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
| `input` | `any` | Yes |  |
| `output` | `map[string]any` | Yes |  |

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
| `allowed_models` | `any` | No |  |
| `allowed_providers` | `any` | No |  |
| `content_filter_builtins` | `any` | No |  |
| `content_filters` | `any` | No |  |
| `created_at` | `string` | Yes |  |
| `description` | `any` | No |  |
| `enforce_zdr` | `any` | No |  |
| `enforce_zdr_anthropic` | `any` | No |  |
| `enforce_zdr_google` | `any` | No |  |
| `enforce_zdr_openai` | `any` | No |  |
| `enforce_zdr_other` | `any` | No |  |
| `enforce_zdr_xai` | `any` | No |  |
| `id` | `string` | Yes |  |
| `ignored_models` | `any` | No |  |
| `ignored_providers` | `any` | No |  |
| `limit_usd` | `any` | No |  |
| `name` | `string` | Yes |  |
| `reset_interval` | `any` | No |  |
| `updated_at` | `any` | No |  |
| `workspace_id` | `string` | Yes |  |

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
| `aspect_ratio` | `string` | No |  |
| `background` | `string` | No |  |
| `created` | `int` | Yes |  |
| `data` | `[]any` | Yes |  |
| `input_references` | `[]any` | No |  |
| `model` | `string` | Yes |  |
| `n` | `int` | No |  |
| `output_compression` | `int` | No |  |
| `output_format` | `string` | No |  |
| `prompt` | `string` | Yes |  |
| `provider` | `map[string]any` | No |  |
| `quality` | `string` | No |  |
| `resolution` | `string` | No |  |
| `seed` | `int` | No |  |
| `size` | `string` | No |  |
| `stream` | `bool` | No |  |
| `usage` | `map[string]any` | Yes |  |

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
| `allowed_passthrough_parameters` | `[]any` | Yes |  |
| `pricing` | `[]any` | Yes |  |
| `provider_name` | `string` | Yes |  |
| `provider_slug` | `string` | Yes |  |
| `provider_tag` | `any` | Yes |  |
| `supported_parameters` | `any` | Yes |  |
| `supports_streaming` | `bool` | Yes |  |

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
| `created` | `int` | Yes |  |
| `description` | `string` | Yes |  |
| `endpoints` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `supported_parameters` | `map[string]any` | Yes |  |
| `supports_streaming` | `bool` | Yes |  |

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
| `assigned_by` | `any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `guardrail_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `key_hash` | `string` | Yes |  |
| `key_label` | `string` | Yes |  |
| `key_name` | `string` | Yes |  |

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
| `assigned_by` | `any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `guardrail_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `organization_id` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |

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
| `data` | `[]any` | Yes |  |
| `total_count` | `int` | Yes |  |

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
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `limit_usd` | `float64` | Yes |  |
| `reset_interval` | `any` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workspace_id` | `string` | Yes |  |

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
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `role` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |
| `workspace_id` | `string` | Yes |  |

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
| `cache_control` | `map[string]any` | Yes |  |
| `context_management` | `any` | No |  |
| `fallbacks` | `any` | No |  |
| `max_tokens` | `int` | No |  |
| `messages` | `any` | Yes |  |
| `metadata` | `map[string]any` | No |  |
| `model` | `string` | Yes |  |
| `models` | `[]any` | No |  |
| `output_config` | `map[string]any` | No |  |
| `plugins` | `[]any` | No |  |
| `provider` | `any` | No |  |
| `route` | `any` | No |  |
| `service_tier` | `string` | No |  |
| `session_id` | `string` | No |  |
| `speed` | `any` | No |  |
| `stop_sequences` | `[]any` | No |  |
| `stop_server_tools_when` | `[]any` | No |  |
| `stream` | `bool` | No |  |
| `system` | `any` | No |  |
| `temperature` | `float64` | No |  |
| `thinking` | `any` | No |  |
| `tool_choice` | `any` | No |  |
| `tools` | `[]any` | No |  |
| `top_k` | `int` | No |  |
| `top_p` | `float64` | No |  |
| `trace` | `map[string]any` | No |  |
| `user` | `string` | No |  |

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
| `architecture` | `map[string]any` | Yes |  |
| `benchmarks` | `map[string]any` | Yes |  |
| `canonical_slug` | `string` | Yes |  |
| `context_length` | `any` | Yes |  |
| `created` | `int` | Yes |  |
| `default_parameters` | `any` | Yes |  |
| `description` | `string` | No |  |
| `expiration_date` | `any` | No |  |
| `hugging_face_id` | `any` | No |  |
| `id` | `string` | Yes |  |
| `knowledge_cutoff` | `any` | No |  |
| `links` | `map[string]any` | Yes |  |
| `name` | `string` | Yes |  |
| `per_request_limits` | `any` | Yes |  |
| `pricing` | `map[string]any` | Yes |  |
| `reasoning` | `map[string]any` | Yes |  |
| `supported_parameters` | `[]any` | Yes |  |
| `supported_voices` | `any` | Yes |  |
| `top_provider` | `map[string]any` | Yes |  |

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
| `count` | `int` | Yes |  |

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
| `architecture` | `map[string]any` | Yes |  |
| `benchmarks` | `map[string]any` | Yes |  |
| `canonical_slug` | `string` | Yes |  |
| `context_length` | `any` | Yes |  |
| `created` | `int` | Yes |  |
| `default_parameters` | `any` | Yes |  |
| `description` | `string` | No |  |
| `expiration_date` | `any` | No |  |
| `hugging_face_id` | `any` | No |  |
| `id` | `string` | Yes |  |
| `knowledge_cutoff` | `any` | No |  |
| `links` | `map[string]any` | Yes |  |
| `name` | `string` | Yes |  |
| `per_request_limits` | `any` | Yes |  |
| `pricing` | `map[string]any` | Yes |  |
| `reasoning` | `map[string]any` | Yes |  |
| `supported_parameters` | `[]any` | Yes |  |
| `supported_voices` | `any` | Yes |  |
| `top_provider` | `map[string]any` | Yes |  |

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
| `app_id` | `int` | Yes |  |
| `callback_url` | `string` | Yes |  |
| `code` | `string` | Yes |  |
| `code_challenge` | `string` | No |  |
| `code_challenge_method` | `any` | No |  |
| `code_verifier` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `expires_at` | `any` | No |  |
| `id` | `string` | Yes |  |
| `key` | `string` | Yes |  |
| `key_label` | `string` | No |  |
| `limit` | `float64` | No |  |
| `spawn_agent` | `string` | No |  |
| `spawn_cloud` | `string` | No |  |
| `usage_limit_type` | `string` | No |  |
| `user_id` | `any` | Yes |  |
| `workspace_id` | `string` | No |  |

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
| `cache_control` | `map[string]any` | Yes |  |
| `debug` | `map[string]any` | No |  |
| `frequency_penalty` | `any` | No |  |
| `image_config` | `map[string]any` | No |  |
| `include` | `any` | No |  |
| `input` | `any` | No |  |
| `instructions` | `any` | No |  |
| `max_output_tokens` | `any` | No |  |
| `max_tool_calls` | `any` | No |  |
| `metadata` | `any` | No |  |
| `modalities` | `[]any` | No |  |
| `model` | `string` | No |  |
| `models` | `[]any` | No |  |
| `parallel_tool_calls` | `any` | No |  |
| `plugins` | `[]any` | No |  |
| `presence_penalty` | `any` | No |  |
| `previous_response_id` | `string` | No |  |
| `prompt` | `any` | Yes |  |
| `prompt_cache_key` | `any` | No |  |
| `prompt_cache_options` | `any` | Yes |  |
| `provider` | `any` | No |  |
| `reasoning` | `any` | No |  |
| `route` | `any` | No |  |
| `safety_identifier` | `any` | No |  |
| `service_tier` | `any` | No |  |
| `session_id` | `string` | No |  |
| `stop_server_tools_when` | `[]any` | No |  |
| `store` | `bool` | No |  |
| `stream` | `bool` | No |  |
| `temperature` | `any` | No |  |
| `text` | `any` | No |  |
| `tool_choice` | `any` | No |  |
| `tools` | `[]any` | No |  |
| `top_k` | `int` | No |  |
| `top_logprobs` | `any` | No |  |
| `top_p` | `any` | No |  |
| `trace` | `map[string]any` | No |  |
| `truncation` | `any` | No |  |
| `user` | `string` | No |  |

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
| `email` | `string` | Yes |  |
| `first_name` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `last_name` | `any` | Yes |  |
| `role` | `string` | Yes |  |

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
| `designated_version` | `any` | Yes |  |
| `designated_version_id` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `status` | `string` | Yes |  |
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
| `datacenters` | `any` | No |  |
| `headquarters` | `any` | No |  |
| `name` | `string` | Yes |  |
| `privacy_policy_url` | `any` | Yes |  |
| `slug` | `string` | Yes |  |
| `status_page_url` | `any` | No |  |
| `terms_of_service_url` | `any` | No |  |

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
| `date` | `string` | Yes |  |
| `model_permaslug` | `string` | Yes |  |
| `total_tokens` | `string` | Yes |  |

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
| `documents` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `model` | `string` | Yes |  |
| `provider` | `string` | No |  |
| `query` | `string` | Yes |  |
| `results` | `[]any` | Yes |  |
| `top_n` | `int` | No |  |
| `usage` | `map[string]any` | No |  |

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
| `duration` | `float64` | No |  |
| `input_audio` | `map[string]any` | Yes |  |
| `language` | `string` | No |  |
| `model` | `string` | Yes |  |
| `provider` | `map[string]any` | No |  |
| `response_format` | `string` | No |  |
| `segments` | `[]any` | No |  |
| `task` | `string` | No |  |
| `temperature` | `float64` | No |  |
| `text` | `string` | Yes |  |
| `timestamp_granularities` | `[]any` | No |  |
| `usage` | `map[string]any` | No |  |
| `words` | `[]any` | No |  |

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
| `category` | `string` | Yes |  |
| `comment` | `string` | No |  |
| `generation_id` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

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
| `as_of` | `string` | Yes |  |
| `classifications` | `[]any` | Yes |  |
| `macro_categories` | `[]any` | Yes |  |
| `window_days` | `int` | Yes |  |

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
| `input` | `string` | Yes |  |
| `model` | `string` | Yes |  |
| `provider` | `map[string]any` | No |  |
| `response_format` | `string` | No |  |
| `speed` | `float64` | No |  |
| `voice` | `string` | Yes |  |

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
| `allowed_models` | `any` | No |  |
| `allowed_user_ids` | `any` | No |  |
| `disabled` | `bool` | No |  |
| `is_fallback` | `bool` | No |  |
| `key` | `string` | No |  |
| `name` | `any` | No |  |

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
| `allowed_models` | `any` | No |  |
| `allowed_providers` | `any` | No |  |
| `content_filter_builtins` | `any` | No |  |
| `content_filters` | `any` | No |  |
| `description` | `any` | No |  |
| `enforce_zdr` | `any` | No |  |
| `enforce_zdr_anthropic` | `any` | No |  |
| `enforce_zdr_google` | `any` | No |  |
| `enforce_zdr_openai` | `any` | No |  |
| `enforce_zdr_other` | `any` | No |  |
| `enforce_zdr_xai` | `any` | No |  |
| `ignored_models` | `any` | No |  |
| `ignored_providers` | `any` | No |  |
| `limit_usd` | `any` | No |  |
| `name` | `string` | No |  |
| `reset_interval` | `any` | No |  |

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
| `api_key_hashes` | `any` | No |  |
| `config` | `map[string]any` | No |  |
| `enabled` | `bool` | No |  |
| `filter_rules` | `any` | No |  |
| `name` | `string` | No |  |
| `privacy_mode` | `bool` | No |  |
| `sampling_rate` | `float64` | No |  |

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
| `created_at` | `string` | Yes |  |
| `created_by` | `any` | Yes |  |
| `default_image_model` | `any` | No |  |
| `default_provider_sort` | `any` | No |  |
| `default_text_model` | `any` | No |  |
| `description` | `any` | No |  |
| `id` | `string` | Yes |  |
| `io_logging_api_key_ids` | `any` | No |  |
| `io_logging_sampling_rate` | `float64` | No |  |
| `is_data_discount_logging_enabled` | `bool` | No |  |
| `is_observability_broadcast_enabled` | `bool` | No |  |
| `is_observability_io_logging_enabled` | `bool` | No |  |
| `name` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `updated_at` | `any` | Yes |  |

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
| `limit_usd` | `float64` | Yes |  |

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
| `aspect_ratio` | `string` | No |  |
| `callback_url` | `string` | No |  |
| `duration` | `int` | No |  |
| `error` | `string` | No |  |
| `frame_images` | `[]any` | No |  |
| `generate_audio` | `bool` | No |  |
| `generation_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `input_references` | `[]any` | No |  |
| `model` | `string` | Yes |  |
| `polling_url` | `string` | Yes |  |
| `prompt` | `string` | No |  |
| `provider` | `map[string]any` | No |  |
| `resolution` | `string` | No |  |
| `seed` | `int` | No |  |
| `size` | `string` | No |  |
| `status` | `string` | Yes |  |
| `unsigned_urls` | `[]any` | No |  |
| `usage` | `map[string]any` | No |  |

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
| `allowed_passthrough_parameters` | `[]any` | Yes |  |
| `canonical_slug` | `string` | Yes |  |
| `created` | `int` | Yes |  |
| `description` | `string` | No |  |
| `generate_audio` | `any` | Yes |  |
| `hugging_face_id` | `any` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `pricing_skus` | `any` | No |  |
| `seed` | `any` | Yes |  |
| `supported_aspect_ratios` | `any` | Yes |  |
| `supported_durations` | `any` | Yes |  |
| `supported_frame_images` | `any` | Yes |  |
| `supported_resolutions` | `any` | Yes |  |
| `supported_sizes` | `any` | Yes |  |

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
| `created_at` | `string` | Yes |  |
| `created_by` | `any` | Yes |  |
| `default_image_model` | `any` | Yes |  |
| `default_provider_sort` | `any` | Yes |  |
| `default_text_model` | `any` | Yes |  |
| `description` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `io_logging_api_key_ids` | `any` | Yes |  |
| `io_logging_sampling_rate` | `float64` | Yes |  |
| `is_data_discount_logging_enabled` | `bool` | Yes |  |
| `is_observability_broadcast_enabled` | `bool` | Yes |  |
| `is_observability_io_logging_enabled` | `bool` | Yes |  |
| `name` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `updated_at` | `any` | Yes |  |

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

