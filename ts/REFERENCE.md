# OpenrouterModels TypeScript SDK Reference

Complete API reference for the OpenrouterModels TypeScript SDK.


## OpenrouterModelsSDK

### Constructor

```ts
new OpenrouterModelsSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `OpenrouterModelsSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = OpenrouterModelsSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `OpenrouterModelsSDK` instance in test mode.


### Instance Methods

#### `Activity(data?: object)`

Create a new `Activity` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActivityEntity` instance.

#### `Add(data?: object)`

Create a new `Add` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AddEntity` instance.

#### `ApiKey(data?: object)`

Create a new `ApiKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiKeyEntity` instance.

#### `AppRanking(data?: object)`

Create a new `AppRanking` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AppRankingEntity` instance.

#### `Benchmark(data?: object)`

Create a new `Benchmark` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BenchmarkEntity` instance.

#### `BetaAnalytics(data?: object)`

Create a new `BetaAnalytics` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BetaAnalyticsEntity` instance.

#### `Budget(data?: object)`

Create a new `Budget` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BudgetEntity` instance.

#### `BulkAddWorkspaceMember(data?: object)`

Create a new `BulkAddWorkspaceMember` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BulkAddWorkspaceMemberEntity` instance.

#### `BulkAssignKey(data?: object)`

Create a new `BulkAssignKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BulkAssignKeyEntity` instance.

#### `BulkAssignMember(data?: object)`

Create a new `BulkAssignMember` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BulkAssignMemberEntity` instance.

#### `BulkRemoveWorkspaceMember(data?: object)`

Create a new `BulkRemoveWorkspaceMember` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BulkRemoveWorkspaceMemberEntity` instance.

#### `BulkUnassignKey(data?: object)`

Create a new `BulkUnassignKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BulkUnassignKeyEntity` instance.

#### `BulkUnassignMember(data?: object)`

Create a new `BulkUnassignMember` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BulkUnassignMemberEntity` instance.

#### `Byok(data?: object)`

Create a new `Byok` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ByokEntity` instance.

#### `ChatResult(data?: object)`

Create a new `ChatResult` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ChatResultEntity` instance.

#### `Code(data?: object)`

Create a new `Code` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeEntity` instance.

#### `Coinbase(data?: object)`

Create a new `Coinbase` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CoinbaseEntity` instance.

#### `Completion(data?: object)`

Create a new `Completion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CompletionEntity` instance.

#### `Content(data?: object)`

Create a new `Content` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContentEntity` instance.

#### `Count(data?: object)`

Create a new `Count` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CountEntity` instance.

#### `CreateByokKey(data?: object)`

Create a new `CreateByokKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateByokKeyEntity` instance.

#### `CreateGuardrail(data?: object)`

Create a new `CreateGuardrail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateGuardrailEntity` instance.

#### `CreateObservabilityDestination(data?: object)`

Create a new `CreateObservabilityDestination` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateObservabilityDestinationEntity` instance.

#### `CreatePresetFromInference(data?: object)`

Create a new `CreatePresetFromInference` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreatePresetFromInferenceEntity` instance.

#### `CreateWorkspace(data?: object)`

Create a new `CreateWorkspace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateWorkspaceEntity` instance.

#### `Credit(data?: object)`

Create a new `Credit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreditEntity` instance.

#### `Destination(data?: object)`

Create a new `Destination` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DestinationEntity` instance.

#### `Embedding(data?: object)`

Create a new `Embedding` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmbeddingEntity` instance.

#### `Endpoint(data?: object)`

Create a new `Endpoint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EndpointEntity` instance.

#### `Feedback(data?: object)`

Create a new `Feedback` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FeedbackEntity` instance.

#### `File(data?: object)`

Create a new `File` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FileEntity` instance.

#### `Generation(data?: object)`

Create a new `Generation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenerationEntity` instance.

#### `GenerationContent(data?: object)`

Create a new `GenerationContent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenerationContentEntity` instance.

#### `Guardrail(data?: object)`

Create a new `Guardrail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GuardrailEntity` instance.

#### `Image(data?: object)`

Create a new `Image` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImageEntity` instance.

#### `ImageModelEndpoint(data?: object)`

Create a new `ImageModelEndpoint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImageModelEndpointEntity` instance.

#### `ImageModelsList(data?: object)`

Create a new `ImageModelsList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImageModelsListEntity` instance.

#### `Key(data?: object)`

Create a new `Key` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `KeyEntity` instance.

#### `ListByokKey(data?: object)`

Create a new `ListByokKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListByokKeyEntity` instance.

#### `ListGuardrail(data?: object)`

Create a new `ListGuardrail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListGuardrailEntity` instance.

#### `ListKeyAssignment(data?: object)`

Create a new `ListKeyAssignment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListKeyAssignmentEntity` instance.

#### `ListMemberAssignment(data?: object)`

Create a new `ListMemberAssignment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListMemberAssignmentEntity` instance.

#### `ListObservabilityDestination(data?: object)`

Create a new `ListObservabilityDestination` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListObservabilityDestinationEntity` instance.

#### `ListPreset(data?: object)`

Create a new `ListPreset` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListPresetEntity` instance.

#### `ListPresetVersion(data?: object)`

Create a new `ListPresetVersion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListPresetVersionEntity` instance.

#### `ListWorkspace(data?: object)`

Create a new `ListWorkspace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListWorkspaceEntity` instance.

#### `ListWorkspaceBudget(data?: object)`

Create a new `ListWorkspaceBudget` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListWorkspaceBudgetEntity` instance.

#### `ListWorkspaceMember(data?: object)`

Create a new `ListWorkspaceMember` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListWorkspaceMemberEntity` instance.

#### `Member(data?: object)`

Create a new `Member` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MemberEntity` instance.

#### `Message(data?: object)`

Create a new `Message` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MessageEntity` instance.

#### `Meta(data?: object)`

Create a new `Meta` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MetaEntity` instance.

#### `Model(data?: object)`

Create a new `Model` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ModelEntity` instance.

#### `ModelsCount(data?: object)`

Create a new `ModelsCount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ModelsCountEntity` instance.

#### `ModelsList(data?: object)`

Create a new `ModelsList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ModelsListEntity` instance.

#### `OAuth(data?: object)`

Create a new `OAuth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OAuthEntity` instance.

#### `ObservabilityDestination(data?: object)`

Create a new `ObservabilityDestination` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ObservabilityDestinationEntity` instance.

#### `OpenResponsesResult(data?: object)`

Create a new `OpenResponsesResult` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OpenResponsesResultEntity` instance.

#### `Organization(data?: object)`

Create a new `Organization` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationEntity` instance.

#### `Preset(data?: object)`

Create a new `Preset` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PresetEntity` instance.

#### `PresetVersion(data?: object)`

Create a new `PresetVersion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PresetVersionEntity` instance.

#### `Provider(data?: object)`

Create a new `Provider` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProviderEntity` instance.

