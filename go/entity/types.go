// Typed models for the OpenrouterModels SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/openrouter-models-sdk/go/core"
)

// Activity is the typed data model for the activity entity.
type Activity struct {
}

// ActivityListMatch is the typed request payload for Activity.ListTyped.
type ActivityListMatch struct {
	ApiKeyHash *string `json:"api_key_hash,omitempty"`
	Date *string `json:"date,omitempty"`
	UserId *string `json:"user_id,omitempty"`
}

// ApiKey is the typed data model for the api_key entity.
type ApiKey struct {
}

// ApiKeyLoadMatch is the typed request payload for ApiKey.LoadTyped.
type ApiKeyLoadMatch struct {
	Id string `json:"id"`
}

// ApiKeyListMatch is the typed request payload for ApiKey.ListTyped.
type ApiKeyListMatch struct {
	IncludeDisabled *bool `json:"include_disabled,omitempty"`
	Offset *any `json:"offset,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// ApiKeyCreateData is the typed request payload for ApiKey.CreateTyped.
type ApiKeyCreateData struct {
	ByokUsage float64 `json:"byok_usage"`
	ByokUsageDaily float64 `json:"byok_usage_daily"`
	ByokUsageMonthly float64 `json:"byok_usage_monthly"`
	ByokUsageWeekly float64 `json:"byok_usage_weekly"`
	CreatedAt string `json:"created_at"`
	CreatorUserId any `json:"creator_user_id"`
	Disabled bool `json:"disabled"`
	ExpiresAt *any `json:"expires_at,omitempty"`
	Hash string `json:"hash"`
	Id *string `json:"id,omitempty"`
	IncludeByokInLimit bool `json:"include_byok_in_limit"`
	IsFreeTier bool `json:"is_free_tier"`
	IsManagementKey bool `json:"is_management_key"`
	IsProvisioningKey bool `json:"is_provisioning_key"`
	Label string `json:"label"`
	Limit any `json:"limit"`
	LimitRemaining any `json:"limit_remaining"`
	LimitReset any `json:"limit_reset"`
	Name string `json:"name"`
	RateLimit map[string]any `json:"rate_limit"`
	UpdatedAt any `json:"updated_at"`
	Usage float64 `json:"usage"`
	UsageDaily float64 `json:"usage_daily"`
	UsageMonthly float64 `json:"usage_monthly"`
	UsageWeekly float64 `json:"usage_weekly"`
	WorkspaceId string `json:"workspace_id"`
}

// ApiKeyUpdateData is the typed request payload for ApiKey.UpdateTyped.
type ApiKeyUpdateData struct {
	Id string `json:"id"`
	ByokUsage *float64 `json:"byok_usage,omitempty"`
	ByokUsageDaily *float64 `json:"byok_usage_daily,omitempty"`
	ByokUsageMonthly *float64 `json:"byok_usage_monthly,omitempty"`
	ByokUsageWeekly *float64 `json:"byok_usage_weekly,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatorUserId *any `json:"creator_user_id,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	ExpiresAt *any `json:"expires_at,omitempty"`
	Hash *string `json:"hash,omitempty"`
	IncludeByokInLimit *bool `json:"include_byok_in_limit,omitempty"`
	IsFreeTier *bool `json:"is_free_tier,omitempty"`
	IsManagementKey *bool `json:"is_management_key,omitempty"`
	IsProvisioningKey *bool `json:"is_provisioning_key,omitempty"`
	Label *string `json:"label,omitempty"`
	Limit *any `json:"limit,omitempty"`
	LimitRemaining *any `json:"limit_remaining,omitempty"`
	LimitReset *any `json:"limit_reset,omitempty"`
	Name *string `json:"name,omitempty"`
	RateLimit *map[string]any `json:"rate_limit,omitempty"`
	UpdatedAt *any `json:"updated_at,omitempty"`
	Usage *float64 `json:"usage,omitempty"`
	UsageDaily *float64 `json:"usage_daily,omitempty"`
	UsageMonthly *float64 `json:"usage_monthly,omitempty"`
	UsageWeekly *float64 `json:"usage_weekly,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// ApiKeyRemoveMatch is the typed request payload for ApiKey.RemoveTyped.
type ApiKeyRemoveMatch struct {
	Id string `json:"id"`
}

// AppRanking is the typed data model for the app_ranking entity.
type AppRanking struct {
}

// AppRankingListMatch is the typed request payload for AppRanking.ListTyped.
type AppRankingListMatch struct {
	Category *string `json:"category,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Offset *any `json:"offset,omitempty"`
	Sort *string `json:"sort,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	Subcategory *string `json:"subcategory,omitempty"`
}

// BetaAnalytics is the typed data model for the beta_analytics entity.
type BetaAnalytics struct {
}

// BetaAnalyticsLoadMatch is the typed request payload for BetaAnalytics.LoadTyped.
type BetaAnalyticsLoadMatch struct {
	CachedAt *float64 `json:"cachedAt,omitempty"`
	ClassifierDimensions *map[string]any `json:"classifier_dimensions,omitempty"`
	ClassifierFilters *map[string]any `json:"classifier_filters,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Dimensions *[]any `json:"dimensions,omitempty"`
	Filters *[]any `json:"filters,omitempty"`
	Granularities *[]any `json:"granularities,omitempty"`
	Granularity *string `json:"granularity,omitempty"`
	GroupLimit *int `json:"group_limit,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Metrics *[]any `json:"metrics,omitempty"`
	Operators *[]any `json:"operators,omitempty"`
	OrderBy *map[string]any `json:"order_by,omitempty"`
	TimeRange *map[string]any `json:"time_range,omitempty"`
	Warnings *[]any `json:"warnings,omitempty"`
}

// BetaAnalyticsCreateData is the typed request payload for BetaAnalytics.CreateTyped.
type BetaAnalyticsCreateData struct {
	CachedAt *float64 `json:"cachedAt,omitempty"`
	ClassifierDimensions map[string]any `json:"classifier_dimensions"`
	ClassifierFilters map[string]any `json:"classifier_filters"`
	Data []any `json:"data"`
	Dimensions []any `json:"dimensions"`
	Filters *[]any `json:"filters,omitempty"`
	Granularities []any `json:"granularities"`
	Granularity *string `json:"granularity,omitempty"`
	GroupLimit *int `json:"group_limit,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Metadata map[string]any `json:"metadata"`
	Metrics []any `json:"metrics"`
	Operators []any `json:"operators"`
	OrderBy map[string]any `json:"order_by"`
	TimeRange map[string]any `json:"time_range"`
	Warnings *[]any `json:"warnings,omitempty"`
}

