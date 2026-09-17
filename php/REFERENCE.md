# OpenrouterModels PHP SDK Reference

Complete API reference for the OpenrouterModels PHP SDK.


## OpenrouterModelsSDK

### Constructor

```php
require_once __DIR__ . '/openroutermodels_sdk.php';

$client = new OpenrouterModelsSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `OpenrouterModelsSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = OpenrouterModelsSDK::test();
```


### Instance Methods

#### `Activity($data = null)`

Create a new `ActivityEntity` instance. Pass `null` for no initial data.

#### `Add($data = null)`

Create a new `AddEntity` instance. Pass `null` for no initial data.

#### `ApiKey($data = null)`

Create a new `ApiKeyEntity` instance. Pass `null` for no initial data.

#### `AppRanking($data = null)`

Create a new `AppRankingEntity` instance. Pass `null` for no initial data.

#### `Benchmark($data = null)`

Create a new `BenchmarkEntity` instance. Pass `null` for no initial data.

#### `BetaAnalytics($data = null)`

Create a new `BetaAnalyticsEntity` instance. Pass `null` for no initial data.

#### `Budget($data = null)`

Create a new `BudgetEntity` instance. Pass `null` for no initial data.

#### `BulkAddWorkspaceMember($data = null)`

Create a new `BulkAddWorkspaceMemberEntity` instance. Pass `null` for no initial data.

#### `BulkAssignKey($data = null)`

Create a new `BulkAssignKeyEntity` instance. Pass `null` for no initial data.

#### `BulkAssignMember($data = null)`

Create a new `BulkAssignMemberEntity` instance. Pass `null` for no initial data.

#### `BulkRemoveWorkspaceMember($data = null)`

Create a new `BulkRemoveWorkspaceMemberEntity` instance. Pass `null` for no initial data.

#### `BulkUnassignKey($data = null)`

Create a new `BulkUnassignKeyEntity` instance. Pass `null` for no initial data.

#### `BulkUnassignMember($data = null)`

Create a new `BulkUnassignMemberEntity` instance. Pass `null` for no initial data.

#### `Byok($data = null)`

Create a new `ByokEntity` instance. Pass `null` for no initial data.

#### `ChatResult($data = null)`

Create a new `ChatResultEntity` instance. Pass `null` for no initial data.

#### `Code($data = null)`

Create a new `CodeEntity` instance. Pass `null` for no initial data.

#### `Coinbase($data = null)`

Create a new `CoinbaseEntity` instance. Pass `null` for no initial data.

#### `Completion($data = null)`

Create a new `CompletionEntity` instance. Pass `null` for no initial data.

#### `Content($data = null)`

Create a new `ContentEntity` instance. Pass `null` for no initial data.

#### `Count($data = null)`

Create a new `CountEntity` instance. Pass `null` for no initial data.

#### `CreateByokKey($data = null)`

Create a new `CreateByokKeyEntity` instance. Pass `null` for no initial data.

#### `CreateGuardrail($data = null)`

Create a new `CreateGuardrailEntity` instance. Pass `null` for no initial data.

#### `CreateObservabilityDestination($data = null)`

Create a new `CreateObservabilityDestinationEntity` instance. Pass `null` for no initial data.

#### `CreatePresetFromInference($data = null)`

Create a new `CreatePresetFromInferenceEntity` instance. Pass `null` for no initial data.

#### `CreateWorkspace($data = null)`

Create a new `CreateWorkspaceEntity` instance. Pass `null` for no initial data.

#### `Credit($data = null)`

Create a new `CreditEntity` instance. Pass `null` for no initial data.

#### `Destination($data = null)`

Create a new `DestinationEntity` instance. Pass `null` for no initial data.

#### `Embedding($data = null)`

Create a new `EmbeddingEntity` instance. Pass `null` for no initial data.

#### `Endpoint($data = null)`

Create a new `EndpointEntity` instance. Pass `null` for no initial data.

#### `Feedback($data = null)`

Create a new `FeedbackEntity` instance. Pass `null` for no initial data.

#### `File($data = null)`

Create a new `FileEntity` instance. Pass `null` for no initial data.

#### `Generation($data = null)`

Create a new `GenerationEntity` instance. Pass `null` for no initial data.

#### `GenerationContent($data = null)`

Create a new `GenerationContentEntity` instance. Pass `null` for no initial data.

#### `Guardrail($data = null)`

Create a new `GuardrailEntity` instance. Pass `null` for no initial data.

#### `Image($data = null)`

Create a new `ImageEntity` instance. Pass `null` for no initial data.

#### `ImageModelEndpoint($data = null)`

Create a new `ImageModelEndpointEntity` instance. Pass `null` for no initial data.

#### `ImageModelsList($data = null)`

Create a new `ImageModelsListEntity` instance. Pass `null` for no initial data.

#### `Key($data = null)`

Create a new `KeyEntity` instance. Pass `null` for no initial data.

#### `ListByokKey($data = null)`

Create a new `ListByokKeyEntity` instance. Pass `null` for no initial data.

#### `ListGuardrail($data = null)`

Create a new `ListGuardrailEntity` instance. Pass `null` for no initial data.

#### `ListKeyAssignment($data = null)`

Create a new `ListKeyAssignmentEntity` instance. Pass `null` for no initial data.

#### `ListMemberAssignment($data = null)`

Create a new `ListMemberAssignmentEntity` instance. Pass `null` for no initial data.

#### `ListObservabilityDestination($data = null)`

Create a new `ListObservabilityDestinationEntity` instance. Pass `null` for no initial data.

#### `ListPreset($data = null)`

Create a new `ListPresetEntity` instance. Pass `null` for no initial data.

#### `ListPresetVersion($data = null)`

Create a new `ListPresetVersionEntity` instance. Pass `null` for no initial data.

#### `ListWorkspace($data = null)`

Create a new `ListWorkspaceEntity` instance. Pass `null` for no initial data.

#### `ListWorkspaceBudget($data = null)`

Create a new `ListWorkspaceBudgetEntity` instance. Pass `null` for no initial data.

#### `ListWorkspaceMember($data = null)`

Create a new `ListWorkspaceMemberEntity` instance. Pass `null` for no initial data.

#### `Member($data = null)`

Create a new `MemberEntity` instance. Pass `null` for no initial data.

#### `Message($data = null)`

Create a new `MessageEntity` instance. Pass `null` for no initial data.

#### `Meta($data = null)`

Create a new `MetaEntity` instance. Pass `null` for no initial data.

#### `Model($data = null)`

Create a new `ModelEntity` instance. Pass `null` for no initial data.

#### `ModelsCount($data = null)`

Create a new `ModelsCountEntity` instance. Pass `null` for no initial data.

#### `ModelsList($data = null)`

Create a new `ModelsListEntity` instance. Pass `null` for no initial data.

#### `OAuth($data = null)`

Create a new `OAuthEntity` instance. Pass `null` for no initial data.

#### `ObservabilityDestination($data = null)`

Create a new `ObservabilityDestinationEntity` instance. Pass `null` for no initial data.

#### `OpenResponsesResult($data = null)`

Create a new `OpenResponsesResultEntity` instance. Pass `null` for no initial data.

#### `Organization($data = null)`

Create a new `OrganizationEntity` instance. Pass `null` for no initial data.

#### `Preset($data = null)`

Create a new `PresetEntity` instance. Pass `null` for no initial data.

#### `PresetVersion($data = null)`

Create a new `PresetVersionEntity` instance. Pass `null` for no initial data.

#### `Provider($data = null)`

Create a new `ProviderEntity` instance. Pass `null` for no initial data.

#### `Query($data = null)`

Create a new `QueryEntity` instance. Pass `null` for no initial data.

#### `RankingsDaily($data = null)`

Create a new `RankingsDailyEntity` instance. Pass `null` for no initial data.

#### `Remove($data = null)`

Create a new `RemoveEntity` instance. Pass `null` for no initial data.

#### `Rerank($data = null)`

Create a new `RerankEntity` instance. Pass `null` for no initial data.

#### `Response($data = null)`

Create a new `ResponseEntity` instance. Pass `null` for no initial data.

#### `Speech($data = null)`

Create a new `SpeechEntity` instance. Pass `null` for no initial data.

#### `Stt($data = null)`

Create a new `SttEntity` instance. Pass `null` for no initial data.

#### `SubmitGenerationFeedback($data = null)`

Create a new `SubmitGenerationFeedbackEntity` instance. Pass `null` for no initial data.

#### `Task($data = null)`

Create a new `TaskEntity` instance. Pass `null` for no initial data.

#### `Transcription($data = null)`

Create a new `TranscriptionEntity` instance. Pass `null` for no initial data.

#### `Tts($data = null)`

Create a new `TtsEntity` instance. Pass `null` for no initial data.

#### `UnifiedBenchmark($data = null)`

Create a new `UnifiedBenchmarkEntity` instance. Pass `null` for no initial data.

#### `UpdateByokKey($data = null)`

Create a new `UpdateByokKeyEntity` instance. Pass `null` for no initial data.

#### `UpdateGuardrail($data = null)`

Create a new `UpdateGuardrailEntity` instance. Pass `null` for no initial data.

#### `UpdateObservabilityDestination($data = null)`

Create a new `UpdateObservabilityDestinationEntity` instance. Pass `null` for no initial data.

#### `UpdateWorkspace($data = null)`

Create a new `UpdateWorkspaceEntity` instance. Pass `null` for no initial data.

#### `UpsertWorkspaceBudget($data = null)`

Create a new `UpsertWorkspaceBudgetEntity` instance. Pass `null` for no initial data.

#### `User($data = null)`

Create a new `UserEntity` instance. Pass `null` for no initial data.

#### `Version($data = null)`

Create a new `VersionEntity` instance. Pass `null` for no initial data.

#### `Video($data = null)`

Create a new `VideoEntity` instance. Pass `null` for no initial data.

#### `VideoGeneration($data = null)`

Create a new `VideoGenerationEntity` instance. Pass `null` for no initial data.

#### `VideoModelsList($data = null)`

Create a new `VideoModelsListEntity` instance. Pass `null` for no initial data.

#### `Workspace($data = null)`

Create a new `WorkspaceEntity` instance. Pass `null` for no initial data.

#### `WorkspaceBudget($data = null)`

Create a new `WorkspaceBudgetEntity` instance. Pass `null` for no initial data.

#### `Zdr($data = null)`

Create a new `ZdrEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): OpenrouterModelsUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ActivityEntity

