// Typed models for the OpenrouterModels SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Activity is the typed data model for the activity entity.
type Activity struct {
	ByokUsageInference float64 `json:"byok_usage_inference"`
	CompletionToken int `json:"completion_token"`
	Date string `json:"date"`
	EndpointId string `json:"endpoint_id"`
	Model string `json:"model"`
	ModelPermaslug string `json:"model_permaslug"`
	PromptToken int `json:"prompt_token"`
	ProviderName string `json:"provider_name"`
	ReasoningToken int `json:"reasoning_token"`
	Request int `json:"request"`
	Usage float64 `json:"usage"`
}

// ActivityListMatch is the typed request payload for Activity.ListTyped.
type ActivityListMatch struct {
	ByokUsageInference *float64 `json:"byok_usage_inference,omitempty"`
	CompletionToken *int `json:"completion_token,omitempty"`
	Date *string `json:"date,omitempty"`
	EndpointId *string `json:"endpoint_id,omitempty"`
	Model *string `json:"model,omitempty"`
	ModelPermaslug *string `json:"model_permaslug,omitempty"`
	PromptToken *int `json:"prompt_token,omitempty"`
	ProviderName *string `json:"provider_name,omitempty"`
	ReasoningToken *int `json:"reasoning_token,omitempty"`
	Request *int `json:"request,omitempty"`
	Usage *float64 `json:"usage,omitempty"`
}

// Add is the typed data model for the add entity.
type Add struct {
}