// BulkAddWorkspaceMember is the typed data model for the bulk_add_workspace_member entity.
type BulkAddWorkspaceMember struct {
}

// BulkAddWorkspaceMemberCreateData is the typed request payload for BulkAddWorkspaceMember.CreateTyped.
type BulkAddWorkspaceMemberCreateData struct {
	WorkspaceId string `json:"workspace_id"`
	AddedCount int `json:"added_count"`
	Data []any `json:"data"`
	UserIds []any `json:"user_ids"`
}

// BulkAssignKey is the typed data model for the bulk_assign_key entity.
type BulkAssignKey struct {
}

// BulkAssignKeyCreateData is the typed request payload for BulkAssignKey.CreateTyped.
type BulkAssignKeyCreateData struct {
	GuardrailId string `json:"guardrail_id"`
	AssignedCount int `json:"assigned_count"`
	KeyHashes []any `json:"key_hashes"`
}

// BulkAssignMember is the typed data model for the bulk_assign_member entity.
type BulkAssignMember struct {
}

// BulkAssignMemberCreateData is the typed request payload for BulkAssignMember.CreateTyped.
type BulkAssignMemberCreateData struct {
	GuardrailId string `json:"guardrail_id"`
	AssignedCount int `json:"assigned_count"`
	MemberUserIds []any `json:"member_user_ids"`
}

// BulkRemoveWorkspaceMember is the typed data model for the bulk_remove_workspace_member entity.
type BulkRemoveWorkspaceMember struct {
}

// BulkRemoveWorkspaceMemberCreateData is the typed request payload for BulkRemoveWorkspaceMember.CreateTyped.
type BulkRemoveWorkspaceMemberCreateData struct {
	WorkspaceId string `json:"workspace_id"`
	RemovedCount int `json:"removed_count"`
	UserIds []any `json:"user_ids"`
}

// BulkUnassignKey is the typed data model for the bulk_unassign_key entity.
type BulkUnassignKey struct {
}

// BulkUnassignKeyCreateData is the typed request payload for BulkUnassignKey.CreateTyped.
type BulkUnassignKeyCreateData struct {
	GuardrailId string `json:"guardrail_id"`
	KeyHashes []any `json:"key_hashes"`
	UnassignedCount int `json:"unassigned_count"`
}

// BulkUnassignMember is the typed data model for the bulk_unassign_member entity.
type BulkUnassignMember struct {
}

// BulkUnassignMemberCreateData is the typed request payload for BulkUnassignMember.CreateTyped.
type BulkUnassignMemberCreateData struct {
	GuardrailId string `json:"guardrail_id"`
	MemberUserIds []any `json:"member_user_ids"`
	UnassignedCount int `json:"unassigned_count"`
}

// Byok is the typed data model for the byok entity.
type Byok struct {
}

// ByokLoadMatch is the typed request payload for Byok.LoadTyped.
type ByokLoadMatch struct {
	Id string `json:"id"`
}