#### `Query(data?: object)`

Create a new `Query` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `QueryEntity` instance.

#### `RankingsDaily(data?: object)`

Create a new `RankingsDaily` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RankingsDailyEntity` instance.

#### `Remove(data?: object)`

Create a new `Remove` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RemoveEntity` instance.

#### `Rerank(data?: object)`

Create a new `Rerank` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RerankEntity` instance.

#### `Response(data?: object)`

Create a new `Response` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ResponseEntity` instance.

#### `Speech(data?: object)`

Create a new `Speech` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SpeechEntity` instance.

#### `Stt(data?: object)`

Create a new `Stt` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SttEntity` instance.

#### `SubmitGenerationFeedback(data?: object)`

Create a new `SubmitGenerationFeedback` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubmitGenerationFeedbackEntity` instance.

#### `Task(data?: object)`

Create a new `Task` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TaskEntity` instance.

#### `Transcription(data?: object)`

Create a new `Transcription` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TranscriptionEntity` instance.

#### `Tts(data?: object)`

Create a new `Tts` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TtsEntity` instance.

#### `UnifiedBenchmark(data?: object)`

Create a new `UnifiedBenchmark` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UnifiedBenchmarkEntity` instance.

#### `UpdateByokKey(data?: object)`

Create a new `UpdateByokKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateByokKeyEntity` instance.

#### `UpdateGuardrail(data?: object)`

Create a new `UpdateGuardrail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateGuardrailEntity` instance.

#### `UpdateObservabilityDestination(data?: object)`

Create a new `UpdateObservabilityDestination` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateObservabilityDestinationEntity` instance.

#### `UpdateWorkspace(data?: object)`

Create a new `UpdateWorkspace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateWorkspaceEntity` instance.

#### `UpsertWorkspaceBudget(data?: object)`

Create a new `UpsertWorkspaceBudget` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpsertWorkspaceBudgetEntity` instance.

#### `User(data?: object)`

Create a new `User` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserEntity` instance.

#### `Version(data?: object)`

Create a new `Version` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VersionEntity` instance.

#### `Video(data?: object)`

Create a new `Video` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VideoEntity` instance.

#### `VideoGeneration(data?: object)`

Create a new `VideoGeneration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VideoGenerationEntity` instance.

#### `VideoModelsList(data?: object)`

Create a new `VideoModelsList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VideoModelsListEntity` instance.

#### `Workspace(data?: object)`

Create a new `Workspace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkspaceEntity` instance.

#### `WorkspaceBudget(data?: object)`

Create a new `WorkspaceBudget` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkspaceBudgetEntity` instance.

#### `Zdr(data?: object)`

Create a new `Zdr` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZdrEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `OpenrouterModelsSDK.test()`.

**Returns:** `OpenrouterModelsSDK` instance in test mode.


---

## ActivityEntity

```ts
const activity = client.Activity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byok_usage_inference` | `number` | Yes |  |
| `completion_tokens` | `number` | Yes |  |
| `date` | `string` | Yes |  |
| `endpoint_id` | `string` | Yes |  |
| `model` | `string` | Yes |  |
| `model_permaslug` | `string` | Yes |  |
| `prompt_tokens` | `number` | Yes |  |
| `provider_name` | `string` | Yes |  |
| `reasoning_tokens` | `number` | Yes |  |
| `requests` | `number` | Yes |  |
| `usage` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Activity().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActivityEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AddEntity

```ts
const add = client.Add()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AddEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiKeyEntity

```ts
const api_key = client.ApiKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byok_usage` | `number` | Yes |  |
| `byok_usage_daily` | `number` | Yes |  |
| `byok_usage_monthly` | `number` | Yes |  |
| `byok_usage_weekly` | `number` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator_user_id` | `string | null` | Yes |  |
| `disabled` | `boolean` | Yes |  |
| `expires_at` | `string | null` | No |  |
| `hash` | `string` | Yes |  |
| `include_byok_in_limit` | `boolean` | Yes |  |
| `is_free_tier` | `boolean` | Yes |  |
| `is_management_key` | `boolean` | Yes |  |
| `is_provisioning_key` | `boolean` | Yes |  |
| `label` | `string` | Yes |  |
| `limit` | `number | null` | Yes |  |
| `limit_remaining` | `number | null` | Yes |  |
| `limit_reset` | `string | null` | Yes |  |
| `name` | `string` | Yes |  |
| `rate_limit` | `Record<string, any>` | Yes |  |
| `updated_at` | `string | null` | Yes |  |
| `usage` | `number` | Yes |  |
| `usage_daily` | `number` | Yes |  |
| `usage_monthly` | `number` | Yes |  |
| `usage_weekly` | `number` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiKey().create({
  byok_usage: 1,
  byok_usage_daily: 1,
  byok_usage_monthly: 1,
  byok_usage_weekly: 1,
  created_at: 'example_created_at',
  creator_user_id: 'example_creator_user_id',
  disabled: true,
  hash: 'example_hash',
  include_byok_in_limit: true,
  is_free_tier: true,
  is_management_key: true,
  is_provisioning_key: true,
  label: 'example_label',
  limit: 'example_limit',
  limit_remaining: 'example_limit_remaining',
  limit_reset: 'example_limit_reset',
  name: 'example_name',
  rate_limit: {},
  updated_at: 'example_updated_at',
  usage: 1,
  usage_daily: 1,
  usage_monthly: 1,
  usage_weekly: 1,
  workspace_id: 'example_workspace_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiKey().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiKey().load({ id: 'api_key_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ApiKey().remove({ id: 'api_key_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiKey().update({
  id: 'api_key_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AppRankingEntity

```ts
const app_ranking = client.AppRanking()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `number` | Yes |  |
| `app_name` | `string` | Yes |  |
| `rank` | `number` | Yes |  |
| `total_requests` | `number` | Yes |  |
| `total_tokens` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AppRanking().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AppRankingEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BenchmarkEntity

```ts
const benchmark = client.Benchmark()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BenchmarkEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BetaAnalyticsEntity

```ts
const beta_analytics = client.BetaAnalytics()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cachedAt` | `number` | No |  |
| `classifier_dimensions` | `Record<string, any>` | Yes |  |
| `classifier_filters` | `Record<string, any>` | Yes |  |
| `data` | `any[]` | Yes |  |
| `dimensions` | `any[]` | Yes |  |
| `filters` | `any[]` | No |  |
| `granularities` | `any[]` | Yes |  |
| `granularity` | `string` | No |  |
| `group_limit` | `number` | No |  |
| `limit` | `number` | No |  |
| `metadata` | `Record<string, any>` | Yes |  |
| `metrics` | `any[]` | Yes |  |
| `operators` | `any[]` | Yes |  |
| `order_by` | `Record<string, any>` | Yes |  |
| `time_range` | `Record<string, any>` | Yes |  |
| `warnings` | `any[]` | No |  |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BetaAnalytics().create({
  classifier_dimensions: {},
  classifier_filters: {},
  data: [],
  dimensions: [],
  granularities: [],
  metadata: {},
  metrics: [],
  operators: [],
  order_by: {},
  time_range: {},
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BetaAnalytics().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BetaAnalyticsEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BudgetEntity

```ts
const budget = client.Budget()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BudgetEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BulkAddWorkspaceMemberEntity