```php
$activity = $client->Activity();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byok_usage_inference` | `float` | Yes | BYOK inference cost in USD (external credits spent) |
| `completion_tokens` | `int` | Yes | Total completion tokens generated |
| `date` | `string` | Yes | Date of the activity (YYYY-MM-DD format) |
| `endpoint_id` | `string` | Yes | Unique identifier for the endpoint |
| `model` | `string` | Yes | Model slug (e.g., "openai/gpt-4.1") |
| `model_permaslug` | `string` | Yes | Model permaslug (e.g., "openai/gpt-4.1-2025-04-14") |
| `prompt_tokens` | `int` | Yes | Total prompt tokens used |
| `provider_name` | `string` | Yes | Name of the provider serving this endpoint |
| `reasoning_tokens` | `int` | Yes | Total reasoning tokens used |
| `requests` | `int` | Yes | Number of requests made |
| `usage` | `float` | Yes | Total cost in USD (OpenRouter credits spent) |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Activity()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActivityEntity`

Create a new `ActivityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AddEntity

```php
$add = $client->Add();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AddEntity`

Create a new `AddEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiKeyEntity

```php
$api_key = $client->ApiKey();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byok_usage` | `float` | Yes | Total external BYOK usage (in USD) for the API key |
| `byok_usage_daily` | `float` | Yes | External BYOK usage (in USD) for the current UTC day |
| `byok_usage_monthly` | `float` | Yes | External BYOK usage (in USD) for current UTC month |
| `byok_usage_weekly` | `float` | Yes | External BYOK usage (in USD) for the current UTC week (Monday-Sunday) |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the API key was created |
| `creator_user_id` | `mixed` | Yes | The user ID of the key creator. |
| `disabled` | `bool` | Yes | Whether the API key is disabled |
| `expires_at` | `mixed` | No | ISO 8601 UTC timestamp when the API key expires, or null if no expiration |
| `hash` | `string` | Yes | Unique hash identifier for the API key |
| `id` | `string` | No |  |
| `include_byok_in_limit` | `bool` | Yes | Whether to include external BYOK usage in the credit limit |
| `is_free_tier` | `bool` | Yes | Whether this is a free tier API key |
| `is_management_key` | `bool` | Yes | Whether this is a management key |
| `is_provisioning_key` | `bool` | Yes | Whether this is a management key |
| `label` | `string` | Yes | Human-readable label for the API key |
| `limit` | `mixed` | Yes | Spending limit for the API key in USD |
| `limit_remaining` | `mixed` | Yes | Remaining spending limit in USD |
| `limit_reset` | `mixed` | Yes | Type of limit reset for the API key |
| `name` | `string` | Yes | Name of the API key |
| `rate_limit` | `array` | Yes | Legacy rate limit information about a key. |
| `updated_at` | `mixed` | Yes | ISO 8601 timestamp of when the API key was last updated |
| `usage` | `float` | Yes | Total OpenRouter credit usage (in USD) for the API key |
| `usage_daily` | `float` | Yes | OpenRouter credit usage (in USD) for the current UTC day |
| `usage_monthly` | `float` | Yes | OpenRouter credit usage (in USD) for the current UTC month |
| `usage_weekly` | `float` | Yes | OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday) |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiKey()->create([
  "byok_usage" => null, // float
  "byok_usage_daily" => null, // float
  "byok_usage_monthly" => null, // float
  "byok_usage_weekly" => null, // float
  "created_at" => null, // string
  "creator_user_id" => null, // mixed
  "disabled" => null, // bool
  "hash" => null, // string
  "include_byok_in_limit" => null, // bool
  "is_free_tier" => null, // bool
  "is_management_key" => null, // bool
  "is_provisioning_key" => null, // bool
  "label" => null, // string
  "limit" => null, // mixed
  "limit_remaining" => null, // mixed
  "limit_reset" => null, // mixed
  "name" => null, // string
  "rate_limit" => null, // array
  "updated_at" => null, // mixed
  "usage" => null, // float
  "usage_daily" => null, // float
  "usage_monthly" => null, // float
  "usage_weekly" => null, // float
  "workspace_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiKey()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiKey()->load(["id" => "api_key_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ApiKey()->remove(["id" => "api_key_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiKey()->update([
  "id" => "api_key_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiKeyEntity`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AppRankingEntity

```php
$app_ranking = $client->AppRanking();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AppRanking()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AppRankingEntity`

Create a new `AppRankingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BenchmarkEntity

```php
$benchmark = $client->Benchmark();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BenchmarkEntity`

Create a new `BenchmarkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BetaAnalyticsEntity