// ByokListMatch is the typed request payload for Byok.ListTyped.
type ByokListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Offset *any `json:"offset,omitempty"`
	Provider *string `json:"provider,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// ByokCreateData is the typed request payload for Byok.CreateTyped.
type ByokCreateData struct {
	AllowedApiKeyHashes any `json:"allowed_api_key_hashes"`
	AllowedModels any `json:"allowed_models"`
	AllowedUserIds any `json:"allowed_user_ids"`
	CreatedAt string `json:"created_at"`
	Disabled bool `json:"disabled"`
	Id string `json:"id"`
	IsFallback bool `json:"is_fallback"`
	Key string `json:"key"`
	Label string `json:"label"`
	Name *any `json:"name,omitempty"`
	Provider string `json:"provider"`
	SortOrder int `json:"sort_order"`
	WorkspaceId string `json:"workspace_id"`
}

// ByokRemoveMatch is the typed request payload for Byok.RemoveTyped.
type ByokRemoveMatch struct {
	Id string `json:"id"`
}

// ChatResult is the typed data model for the chat_result entity.
type ChatResult struct {
}

// ChatResultCreateData is the typed request payload for ChatResult.CreateTyped.
type ChatResultCreateData struct {
	CacheControl map[string]any `json:"cache_control"`
	Choices []any `json:"choices"`
	Created int `json:"created"`
	Debug *map[string]any `json:"debug,omitempty"`
	FrequencyPenalty *any `json:"frequency_penalty,omitempty"`
	Id string `json:"id"`
	ImageConfig *map[string]any `json:"image_config,omitempty"`
	LogitBias *any `json:"logit_bias,omitempty"`
	Logprobs *any `json:"logprobs,omitempty"`
	MaxCompletionTokens *any `json:"max_completion_tokens,omitempty"`
	MaxTokens *any `json:"max_tokens,omitempty"`
	Messages []any `json:"messages"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	MinP *any `json:"min_p,omitempty"`
	Modalities *[]any `json:"modalities,omitempty"`
	Model string `json:"model"`
	Models *[]any `json:"models,omitempty"`
	Object string `json:"object"`
	OpenrouterMetadata map[string]any `json:"openrouter_metadata"`
	ParallelToolCalls *any `json:"parallel_tool_calls,omitempty"`
	Plugins *[]any `json:"plugins,omitempty"`
	Prediction any `json:"prediction"`
	PresencePenalty *any `json:"presence_penalty,omitempty"`
	PromptCacheKey *any `json:"prompt_cache_key,omitempty"`
	PromptCacheOptions any `json:"prompt_cache_options"`
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
	StreamOptions *any `json:"stream_options,omitempty"`
	SystemFingerprint any `json:"system_fingerprint"`
	Temperature *any `json:"temperature,omitempty"`
	ToolChoice *any `json:"tool_choice,omitempty"`
	Tools *[]any `json:"tools,omitempty"`
	TopA *any `json:"top_a,omitempty"`
	TopK *any `json:"top_k,omitempty"`
	TopLogprobs *any `json:"top_logprobs,omitempty"`
	TopP *any `json:"top_p,omitempty"`
	Trace *map[string]any `json:"trace,omitempty"`
	Usage map[string]any `json:"usage"`
	User *string `json:"user,omitempty"`
}

// Completion is the typed data model for the completion entity.
type Completion struct {
}