```ts
const bulk_add_workspace_member = client.BulkAddWorkspaceMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `added_count` | `number` | Yes |  |
| `data` | `any[]` | Yes |  |
| `user_ids` | `any[]` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BulkAddWorkspaceMember().create({
  workspace_id: 'example_workspace_id',
  added_count: 1,
  data: [],
  user_ids: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BulkAddWorkspaceMemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BulkAssignKeyEntity

```ts
const bulk_assign_key = client.BulkAssignKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_count` | `number` | Yes |  |
| `key_hashes` | `any[]` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BulkAssignKey().create({
  guardrail_id: 'example_guardrail_id',
  assigned_count: 1,
  key_hashes: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BulkAssignKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BulkAssignMemberEntity

```ts
const bulk_assign_member = client.BulkAssignMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_count` | `number` | Yes |  |
| `member_user_ids` | `any[]` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BulkAssignMember().create({
  guardrail_id: 'example_guardrail_id',
  assigned_count: 1,
  member_user_ids: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BulkAssignMemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BulkRemoveWorkspaceMemberEntity

```ts
const bulk_remove_workspace_member = client.BulkRemoveWorkspaceMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `removed_count` | `number` | Yes |  |
| `user_ids` | `any[]` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BulkRemoveWorkspaceMember().create({
  workspace_id: 'example_workspace_id',
  removed_count: 1,
  user_ids: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BulkRemoveWorkspaceMemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BulkUnassignKeyEntity

```ts
const bulk_unassign_key = client.BulkUnassignKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key_hashes` | `any[]` | Yes |  |
| `unassigned_count` | `number` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BulkUnassignKey().create({
  guardrail_id: 'example_guardrail_id',
  key_hashes: [],
  unassigned_count: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BulkUnassignKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BulkUnassignMemberEntity

```ts
const bulk_unassign_member = client.BulkUnassignMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `member_user_ids` | `any[]` | Yes |  |
| `unassigned_count` | `number` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BulkUnassignMember().create({
  guardrail_id: 'example_guardrail_id',
  member_user_ids: [],
  unassigned_count: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BulkUnassignMemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ByokEntity

```ts
const byok = client.Byok()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_api_key_hashes` | `any[] | null` | Yes |  |
| `allowed_models` | `any[] | null` | Yes |  |
| `allowed_user_ids` | `any[] | null` | Yes |  |
| `created_at` | `string` | Yes |  |
| `disabled` | `boolean` | Yes |  |
| `id` | `string` | Yes |  |
| `is_fallback` | `boolean` | Yes |  |
| `key` | `string` | Yes |  |
| `label` | `string` | Yes |  |
| `name` | `string | null` | No |  |
| `provider` | `string` | Yes |  |
| `sort_order` | `number` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Byok().create({
  allowed_api_key_hashes: 'example_allowed_api_key_hashes',
  allowed_models: 'example_allowed_models',
  allowed_user_ids: 'example_allowed_user_ids',
  created_at: 'example_created_at',
  disabled: true,
  id: 'example_id',
  is_fallback: true,
  key: 'example_key',
  label: 'example_label',
  provider: 'example_provider',
  sort_order: 1,
  workspace_id: 'example_workspace_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Byok().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Byok().load({ id: 'byok_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Byok().remove({ id: 'byok_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ByokEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ChatResultEntity

```ts
const chat_result = client.ChatResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_control` | `Record<string, any>` | Yes |  |
| `choices` | `any[]` | Yes |  |
| `created` | `number` | Yes |  |
| `debug` | `Record<string, any>` | No |  |
| `frequency_penalty` | `number | null` | No |  |
| `id` | `string` | Yes |  |
| `image_config` | `Record<string, any>` | No |  |
| `logit_bias` | `Record<string, any> | null` | No |  |
| `logprobs` | `boolean | null` | No |  |
| `max_completion_tokens` | `number | null` | No |  |
| `max_tokens` | `number | null` | No |  |
| `messages` | `any[]` | Yes |  |
| `metadata` | `Record<string, any>` | No |  |
| `min_p` | `number | null` | No |  |
| `modalities` | `any[]` | No |  |
| `model` | `string` | Yes |  |
| `models` | `any[]` | No |  |
| `object` | `string` | Yes |  |
| `openrouter_metadata` | `Record<string, any>` | Yes |  |
| `parallel_tool_calls` | `boolean | null` | No |  |
| `plugins` | `any[]` | No |  |
| `prediction` | `Record<string, any> | null` | Yes |  |
| `presence_penalty` | `number | null` | No |  |
| `prompt_cache_key` | `string | null` | No |  |
| `prompt_cache_options` | `Record<string, any> | null` | Yes |  |
| `provider` | `Record<string, any> | null` | No |  |
| `reasoning` | `Record<string, any>` | No |  |
| `reasoning_effort` | `string | null` | No |  |
| `repetition_penalty` | `number | null` | No |  |
| `response_format` | `any` | No |  |
| `route` | `string | null` | No |  |
| `seed` | `number | null` | No |  |
| `service_tier` | `string | null` | No |  |
| `session_id` | `string` | No |  |
| `stop` | `any` | No |  |
| `stop_server_tools_when` | `any[]` | No |  |
| `stream` | `boolean` | No |  |
| `stream_options` | `Record<string, any> | null` | No |  |
| `system_fingerprint` | `string | null` | Yes |  |
| `temperature` | `number | null` | No |  |
| `tool_choice` | `any` | No |  |
| `tools` | `any[]` | No |  |
| `top_a` | `number | null` | No |  |
| `top_k` | `number | null` | No |  |
| `top_logprobs` | `number | null` | No |  |
| `top_p` | `number | null` | No |  |
| `trace` | `Record<string, any>` | No |  |
| `usage` | `Record<string, any>` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ChatResult().create({
  cache_control: {},
  choices: [],
  created: 1,
  id: 'example_id',
  messages: [],
  model: 'example_model',
  object: 'example_object',
  openrouter_metadata: {},
  prediction: 'example_prediction',
  prompt_cache_options: 'example_prompt_cache_options',
  system_fingerprint: 'example_system_fingerprint',
  usage: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ChatResultEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeEntity

```ts
const code = client.Code()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CoinbaseEntity

```ts
const coinbase = client.Coinbase()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CoinbaseEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CompletionEntity

```ts
const completion = client.Completion()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CompletionEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContentEntity

```ts
const content = client.Content()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContentEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CountEntity

```ts
const count = client.Count()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CountEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateByokKeyEntity

```ts
const create_byok_key = client.CreateByokKey()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateByokKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateGuardrailEntity

```ts
const create_guardrail = client.CreateGuardrail()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateGuardrailEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateObservabilityDestinationEntity

```ts
const create_observability_destination = client.CreateObservabilityDestination()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_key_hashes` | `any[] | null` | No |  |
| `config` | `Record<string, any>` | Yes |  |
| `enabled` | `boolean` | No |  |
| `filter_rules` | `Record<string, any> | null` | Yes |  |
| `name` | `string` | Yes |  |
| `privacy_mode` | `boolean` | No |  |
| `sampling_rate` | `number` | No |  |
| `type` | `string` | Yes |  |
| `workspace_id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreateObservabilityDestination().create({
  config: {},
  filter_rules: 'example_filter_rules',
  name: 'example_name',
  type: 'example_type',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateObservabilityDestinationEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreatePresetFromInferenceEntity

```ts
const create_preset_from_inference = client.CreatePresetFromInference()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `background` | `boolean | null` | No |  |
| `cache_control` | `Record<string, any>` | Yes |  |
| `context_management` | `Record<string, any> | null` | No |  |
| `debug` | `Record<string, any>` | No |  |
| `fallbacks` | `any[] | null` | No |  |
| `frequency_penalty` | `number | null` | No |  |
| `image_config` | `Record<string, any>` | No |  |
| `include` | `any[] | null` | No |  |
| `input` | `any` | No |  |
| `instructions` | `string | null` | No |  |
| `logit_bias` | `Record<string, any> | null` | No |  |
| `logprobs` | `boolean | null` | No |  |
| `max_completion_tokens` | `number | null` | No |  |
| `max_output_tokens` | `number | null` | No |  |
| `max_tokens` | `number | null` | No |  |
| `max_tool_calls` | `number | null` | No |  |
| `messages` | `any[]` | Yes |  |
| `metadata` | `Record<string, any>` | No |  |
| `min_p` | `number | null` | No |  |
| `modalities` | `any[]` | No |  |
| `model` | `string` | No |  |
| `models` | `any[]` | No |  |
| `output_config` | `Record<string, any>` | No |  |
| `parallel_tool_calls` | `boolean | null` | No |  |
| `plugins` | `any[]` | No |  |
| `prediction` | `Record<string, any> | null` | Yes |  |
| `presence_penalty` | `number | null` | No |  |
| `previous_response_id` | `string` | No |  |
| `prompt` | `Record<string, any> | null` | Yes |  |
| `prompt_cache_key` | `string | null` | No |  |
| `prompt_cache_options` | `Record<string, any> | null` | Yes |  |
| `provider` | `Record<string, any> | null` | No |  |
| `reasoning` | `Record<string, any>` | No |  |
| `reasoning_effort` | `string | null` | No |  |
| `repetition_penalty` | `number | null` | No |  |
| `response_format` | `any` | No |  |
| `route` | `string | null` | No |  |
| `safety_identifier` | `string | null` | No |  |
| `seed` | `number | null` | No |  |
| `service_tier` | `string | null` | No |  |
| `session_id` | `string` | No |  |
| `speed` | `any` | No |  |
| `stop` | `any` | No |  |
| `stop_sequences` | `any[]` | No |  |
| `stop_server_tools_when` | `any[]` | No |  |
| `store` | `boolean` | No |  |
| `stream` | `boolean` | No |  |
| `stream_options` | `Record<string, any> | null` | No |  |
| `system` | `any` | No |  |
| `temperature` | `number | null` | No |  |
| `text` | `any` | No |  |
| `thinking` | `any` | No |  |
| `tool_choice` | `any` | No |  |
| `tools` | `any[]` | No |  |
| `top_a` | `number | null` | No |  |
| `top_k` | `number | null` | No |  |
| `top_logprobs` | `number | null` | No |  |
| `top_p` | `number | null` | No |  |
| `trace` | `Record<string, any>` | No |  |
| `truncation` | `string | null` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreatePresetFromInference().create({
  slug: 'example_slug',
  cache_control: {},
  messages: [],
  prediction: 'example_prediction',
  prompt: 'example_prompt',
  prompt_cache_options: 'example_prompt_cache_options',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreatePresetFromInferenceEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateWorkspaceEntity

```ts
const create_workspace = client.CreateWorkspace()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateWorkspaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreditEntity

```ts
const credit = client.Credit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total_credits` | `number` | Yes |  |
| `total_usage` | `number` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `coinbase` | `/credits/coinbase` | `client.Credit().create({ $action: 'coinbase', ... })` |

An action returns that action's OWN response, which is not necessarily a
Credit record — check the API definition for its shape.

```ts
const result = await client.Credit().create({
  $action: 'coinbase',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Credit().create({
  total_credits: 1,
  total_usage: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Credit().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreditEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DestinationEntity

```ts
const destination = client.Destination()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DestinationEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmbeddingEntity

```ts
const embedding = client.Embedding()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | Yes |  |
| `dimensions` | `number` | No |  |
| `encoding_format` | `string` | No |  |
| `id` | `string` | No |  |
| `input` | `any` | Yes |  |
| `input_type` | `string` | No |  |
| `model` | `string` | Yes |  |
| `object` | `string` | Yes |  |
| `provider` | `any` | No |  |
| `usage` | `Record<string, any>` | Yes |  |
| `user` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Embedding().create({
  data: [],
  input: 'example_input',
  model: 'example_model',
  object: 'example_object',
  usage: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmbeddingEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EndpointEntity

```ts
const endpoint = client.Endpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `any` | Yes |  |
| `benchmarks` | `Record<string, any>` | Yes |  |
| `canonical_slug` | `string` | Yes |  |
| `context_length` | `number | null` | Yes |  |
| `created` | `number` | Yes |  |
| `default_parameters` | `Record<string, any> | null` | Yes |  |
| `description` | `string` | Yes |  |
| `endpoints` | `any[]` | Yes |  |
| `expiration_date` | `string | null` | No |  |
| `hugging_face_id` | `string | null` | No |  |
| `id` | `string` | Yes |  |
| `knowledge_cutoff` | `string | null` | No |  |
| `latency_last_30m` | `Record<string, any> | null` | Yes |  |
| `links` | `Record<string, any>` | Yes |  |
| `max_completion_tokens` | `number | null` | Yes |  |
| `max_prompt_tokens` | `number | null` | Yes |  |
| `model_id` | `string` | Yes |  |
| `model_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `per_request_limits` | `Record<string, any> | null` | Yes |  |
| `pricing` | `Record<string, any>` | Yes |  |
| `provider_name` | `string` | Yes |  |
| `quantization` | `any` | Yes |  |
| `reasoning` | `Record<string, any>` | Yes |  |
| `status` | `number` | No |  |
| `supported_parameters` | `any[]` | Yes |  |
| `supported_voices` | `any[] | null` | Yes |  |
| `supports_implicit_caching` | `boolean` | Yes |  |
| `tag` | `string` | Yes |  |
| `throughput_last_30m` | `any` | Yes |  |
| `top_provider` | `Record<string, any>` | Yes |  |
| `uptime_last_1d` | `number | null` | Yes |  |
| `uptime_last_30m` | `number | null` | Yes |  |
| `uptime_last_5m` | `number | null` | Yes |  |

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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `zdr` | `/endpoints/zdr` | `client.Endpoint().list({ $action: 'zdr', ... })` |

An action returns that action's OWN response, which is not necessarily a
Endpoint record — check the API definition for its shape.

```ts
const result = await client.Endpoint().list({
  $action: 'zdr',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Endpoint().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Endpoint().load({ author: 'author', slug: 'slug' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EndpointEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FeedbackEntity

```ts
const feedback = client.Feedback()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FeedbackEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FileEntity

```ts
const file = client.File()
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `content` | `/files/{file_id}/content` | `client.File().load({ $action: 'content', ... })` |

An action returns that action's OWN response, which is not necessarily a
File record — check the API definition for its shape.

```ts
const result = await client.File().load({
  $action: 'content',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.File().create({
  created_at: 'example_created_at',
  downloadable: true,
  filename: 'example_filename',
  id: 'example_id',
  mime_type: 'example_mime_type',
  size_bytes: 1,
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.File().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.File().load({ id: 'file_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.File().remove({ id: 'file_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FileEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GenerationEntity

```ts
const generation = client.Generation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_type` | `string | null` | Yes |  |
| `app_id` | `number | null` | Yes |  |
| `cache_discount` | `number | null` | Yes |  |
| `cancelled` | `boolean | null` | Yes |  |
| `created_at` | `string` | Yes |  |
| `data_region` | `string` | Yes |  |
| `external_user` | `string | null` | Yes |  |
| `finish_reason` | `string | null` | Yes |  |
| `generation_time` | `number | null` | Yes |  |
| `http_referer` | `string | null` | Yes |  |
| `id` | `string` | Yes |  |
| `is_byok` | `boolean` | Yes |  |
| `latency` | `number | null` | Yes |  |
| `model` | `string` | Yes |  |
| `moderation_latency` | `number | null` | Yes |  |
| `native_finish_reason` | `string | null` | Yes |  |
| `native_tokens_cached` | `number | null` | Yes |  |
| `native_tokens_completion` | `number | null` | Yes |  |
| `native_tokens_completion_images` | `number | null` | Yes |  |
| `native_tokens_prompt` | `number | null` | Yes |  |
| `native_tokens_reasoning` | `number | null` | Yes |  |
| `num_fetches` | `number | null` | Yes |  |
| `num_input_audio_prompt` | `number | null` | Yes |  |
| `num_media_completion` | `number | null` | Yes |  |
| `num_media_prompt` | `number | null` | Yes |  |
| `num_search_results` | `number | null` | Yes |  |
| `origin` | `string` | Yes |  |
| `preset_id` | `string | null` | Yes |  |
| `provider_name` | `string | null` | Yes |  |
| `provider_responses` | `any[] | null` | Yes |  |
| `request_id` | `string | null` | No |  |
| `response_cache_source_id` | `string | null` | No |  |
| `router` | `string | null` | Yes |  |
| `service_tier` | `string | null` | Yes |  |
| `session_id` | `string | null` | No |  |
| `streamed` | `boolean | null` | Yes |  |
| `tokens_completion` | `number | null` | Yes |  |
| `tokens_prompt` | `number | null` | Yes |  |
| `total_cost` | `number` | Yes |  |
| `upstream_id` | `string | null` | Yes |  |
| `upstream_inference_cost` | `number | null` | Yes |  |
| `usage` | `number` | Yes |  |
| `user_agent` | `string | null` | Yes |  |
| `web_search_engine` | `string | null` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Generation().load({ id: 'generation_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenerationEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GenerationContentEntity

```ts
const generation_content = client.GenerationContent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `any` | Yes |  |
| `output` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GenerationContent().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenerationContentEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GuardrailEntity

```ts
const guardrail = client.Guardrail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_models` | `any[] | null` | No |  |
| `allowed_providers` | `any[] | null` | No |  |
| `content_filter_builtins` | `any[] | null` | No |  |
| `content_filters` | `any[] | null` | No |  |
| `created_at` | `string` | Yes |  |
| `description` | `string | null` | No |  |
| `enforce_zdr` | `boolean | null` | No |  |
| `enforce_zdr_anthropic` | `boolean | null` | No |  |
| `enforce_zdr_google` | `boolean | null` | No |  |
| `enforce_zdr_openai` | `boolean | null` | No |  |
| `enforce_zdr_other` | `boolean | null` | No |  |
| `enforce_zdr_xai` | `boolean | null` | No |  |
| `id` | `string` | Yes |  |
| `ignored_models` | `any[] | null` | No |  |
| `ignored_providers` | `any[] | null` | No |  |
| `limit_usd` | `number | null` | No |  |
| `name` | `string` | Yes |  |
| `reset_interval` | `string | null` | No |  |
| `updated_at` | `string | null` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Guardrail().create({
  created_at: 'example_created_at',
  id: 'example_id',
  name: 'example_name',
  workspace_id: 'example_workspace_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Guardrail().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Guardrail().load({ id: 'guardrail_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Guardrail().remove({ id: 'guardrail_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GuardrailEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImageEntity

```ts
const image = client.Image()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `string` | No |  |
| `background` | `string` | No |  |
| `created` | `number` | Yes |  |
| `data` | `any[]` | Yes |  |
| `input_references` | `any[]` | No |  |
| `model` | `string` | Yes |  |
| `n` | `number` | No |  |
| `output_compression` | `number` | No |  |
| `output_format` | `string` | No |  |
| `prompt` | `string` | Yes |  |
| `provider` | `Record<string, any>` | No |  |
| `quality` | `string` | No |  |
| `resolution` | `string` | No |  |
| `seed` | `number` | No |  |
| `size` | `string` | No |  |
| `stream` | `boolean` | No |  |
| `usage` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Image().create({
  created: 1,
  data: [],
  model: 'example_model',
  prompt: 'example_prompt',
  usage: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImageEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImageModelEndpointEntity

```ts
const image_model_endpoint = client.ImageModelEndpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_passthrough_parameters` | `any[]` | Yes |  |
| `pricing` | `any[]` | Yes |  |
| `provider_name` | `string` | Yes |  |
| `provider_slug` | `string` | Yes |  |
| `provider_tag` | `string | null` | Yes |  |
| `supported_parameters` | `any` | Yes |  |
| `supports_streaming` | `boolean` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ImageModelEndpoint().list({ model_id: "example", slug: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImageModelEndpointEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImageModelsListEntity

```ts
const image_models_list = client.ImageModelsList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `Record<string, any>` | Yes |  |
| `created` | `number` | Yes |  |
| `description` | `string` | Yes |  |
| `endpoints` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `supported_parameters` | `Record<string, any>` | Yes |  |
| `supports_streaming` | `boolean` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ImageModelsList().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImageModelsListEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## KeyEntity

```ts
const key = client.Key()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `KeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListByokKeyEntity

```ts
const list_byok_key = client.ListByokKey()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListByokKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListGuardrailEntity

```ts
const list_guardrail = client.ListGuardrail()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListGuardrailEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListKeyAssignmentEntity

```ts
const list_key_assignment = client.ListKeyAssignment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_by` | `string | null` | Yes |  |
| `created_at` | `string` | Yes |  |
| `guardrail_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `key_hash` | `string` | Yes |  |
| `key_label` | `string` | Yes |  |
| `key_name` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListKeyAssignment().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListKeyAssignmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListMemberAssignmentEntity

```ts
const list_member_assignment = client.ListMemberAssignment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_by` | `string | null` | Yes |  |
| `created_at` | `string` | Yes |  |
| `guardrail_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `organization_id` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListMemberAssignment().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListMemberAssignmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListObservabilityDestinationEntity

```ts
const list_observability_destination = client.ListObservabilityDestination()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | Yes |  |
| `total_count` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListObservabilityDestination().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListObservabilityDestinationEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListPresetEntity

```ts
const list_preset = client.ListPreset()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListPresetEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListPresetVersionEntity

```ts
const list_preset_version = client.ListPresetVersion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Record<string, any>` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `preset_id` | `string` | Yes |  |
| `system_prompt` | `string | null` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `version` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListPresetVersion().list({ slug: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListPresetVersionEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListWorkspaceEntity

```ts
const list_workspace = client.ListWorkspace()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListWorkspaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListWorkspaceBudgetEntity

```ts
const list_workspace_budget = client.ListWorkspaceBudget()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `limit_usd` | `number` | Yes |  |
| `reset_interval` | `string | null` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workspace_id` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListWorkspaceBudget().list({ workspace_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListWorkspaceBudgetEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListWorkspaceMemberEntity

```ts
const list_workspace_member = client.ListWorkspaceMember()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListWorkspaceMember().list({ workspace_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListWorkspaceMemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MemberEntity

```ts
const member = client.Member()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MessageEntity

```ts
const message = client.Message()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_control` | `Record<string, any>` | Yes |  |
| `context_management` | `Record<string, any> | null` | No |  |
| `fallbacks` | `any[] | null` | No |  |
| `max_tokens` | `number` | No |  |
| `messages` | `any[] | null` | Yes |  |
| `metadata` | `Record<string, any>` | No |  |
| `model` | `string` | Yes |  |
| `models` | `any[]` | No |  |
| `output_config` | `Record<string, any>` | No |  |
| `plugins` | `any[]` | No |  |
| `provider` | `Record<string, any> | null` | No |  |
| `route` | `string | null` | No |  |
| `service_tier` | `string` | No |  |
| `session_id` | `string` | No |  |
| `speed` | `any` | No |  |
| `stop_sequences` | `any[]` | No |  |
| `stop_server_tools_when` | `any[]` | No |  |
| `stream` | `boolean` | No |  |
| `system` | `any` | No |  |
| `temperature` | `number` | No |  |
| `thinking` | `any` | No |  |
| `tool_choice` | `any` | No |  |
| `tools` | `any[]` | No |  |
| `top_k` | `number` | No |  |
| `top_p` | `number` | No |  |
| `trace` | `Record<string, any>` | No |  |
| `user` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Message().create({
  cache_control: {},
  messages: 'example_messages',
  model: 'example_model',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MessageEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MetaEntity

```ts
const meta = client.Meta()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MetaEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ModelEntity

```ts
const model = client.Model()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `Record<string, any>` | Yes |  |
| `benchmarks` | `Record<string, any>` | Yes |  |
| `canonical_slug` | `string` | Yes |  |
| `context_length` | `number | null` | Yes |  |
| `created` | `number` | Yes |  |
| `default_parameters` | `Record<string, any> | null` | Yes |  |
| `description` | `string` | No |  |
| `expiration_date` | `string | null` | No |  |
| `hugging_face_id` | `string | null` | No |  |
| `id` | `string` | Yes |  |
| `knowledge_cutoff` | `string | null` | No |  |
| `links` | `Record<string, any>` | Yes |  |
| `name` | `string` | Yes |  |
| `per_request_limits` | `Record<string, any> | null` | Yes |  |
| `pricing` | `Record<string, any>` | Yes |  |
| `reasoning` | `Record<string, any>` | Yes |  |
| `supported_parameters` | `any[]` | Yes |  |
| `supported_voices` | `any[] | null` | Yes |  |
| `top_provider` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Model().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Model().load({ author: 'author', slug: 'slug' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ModelEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ModelsCountEntity

```ts
const models_count = client.ModelsCount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ModelsCount().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ModelsCountEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ModelsListEntity

```ts
const models_list = client.ModelsList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `Record<string, any>` | Yes |  |
| `benchmarks` | `Record<string, any>` | Yes |  |
| `canonical_slug` | `string` | Yes |  |
| `context_length` | `number | null` | Yes |  |
| `created` | `number` | Yes |  |
| `default_parameters` | `Record<string, any> | null` | Yes |  |
| `description` | `string` | No |  |
| `expiration_date` | `string | null` | No |  |
| `hugging_face_id` | `string | null` | No |  |
| `id` | `string` | Yes |  |
| `knowledge_cutoff` | `string | null` | No |  |
| `links` | `Record<string, any>` | Yes |  |
| `name` | `string` | Yes |  |
| `per_request_limits` | `Record<string, any> | null` | Yes |  |
| `pricing` | `Record<string, any>` | Yes |  |
| `reasoning` | `Record<string, any>` | Yes |  |
| `supported_parameters` | `any[]` | Yes |  |
| `supported_voices` | `any[] | null` | Yes |  |
| `top_provider` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ModelsList().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ModelsListEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OAuthEntity

```ts
const o_auth = client.OAuth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `number` | Yes |  |
| `callback_url` | `string` | Yes |  |
| `code` | `string` | Yes |  |
| `code_challenge` | `string` | No |  |
| `code_challenge_method` | `string | null` | No |  |
| `code_verifier` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `expires_at` | `string | null` | No |  |
| `id` | `string` | Yes |  |
| `key` | `string` | Yes |  |
| `key_label` | `string` | No |  |
| `limit` | `number` | No |  |
| `spawn_agent` | `string` | No |  |
| `spawn_cloud` | `string` | No |  |
| `usage_limit_type` | `string` | No |  |
| `user_id` | `string | null` | Yes |  |
| `workspace_id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OAuth().create({
  app_id: 1,
  callback_url: 'example_callback_url',
  code: 'example_code',
  created_at: 'example_created_at',
  id: 'example_id',
  key: 'example_key',
  user_id: 'example_user_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OAuthEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ObservabilityDestinationEntity

```ts
const observability_destination = client.ObservabilityDestination()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ObservabilityDestination().load({ id: 'observability_destination_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ObservabilityDestination().remove({ id: 'observability_destination_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ObservabilityDestinationEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OpenResponsesResultEntity

```ts
const open_responses_result = client.OpenResponsesResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `background` | `boolean | null` | No |  |
| `cache_control` | `Record<string, any>` | Yes |  |
| `debug` | `Record<string, any>` | No |  |
| `frequency_penalty` | `number | null` | No |  |
| `image_config` | `Record<string, any>` | No |  |
| `include` | `any[] | null` | No |  |
| `input` | `any` | No |  |
| `instructions` | `string | null` | No |  |
| `max_output_tokens` | `number | null` | No |  |
| `max_tool_calls` | `number | null` | No |  |
| `metadata` | `Record<string, any> | null` | No |  |
| `modalities` | `any[]` | No |  |
| `model` | `string` | No |  |
| `models` | `any[]` | No |  |
| `parallel_tool_calls` | `boolean | null` | No |  |
| `plugins` | `any[]` | No |  |
| `presence_penalty` | `number | null` | No |  |
| `previous_response_id` | `string` | No |  |
| `prompt` | `Record<string, any> | null` | Yes |  |
| `prompt_cache_key` | `string | null` | No |  |
| `prompt_cache_options` | `Record<string, any> | null` | Yes |  |
| `provider` | `Record<string, any> | null` | No |  |
| `reasoning` | `any` | No |  |
| `route` | `string | null` | No |  |
| `safety_identifier` | `string | null` | No |  |
| `service_tier` | `string | null` | No |  |
| `session_id` | `string` | No |  |
| `stop_server_tools_when` | `any[]` | No |  |
| `store` | `boolean` | No |  |
| `stream` | `boolean` | No |  |
| `temperature` | `number | null` | No |  |
| `text` | `any` | No |  |
| `tool_choice` | `any` | No |  |
| `tools` | `any[]` | No |  |
| `top_k` | `number` | No |  |
| `top_logprobs` | `number | null` | No |  |
| `top_p` | `number | null` | No |  |
| `trace` | `Record<string, any>` | No |  |
| `truncation` | `string | null` | No |  |
| `user` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OpenResponsesResult().create({
  cache_control: {},
  prompt: 'example_prompt',
  prompt_cache_options: 'example_prompt_cache_options',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OpenResponsesResultEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationEntity

```ts
const organization = client.Organization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes |  |
| `first_name` | `string | null` | Yes |  |
| `id` | `string` | Yes |  |
| `last_name` | `string | null` | Yes |  |
| `role` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `member` | `/organization/members` | `client.Organization().list({ $action: 'member', ... })` |

An action returns that action's OWN response, which is not necessarily a
Organization record — check the API definition for its shape.

```ts
const result = await client.Organization().list({
  $action: 'member',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Organization().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PresetEntity

```ts
const preset = client.Preset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `creator_user_id` | `string | null` | Yes |  |
| `description` | `string | null` | Yes |  |
| `designated_version` | `Record<string, any> | null` | Yes |  |
| `designated_version_id` | `string | null` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `status_updated_at` | `string | null` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workspace_id` | `string | null` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Preset().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Preset().load({ id: 'preset_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PresetEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PresetVersionEntity

```ts
const preset_version = client.PresetVersion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Record<string, any>` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `preset_id` | `string` | Yes |  |
| `system_prompt` | `string | null` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `version` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PresetVersion().load({ id: 'preset_version_id', slug: 'slug' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PresetVersionEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProviderEntity

```ts
const provider = client.Provider()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `datacenters` | `any[] | null` | No |  |
| `headquarters` | `string | null` | No |  |
| `name` | `string` | Yes |  |
| `privacy_policy_url` | `string | null` | Yes |  |
| `slug` | `string` | Yes |  |
| `status_page_url` | `string | null` | No |  |
| `terms_of_service_url` | `string | null` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Provider().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProviderEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## QueryEntity

```ts
const query = client.Query()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `QueryEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RankingsDailyEntity

```ts
const rankings_daily = client.RankingsDaily()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes |  |
| `model_permaslug` | `string` | Yes |  |
| `total_tokens` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RankingsDaily().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RankingsDailyEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RemoveEntity

```ts
const remove = client.Remove()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RemoveEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RerankEntity

```ts
const rerank = client.Rerank()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `documents` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `model` | `string` | Yes |  |
| `provider` | `string` | No |  |
| `query` | `string` | Yes |  |
| `results` | `any[]` | Yes |  |
| `top_n` | `number` | No |  |
| `usage` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Rerank().create({
  documents: [],
  model: 'example_model',
  query: 'example_query',
  results: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RerankEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ResponseEntity

```ts
const response = client.Response()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ResponseEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SpeechEntity

```ts
const speech = client.Speech()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SpeechEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SttEntity

```ts
const stt = client.Stt()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `duration` | `number` | No |  |
| `input_audio` | `Record<string, any>` | Yes |  |
| `language` | `string` | No |  |
| `model` | `string` | Yes |  |
| `provider` | `Record<string, any>` | No |  |
| `response_format` | `string` | No |  |
| `segments` | `any[]` | No |  |
| `task` | `string` | No |  |
| `temperature` | `number` | No |  |
| `text` | `string` | Yes |  |
| `timestamp_granularities` | `any[]` | No |  |
| `usage` | `Record<string, any>` | No |  |
| `words` | `any[]` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Stt().create({
  input_audio: {},
  model: 'example_model',
  text: 'example_text',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SttEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubmitGenerationFeedbackEntity

```ts
const submit_generation_feedback = client.SubmitGenerationFeedback()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes |  |
| `comment` | `string` | No |  |
| `generation_id` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SubmitGenerationFeedback().create({
  category: 'example_category',
  generation_id: 'example_generation_id',
  success: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubmitGenerationFeedbackEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TaskEntity

```ts
const task = client.Task()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `as_of` | `string` | Yes |  |
| `classifications` | `any[]` | Yes |  |
| `macro_categories` | `any[]` | Yes |  |
| `window_days` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Task().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TaskEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TranscriptionEntity

```ts
const transcription = client.Transcription()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TranscriptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TtsEntity

```ts
const tts = client.Tts()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `string` | Yes |  |
| `model` | `string` | Yes |  |
| `provider` | `Record<string, any>` | No |  |
| `response_format` | `string` | No |  |
| `speed` | `number` | No |  |
| `voice` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Tts().create({
  input: 'example_input',
  model: 'example_model',
  voice: 'example_voice',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TtsEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UnifiedBenchmarkEntity

```ts
const unified_benchmark = client.UnifiedBenchmark()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UnifiedBenchmark().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UnifiedBenchmarkEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateByokKeyEntity

```ts
const update_byok_key = client.UpdateByokKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_models` | `any[] | null` | No |  |
| `allowed_user_ids` | `any[] | null` | No |  |
| `disabled` | `boolean` | No |  |
| `is_fallback` | `boolean` | No |  |
| `key` | `string` | No |  |
| `name` | `string | null` | No |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateByokKey().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateByokKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateGuardrailEntity

```ts
const update_guardrail = client.UpdateGuardrail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_models` | `any[] | null` | No |  |
| `allowed_providers` | `any[] | null` | No |  |
| `content_filter_builtins` | `any[] | null` | No |  |
| `content_filters` | `any[] | null` | No |  |
| `description` | `string | null` | No |  |
| `enforce_zdr` | `boolean | null` | No |  |
| `enforce_zdr_anthropic` | `boolean | null` | No |  |
| `enforce_zdr_google` | `boolean | null` | No |  |
| `enforce_zdr_openai` | `boolean | null` | No |  |
| `enforce_zdr_other` | `boolean | null` | No |  |
| `enforce_zdr_xai` | `boolean | null` | No |  |
| `ignored_models` | `any[] | null` | No |  |
| `ignored_providers` | `any[] | null` | No |  |
| `limit_usd` | `number | null` | No |  |
| `name` | `string` | No |  |
| `reset_interval` | `string | null` | No |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateGuardrail().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateGuardrailEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateObservabilityDestinationEntity

```ts
const update_observability_destination = client.UpdateObservabilityDestination()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_key_hashes` | `any[] | null` | No |  |
| `config` | `Record<string, any>` | No |  |
| `enabled` | `boolean` | No |  |
| `filter_rules` | `any` | No |  |
| `name` | `string` | No |  |
| `privacy_mode` | `boolean` | No |  |
| `sampling_rate` | `number` | No |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateObservabilityDestination().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateObservabilityDestinationEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateWorkspaceEntity

```ts
const update_workspace = client.UpdateWorkspace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `created_by` | `string | null` | Yes |  |
| `default_image_model` | `string | null` | No |  |
| `default_provider_sort` | `string | null` | No |  |
| `default_text_model` | `string | null` | No |  |
| `description` | `string | null` | No |  |
| `id` | `string` | Yes |  |
| `io_logging_api_key_ids` | `any[] | null` | No |  |
| `io_logging_sampling_rate` | `number` | No |  |
| `is_data_discount_logging_enabled` | `boolean` | No |  |
| `is_observability_broadcast_enabled` | `boolean` | No |  |
| `is_observability_io_logging_enabled` | `boolean` | No |  |
| `name` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `updated_at` | `string | null` | Yes |  |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.UpdateWorkspace().create({
  created_at: 'example_created_at',
  created_by: 'example_created_by',
  id: 'example_id',
  name: 'example_name',
  slug: 'example_slug',
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UpdateWorkspace().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateWorkspace().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateWorkspaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpsertWorkspaceBudgetEntity

```ts
const upsert_workspace_budget = client.UpsertWorkspaceBudget()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `limit_usd` | `number` | Yes |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpsertWorkspaceBudget().update({
  id: 'id',
  workspace_id: 'workspace_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpsertWorkspaceBudgetEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserEntity

```ts
const user = client.User()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VersionEntity

```ts
const version = client.Version()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VersionEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VideoEntity

```ts
const video = client.Video()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `string` | No |  |
| `callback_url` | `string` | No |  |
| `duration` | `number` | No |  |
| `error` | `string` | No |  |
| `frame_images` | `any[]` | No |  |
| `generate_audio` | `boolean` | No |  |
| `generation_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `input_references` | `any[]` | No |  |
| `model` | `string` | Yes |  |
| `polling_url` | `string` | Yes |  |
| `prompt` | `string` | No |  |
| `provider` | `Record<string, any>` | No |  |
| `resolution` | `string` | No |  |
| `seed` | `number` | No |  |
| `size` | `string` | No |  |
| `status` | `string` | Yes |  |
| `unsigned_urls` | `any[]` | No |  |
| `usage` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Video().create({
  id: 'example_id',
  model: 'example_model',
  polling_url: 'example_polling_url',
  status: 'example_status',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Video().load({ id: 'video_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VideoEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VideoGenerationEntity

```ts
const video_generation = client.VideoGeneration()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `content` | `/videos/{jobId}/content` | `client.VideoGeneration().load({ $action: 'content', ... })` |

An action returns that action's OWN response, which is not necessarily a
VideoGeneration record — check the API definition for its shape.

```ts
const result = await client.VideoGeneration().load({
  $action: 'content',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.VideoGeneration().load({ id: 'video_generation_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VideoGenerationEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VideoModelsListEntity

```ts
const video_models_list = client.VideoModelsList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_passthrough_parameters` | `any[]` | Yes |  |
| `canonical_slug` | `string` | Yes |  |
| `created` | `number` | Yes |  |
| `description` | `string` | No |  |
| `generate_audio` | `boolean | null` | Yes |  |
| `hugging_face_id` | `string | null` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `pricing_skus` | `Record<string, any> | null` | No |  |
| `seed` | `boolean | null` | Yes |  |
| `supported_aspect_ratios` | `any[] | null` | Yes |  |
| `supported_durations` | `any[] | null` | Yes |  |
| `supported_frame_images` | `any[] | null` | Yes |  |
| `supported_resolutions` | `any[] | null` | Yes |  |
| `supported_sizes` | `any[] | null` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.VideoModelsList().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VideoModelsListEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkspaceEntity

```ts
const workspace = client.Workspace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `created_by` | `string | null` | Yes |  |
| `default_image_model` | `string | null` | Yes |  |
| `default_provider_sort` | `string | null` | Yes |  |
| `default_text_model` | `string | null` | Yes |  |
| `description` | `string | null` | Yes |  |
| `id` | `string` | Yes |  |
| `io_logging_api_key_ids` | `any[] | null` | Yes |  |
| `io_logging_sampling_rate` | `number` | Yes |  |
| `is_data_discount_logging_enabled` | `boolean` | Yes |  |
| `is_observability_broadcast_enabled` | `boolean` | Yes |  |
| `is_observability_io_logging_enabled` | `boolean` | Yes |  |
| `name` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `updated_at` | `string | null` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Workspace().load({ id: 'workspace_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Workspace().remove({ id: 'workspace_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkspaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkspaceBudgetEntity

```ts
const workspace_budget = client.WorkspaceBudget()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.WorkspaceBudget().remove({ id: 'id', workspace_id: 'workspace_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkspaceBudgetEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZdrEntity

```ts
const zdr = client.Zdr()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZdrEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new OpenrouterModelsSDK({
  feature: {
    test: { active: true },
  }
})
```

