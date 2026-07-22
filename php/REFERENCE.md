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
| `byok_usage_inference` | `float` | Yes |  |
| `completion_token` | `int` | Yes |  |
| `date` | `string` | Yes |  |
| `endpoint_id` | `string` | Yes |  |
| `model` | `string` | Yes |  |
| `model_permaslug` | `string` | Yes |  |
| `prompt_token` | `int` | Yes |  |
| `provider_name` | `string` | Yes |  |
| `reasoning_token` | `int` | Yes |  |
| `request` | `int` | Yes |  |
| `usage` | `float` | Yes |  |

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
| `byok_usage` | `float` | Yes |  |
| `byok_usage_daily` | `float` | Yes |  |
| `byok_usage_monthly` | `float` | Yes |  |
| `byok_usage_weekly` | `float` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator_user_id` | `mixed` | No |  |
| `data` | `array` | Yes |  |
| `disabled` | `bool` | No |  |
| `expires_at` | `mixed` | No |  |
| `hash` | `string` | Yes |  |
| `include_byok_in_limit` | `bool` | No |  |
| `label` | `string` | Yes |  |
| `limit` | `mixed` | No |  |
| `limit_remaining` | `mixed` | Yes |  |
| `limit_reset` | `mixed` | No |  |
| `name` | `string` | Yes |  |
| `updated_at` | `mixed` | Yes |  |
| `usage` | `float` | Yes |  |
| `usage_daily` | `float` | Yes |  |
| `usage_monthly` | `float` | Yes |  |
| `usage_weekly` | `float` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiKey()->create([
  "byok_usage" => null, // float
  "byok_usage_daily" => null, // float
  "byok_usage_monthly" => null, // float
  "byok_usage_weekly" => null, // float
  "created_at" => null, // string
  "data" => null, // array
  "hash" => null, // string
  "label" => null, // string
  "limit_remaining" => null, // mixed
  "name" => null, // string
  "updated_at" => null, // mixed
  "usage" => null, // float
  "usage_daily" => null, // float
  "usage_monthly" => null, // float
  "usage_weekly" => null, // float
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
| `app_id` | `int` | Yes |  |
| `app_name` | `string` | Yes |  |
| `rank` | `int` | Yes |  |
| `total_request` | `int` | Yes |  |
| `total_token` | `string` | Yes |  |

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
| `classifier_dimension` | `array` | Yes |  |
| `classifier_filter` | `array` | Yes |  |
| `data` | `array` | Yes |  |
| `dimension` | `array` | No |  |
| `filter` | `array` | No |  |
| `granularity` | `string` | No |  |
| `group_limit` | `int` | No |  |
| `limit` | `int` | No |  |
| `metric` | `array` | Yes |  |
| `order_by` | `array` | Yes |  |
| `time_range` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BetaAnalytics()->create([
  "classifier_dimension" => null, // array
  "classifier_filter" => null, // array
  "data" => null, // array
  "metric" => null, // array
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
| `added_count` | `int` | Yes |  |
| `data` | `array` | Yes |  |
| `user_id` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BulkAddWorkspaceMember()->create([
  "workspace_id" => null, // string
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
| `assigned_count` | `int` | Yes |  |
| `key_hash` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BulkAssignKey()->create([
  "guardrail_id" => null, // string
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
| `assigned_count` | `int` | Yes |  |
| `member_user_id` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BulkAssignMember()->create([
  "guardrail_id" => null, // string
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
| `removed_count` | `int` | Yes |  |
| `user_id` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BulkRemoveWorkspaceMember()->create([
  "workspace_id" => null, // string
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
| `key_hash` | `array` | Yes |  |
| `unassigned_count` | `int` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BulkUnassignKey()->create([
  "guardrail_id" => null, // string
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
| `member_user_id` | `array` | Yes |  |
| `unassigned_count` | `int` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BulkUnassignMember()->create([
  "guardrail_id" => null, // string
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
| `allowed_api_key_hash` | `mixed` | Yes |  |
| `allowed_model` | `mixed` | No |  |
| `allowed_user_id` | `mixed` | No |  |
| `created_at` | `string` | Yes |  |
| `data` | `mixed` | Yes |  |
| `disabled` | `bool` | No |  |
| `id` | `string` | Yes |  |
| `is_fallback` | `bool` | No |  |
| `key` | `string` | Yes |  |
| `label` | `string` | Yes |  |
| `name` | `mixed` | No |  |
| `provider` | `string` | Yes |  |
| `sort_order` | `int` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Byok()->create([
  "allowed_api_key_hash" => null, // mixed
  "created_at" => null, // string
  "data" => null, // mixed
  "id" => null, // string
  "key" => null, // string
  "label" => null, // string
  "provider" => null, // string
  "sort_order" => null, // int
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
| `cache_control` | `array` | Yes |  |
| `choice` | `array` | Yes |  |
| `created` | `int` | Yes |  |
| `debug` | `array` | No |  |
| `frequency_penalty` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `image_config` | `array` | No |  |
| `logit_bia` | `mixed` | No |  |
| `logprob` | `mixed` | No |  |
| `max_completion_token` | `mixed` | No |  |
| `max_token` | `mixed` | No |  |
| `message` | `array` | Yes |  |
| `metadata` | `array` | No |  |
| `min_p` | `mixed` | No |  |
| `modality` | `array` | No |  |
| `model` | `string` | Yes |  |
| `object` | `string` | Yes |  |
| `openrouter_metadata` | `array` | Yes |  |
| `parallel_tool_call` | `mixed` | No |  |
| `plugin` | `array` | No |  |
| `prediction` | `mixed` | Yes |  |
| `presence_penalty` | `mixed` | No |  |
| `prompt_cache_key` | `mixed` | No |  |
| `prompt_cache_option` | `mixed` | Yes |  |
| `provider` | `mixed` | No |  |
| `reasoning` | `array` | No |  |
| `reasoning_effort` | `mixed` | No |  |
| `repetition_penalty` | `mixed` | No |  |
| `response_format` | `mixed` | No |  |
| `route` | `mixed` | No |  |
| `seed` | `mixed` | No |  |
| `service_tier` | `mixed` | No |  |
| `session_id` | `string` | No |  |
| `stop` | `mixed` | No |  |
| `stop_server_tools_when` | `array` | No |  |
| `stream` | `bool` | No |  |
| `stream_option` | `mixed` | No |  |
| `system_fingerprint` | `mixed` | Yes |  |
| `temperature` | `mixed` | No |  |
| `tool` | `array` | No |  |
| `tool_choice` | `mixed` | No |  |
| `top_a` | `mixed` | No |  |
| `top_k` | `mixed` | No |  |
| `top_logprob` | `mixed` | No |  |
| `top_p` | `mixed` | No |  |
| `trace` | `array` | No |  |
| `usage` | `array` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ChatResult()->create([
  "cache_control" => null, // array
  "choice" => null, // array
  "created" => null, // int
  "id" => null, // string
  "message" => null, // array
  "model" => null, // string
  "object" => null, // string
  "openrouter_metadata" => null, // array
  "prediction" => null, // mixed
  "prompt_cache_option" => null, // mixed
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
| `api_key_hash` | `mixed` | No |  |
| `config` | `array` | Yes |  |
| `enabled` | `bool` | No |  |
| `filter_rule` | `mixed` | Yes |  |
| `name` | `string` | Yes |  |
| `privacy_mode` | `bool` | No |  |
| `sampling_rate` | `float` | No |  |
| `type` | `string` | Yes |  |
| `workspace_id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CreateObservabilityDestination()->create([
  "config" => null, // array
  "filter_rule" => null, // mixed
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
| `cache_control` | `array` | Yes |  |
| `context_management` | `mixed` | No |  |
| `data` | `mixed` | Yes |  |
| `debug` | `array` | No |  |
| `fallback` | `mixed` | No |  |
| `frequency_penalty` | `mixed` | No |  |
| `image_config` | `array` | No |  |
| `include` | `mixed` | No |  |
| `input` | `mixed` | No |  |
| `instruction` | `mixed` | No |  |
| `logit_bia` | `mixed` | No |  |
| `logprob` | `mixed` | No |  |
| `max_completion_token` | `mixed` | No |  |
| `max_output_token` | `mixed` | No |  |
| `max_token` | `mixed` | No |  |
| `max_tool_call` | `mixed` | No |  |
| `message` | `array` | Yes |  |
| `metadata` | `array` | No |  |
| `min_p` | `mixed` | No |  |
| `modality` | `array` | No |  |
| `model` | `string` | No |  |
| `output_config` | `array` | No |  |
| `parallel_tool_call` | `mixed` | No |  |
| `plugin` | `array` | No |  |
| `prediction` | `mixed` | Yes |  |
| `presence_penalty` | `mixed` | No |  |
| `previous_response_id` | `string` | No |  |
| `prompt` | `mixed` | Yes |  |
| `prompt_cache_key` | `mixed` | No |  |
| `prompt_cache_option` | `mixed` | Yes |  |
| `provider` | `mixed` | No |  |
| `reasoning` | `array` | No |  |
| `reasoning_effort` | `mixed` | No |  |
| `repetition_penalty` | `mixed` | No |  |
| `response_format` | `mixed` | No |  |
| `route` | `mixed` | No |  |
| `safety_identifier` | `mixed` | No |  |
| `seed` | `mixed` | No |  |
| `service_tier` | `mixed` | No |  |
| `session_id` | `string` | No |  |
| `speed` | `mixed` | No |  |
| `stop` | `mixed` | No |  |
| `stop_sequence` | `array` | No |  |
| `stop_server_tools_when` | `array` | No |  |
| `store` | `bool` | No |  |
| `stream` | `bool` | No |  |
| `stream_option` | `mixed` | No |  |
| `system` | `mixed` | No |  |
| `temperature` | `mixed` | No |  |
| `text` | `mixed` | No |  |
| `thinking` | `mixed` | No |  |
| `tool` | `array` | No |  |
| `tool_choice` | `mixed` | No |  |
| `top_a` | `mixed` | No |  |
| `top_k` | `mixed` | No |  |
| `top_logprob` | `mixed` | No |  |
| `top_p` | `mixed` | No |  |
| `trace` | `array` | No |  |
| `truncation` | `mixed` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CreatePresetFromInference()->create([
  "slug" => null, // string
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
| `data` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Credit()->create([
  "data" => null, // array
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
| `data` | `array` | Yes |  |
| `dimension` | `int` | No |  |
| `encoding_format` | `string` | No |  |
| `id` | `string` | No |  |
| `input` | `mixed` | Yes |  |
| `input_type` | `string` | No |  |
| `model` | `string` | Yes |  |
| `object` | `string` | Yes |  |
| `provider` | `mixed` | No |  |
| `usage` | `array` | Yes |  |
| `user` | `string` | No |  |

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
| `architecture` | `array` | Yes |  |
| `benchmark` | `array` | Yes |  |
| `canonical_slug` | `string` | Yes |  |
| `context_length` | `mixed` | Yes |  |
| `created` | `int` | Yes |  |
| `data` | `array` | Yes |  |
| `default_parameter` | `mixed` | Yes |  |
| `description` | `string` | No |  |
| `expiration_date` | `mixed` | No |  |
| `hugging_face_id` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `knowledge_cutoff` | `mixed` | No |  |
| `latency_last_30m` | `mixed` | Yes |  |
| `link` | `array` | Yes |  |
| `max_completion_token` | `mixed` | Yes |  |
| `max_prompt_token` | `mixed` | Yes |  |
| `model_id` | `string` | Yes |  |
| `model_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `per_request_limit` | `mixed` | Yes |  |
| `pricing` | `array` | Yes |  |
| `provider_name` | `string` | Yes |  |
| `quantization` | `mixed` | Yes |  |
| `reasoning` | `array` | Yes |  |
| `status` | `int` | No |  |
| `supported_parameter` | `array` | Yes |  |
| `supported_voice` | `mixed` | Yes |  |
| `supports_implicit_caching` | `bool` | Yes |  |
| `tag` | `string` | Yes |  |
| `throughput_last_30m` | `mixed` | Yes |  |
| `top_provider` | `array` | Yes |  |
| `uptime_last_1d` | `mixed` | Yes |  |
| `uptime_last_30m` | `mixed` | Yes |  |
| `uptime_last_5m` | `mixed` | Yes |  |

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
| `size_byte` | `int` | Yes |  |
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
  "size_byte" => null, // int
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
| `data` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Generation()->load();
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
| `data` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GenerationContent()->load();
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
| `allowed_model` | `mixed` | No |  |
| `allowed_provider` | `mixed` | No |  |
| `content_filter` | `mixed` | No |  |
| `content_filter_builtin` | `mixed` | No |  |
| `created_at` | `string` | Yes |  |
| `data` | `mixed` | Yes |  |
| `description` | `mixed` | No |  |
| `enforce_zdr` | `mixed` | No |  |
| `enforce_zdr_anthropic` | `mixed` | No |  |
| `enforce_zdr_google` | `mixed` | No |  |
| `enforce_zdr_openai` | `mixed` | No |  |
| `enforce_zdr_other` | `mixed` | No |  |
| `enforce_zdr_xai` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `ignored_model` | `mixed` | No |  |
| `ignored_provider` | `mixed` | No |  |
| `limit_usd` | `mixed` | No |  |
| `name` | `string` | Yes |  |
| `reset_interval` | `mixed` | No |  |
| `updated_at` | `mixed` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Guardrail()->create([
  "created_at" => null, // string
  "data" => null, // mixed
  "id" => null, // string
  "name" => null, // string
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
| `aspect_ratio` | `string` | No |  |
| `background` | `string` | No |  |
| `created` | `int` | Yes |  |
| `data` | `array` | Yes |  |
| `input_reference` | `array` | No |  |
| `model` | `string` | Yes |  |
| `n` | `int` | No |  |
| `output_compression` | `int` | No |  |
| `output_format` | `string` | No |  |
| `prompt` | `string` | Yes |  |
| `provider` | `array` | No |  |
| `quality` | `string` | No |  |
| `resolution` | `string` | No |  |
| `seed` | `int` | No |  |
| `size` | `string` | No |  |
| `stream` | `bool` | No |  |
| `usage` | `array` | Yes |  |

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
| `allowed_passthrough_parameter` | `array` | Yes |  |
| `pricing` | `array` | Yes |  |
| `provider_name` | `string` | Yes |  |
| `provider_slug` | `string` | Yes |  |
| `provider_tag` | `mixed` | Yes |  |
| `supported_parameter` | `mixed` | Yes |  |
| `supports_streaming` | `bool` | Yes |  |

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
| `created` | `int` | Yes |  |
| `description` | `string` | Yes |  |
| `endpoint` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `supported_parameter` | `array` | Yes |  |
| `supports_streaming` | `bool` | Yes |  |

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
| `assigned_by` | `mixed` | Yes |  |
| `created_at` | `string` | Yes |  |
| `guardrail_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `key_hash` | `string` | Yes |  |
| `key_label` | `string` | Yes |  |
| `key_name` | `string` | Yes |  |

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
| `assigned_by` | `mixed` | Yes |  |
| `created_at` | `string` | Yes |  |
| `guardrail_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `organization_id` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |

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
| `data` | `array` | Yes |  |
| `total_count` | `int` | Yes |  |

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
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `limit_usd` | `float` | Yes |  |
| `reset_interval` | `mixed` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workspace_id` | `string` | Yes |  |

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
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `role` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |
| `workspace_id` | `string` | Yes |  |

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
| `cache_control` | `array` | Yes |  |
| `context_management` | `mixed` | No |  |
| `fallback` | `mixed` | No |  |
| `max_token` | `int` | No |  |
| `message` | `mixed` | Yes |  |
| `metadata` | `array` | No |  |
| `model` | `string` | Yes |  |
| `output_config` | `array` | No |  |
| `plugin` | `array` | No |  |
| `provider` | `mixed` | No |  |
| `route` | `mixed` | No |  |
| `service_tier` | `string` | No |  |
| `session_id` | `string` | No |  |
| `speed` | `mixed` | No |  |
| `stop_sequence` | `array` | No |  |
| `stop_server_tools_when` | `array` | No |  |
| `stream` | `bool` | No |  |
| `system` | `mixed` | No |  |
| `temperature` | `float` | No |  |
| `thinking` | `mixed` | No |  |
| `tool` | `array` | No |  |
| `tool_choice` | `mixed` | No |  |
| `top_k` | `int` | No |  |
| `top_p` | `float` | No |  |
| `trace` | `array` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Message()->create([
  "cache_control" => null, // array
  "message" => null, // mixed
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
| `architecture` | `array` | Yes |  |
| `benchmark` | `array` | Yes |  |
| `canonical_slug` | `string` | Yes |  |
| `context_length` | `mixed` | Yes |  |
| `created` | `int` | Yes |  |
| `data` | `array` | Yes |  |
| `default_parameter` | `mixed` | Yes |  |
| `description` | `string` | No |  |
| `expiration_date` | `mixed` | No |  |
| `hugging_face_id` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `knowledge_cutoff` | `mixed` | No |  |
| `link` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `per_request_limit` | `mixed` | Yes |  |
| `pricing` | `array` | Yes |  |
| `reasoning` | `array` | Yes |  |
| `supported_parameter` | `array` | Yes |  |
| `supported_voice` | `mixed` | Yes |  |
| `top_provider` | `array` | Yes |  |

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
| `data` | `array` | Yes |  |

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
| `architecture` | `array` | Yes |  |
| `benchmark` | `array` | Yes |  |
| `canonical_slug` | `string` | Yes |  |
| `context_length` | `mixed` | Yes |  |
| `created` | `int` | Yes |  |
| `default_parameter` | `mixed` | Yes |  |
| `description` | `string` | No |  |
| `expiration_date` | `mixed` | No |  |
| `hugging_face_id` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `knowledge_cutoff` | `mixed` | No |  |
| `link` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `per_request_limit` | `mixed` | Yes |  |
| `pricing` | `array` | Yes |  |
| `reasoning` | `array` | Yes |  |
| `supported_parameter` | `array` | Yes |  |
| `supported_voice` | `mixed` | Yes |  |
| `top_provider` | `array` | Yes |  |

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
| `callback_url` | `string` | Yes |  |
| `code` | `string` | Yes |  |
| `code_challenge` | `string` | No |  |
| `code_challenge_method` | `mixed` | No |  |
| `code_verifier` | `string` | No |  |
| `data` | `array` | Yes |  |
| `expires_at` | `mixed` | No |  |
| `key` | `string` | Yes |  |
| `key_label` | `string` | No |  |
| `limit` | `float` | No |  |
| `spawn_agent` | `string` | No |  |
| `spawn_cloud` | `string` | No |  |
| `usage_limit_type` | `string` | No |  |
| `user_id` | `mixed` | Yes |  |
| `workspace_id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OAuth()->create([
  "callback_url" => null, // string
  "code" => null, // string
  "data" => null, // array
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
| `data` | `mixed` | Yes |  |

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
| `cache_control` | `array` | Yes |  |
| `debug` | `array` | No |  |
| `frequency_penalty` | `mixed` | No |  |
| `image_config` | `array` | No |  |
| `include` | `mixed` | No |  |
| `input` | `mixed` | No |  |
| `instruction` | `mixed` | No |  |
| `max_output_token` | `mixed` | No |  |
| `max_tool_call` | `mixed` | No |  |
| `metadata` | `mixed` | No |  |
| `modality` | `array` | No |  |
| `model` | `string` | No |  |
| `parallel_tool_call` | `mixed` | No |  |
| `plugin` | `array` | No |  |
| `presence_penalty` | `mixed` | No |  |
| `previous_response_id` | `string` | No |  |
| `prompt` | `mixed` | Yes |  |
| `prompt_cache_key` | `mixed` | No |  |
| `prompt_cache_option` | `mixed` | Yes |  |
| `provider` | `mixed` | No |  |
| `reasoning` | `mixed` | No |  |
| `route` | `mixed` | No |  |
| `safety_identifier` | `mixed` | No |  |
| `service_tier` | `mixed` | No |  |
| `session_id` | `string` | No |  |
| `stop_server_tools_when` | `array` | No |  |
| `store` | `bool` | No |  |
| `stream` | `bool` | No |  |
| `temperature` | `mixed` | No |  |
| `text` | `mixed` | No |  |
| `tool` | `array` | No |  |
| `tool_choice` | `mixed` | No |  |
| `top_k` | `int` | No |  |
| `top_logprob` | `mixed` | No |  |
| `top_p` | `mixed` | No |  |
| `trace` | `array` | No |  |
| `truncation` | `mixed` | No |  |
| `user` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OpenResponsesResult()->create([
  "cache_control" => null, // array
  "prompt" => null, // mixed
  "prompt_cache_option" => null, // mixed
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

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes |  |
| `first_name` | `mixed` | Yes |  |
| `id` | `string` | Yes |  |
| `last_name` | `mixed` | Yes |  |
| `role` | `string` | Yes |  |

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
| `data` | `mixed` | Yes |  |
| `description` | `mixed` | Yes |  |
| `designated_version_id` | `mixed` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `status` | `string` | Yes |  |
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
| `data` | `mixed` | Yes |  |

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
| `datacenter` | `mixed` | No |  |
| `headquarter` | `mixed` | No |  |
| `name` | `string` | Yes |  |
| `privacy_policy_url` | `mixed` | Yes |  |
| `slug` | `string` | Yes |  |
| `status_page_url` | `mixed` | No |  |
| `terms_of_service_url` | `mixed` | No |  |

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
| `date` | `string` | Yes |  |
| `model_permaslug` | `string` | Yes |  |
| `total_token` | `string` | Yes |  |

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
| `document` | `array` | Yes |  |
| `id` | `string` | No |  |
| `model` | `string` | Yes |  |
| `provider` | `string` | No |  |
| `query` | `string` | Yes |  |
| `result` | `array` | Yes |  |
| `top_n` | `int` | No |  |
| `usage` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Rerank()->create([
  "document" => null, // array
  "model" => null, // string
  "query" => null, // string
  "result" => null, // array
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
| `duration` | `float` | No |  |
| `input_audio` | `array` | Yes |  |
| `language` | `string` | No |  |
| `model` | `string` | Yes |  |
| `provider` | `array` | No |  |
| `response_format` | `string` | No |  |
| `segment` | `array` | No |  |
| `task` | `string` | No |  |
| `temperature` | `float` | No |  |
| `text` | `string` | Yes |  |
| `timestamp_granularity` | `array` | No |  |
| `usage` | `array` | No |  |
| `word` | `array` | No |  |

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
| `category` | `string` | Yes |  |
| `comment` | `string` | No |  |
| `data` | `array` | Yes |  |
| `generation_id` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SubmitGenerationFeedback()->create([
  "category" => null, // string
  "data" => null, // array
  "generation_id" => null, // string
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
| `data` | `array` | Yes |  |

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
| `input` | `string` | Yes |  |
| `model` | `string` | Yes |  |
| `provider` | `array` | No |  |
| `response_format` | `string` | No |  |
| `speed` | `float` | No |  |
| `voice` | `string` | Yes |  |

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
| `allowed_model` | `mixed` | No |  |
| `allowed_user_id` | `mixed` | No |  |
| `data` | `mixed` | Yes |  |
| `disabled` | `bool` | No |  |
| `is_fallback` | `bool` | No |  |
| `key` | `string` | No |  |
| `name` | `mixed` | No |  |

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
| `allowed_model` | `mixed` | No |  |
| `allowed_provider` | `mixed` | No |  |
| `content_filter` | `mixed` | No |  |
| `content_filter_builtin` | `mixed` | No |  |
| `data` | `mixed` | Yes |  |
| `description` | `mixed` | No |  |
| `enforce_zdr` | `mixed` | No |  |
| `enforce_zdr_anthropic` | `mixed` | No |  |
| `enforce_zdr_google` | `mixed` | No |  |
| `enforce_zdr_openai` | `mixed` | No |  |
| `enforce_zdr_other` | `mixed` | No |  |
| `enforce_zdr_xai` | `mixed` | No |  |
| `ignored_model` | `mixed` | No |  |
| `ignored_provider` | `mixed` | No |  |
| `limit_usd` | `mixed` | No |  |
| `name` | `string` | No |  |
| `reset_interval` | `mixed` | No |  |

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
| `api_key_hash` | `mixed` | No |  |
| `config` | `array` | No |  |
| `data` | `mixed` | Yes |  |
| `enabled` | `bool` | No |  |
| `filter_rule` | `mixed` | No |  |
| `name` | `string` | No |  |
| `privacy_mode` | `bool` | No |  |
| `sampling_rate` | `float` | No |  |

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
| `created_at` | `string` | Yes |  |
| `created_by` | `mixed` | Yes |  |
| `data` | `mixed` | Yes |  |
| `default_image_model` | `mixed` | No |  |
| `default_provider_sort` | `mixed` | No |  |
| `default_text_model` | `mixed` | No |  |
| `description` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `io_logging_api_key_id` | `mixed` | No |  |
| `io_logging_sampling_rate` | `float` | No |  |
| `is_data_discount_logging_enabled` | `bool` | No |  |
| `is_observability_broadcast_enabled` | `bool` | No |  |
| `is_observability_io_logging_enabled` | `bool` | No |  |
| `name` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `updated_at` | `mixed` | Yes |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->UpdateWorkspace()->create([
  "created_at" => null, // string
  "created_by" => null, // mixed
  "data" => null, // mixed
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
| `data` | `mixed` | Yes |  |
| `limit_usd` | `float` | Yes |  |

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
| `aspect_ratio` | `string` | No |  |
| `callback_url` | `string` | No |  |
| `duration` | `int` | No |  |
| `error` | `string` | No |  |
| `frame_image` | `array` | No |  |
| `generate_audio` | `bool` | No |  |
| `generation_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `input_reference` | `array` | No |  |
| `model` | `string` | Yes |  |
| `polling_url` | `string` | Yes |  |
| `prompt` | `string` | No |  |
| `provider` | `array` | No |  |
| `resolution` | `string` | No |  |
| `seed` | `int` | No |  |
| `size` | `string` | No |  |
| `status` | `string` | Yes |  |
| `unsigned_url` | `array` | No |  |
| `usage` | `array` | No |  |

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
| `allowed_passthrough_parameter` | `array` | Yes |  |
| `canonical_slug` | `string` | Yes |  |
| `created` | `int` | Yes |  |
| `description` | `string` | No |  |
| `generate_audio` | `mixed` | Yes |  |
| `hugging_face_id` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `pricing_skus` | `mixed` | No |  |
| `seed` | `mixed` | Yes |  |
| `supported_aspect_ratio` | `mixed` | Yes |  |
| `supported_duration` | `mixed` | Yes |  |
| `supported_frame_image` | `mixed` | Yes |  |
| `supported_resolution` | `mixed` | Yes |  |
| `supported_size` | `mixed` | Yes |  |

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
| `data` | `mixed` | Yes |  |

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
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new OpenrouterModelsSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