// CompletionCreateData is the typed request payload for Completion.CreateTyped.
type CompletionCreateData struct {
	Slug string `json:"slug"`
	CacheControl map[string]any `json:"cache_control"`
	Debug *map[string]any `json:"debug,omitempty"`
	FrequencyPenalty *any `json:"frequency_penalty,omitempty"`
	ImageConfig *map[string]any `json:"image_config,omitempty"`
	LogitBias *any `json:"logit_bias,omitempty"`
	Logprobs *any `json:"logprobs,omitempty"`
	MaxCompletionTokens *any `json:"max_completion_tokens,omitempty"`
	MaxTokens *any `json:"max_tokens,omitempty"`
	Messages []any `json:"messages"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	MinP *any `json:"min_p,omitempty"`
	Modalities *[]any `json:"modalities,omitempty"`
	Model *string `json:"model,omitempty"`
	Models *[]any `json:"models,omitempty"`
	ParallelToolCalls *any `json:"parallel_tool_calls,omitempty"`
	Plugins *[]any `json:"plugins,omitempty"`
	Prediction any `json:"prediction"`
	PresencePenalty *any `json:"presence_penalty,omitempty"`
	PromptCacheKey *any `json:"prompt_cache_key,omitempty"`
	PromptCacheOptions any `json:"prompt_cache_options"`
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
	StreamOptions *any `json:"stream_options,omitempty"`
	Temperature *any `json:"temperature,omitempty"`
	ToolChoice *any `json:"tool_choice,omitempty"`
	Tools *[]any `json:"tools,omitempty"`
	TopA *any `json:"top_a,omitempty"`
	TopK *any `json:"top_k,omitempty"`
	TopLogprobs *any `json:"top_logprobs,omitempty"`
	TopP *any `json:"top_p,omitempty"`
	Trace *map[string]any `json:"trace,omitempty"`
	User *string `json:"user,omitempty"`
}

// CreateObservabilityDestination is the typed data model for the create_observability_destination entity.
type CreateObservabilityDestination struct {
}

// CreateObservabilityDestinationCreateData is the typed request payload for CreateObservabilityDestination.CreateTyped.
type CreateObservabilityDestinationCreateData struct {
	ApiKeyHashes *any `json:"api_key_hashes,omitempty"`
	Config map[string]any `json:"config"`
	Enabled *bool `json:"enabled,omitempty"`
	FilterRules any `json:"filter_rules"`
	Name string `json:"name"`
	PrivacyMode *bool `json:"privacy_mode,omitempty"`
	SamplingRate *float64 `json:"sampling_rate,omitempty"`
	Type string `json:"type"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// Credit is the typed data model for the credit entity.
type Credit struct {
}

// CreditLoadMatch is the typed request payload for Credit.LoadTyped.
type CreditLoadMatch struct {
	TotalCredits *float64 `json:"total_credits,omitempty"`
	TotalUsage *float64 `json:"total_usage,omitempty"`
}

// CreditCreateData is the typed request payload for Credit.CreateTyped.
type CreditCreateData struct {
	TotalCredits float64 `json:"total_credits"`
	TotalUsage float64 `json:"total_usage"`
}

// Embedding is the typed data model for the embedding entity.
type Embedding struct {
}

// EmbeddingCreateData is the typed request payload for Embedding.CreateTyped.
type EmbeddingCreateData struct {
	Data []any `json:"data"`
	Dimensions *int `json:"dimensions,omitempty"`
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
}

// EndpointLoadMatch is the typed request payload for Endpoint.LoadTyped.
type EndpointLoadMatch struct {
	Author string `json:"author"`
	Slug string `json:"slug"`
}

// EndpointListMatch is the typed request payload for Endpoint.ListTyped.
type EndpointListMatch struct {
	Arch *string `json:"arch,omitempty"`
	Category *string `json:"category,omitempty"`
	Context *int `json:"context,omitempty"`
	Distillable *string `json:"distillable,omitempty"`
	InputModality *string `json:"input_modality,omitempty"`
	Limit *int `json:"limit,omitempty"`
	MaxAgeDay *any `json:"max_age_day,omitempty"`
	MaxAgenticIndex *any `json:"max_agentic_index,omitempty"`
	MaxCodingIndex *any `json:"max_coding_index,omitempty"`
	MaxIntelligenceIndex *any `json:"max_intelligence_index,omitempty"`
	MaxOutputPrice *any `json:"max_output_price,omitempty"`
	MaxPrice *any `json:"max_price,omitempty"`
	MaxToolSuccessRate *any `json:"max_tool_success_rate,omitempty"`
	MinAgeDay *any `json:"min_age_day,omitempty"`
	MinAgenticIndex *any `json:"min_agentic_index,omitempty"`
	MinCodingIndex *any `json:"min_coding_index,omitempty"`
	MinIntelligenceIndex *any `json:"min_intelligence_index,omitempty"`
	MinOutputPrice *any `json:"min_output_price,omitempty"`
	MinPrice *any `json:"min_price,omitempty"`
	MinToolSuccessRate *any `json:"min_tool_success_rate,omitempty"`
	ModelAuthor *string `json:"model_author,omitempty"`
	Offset *any `json:"offset,omitempty"`
	OutputModality *string `json:"output_modality,omitempty"`
	Provider *string `json:"provider,omitempty"`
	Q *string `json:"q,omitempty"`
	Region *string `json:"region,omitempty"`
	Sort *string `json:"sort,omitempty"`
	SupportedParameter *string `json:"supported_parameter,omitempty"`
	Zdr *string `json:"zdr,omitempty"`
}

// File is the typed data model for the file entity.
type File struct {
}

// FileLoadMatch is the typed request payload for File.LoadTyped.
type FileLoadMatch struct {
	Id string `json:"id"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// FileListMatch is the typed request payload for File.ListTyped.
type FileListMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// FileCreateData is the typed request payload for File.CreateTyped.
type FileCreateData struct {
	WorkspaceId *string `json:"workspace_id,omitempty"`
	CreatedAt string `json:"created_at"`
	Downloadable bool `json:"downloadable"`
	Filename string `json:"filename"`
	Id string `json:"id"`
	MimeType string `json:"mime_type"`
	SizeBytes int `json:"size_bytes"`
	Type string `json:"type"`
}

// FileRemoveMatch is the typed request payload for File.RemoveTyped.
type FileRemoveMatch struct {
	Id string `json:"id"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// Generation is the typed data model for the generation entity.
type Generation struct {
}

// GenerationLoadMatch is the typed request payload for Generation.LoadTyped.
type GenerationLoadMatch struct {
	Id string `json:"id"`
}

// GenerationContentData is the typed data model for the generation_content_data entity.
type GenerationContentData struct {
}

// GenerationContentDataLoadMatch is the typed request payload for GenerationContentData.LoadTyped.
type GenerationContentDataLoadMatch struct {
	Id string `json:"id"`
}

// Guardrail is the typed data model for the guardrail entity.
type Guardrail struct {
}

// GuardrailLoadMatch is the typed request payload for Guardrail.LoadTyped.
type GuardrailLoadMatch struct {
	Id string `json:"id"`
}

// GuardrailListMatch is the typed request payload for Guardrail.ListTyped.
type GuardrailListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Offset *any `json:"offset,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// GuardrailCreateData is the typed request payload for Guardrail.CreateTyped.
type GuardrailCreateData struct {
	AllowedModels *any `json:"allowed_models,omitempty"`
	AllowedProviders *any `json:"allowed_providers,omitempty"`
	ContentFilterBuiltins *any `json:"content_filter_builtins,omitempty"`
	ContentFilters *any `json:"content_filters,omitempty"`
	CreatedAt string `json:"created_at"`
	Description *any `json:"description,omitempty"`
	EnforceZdr *any `json:"enforce_zdr,omitempty"`
	EnforceZdrAnthropic *any `json:"enforce_zdr_anthropic,omitempty"`
	EnforceZdrGoogle *any `json:"enforce_zdr_google,omitempty"`
	EnforceZdrOpenai *any `json:"enforce_zdr_openai,omitempty"`
	EnforceZdrOther *any `json:"enforce_zdr_other,omitempty"`
	EnforceZdrXai *any `json:"enforce_zdr_xai,omitempty"`
	Id string `json:"id"`
	IgnoredModels *any `json:"ignored_models,omitempty"`
	IgnoredProviders *any `json:"ignored_providers,omitempty"`
	LimitUsd *any `json:"limit_usd,omitempty"`
	Name string `json:"name"`
	ResetInterval *any `json:"reset_interval,omitempty"`
	UpdatedAt *any `json:"updated_at,omitempty"`
	WorkspaceId string `json:"workspace_id"`
}

// GuardrailRemoveMatch is the typed request payload for Guardrail.RemoveTyped.
type GuardrailRemoveMatch struct {
	Id string `json:"id"`
}

// Image is the typed data model for the image entity.
type Image struct {
}

// ImageCreateData is the typed request payload for Image.CreateTyped.
type ImageCreateData struct {
	AspectRatio *string `json:"aspect_ratio,omitempty"`
	Background *string `json:"background,omitempty"`
	Created int `json:"created"`
	Data []any `json:"data"`
	InputReferences *[]any `json:"input_references,omitempty"`
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
}

// ImageModelEndpointListMatch is the typed request payload for ImageModelEndpoint.ListTyped.
type ImageModelEndpointListMatch struct {
	ModelId string `json:"model_id"`
	Slug string `json:"slug"`
}

// ImageModelListItem is the typed data model for the image_model_list_item entity.
type ImageModelListItem struct {
}

// ImageModelListItemListMatch is the typed request payload for ImageModelListItem.ListTyped.
type ImageModelListItemListMatch struct {
	Architecture *map[string]any `json:"architecture,omitempty"`
	Created *int `json:"created,omitempty"`
	Description *string `json:"description,omitempty"`
	Endpoints *string `json:"endpoints,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	SupportedParameters *map[string]any `json:"supported_parameters,omitempty"`
	SupportsStreaming *bool `json:"supports_streaming,omitempty"`
}

// Key is the typed data model for the key entity.
type Key struct {
}

// KeyListMatch is the typed request payload for Key.ListTyped.
type KeyListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Offset *any `json:"offset,omitempty"`
}