// ApiKey is the typed data model for the api_key entity.
type ApiKey struct {
	ByokUsage float64 `json:"byok_usage"`
	ByokUsageDaily float64 `json:"byok_usage_daily"`
	ByokUsageMonthly float64 `json:"byok_usage_monthly"`
	ByokUsageWeekly float64 `json:"byok_usage_weekly"`
	CreatedAt string `json:"created_at"`
	CreatorUserId *any `json:"creator_user_id,omitempty"`
	Data map[string]any `json:"data"`
	Disabled *bool `json:"disabled,omitempty"`
	ExpiresAt *any `json:"expires_at,omitempty"`
	Hash string `json:"hash"`
	IncludeByokInLimit *bool `json:"include_byok_in_limit,omitempty"`
	Label string `json:"label"`
	Limit *any `json:"limit,omitempty"`
	LimitRemaining any `json:"limit_remaining"`
	LimitReset *any `json:"limit_reset,omitempty"`
	Name string `json:"name"`
	UpdatedAt any `json:"updated_at"`
	Usage float64 `json:"usage"`
	UsageDaily float64 `json:"usage_daily"`
	UsageMonthly float64 `json:"usage_monthly"`
	UsageWeekly float64 `json:"usage_weekly"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// ApiKeyLoadMatch is the typed request payload for ApiKey.LoadTyped.
type ApiKeyLoadMatch struct {
	Id *string `json:"id,omitempty"`
}

// ApiKeyListMatch is the typed request payload for ApiKey.ListTyped.
type ApiKeyListMatch struct {
	ByokUsage *float64 `json:"byok_usage,omitempty"`
	ByokUsageDaily *float64 `json:"byok_usage_daily,omitempty"`
	ByokUsageMonthly *float64 `json:"byok_usage_monthly,omitempty"`
	ByokUsageWeekly *float64 `json:"byok_usage_weekly,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatorUserId *any `json:"creator_user_id,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	ExpiresAt *any `json:"expires_at,omitempty"`
	Hash *string `json:"hash,omitempty"`
	IncludeByokInLimit *bool `json:"include_byok_in_limit,omitempty"`
	Label *string `json:"label,omitempty"`
	Limit *any `json:"limit,omitempty"`
	LimitRemaining *any `json:"limit_remaining,omitempty"`
	LimitReset *any `json:"limit_reset,omitempty"`
	Name *string `json:"name,omitempty"`
	UpdatedAt *any `json:"updated_at,omitempty"`
	Usage *float64 `json:"usage,omitempty"`
	UsageDaily *float64 `json:"usage_daily,omitempty"`
	UsageMonthly *float64 `json:"usage_monthly,omitempty"`
	UsageWeekly *float64 `json:"usage_weekly,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// ApiKeyCreateData is the typed request payload for ApiKey.CreateTyped.
type ApiKeyCreateData struct {
	ByokUsage float64 `json:"byok_usage"`
	ByokUsageDaily float64 `json:"byok_usage_daily"`
	ByokUsageMonthly float64 `json:"byok_usage_monthly"`
	ByokUsageWeekly float64 `json:"byok_usage_weekly"`
	CreatedAt string `json:"created_at"`
	CreatorUserId *any `json:"creator_user_id,omitempty"`
	Data map[string]any `json:"data"`
	Disabled *bool `json:"disabled,omitempty"`
	ExpiresAt *any `json:"expires_at,omitempty"`
	Hash string `json:"hash"`
	IncludeByokInLimit *bool `json:"include_byok_in_limit,omitempty"`
	Label string `json:"label"`
	Limit *any `json:"limit,omitempty"`
	LimitRemaining any `json:"limit_remaining"`
	LimitReset *any `json:"limit_reset,omitempty"`
	Name string `json:"name"`
	UpdatedAt any `json:"updated_at"`
	Usage float64 `json:"usage"`
	UsageDaily float64 `json:"usage_daily"`
	UsageMonthly float64 `json:"usage_monthly"`
	UsageWeekly float64 `json:"usage_weekly"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// ApiKeyUpdateData is the typed request payload for ApiKey.UpdateTyped.
type ApiKeyUpdateData struct {
	Id string `json:"id"`
}

// ApiKeyRemoveMatch is the typed request payload for ApiKey.RemoveTyped.
type ApiKeyRemoveMatch struct {
	Id string `json:"id"`
}

// AppRanking is the typed data model for the app_ranking entity.
type AppRanking struct {
	AppId int `json:"app_id"`
	AppName string `json:"app_name"`
	Rank int `json:"rank"`
	TotalRequest int `json:"total_request"`
	TotalToken string `json:"total_token"`
}

// AppRankingListMatch is the typed request payload for AppRanking.ListTyped.
type AppRankingListMatch struct {
	AppId *int `json:"app_id,omitempty"`
	AppName *string `json:"app_name,omitempty"`
	Rank *int `json:"rank,omitempty"`
	TotalRequest *int `json:"total_request,omitempty"`
	TotalToken *string `json:"total_token,omitempty"`
}

// Benchmark is the typed data model for the benchmark entity.
type Benchmark struct {
}

// BetaAnalytics is the typed data model for the beta_analytics entity.
type BetaAnalytics struct {
	ClassifierDimension map[string]any `json:"classifier_dimension"`
	ClassifierFilter map[string]any `json:"classifier_filter"`
	Data map[string]any `json:"data"`
	Dimension *[]any `json:"dimension,omitempty"`
	Filter *[]any `json:"filter,omitempty"`
	Granularity *string `json:"granularity,omitempty"`
	GroupLimit *int `json:"group_limit,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Metric []any `json:"metric"`
	OrderBy map[string]any `json:"order_by"`
	TimeRange map[string]any `json:"time_range"`
}

// BetaAnalyticsLoadMatch is the typed request payload for BetaAnalytics.LoadTyped.
type BetaAnalyticsLoadMatch struct {
	ClassifierDimension *map[string]any `json:"classifier_dimension,omitempty"`
	ClassifierFilter *map[string]any `json:"classifier_filter,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Dimension *[]any `json:"dimension,omitempty"`
	Filter *[]any `json:"filter,omitempty"`
	Granularity *string `json:"granularity,omitempty"`
	GroupLimit *int `json:"group_limit,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Metric *[]any `json:"metric,omitempty"`
	OrderBy *map[string]any `json:"order_by,omitempty"`
	TimeRange *map[string]any `json:"time_range,omitempty"`
}

// BetaAnalyticsCreateData is the typed request payload for BetaAnalytics.CreateTyped.
type BetaAnalyticsCreateData struct {
	ClassifierDimension map[string]any `json:"classifier_dimension"`
	ClassifierFilter map[string]any `json:"classifier_filter"`
	Data map[string]any `json:"data"`
	Dimension *[]any `json:"dimension,omitempty"`
	Filter *[]any `json:"filter,omitempty"`
	Granularity *string `json:"granularity,omitempty"`
	GroupLimit *int `json:"group_limit,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Metric []any `json:"metric"`
	OrderBy map[string]any `json:"order_by"`
	TimeRange map[string]any `json:"time_range"`
}

// Budget is the typed data model for the budget entity.
type Budget struct {
}

// BulkAddWorkspaceMember is the typed data model for the bulk_add_workspace_member entity.
type BulkAddWorkspaceMember struct {
	AddedCount int `json:"added_count"`
	Data []any `json:"data"`
	UserId []any `json:"user_id"`
}

// BulkAddWorkspaceMemberCreateData is the typed request payload for BulkAddWorkspaceMember.CreateTyped.
type BulkAddWorkspaceMemberCreateData struct {
	WorkspaceId string `json:"workspace_id"`
}

// BulkAssignKey is the typed data model for the bulk_assign_key entity.
type BulkAssignKey struct {
	AssignedCount int `json:"assigned_count"`
	KeyHash []any `json:"key_hash"`
}

// BulkAssignKeyCreateData is the typed request payload for BulkAssignKey.CreateTyped.
type BulkAssignKeyCreateData struct {
	GuardrailId string `json:"guardrail_id"`
}

// BulkAssignMember is the typed data model for the bulk_assign_member entity.
type BulkAssignMember struct {
	AssignedCount int `json:"assigned_count"`
	MemberUserId []any `json:"member_user_id"`
}

// BulkAssignMemberCreateData is the typed request payload for BulkAssignMember.CreateTyped.
type BulkAssignMemberCreateData struct {
	GuardrailId string `json:"guardrail_id"`
}

// BulkRemoveWorkspaceMember is the typed data model for the bulk_remove_workspace_member entity.
type BulkRemoveWorkspaceMember struct {
	RemovedCount int `json:"removed_count"`
	UserId []any `json:"user_id"`
}

// BulkRemoveWorkspaceMemberCreateData is the typed request payload for BulkRemoveWorkspaceMember.CreateTyped.
type BulkRemoveWorkspaceMemberCreateData struct {
	WorkspaceId string `json:"workspace_id"`
}

// BulkUnassignKey is the typed data model for the bulk_unassign_key entity.
type BulkUnassignKey struct {
	KeyHash []any `json:"key_hash"`
	UnassignedCount int `json:"unassigned_count"`
}

// BulkUnassignKeyCreateData is the typed request payload for BulkUnassignKey.CreateTyped.
type BulkUnassignKeyCreateData struct {
	GuardrailId string `json:"guardrail_id"`
}

// BulkUnassignMember is the typed data model for the bulk_unassign_member entity.
type BulkUnassignMember struct {
	MemberUserId []any `json:"member_user_id"`
	UnassignedCount int `json:"unassigned_count"`
}

// BulkUnassignMemberCreateData is the typed request payload for BulkUnassignMember.CreateTyped.
type BulkUnassignMemberCreateData struct {
	GuardrailId string `json:"guardrail_id"`
}

// Byok is the typed data model for the byok entity.
type Byok struct {
	AllowedApiKeyHash any `json:"allowed_api_key_hash"`
	AllowedModel *any `json:"allowed_model,omitempty"`
	AllowedUserId *any `json:"allowed_user_id,omitempty"`
	CreatedAt string `json:"created_at"`
	Data any `json:"data"`
	Disabled *bool `json:"disabled,omitempty"`
	Id string `json:"id"`
	IsFallback *bool `json:"is_fallback,omitempty"`
	Key string `json:"key"`
	Label string `json:"label"`
	Name *any `json:"name,omitempty"`
	Provider string `json:"provider"`
	SortOrder int `json:"sort_order"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// ByokLoadMatch is the typed request payload for Byok.LoadTyped.
type ByokLoadMatch struct {
	Id string `json:"id"`
}

// ByokListMatch is the typed request payload for Byok.ListTyped.
type ByokListMatch struct {
	AllowedApiKeyHash *any `json:"allowed_api_key_hash,omitempty"`
	AllowedModel *any `json:"allowed_model,omitempty"`
	AllowedUserId *any `json:"allowed_user_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Data *any `json:"data,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	Id *string `json:"id,omitempty"`
	IsFallback *bool `json:"is_fallback,omitempty"`
	Key *string `json:"key,omitempty"`
	Label *string `json:"label,omitempty"`
	Name *any `json:"name,omitempty"`
	Provider *string `json:"provider,omitempty"`
	SortOrder *int `json:"sort_order,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// ByokCreateData is the typed request payload for Byok.CreateTyped.
type ByokCreateData struct {
	AllowedApiKeyHash any `json:"allowed_api_key_hash"`
	AllowedModel *any `json:"allowed_model,omitempty"`
	AllowedUserId *any `json:"allowed_user_id,omitempty"`
	CreatedAt string `json:"created_at"`
	Data any `json:"data"`
	Disabled *bool `json:"disabled,omitempty"`
	Id string `json:"id"`
	IsFallback *bool `json:"is_fallback,omitempty"`
	Key string `json:"key"`
	Label string `json:"label"`
	Name *any `json:"name,omitempty"`
	Provider string `json:"provider"`
	SortOrder int `json:"sort_order"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// ByokRemoveMatch is the typed request payload for Byok.RemoveTyped.
type ByokRemoveMatch struct {
	Id string `json:"id"`
}

// ChatResult is the typed data model for the chat_result entity.
type ChatResult struct {
	CacheControl map[string]any `json:"cache_control"`
	Choice []any `json:"choice"`
	Created int `json:"created"`
	Debug *map[string]any `json:"debug,omitempty"`
	FrequencyPenalty *any `json:"frequency_penalty,omitempty"`
	Id string `json:"id"`
	ImageConfig *map[string]any `json:"image_config,omitempty"`
	LogitBia *any `json:"logit_bia,omitempty"`
	Logprob *any `json:"logprob,omitempty"`
	MaxCompletionToken *any `json:"max_completion_token,omitempty"`
	MaxToken *any `json:"max_token,omitempty"`
	Message []any `json:"message"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	MinP *any `json:"min_p,omitempty"`
	Modality *[]any `json:"modality,omitempty"`
	Model string `json:"model"`
	Object string `json:"object"`
	OpenrouterMetadata map[string]any `json:"openrouter_metadata"`
	ParallelToolCall *any `json:"parallel_tool_call,omitempty"`
	Plugin *[]any `json:"plugin,omitempty"`
	Prediction any `json:"prediction"`
	PresencePenalty *any `json:"presence_penalty,omitempty"`
	PromptCacheKey *any `json:"prompt_cache_key,omitempty"`
	PromptCacheOption any `json:"prompt_cache_option"`
	Provider *any `json:"provider,omitempty"`
	Reasoning *map[string]any `json:"reasoning,omitempty"`
	ReasoningEffort *any `json:"reasoning_effort,omitempty"`
	RepetitionPenalty *any `json:"repetition_penalty,omitempty"`
	ResponseFormat *any `json:"response_format,omitempty"`
	Route *any `json:"route,omitempty"`
	Seed *any `json:"seed,omitempty"`
	ServiceTier *any `json:"service_tier,omitempty"`
	SessionId *string `json:"session_id,omitempty"`
	Stop *any `json:"stop,omitempty"`
	StopServerToolsWhen *[]any `json:"stop_server_tools_when,omitempty"`
	Stream *bool `json:"stream,omitempty"`
	StreamOption *any `json:"stream_option,omitempty"`
	SystemFingerprint any `json:"system_fingerprint"`
	Temperature *any `json:"temperature,omitempty"`
	Tool *[]any `json:"tool,omitempty"`
	ToolChoice *any `json:"tool_choice,omitempty"`
	TopA *any `json:"top_a,omitempty"`
	TopK *any `json:"top_k,omitempty"`
	TopLogprob *any `json:"top_logprob,omitempty"`
	TopP *any `json:"top_p,omitempty"`
	Trace *map[string]any `json:"trace,omitempty"`
	Usage map[string]any `json:"usage"`
	User *string `json:"user,omitempty"`
}

// ChatResultCreateData is the typed request payload for ChatResult.CreateTyped.
type ChatResultCreateData struct {
	CacheControl map[string]any `json:"cache_control"`
	Choice []any `json:"choice"`
	Created int `json:"created"`
	Debug *map[string]any `json:"debug,omitempty"`
	FrequencyPenalty *any `json:"frequency_penalty,omitempty"`
	Id string `json:"id"`
	ImageConfig *map[string]any `json:"image_config,omitempty"`
	LogitBia *any `json:"logit_bia,omitempty"`
	Logprob *any `json:"logprob,omitempty"`
	MaxCompletionToken *any `json:"max_completion_token,omitempty"`
	MaxToken *any `json:"max_token,omitempty"`
	Message []any `json:"message"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	MinP *any `json:"min_p,omitempty"`
	Modality *[]any `json:"modality,omitempty"`
	Model string `json:"model"`
	Object string `json:"object"`
	OpenrouterMetadata map[string]any `json:"openrouter_metadata"`
	ParallelToolCall *any `json:"parallel_tool_call,omitempty"`
	Plugin *[]any `json:"plugin,omitempty"`
	Prediction any `json:"prediction"`
	PresencePenalty *any `json:"presence_penalty,omitempty"`
	PromptCacheKey *any `json:"prompt_cache_key,omitempty"`
	PromptCacheOption any `json:"prompt_cache_option"`
	Provider *any `json:"provider,omitempty"`
	Reasoning *map[string]any `json:"reasoning,omitempty"`
	ReasoningEffort *any `json:"reasoning_effort,omitempty"`
	RepetitionPenalty *any `json:"repetition_penalty,omitempty"`
	ResponseFormat *any `json:"response_format,omitempty"`
	Route *any `json:"route,omitempty"`
	Seed *any `json:"seed,omitempty"`
	ServiceTier *any `json:"service_tier,omitempty"`
	SessionId *string `json:"session_id,omitempty"`
	Stop *any `json:"stop,omitempty"`
	StopServerToolsWhen *[]any `json:"stop_server_tools_when,omitempty"`
	Stream *bool `json:"stream,omitempty"`
	StreamOption *any `json:"stream_option,omitempty"`
	SystemFingerprint any `json:"system_fingerprint"`
	Temperature *any `json:"temperature,omitempty"`
	Tool *[]any `json:"tool,omitempty"`
	ToolChoice *any `json:"tool_choice,omitempty"`
	TopA *any `json:"top_a,omitempty"`
	TopK *any `json:"top_k,omitempty"`
	TopLogprob *any `json:"top_logprob,omitempty"`
	TopP *any `json:"top_p,omitempty"`
	Trace *map[string]any `json:"trace,omitempty"`
	Usage map[string]any `json:"usage"`
	User *string `json:"user,omitempty"`
}

// Code is the typed data model for the code entity.
type Code struct {
}

// Coinbase is the typed data model for the coinbase entity.
type Coinbase struct {
}

// Completion is the typed data model for the completion entity.
type Completion struct {
}

// Content is the typed data model for the content entity.
type Content struct {
}

// Count is the typed data model for the count entity.
type Count struct {
}

// CreateByokKey is the typed data model for the create_byok_key entity.
type CreateByokKey struct {
}

// CreateGuardrail is the typed data model for the create_guardrail entity.
type CreateGuardrail struct {
}

// CreateObservabilityDestination is the typed data model for the create_observability_destination entity.
type CreateObservabilityDestination struct {
	ApiKeyHash *any `json:"api_key_hash,omitempty"`
	Config map[string]any `json:"config"`
	Enabled *bool `json:"enabled,omitempty"`
	FilterRule any `json:"filter_rule"`
	Name string `json:"name"`
	PrivacyMode *bool `json:"privacy_mode,omitempty"`
	SamplingRate *float64 `json:"sampling_rate,omitempty"`
	Type string `json:"type"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// CreateObservabilityDestinationCreateData is the typed request payload for CreateObservabilityDestination.CreateTyped.
type CreateObservabilityDestinationCreateData struct {
	ApiKeyHash *any `json:"api_key_hash,omitempty"`
	Config map[string]any `json:"config"`
	Enabled *bool `json:"enabled,omitempty"`
	FilterRule any `json:"filter_rule"`
	Name string `json:"name"`
	PrivacyMode *bool `json:"privacy_mode,omitempty"`
	SamplingRate *float64 `json:"sampling_rate,omitempty"`
	Type string `json:"type"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// CreatePresetFromInference is the typed data model for the create_preset_from_inference entity.
type CreatePresetFromInference struct {
	Background *any `json:"background,omitempty"`
	CacheControl map[string]any `json:"cache_control"`
	ContextManagement *any `json:"context_management,omitempty"`
	Data any `json:"data"`
	Debug *map[string]any `json:"debug,omitempty"`
	Fallback *any `json:"fallback,omitempty"`
	FrequencyPenalty *any `json:"frequency_penalty,omitempty"`
	ImageConfig *map[string]any `json:"image_config,omitempty"`
	Include *any `json:"include,omitempty"`
	Input *any `json:"input,omitempty"`
	Instruction *any `json:"instruction,omitempty"`
	LogitBia *any `json:"logit_bia,omitempty"`
	Logprob *any `json:"logprob,omitempty"`
	MaxCompletionToken *any `json:"max_completion_token,omitempty"`
	MaxOutputToken *any `json:"max_output_token,omitempty"`
	MaxToken *any `json:"max_token,omitempty"`
	MaxToolCall *any `json:"max_tool_call,omitempty"`
	Message []any `json:"message"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	MinP *any `json:"min_p,omitempty"`
	Modality *[]any `json:"modality,omitempty"`
	Model *string `json:"model,omitempty"`
	OutputConfig *map[string]any `json:"output_config,omitempty"`
	ParallelToolCall *any `json:"parallel_tool_call,omitempty"`
	Plugin *[]any `json:"plugin,omitempty"`
	Prediction any `json:"prediction"`
	PresencePenalty *any `json:"presence_penalty,omitempty"`
	PreviousResponseId *string `json:"previous_response_id,omitempty"`
	Prompt any `json:"prompt"`
	PromptCacheKey *any `json:"prompt_cache_key,omitempty"`
	PromptCacheOption any `json:"prompt_cache_option"`
	Provider *any `json:"provider,omitempty"`
	Reasoning *map[string]any `json:"reasoning,omitempty"`
	ReasoningEffort *any `json:"reasoning_effort,omitempty"`
	RepetitionPenalty *any `json:"repetition_penalty,omitempty"`
	ResponseFormat *any `json:"response_format,omitempty"`
	Route *any `json:"route,omitempty"`
	SafetyIdentifier *any `json:"safety_identifier,omitempty"`
	Seed *any `json:"seed,omitempty"`
	ServiceTier *any `json:"service_tier,omitempty"`
	SessionId *string `json:"session_id,omitempty"`
	Speed *any `json:"speed,omitempty"`
	Stop *any `json:"stop,omitempty"`
	StopSequence *[]any `json:"stop_sequence,omitempty"`
	StopServerToolsWhen *[]any `json:"stop_server_tools_when,omitempty"`
	Store *bool `json:"store,omitempty"`
	Stream *bool `json:"stream,omitempty"`
	StreamOption *any `json:"stream_option,omitempty"`
	System *any `json:"system,omitempty"`
	Temperature *any `json:"temperature,omitempty"`
	Text *any `json:"text,omitempty"`
	Thinking *any `json:"thinking,omitempty"`
	Tool *[]any `json:"tool,omitempty"`
	ToolChoice *any `json:"tool_choice,omitempty"`
	TopA *any `json:"top_a,omitempty"`
	TopK *any `json:"top_k,omitempty"`
	TopLogprob *any `json:"top_logprob,omitempty"`
	TopP *any `json:"top_p,omitempty"`
	Trace *map[string]any `json:"trace,omitempty"`
	Truncation *any `json:"truncation,omitempty"`
	User *string `json:"user,omitempty"`
}

// CreatePresetFromInferenceCreateData is the typed request payload for CreatePresetFromInference.CreateTyped.
type CreatePresetFromInferenceCreateData struct {
	Slug string `json:"slug"`
}

// CreateWorkspace is the typed data model for the create_workspace entity.
type CreateWorkspace struct {
}

// Credit is the typed data model for the credit entity.
type Credit struct {
	Data map[string]any `json:"data"`
}

// CreditLoadMatch is the typed request payload for Credit.LoadTyped.
type CreditLoadMatch struct {
	Data *map[string]any `json:"data,omitempty"`
}

// CreditCreateData is the typed request payload for Credit.CreateTyped.
type CreditCreateData struct {
	Data map[string]any `json:"data"`
}

// Destination is the typed data model for the destination entity.
type Destination struct {
}

// Embedding is the typed data model for the embedding entity.
type Embedding struct {
	Data []any `json:"data"`
	Dimension *int `json:"dimension,omitempty"`
	EncodingFormat *string `json:"encoding_format,omitempty"`
	Id *string `json:"id,omitempty"`
	Input any `json:"input"`
	InputType *string `json:"input_type,omitempty"`
	Model string `json:"model"`
	Object string `json:"object"`
	Provider *any `json:"provider,omitempty"`
	Usage map[string]any `json:"usage"`
	User *string `json:"user,omitempty"`
}

// EmbeddingCreateData is the typed request payload for Embedding.CreateTyped.
type EmbeddingCreateData struct {
	Data []any `json:"data"`
	Dimension *int `json:"dimension,omitempty"`
	EncodingFormat *string `json:"encoding_format,omitempty"`
	Id *string `json:"id,omitempty"`
	Input any `json:"input"`
	InputType *string `json:"input_type,omitempty"`
	Model string `json:"model"`
	Object string `json:"object"`
	Provider *any `json:"provider,omitempty"`
	Usage map[string]any `json:"usage"`
	User *string `json:"user,omitempty"`
}

// Endpoint is the typed data model for the endpoint entity.
type Endpoint struct {
	Architecture map[string]any `json:"architecture"`
	Benchmark map[string]any `json:"benchmark"`
	CanonicalSlug string `json:"canonical_slug"`
	ContextLength any `json:"context_length"`
	Created int `json:"created"`
	Data map[string]any `json:"data"`
	DefaultParameter any `json:"default_parameter"`
	Description *string `json:"description,omitempty"`
	ExpirationDate *any `json:"expiration_date,omitempty"`
	HuggingFaceId *any `json:"hugging_face_id,omitempty"`
	Id string `json:"id"`
	KnowledgeCutoff *any `json:"knowledge_cutoff,omitempty"`
	LatencyLast30m any `json:"latency_last_30m"`
	Link map[string]any `json:"link"`
	MaxCompletionToken any `json:"max_completion_token"`
	MaxPromptToken any `json:"max_prompt_token"`
	ModelId string `json:"model_id"`
	ModelName string `json:"model_name"`
	Name string `json:"name"`
	PerRequestLimit any `json:"per_request_limit"`
	Pricing map[string]any `json:"pricing"`
	ProviderName string `json:"provider_name"`
	Quantization any `json:"quantization"`
	Reasoning map[string]any `json:"reasoning"`
	Status *int `json:"status,omitempty"`
	SupportedParameter []any `json:"supported_parameter"`
	SupportedVoice any `json:"supported_voice"`
	SupportsImplicitCaching bool `json:"supports_implicit_caching"`
	Tag string `json:"tag"`
	ThroughputLast30m any `json:"throughput_last_30m"`
	TopProvider map[string]any `json:"top_provider"`
	UptimeLast1d any `json:"uptime_last_1d"`
	UptimeLast30m any `json:"uptime_last_30m"`
	UptimeLast5m any `json:"uptime_last_5m"`
}

// EndpointLoadMatch is the typed request payload for Endpoint.LoadTyped.
type EndpointLoadMatch struct {
	Author string `json:"author"`
	Slug string `json:"slug"`
}

// EndpointListMatch is the typed request payload for Endpoint.ListTyped.
type EndpointListMatch struct {
	Architecture *map[string]any `json:"architecture,omitempty"`
	Benchmark *map[string]any `json:"benchmark,omitempty"`
	CanonicalSlug *string `json:"canonical_slug,omitempty"`
	ContextLength *any `json:"context_length,omitempty"`
	Created *int `json:"created,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	DefaultParameter *any `json:"default_parameter,omitempty"`
	Description *string `json:"description,omitempty"`
	ExpirationDate *any `json:"expiration_date,omitempty"`
	HuggingFaceId *any `json:"hugging_face_id,omitempty"`
	Id *string `json:"id,omitempty"`
	KnowledgeCutoff *any `json:"knowledge_cutoff,omitempty"`
	LatencyLast30m *any `json:"latency_last_30m,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	MaxCompletionToken *any `json:"max_completion_token,omitempty"`
	MaxPromptToken *any `json:"max_prompt_token,omitempty"`
	ModelId *string `json:"model_id,omitempty"`
	ModelName *string `json:"model_name,omitempty"`
	Name *string `json:"name,omitempty"`
	PerRequestLimit *any `json:"per_request_limit,omitempty"`
	Pricing *map[string]any `json:"pricing,omitempty"`
	ProviderName *string `json:"provider_name,omitempty"`
	Quantization *any `json:"quantization,omitempty"`
	Reasoning *map[string]any `json:"reasoning,omitempty"`
	Status *int `json:"status,omitempty"`
	SupportedParameter *[]any `json:"supported_parameter,omitempty"`
	SupportedVoice *any `json:"supported_voice,omitempty"`
	SupportsImplicitCaching *bool `json:"supports_implicit_caching,omitempty"`
	Tag *string `json:"tag,omitempty"`
	ThroughputLast30m *any `json:"throughput_last_30m,omitempty"`
	TopProvider *map[string]any `json:"top_provider,omitempty"`
	UptimeLast1d *any `json:"uptime_last_1d,omitempty"`
	UptimeLast30m *any `json:"uptime_last_30m,omitempty"`
	UptimeLast5m *any `json:"uptime_last_5m,omitempty"`
}

// Feedback is the typed data model for the feedback entity.
type Feedback struct {
}

// File is the typed data model for the file entity.
type File struct {
	CreatedAt string `json:"created_at"`
	Downloadable bool `json:"downloadable"`
	Filename string `json:"filename"`
	Id string `json:"id"`
	MimeType string `json:"mime_type"`
	SizeByte int `json:"size_byte"`
	Type string `json:"type"`
}

// FileLoadMatch is the typed request payload for File.LoadTyped.
type FileLoadMatch struct {
	Id string `json:"id"`
}

// FileListMatch is the typed request payload for File.ListTyped.
type FileListMatch struct {
	CreatedAt *string `json:"created_at,omitempty"`
	Downloadable *bool `json:"downloadable,omitempty"`
	Filename *string `json:"filename,omitempty"`
	Id *string `json:"id,omitempty"`
	MimeType *string `json:"mime_type,omitempty"`
	SizeByte *int `json:"size_byte,omitempty"`
	Type *string `json:"type,omitempty"`
}

// FileCreateData is the typed request payload for File.CreateTyped.
type FileCreateData struct {
	CreatedAt string `json:"created_at"`
	Downloadable bool `json:"downloadable"`
	Filename string `json:"filename"`
	Id string `json:"id"`
	MimeType string `json:"mime_type"`
	SizeByte int `json:"size_byte"`
	Type string `json:"type"`
}

// FileRemoveMatch is the typed request payload for File.RemoveTyped.
type FileRemoveMatch struct {
	Id string `json:"id"`
}

// Generation is the typed data model for the generation entity.
type Generation struct {
	Data map[string]any `json:"data"`
}

// GenerationLoadMatch is the typed request payload for Generation.LoadTyped.
type GenerationLoadMatch struct {
	Data *map[string]any `json:"data,omitempty"`
}

// GenerationContent is the typed data model for the generation_content entity.
type GenerationContent struct {
	Data map[string]any `json:"data"`
}

// GenerationContentLoadMatch is the typed request payload for GenerationContent.LoadTyped.
type GenerationContentLoadMatch struct {
	Data *map[string]any `json:"data,omitempty"`
}

// Guardrail is the typed data model for the guardrail entity.
type Guardrail struct {
	AllowedModel *any `json:"allowed_model,omitempty"`
	AllowedProvider *any `json:"allowed_provider,omitempty"`
	ContentFilter *any `json:"content_filter,omitempty"`
	ContentFilterBuiltin *any `json:"content_filter_builtin,omitempty"`
	CreatedAt string `json:"created_at"`
	Data any `json:"data"`
	Description *any `json:"description,omitempty"`
	EnforceZdr *any `json:"enforce_zdr,omitempty"`
	EnforceZdrAnthropic *any `json:"enforce_zdr_anthropic,omitempty"`
	EnforceZdrGoogle *any `json:"enforce_zdr_google,omitempty"`
	EnforceZdrOpenai *any `json:"enforce_zdr_openai,omitempty"`
	EnforceZdrOther *any `json:"enforce_zdr_other,omitempty"`
	EnforceZdrXai *any `json:"enforce_zdr_xai,omitempty"`
	Id string `json:"id"`
	IgnoredModel *any `json:"ignored_model,omitempty"`
	IgnoredProvider *any `json:"ignored_provider,omitempty"`
	LimitUsd *any `json:"limit_usd,omitempty"`
	Name string `json:"name"`
	ResetInterval *any `json:"reset_interval,omitempty"`
	UpdatedAt *any `json:"updated_at,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// GuardrailLoadMatch is the typed request payload for Guardrail.LoadTyped.
type GuardrailLoadMatch struct {
	Id string `json:"id"`
}

// GuardrailListMatch is the typed request payload for Guardrail.ListTyped.
type GuardrailListMatch struct {
	AllowedModel *any `json:"allowed_model,omitempty"`
	AllowedProvider *any `json:"allowed_provider,omitempty"`
	ContentFilter *any `json:"content_filter,omitempty"`
	ContentFilterBuiltin *any `json:"content_filter_builtin,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Data *any `json:"data,omitempty"`
	Description *any `json:"description,omitempty"`
	EnforceZdr *any `json:"enforce_zdr,omitempty"`
	EnforceZdrAnthropic *any `json:"enforce_zdr_anthropic,omitempty"`
	EnforceZdrGoogle *any `json:"enforce_zdr_google,omitempty"`
	EnforceZdrOpenai *any `json:"enforce_zdr_openai,omitempty"`
	EnforceZdrOther *any `json:"enforce_zdr_other,omitempty"`
	EnforceZdrXai *any `json:"enforce_zdr_xai,omitempty"`
	Id *string `json:"id,omitempty"`
	IgnoredModel *any `json:"ignored_model,omitempty"`
	IgnoredProvider *any `json:"ignored_provider,omitempty"`
	LimitUsd *any `json:"limit_usd,omitempty"`
	Name *string `json:"name,omitempty"`
	ResetInterval *any `json:"reset_interval,omitempty"`
	UpdatedAt *any `json:"updated_at,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// GuardrailCreateData is the typed request payload for Guardrail.CreateTyped.
type GuardrailCreateData struct {
	AllowedModel *any `json:"allowed_model,omitempty"`
	AllowedProvider *any `json:"allowed_provider,omitempty"`
	ContentFilter *any `json:"content_filter,omitempty"`
	ContentFilterBuiltin *any `json:"content_filter_builtin,omitempty"`
	CreatedAt string `json:"created_at"`
	Data any `json:"data"`
	Description *any `json:"description,omitempty"`
	EnforceZdr *any `json:"enforce_zdr,omitempty"`
	EnforceZdrAnthropic *any `json:"enforce_zdr_anthropic,omitempty"`
	EnforceZdrGoogle *any `json:"enforce_zdr_google,omitempty"`
	EnforceZdrOpenai *any `json:"enforce_zdr_openai,omitempty"`
	EnforceZdrOther *any `json:"enforce_zdr_other,omitempty"`
	EnforceZdrXai *any `json:"enforce_zdr_xai,omitempty"`
	Id string `json:"id"`
	IgnoredModel *any `json:"ignored_model,omitempty"`
	IgnoredProvider *any `json:"ignored_provider,omitempty"`
	LimitUsd *any `json:"limit_usd,omitempty"`
	Name string `json:"name"`
	ResetInterval *any `json:"reset_interval,omitempty"`
	UpdatedAt *any `json:"updated_at,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// GuardrailRemoveMatch is the typed request payload for Guardrail.RemoveTyped.
type GuardrailRemoveMatch struct {
	Id string `json:"id"`
}

// Image is the typed data model for the image entity.
type Image struct {
	AspectRatio *string `json:"aspect_ratio,omitempty"`
	Background *string `json:"background,omitempty"`
	Created int `json:"created"`
	Data []any `json:"data"`
	InputReference *[]any `json:"input_reference,omitempty"`
	Model string `json:"model"`
	N *int `json:"n,omitempty"`
	OutputCompression *int `json:"output_compression,omitempty"`
	OutputFormat *string `json:"output_format,omitempty"`
	Prompt string `json:"prompt"`
	Provider *map[string]any `json:"provider,omitempty"`
	Quality *string `json:"quality,omitempty"`
	Resolution *string `json:"resolution,omitempty"`
	Seed *int `json:"seed,omitempty"`
	Size *string `json:"size,omitempty"`
	Stream *bool `json:"stream,omitempty"`
	Usage map[string]any `json:"usage"`
}

// ImageCreateData is the typed request payload for Image.CreateTyped.
type ImageCreateData struct {
	AspectRatio *string `json:"aspect_ratio,omitempty"`
	Background *string `json:"background,omitempty"`
	Created int `json:"created"`
	Data []any `json:"data"`
	InputReference *[]any `json:"input_reference,omitempty"`
	Model string `json:"model"`
	N *int `json:"n,omitempty"`
	OutputCompression *int `json:"output_compression,omitempty"`
	OutputFormat *string `json:"output_format,omitempty"`
	Prompt string `json:"prompt"`
	Provider *map[string]any `json:"provider,omitempty"`
	Quality *string `json:"quality,omitempty"`
	Resolution *string `json:"resolution,omitempty"`
	Seed *int `json:"seed,omitempty"`
	Size *string `json:"size,omitempty"`
	Stream *bool `json:"stream,omitempty"`
	Usage map[string]any `json:"usage"`
}

// ImageModelEndpoint is the typed data model for the image_model_endpoint entity.
type ImageModelEndpoint struct {
	AllowedPassthroughParameter []any `json:"allowed_passthrough_parameter"`
	Pricing []any `json:"pricing"`
	ProviderName string `json:"provider_name"`
	ProviderSlug string `json:"provider_slug"`
	ProviderTag any `json:"provider_tag"`
	SupportedParameter any `json:"supported_parameter"`
	SupportsStreaming bool `json:"supports_streaming"`
}

// ImageModelEndpointListMatch is the typed request payload for ImageModelEndpoint.ListTyped.
type ImageModelEndpointListMatch struct {
	ModelId string `json:"model_id"`
	Slug string `json:"slug"`
}

// ImageModelsList is the typed data model for the image_models_list entity.
type ImageModelsList struct {
	Architecture map[string]any `json:"architecture"`
	Created int `json:"created"`
	Description string `json:"description"`
	Endpoint string `json:"endpoint"`
	Id string `json:"id"`
	Name string `json:"name"`
	SupportedParameter map[string]any `json:"supported_parameter"`
	SupportsStreaming bool `json:"supports_streaming"`
}

// ImageModelsListListMatch is the typed request payload for ImageModelsList.ListTyped.
type ImageModelsListListMatch struct {
	Architecture *map[string]any `json:"architecture,omitempty"`
	Created *int `json:"created,omitempty"`
	Description *string `json:"description,omitempty"`
	Endpoint *string `json:"endpoint,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	SupportedParameter *map[string]any `json:"supported_parameter,omitempty"`
	SupportsStreaming *bool `json:"supports_streaming,omitempty"`
}

// Key is the typed data model for the key entity.
type Key struct {
}

// ListByokKey is the typed data model for the list_byok_key entity.
type ListByokKey struct {
}

// ListGuardrail is the typed data model for the list_guardrail entity.
type ListGuardrail struct {
}

// ListKeyAssignment is the typed data model for the list_key_assignment entity.
type ListKeyAssignment struct {
	AssignedBy any `json:"assigned_by"`
	CreatedAt string `json:"created_at"`
	GuardrailId string `json:"guardrail_id"`
	Id string `json:"id"`
	KeyHash string `json:"key_hash"`
	KeyLabel string `json:"key_label"`
	KeyName string `json:"key_name"`
}

// ListKeyAssignmentListMatch is the typed request payload for ListKeyAssignment.ListTyped.
type ListKeyAssignmentListMatch struct {
	GuardrailId *string `json:"guardrail_id,omitempty"`
}

// ListMemberAssignment is the typed data model for the list_member_assignment entity.
type ListMemberAssignment struct {
	AssignedBy any `json:"assigned_by"`
	CreatedAt string `json:"created_at"`
	GuardrailId string `json:"guardrail_id"`
	Id string `json:"id"`
	OrganizationId string `json:"organization_id"`
	UserId string `json:"user_id"`
}

// ListMemberAssignmentListMatch is the typed request payload for ListMemberAssignment.ListTyped.
type ListMemberAssignmentListMatch struct {
	GuardrailId *string `json:"guardrail_id,omitempty"`
}

// ListObservabilityDestination is the typed data model for the list_observability_destination entity.
type ListObservabilityDestination struct {
	Data []any `json:"data"`
	TotalCount int `json:"total_count"`
}

// ListObservabilityDestinationListMatch is the typed request payload for ListObservabilityDestination.ListTyped.
type ListObservabilityDestinationListMatch struct {
	Data *[]any `json:"data,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
}

// ListPreset is the typed data model for the list_preset entity.
type ListPreset struct {
}

// ListPresetVersion is the typed data model for the list_preset_version entity.
type ListPresetVersion struct {
	Config map[string]any `json:"config"`
	CreatedAt string `json:"created_at"`
	CreatorId string `json:"creator_id"`
	Id string `json:"id"`
	PresetId string `json:"preset_id"`
	SystemPrompt any `json:"system_prompt"`
	UpdatedAt string `json:"updated_at"`
	Version int `json:"version"`
}

// ListPresetVersionListMatch is the typed request payload for ListPresetVersion.ListTyped.
type ListPresetVersionListMatch struct {
	Slug string `json:"slug"`
}

// ListWorkspace is the typed data model for the list_workspace entity.
type ListWorkspace struct {
}

// ListWorkspaceBudget is the typed data model for the list_workspace_budget entity.
type ListWorkspaceBudget struct {
	CreatedAt string `json:"created_at"`
	Id string `json:"id"`
	LimitUsd float64 `json:"limit_usd"`
	ResetInterval any `json:"reset_interval"`
	UpdatedAt string `json:"updated_at"`
	WorkspaceId string `json:"workspace_id"`
}

// ListWorkspaceBudgetListMatch is the typed request payload for ListWorkspaceBudget.ListTyped.
type ListWorkspaceBudgetListMatch struct {
	WorkspaceId string `json:"workspace_id"`
}

// ListWorkspaceMember is the typed data model for the list_workspace_member entity.
type ListWorkspaceMember struct {
	CreatedAt string `json:"created_at"`
	Id string `json:"id"`
	Role string `json:"role"`
	UserId string `json:"user_id"`
	WorkspaceId string `json:"workspace_id"`
}

// ListWorkspaceMemberListMatch is the typed request payload for ListWorkspaceMember.ListTyped.
type ListWorkspaceMemberListMatch struct {
	WorkspaceId string `json:"workspace_id"`
}

// Member is the typed data model for the member entity.
type Member struct {
}

// Message is the typed data model for the message entity.
type Message struct {
	CacheControl map[string]any `json:"cache_control"`
	ContextManagement *any `json:"context_management,omitempty"`
	Fallback *any `json:"fallback,omitempty"`
	MaxToken *int `json:"max_token,omitempty"`
	Message any `json:"message"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Model string `json:"model"`
	OutputConfig *map[string]any `json:"output_config,omitempty"`
	Plugin *[]any `json:"plugin,omitempty"`
	Provider *any `json:"provider,omitempty"`
	Route *any `json:"route,omitempty"`
	ServiceTier *string `json:"service_tier,omitempty"`
	SessionId *string `json:"session_id,omitempty"`
	Speed *any `json:"speed,omitempty"`
	StopSequence *[]any `json:"stop_sequence,omitempty"`
	StopServerToolsWhen *[]any `json:"stop_server_tools_when,omitempty"`
	Stream *bool `json:"stream,omitempty"`
	System *any `json:"system,omitempty"`
	Temperature *float64 `json:"temperature,omitempty"`
	Thinking *any `json:"thinking,omitempty"`
	Tool *[]any `json:"tool,omitempty"`
	ToolChoice *any `json:"tool_choice,omitempty"`
	TopK *int `json:"top_k,omitempty"`
	TopP *float64 `json:"top_p,omitempty"`
	Trace *map[string]any `json:"trace,omitempty"`
	User *string `json:"user,omitempty"`
}

// MessageCreateData is the typed request payload for Message.CreateTyped.
type MessageCreateData struct {
	CacheControl map[string]any `json:"cache_control"`
	ContextManagement *any `json:"context_management,omitempty"`
	Fallback *any `json:"fallback,omitempty"`
	MaxToken *int `json:"max_token,omitempty"`
	Message any `json:"message"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Model string `json:"model"`
	OutputConfig *map[string]any `json:"output_config,omitempty"`
	Plugin *[]any `json:"plugin,omitempty"`
	Provider *any `json:"provider,omitempty"`
	Route *any `json:"route,omitempty"`
	ServiceTier *string `json:"service_tier,omitempty"`
	SessionId *string `json:"session_id,omitempty"`
	Speed *any `json:"speed,omitempty"`
	StopSequence *[]any `json:"stop_sequence,omitempty"`
	StopServerToolsWhen *[]any `json:"stop_server_tools_when,omitempty"`
	Stream *bool `json:"stream,omitempty"`
	System *any `json:"system,omitempty"`
	Temperature *float64 `json:"temperature,omitempty"`
	Thinking *any `json:"thinking,omitempty"`
	Tool *[]any `json:"tool,omitempty"`
	ToolChoice *any `json:"tool_choice,omitempty"`
	TopK *int `json:"top_k,omitempty"`
	TopP *float64 `json:"top_p,omitempty"`
	Trace *map[string]any `json:"trace,omitempty"`
	User *string `json:"user,omitempty"`
}

// Meta is the typed data model for the meta entity.
type Meta struct {
}

// Model is the typed data model for the model entity.
type Model struct {
	Architecture map[string]any `json:"architecture"`
	Benchmark map[string]any `json:"benchmark"`
	CanonicalSlug string `json:"canonical_slug"`
	ContextLength any `json:"context_length"`
	Created int `json:"created"`
	Data map[string]any `json:"data"`
	DefaultParameter any `json:"default_parameter"`
	Description *string `json:"description,omitempty"`
	ExpirationDate *any `json:"expiration_date,omitempty"`
	HuggingFaceId *any `json:"hugging_face_id,omitempty"`
	Id string `json:"id"`
	KnowledgeCutoff *any `json:"knowledge_cutoff,omitempty"`
	Link map[string]any `json:"link"`
	Name string `json:"name"`
	PerRequestLimit any `json:"per_request_limit"`
	Pricing map[string]any `json:"pricing"`
	Reasoning map[string]any `json:"reasoning"`
	SupportedParameter []any `json:"supported_parameter"`
	SupportedVoice any `json:"supported_voice"`
	TopProvider map[string]any `json:"top_provider"`
}

// ModelLoadMatch is the typed request payload for Model.LoadTyped.
type ModelLoadMatch struct {
	Author string `json:"author"`
	Slug string `json:"slug"`
}

// ModelListMatch is the typed request payload for Model.ListTyped.
type ModelListMatch struct {
	Architecture *map[string]any `json:"architecture,omitempty"`
	Benchmark *map[string]any `json:"benchmark,omitempty"`
	CanonicalSlug *string `json:"canonical_slug,omitempty"`
	ContextLength *any `json:"context_length,omitempty"`
	Created *int `json:"created,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	DefaultParameter *any `json:"default_parameter,omitempty"`
	Description *string `json:"description,omitempty"`
	ExpirationDate *any `json:"expiration_date,omitempty"`
	HuggingFaceId *any `json:"hugging_face_id,omitempty"`
	Id *string `json:"id,omitempty"`
	KnowledgeCutoff *any `json:"knowledge_cutoff,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	Name *string `json:"name,omitempty"`
	PerRequestLimit *any `json:"per_request_limit,omitempty"`
	Pricing *map[string]any `json:"pricing,omitempty"`
	Reasoning *map[string]any `json:"reasoning,omitempty"`
	SupportedParameter *[]any `json:"supported_parameter,omitempty"`
	SupportedVoice *any `json:"supported_voice,omitempty"`
	TopProvider *map[string]any `json:"top_provider,omitempty"`
}

// ModelsCount is the typed data model for the models_count entity.
type ModelsCount struct {
	Data map[string]any `json:"data"`
}

// ModelsCountLoadMatch is the typed request payload for ModelsCount.LoadTyped.
type ModelsCountLoadMatch struct {
	Data *map[string]any `json:"data,omitempty"`
}

// ModelsList is the typed data model for the models_list entity.
type ModelsList struct {
	Architecture map[string]any `json:"architecture"`
	Benchmark map[string]any `json:"benchmark"`
	CanonicalSlug string `json:"canonical_slug"`
	ContextLength any `json:"context_length"`
	Created int `json:"created"`
	DefaultParameter any `json:"default_parameter"`
	Description *string `json:"description,omitempty"`
	ExpirationDate *any `json:"expiration_date,omitempty"`
	HuggingFaceId *any `json:"hugging_face_id,omitempty"`
	Id string `json:"id"`
	KnowledgeCutoff *any `json:"knowledge_cutoff,omitempty"`
	Link map[string]any `json:"link"`
	Name string `json:"name"`
	PerRequestLimit any `json:"per_request_limit"`
	Pricing map[string]any `json:"pricing"`
	Reasoning map[string]any `json:"reasoning"`
	SupportedParameter []any `json:"supported_parameter"`
	SupportedVoice any `json:"supported_voice"`
	TopProvider map[string]any `json:"top_provider"`
}

// ModelsListListMatch is the typed request payload for ModelsList.ListTyped.
type ModelsListListMatch struct {
	Architecture *map[string]any `json:"architecture,omitempty"`
	Benchmark *map[string]any `json:"benchmark,omitempty"`
	CanonicalSlug *string `json:"canonical_slug,omitempty"`
	ContextLength *any `json:"context_length,omitempty"`
	Created *int `json:"created,omitempty"`
	DefaultParameter *any `json:"default_parameter,omitempty"`
	Description *string `json:"description,omitempty"`
	ExpirationDate *any `json:"expiration_date,omitempty"`
	HuggingFaceId *any `json:"hugging_face_id,omitempty"`
	Id *string `json:"id,omitempty"`
	KnowledgeCutoff *any `json:"knowledge_cutoff,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	Name *string `json:"name,omitempty"`
	PerRequestLimit *any `json:"per_request_limit,omitempty"`
	Pricing *map[string]any `json:"pricing,omitempty"`
	Reasoning *map[string]any `json:"reasoning,omitempty"`
	SupportedParameter *[]any `json:"supported_parameter,omitempty"`
	SupportedVoice *any `json:"supported_voice,omitempty"`
	TopProvider *map[string]any `json:"top_provider,omitempty"`
}

// OAuth is the typed data model for the o_auth entity.
type OAuth struct {
	CallbackUrl string `json:"callback_url"`
	Code string `json:"code"`
	CodeChallenge *string `json:"code_challenge,omitempty"`
	CodeChallengeMethod *any `json:"code_challenge_method,omitempty"`
	CodeVerifier *string `json:"code_verifier,omitempty"`
	Data map[string]any `json:"data"`
	ExpiresAt *any `json:"expires_at,omitempty"`
	Key string `json:"key"`
	KeyLabel *string `json:"key_label,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	SpawnAgent *string `json:"spawn_agent,omitempty"`
	SpawnCloud *string `json:"spawn_cloud,omitempty"`
	UsageLimitType *string `json:"usage_limit_type,omitempty"`
	UserId any `json:"user_id"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// OAuthCreateData is the typed request payload for OAuth.CreateTyped.
type OAuthCreateData struct {
	CallbackUrl string `json:"callback_url"`
	Code string `json:"code"`
	CodeChallenge *string `json:"code_challenge,omitempty"`
	CodeChallengeMethod *any `json:"code_challenge_method,omitempty"`
	CodeVerifier *string `json:"code_verifier,omitempty"`
	Data map[string]any `json:"data"`
	ExpiresAt *any `json:"expires_at,omitempty"`
	Key string `json:"key"`
	KeyLabel *string `json:"key_label,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	SpawnAgent *string `json:"spawn_agent,omitempty"`
	SpawnCloud *string `json:"spawn_cloud,omitempty"`
	UsageLimitType *string `json:"usage_limit_type,omitempty"`
	UserId any `json:"user_id"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// ObservabilityDestination is the typed data model for the observability_destination entity.
type ObservabilityDestination struct {
	Data any `json:"data"`
}

// ObservabilityDestinationLoadMatch is the typed request payload for ObservabilityDestination.LoadTyped.
type ObservabilityDestinationLoadMatch struct {
	Id string `json:"id"`
}

// ObservabilityDestinationRemoveMatch is the typed request payload for ObservabilityDestination.RemoveTyped.
type ObservabilityDestinationRemoveMatch struct {
	Id string `json:"id"`
}

// OpenResponsesResult is the typed data model for the open_responses_result entity.
type OpenResponsesResult struct {
	Background *any `json:"background,omitempty"`
	CacheControl map[string]any `json:"cache_control"`
	Debug *map[string]any `json:"debug,omitempty"`
	FrequencyPenalty *any `json:"frequency_penalty,omitempty"`
	ImageConfig *map[string]any `json:"image_config,omitempty"`
	Include *any `json:"include,omitempty"`
	Input *any `json:"input,omitempty"`
	Instruction *any `json:"instruction,omitempty"`
	MaxOutputToken *any `json:"max_output_token,omitempty"`
	MaxToolCall *any `json:"max_tool_call,omitempty"`
	Metadata *any `json:"metadata,omitempty"`
	Modality *[]any `json:"modality,omitempty"`
	Model *string `json:"model,omitempty"`
	ParallelToolCall *any `json:"parallel_tool_call,omitempty"`
	Plugin *[]any `json:"plugin,omitempty"`
	PresencePenalty *any `json:"presence_penalty,omitempty"`
	PreviousResponseId *string `json:"previous_response_id,omitempty"`
	Prompt any `json:"prompt"`
	PromptCacheKey *any `json:"prompt_cache_key,omitempty"`
	PromptCacheOption any `json:"prompt_cache_option"`
	Provider *any `json:"provider,omitempty"`
	Reasoning *any `json:"reasoning,omitempty"`
	Route *any `json:"route,omitempty"`
	SafetyIdentifier *any `json:"safety_identifier,omitempty"`
	ServiceTier *any `json:"service_tier,omitempty"`
	SessionId *string `json:"session_id,omitempty"`
	StopServerToolsWhen *[]any `json:"stop_server_tools_when,omitempty"`
	Store *bool `json:"store,omitempty"`
	Stream *bool `json:"stream,omitempty"`
	Temperature *any `json:"temperature,omitempty"`
	Text *any `json:"text,omitempty"`
	Tool *[]any `json:"tool,omitempty"`
	ToolChoice *any `json:"tool_choice,omitempty"`
	TopK *int `json:"top_k,omitempty"`
	TopLogprob *any `json:"top_logprob,omitempty"`
	TopP *any `json:"top_p,omitempty"`
	Trace *map[string]any `json:"trace,omitempty"`
	Truncation *any `json:"truncation,omitempty"`
	User *string `json:"user,omitempty"`
}

// OpenResponsesResultCreateData is the typed request payload for OpenResponsesResult.CreateTyped.
type OpenResponsesResultCreateData struct {
	Background *any `json:"background,omitempty"`
	CacheControl map[string]any `json:"cache_control"`
	Debug *map[string]any `json:"debug,omitempty"`
	FrequencyPenalty *any `json:"frequency_penalty,omitempty"`
	ImageConfig *map[string]any `json:"image_config,omitempty"`
	Include *any `json:"include,omitempty"`
	Input *any `json:"input,omitempty"`
	Instruction *any `json:"instruction,omitempty"`
	MaxOutputToken *any `json:"max_output_token,omitempty"`
	MaxToolCall *any `json:"max_tool_call,omitempty"`
	Metadata *any `json:"metadata,omitempty"`
	Modality *[]any `json:"modality,omitempty"`
	Model *string `json:"model,omitempty"`
	ParallelToolCall *any `json:"parallel_tool_call,omitempty"`
	Plugin *[]any `json:"plugin,omitempty"`
	PresencePenalty *any `json:"presence_penalty,omitempty"`
	PreviousResponseId *string `json:"previous_response_id,omitempty"`
	Prompt any `json:"prompt"`
	PromptCacheKey *any `json:"prompt_cache_key,omitempty"`
	PromptCacheOption any `json:"prompt_cache_option"`
	Provider *any `json:"provider,omitempty"`
	Reasoning *any `json:"reasoning,omitempty"`
	Route *any `json:"route,omitempty"`
	SafetyIdentifier *any `json:"safety_identifier,omitempty"`
	ServiceTier *any `json:"service_tier,omitempty"`
	SessionId *string `json:"session_id,omitempty"`
	StopServerToolsWhen *[]any `json:"stop_server_tools_when,omitempty"`
	Store *bool `json:"store,omitempty"`
	Stream *bool `json:"stream,omitempty"`
	Temperature *any `json:"temperature,omitempty"`
	Text *any `json:"text,omitempty"`
	Tool *[]any `json:"tool,omitempty"`
	ToolChoice *any `json:"tool_choice,omitempty"`
	TopK *int `json:"top_k,omitempty"`
	TopLogprob *any `json:"top_logprob,omitempty"`
	TopP *any `json:"top_p,omitempty"`
	Trace *map[string]any `json:"trace,omitempty"`
	Truncation *any `json:"truncation,omitempty"`
	User *string `json:"user,omitempty"`
}

// Organization is the typed data model for the organization entity.
type Organization struct {
	Email string `json:"email"`
	FirstName any `json:"first_name"`
	Id string `json:"id"`
	LastName any `json:"last_name"`
	Role string `json:"role"`
}

// OrganizationListMatch is the typed request payload for Organization.ListTyped.
type OrganizationListMatch struct {
	Email *string `json:"email,omitempty"`
	FirstName *any `json:"first_name,omitempty"`
	Id *string `json:"id,omitempty"`
	LastName *any `json:"last_name,omitempty"`
	Role *string `json:"role,omitempty"`
}

// Preset is the typed data model for the preset entity.
type Preset struct {
	CreatedAt string `json:"created_at"`
	CreatorUserId any `json:"creator_user_id"`
	Data any `json:"data"`
	Description any `json:"description"`
	DesignatedVersionId any `json:"designated_version_id"`
	Id string `json:"id"`
	Name string `json:"name"`
	Slug string `json:"slug"`
	Status string `json:"status"`
	StatusUpdatedAt any `json:"status_updated_at"`
	UpdatedAt string `json:"updated_at"`
	WorkspaceId any `json:"workspace_id"`
}

// PresetLoadMatch is the typed request payload for Preset.LoadTyped.
type PresetLoadMatch struct {
	Id string `json:"id"`
}

// PresetListMatch is the typed request payload for Preset.ListTyped.
type PresetListMatch struct {
	CreatedAt *string `json:"created_at,omitempty"`
	CreatorUserId *any `json:"creator_user_id,omitempty"`
	Data *any `json:"data,omitempty"`
	Description *any `json:"description,omitempty"`
	DesignatedVersionId *any `json:"designated_version_id,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Status *string `json:"status,omitempty"`
	StatusUpdatedAt *any `json:"status_updated_at,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	WorkspaceId *any `json:"workspace_id,omitempty"`
}

// PresetVersion is the typed data model for the preset_version entity.
type PresetVersion struct {
	Data any `json:"data"`
}

// PresetVersionLoadMatch is the typed request payload for PresetVersion.LoadTyped.
type PresetVersionLoadMatch struct {
	Id string `json:"id"`
	Slug string `json:"slug"`
}

// Provider is the typed data model for the provider entity.
type Provider struct {
	Datacenter *any `json:"datacenter,omitempty"`
	Headquarter *any `json:"headquarter,omitempty"`
	Name string `json:"name"`
	PrivacyPolicyUrl any `json:"privacy_policy_url"`
	Slug string `json:"slug"`
	StatusPageUrl *any `json:"status_page_url,omitempty"`
	TermsOfServiceUrl *any `json:"terms_of_service_url,omitempty"`
}

// ProviderListMatch is the typed request payload for Provider.ListTyped.
type ProviderListMatch struct {
	Datacenter *any `json:"datacenter,omitempty"`
	Headquarter *any `json:"headquarter,omitempty"`
	Name *string `json:"name,omitempty"`
	PrivacyPolicyUrl *any `json:"privacy_policy_url,omitempty"`
	Slug *string `json:"slug,omitempty"`
	StatusPageUrl *any `json:"status_page_url,omitempty"`
	TermsOfServiceUrl *any `json:"terms_of_service_url,omitempty"`
}

// Query is the typed data model for the query entity.
type Query struct {
}

// RankingsDaily is the typed data model for the rankings_daily entity.
type RankingsDaily struct {
	Date string `json:"date"`
	ModelPermaslug string `json:"model_permaslug"`
	TotalToken string `json:"total_token"`
}

// RankingsDailyListMatch is the typed request payload for RankingsDaily.ListTyped.
type RankingsDailyListMatch struct {
	Date *string `json:"date,omitempty"`
	ModelPermaslug *string `json:"model_permaslug,omitempty"`
	TotalToken *string `json:"total_token,omitempty"`
}

// Remove is the typed data model for the remove entity.
type Remove struct {
}

// Rerank is the typed data model for the rerank entity.
type Rerank struct {
	Document []any `json:"document"`
	Id *string `json:"id,omitempty"`
	Model string `json:"model"`
	Provider *string `json:"provider,omitempty"`
	Query string `json:"query"`
	Result []any `json:"result"`
	TopN *int `json:"top_n,omitempty"`
	Usage *map[string]any `json:"usage,omitempty"`
}

// RerankCreateData is the typed request payload for Rerank.CreateTyped.
type RerankCreateData struct {
	Document []any `json:"document"`
	Id *string `json:"id,omitempty"`
	Model string `json:"model"`
	Provider *string `json:"provider,omitempty"`
	Query string `json:"query"`
	Result []any `json:"result"`
	TopN *int `json:"top_n,omitempty"`
	Usage *map[string]any `json:"usage,omitempty"`
}

// Response is the typed data model for the response entity.
type Response struct {
}

// Speech is the typed data model for the speech entity.
type Speech struct {
}

// Stt is the typed data model for the stt entity.
type Stt struct {
	Duration *float64 `json:"duration,omitempty"`
	InputAudio map[string]any `json:"input_audio"`
	Language *string `json:"language,omitempty"`
	Model string `json:"model"`
	Provider *map[string]any `json:"provider,omitempty"`
	ResponseFormat *string `json:"response_format,omitempty"`
	Segment *[]any `json:"segment,omitempty"`
	Task *string `json:"task,omitempty"`
	Temperature *float64 `json:"temperature,omitempty"`
	Text string `json:"text"`
	TimestampGranularity *[]any `json:"timestamp_granularity,omitempty"`
	Usage *map[string]any `json:"usage,omitempty"`
	Word *[]any `json:"word,omitempty"`
}

// SttCreateData is the typed request payload for Stt.CreateTyped.
type SttCreateData struct {
	Duration *float64 `json:"duration,omitempty"`
	InputAudio map[string]any `json:"input_audio"`
	Language *string `json:"language,omitempty"`
	Model string `json:"model"`
	Provider *map[string]any `json:"provider,omitempty"`
	ResponseFormat *string `json:"response_format,omitempty"`
	Segment *[]any `json:"segment,omitempty"`
	Task *string `json:"task,omitempty"`
	Temperature *float64 `json:"temperature,omitempty"`
	Text string `json:"text"`
	TimestampGranularity *[]any `json:"timestamp_granularity,omitempty"`
	Usage *map[string]any `json:"usage,omitempty"`
	Word *[]any `json:"word,omitempty"`
}

// SubmitGenerationFeedback is the typed data model for the submit_generation_feedback entity.
type SubmitGenerationFeedback struct {
	Category string `json:"category"`
	Comment *string `json:"comment,omitempty"`
	Data map[string]any `json:"data"`
	GenerationId string `json:"generation_id"`
}

// SubmitGenerationFeedbackCreateData is the typed request payload for SubmitGenerationFeedback.CreateTyped.
type SubmitGenerationFeedbackCreateData struct {
	Category string `json:"category"`
	Comment *string `json:"comment,omitempty"`
	Data map[string]any `json:"data"`
	GenerationId string `json:"generation_id"`
}

// Task is the typed data model for the task entity.
type Task struct {
	Data map[string]any `json:"data"`
}

// TaskLoadMatch is the typed request payload for Task.LoadTyped.
type TaskLoadMatch struct {
	Data *map[string]any `json:"data,omitempty"`
}

// Transcription is the typed data model for the transcription entity.
type Transcription struct {
}

// Tts is the typed data model for the tts entity.
type Tts struct {
	Input string `json:"input"`
	Model string `json:"model"`
	Provider *map[string]any `json:"provider,omitempty"`
	ResponseFormat *string `json:"response_format,omitempty"`
	Speed *float64 `json:"speed,omitempty"`
	Voice string `json:"voice"`
}

// TtsCreateData is the typed request payload for Tts.CreateTyped.
type TtsCreateData struct {
	Input string `json:"input"`
	Model string `json:"model"`
	Provider *map[string]any `json:"provider,omitempty"`
	ResponseFormat *string `json:"response_format,omitempty"`
	Speed *float64 `json:"speed,omitempty"`
	Voice string `json:"voice"`
}

// UnifiedBenchmark is the typed data model for the unified_benchmark entity.
type UnifiedBenchmark struct {
	Data []any `json:"data"`
	Meta map[string]any `json:"meta"`
}

// UnifiedBenchmarkListMatch is the typed request payload for UnifiedBenchmark.ListTyped.
type UnifiedBenchmarkListMatch struct {
	Data *[]any `json:"data,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
}

// UpdateByokKey is the typed data model for the update_byok_key entity.
type UpdateByokKey struct {
	AllowedModel *any `json:"allowed_model,omitempty"`
	AllowedUserId *any `json:"allowed_user_id,omitempty"`
	Data any `json:"data"`
	Disabled *bool `json:"disabled,omitempty"`
	IsFallback *bool `json:"is_fallback,omitempty"`
	Key *string `json:"key,omitempty"`
	Name *any `json:"name,omitempty"`
}

// UpdateByokKeyUpdateData is the typed request payload for UpdateByokKey.UpdateTyped.
type UpdateByokKeyUpdateData struct {
	Id string `json:"id"`
}

// UpdateGuardrail is the typed data model for the update_guardrail entity.
type UpdateGuardrail struct {
	AllowedModel *any `json:"allowed_model,omitempty"`
	AllowedProvider *any `json:"allowed_provider,omitempty"`
	ContentFilter *any `json:"content_filter,omitempty"`
	ContentFilterBuiltin *any `json:"content_filter_builtin,omitempty"`
	Data any `json:"data"`
	Description *any `json:"description,omitempty"`
	EnforceZdr *any `json:"enforce_zdr,omitempty"`
	EnforceZdrAnthropic *any `json:"enforce_zdr_anthropic,omitempty"`
	EnforceZdrGoogle *any `json:"enforce_zdr_google,omitempty"`
	EnforceZdrOpenai *any `json:"enforce_zdr_openai,omitempty"`
	EnforceZdrOther *any `json:"enforce_zdr_other,omitempty"`
	EnforceZdrXai *any `json:"enforce_zdr_xai,omitempty"`
	IgnoredModel *any `json:"ignored_model,omitempty"`
	IgnoredProvider *any `json:"ignored_provider,omitempty"`
	LimitUsd *any `json:"limit_usd,omitempty"`
	Name *string `json:"name,omitempty"`
	ResetInterval *any `json:"reset_interval,omitempty"`
}

// UpdateGuardrailUpdateData is the typed request payload for UpdateGuardrail.UpdateTyped.
type UpdateGuardrailUpdateData struct {
	Id string `json:"id"`
}

// UpdateObservabilityDestination is the typed data model for the update_observability_destination entity.
type UpdateObservabilityDestination struct {
	ApiKeyHash *any `json:"api_key_hash,omitempty"`
	Config *map[string]any `json:"config,omitempty"`
	Data any `json:"data"`
	Enabled *bool `json:"enabled,omitempty"`
	FilterRule *any `json:"filter_rule,omitempty"`
	Name *string `json:"name,omitempty"`
	PrivacyMode *bool `json:"privacy_mode,omitempty"`
	SamplingRate *float64 `json:"sampling_rate,omitempty"`
}

// UpdateObservabilityDestinationUpdateData is the typed request payload for UpdateObservabilityDestination.UpdateTyped.
type UpdateObservabilityDestinationUpdateData struct {
	Id string `json:"id"`
}

// UpdateWorkspace is the typed data model for the update_workspace entity.
type UpdateWorkspace struct {
	CreatedAt string `json:"created_at"`
	CreatedBy any `json:"created_by"`
	Data any `json:"data"`
	DefaultImageModel *any `json:"default_image_model,omitempty"`
	DefaultProviderSort *any `json:"default_provider_sort,omitempty"`
	DefaultTextModel *any `json:"default_text_model,omitempty"`
	Description *any `json:"description,omitempty"`
	Id string `json:"id"`
	IoLoggingApiKeyId *any `json:"io_logging_api_key_id,omitempty"`
	IoLoggingSamplingRate *float64 `json:"io_logging_sampling_rate,omitempty"`
	IsDataDiscountLoggingEnabled *bool `json:"is_data_discount_logging_enabled,omitempty"`
	IsObservabilityBroadcastEnabled *bool `json:"is_observability_broadcast_enabled,omitempty"`
	IsObservabilityIoLoggingEnabled *bool `json:"is_observability_io_logging_enabled,omitempty"`
	Name string `json:"name"`
	Slug string `json:"slug"`
	UpdatedAt any `json:"updated_at"`
}

// UpdateWorkspaceListMatch is the typed request payload for UpdateWorkspace.ListTyped.
type UpdateWorkspaceListMatch struct {
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *any `json:"created_by,omitempty"`
	Data *any `json:"data,omitempty"`
	DefaultImageModel *any `json:"default_image_model,omitempty"`
	DefaultProviderSort *any `json:"default_provider_sort,omitempty"`
	DefaultTextModel *any `json:"default_text_model,omitempty"`
	Description *any `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	IoLoggingApiKeyId *any `json:"io_logging_api_key_id,omitempty"`
	IoLoggingSamplingRate *float64 `json:"io_logging_sampling_rate,omitempty"`
	IsDataDiscountLoggingEnabled *bool `json:"is_data_discount_logging_enabled,omitempty"`
	IsObservabilityBroadcastEnabled *bool `json:"is_observability_broadcast_enabled,omitempty"`
	IsObservabilityIoLoggingEnabled *bool `json:"is_observability_io_logging_enabled,omitempty"`
	Name *string `json:"name,omitempty"`
	Slug *string `json:"slug,omitempty"`
	UpdatedAt *any `json:"updated_at,omitempty"`
}

// UpdateWorkspaceCreateData is the typed request payload for UpdateWorkspace.CreateTyped.
type UpdateWorkspaceCreateData struct {
	CreatedAt string `json:"created_at"`
	CreatedBy any `json:"created_by"`
	Data any `json:"data"`
	DefaultImageModel *any `json:"default_image_model,omitempty"`
	DefaultProviderSort *any `json:"default_provider_sort,omitempty"`
	DefaultTextModel *any `json:"default_text_model,omitempty"`
	Description *any `json:"description,omitempty"`
	Id string `json:"id"`
	IoLoggingApiKeyId *any `json:"io_logging_api_key_id,omitempty"`
	IoLoggingSamplingRate *float64 `json:"io_logging_sampling_rate,omitempty"`
	IsDataDiscountLoggingEnabled *bool `json:"is_data_discount_logging_enabled,omitempty"`
	IsObservabilityBroadcastEnabled *bool `json:"is_observability_broadcast_enabled,omitempty"`
	IsObservabilityIoLoggingEnabled *bool `json:"is_observability_io_logging_enabled,omitempty"`
	Name string `json:"name"`
	Slug string `json:"slug"`
	UpdatedAt any `json:"updated_at"`
}

// UpdateWorkspaceUpdateData is the typed request payload for UpdateWorkspace.UpdateTyped.
type UpdateWorkspaceUpdateData struct {
	Id string `json:"id"`
}

// UpsertWorkspaceBudget is the typed data model for the upsert_workspace_budget entity.
type UpsertWorkspaceBudget struct {
	Data any `json:"data"`
	LimitUsd float64 `json:"limit_usd"`
}

// UpsertWorkspaceBudgetUpdateData is the typed request payload for UpsertWorkspaceBudget.UpdateTyped.
type UpsertWorkspaceBudgetUpdateData struct {
	Id string `json:"id"`
	WorkspaceId string `json:"workspace_id"`
}

// User is the typed data model for the user entity.
type User struct {
}

// Version is the typed data model for the version entity.
type Version struct {
}

// Video is the typed data model for the video entity.
type Video struct {
	AspectRatio *string `json:"aspect_ratio,omitempty"`
	CallbackUrl *string `json:"callback_url,omitempty"`
	Duration *int `json:"duration,omitempty"`
	Error *string `json:"error,omitempty"`
	FrameImage *[]any `json:"frame_image,omitempty"`
	GenerateAudio *bool `json:"generate_audio,omitempty"`
	GenerationId *string `json:"generation_id,omitempty"`
	Id string `json:"id"`
	InputReference *[]any `json:"input_reference,omitempty"`
	Model string `json:"model"`
	PollingUrl string `json:"polling_url"`
	Prompt *string `json:"prompt,omitempty"`
	Provider *map[string]any `json:"provider,omitempty"`
	Resolution *string `json:"resolution,omitempty"`
	Seed *int `json:"seed,omitempty"`
	Size *string `json:"size,omitempty"`
	Status string `json:"status"`
	UnsignedUrl *[]any `json:"unsigned_url,omitempty"`
	Usage *map[string]any `json:"usage,omitempty"`
}

// VideoLoadMatch is the typed request payload for Video.LoadTyped.
type VideoLoadMatch struct {
	Id string `json:"id"`
}

// VideoCreateData is the typed request payload for Video.CreateTyped.
type VideoCreateData struct {
	AspectRatio *string `json:"aspect_ratio,omitempty"`
	CallbackUrl *string `json:"callback_url,omitempty"`
	Duration *int `json:"duration,omitempty"`
	Error *string `json:"error,omitempty"`
	FrameImage *[]any `json:"frame_image,omitempty"`
	GenerateAudio *bool `json:"generate_audio,omitempty"`
	GenerationId *string `json:"generation_id,omitempty"`
	Id string `json:"id"`
	InputReference *[]any `json:"input_reference,omitempty"`
	Model string `json:"model"`
	PollingUrl string `json:"polling_url"`
	Prompt *string `json:"prompt,omitempty"`
	Provider *map[string]any `json:"provider,omitempty"`
	Resolution *string `json:"resolution,omitempty"`
	Seed *int `json:"seed,omitempty"`
	Size *string `json:"size,omitempty"`
	Status string `json:"status"`
	UnsignedUrl *[]any `json:"unsigned_url,omitempty"`
	Usage *map[string]any `json:"usage,omitempty"`
}

// VideoGeneration is the typed data model for the video_generation entity.
type VideoGeneration struct {
}

// VideoGenerationLoadMatch is the typed request payload for VideoGeneration.LoadTyped.
type VideoGenerationLoadMatch struct {
	Id string `json:"id"`
}

// VideoModelsList is the typed data model for the video_models_list entity.
type VideoModelsList struct {
	AllowedPassthroughParameter []any `json:"allowed_passthrough_parameter"`
	CanonicalSlug string `json:"canonical_slug"`
	Created int `json:"created"`
	Description *string `json:"description,omitempty"`
	GenerateAudio any `json:"generate_audio"`
	HuggingFaceId *any `json:"hugging_face_id,omitempty"`
	Id string `json:"id"`
	Name string `json:"name"`
	PricingSkus *any `json:"pricing_skus,omitempty"`
	Seed any `json:"seed"`
	SupportedAspectRatio any `json:"supported_aspect_ratio"`
	SupportedDuration any `json:"supported_duration"`
	SupportedFrameImage any `json:"supported_frame_image"`
	SupportedResolution any `json:"supported_resolution"`
	SupportedSize any `json:"supported_size"`
}

// VideoModelsListListMatch is the typed request payload for VideoModelsList.ListTyped.
type VideoModelsListListMatch struct {
	AllowedPassthroughParameter *[]any `json:"allowed_passthrough_parameter,omitempty"`
	CanonicalSlug *string `json:"canonical_slug,omitempty"`
	Created *int `json:"created,omitempty"`
	Description *string `json:"description,omitempty"`
	GenerateAudio *any `json:"generate_audio,omitempty"`
	HuggingFaceId *any `json:"hugging_face_id,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	PricingSkus *any `json:"pricing_skus,omitempty"`
	Seed *any `json:"seed,omitempty"`
	SupportedAspectRatio *any `json:"supported_aspect_ratio,omitempty"`
	SupportedDuration *any `json:"supported_duration,omitempty"`
	SupportedFrameImage *any `json:"supported_frame_image,omitempty"`
	SupportedResolution *any `json:"supported_resolution,omitempty"`
	SupportedSize *any `json:"supported_size,omitempty"`
}

// Workspace is the typed data model for the workspace entity.
type Workspace struct {
	Data any `json:"data"`
}

// WorkspaceLoadMatch is the typed request payload for Workspace.LoadTyped.
type WorkspaceLoadMatch struct {
	Id string `json:"id"`
}

// WorkspaceRemoveMatch is the typed request payload for Workspace.RemoveTyped.
type WorkspaceRemoveMatch struct {
	Id string `json:"id"`
}

// WorkspaceBudget is the typed data model for the workspace_budget entity.
type WorkspaceBudget struct {
}

// WorkspaceBudgetRemoveMatch is the typed request payload for WorkspaceBudget.RemoveTyped.
type WorkspaceBudgetRemoveMatch struct {
	Id string `json:"id"`
	WorkspaceId string `json:"workspace_id"`
}

// Zdr is the typed data model for the zdr entity.
type Zdr struct {
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