```php
$beta_analytics = $client->BetaAnalytics();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cachedAt` | `float` | No |  |
| `classifier_dimensions` | `array` | Yes | Group results by custom classifier tags, breaking down metrics by the specified dimension values. |
| `classifier_filters` | `array` | Yes | Filter results to generations with specific classifier tag values. |
| `data` | `array` | Yes |  |
| `dimensions` | `array` | Yes |  |
| `filters` | `array` | No |  |
| `granularities` | `array` | Yes |  |
| `granularity` | `string` | No | Time granularity |
| `group_limit` | `int` | No | Maximum rows per distinct combination of dimensions. |
| `limit` | `int` | No | Maximum total rows returned. |
| `metadata` | `array` | Yes |  |
| `metrics` | `array` | Yes |  |
| `operators` | `array` | Yes |  |
| `order_by` | `array` | Yes |  |
| `time_range` | `array` | Yes |  |
| `warnings` | `array` | No | Warnings about filter resolution issues (e.g. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BetaAnalytics()->create([
  "classifier_dimensions" => null, // array
  "classifier_filters" => null, // array
  "data" => null, // array
  "dimensions" => null, // array
  "granularities" => null, // array
  "metadata" => null, // array
  "metrics" => null, // array
  "operators" => null, // array
  "order_by" => null, // array
  "time_range" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BetaAnalytics()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BetaAnalyticsEntity`

Create a new `BetaAnalyticsEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BudgetEntity

```php
$budget = $client->Budget();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BudgetEntity`

Create a new `BudgetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BulkAddWorkspaceMemberEntity

```php
$bulk_add_workspace_member = $client->BulkAddWorkspaceMember();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `added_count` | `int` | Yes | Number of workspace memberships created or updated |
| `data` | `array` | Yes | List of added workspace memberships |
| `user_ids` | `array` | Yes | List of user IDs to add to the workspace. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BulkAddWorkspaceMember()->create([
  "workspace_id" => null, // string
  "added_count" => null, // int
  "data" => null, // array
  "user_ids" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BulkAddWorkspaceMemberEntity`

Create a new `BulkAddWorkspaceMemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BulkAssignKeyEntity

```php
$bulk_assign_key = $client->BulkAssignKey();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_count` | `int` | Yes | Number of keys successfully assigned |
| `key_hashes` | `array` | Yes | Array of API key hashes to assign to the guardrail |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BulkAssignKey()->create([
  "guardrail_id" => null, // string
  "assigned_count" => null, // int
  "key_hashes" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BulkAssignKeyEntity`

Create a new `BulkAssignKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BulkAssignMemberEntity

```php
$bulk_assign_member = $client->BulkAssignMember();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_count` | `int` | Yes | Number of members successfully assigned |
| `member_user_ids` | `array` | Yes | Array of member user IDs to assign to the guardrail |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BulkAssignMember()->create([
  "guardrail_id" => null, // string
  "assigned_count" => null, // int
  "member_user_ids" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BulkAssignMemberEntity`

Create a new `BulkAssignMemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BulkRemoveWorkspaceMemberEntity

```php
$bulk_remove_workspace_member = $client->BulkRemoveWorkspaceMember();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `removed_count` | `int` | Yes | Number of members removed |
| `user_ids` | `array` | Yes | List of user IDs to remove from the workspace |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BulkRemoveWorkspaceMember()->create([
  "workspace_id" => null, // string
  "removed_count" => null, // int
  "user_ids" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BulkRemoveWorkspaceMemberEntity`

Create a new `BulkRemoveWorkspaceMemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BulkUnassignKeyEntity

```php
$bulk_unassign_key = $client->BulkUnassignKey();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key_hashes` | `array` | Yes | Array of API key hashes to unassign from the guardrail |
| `unassigned_count` | `int` | Yes | Number of keys successfully unassigned |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BulkUnassignKey()->create([
  "guardrail_id" => null, // string
  "key_hashes" => null, // array
  "unassigned_count" => null, // int
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BulkUnassignKeyEntity`

Create a new `BulkUnassignKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BulkUnassignMemberEntity

```php
$bulk_unassign_member = $client->BulkUnassignMember();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `member_user_ids` | `array` | Yes | Array of member user IDs to unassign from the guardrail |
| `unassigned_count` | `int` | Yes | Number of members successfully unassigned |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BulkUnassignMember()->create([
  "guardrail_id" => null, // string
  "member_user_ids" => null, // array
  "unassigned_count" => null, // int
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BulkUnassignMemberEntity`

Create a new `BulkUnassignMemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ByokEntity

```php
$byok = $client->Byok();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_api_key_hashes` | `mixed` | Yes | Optional allowlist of OpenRouter API key hashes (`api_keys.hash`) that may use this credential. |
| `allowed_models` | `mixed` | Yes | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `mixed` | Yes | Optional allowlist of user IDs that may use this credential. |
| `created_at` | `string` | Yes | ISO timestamp of when the credential was created. |
| `disabled` | `bool` | Yes | Whether this credential is currently disabled. |
| `id` | `string` | Yes | Stable public identifier for this BYOK credential. |
| `is_fallback` | `bool` | Yes | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `string` | Yes | The raw provider API key or credential. |
| `label` | `string` | Yes | Short masked snippet of the key (e.g. |
| `name` | `mixed` | No | Optional human-readable name for the credential. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Byok()->create([
  "allowed_api_key_hashes" => null, // mixed
  "allowed_models" => null, // mixed
  "allowed_user_ids" => null, // mixed
  "created_at" => null, // string
  "disabled" => null, // bool
  "id" => null, // string
  "is_fallback" => null, // bool
  "key" => null, // string
  "label" => null, // string
  "provider" => null, // string
  "sort_order" => null, // int
  "workspace_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Byok()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Byok()->load(["id" => "byok_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Byok()->remove(["id" => "byok_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ByokEntity`

Create a new `ByokEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ChatResultEntity

```php
$chat_result = $client->ChatResult();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_control` | `array` | Yes | Enable automatic prompt caching. |
| `choices` | `array` | Yes | List of completion choices |
| `created` | `int` | Yes | Unix timestamp of creation |
| `debug` | `array` | No | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `mixed` | No | Frequency penalty (-2.0 to 2.0) |
| `id` | `string` | Yes | Unique completion identifier |
| `image_config` | `array` | No | Provider-specific image configuration options. |
| `logit_bias` | `mixed` | No | Token logit bias adjustments |
| `logprobs` | `mixed` | No | Return log probabilities |
| `max_completion_tokens` | `mixed` | No | Maximum tokens in completion |
| `max_tokens` | `mixed` | No | Maximum tokens (deprecated, use max_completion_tokens). |
| `messages` | `array` | Yes | List of messages for the conversation |
| `metadata` | `array` | No | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `mixed` | No | Minimum probability threshold relative to the most likely token. |
| `modalities` | `array` | No | Output modalities for the response. |
| `model` | `string` | Yes | Model used for completion |
| `models` | `array` | No | Models to use for completion |
| `object` | `string` | Yes |  |
| `openrouter_metadata` | `array` | Yes |  |
| `parallel_tool_calls` | `mixed` | No | Whether to enable parallel function calling during tool use. |
| `plugins` | `array` | No | Plugins you want to enable for this request, including their settings. |
| `prediction` | `mixed` | Yes | Static predicted output content. |
| `presence_penalty` | `mixed` | No | Presence penalty (-2.0 to 2.0) |
| `prompt_cache_key` | `mixed` | No |  |
| `prompt_cache_options` | `mixed` | Yes | Request-level prompt-cache controls. |
| `provider` | `mixed` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `array` | No | Configuration options for reasoning models |
| `reasoning_effort` | `mixed` | No | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `mixed` | No | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `mixed` | No | Response format configuration |
| `route` | `mixed` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `seed` | `mixed` | No | Random seed for deterministic outputs |
| `service_tier` | `mixed` | No | The service tier used by the upstream provider for this request |
| `session_id` | `string` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop` | `mixed` | No | Stop sequences (up to 4) |
| `stop_server_tools_when` | `array` | No | Stop conditions for the server-tool agent loop. |
| `stream` | `bool` | No | Enable streaming response |
| `stream_options` | `mixed` | No | Streaming configuration options |
| `system_fingerprint` | `mixed` | Yes | System fingerprint |
| `temperature` | `mixed` | No | Sampling temperature (0-2) |
| `tool_choice` | `mixed` | No | Tool choice configuration |
| `tools` | `array` | No | Available tools for function calling |
| `top_a` | `mixed` | No | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `mixed` | No | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `mixed` | No | Number of top log probabilities to return (0-20) |
| `top_p` | `mixed` | No | Nucleus sampling parameter (0-1) |
| `trace` | `array` | No | Metadata for observability and tracing. |
| `usage` | `array` | Yes | Token usage statistics |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ChatResult()->create([
  "cache_control" => null, // array
  "choices" => null, // array
  "created" => null, // int
  "id" => null, // string
  "messages" => null, // array
  "model" => null, // string
  "object" => null, // string
  "openrouter_metadata" => null, // array
  "prediction" => null, // mixed
  "prompt_cache_options" => null, // mixed
  "system_fingerprint" => null, // mixed
  "usage" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ChatResultEntity`

Create a new `ChatResultEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeEntity

```php
$code = $client->Code();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeEntity`

Create a new `CodeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CoinbaseEntity

```php
$coinbase = $client->Coinbase();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CoinbaseEntity`

Create a new `CoinbaseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CompletionEntity

```php
$completion = $client->Completion();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CompletionEntity`

Create a new `CompletionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContentEntity

```php
$content = $client->Content();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContentEntity`

Create a new `ContentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CountEntity

```php
$count = $client->Count();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CountEntity`

Create a new `CountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateByokKeyEntity

```php
$create_byok_key = $client->CreateByokKey();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateByokKeyEntity`

Create a new `CreateByokKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateGuardrailEntity

```php
$create_guardrail = $client->CreateGuardrail();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateGuardrailEntity`

Create a new `CreateGuardrailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateObservabilityDestinationEntity

```php
$create_observability_destination = $client->CreateObservabilityDestination();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_key_hashes` | `mixed` | No | Optional allowlist of OpenRouter API key hashes whose traffic is forwarded. |
| `config` | `array` | Yes | Provider-specific configuration. |
| `enabled` | `bool` | No | Whether this destination should be enabled immediately. |
| `filter_rules` | `mixed` | Yes | Optional structured filter rules controlling which events are forwarded. |
| `name` | `string` | Yes | Human-readable name for the destination. |
| `privacy_mode` | `bool` | No | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `float` | No | Sampling rate between 0.0001 and 1 (1 = 100%). |
| `type` | `string` | Yes | The destination type. |
| `workspace_id` | `string` | No | Optional workspace ID. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CreateObservabilityDestination()->create([
  "config" => null, // array
  "filter_rules" => null, // mixed
  "name" => null, // string
  "type" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateObservabilityDestinationEntity`

Create a new `CreateObservabilityDestinationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreatePresetFromInferenceEntity

```php
$create_preset_from_inference = $client->CreatePresetFromInference();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `background` | `mixed` | No |  |
| `cache_control` | `array` | Yes | Enable automatic prompt caching. |
| `context_management` | `mixed` | No |  |
| `debug` | `array` | No | Debug options for inspecting request transformations (streaming only) |
| `fallbacks` | `mixed` | No | Fallback models to try if the primary model fails or refuses, in order. |
| `frequency_penalty` | `mixed` | No | Frequency penalty (-2.0 to 2.0) |
| `image_config` | `array` | No | Provider-specific image configuration options. |
| `include` | `mixed` | No |  |
| `input` | `mixed` | No | Input for a response request - can be a string or array of items |
| `instructions` | `mixed` | No |  |
| `logit_bias` | `mixed` | No | Token logit bias adjustments |
| `logprobs` | `mixed` | No | Return log probabilities |
| `max_completion_tokens` | `mixed` | No | Maximum tokens in completion |
| `max_output_tokens` | `mixed` | No |  |
| `max_tokens` | `mixed` | No | Maximum tokens (deprecated, use max_completion_tokens). |
| `max_tool_calls` | `mixed` | No |  |
| `messages` | `array` | Yes | List of messages for the conversation |
| `metadata` | `array` | No | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `mixed` | No | Minimum probability threshold relative to the most likely token. |
| `modalities` | `array` | No | Output modalities for the response. |
| `model` | `string` | No | Model to use for completion |
| `models` | `array` | No | Models to use for completion |
| `output_config` | `array` | No | Configuration for controlling output behavior. |
| `parallel_tool_calls` | `mixed` | No | Whether to enable parallel function calling during tool use. |
| `plugins` | `array` | No | Plugins you want to enable for this request, including their settings. |
| `prediction` | `mixed` | Yes | Static predicted output content. |
| `presence_penalty` | `mixed` | No | Presence penalty (-2.0 to 2.0) |
| `previous_response_id` | `string` | No | Not supported. |
| `prompt` | `mixed` | Yes |  |
| `prompt_cache_key` | `mixed` | No |  |
| `prompt_cache_options` | `mixed` | Yes | Request-level prompt-cache controls. |
| `provider` | `mixed` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `array` | No | Configuration options for reasoning models |
| `reasoning_effort` | `mixed` | No | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `mixed` | No | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `mixed` | No | Response format configuration |
| `route` | `mixed` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `mixed` | No |  |
| `seed` | `mixed` | No | Random seed for deterministic outputs |
| `service_tier` | `mixed` | No | The service tier to use for processing this request. |
| `session_id` | `string` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `speed` | `mixed` | No |  |
| `stop` | `mixed` | No | Stop sequences (up to 4) |
| `stop_sequences` | `array` | No |  |
| `stop_server_tools_when` | `array` | No | Stop conditions for the server-tool agent loop. |
| `store` | `bool` | No |  |
| `stream` | `bool` | No | Enable streaming response |
| `stream_options` | `mixed` | No | Streaming configuration options |
| `system` | `mixed` | No |  |
| `temperature` | `mixed` | No | Sampling temperature (0-2) |
| `text` | `mixed` | No | Text output configuration including format and verbosity |
| `thinking` | `mixed` | No |  |
| `tool_choice` | `mixed` | No | Tool choice configuration |
| `tools` | `array` | No | Available tools for function calling |
| `top_a` | `mixed` | No | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `mixed` | No | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `mixed` | No | Number of top log probabilities to return (0-20) |
| `top_p` | `mixed` | No | Nucleus sampling parameter (0-1) |
| `trace` | `array` | No | Metadata for observability and tracing. |
| `truncation` | `mixed` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CreatePresetFromInference()->create([
  "slug" => null, // string
  "cache_control" => null, // array
  "messages" => null, // array
  "prediction" => null, // mixed
  "prompt" => null, // mixed
  "prompt_cache_options" => null, // mixed
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreatePresetFromInferenceEntity`

Create a new `CreatePresetFromInferenceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateWorkspaceEntity

```php
$create_workspace = $client->CreateWorkspace();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateWorkspaceEntity`

Create a new `CreateWorkspaceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreditEntity

```php
$credit = $client->Credit();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total_credits` | `float` | Yes | Total credits purchased |
| `total_usage` | `float` | Yes | Total credits used |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Credit()->create([
  "total_credits" => null, // float
  "total_usage" => null, // float
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Credit()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreditEntity`

Create a new `CreditEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DestinationEntity

```php
$destination = $client->Destination();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DestinationEntity`

Create a new `DestinationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmbeddingEntity

```php
$embedding = $client->Embedding();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | Yes | List of embedding objects |
| `dimensions` | `int` | No | The number of dimensions for the output embeddings |
| `encoding_format` | `string` | No | The format of the output embeddings |
| `id` | `string` | No | Unique identifier for the embeddings response |
| `input` | `mixed` | Yes | Text, token, or multimodal input(s) to embed |
| `input_type` | `string` | No | The type of input (e.g. |
| `model` | `string` | Yes | The model used for embeddings |
| `object` | `string` | Yes |  |
| `provider` | `mixed` | No |  |
| `usage` | `array` | Yes | Token usage statistics |
| `user` | `string` | No | A unique identifier for the end-user |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Embedding()->create([
  "data" => null, // array
  "input" => null, // mixed
  "model" => null, // string
  "object" => null, // string
  "usage" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmbeddingEntity`

Create a new `EmbeddingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EndpointEntity

```php
$endpoint = $client->Endpoint();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `mixed` | Yes | Model architecture information |
| `benchmarks` | `array` | Yes | Third-party benchmark rankings for this model. |
| `canonical_slug` | `string` | Yes | Canonical slug for the model |
| `context_length` | `mixed` | Yes | Maximum context length in tokens |
| `created` | `int` | Yes | Unix timestamp of when the model was created |
| `default_parameters` | `mixed` | Yes | Default parameters for this model |
| `description` | `string` | Yes | Description of the model |
| `endpoints` | `array` | Yes | List of available endpoints for this model |
| `expiration_date` | `mixed` | No | The date after which the model may be removed. |
| `hugging_face_id` | `mixed` | No | Hugging Face model identifier, if applicable |
| `id` | `string` | Yes | Unique identifier for the model |
| `knowledge_cutoff` | `mixed` | No | The date up to which the model was trained on data. |
| `links` | `array` | Yes | Related API endpoints and resources for this model. |
| `name` | `string` | Yes | Display name of the model |
| `per_request_limits` | `mixed` | Yes | Per-request token limits |
| `pricing` | `array` | Yes | Pricing information for the model |
| `reasoning` | `array` | Yes | Reasoning effort configuration. |
| `supported_parameters` | `array` | Yes | List of supported parameters for this model |
| `supported_voices` | `mixed` | Yes | List of supported voice identifiers for TTS models. |
| `top_provider` | `array` | Yes | Information about the top provider for this model |

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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Endpoint()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Endpoint()->load(["author" => "author", "slug" => "slug"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EndpointEntity`

Create a new `EndpointEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FeedbackEntity

```php
$feedback = $client->Feedback();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FeedbackEntity`

Create a new `FeedbackEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FileEntity

```php
$file = $client->File();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->File()->create([
  "created_at" => null, // string
  "downloadable" => null, // bool
  "filename" => null, // string
  "id" => null, // string
  "mime_type" => null, // string
  "size_bytes" => null, // int
  "type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->File()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->File()->load(["id" => "file_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->File()->remove(["id" => "file_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FileEntity`

Create a new `FileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GenerationEntity

```php
$generation = $client->Generation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_type` | `mixed` | Yes | Type of API used for the generation |
| `app_id` | `mixed` | Yes | ID of the app that made the request |
| `cache_discount` | `mixed` | Yes | Discount applied due to caching |
| `cancelled` | `mixed` | Yes | Whether the generation was cancelled |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the generation was created |
| `data_region` | `string` | Yes | The data region this generation was routed through. |
| `external_user` | `mixed` | Yes | External user identifier |
| `finish_reason` | `mixed` | Yes | Reason the generation finished |
| `generation_time` | `mixed` | Yes | Time taken for generation in milliseconds |
| `http_referer` | `mixed` | Yes | Referer header from the request |
| `id` | `string` | Yes | Unique identifier for the generation |
| `is_byok` | `bool` | Yes | Whether this used bring-your-own-key |
| `latency` | `mixed` | Yes | Total latency in milliseconds |
| `model` | `string` | Yes | Model used for the generation |
| `moderation_latency` | `mixed` | Yes | Moderation latency in milliseconds |
| `native_finish_reason` | `mixed` | Yes | Native finish reason as reported by provider |
| `native_tokens_cached` | `mixed` | Yes | Native cached tokens as reported by provider |
| `native_tokens_completion` | `mixed` | Yes | Native completion tokens as reported by provider |
| `native_tokens_completion_images` | `mixed` | Yes | Native completion image tokens as reported by provider |
| `native_tokens_prompt` | `mixed` | Yes | Native prompt tokens as reported by provider |
| `native_tokens_reasoning` | `mixed` | Yes | Native reasoning tokens as reported by provider |
| `num_fetches` | `mixed` | Yes | Number of web fetches performed |
| `num_input_audio_prompt` | `mixed` | Yes | Number of audio inputs in the prompt |
| `num_media_completion` | `mixed` | Yes | Number of media items in the completion |
| `num_media_prompt` | `mixed` | Yes | Number of media items in the prompt |
| `num_search_results` | `mixed` | Yes | Number of search results included |
| `origin` | `string` | Yes | Origin URL of the request |
| `preset_id` | `mixed` | Yes | ID of the preset used for this generation, null if no preset was used |
| `provider_name` | `mixed` | Yes | Name of the provider that served the request |
| `provider_responses` | `mixed` | Yes | List of provider responses for this generation, including fallback attempts |
| `request_id` | `mixed` | No | Unique identifier grouping all generations from a single API request |
| `response_cache_source_id` | `mixed` | No | If this generation was served from response cache, contains the original generation ID. |
| `router` | `mixed` | Yes | Router used for the request (e.g., openrouter/auto) |
| `service_tier` | `mixed` | Yes | Service tier the upstream provider reported running this request on, or null if it did not report one. |
| `session_id` | `mixed` | No | Session identifier grouping multiple generations in the same session |
| `streamed` | `mixed` | Yes | Whether the response was streamed |
| `tokens_completion` | `mixed` | Yes | Number of tokens in the completion |
| `tokens_prompt` | `mixed` | Yes | Number of tokens in the prompt |
| `total_cost` | `float` | Yes | Total cost of the generation in USD |
| `upstream_id` | `mixed` | Yes | Upstream provider's identifier for this generation |
| `upstream_inference_cost` | `mixed` | Yes | Cost charged by the upstream provider |
| `usage` | `float` | Yes | Usage amount in USD |
| `user_agent` | `mixed` | Yes | User-Agent header from the request |
| `web_search_engine` | `mixed` | Yes | The resolved web search engine used for this generation (e.g. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Generation()->load(["id" => "generation_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GenerationEntity`

Create a new `GenerationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GenerationContentEntity

```php
$generation_content = $client->GenerationContent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `mixed` | Yes | The input to the generation — either a prompt string or an array of messages |
| `output` | `array` | Yes | The output from the generation |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GenerationContent()->load(["id" => "generation_content_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GenerationContentEntity`

Create a new `GenerationContentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GuardrailEntity

```php
$guardrail = $client->Guardrail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_models` | `mixed` | No | Array of model canonical_slugs (immutable identifiers) |
| `allowed_providers` | `mixed` | No | List of allowed provider IDs |
| `content_filter_builtins` | `mixed` | No | Builtin content filters applied to requests. |
| `content_filters` | `mixed` | No | Custom regex content filters applied to request messages |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the guardrail was created |
| `description` | `mixed` | No | Description of the guardrail |
| `enforce_zdr` | `mixed` | No | Deprecated. |
| `enforce_zdr_anthropic` | `mixed` | No | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `mixed` | No | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `mixed` | No | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `mixed` | No | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `mixed` | No | Whether to enforce zero data retention for xAI models. |
| `id` | `string` | Yes | Unique identifier for the guardrail |
| `ignored_models` | `mixed` | No | Array of model canonical_slugs to exclude from routing |
| `ignored_providers` | `mixed` | No | List of provider IDs to exclude from routing |
| `limit_usd` | `mixed` | No | Spending limit in USD |
| `name` | `string` | Yes | Name of the guardrail |
| `reset_interval` | `mixed` | No | Interval at which the limit resets (daily, weekly, monthly) |
| `updated_at` | `mixed` | No | ISO 8601 timestamp of when the guardrail was last updated |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Guardrail()->create([
  "created_at" => null, // string
  "id" => null, // string
  "name" => null, // string
  "workspace_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Guardrail()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Guardrail()->load(["id" => "guardrail_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Guardrail()->remove(["id" => "guardrail_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GuardrailEntity`

Create a new `GuardrailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImageEntity

```php
$image = $client->Image();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `string` | No | Normalized aspect ratio of the generated image. |
| `background` | `string` | No | Background treatment. |
| `created` | `int` | Yes | Unix timestamp (seconds) when the image was generated |
| `data` | `array` | Yes | Generated images |
| `input_references` | `array` | No | Reference images to guide image-to-image generation, as base64 data URLs or HTTP(S) URLs. |
| `model` | `string` | Yes | The image generation model to use |
| `n` | `int` | No | Number of images to generate (1-10). |
| `output_compression` | `int` | No | Compression level (0-100) for webp/jpeg output. |
| `output_format` | `string` | No | Encoding of the returned image bytes. |
| `prompt` | `string` | Yes | Text description of the desired image |
| `provider` | `array` | No | Provider routing preferences and provider-specific passthrough configuration. |
| `quality` | `string` | No | Rendering quality. |
| `resolution` | `string` | No | Normalized resolution tier of the generated image. |
| `seed` | `int` | No | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `string` | No | Optional. |
| `stream` | `bool` | No | If true, partial images are streamed as SSE events as they become available. |
| `usage` | `array` | Yes | Token and cost usage for the image generation request, when available |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Image()->create([
  "created" => null, // int
  "data" => null, // array
  "model" => null, // string
  "prompt" => null, // string
  "usage" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImageEntity`

Create a new `ImageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImageModelEndpointEntity

```php
$image_model_endpoint = $client->ImageModelEndpoint();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_passthrough_parameters` | `array` | Yes | Provider-specific options accepted under provider.options[provider_slug]. |
| `pricing` | `array` | Yes | Billable pricing lines for this endpoint. |
| `provider_name` | `string` | Yes | Provider display name |
| `provider_slug` | `string` | Yes | Provider slug |
| `provider_tag` | `mixed` | Yes | Provider tag for request-side selection |
| `supported_parameters` | `mixed` | Yes |  |
| `supports_streaming` | `bool` | Yes | Whether this endpoint supports native SSE streaming (`stream: true` in the request). |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ImageModelEndpoint()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImageModelEndpointEntity`

Create a new `ImageModelEndpointEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImageModelsListEntity

```php
$image_models_list = $client->ImageModelsList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `array` | Yes |  |
| `created` | `int` | Yes | Unix timestamp (seconds) of when the model was created |
| `description` | `string` | Yes |  |
| `endpoints` | `string` | Yes | Relative URL to the full per-endpoint records for this model |
| `id` | `string` | Yes | Model slug |
| `name` | `string` | Yes | Display name |
| `supported_parameters` | `array` | Yes | Union of supported parameters across every endpoint of this model. |
| `supports_streaming` | `bool` | Yes | Whether any endpoint of this model supports native SSE streaming on the dedicated Image API (i.e. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ImageModelsList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImageModelsListEntity`

Create a new `ImageModelsListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## KeyEntity

```php
$key = $client->Key();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): KeyEntity`

Create a new `KeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListByokKeyEntity

```php
$list_byok_key = $client->ListByokKey();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListByokKeyEntity`

Create a new `ListByokKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListGuardrailEntity

```php
$list_guardrail = $client->ListGuardrail();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListGuardrailEntity`

Create a new `ListGuardrailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListKeyAssignmentEntity

```php
$list_key_assignment = $client->ListKeyAssignment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_by` | `mixed` | Yes | User ID of who made the assignment |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `string` | Yes | ID of the guardrail |
| `id` | `string` | Yes | Unique identifier for the assignment |
| `key_hash` | `string` | Yes | Hash of the assigned API key |
| `key_label` | `string` | Yes | Label of the API key |
| `key_name` | `string` | Yes | Name of the API key |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListKeyAssignment()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListKeyAssignmentEntity`

Create a new `ListKeyAssignmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListMemberAssignmentEntity

```php
$list_member_assignment = $client->ListMemberAssignment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_by` | `mixed` | Yes | User ID of who made the assignment |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `string` | Yes | ID of the guardrail |
| `id` | `string` | Yes | Unique identifier for the assignment |
| `organization_id` | `string` | Yes | Organization ID |
| `user_id` | `string` | Yes | Clerk user ID of the assigned member |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListMemberAssignment()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListMemberAssignmentEntity`

Create a new `ListMemberAssignmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListObservabilityDestinationEntity

```php
$list_observability_destination = $client->ListObservabilityDestination();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | Yes | List of observability destinations. |
| `total_count` | `int` | Yes | Total number of destinations matching the filters. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListObservabilityDestination()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListObservabilityDestinationEntity`

Create a new `ListObservabilityDestinationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListPresetEntity

```php
$list_preset = $client->ListPreset();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListPresetEntity`

Create a new `ListPresetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListPresetVersionEntity

```php
$list_preset_version = $client->ListPresetVersion();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `array` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `preset_id` | `string` | Yes |  |
| `system_prompt` | `mixed` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `version` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListPresetVersion()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListPresetVersionEntity`

Create a new `ListPresetVersionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListWorkspaceEntity

```php
$list_workspace = $client->ListWorkspace();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListWorkspaceEntity`

Create a new `ListWorkspaceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListWorkspaceBudgetEntity

```php
$list_workspace_budget = $client->ListWorkspaceBudget();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the budget was created |
| `id` | `string` | Yes | Unique identifier for the budget |
| `limit_usd` | `float` | Yes | Spending limit in USD for this interval |
| `reset_interval` | `mixed` | Yes | Interval at which spend resets. |
| `updated_at` | `string` | Yes | ISO 8601 timestamp of when the budget was last updated |
| `workspace_id` | `string` | Yes | ID of the workspace the budget belongs to |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListWorkspaceBudget()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListWorkspaceBudgetEntity`

Create a new `ListWorkspaceBudgetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListWorkspaceMemberEntity

```php
$list_workspace_member = $client->ListWorkspaceMember();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListWorkspaceMember()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListWorkspaceMemberEntity`

Create a new `ListWorkspaceMemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MemberEntity

```php
$member = $client->Member();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MemberEntity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MessageEntity

```php
$message = $client->Message();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_control` | `array` | Yes | Enable automatic prompt caching. |
| `context_management` | `mixed` | No |  |
| `fallbacks` | `mixed` | No | Fallback models to try if the primary model fails or refuses, in order. |
| `max_tokens` | `int` | No |  |
| `messages` | `mixed` | Yes |  |
| `metadata` | `array` | No |  |
| `model` | `string` | Yes |  |
| `models` | `array` | No |  |
| `output_config` | `array` | No | Configuration for controlling output behavior. |
| `plugins` | `array` | No | Plugins you want to enable for this request, including their settings. |
| `provider` | `mixed` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `route` | `mixed` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `service_tier` | `string` | No |  |
| `session_id` | `string` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `speed` | `mixed` | No |  |
| `stop_sequences` | `array` | No |  |
| `stop_server_tools_when` | `array` | No | Stop conditions for the server-tool agent loop. |
| `stream` | `bool` | No |  |
| `system` | `mixed` | No |  |
| `temperature` | `float` | No |  |
| `thinking` | `mixed` | No |  |
| `tool_choice` | `mixed` | No |  |
| `tools` | `array` | No |  |
| `top_k` | `int` | No |  |
| `top_p` | `float` | No |  |
| `trace` | `array` | No | Metadata for observability and tracing. |
| `user` | `string` | No | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Message()->create([
  "cache_control" => null, // array
  "messages" => null, // mixed
  "model" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MessageEntity`

Create a new `MessageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MetaEntity

```php
$meta = $client->Meta();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MetaEntity`

Create a new `MetaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ModelEntity

```php
$model = $client->Model();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `array` | Yes | Model architecture information |
| `benchmarks` | `array` | Yes | Third-party benchmark rankings for this model. |
| `canonical_slug` | `string` | Yes | Canonical slug for the model |
| `context_length` | `mixed` | Yes | Maximum context length in tokens |
| `created` | `int` | Yes | Unix timestamp of when the model was created |
| `default_parameters` | `mixed` | Yes | Default parameters for this model |
| `description` | `string` | No | Description of the model |
| `expiration_date` | `mixed` | No | The date after which the model may be removed. |
| `hugging_face_id` | `mixed` | No | Hugging Face model identifier, if applicable |
| `id` | `string` | Yes | Unique identifier for the model |
| `knowledge_cutoff` | `mixed` | No | The date up to which the model was trained on data. |
| `links` | `array` | Yes | Related API endpoints and resources for this model. |
| `name` | `string` | Yes | Display name of the model |
| `per_request_limits` | `mixed` | Yes | Per-request token limits |
| `pricing` | `array` | Yes | Pricing information for the model |
| `reasoning` | `array` | Yes | Reasoning effort configuration. |
| `supported_parameters` | `array` | Yes | List of supported parameters for this model |
| `supported_voices` | `mixed` | Yes | List of supported voice identifiers for TTS models. |
| `top_provider` | `array` | Yes | Information about the top provider for this model |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Model()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Model()->load(["author" => "author", "slug" => "slug"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ModelEntity`

Create a new `ModelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ModelsCountEntity

```php
$models_count = $client->ModelsCount();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | Yes | Total number of available models |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ModelsCount()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ModelsCountEntity`

Create a new `ModelsCountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ModelsListEntity

```php
$models_list = $client->ModelsList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `array` | Yes | Model architecture information |
| `benchmarks` | `array` | Yes | Third-party benchmark rankings for this model. |
| `canonical_slug` | `string` | Yes | Canonical slug for the model |
| `context_length` | `mixed` | Yes | Maximum context length in tokens |
| `created` | `int` | Yes | Unix timestamp of when the model was created |
| `default_parameters` | `mixed` | Yes | Default parameters for this model |
| `description` | `string` | No | Description of the model |
| `expiration_date` | `mixed` | No | The date after which the model may be removed. |
| `hugging_face_id` | `mixed` | No | Hugging Face model identifier, if applicable |
| `id` | `string` | Yes | Unique identifier for the model |
| `knowledge_cutoff` | `mixed` | No | The date up to which the model was trained on data. |
| `links` | `array` | Yes | Related API endpoints and resources for this model. |
| `name` | `string` | Yes | Display name of the model |
| `per_request_limits` | `mixed` | Yes | Per-request token limits |
| `pricing` | `array` | Yes | Pricing information for the model |
| `reasoning` | `array` | Yes | Reasoning effort configuration. |
| `supported_parameters` | `array` | Yes | List of supported parameters for this model |
| `supported_voices` | `mixed` | Yes | List of supported voice identifiers for TTS models. |
| `top_provider` | `array` | Yes | Information about the top provider for this model |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ModelsList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ModelsListEntity`

Create a new `ModelsListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OAuthEntity

```php
$o_auth = $client->OAuth();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `int` | Yes | The application ID associated with this auth code |
| `callback_url` | `string` | Yes | The callback URL to redirect to after authorization. |
| `code` | `string` | Yes | The authorization code received from the OAuth redirect |
| `code_challenge` | `string` | No | PKCE code challenge for enhanced security |
| `code_challenge_method` | `mixed` | No | The method used to generate the code challenge |
| `code_verifier` | `string` | No | The code verifier if code_challenge was used in the authorization request |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the auth code was created |
| `expires_at` | `mixed` | No | Optional expiration time for the API key to be created |
| `id` | `string` | Yes | The authorization code ID to use in the exchange request |
| `key` | `string` | Yes | The API key to use for OpenRouter requests |
| `key_label` | `string` | No | Optional custom label for the API key. |
| `limit` | `float` | No | Credit limit for the API key to be created |
| `spawn_agent` | `string` | No | Agent identifier for spawn telemetry |
| `spawn_cloud` | `string` | No | Cloud identifier for spawn telemetry |
| `usage_limit_type` | `string` | No | Optional credit limit reset interval. |
| `user_id` | `mixed` | Yes | User ID associated with the API key |
| `workspace_id` | `string` | No | Optional workspace ID to associate the API key with |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OAuth()->create([
  "app_id" => null, // int
  "callback_url" => null, // string
  "code" => null, // string
  "created_at" => null, // string
  "id" => null, // string
  "key" => null, // string
  "user_id" => null, // mixed
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OAuthEntity`

Create a new `OAuthEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ObservabilityDestinationEntity

```php
$observability_destination = $client->ObservabilityDestination();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |
| `id` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ObservabilityDestination()->load(["id" => "observability_destination_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ObservabilityDestination()->remove(["id" => "observability_destination_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ObservabilityDestinationEntity`

Create a new `ObservabilityDestinationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OpenResponsesResultEntity

```php
$open_responses_result = $client->OpenResponsesResult();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `background` | `mixed` | No |  |
| `cache_control` | `array` | Yes | Enable automatic prompt caching. |
| `debug` | `array` | No | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `mixed` | No |  |
| `image_config` | `array` | No | Provider-specific image configuration options. |
| `include` | `mixed` | No |  |
| `input` | `mixed` | No | Input for a response request - can be a string or array of items |
| `instructions` | `mixed` | No |  |
| `max_output_tokens` | `mixed` | No |  |
| `max_tool_calls` | `mixed` | No |  |
| `metadata` | `mixed` | No | Metadata key-value pairs for the request. |
| `modalities` | `array` | No | Output modalities for the response. |
| `model` | `string` | No |  |
| `models` | `array` | No |  |
| `parallel_tool_calls` | `mixed` | No |  |
| `plugins` | `array` | No | Plugins you want to enable for this request, including their settings. |
| `presence_penalty` | `mixed` | No |  |
| `previous_response_id` | `string` | No | Not supported. |
| `prompt` | `mixed` | Yes |  |
| `prompt_cache_key` | `mixed` | No |  |
| `prompt_cache_options` | `mixed` | Yes | Request-level prompt-cache controls. |
| `provider` | `mixed` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `mixed` | No | Configuration for reasoning mode in the response |
| `route` | `mixed` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `mixed` | No |  |
| `service_tier` | `mixed` | No |  |
| `session_id` | `string` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop_server_tools_when` | `array` | No | Stop conditions for the server-tool agent loop. |
| `store` | `bool` | No |  |
| `stream` | `bool` | No |  |
| `temperature` | `mixed` | No |  |
| `text` | `mixed` | No | Text output configuration including format and verbosity |
| `tool_choice` | `mixed` | No |  |
| `tools` | `array` | No |  |
| `top_k` | `int` | No |  |
| `top_logprobs` | `mixed` | No |  |
| `top_p` | `mixed` | No |  |
| `trace` | `array` | No | Metadata for observability and tracing. |
| `truncation` | `mixed` | No |  |
| `user` | `string` | No | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OpenResponsesResult()->create([
  "cache_control" => null, // array
  "prompt" => null, // mixed
  "prompt_cache_options" => null, // mixed
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OpenResponsesResultEntity`

Create a new `OpenResponsesResultEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationEntity

```php
$organization = $client->Organization();
```

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Organization()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationEntity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PresetEntity

```php
$preset = $client->Preset();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `creator_user_id` | `mixed` | Yes |  |
| `description` | `mixed` | Yes |  |
| `designated_version` | `mixed` | Yes | A specific version of a preset, containing config and optional system prompt. |
| `designated_version_id` | `mixed` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `status` | `string` | Yes | The status of a preset. |
| `status_updated_at` | `mixed` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workspace_id` | `mixed` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Preset()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Preset()->load(["id" => "preset_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PresetEntity`

Create a new `PresetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PresetVersionEntity

```php
$preset_version = $client->PresetVersion();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `array` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `preset_id` | `string` | Yes |  |
| `system_prompt` | `mixed` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `version` | `int` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PresetVersion()->load(["id" => "preset_version_id", "slug" => "slug"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PresetVersionEntity`

Create a new `PresetVersionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProviderEntity

```php
$provider = $client->Provider();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `datacenters` | `mixed` | No | ISO 3166-1 Alpha-2 country codes of the provider datacenter locations |
| `headquarters` | `mixed` | No | ISO 3166-1 Alpha-2 country code of the provider headquarters |
| `name` | `string` | Yes | Display name of the provider |
| `privacy_policy_url` | `mixed` | Yes | URL to the provider's privacy policy |
| `slug` | `string` | Yes | URL-friendly identifier for the provider |
| `status_page_url` | `mixed` | No | URL to the provider's status page |
| `terms_of_service_url` | `mixed` | No | URL to the provider's terms of service |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Provider()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProviderEntity`

Create a new `ProviderEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## QueryEntity

```php
$query = $client->Query();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): QueryEntity`

Create a new `QueryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RankingsDailyEntity

```php
$rankings_daily = $client->RankingsDaily();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes | UTC calendar date the row is aggregated over (YYYY-MM-DD). |
| `model_permaslug` | `string` | Yes | Model variant permaslug (e.g. |
| `total_tokens` | `string` | Yes | Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->RankingsDaily()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RankingsDailyEntity`

Create a new `RankingsDailyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RemoveEntity

```php
$remove = $client->Remove();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RemoveEntity`

Create a new `RemoveEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RerankEntity

```php
$rerank = $client->Rerank();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `documents` | `array` | Yes | The list of documents to rerank. |
| `id` | `string` | No | Unique identifier for the rerank response (ORID format) |
| `model` | `string` | Yes | The model used for reranking |
| `provider` | `string` | No | The provider that served the rerank request |
| `query` | `string` | Yes | The search query to rerank documents against |
| `results` | `array` | Yes | List of rerank results sorted by relevance |
| `top_n` | `int` | No | Number of most relevant documents to return |
| `usage` | `array` | No | Usage statistics |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Rerank()->create([
  "documents" => null, // array
  "model" => null, // string
  "query" => null, // string
  "results" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RerankEntity`

Create a new `RerankEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ResponseEntity

```php
$response = $client->Response();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ResponseEntity`

Create a new `ResponseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SpeechEntity

```php
$speech = $client->Speech();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SpeechEntity`

Create a new `SpeechEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SttEntity

```php
$stt = $client->Stt();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `duration` | `float` | No | Duration of the input audio in seconds, present when response_format is verbose_json |
| `input_audio` | `array` | Yes | Base64-encoded audio to transcribe |
| `language` | `string` | No | Detected or forced language, present when response_format is verbose_json |
| `model` | `string` | Yes | STT model identifier |
| `provider` | `array` | No | Provider-specific passthrough configuration |
| `response_format` | `string` | No | Output format. |
| `segments` | `array` | No | Timestamped transcript segments, present when response_format is verbose_json |
| `task` | `string` | No | The task performed, present when response_format is verbose_json |
| `temperature` | `float` | No | Sampling temperature for transcription |
| `text` | `string` | Yes | The transcribed text |
| `timestamp_granularities` | `array` | No | Timestamp detail levels to include when response_format is "verbose_json". |
| `usage` | `array` | No | Aggregated usage statistics for the request |
| `words` | `array` | No | Timestamped words, present when the provider returns word-level timestamps |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Stt()->create([
  "input_audio" => null, // array
  "model" => null, // string
  "text" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SttEntity`

Create a new `SttEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubmitGenerationFeedbackEntity

```php
$submit_generation_feedback = $client->SubmitGenerationFeedback();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes | The category of feedback being reported |
| `comment` | `string` | No | An optional free-text comment describing the feedback |
| `generation_id` | `string` | Yes | The generation to submit feedback on |
| `success` | `bool` | Yes | Whether the feedback was recorded |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SubmitGenerationFeedback()->create([
  "category" => null, // string
  "generation_id" => null, // string
  "success" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubmitGenerationFeedbackEntity`

Create a new `SubmitGenerationFeedbackEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TaskEntity

```php
$task = $client->Task();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `as_of` | `string` | Yes | UTC date (YYYY-MM-DD) of the window upper bound (yesterday). |
| `classifications` | `array` | Yes | Per-task classification market-share data, sorted by usage_share descending. |
| `macro_categories` | `array` | Yes | Aggregate market-share data per macro-category (code, data, agent, general). |
| `window_days` | `int` | Yes | Number of trailing days covered by this snapshot. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Task()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TaskEntity`

Create a new `TaskEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TranscriptionEntity

```php
$transcription = $client->Transcription();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TranscriptionEntity`

Create a new `TranscriptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TtsEntity

```php
$tts = $client->Tts();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `string` | Yes | Text to synthesize |
| `model` | `string` | Yes | TTS model identifier |
| `provider` | `array` | No | Provider-specific passthrough configuration |
| `response_format` | `string` | No | Audio output format |
| `speed` | `float` | No | Playback speed multiplier. |
| `voice` | `string` | Yes | Voice identifier (provider-specific). |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Tts()->create([
  "input" => null, // string
  "model" => null, // string
  "voice" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TtsEntity`

Create a new `TtsEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UnifiedBenchmarkEntity

```php
$unified_benchmark = $client->UnifiedBenchmark();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | Yes |  |
| `meta` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->UnifiedBenchmark()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UnifiedBenchmarkEntity`

Create a new `UnifiedBenchmarkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UpdateByokKeyEntity

```php
$update_byok_key = $client->UpdateByokKey();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_models` | `mixed` | No | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `mixed` | No | Optional allowlist of user IDs that may use this credential. |
| `disabled` | `bool` | No | Whether this credential is disabled. |
| `id` | `string` | No |  |
| `is_fallback` | `bool` | No | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `string` | No | A new raw provider API key to rotate the credential in-place. |
| `name` | `mixed` | No | Optional human-readable name for the credential. |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->UpdateByokKey()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UpdateByokKeyEntity`

Create a new `UpdateByokKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UpdateGuardrailEntity

```php
$update_guardrail = $client->UpdateGuardrail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_models` | `mixed` | No | Array of model identifiers (slug or canonical_slug accepted) |
| `allowed_providers` | `mixed` | No | New list of allowed provider IDs |
| `content_filter_builtins` | `mixed` | No | Builtin content filters to apply. |
| `content_filters` | `mixed` | No | Custom regex content filters to apply. |
| `description` | `mixed` | No | New description for the guardrail |
| `enforce_zdr` | `mixed` | No | Deprecated. |
| `enforce_zdr_anthropic` | `mixed` | No | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `mixed` | No | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `mixed` | No | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `mixed` | No | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `mixed` | No | Whether to enforce zero data retention for xAI models. |
| `id` | `string` | No |  |
| `ignored_models` | `mixed` | No | Array of model identifiers to exclude from routing (slug or canonical_slug accepted) |
| `ignored_providers` | `mixed` | No | List of provider IDs to exclude from routing |
| `limit_usd` | `mixed` | No | New spending limit in USD |
| `name` | `string` | No | New name for the guardrail |
| `reset_interval` | `mixed` | No | Interval at which the limit resets (daily, weekly, monthly) |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->UpdateGuardrail()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UpdateGuardrailEntity`

Create a new `UpdateGuardrailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UpdateObservabilityDestinationEntity

```php
$update_observability_destination = $client->UpdateObservabilityDestination();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_key_hashes` | `mixed` | No | Optional allowlist of OpenRouter API key hashes. |
| `config` | `array` | No | Provider-specific configuration fields to update. |
| `enabled` | `bool` | No | Whether the destination is enabled. |
| `filter_rules` | `mixed` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No | Human-readable name for the destination. |
| `privacy_mode` | `bool` | No | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `float` | No | Sampling rate between 0.0001 and 1 (1 = 100%). |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->UpdateObservabilityDestination()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UpdateObservabilityDestinationEntity`

Create a new `UpdateObservabilityDestinationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UpdateWorkspaceEntity

```php
$update_workspace = $client->UpdateWorkspace();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the workspace was created |
| `created_by` | `mixed` | Yes | User ID of the workspace creator |
| `default_image_model` | `mixed` | No | Default image model for this workspace |
| `default_provider_sort` | `mixed` | No | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `mixed` | No | Default text model for this workspace |
| `description` | `mixed` | No | Description of the workspace |
| `id` | `string` | Yes | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `mixed` | No | Optional array of API key IDs to filter I/O logging |
| `io_logging_sampling_rate` | `float` | No | Sampling rate for I/O logging (0.0001-1) |
| `is_data_discount_logging_enabled` | `bool` | No | Whether data discount logging is enabled |
| `is_observability_broadcast_enabled` | `bool` | No | Whether broadcast is enabled |
| `is_observability_io_logging_enabled` | `bool` | No | Whether private logging is enabled |
| `name` | `string` | Yes | Name for the new workspace |
| `slug` | `string` | Yes | URL-friendly slug (lowercase alphanumeric segments separated by single hyphens, no leading/trailing hyphens) |
| `updated_at` | `mixed` | Yes | ISO 8601 timestamp of when the workspace was last updated |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->UpdateWorkspace()->create([
  "created_at" => null, // string
  "created_by" => null, // mixed
  "id" => null, // string
  "name" => null, // string
  "slug" => null, // string
  "updated_at" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->UpdateWorkspace()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->UpdateWorkspace()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UpdateWorkspaceEntity`

Create a new `UpdateWorkspaceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UpsertWorkspaceBudgetEntity

```php
$upsert_workspace_budget = $client->UpsertWorkspaceBudget();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `limit_usd` | `float` | Yes | Spending limit in USD. |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->UpsertWorkspaceBudget()->update([
  "id" => "id",
  "workspace_id" => "workspace_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UpsertWorkspaceBudgetEntity`

Create a new `UpsertWorkspaceBudgetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserEntity

```php
$user = $client->User();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserEntity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VersionEntity

```php
$version = $client->Version();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VersionEntity`

Create a new `VersionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VideoEntity

```php
$video = $client->Video();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `string` | No | Aspect ratio of the generated video |
| `callback_url` | `string` | No | URL to receive a webhook notification when the video generation job completes. |
| `duration` | `int` | No | Duration of the generated video in seconds |
| `error` | `string` | No |  |
| `frame_images` | `array` | No | Images to use as the first and/or last frame of the generated video. |
| `generate_audio` | `bool` | No | Whether to generate audio alongside the video. |
| `generation_id` | `string` | No | The generation ID associated with this video generation job. |
| `id` | `string` | Yes |  |
| `input_references` | `array` | No | Reference assets to guide video generation. |
| `model` | `string` | Yes |  |
| `polling_url` | `string` | Yes |  |
| `prompt` | `string` | No | Text prompt describing the video to generate. |
| `provider` | `array` | No | Provider-specific passthrough configuration |
| `resolution` | `string` | No | Resolution of the generated video |
| `seed` | `int` | No | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `string` | No | Exact pixel dimensions of the generated video in "WIDTHxHEIGHT" format (e.g. |
| `status` | `string` | Yes |  |
| `unsigned_urls` | `array` | No |  |
| `usage` | `array` | No | Usage and cost information for the video generation. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Video()->create([
  "id" => null, // string
  "model" => null, // string
  "polling_url" => null, // string
  "status" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Video()->load(["id" => "video_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VideoEntity`

Create a new `VideoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VideoGenerationEntity

```php
$video_generation = $client->VideoGeneration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->VideoGeneration()->load(["id" => "video_generation_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VideoGenerationEntity`

Create a new `VideoGenerationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VideoModelsListEntity

```php
$video_models_list = $client->VideoModelsList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_passthrough_parameters` | `array` | Yes | List of parameters that are allowed to be passed through to the provider |
| `canonical_slug` | `string` | Yes | Canonical slug for the model |
| `created` | `int` | Yes | Unix timestamp of when the model was created |
| `description` | `string` | No | Description of the model |
| `generate_audio` | `mixed` | Yes | Whether the model supports generating audio alongside video |
| `hugging_face_id` | `mixed` | No | Hugging Face model identifier, if applicable |
| `id` | `string` | Yes | Unique identifier for the model |
| `name` | `string` | Yes | Display name of the model |
| `pricing_skus` | `mixed` | No | Pricing SKUs with provider prefix stripped, values as strings |
| `seed` | `mixed` | Yes | Whether the model supports deterministic generation via seed parameter |
| `supported_aspect_ratios` | `mixed` | Yes | Supported output aspect ratios |
| `supported_durations` | `mixed` | Yes | Supported video durations in seconds |
| `supported_frame_images` | `mixed` | Yes | Supported frame image types (e.g. |
| `supported_resolutions` | `mixed` | Yes | Supported output resolutions |
| `supported_sizes` | `mixed` | Yes | Supported output sizes (width x height) |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->VideoModelsList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VideoModelsListEntity`

Create a new `VideoModelsListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkspaceEntity

```php
$workspace = $client->Workspace();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the workspace was created |
| `created_by` | `mixed` | Yes | User ID of the workspace creator |
| `default_image_model` | `mixed` | Yes | Default image model for this workspace |
| `default_provider_sort` | `mixed` | Yes | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `mixed` | Yes | Default text model for this workspace |
| `description` | `mixed` | Yes | Description of the workspace |
| `id` | `string` | Yes | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `mixed` | Yes | Optional array of API key IDs to filter I/O logging. |
| `io_logging_sampling_rate` | `float` | Yes | Sampling rate for I/O logging (0.0001-1). |
| `is_data_discount_logging_enabled` | `bool` | Yes | Whether data discount logging is enabled for this workspace |
| `is_observability_broadcast_enabled` | `bool` | Yes | Whether broadcast is enabled for this workspace |
| `is_observability_io_logging_enabled` | `bool` | Yes | Whether private logging is enabled for this workspace |
| `name` | `string` | Yes | Name of the workspace |
| `slug` | `string` | Yes | URL-friendly slug for the workspace |
| `updated_at` | `mixed` | Yes | ISO 8601 timestamp of when the workspace was last updated |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Workspace()->load(["id" => "workspace_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Workspace()->remove(["id" => "workspace_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkspaceEntity`

Create a new `WorkspaceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkspaceBudgetEntity

```php
$workspace_budget = $client->WorkspaceBudget();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->WorkspaceBudget()->remove(["id" => "id", "workspace_id" => "workspace_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkspaceBudgetEntity`

Create a new `WorkspaceBudgetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZdrEntity

```php
$zdr = $client->Zdr();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZdrEntity`

Create a new `ZdrEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```php
$client = new OpenrouterModelsSDK([
  "feature" => [
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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

Client-side rate limiting via a token bucket.

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

Automatic retry of transient failures with exponential backoff.

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

In-memory mock transport for testing without a live server.

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

Per-request timeout with transport abort.

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