// ListObservabilityDestination is the typed data model for the list_observability_destination entity.
type ListObservabilityDestination struct {
}

// ListObservabilityDestinationListMatch is the typed request payload for ListObservabilityDestination.ListTyped.
type ListObservabilityDestinationListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Offset *any `json:"offset,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// ListPresetVersion is the typed data model for the list_preset_version entity.
type ListPresetVersion struct {
}

// ListPresetVersionListMatch is the typed request payload for ListPresetVersion.ListTyped.
type ListPresetVersionListMatch struct {
	Slug string `json:"slug"`
	Limit *int `json:"limit,omitempty"`
	Offset *any `json:"offset,omitempty"`
}

// Member is the typed data model for the member entity.
type Member struct {
}

// MemberListMatch is the typed request payload for Member.ListTyped.
type MemberListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Offset *any `json:"offset,omitempty"`
}

// Message is the typed data model for the message entity.
type Message struct {
}

// MessageCreateData is the typed request payload for Message.CreateTyped.
type MessageCreateData struct {
	CacheControl map[string]any `json:"cache_control"`
	ContextManagement *any `json:"context_management,omitempty"`
	Fallbacks *any `json:"fallbacks,omitempty"`
	MaxTokens *int `json:"max_tokens,omitempty"`
	Messages any `json:"messages"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Model string `json:"model"`
	Models *[]any `json:"models,omitempty"`
	OutputConfig *map[string]any `json:"output_config,omitempty"`
	Plugins *[]any `json:"plugins,omitempty"`
	Provider *any `json:"provider,omitempty"`
	Route *any `json:"route,omitempty"`
	ServiceTier *string `json:"service_tier,omitempty"`
	SessionId *string `json:"session_id,omitempty"`
	Speed *any `json:"speed,omitempty"`
	StopSequences *[]any `json:"stop_sequences,omitempty"`
	StopServerToolsWhen *[]any `json:"stop_server_tools_when,omitempty"`
	Stream *bool `json:"stream,omitempty"`
	System *any `json:"system,omitempty"`
	Temperature *float64 `json:"temperature,omitempty"`
	Thinking *any `json:"thinking,omitempty"`
	ToolChoice *any `json:"tool_choice,omitempty"`
	Tools *[]any `json:"tools,omitempty"`
	TopK *int `json:"top_k,omitempty"`
	TopP *float64 `json:"top_p,omitempty"`
	Trace *map[string]any `json:"trace,omitempty"`
	User *string `json:"user,omitempty"`
}

// Model is the typed data model for the model entity.
type Model struct {
}

// ModelLoadMatch is the typed request payload for Model.LoadTyped.
type ModelLoadMatch struct {
	Author string `json:"author"`
	Slug string `json:"slug"`
}

// ModelListMatch is the typed request payload for Model.ListTyped.
type ModelListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Offset *any `json:"offset,omitempty"`
}

// ModelsCount is the typed data model for the models_count entity.
type ModelsCount struct {
}

// ModelsCountLoadMatch is the typed request payload for ModelsCount.LoadTyped.
type ModelsCountLoadMatch struct {
	OutputModality *string `json:"output_modality,omitempty"`
}

// ModelsList is the typed data model for the models_list entity.
type ModelsList struct {
}

// ModelsListListMatch is the typed request payload for ModelsList.ListTyped.
type ModelsListListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Offset *any `json:"offset,omitempty"`
}

// OAuth is the typed data model for the o_auth entity.
type OAuth struct {
}

// OAuthCreateData is the typed request payload for OAuth.CreateTyped.
type OAuthCreateData struct {
	AppId int `json:"app_id"`
	CallbackUrl string `json:"callback_url"`
	Code string `json:"code"`
	CodeChallenge *string `json:"code_challenge,omitempty"`
	CodeChallengeMethod *any `json:"code_challenge_method,omitempty"`
	CodeVerifier *string `json:"code_verifier,omitempty"`
	CreatedAt string `json:"created_at"`
	ExpiresAt *any `json:"expires_at,omitempty"`
	Id string `json:"id"`
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
	Instructions *any `json:"instructions,omitempty"`
	MaxOutputTokens *any `json:"max_output_tokens,omitempty"`
	MaxToolCalls *any `json:"max_tool_calls,omitempty"`
	Metadata *any `json:"metadata,omitempty"`
	Modalities *[]any `json:"modalities,omitempty"`
	Model *string `json:"model,omitempty"`
	Models *[]any `json:"models,omitempty"`
	ParallelToolCalls *any `json:"parallel_tool_calls,omitempty"`
	Plugins *[]any `json:"plugins,omitempty"`
	PresencePenalty *any `json:"presence_penalty,omitempty"`
	PreviousResponseId *string `json:"previous_response_id,omitempty"`
	Prompt any `json:"prompt"`
	PromptCacheKey *any `json:"prompt_cache_key,omitempty"`
	PromptCacheOptions any `json:"prompt_cache_options"`
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
	ToolChoice *any `json:"tool_choice,omitempty"`
	Tools *[]any `json:"tools,omitempty"`
	TopK *int `json:"top_k,omitempty"`
	TopLogprobs *any `json:"top_logprobs,omitempty"`
	TopP *any `json:"top_p,omitempty"`
	Trace *map[string]any `json:"trace,omitempty"`
	Truncation *any `json:"truncation,omitempty"`
	User *string `json:"user,omitempty"`
}

// Organization is the typed data model for the organization entity.
type Organization struct {
}

// OrganizationListMatch is the typed request payload for Organization.ListTyped.
type OrganizationListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Offset *any `json:"offset,omitempty"`
}

// Preset is the typed data model for the preset entity.
type Preset struct {
}

// PresetLoadMatch is the typed request payload for Preset.LoadTyped.
type PresetLoadMatch struct {
	Id string `json:"id"`
}

// PresetListMatch is the typed request payload for Preset.ListTyped.
type PresetListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Offset *any `json:"offset,omitempty"`
}

// PresetVersion is the typed data model for the preset_version entity.
type PresetVersion struct {
}

// PresetVersionLoadMatch is the typed request payload for PresetVersion.LoadTyped.
type PresetVersionLoadMatch struct {
	Id string `json:"id"`
	Slug string `json:"slug"`
}

// Provider is the typed data model for the provider entity.
type Provider struct {
}

// ProviderListMatch is the typed request payload for Provider.ListTyped.
type ProviderListMatch struct {
	Datacenters *any `json:"datacenters,omitempty"`
	Headquarters *any `json:"headquarters,omitempty"`
	Name *string `json:"name,omitempty"`
	PrivacyPolicyUrl *any `json:"privacy_policy_url,omitempty"`
	Slug *string `json:"slug,omitempty"`
	StatusPageUrl *any `json:"status_page_url,omitempty"`
	TermsOfServiceUrl *any `json:"terms_of_service_url,omitempty"`
}

// RankingsDaily is the typed data model for the rankings_daily entity.
type RankingsDaily struct {
}

// RankingsDailyListMatch is the typed request payload for RankingsDaily.ListTyped.
type RankingsDailyListMatch struct {
	Category *string `json:"category,omitempty"`
	ContextBucket *string `json:"context_bucket,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	LanguageType *string `json:"language_type,omitempty"`
	Modality *string `json:"modality,omitempty"`
	Period *string `json:"period,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
}

// Rerank is the typed data model for the rerank entity.
type Rerank struct {
}

// RerankCreateData is the typed request payload for Rerank.CreateTyped.
type RerankCreateData struct {
	Documents []any `json:"documents"`
	Id *string `json:"id,omitempty"`
	Model string `json:"model"`
	Provider *string `json:"provider,omitempty"`
	Query string `json:"query"`
	Results []any `json:"results"`
	TopN *int `json:"top_n,omitempty"`
	Usage *map[string]any `json:"usage,omitempty"`
}

// Response is the typed data model for the response entity.
type Response struct {
}

// ResponseCreateData is the typed request payload for Response.CreateTyped.
type ResponseCreateData struct {
	Slug string `json:"slug"`
	Background *any `json:"background,omitempty"`
	CacheControl map[string]any `json:"cache_control"`
	Debug *map[string]any `json:"debug,omitempty"`
	FrequencyPenalty *any `json:"frequency_penalty,omitempty"`
	ImageConfig *map[string]any `json:"image_config,omitempty"`
	Include *any `json:"include,omitempty"`
	Input *any `json:"input,omitempty"`
	Instructions *any `json:"instructions,omitempty"`
	MaxOutputTokens *any `json:"max_output_tokens,omitempty"`
	MaxToolCalls *any `json:"max_tool_calls,omitempty"`
	Metadata *any `json:"metadata,omitempty"`
	Modalities *[]any `json:"modalities,omitempty"`
	Model *string `json:"model,omitempty"`
	Models *[]any `json:"models,omitempty"`
	ParallelToolCalls *any `json:"parallel_tool_calls,omitempty"`
	Plugins *[]any `json:"plugins,omitempty"`
	PresencePenalty *any `json:"presence_penalty,omitempty"`
	PreviousResponseId *string `json:"previous_response_id,omitempty"`
	Prompt any `json:"prompt"`
	PromptCacheKey *any `json:"prompt_cache_key,omitempty"`
	PromptCacheOptions any `json:"prompt_cache_options"`
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
	ToolChoice *any `json:"tool_choice,omitempty"`
	Tools *[]any `json:"tools,omitempty"`
	TopK *int `json:"top_k,omitempty"`
	TopLogprobs *any `json:"top_logprobs,omitempty"`
	TopP *any `json:"top_p,omitempty"`
	Trace *map[string]any `json:"trace,omitempty"`
	Truncation *any `json:"truncation,omitempty"`
	User *string `json:"user,omitempty"`
}

// Stt is the typed data model for the stt entity.
type Stt struct {
}

// SttCreateData is the typed request payload for Stt.CreateTyped.
type SttCreateData struct {
	Duration *float64 `json:"duration,omitempty"`
	InputAudio map[string]any `json:"input_audio"`
	Language *string `json:"language,omitempty"`
	Model string `json:"model"`
	Provider *map[string]any `json:"provider,omitempty"`
	ResponseFormat *string `json:"response_format,omitempty"`
	Segments *[]any `json:"segments,omitempty"`
	Task *string `json:"task,omitempty"`
	Temperature *float64 `json:"temperature,omitempty"`
	Text string `json:"text"`
	TimestampGranularities *[]any `json:"timestamp_granularities,omitempty"`
	Usage *map[string]any `json:"usage,omitempty"`
	Words *[]any `json:"words,omitempty"`
}

// SubmitGenerationFeedback is the typed data model for the submit_generation_feedback entity.
type SubmitGenerationFeedback struct {
}

// SubmitGenerationFeedbackCreateData is the typed request payload for SubmitGenerationFeedback.CreateTyped.
type SubmitGenerationFeedbackCreateData struct {
	Category string `json:"category"`
	Comment *string `json:"comment,omitempty"`
	GenerationId string `json:"generation_id"`
	Success bool `json:"success"`
}

// Task is the typed data model for the task entity.
type Task struct {
}

// TaskLoadMatch is the typed request payload for Task.LoadTyped.
type TaskLoadMatch struct {
	Window *string `json:"window,omitempty"`
}

// Tts is the typed data model for the tts entity.
type Tts struct {
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
}

// UnifiedBenchmarkListMatch is the typed request payload for UnifiedBenchmark.ListTyped.
type UnifiedBenchmarkListMatch struct {
	Arena *string `json:"arena,omitempty"`
	Category *string `json:"category,omitempty"`
	MaxResult *int `json:"max_result,omitempty"`
	Source *string `json:"source,omitempty"`
	TaskType *string `json:"task_type,omitempty"`
}

// UpdateByokKey is the typed data model for the update_byok_key entity.
type UpdateByokKey struct {
}

// UpdateByokKeyUpdateData is the typed request payload for UpdateByokKey.UpdateTyped.
type UpdateByokKeyUpdateData struct {
	Id string `json:"id"`
	AllowedModels *any `json:"allowed_models,omitempty"`
	AllowedUserIds *any `json:"allowed_user_ids,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	IsFallback *bool `json:"is_fallback,omitempty"`
	Key *string `json:"key,omitempty"`
	Name *any `json:"name,omitempty"`
}

// UpdateGuardrail is the typed data model for the update_guardrail entity.
type UpdateGuardrail struct {
}

// UpdateGuardrailUpdateData is the typed request payload for UpdateGuardrail.UpdateTyped.
type UpdateGuardrailUpdateData struct {
	Id string `json:"id"`
	AllowedModels *any `json:"allowed_models,omitempty"`
	AllowedProviders *any `json:"allowed_providers,omitempty"`
	ContentFilterBuiltins *any `json:"content_filter_builtins,omitempty"`
	ContentFilters *any `json:"content_filters,omitempty"`
	Description *any `json:"description,omitempty"`
	EnforceZdr *any `json:"enforce_zdr,omitempty"`
	EnforceZdrAnthropic *any `json:"enforce_zdr_anthropic,omitempty"`
	EnforceZdrGoogle *any `json:"enforce_zdr_google,omitempty"`
	EnforceZdrOpenai *any `json:"enforce_zdr_openai,omitempty"`
	EnforceZdrOther *any `json:"enforce_zdr_other,omitempty"`
	EnforceZdrXai *any `json:"enforce_zdr_xai,omitempty"`
	IgnoredModels *any `json:"ignored_models,omitempty"`
	IgnoredProviders *any `json:"ignored_providers,omitempty"`
	LimitUsd *any `json:"limit_usd,omitempty"`
	Name *string `json:"name,omitempty"`
	ResetInterval *any `json:"reset_interval,omitempty"`
}

// UpdateObservabilityDestination is the typed data model for the update_observability_destination entity.
type UpdateObservabilityDestination struct {
}

// UpdateObservabilityDestinationUpdateData is the typed request payload for UpdateObservabilityDestination.UpdateTyped.
type UpdateObservabilityDestinationUpdateData struct {
	Id string `json:"id"`
	ApiKeyHashes *any `json:"api_key_hashes,omitempty"`
	Config *map[string]any `json:"config,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	FilterRules *any `json:"filter_rules,omitempty"`
	Name *string `json:"name,omitempty"`
	PrivacyMode *bool `json:"privacy_mode,omitempty"`
	SamplingRate *float64 `json:"sampling_rate,omitempty"`
}

// UpdateWorkspace is the typed data model for the update_workspace entity.
type UpdateWorkspace struct {
}

// UpdateWorkspaceListMatch is the typed request payload for UpdateWorkspace.ListTyped.
type UpdateWorkspaceListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Offset *any `json:"offset,omitempty"`
}

// UpdateWorkspaceCreateData is the typed request payload for UpdateWorkspace.CreateTyped.
type UpdateWorkspaceCreateData struct {
	CreatedAt string `json:"created_at"`
	CreatedBy any `json:"created_by"`
	DefaultImageModel *any `json:"default_image_model,omitempty"`
	DefaultProviderSort *any `json:"default_provider_sort,omitempty"`
	DefaultTextModel *any `json:"default_text_model,omitempty"`
	Description *any `json:"description,omitempty"`
	Id string `json:"id"`
	IoLoggingApiKeyIds *any `json:"io_logging_api_key_ids,omitempty"`
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
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *any `json:"created_by,omitempty"`
	DefaultImageModel *any `json:"default_image_model,omitempty"`
	DefaultProviderSort *any `json:"default_provider_sort,omitempty"`
	DefaultTextModel *any `json:"default_text_model,omitempty"`
	Description *any `json:"description,omitempty"`
	IoLoggingApiKeyIds *any `json:"io_logging_api_key_ids,omitempty"`
	IoLoggingSamplingRate *float64 `json:"io_logging_sampling_rate,omitempty"`
	IsDataDiscountLoggingEnabled *bool `json:"is_data_discount_logging_enabled,omitempty"`
	IsObservabilityBroadcastEnabled *bool `json:"is_observability_broadcast_enabled,omitempty"`
	IsObservabilityIoLoggingEnabled *bool `json:"is_observability_io_logging_enabled,omitempty"`
	Name *string `json:"name,omitempty"`
	Slug *string `json:"slug,omitempty"`
	UpdatedAt *any `json:"updated_at,omitempty"`
}

// UpsertWorkspaceBudget is the typed data model for the upsert_workspace_budget entity.
type UpsertWorkspaceBudget struct {
}

// UpsertWorkspaceBudgetUpdateData is the typed request payload for UpsertWorkspaceBudget.UpdateTyped.
type UpsertWorkspaceBudgetUpdateData struct {
	Id string `json:"id"`
	WorkspaceId string `json:"workspace_id"`
	LimitUsd *float64 `json:"limit_usd,omitempty"`
}

// Video is the typed data model for the video entity.
type Video struct {
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
	FrameImages *[]any `json:"frame_images,omitempty"`
	GenerateAudio *bool `json:"generate_audio,omitempty"`
	GenerationId *string `json:"generation_id,omitempty"`
	Id string `json:"id"`
	InputReferences *[]any `json:"input_references,omitempty"`
	Model string `json:"model"`
	PollingUrl string `json:"polling_url"`
	Prompt *string `json:"prompt,omitempty"`
	Provider *map[string]any `json:"provider,omitempty"`
	Resolution *string `json:"resolution,omitempty"`
	Seed *int `json:"seed,omitempty"`
	Size *string `json:"size,omitempty"`
	Status string `json:"status"`
	UnsignedUrls *[]any `json:"unsigned_urls,omitempty"`
	Usage *map[string]any `json:"usage,omitempty"`
}

// VideoGeneration is the typed data model for the video_generation entity.
type VideoGeneration struct {
}

// VideoGenerationLoadMatch is the typed request payload for VideoGeneration.LoadTyped.
type VideoGenerationLoadMatch struct {
	Id string `json:"id"`
	Index *any `json:"index,omitempty"`
}

// VideoModel is the typed data model for the video_model entity.
type VideoModel struct {
}

// VideoModelListMatch is the typed request payload for VideoModel.ListTyped.
type VideoModelListMatch struct {
	AllowedPassthroughParameters *[]any `json:"allowed_passthrough_parameters,omitempty"`
	CanonicalSlug *string `json:"canonical_slug,omitempty"`
	Created *int `json:"created,omitempty"`
	Description *string `json:"description,omitempty"`
	GenerateAudio *any `json:"generate_audio,omitempty"`
	HuggingFaceId *any `json:"hugging_face_id,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	PricingSkus *any `json:"pricing_skus,omitempty"`
	Seed *any `json:"seed,omitempty"`
	SupportedAspectRatios *any `json:"supported_aspect_ratios,omitempty"`
	SupportedDurations *any `json:"supported_durations,omitempty"`
	SupportedFrameImages *any `json:"supported_frame_images,omitempty"`
	SupportedResolutions *any `json:"supported_resolutions,omitempty"`
	SupportedSizes *any `json:"supported_sizes,omitempty"`
}

// Workspace is the typed data model for the workspace entity.
type Workspace struct {
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

// WorkspaceBudgetListMatch is the typed request payload for WorkspaceBudget.ListTyped.
type WorkspaceBudgetListMatch struct {
	Id string `json:"id"`
}

// WorkspaceBudgetRemoveMatch is the typed request payload for WorkspaceBudget.RemoveTyped.
type WorkspaceBudgetRemoveMatch struct {
	Id string `json:"id"`
	WorkspaceId string `json:"workspace_id"`
}

// WorkspaceMember is the typed data model for the workspace_member entity.
type WorkspaceMember struct {
}

// WorkspaceMemberListMatch is the typed request payload for WorkspaceMember.ListTyped.
type WorkspaceMemberListMatch struct {
	Id string `json:"id"`
	Limit *int `json:"limit,omitempty"`
	Offset *any `json:"offset,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
