# frozen_string_literal: true

# Typed models for the OpenrouterModels SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Activity entity data model.
#
# @!attribute [rw] byok_usage_inference
#   @return [Float]
#
# @!attribute [rw] completion_token
#   @return [Integer]
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] endpoint_id
#   @return [String]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] model_permaslug
#   @return [String]
#
# @!attribute [rw] prompt_token
#   @return [Integer]
#
# @!attribute [rw] provider_name
#   @return [String]
#
# @!attribute [rw] reasoning_token
#   @return [Integer]
#
# @!attribute [rw] request
#   @return [Integer]
#
# @!attribute [rw] usage
#   @return [Float]
Activity = Struct.new(
  :byok_usage_inference,
  :completion_token,
  :date,
  :endpoint_id,
  :model,
  :model_permaslug,
  :prompt_token,
  :provider_name,
  :reasoning_token,
  :request,
  :usage,
  keyword_init: true
)

# Request payload for Activity#list.
#
# @!attribute [rw] byok_usage_inference
#   @return [Float, nil]
#
# @!attribute [rw] completion_token
#   @return [Integer, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] endpoint_id
#   @return [String, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] model_permaslug
#   @return [String, nil]
#
# @!attribute [rw] prompt_token
#   @return [Integer, nil]
#
# @!attribute [rw] provider_name
#   @return [String, nil]
#
# @!attribute [rw] reasoning_token
#   @return [Integer, nil]
#
# @!attribute [rw] request
#   @return [Integer, nil]
#
# @!attribute [rw] usage
#   @return [Float, nil]
ActivityListMatch = Struct.new(
  :byok_usage_inference,
  :completion_token,
  :date,
  :endpoint_id,
  :model,
  :model_permaslug,
  :prompt_token,
  :provider_name,
  :reasoning_token,
  :request,
  :usage,
  keyword_init: true
)

# Add entity data model.
class Add
end

# ApiKey entity data model.
#
# @!attribute [rw] byok_usage
#   @return [Float]
#
# @!attribute [rw] byok_usage_daily
#   @return [Float]
#
# @!attribute [rw] byok_usage_monthly
#   @return [Float]
#
# @!attribute [rw] byok_usage_weekly
#   @return [Float]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] creator_user_id
#   @return [Object, nil]
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] expires_at
#   @return [Object, nil]
#
# @!attribute [rw] hash
#   @return [String]
#
# @!attribute [rw] include_byok_in_limit
#   @return [Boolean, nil]
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Object, nil]
#
# @!attribute [rw] limit_remaining
#   @return [Object]
#
# @!attribute [rw] limit_reset
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [Object]
#
# @!attribute [rw] usage
#   @return [Float]
#
# @!attribute [rw] usage_daily
#   @return [Float]
#
# @!attribute [rw] usage_monthly
#   @return [Float]
#
# @!attribute [rw] usage_weekly
#   @return [Float]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
ApiKey = Struct.new(
  :byok_usage,
  :byok_usage_daily,
  :byok_usage_monthly,
  :byok_usage_weekly,
  :created_at,
  :creator_user_id,
  :data,
  :disabled,
  :expires_at,
  :hash,
  :include_byok_in_limit,
  :label,
  :limit,
  :limit_remaining,
  :limit_reset,
  :name,
  :updated_at,
  :usage,
  :usage_daily,
  :usage_monthly,
  :usage_weekly,
  :workspace_id,
  keyword_init: true
)

# Request payload for ApiKey#load.
#
# @!attribute [rw] id
#   @return [String, nil]
ApiKeyLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ApiKey#list.
#
# @!attribute [rw] byok_usage
#   @return [Float, nil]
#
# @!attribute [rw] byok_usage_daily
#   @return [Float, nil]
#
# @!attribute [rw] byok_usage_monthly
#   @return [Float, nil]
#
# @!attribute [rw] byok_usage_weekly
#   @return [Float, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] creator_user_id
#   @return [Object, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] expires_at
#   @return [Object, nil]
#
# @!attribute [rw] hash
#   @return [String, nil]
#
# @!attribute [rw] include_byok_in_limit
#   @return [Boolean, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Object, nil]
#
# @!attribute [rw] limit_remaining
#   @return [Object, nil]
#
# @!attribute [rw] limit_reset
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [Object, nil]
#
# @!attribute [rw] usage
#   @return [Float, nil]
#
# @!attribute [rw] usage_daily
#   @return [Float, nil]
#
# @!attribute [rw] usage_monthly
#   @return [Float, nil]
#
# @!attribute [rw] usage_weekly
#   @return [Float, nil]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
ApiKeyListMatch = Struct.new(
  :byok_usage,
  :byok_usage_daily,
  :byok_usage_monthly,
  :byok_usage_weekly,
  :created_at,
  :creator_user_id,
  :data,
  :disabled,
  :expires_at,
  :hash,
  :include_byok_in_limit,
  :label,
  :limit,
  :limit_remaining,
  :limit_reset,
  :name,
  :updated_at,
  :usage,
  :usage_daily,
  :usage_monthly,
  :usage_weekly,
  :workspace_id,
  keyword_init: true
)

# Request payload for ApiKey#create.
#
# @!attribute [rw] byok_usage
#   @return [Float]
#
# @!attribute [rw] byok_usage_daily
#   @return [Float]
#
# @!attribute [rw] byok_usage_monthly
#   @return [Float]
#
# @!attribute [rw] byok_usage_weekly
#   @return [Float]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] creator_user_id
#   @return [Object, nil]
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] expires_at
#   @return [Object, nil]
#
# @!attribute [rw] hash
#   @return [String]
#
# @!attribute [rw] include_byok_in_limit
#   @return [Boolean, nil]
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Object, nil]
#
# @!attribute [rw] limit_remaining
#   @return [Object]
#
# @!attribute [rw] limit_reset
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [Object]
#
# @!attribute [rw] usage
#   @return [Float]
#
# @!attribute [rw] usage_daily
#   @return [Float]
#
# @!attribute [rw] usage_monthly
#   @return [Float]
#
# @!attribute [rw] usage_weekly
#   @return [Float]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
ApiKeyCreateData = Struct.new(
  :byok_usage,
  :byok_usage_daily,
  :byok_usage_monthly,
  :byok_usage_weekly,
  :created_at,
  :creator_user_id,
  :data,
  :disabled,
  :expires_at,
  :hash,
  :include_byok_in_limit,
  :label,
  :limit,
  :limit_remaining,
  :limit_reset,
  :name,
  :updated_at,
  :usage,
  :usage_daily,
  :usage_monthly,
  :usage_weekly,
  :workspace_id,
  keyword_init: true
)

# Request payload for ApiKey#update.
#
# @!attribute [rw] id
#   @return [String]
ApiKeyUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ApiKey#remove.
#
# @!attribute [rw] id
#   @return [String]
ApiKeyRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# AppRanking entity data model.
#
# @!attribute [rw] app_id
#   @return [Integer]
#
# @!attribute [rw] app_name
#   @return [String]
#
# @!attribute [rw] rank
#   @return [Integer]
#
# @!attribute [rw] total_request
#   @return [Integer]
#
# @!attribute [rw] total_token
#   @return [String]
AppRanking = Struct.new(
  :app_id,
  :app_name,
  :rank,
  :total_request,
  :total_token,
  keyword_init: true
)

# Request payload for AppRanking#list.
#
# @!attribute [rw] app_id
#   @return [Integer, nil]
#
# @!attribute [rw] app_name
#   @return [String, nil]
#
# @!attribute [rw] rank
#   @return [Integer, nil]
#
# @!attribute [rw] total_request
#   @return [Integer, nil]
#
# @!attribute [rw] total_token
#   @return [String, nil]
AppRankingListMatch = Struct.new(
  :app_id,
  :app_name,
  :rank,
  :total_request,
  :total_token,
  keyword_init: true
)

# Benchmark entity data model.
class Benchmark
end

# BetaAnalytics entity data model.
#
# @!attribute [rw] classifier_dimension
#   @return [Hash]
#
# @!attribute [rw] classifier_filter
#   @return [Hash]
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] dimension
#   @return [Array, nil]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] granularity
#   @return [String, nil]
#
# @!attribute [rw] group_limit
#   @return [Integer, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] metric
#   @return [Array]
#
# @!attribute [rw] order_by
#   @return [Hash]
#
# @!attribute [rw] time_range
#   @return [Hash]
BetaAnalytics = Struct.new(
  :classifier_dimension,
  :classifier_filter,
  :data,
  :dimension,
  :filter,
  :granularity,
  :group_limit,
  :limit,
  :metric,
  :order_by,
  :time_range,
  keyword_init: true
)

# Request payload for BetaAnalytics#load.
#
# @!attribute [rw] classifier_dimension
#   @return [Hash, nil]
#
# @!attribute [rw] classifier_filter
#   @return [Hash, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] dimension
#   @return [Array, nil]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] granularity
#   @return [String, nil]
#
# @!attribute [rw] group_limit
#   @return [Integer, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] metric
#   @return [Array, nil]
#
# @!attribute [rw] order_by
#   @return [Hash, nil]
#
# @!attribute [rw] time_range
#   @return [Hash, nil]
BetaAnalyticsLoadMatch = Struct.new(
  :classifier_dimension,
  :classifier_filter,
  :data,
  :dimension,
  :filter,
  :granularity,
  :group_limit,
  :limit,
  :metric,
  :order_by,
  :time_range,
  keyword_init: true
)

# Request payload for BetaAnalytics#create.
#
# @!attribute [rw] classifier_dimension
#   @return [Hash]
#
# @!attribute [rw] classifier_filter
#   @return [Hash]
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] dimension
#   @return [Array, nil]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] granularity
#   @return [String, nil]
#
# @!attribute [rw] group_limit
#   @return [Integer, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] metric
#   @return [Array]
#
# @!attribute [rw] order_by
#   @return [Hash]
#
# @!attribute [rw] time_range
#   @return [Hash]
BetaAnalyticsCreateData = Struct.new(
  :classifier_dimension,
  :classifier_filter,
  :data,
  :dimension,
  :filter,
  :granularity,
  :group_limit,
  :limit,
  :metric,
  :order_by,
  :time_range,
  keyword_init: true
)

# Budget entity data model.
class Budget
end

# BulkAddWorkspaceMember entity data model.
#
# @!attribute [rw] added_count
#   @return [Integer]
#
# @!attribute [rw] data
#   @return [Array]
#
# @!attribute [rw] user_id
#   @return [Array]
BulkAddWorkspaceMember = Struct.new(
  :added_count,
  :data,
  :user_id,
  keyword_init: true
)

# Request payload for BulkAddWorkspaceMember#create.
#
# @!attribute [rw] workspace_id
#   @return [String]
BulkAddWorkspaceMemberCreateData = Struct.new(
  :workspace_id,
  keyword_init: true
)

# BulkAssignKey entity data model.
#
# @!attribute [rw] assigned_count
#   @return [Integer]
#
# @!attribute [rw] key_hash
#   @return [Array]
BulkAssignKey = Struct.new(
  :assigned_count,
  :key_hash,
  keyword_init: true
)

# Request payload for BulkAssignKey#create.
#
# @!attribute [rw] guardrail_id
#   @return [String]
BulkAssignKeyCreateData = Struct.new(
  :guardrail_id,
  keyword_init: true
)

# BulkAssignMember entity data model.
#
# @!attribute [rw] assigned_count
#   @return [Integer]
#
# @!attribute [rw] member_user_id
#   @return [Array]
BulkAssignMember = Struct.new(
  :assigned_count,
  :member_user_id,
  keyword_init: true
)

# Request payload for BulkAssignMember#create.
#
# @!attribute [rw] guardrail_id
#   @return [String]
BulkAssignMemberCreateData = Struct.new(
  :guardrail_id,
  keyword_init: true
)

# BulkRemoveWorkspaceMember entity data model.
#
# @!attribute [rw] removed_count
#   @return [Integer]
#
# @!attribute [rw] user_id
#   @return [Array]
BulkRemoveWorkspaceMember = Struct.new(
  :removed_count,
  :user_id,
  keyword_init: true
)

# Request payload for BulkRemoveWorkspaceMember#create.
#
# @!attribute [rw] workspace_id
#   @return [String]
BulkRemoveWorkspaceMemberCreateData = Struct.new(
  :workspace_id,
  keyword_init: true
)

# BulkUnassignKey entity data model.
#
# @!attribute [rw] key_hash
#   @return [Array]
#
# @!attribute [rw] unassigned_count
#   @return [Integer]
BulkUnassignKey = Struct.new(
  :key_hash,
  :unassigned_count,
  keyword_init: true
)

# Request payload for BulkUnassignKey#create.
#
# @!attribute [rw] guardrail_id
#   @return [String]
BulkUnassignKeyCreateData = Struct.new(
  :guardrail_id,
  keyword_init: true
)

# BulkUnassignMember entity data model.
#
# @!attribute [rw] member_user_id
#   @return [Array]
#
# @!attribute [rw] unassigned_count
#   @return [Integer]
BulkUnassignMember = Struct.new(
  :member_user_id,
  :unassigned_count,
  keyword_init: true
)

# Request payload for BulkUnassignMember#create.
#
# @!attribute [rw] guardrail_id
#   @return [String]
BulkUnassignMemberCreateData = Struct.new(
  :guardrail_id,
  keyword_init: true
)

# Byok entity data model.
#
# @!attribute [rw] allowed_api_key_hash
#   @return [Object]
#
# @!attribute [rw] allowed_model
#   @return [Object, nil]
#
# @!attribute [rw] allowed_user_id
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] data
#   @return [Object]
#
# @!attribute [rw] disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_fallback
#   @return [Boolean, nil]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] name
#   @return [Object, nil]
#
# @!attribute [rw] provider
#   @return [String]
#
# @!attribute [rw] sort_order
#   @return [Integer]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
Byok = Struct.new(
  :allowed_api_key_hash,
  :allowed_model,
  :allowed_user_id,
  :created_at,
  :data,
  :disabled,
  :id,
  :is_fallback,
  :key,
  :label,
  :name,
  :provider,
  :sort_order,
  :workspace_id,
  keyword_init: true
)

# Request payload for Byok#load.
#
# @!attribute [rw] id
#   @return [String]
ByokLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Byok#list.
#
# @!attribute [rw] allowed_api_key_hash
#   @return [Object, nil]
#
# @!attribute [rw] allowed_model
#   @return [Object, nil]
#
# @!attribute [rw] allowed_user_id
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Object, nil]
#
# @!attribute [rw] disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_fallback
#   @return [Boolean, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [Object, nil]
#
# @!attribute [rw] provider
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [Integer, nil]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
ByokListMatch = Struct.new(
  :allowed_api_key_hash,
  :allowed_model,
  :allowed_user_id,
  :created_at,
  :data,
  :disabled,
  :id,
  :is_fallback,
  :key,
  :label,
  :name,
  :provider,
  :sort_order,
  :workspace_id,
  keyword_init: true
)

# Request payload for Byok#create.
#
# @!attribute [rw] allowed_api_key_hash
#   @return [Object]
#
# @!attribute [rw] allowed_model
#   @return [Object, nil]
#
# @!attribute [rw] allowed_user_id
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] data
#   @return [Object]
#
# @!attribute [rw] disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_fallback
#   @return [Boolean, nil]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] name
#   @return [Object, nil]
#
# @!attribute [rw] provider
#   @return [String]
#
# @!attribute [rw] sort_order
#   @return [Integer]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
ByokCreateData = Struct.new(
  :allowed_api_key_hash,
  :allowed_model,
  :allowed_user_id,
  :created_at,
  :data,
  :disabled,
  :id,
  :is_fallback,
  :key,
  :label,
  :name,
  :provider,
  :sort_order,
  :workspace_id,
  keyword_init: true
)

# Request payload for Byok#remove.
#
# @!attribute [rw] id
#   @return [String]
ByokRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# ChatResult entity data model.
#
# @!attribute [rw] cache_control
#   @return [Hash]
#
# @!attribute [rw] choice
#   @return [Array]
#
# @!attribute [rw] created
#   @return [Integer]
#
# @!attribute [rw] debug
#   @return [Hash, nil]
#
# @!attribute [rw] frequency_penalty
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] image_config
#   @return [Hash, nil]
#
# @!attribute [rw] logit_bia
#   @return [Object, nil]
#
# @!attribute [rw] logprob
#   @return [Object, nil]
#
# @!attribute [rw] max_completion_token
#   @return [Object, nil]
#
# @!attribute [rw] max_token
#   @return [Object, nil]
#
# @!attribute [rw] message
#   @return [Array]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] min_p
#   @return [Object, nil]
#
# @!attribute [rw] modality
#   @return [Array, nil]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] object
#   @return [String]
#
# @!attribute [rw] openrouter_metadata
#   @return [Hash]
#
# @!attribute [rw] parallel_tool_call
#   @return [Object, nil]
#
# @!attribute [rw] plugin
#   @return [Array, nil]
#
# @!attribute [rw] prediction
#   @return [Object]
#
# @!attribute [rw] presence_penalty
#   @return [Object, nil]
#
# @!attribute [rw] prompt_cache_key
#   @return [Object, nil]
#
# @!attribute [rw] prompt_cache_option
#   @return [Object]
#
# @!attribute [rw] provider
#   @return [Object, nil]
#
# @!attribute [rw] reasoning
#   @return [Hash, nil]
#
# @!attribute [rw] reasoning_effort
#   @return [Object, nil]
#
# @!attribute [rw] repetition_penalty
#   @return [Object, nil]
#
# @!attribute [rw] response_format
#   @return [Object, nil]
#
# @!attribute [rw] route
#   @return [Object, nil]
#
# @!attribute [rw] seed
#   @return [Object, nil]
#
# @!attribute [rw] service_tier
#   @return [Object, nil]
#
# @!attribute [rw] session_id
#   @return [String, nil]
#
# @!attribute [rw] stop
#   @return [Object, nil]
#
# @!attribute [rw] stop_server_tools_when
#   @return [Array, nil]
#
# @!attribute [rw] stream
#   @return [Boolean, nil]
#
# @!attribute [rw] stream_option
#   @return [Object, nil]
#
# @!attribute [rw] system_fingerprint
#   @return [Object]
#
# @!attribute [rw] temperature
#   @return [Object, nil]
#
# @!attribute [rw] tool
#   @return [Array, nil]
#
# @!attribute [rw] tool_choice
#   @return [Object, nil]
#
# @!attribute [rw] top_a
#   @return [Object, nil]
#
# @!attribute [rw] top_k
#   @return [Object, nil]
#
# @!attribute [rw] top_logprob
#   @return [Object, nil]
#
# @!attribute [rw] top_p
#   @return [Object, nil]
#
# @!attribute [rw] trace
#   @return [Hash, nil]
#
# @!attribute [rw] usage
#   @return [Hash]
#
# @!attribute [rw] user
#   @return [String, nil]
ChatResult = Struct.new(
  :cache_control,
  :choice,
  :created,
  :debug,
  :frequency_penalty,
  :id,
  :image_config,
  :logit_bia,
  :logprob,
  :max_completion_token,
  :max_token,
  :message,
  :metadata,
  :min_p,
  :modality,
  :model,
  :object,
  :openrouter_metadata,
  :parallel_tool_call,
  :plugin,
  :prediction,
  :presence_penalty,
  :prompt_cache_key,
  :prompt_cache_option,
  :provider,
  :reasoning,
  :reasoning_effort,
  :repetition_penalty,
  :response_format,
  :route,
  :seed,
  :service_tier,
  :session_id,
  :stop,
  :stop_server_tools_when,
  :stream,
  :stream_option,
  :system_fingerprint,
  :temperature,
  :tool,
  :tool_choice,
  :top_a,
  :top_k,
  :top_logprob,
  :top_p,
  :trace,
  :usage,
  :user,
  keyword_init: true
)

# Request payload for ChatResult#create.
#
# @!attribute [rw] cache_control
#   @return [Hash]
#
# @!attribute [rw] choice
#   @return [Array]
#
# @!attribute [rw] created
#   @return [Integer]
#
# @!attribute [rw] debug
#   @return [Hash, nil]
#
# @!attribute [rw] frequency_penalty
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] image_config
#   @return [Hash, nil]
#
# @!attribute [rw] logit_bia
#   @return [Object, nil]
#
# @!attribute [rw] logprob
#   @return [Object, nil]
#
# @!attribute [rw] max_completion_token
#   @return [Object, nil]
#
# @!attribute [rw] max_token
#   @return [Object, nil]
#
# @!attribute [rw] message
#   @return [Array]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] min_p
#   @return [Object, nil]
#
# @!attribute [rw] modality
#   @return [Array, nil]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] object
#   @return [String]
#
# @!attribute [rw] openrouter_metadata
#   @return [Hash]
#
# @!attribute [rw] parallel_tool_call
#   @return [Object, nil]
#
# @!attribute [rw] plugin
#   @return [Array, nil]
#
# @!attribute [rw] prediction
#   @return [Object]
#
# @!attribute [rw] presence_penalty
#   @return [Object, nil]
#
# @!attribute [rw] prompt_cache_key
#   @return [Object, nil]
#
# @!attribute [rw] prompt_cache_option
#   @return [Object]
#
# @!attribute [rw] provider
#   @return [Object, nil]
#
# @!attribute [rw] reasoning
#   @return [Hash, nil]
#
# @!attribute [rw] reasoning_effort
#   @return [Object, nil]
#
# @!attribute [rw] repetition_penalty
#   @return [Object, nil]
#
# @!attribute [rw] response_format
#   @return [Object, nil]
#
# @!attribute [rw] route
#   @return [Object, nil]
#
# @!attribute [rw] seed
#   @return [Object, nil]
#
# @!attribute [rw] service_tier
#   @return [Object, nil]
#
# @!attribute [rw] session_id
#   @return [String, nil]
#
# @!attribute [rw] stop
#   @return [Object, nil]
#
# @!attribute [rw] stop_server_tools_when
#   @return [Array, nil]
#
# @!attribute [rw] stream
#   @return [Boolean, nil]
#
# @!attribute [rw] stream_option
#   @return [Object, nil]
#
# @!attribute [rw] system_fingerprint
#   @return [Object]
#
# @!attribute [rw] temperature
#   @return [Object, nil]
#
# @!attribute [rw] tool
#   @return [Array, nil]
#
# @!attribute [rw] tool_choice
#   @return [Object, nil]
#
# @!attribute [rw] top_a
#   @return [Object, nil]
#
# @!attribute [rw] top_k
#   @return [Object, nil]
#
# @!attribute [rw] top_logprob
#   @return [Object, nil]
#
# @!attribute [rw] top_p
#   @return [Object, nil]
#
# @!attribute [rw] trace
#   @return [Hash, nil]
#
# @!attribute [rw] usage
#   @return [Hash]
#
# @!attribute [rw] user
#   @return [String, nil]
ChatResultCreateData = Struct.new(
  :cache_control,
  :choice,
  :created,
  :debug,
  :frequency_penalty,
  :id,
  :image_config,
  :logit_bia,
  :logprob,
  :max_completion_token,
  :max_token,
  :message,
  :metadata,
  :min_p,
  :modality,
  :model,
  :object,
  :openrouter_metadata,
  :parallel_tool_call,
  :plugin,
  :prediction,
  :presence_penalty,
  :prompt_cache_key,
  :prompt_cache_option,
  :provider,
  :reasoning,
  :reasoning_effort,
  :repetition_penalty,
  :response_format,
  :route,
  :seed,
  :service_tier,
  :session_id,
  :stop,
  :stop_server_tools_when,
  :stream,
  :stream_option,
  :system_fingerprint,
  :temperature,
  :tool,
  :tool_choice,
  :top_a,
  :top_k,
  :top_logprob,
  :top_p,
  :trace,
  :usage,
  :user,
  keyword_init: true
)

# Code entity data model.
class Code
end

# Coinbase entity data model.
class Coinbase
end

# Completion entity data model.
class Completion
end

# Content entity data model.
class Content
end

# Count entity data model.
class Count
end

# CreateByokKey entity data model.
class CreateByokKey
end

# CreateGuardrail entity data model.
class CreateGuardrail
end

# CreateObservabilityDestination entity data model.
#
# @!attribute [rw] api_key_hash
#   @return [Object, nil]
#
# @!attribute [rw] config
#   @return [Hash]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] filter_rule
#   @return [Object]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] privacy_mode
#   @return [Boolean, nil]
#
# @!attribute [rw] sampling_rate
#   @return [Float, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
CreateObservabilityDestination = Struct.new(
  :api_key_hash,
  :config,
  :enabled,
  :filter_rule,
  :name,
  :privacy_mode,
  :sampling_rate,
  :type,
  :workspace_id,
  keyword_init: true
)

# Request payload for CreateObservabilityDestination#create.
#
# @!attribute [rw] api_key_hash
#   @return [Object, nil]
#
# @!attribute [rw] config
#   @return [Hash]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] filter_rule
#   @return [Object]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] privacy_mode
#   @return [Boolean, nil]
#
# @!attribute [rw] sampling_rate
#   @return [Float, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
CreateObservabilityDestinationCreateData = Struct.new(
  :api_key_hash,
  :config,
  :enabled,
  :filter_rule,
  :name,
  :privacy_mode,
  :sampling_rate,
  :type,
  :workspace_id,
  keyword_init: true
)

# CreatePresetFromInference entity data model.
#
# @!attribute [rw] background
#   @return [Object, nil]
#
# @!attribute [rw] cache_control
#   @return [Hash]
#
# @!attribute [rw] context_management
#   @return [Object, nil]
#
# @!attribute [rw] data
#   @return [Object]
#
# @!attribute [rw] debug
#   @return [Hash, nil]
#
# @!attribute [rw] fallback
#   @return [Object, nil]
#
# @!attribute [rw] frequency_penalty
#   @return [Object, nil]
#
# @!attribute [rw] image_config
#   @return [Hash, nil]
#
# @!attribute [rw] include
#   @return [Object, nil]
#
# @!attribute [rw] input
#   @return [Object, nil]
#
# @!attribute [rw] instruction
#   @return [Object, nil]
#
# @!attribute [rw] logit_bia
#   @return [Object, nil]
#
# @!attribute [rw] logprob
#   @return [Object, nil]
#
# @!attribute [rw] max_completion_token
#   @return [Object, nil]
#
# @!attribute [rw] max_output_token
#   @return [Object, nil]
#
# @!attribute [rw] max_token
#   @return [Object, nil]
#
# @!attribute [rw] max_tool_call
#   @return [Object, nil]
#
# @!attribute [rw] message
#   @return [Array]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] min_p
#   @return [Object, nil]
#
# @!attribute [rw] modality
#   @return [Array, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] output_config
#   @return [Hash, nil]
#
# @!attribute [rw] parallel_tool_call
#   @return [Object, nil]
#
# @!attribute [rw] plugin
#   @return [Array, nil]
#
# @!attribute [rw] prediction
#   @return [Object]
#
# @!attribute [rw] presence_penalty
#   @return [Object, nil]
#
# @!attribute [rw] previous_response_id
#   @return [String, nil]
#
# @!attribute [rw] prompt
#   @return [Object]
#
# @!attribute [rw] prompt_cache_key
#   @return [Object, nil]
#
# @!attribute [rw] prompt_cache_option
#   @return [Object]
#
# @!attribute [rw] provider
#   @return [Object, nil]
#
# @!attribute [rw] reasoning
#   @return [Hash, nil]
#
# @!attribute [rw] reasoning_effort
#   @return [Object, nil]
#
# @!attribute [rw] repetition_penalty
#   @return [Object, nil]
#
# @!attribute [rw] response_format
#   @return [Object, nil]
#
# @!attribute [rw] route
#   @return [Object, nil]
#
# @!attribute [rw] safety_identifier
#   @return [Object, nil]
#
# @!attribute [rw] seed
#   @return [Object, nil]
#
# @!attribute [rw] service_tier
#   @return [Object, nil]
#
# @!attribute [rw] session_id
#   @return [String, nil]
#
# @!attribute [rw] speed
#   @return [Object, nil]
#
# @!attribute [rw] stop
#   @return [Object, nil]
#
# @!attribute [rw] stop_sequence
#   @return [Array, nil]
#
# @!attribute [rw] stop_server_tools_when
#   @return [Array, nil]
#
# @!attribute [rw] store
#   @return [Boolean, nil]
#
# @!attribute [rw] stream
#   @return [Boolean, nil]
#
# @!attribute [rw] stream_option
#   @return [Object, nil]
#
# @!attribute [rw] system
#   @return [Object, nil]
#
# @!attribute [rw] temperature
#   @return [Object, nil]
#
# @!attribute [rw] text
#   @return [Object, nil]
#
# @!attribute [rw] thinking
#   @return [Object, nil]
#
# @!attribute [rw] tool
#   @return [Array, nil]
#
# @!attribute [rw] tool_choice
#   @return [Object, nil]
#
# @!attribute [rw] top_a
#   @return [Object, nil]
#
# @!attribute [rw] top_k
#   @return [Object, nil]
#
# @!attribute [rw] top_logprob
#   @return [Object, nil]
#
# @!attribute [rw] top_p
#   @return [Object, nil]
#
# @!attribute [rw] trace
#   @return [Hash, nil]
#
# @!attribute [rw] truncation
#   @return [Object, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
CreatePresetFromInference = Struct.new(
  :background,
  :cache_control,
  :context_management,
  :data,
  :debug,
  :fallback,
  :frequency_penalty,
  :image_config,
  :include,
  :input,
  :instruction,
  :logit_bia,
  :logprob,
  :max_completion_token,
  :max_output_token,
  :max_token,
  :max_tool_call,
  :message,
  :metadata,
  :min_p,
  :modality,
  :model,
  :output_config,
  :parallel_tool_call,
  :plugin,
  :prediction,
  :presence_penalty,
  :previous_response_id,
  :prompt,
  :prompt_cache_key,
  :prompt_cache_option,
  :provider,
  :reasoning,
  :reasoning_effort,
  :repetition_penalty,
  :response_format,
  :route,
  :safety_identifier,
  :seed,
  :service_tier,
  :session_id,
  :speed,
  :stop,
  :stop_sequence,
  :stop_server_tools_when,
  :store,
  :stream,
  :stream_option,
  :system,
  :temperature,
  :text,
  :thinking,
  :tool,
  :tool_choice,
  :top_a,
  :top_k,
  :top_logprob,
  :top_p,
  :trace,
  :truncation,
  :user,
  keyword_init: true
)

# Request payload for CreatePresetFromInference#create.
#
# @!attribute [rw] slug
#   @return [String]
CreatePresetFromInferenceCreateData = Struct.new(
  :slug,
  keyword_init: true
)

# CreateWorkspace entity data model.
class CreateWorkspace
end

# Credit entity data model.
#
# @!attribute [rw] data
#   @return [Hash]
Credit = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for Credit#load.
#
# @!attribute [rw] data
#   @return [Hash, nil]
CreditLoadMatch = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for Credit#create.
#
# @!attribute [rw] data
#   @return [Hash]
CreditCreateData = Struct.new(
  :data,
  keyword_init: true
)

# Destination entity data model.
class Destination
end

# Embedding entity data model.
#
# @!attribute [rw] data
#   @return [Array]
#
# @!attribute [rw] dimension
#   @return [Integer, nil]
#
# @!attribute [rw] encoding_format
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] input
#   @return [Object]
#
# @!attribute [rw] input_type
#   @return [String, nil]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] object
#   @return [String]
#
# @!attribute [rw] provider
#   @return [Object, nil]
#
# @!attribute [rw] usage
#   @return [Hash]
#
# @!attribute [rw] user
#   @return [String, nil]
Embedding = Struct.new(
  :data,
  :dimension,
  :encoding_format,
  :id,
  :input,
  :input_type,
  :model,
  :object,
  :provider,
  :usage,
  :user,
  keyword_init: true
)

# Request payload for Embedding#create.
#
# @!attribute [rw] data
#   @return [Array]
#
# @!attribute [rw] dimension
#   @return [Integer, nil]
#
# @!attribute [rw] encoding_format
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] input
#   @return [Object]
#
# @!attribute [rw] input_type
#   @return [String, nil]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] object
#   @return [String]
#
# @!attribute [rw] provider
#   @return [Object, nil]
#
# @!attribute [rw] usage
#   @return [Hash]
#
# @!attribute [rw] user
#   @return [String, nil]
EmbeddingCreateData = Struct.new(
  :data,
  :dimension,
  :encoding_format,
  :id,
  :input,
  :input_type,
  :model,
  :object,
  :provider,
  :usage,
  :user,
  keyword_init: true
)

# Endpoint entity data model.
#
# @!attribute [rw] architecture
#   @return [Hash]
#
# @!attribute [rw] benchmark
#   @return [Hash]
#
# @!attribute [rw] canonical_slug
#   @return [String]
#
# @!attribute [rw] context_length
#   @return [Object]
#
# @!attribute [rw] created
#   @return [Integer]
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] default_parameter
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expiration_date
#   @return [Object, nil]
#
# @!attribute [rw] hugging_face_id
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] knowledge_cutoff
#   @return [Object, nil]
#
# @!attribute [rw] latency_last_30m
#   @return [Object]
#
# @!attribute [rw] link
#   @return [Hash]
#
# @!attribute [rw] max_completion_token
#   @return [Object]
#
# @!attribute [rw] max_prompt_token
#   @return [Object]
#
# @!attribute [rw] model_id
#   @return [String]
#
# @!attribute [rw] model_name
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] per_request_limit
#   @return [Object]
#
# @!attribute [rw] pricing
#   @return [Hash]
#
# @!attribute [rw] provider_name
#   @return [String]
#
# @!attribute [rw] quantization
#   @return [Object]
#
# @!attribute [rw] reasoning
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [Integer, nil]
#
# @!attribute [rw] supported_parameter
#   @return [Array]
#
# @!attribute [rw] supported_voice
#   @return [Object]
#
# @!attribute [rw] supports_implicit_caching
#   @return [Boolean]
#
# @!attribute [rw] tag
#   @return [String]
#
# @!attribute [rw] throughput_last_30m
#   @return [Object]
#
# @!attribute [rw] top_provider
#   @return [Hash]
#
# @!attribute [rw] uptime_last_1d
#   @return [Object]
#
# @!attribute [rw] uptime_last_30m
#   @return [Object]
#
# @!attribute [rw] uptime_last_5m
#   @return [Object]
Endpoint = Struct.new(
  :architecture,
  :benchmark,
  :canonical_slug,
  :context_length,
  :created,
  :data,
  :default_parameter,
  :description,
  :expiration_date,
  :hugging_face_id,
  :id,
  :knowledge_cutoff,
  :latency_last_30m,
  :link,
  :max_completion_token,
  :max_prompt_token,
  :model_id,
  :model_name,
  :name,
  :per_request_limit,
  :pricing,
  :provider_name,
  :quantization,
  :reasoning,
  :status,
  :supported_parameter,
  :supported_voice,
  :supports_implicit_caching,
  :tag,
  :throughput_last_30m,
  :top_provider,
  :uptime_last_1d,
  :uptime_last_30m,
  :uptime_last_5m,
  keyword_init: true
)

# Request payload for Endpoint#load.
#
# @!attribute [rw] author
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String]
EndpointLoadMatch = Struct.new(
  :author,
  :slug,
  keyword_init: true
)

# Request payload for Endpoint#list.
#
# @!attribute [rw] architecture
#   @return [Hash, nil]
#
# @!attribute [rw] benchmark
#   @return [Hash, nil]
#
# @!attribute [rw] canonical_slug
#   @return [String, nil]
#
# @!attribute [rw] context_length
#   @return [Object, nil]
#
# @!attribute [rw] created
#   @return [Integer, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] default_parameter
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expiration_date
#   @return [Object, nil]
#
# @!attribute [rw] hugging_face_id
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] knowledge_cutoff
#   @return [Object, nil]
#
# @!attribute [rw] latency_last_30m
#   @return [Object, nil]
#
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] max_completion_token
#   @return [Object, nil]
#
# @!attribute [rw] max_prompt_token
#   @return [Object, nil]
#
# @!attribute [rw] model_id
#   @return [String, nil]
#
# @!attribute [rw] model_name
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] per_request_limit
#   @return [Object, nil]
#
# @!attribute [rw] pricing
#   @return [Hash, nil]
#
# @!attribute [rw] provider_name
#   @return [String, nil]
#
# @!attribute [rw] quantization
#   @return [Object, nil]
#
# @!attribute [rw] reasoning
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [Integer, nil]
#
# @!attribute [rw] supported_parameter
#   @return [Array, nil]
#
# @!attribute [rw] supported_voice
#   @return [Object, nil]
#
# @!attribute [rw] supports_implicit_caching
#   @return [Boolean, nil]
#
# @!attribute [rw] tag
#   @return [String, nil]
#
# @!attribute [rw] throughput_last_30m
#   @return [Object, nil]
#
# @!attribute [rw] top_provider
#   @return [Hash, nil]
#
# @!attribute [rw] uptime_last_1d
#   @return [Object, nil]
#
# @!attribute [rw] uptime_last_30m
#   @return [Object, nil]
#
# @!attribute [rw] uptime_last_5m
#   @return [Object, nil]
EndpointListMatch = Struct.new(
  :architecture,
  :benchmark,
  :canonical_slug,
  :context_length,
  :created,
  :data,
  :default_parameter,
  :description,
  :expiration_date,
  :hugging_face_id,
  :id,
  :knowledge_cutoff,
  :latency_last_30m,
  :link,
  :max_completion_token,
  :max_prompt_token,
  :model_id,
  :model_name,
  :name,
  :per_request_limit,
  :pricing,
  :provider_name,
  :quantization,
  :reasoning,
  :status,
  :supported_parameter,
  :supported_voice,
  :supports_implicit_caching,
  :tag,
  :throughput_last_30m,
  :top_provider,
  :uptime_last_1d,
  :uptime_last_30m,
  :uptime_last_5m,
  keyword_init: true
)

# Feedback entity data model.
class Feedback
end

# File entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] downloadable
#   @return [Boolean]
#
# @!attribute [rw] filename
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] mime_type
#   @return [String]
#
# @!attribute [rw] size_byte
#   @return [Integer]
#
# @!attribute [rw] type
#   @return [String]
File = Struct.new(
  :created_at,
  :downloadable,
  :filename,
  :id,
  :mime_type,
  :size_byte,
  :type,
  keyword_init: true
)

# Request payload for File#load.
#
# @!attribute [rw] id
#   @return [String]
FileLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for File#list.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] downloadable
#   @return [Boolean, nil]
#
# @!attribute [rw] filename
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] mime_type
#   @return [String, nil]
#
# @!attribute [rw] size_byte
#   @return [Integer, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
FileListMatch = Struct.new(
  :created_at,
  :downloadable,
  :filename,
  :id,
  :mime_type,
  :size_byte,
  :type,
  keyword_init: true
)

# Request payload for File#create.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] downloadable
#   @return [Boolean]
#
# @!attribute [rw] filename
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] mime_type
#   @return [String]
#
# @!attribute [rw] size_byte
#   @return [Integer]
#
# @!attribute [rw] type
#   @return [String]
FileCreateData = Struct.new(
  :created_at,
  :downloadable,
  :filename,
  :id,
  :mime_type,
  :size_byte,
  :type,
  keyword_init: true
)

# Request payload for File#remove.
#
# @!attribute [rw] id
#   @return [String]
FileRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Generation entity data model.
#
# @!attribute [rw] data
#   @return [Hash]
Generation = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for Generation#load.
#
# @!attribute [rw] data
#   @return [Hash, nil]
GenerationLoadMatch = Struct.new(
  :data,
  keyword_init: true
)

# GenerationContent entity data model.
#
# @!attribute [rw] data
#   @return [Hash]
GenerationContent = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for GenerationContent#load.
#
# @!attribute [rw] data
#   @return [Hash, nil]
GenerationContentLoadMatch = Struct.new(
  :data,
  keyword_init: true
)

# Guardrail entity data model.
#
# @!attribute [rw] allowed_model
#   @return [Object, nil]
#
# @!attribute [rw] allowed_provider
#   @return [Object, nil]
#
# @!attribute [rw] content_filter
#   @return [Object, nil]
#
# @!attribute [rw] content_filter_builtin
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] data
#   @return [Object]
#
# @!attribute [rw] description
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr_anthropic
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr_google
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr_openai
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr_other
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr_xai
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] ignored_model
#   @return [Object, nil]
#
# @!attribute [rw] ignored_provider
#   @return [Object, nil]
#
# @!attribute [rw] limit_usd
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] reset_interval
#   @return [Object, nil]
#
# @!attribute [rw] updated_at
#   @return [Object, nil]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
Guardrail = Struct.new(
  :allowed_model,
  :allowed_provider,
  :content_filter,
  :content_filter_builtin,
  :created_at,
  :data,
  :description,
  :enforce_zdr,
  :enforce_zdr_anthropic,
  :enforce_zdr_google,
  :enforce_zdr_openai,
  :enforce_zdr_other,
  :enforce_zdr_xai,
  :id,
  :ignored_model,
  :ignored_provider,
  :limit_usd,
  :name,
  :reset_interval,
  :updated_at,
  :workspace_id,
  keyword_init: true
)

# Request payload for Guardrail#load.
#
# @!attribute [rw] id
#   @return [String]
GuardrailLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Guardrail#list.
#
# @!attribute [rw] allowed_model
#   @return [Object, nil]
#
# @!attribute [rw] allowed_provider
#   @return [Object, nil]
#
# @!attribute [rw] content_filter
#   @return [Object, nil]
#
# @!attribute [rw] content_filter_builtin
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr_anthropic
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr_google
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr_openai
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr_other
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr_xai
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] ignored_model
#   @return [Object, nil]
#
# @!attribute [rw] ignored_provider
#   @return [Object, nil]
#
# @!attribute [rw] limit_usd
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] reset_interval
#   @return [Object, nil]
#
# @!attribute [rw] updated_at
#   @return [Object, nil]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
GuardrailListMatch = Struct.new(
  :allowed_model,
  :allowed_provider,
  :content_filter,
  :content_filter_builtin,
  :created_at,
  :data,
  :description,
  :enforce_zdr,
  :enforce_zdr_anthropic,
  :enforce_zdr_google,
  :enforce_zdr_openai,
  :enforce_zdr_other,
  :enforce_zdr_xai,
  :id,
  :ignored_model,
  :ignored_provider,
  :limit_usd,
  :name,
  :reset_interval,
  :updated_at,
  :workspace_id,
  keyword_init: true
)

# Request payload for Guardrail#create.
#
# @!attribute [rw] allowed_model
#   @return [Object, nil]
#
# @!attribute [rw] allowed_provider
#   @return [Object, nil]
#
# @!attribute [rw] content_filter
#   @return [Object, nil]
#
# @!attribute [rw] content_filter_builtin
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] data
#   @return [Object]
#
# @!attribute [rw] description
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr_anthropic
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr_google
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr_openai
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr_other
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr_xai
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] ignored_model
#   @return [Object, nil]
#
# @!attribute [rw] ignored_provider
#   @return [Object, nil]
#
# @!attribute [rw] limit_usd
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] reset_interval
#   @return [Object, nil]
#
# @!attribute [rw] updated_at
#   @return [Object, nil]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
GuardrailCreateData = Struct.new(
  :allowed_model,
  :allowed_provider,
  :content_filter,
  :content_filter_builtin,
  :created_at,
  :data,
  :description,
  :enforce_zdr,
  :enforce_zdr_anthropic,
  :enforce_zdr_google,
  :enforce_zdr_openai,
  :enforce_zdr_other,
  :enforce_zdr_xai,
  :id,
  :ignored_model,
  :ignored_provider,
  :limit_usd,
  :name,
  :reset_interval,
  :updated_at,
  :workspace_id,
  keyword_init: true
)

# Request payload for Guardrail#remove.
#
# @!attribute [rw] id
#   @return [String]
GuardrailRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Image entity data model.
#
# @!attribute [rw] aspect_ratio
#   @return [String, nil]
#
# @!attribute [rw] background
#   @return [String, nil]
#
# @!attribute [rw] created
#   @return [Integer]
#
# @!attribute [rw] data
#   @return [Array]
#
# @!attribute [rw] input_reference
#   @return [Array, nil]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] n
#   @return [Integer, nil]
#
# @!attribute [rw] output_compression
#   @return [Integer, nil]
#
# @!attribute [rw] output_format
#   @return [String, nil]
#
# @!attribute [rw] prompt
#   @return [String]
#
# @!attribute [rw] provider
#   @return [Hash, nil]
#
# @!attribute [rw] quality
#   @return [String, nil]
#
# @!attribute [rw] resolution
#   @return [String, nil]
#
# @!attribute [rw] seed
#   @return [Integer, nil]
#
# @!attribute [rw] size
#   @return [String, nil]
#
# @!attribute [rw] stream
#   @return [Boolean, nil]
#
# @!attribute [rw] usage
#   @return [Hash]
Image = Struct.new(
  :aspect_ratio,
  :background,
  :created,
  :data,
  :input_reference,
  :model,
  :n,
  :output_compression,
  :output_format,
  :prompt,
  :provider,
  :quality,
  :resolution,
  :seed,
  :size,
  :stream,
  :usage,
  keyword_init: true
)

# Request payload for Image#create.
#
# @!attribute [rw] aspect_ratio
#   @return [String, nil]
#
# @!attribute [rw] background
#   @return [String, nil]
#
# @!attribute [rw] created
#   @return [Integer]
#
# @!attribute [rw] data
#   @return [Array]
#
# @!attribute [rw] input_reference
#   @return [Array, nil]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] n
#   @return [Integer, nil]
#
# @!attribute [rw] output_compression
#   @return [Integer, nil]
#
# @!attribute [rw] output_format
#   @return [String, nil]
#
# @!attribute [rw] prompt
#   @return [String]
#
# @!attribute [rw] provider
#   @return [Hash, nil]
#
# @!attribute [rw] quality
#   @return [String, nil]
#
# @!attribute [rw] resolution
#   @return [String, nil]
#
# @!attribute [rw] seed
#   @return [Integer, nil]
#
# @!attribute [rw] size
#   @return [String, nil]
#
# @!attribute [rw] stream
#   @return [Boolean, nil]
#
# @!attribute [rw] usage
#   @return [Hash]
ImageCreateData = Struct.new(
  :aspect_ratio,
  :background,
  :created,
  :data,
  :input_reference,
  :model,
  :n,
  :output_compression,
  :output_format,
  :prompt,
  :provider,
  :quality,
  :resolution,
  :seed,
  :size,
  :stream,
  :usage,
  keyword_init: true
)

# ImageModelEndpoint entity data model.
#
# @!attribute [rw] allowed_passthrough_parameter
#   @return [Array]
#
# @!attribute [rw] pricing
#   @return [Array]
#
# @!attribute [rw] provider_name
#   @return [String]
#
# @!attribute [rw] provider_slug
#   @return [String]
#
# @!attribute [rw] provider_tag
#   @return [Object]
#
# @!attribute [rw] supported_parameter
#   @return [Object]
#
# @!attribute [rw] supports_streaming
#   @return [Boolean]
ImageModelEndpoint = Struct.new(
  :allowed_passthrough_parameter,
  :pricing,
  :provider_name,
  :provider_slug,
  :provider_tag,
  :supported_parameter,
  :supports_streaming,
  keyword_init: true
)

# Request payload for ImageModelEndpoint#list.
#
# @!attribute [rw] model_id
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String]
ImageModelEndpointListMatch = Struct.new(
  :model_id,
  :slug,
  keyword_init: true
)

# ImageModelsList entity data model.
#
# @!attribute [rw] architecture
#   @return [Hash]
#
# @!attribute [rw] created
#   @return [Integer]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] endpoint
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] supported_parameter
#   @return [Hash]
#
# @!attribute [rw] supports_streaming
#   @return [Boolean]
ImageModelsList = Struct.new(
  :architecture,
  :created,
  :description,
  :endpoint,
  :id,
  :name,
  :supported_parameter,
  :supports_streaming,
  keyword_init: true
)

# Request payload for ImageModelsList#list.
#
# @!attribute [rw] architecture
#   @return [Hash, nil]
#
# @!attribute [rw] created
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] endpoint
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] supported_parameter
#   @return [Hash, nil]
#
# @!attribute [rw] supports_streaming
#   @return [Boolean, nil]
ImageModelsListListMatch = Struct.new(
  :architecture,
  :created,
  :description,
  :endpoint,
  :id,
  :name,
  :supported_parameter,
  :supports_streaming,
  keyword_init: true
)

# Key entity data model.
class Key
end

# ListByokKey entity data model.
class ListByokKey
end

# ListGuardrail entity data model.
class ListGuardrail
end

# ListKeyAssignment entity data model.
#
# @!attribute [rw] assigned_by
#   @return [Object]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] guardrail_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] key_hash
#   @return [String]
#
# @!attribute [rw] key_label
#   @return [String]
#
# @!attribute [rw] key_name
#   @return [String]
ListKeyAssignment = Struct.new(
  :assigned_by,
  :created_at,
  :guardrail_id,
  :id,
  :key_hash,
  :key_label,
  :key_name,
  keyword_init: true
)

# Request payload for ListKeyAssignment#list.
#
# @!attribute [rw] guardrail_id
#   @return [String, nil]
ListKeyAssignmentListMatch = Struct.new(
  :guardrail_id,
  keyword_init: true
)

# ListMemberAssignment entity data model.
#
# @!attribute [rw] assigned_by
#   @return [Object]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] guardrail_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] organization_id
#   @return [String]
#
# @!attribute [rw] user_id
#   @return [String]
ListMemberAssignment = Struct.new(
  :assigned_by,
  :created_at,
  :guardrail_id,
  :id,
  :organization_id,
  :user_id,
  keyword_init: true
)

# Request payload for ListMemberAssignment#list.
#
# @!attribute [rw] guardrail_id
#   @return [String, nil]
ListMemberAssignmentListMatch = Struct.new(
  :guardrail_id,
  keyword_init: true
)

# ListObservabilityDestination entity data model.
#
# @!attribute [rw] data
#   @return [Array]
#
# @!attribute [rw] total_count
#   @return [Integer]
ListObservabilityDestination = Struct.new(
  :data,
  :total_count,
  keyword_init: true
)

# Request payload for ListObservabilityDestination#list.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] total_count
#   @return [Integer, nil]
ListObservabilityDestinationListMatch = Struct.new(
  :data,
  :total_count,
  keyword_init: true
)

# ListPreset entity data model.
class ListPreset
end

# ListPresetVersion entity data model.
#
# @!attribute [rw] config
#   @return [Hash]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] creator_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] preset_id
#   @return [String]
#
# @!attribute [rw] system_prompt
#   @return [Object]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] version
#   @return [Integer]
ListPresetVersion = Struct.new(
  :config,
  :created_at,
  :creator_id,
  :id,
  :preset_id,
  :system_prompt,
  :updated_at,
  :version,
  keyword_init: true
)

# Request payload for ListPresetVersion#list.
#
# @!attribute [rw] slug
#   @return [String]
ListPresetVersionListMatch = Struct.new(
  :slug,
  keyword_init: true
)

# ListWorkspace entity data model.
class ListWorkspace
end

# ListWorkspaceBudget entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] limit_usd
#   @return [Float]
#
# @!attribute [rw] reset_interval
#   @return [Object]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] workspace_id
#   @return [String]
ListWorkspaceBudget = Struct.new(
  :created_at,
  :id,
  :limit_usd,
  :reset_interval,
  :updated_at,
  :workspace_id,
  keyword_init: true
)

# Request payload for ListWorkspaceBudget#list.
#
# @!attribute [rw] workspace_id
#   @return [String]
ListWorkspaceBudgetListMatch = Struct.new(
  :workspace_id,
  keyword_init: true
)

# ListWorkspaceMember entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] role
#   @return [String]
#
# @!attribute [rw] user_id
#   @return [String]
#
# @!attribute [rw] workspace_id
#   @return [String]
ListWorkspaceMember = Struct.new(
  :created_at,
  :id,
  :role,
  :user_id,
  :workspace_id,
  keyword_init: true
)

# Request payload for ListWorkspaceMember#list.
#
# @!attribute [rw] workspace_id
#   @return [String]
ListWorkspaceMemberListMatch = Struct.new(
  :workspace_id,
  keyword_init: true
)

# Member entity data model.
class Member
end

# Message entity data model.
#
# @!attribute [rw] cache_control
#   @return [Hash]
#
# @!attribute [rw] context_management
#   @return [Object, nil]
#
# @!attribute [rw] fallback
#   @return [Object, nil]
#
# @!attribute [rw] max_token
#   @return [Integer, nil]
#
# @!attribute [rw] message
#   @return [Object]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] output_config
#   @return [Hash, nil]
#
# @!attribute [rw] plugin
#   @return [Array, nil]
#
# @!attribute [rw] provider
#   @return [Object, nil]
#
# @!attribute [rw] route
#   @return [Object, nil]
#
# @!attribute [rw] service_tier
#   @return [String, nil]
#
# @!attribute [rw] session_id
#   @return [String, nil]
#
# @!attribute [rw] speed
#   @return [Object, nil]
#
# @!attribute [rw] stop_sequence
#   @return [Array, nil]
#
# @!attribute [rw] stop_server_tools_when
#   @return [Array, nil]
#
# @!attribute [rw] stream
#   @return [Boolean, nil]
#
# @!attribute [rw] system
#   @return [Object, nil]
#
# @!attribute [rw] temperature
#   @return [Float, nil]
#
# @!attribute [rw] thinking
#   @return [Object, nil]
#
# @!attribute [rw] tool
#   @return [Array, nil]
#
# @!attribute [rw] tool_choice
#   @return [Object, nil]
#
# @!attribute [rw] top_k
#   @return [Integer, nil]
#
# @!attribute [rw] top_p
#   @return [Float, nil]
#
# @!attribute [rw] trace
#   @return [Hash, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
Message = Struct.new(
  :cache_control,
  :context_management,
  :fallback,
  :max_token,
  :message,
  :metadata,
  :model,
  :output_config,
  :plugin,
  :provider,
  :route,
  :service_tier,
  :session_id,
  :speed,
  :stop_sequence,
  :stop_server_tools_when,
  :stream,
  :system,
  :temperature,
  :thinking,
  :tool,
  :tool_choice,
  :top_k,
  :top_p,
  :trace,
  :user,
  keyword_init: true
)

# Request payload for Message#create.
#
# @!attribute [rw] cache_control
#   @return [Hash]
#
# @!attribute [rw] context_management
#   @return [Object, nil]
#
# @!attribute [rw] fallback
#   @return [Object, nil]
#
# @!attribute [rw] max_token
#   @return [Integer, nil]
#
# @!attribute [rw] message
#   @return [Object]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] output_config
#   @return [Hash, nil]
#
# @!attribute [rw] plugin
#   @return [Array, nil]
#
# @!attribute [rw] provider
#   @return [Object, nil]
#
# @!attribute [rw] route
#   @return [Object, nil]
#
# @!attribute [rw] service_tier
#   @return [String, nil]
#
# @!attribute [rw] session_id
#   @return [String, nil]
#
# @!attribute [rw] speed
#   @return [Object, nil]
#
# @!attribute [rw] stop_sequence
#   @return [Array, nil]
#
# @!attribute [rw] stop_server_tools_when
#   @return [Array, nil]
#
# @!attribute [rw] stream
#   @return [Boolean, nil]
#
# @!attribute [rw] system
#   @return [Object, nil]
#
# @!attribute [rw] temperature
#   @return [Float, nil]
#
# @!attribute [rw] thinking
#   @return [Object, nil]
#
# @!attribute [rw] tool
#   @return [Array, nil]
#
# @!attribute [rw] tool_choice
#   @return [Object, nil]
#
# @!attribute [rw] top_k
#   @return [Integer, nil]
#
# @!attribute [rw] top_p
#   @return [Float, nil]
#
# @!attribute [rw] trace
#   @return [Hash, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
MessageCreateData = Struct.new(
  :cache_control,
  :context_management,
  :fallback,
  :max_token,
  :message,
  :metadata,
  :model,
  :output_config,
  :plugin,
  :provider,
  :route,
  :service_tier,
  :session_id,
  :speed,
  :stop_sequence,
  :stop_server_tools_when,
  :stream,
  :system,
  :temperature,
  :thinking,
  :tool,
  :tool_choice,
  :top_k,
  :top_p,
  :trace,
  :user,
  keyword_init: true
)

# Meta entity data model.
class Meta
end

# Model entity data model.
#
# @!attribute [rw] architecture
#   @return [Hash]
#
# @!attribute [rw] benchmark
#   @return [Hash]
#
# @!attribute [rw] canonical_slug
#   @return [String]
#
# @!attribute [rw] context_length
#   @return [Object]
#
# @!attribute [rw] created
#   @return [Integer]
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] default_parameter
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expiration_date
#   @return [Object, nil]
#
# @!attribute [rw] hugging_face_id
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] knowledge_cutoff
#   @return [Object, nil]
#
# @!attribute [rw] link
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] per_request_limit
#   @return [Object]
#
# @!attribute [rw] pricing
#   @return [Hash]
#
# @!attribute [rw] reasoning
#   @return [Hash]
#
# @!attribute [rw] supported_parameter
#   @return [Array]
#
# @!attribute [rw] supported_voice
#   @return [Object]
#
# @!attribute [rw] top_provider
#   @return [Hash]
Model = Struct.new(
  :architecture,
  :benchmark,
  :canonical_slug,
  :context_length,
  :created,
  :data,
  :default_parameter,
  :description,
  :expiration_date,
  :hugging_face_id,
  :id,
  :knowledge_cutoff,
  :link,
  :name,
  :per_request_limit,
  :pricing,
  :reasoning,
  :supported_parameter,
  :supported_voice,
  :top_provider,
  keyword_init: true
)

# Request payload for Model#load.
#
# @!attribute [rw] author
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String]
ModelLoadMatch = Struct.new(
  :author,
  :slug,
  keyword_init: true
)

# Request payload for Model#list.
#
# @!attribute [rw] architecture
#   @return [Hash, nil]
#
# @!attribute [rw] benchmark
#   @return [Hash, nil]
#
# @!attribute [rw] canonical_slug
#   @return [String, nil]
#
# @!attribute [rw] context_length
#   @return [Object, nil]
#
# @!attribute [rw] created
#   @return [Integer, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] default_parameter
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expiration_date
#   @return [Object, nil]
#
# @!attribute [rw] hugging_face_id
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] knowledge_cutoff
#   @return [Object, nil]
#
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] per_request_limit
#   @return [Object, nil]
#
# @!attribute [rw] pricing
#   @return [Hash, nil]
#
# @!attribute [rw] reasoning
#   @return [Hash, nil]
#
# @!attribute [rw] supported_parameter
#   @return [Array, nil]
#
# @!attribute [rw] supported_voice
#   @return [Object, nil]
#
# @!attribute [rw] top_provider
#   @return [Hash, nil]
ModelListMatch = Struct.new(
  :architecture,
  :benchmark,
  :canonical_slug,
  :context_length,
  :created,
  :data,
  :default_parameter,
  :description,
  :expiration_date,
  :hugging_face_id,
  :id,
  :knowledge_cutoff,
  :link,
  :name,
  :per_request_limit,
  :pricing,
  :reasoning,
  :supported_parameter,
  :supported_voice,
  :top_provider,
  keyword_init: true
)

# ModelsCount entity data model.
#
# @!attribute [rw] data
#   @return [Hash]
ModelsCount = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for ModelsCount#load.
#
# @!attribute [rw] data
#   @return [Hash, nil]
ModelsCountLoadMatch = Struct.new(
  :data,
  keyword_init: true
)

# ModelsList entity data model.
#
# @!attribute [rw] architecture
#   @return [Hash]
#
# @!attribute [rw] benchmark
#   @return [Hash]
#
# @!attribute [rw] canonical_slug
#   @return [String]
#
# @!attribute [rw] context_length
#   @return [Object]
#
# @!attribute [rw] created
#   @return [Integer]
#
# @!attribute [rw] default_parameter
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expiration_date
#   @return [Object, nil]
#
# @!attribute [rw] hugging_face_id
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] knowledge_cutoff
#   @return [Object, nil]
#
# @!attribute [rw] link
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] per_request_limit
#   @return [Object]
#
# @!attribute [rw] pricing
#   @return [Hash]
#
# @!attribute [rw] reasoning
#   @return [Hash]
#
# @!attribute [rw] supported_parameter
#   @return [Array]
#
# @!attribute [rw] supported_voice
#   @return [Object]
#
# @!attribute [rw] top_provider
#   @return [Hash]
ModelsList = Struct.new(
  :architecture,
  :benchmark,
  :canonical_slug,
  :context_length,
  :created,
  :default_parameter,
  :description,
  :expiration_date,
  :hugging_face_id,
  :id,
  :knowledge_cutoff,
  :link,
  :name,
  :per_request_limit,
  :pricing,
  :reasoning,
  :supported_parameter,
  :supported_voice,
  :top_provider,
  keyword_init: true
)

# Request payload for ModelsList#list.
#
# @!attribute [rw] architecture
#   @return [Hash, nil]
#
# @!attribute [rw] benchmark
#   @return [Hash, nil]
#
# @!attribute [rw] canonical_slug
#   @return [String, nil]
#
# @!attribute [rw] context_length
#   @return [Object, nil]
#
# @!attribute [rw] created
#   @return [Integer, nil]
#
# @!attribute [rw] default_parameter
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expiration_date
#   @return [Object, nil]
#
# @!attribute [rw] hugging_face_id
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] knowledge_cutoff
#   @return [Object, nil]
#
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] per_request_limit
#   @return [Object, nil]
#
# @!attribute [rw] pricing
#   @return [Hash, nil]
#
# @!attribute [rw] reasoning
#   @return [Hash, nil]
#
# @!attribute [rw] supported_parameter
#   @return [Array, nil]
#
# @!attribute [rw] supported_voice
#   @return [Object, nil]
#
# @!attribute [rw] top_provider
#   @return [Hash, nil]
ModelsListListMatch = Struct.new(
  :architecture,
  :benchmark,
  :canonical_slug,
  :context_length,
  :created,
  :default_parameter,
  :description,
  :expiration_date,
  :hugging_face_id,
  :id,
  :knowledge_cutoff,
  :link,
  :name,
  :per_request_limit,
  :pricing,
  :reasoning,
  :supported_parameter,
  :supported_voice,
  :top_provider,
  keyword_init: true
)

# OAuth entity data model.
#
# @!attribute [rw] callback_url
#   @return [String]
#
# @!attribute [rw] code
#   @return [String]
#
# @!attribute [rw] code_challenge
#   @return [String, nil]
#
# @!attribute [rw] code_challenge_method
#   @return [Object, nil]
#
# @!attribute [rw] code_verifier
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] expires_at
#   @return [Object, nil]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] key_label
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] spawn_agent
#   @return [String, nil]
#
# @!attribute [rw] spawn_cloud
#   @return [String, nil]
#
# @!attribute [rw] usage_limit_type
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [Object]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
OAuth = Struct.new(
  :callback_url,
  :code,
  :code_challenge,
  :code_challenge_method,
  :code_verifier,
  :data,
  :expires_at,
  :key,
  :key_label,
  :limit,
  :spawn_agent,
  :spawn_cloud,
  :usage_limit_type,
  :user_id,
  :workspace_id,
  keyword_init: true
)

# Request payload for OAuth#create.
#
# @!attribute [rw] callback_url
#   @return [String]
#
# @!attribute [rw] code
#   @return [String]
#
# @!attribute [rw] code_challenge
#   @return [String, nil]
#
# @!attribute [rw] code_challenge_method
#   @return [Object, nil]
#
# @!attribute [rw] code_verifier
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] expires_at
#   @return [Object, nil]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] key_label
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] spawn_agent
#   @return [String, nil]
#
# @!attribute [rw] spawn_cloud
#   @return [String, nil]
#
# @!attribute [rw] usage_limit_type
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [Object]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
OAuthCreateData = Struct.new(
  :callback_url,
  :code,
  :code_challenge,
  :code_challenge_method,
  :code_verifier,
  :data,
  :expires_at,
  :key,
  :key_label,
  :limit,
  :spawn_agent,
  :spawn_cloud,
  :usage_limit_type,
  :user_id,
  :workspace_id,
  keyword_init: true
)

# ObservabilityDestination entity data model.
#
# @!attribute [rw] data
#   @return [Object]
ObservabilityDestination = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for ObservabilityDestination#load.
#
# @!attribute [rw] id
#   @return [String]
ObservabilityDestinationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ObservabilityDestination#remove.
#
# @!attribute [rw] id
#   @return [String]
ObservabilityDestinationRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# OpenResponsesResult entity data model.
#
# @!attribute [rw] background
#   @return [Object, nil]
#
# @!attribute [rw] cache_control
#   @return [Hash]
#
# @!attribute [rw] debug
#   @return [Hash, nil]
#
# @!attribute [rw] frequency_penalty
#   @return [Object, nil]
#
# @!attribute [rw] image_config
#   @return [Hash, nil]
#
# @!attribute [rw] include
#   @return [Object, nil]
#
# @!attribute [rw] input
#   @return [Object, nil]
#
# @!attribute [rw] instruction
#   @return [Object, nil]
#
# @!attribute [rw] max_output_token
#   @return [Object, nil]
#
# @!attribute [rw] max_tool_call
#   @return [Object, nil]
#
# @!attribute [rw] metadata
#   @return [Object, nil]
#
# @!attribute [rw] modality
#   @return [Array, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] parallel_tool_call
#   @return [Object, nil]
#
# @!attribute [rw] plugin
#   @return [Array, nil]
#
# @!attribute [rw] presence_penalty
#   @return [Object, nil]
#
# @!attribute [rw] previous_response_id
#   @return [String, nil]
#
# @!attribute [rw] prompt
#   @return [Object]
#
# @!attribute [rw] prompt_cache_key
#   @return [Object, nil]
#
# @!attribute [rw] prompt_cache_option
#   @return [Object]
#
# @!attribute [rw] provider
#   @return [Object, nil]
#
# @!attribute [rw] reasoning
#   @return [Object, nil]
#
# @!attribute [rw] route
#   @return [Object, nil]
#
# @!attribute [rw] safety_identifier
#   @return [Object, nil]
#
# @!attribute [rw] service_tier
#   @return [Object, nil]
#
# @!attribute [rw] session_id
#   @return [String, nil]
#
# @!attribute [rw] stop_server_tools_when
#   @return [Array, nil]
#
# @!attribute [rw] store
#   @return [Boolean, nil]
#
# @!attribute [rw] stream
#   @return [Boolean, nil]
#
# @!attribute [rw] temperature
#   @return [Object, nil]
#
# @!attribute [rw] text
#   @return [Object, nil]
#
# @!attribute [rw] tool
#   @return [Array, nil]
#
# @!attribute [rw] tool_choice
#   @return [Object, nil]
#
# @!attribute [rw] top_k
#   @return [Integer, nil]
#
# @!attribute [rw] top_logprob
#   @return [Object, nil]
#
# @!attribute [rw] top_p
#   @return [Object, nil]
#
# @!attribute [rw] trace
#   @return [Hash, nil]
#
# @!attribute [rw] truncation
#   @return [Object, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
OpenResponsesResult = Struct.new(
  :background,
  :cache_control,
  :debug,
  :frequency_penalty,
  :image_config,
  :include,
  :input,
  :instruction,
  :max_output_token,
  :max_tool_call,
  :metadata,
  :modality,
  :model,
  :parallel_tool_call,
  :plugin,
  :presence_penalty,
  :previous_response_id,
  :prompt,
  :prompt_cache_key,
  :prompt_cache_option,
  :provider,
  :reasoning,
  :route,
  :safety_identifier,
  :service_tier,
  :session_id,
  :stop_server_tools_when,
  :store,
  :stream,
  :temperature,
  :text,
  :tool,
  :tool_choice,
  :top_k,
  :top_logprob,
  :top_p,
  :trace,
  :truncation,
  :user,
  keyword_init: true
)

# Request payload for OpenResponsesResult#create.
#
# @!attribute [rw] background
#   @return [Object, nil]
#
# @!attribute [rw] cache_control
#   @return [Hash]
#
# @!attribute [rw] debug
#   @return [Hash, nil]
#
# @!attribute [rw] frequency_penalty
#   @return [Object, nil]
#
# @!attribute [rw] image_config
#   @return [Hash, nil]
#
# @!attribute [rw] include
#   @return [Object, nil]
#
# @!attribute [rw] input
#   @return [Object, nil]
#
# @!attribute [rw] instruction
#   @return [Object, nil]
#
# @!attribute [rw] max_output_token
#   @return [Object, nil]
#
# @!attribute [rw] max_tool_call
#   @return [Object, nil]
#
# @!attribute [rw] metadata
#   @return [Object, nil]
#
# @!attribute [rw] modality
#   @return [Array, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] parallel_tool_call
#   @return [Object, nil]
#
# @!attribute [rw] plugin
#   @return [Array, nil]
#
# @!attribute [rw] presence_penalty
#   @return [Object, nil]
#
# @!attribute [rw] previous_response_id
#   @return [String, nil]
#
# @!attribute [rw] prompt
#   @return [Object]
#
# @!attribute [rw] prompt_cache_key
#   @return [Object, nil]
#
# @!attribute [rw] prompt_cache_option
#   @return [Object]
#
# @!attribute [rw] provider
#   @return [Object, nil]
#
# @!attribute [rw] reasoning
#   @return [Object, nil]
#
# @!attribute [rw] route
#   @return [Object, nil]
#
# @!attribute [rw] safety_identifier
#   @return [Object, nil]
#
# @!attribute [rw] service_tier
#   @return [Object, nil]
#
# @!attribute [rw] session_id
#   @return [String, nil]
#
# @!attribute [rw] stop_server_tools_when
#   @return [Array, nil]
#
# @!attribute [rw] store
#   @return [Boolean, nil]
#
# @!attribute [rw] stream
#   @return [Boolean, nil]
#
# @!attribute [rw] temperature
#   @return [Object, nil]
#
# @!attribute [rw] text
#   @return [Object, nil]
#
# @!attribute [rw] tool
#   @return [Array, nil]
#
# @!attribute [rw] tool_choice
#   @return [Object, nil]
#
# @!attribute [rw] top_k
#   @return [Integer, nil]
#
# @!attribute [rw] top_logprob
#   @return [Object, nil]
#
# @!attribute [rw] top_p
#   @return [Object, nil]
#
# @!attribute [rw] trace
#   @return [Hash, nil]
#
# @!attribute [rw] truncation
#   @return [Object, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
OpenResponsesResultCreateData = Struct.new(
  :background,
  :cache_control,
  :debug,
  :frequency_penalty,
  :image_config,
  :include,
  :input,
  :instruction,
  :max_output_token,
  :max_tool_call,
  :metadata,
  :modality,
  :model,
  :parallel_tool_call,
  :plugin,
  :presence_penalty,
  :previous_response_id,
  :prompt,
  :prompt_cache_key,
  :prompt_cache_option,
  :provider,
  :reasoning,
  :route,
  :safety_identifier,
  :service_tier,
  :session_id,
  :stop_server_tools_when,
  :store,
  :stream,
  :temperature,
  :text,
  :tool,
  :tool_choice,
  :top_k,
  :top_logprob,
  :top_p,
  :trace,
  :truncation,
  :user,
  keyword_init: true
)

# Organization entity data model.
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] first_name
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] last_name
#   @return [Object]
#
# @!attribute [rw] role
#   @return [String]
Organization = Struct.new(
  :email,
  :first_name,
  :id,
  :last_name,
  :role,
  keyword_init: true
)

# Request payload for Organization#list.
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] first_name
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] last_name
#   @return [Object, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
OrganizationListMatch = Struct.new(
  :email,
  :first_name,
  :id,
  :last_name,
  :role,
  keyword_init: true
)

# Preset entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] creator_user_id
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Object]
#
# @!attribute [rw] description
#   @return [Object]
#
# @!attribute [rw] designated_version_id
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] status_updated_at
#   @return [Object]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] workspace_id
#   @return [Object]
Preset = Struct.new(
  :created_at,
  :creator_user_id,
  :data,
  :description,
  :designated_version_id,
  :id,
  :name,
  :slug,
  :status,
  :status_updated_at,
  :updated_at,
  :workspace_id,
  keyword_init: true
)

# Request payload for Preset#load.
#
# @!attribute [rw] id
#   @return [String]
PresetLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Preset#list.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] creator_user_id
#   @return [Object, nil]
#
# @!attribute [rw] data
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [Object, nil]
#
# @!attribute [rw] designated_version_id
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] status_updated_at
#   @return [Object, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] workspace_id
#   @return [Object, nil]
PresetListMatch = Struct.new(
  :created_at,
  :creator_user_id,
  :data,
  :description,
  :designated_version_id,
  :id,
  :name,
  :slug,
  :status,
  :status_updated_at,
  :updated_at,
  :workspace_id,
  keyword_init: true
)

# PresetVersion entity data model.
#
# @!attribute [rw] data
#   @return [Object]
PresetVersion = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for PresetVersion#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String]
PresetVersionLoadMatch = Struct.new(
  :id,
  :slug,
  keyword_init: true
)

# Provider entity data model.
#
# @!attribute [rw] datacenter
#   @return [Object, nil]
#
# @!attribute [rw] headquarter
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] privacy_policy_url
#   @return [Object]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] status_page_url
#   @return [Object, nil]
#
# @!attribute [rw] terms_of_service_url
#   @return [Object, nil]
Provider = Struct.new(
  :datacenter,
  :headquarter,
  :name,
  :privacy_policy_url,
  :slug,
  :status_page_url,
  :terms_of_service_url,
  keyword_init: true
)

# Request payload for Provider#list.
#
# @!attribute [rw] datacenter
#   @return [Object, nil]
#
# @!attribute [rw] headquarter
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] privacy_policy_url
#   @return [Object, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] status_page_url
#   @return [Object, nil]
#
# @!attribute [rw] terms_of_service_url
#   @return [Object, nil]
ProviderListMatch = Struct.new(
  :datacenter,
  :headquarter,
  :name,
  :privacy_policy_url,
  :slug,
  :status_page_url,
  :terms_of_service_url,
  keyword_init: true
)

# Query entity data model.
class Query
end

# RankingsDaily entity data model.
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] model_permaslug
#   @return [String]
#
# @!attribute [rw] total_token
#   @return [String]
RankingsDaily = Struct.new(
  :date,
  :model_permaslug,
  :total_token,
  keyword_init: true
)

# Request payload for RankingsDaily#list.
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] model_permaslug
#   @return [String, nil]
#
# @!attribute [rw] total_token
#   @return [String, nil]
RankingsDailyListMatch = Struct.new(
  :date,
  :model_permaslug,
  :total_token,
  keyword_init: true
)

# Remove entity data model.
class Remove
end

# Rerank entity data model.
#
# @!attribute [rw] document
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] provider
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [String]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] top_n
#   @return [Integer, nil]
#
# @!attribute [rw] usage
#   @return [Hash, nil]
Rerank = Struct.new(
  :document,
  :id,
  :model,
  :provider,
  :query,
  :result,
  :top_n,
  :usage,
  keyword_init: true
)

# Request payload for Rerank#create.
#
# @!attribute [rw] document
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] provider
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [String]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] top_n
#   @return [Integer, nil]
#
# @!attribute [rw] usage
#   @return [Hash, nil]
RerankCreateData = Struct.new(
  :document,
  :id,
  :model,
  :provider,
  :query,
  :result,
  :top_n,
  :usage,
  keyword_init: true
)

# Response entity data model.
class Response
end

# Speech entity data model.
class Speech
end

# Stt entity data model.
#
# @!attribute [rw] duration
#   @return [Float, nil]
#
# @!attribute [rw] input_audio
#   @return [Hash]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] provider
#   @return [Hash, nil]
#
# @!attribute [rw] response_format
#   @return [String, nil]
#
# @!attribute [rw] segment
#   @return [Array, nil]
#
# @!attribute [rw] task
#   @return [String, nil]
#
# @!attribute [rw] temperature
#   @return [Float, nil]
#
# @!attribute [rw] text
#   @return [String]
#
# @!attribute [rw] timestamp_granularity
#   @return [Array, nil]
#
# @!attribute [rw] usage
#   @return [Hash, nil]
#
# @!attribute [rw] word
#   @return [Array, nil]
Stt = Struct.new(
  :duration,
  :input_audio,
  :language,
  :model,
  :provider,
  :response_format,
  :segment,
  :task,
  :temperature,
  :text,
  :timestamp_granularity,
  :usage,
  :word,
  keyword_init: true
)

# Request payload for Stt#create.
#
# @!attribute [rw] duration
#   @return [Float, nil]
#
# @!attribute [rw] input_audio
#   @return [Hash]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] provider
#   @return [Hash, nil]
#
# @!attribute [rw] response_format
#   @return [String, nil]
#
# @!attribute [rw] segment
#   @return [Array, nil]
#
# @!attribute [rw] task
#   @return [String, nil]
#
# @!attribute [rw] temperature
#   @return [Float, nil]
#
# @!attribute [rw] text
#   @return [String]
#
# @!attribute [rw] timestamp_granularity
#   @return [Array, nil]
#
# @!attribute [rw] usage
#   @return [Hash, nil]
#
# @!attribute [rw] word
#   @return [Array, nil]
SttCreateData = Struct.new(
  :duration,
  :input_audio,
  :language,
  :model,
  :provider,
  :response_format,
  :segment,
  :task,
  :temperature,
  :text,
  :timestamp_granularity,
  :usage,
  :word,
  keyword_init: true
)

# SubmitGenerationFeedback entity data model.
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] generation_id
#   @return [String]
SubmitGenerationFeedback = Struct.new(
  :category,
  :comment,
  :data,
  :generation_id,
  keyword_init: true
)

# Request payload for SubmitGenerationFeedback#create.
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] generation_id
#   @return [String]
SubmitGenerationFeedbackCreateData = Struct.new(
  :category,
  :comment,
  :data,
  :generation_id,
  keyword_init: true
)

# Task entity data model.
#
# @!attribute [rw] data
#   @return [Hash]
Task = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for Task#load.
#
# @!attribute [rw] data
#   @return [Hash, nil]
TaskLoadMatch = Struct.new(
  :data,
  keyword_init: true
)

# Transcription entity data model.
class Transcription
end

# Tts entity data model.
#
# @!attribute [rw] input
#   @return [String]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] provider
#   @return [Hash, nil]
#
# @!attribute [rw] response_format
#   @return [String, nil]
#
# @!attribute [rw] speed
#   @return [Float, nil]
#
# @!attribute [rw] voice
#   @return [String]
Tts = Struct.new(
  :input,
  :model,
  :provider,
  :response_format,
  :speed,
  :voice,
  keyword_init: true
)

# Request payload for Tts#create.
#
# @!attribute [rw] input
#   @return [String]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] provider
#   @return [Hash, nil]
#
# @!attribute [rw] response_format
#   @return [String, nil]
#
# @!attribute [rw] speed
#   @return [Float, nil]
#
# @!attribute [rw] voice
#   @return [String]
TtsCreateData = Struct.new(
  :input,
  :model,
  :provider,
  :response_format,
  :speed,
  :voice,
  keyword_init: true
)

# UnifiedBenchmark entity data model.
#
# @!attribute [rw] data
#   @return [Array]
#
# @!attribute [rw] meta
#   @return [Hash]
UnifiedBenchmark = Struct.new(
  :data,
  :meta,
  keyword_init: true
)

# Request payload for UnifiedBenchmark#list.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] meta
#   @return [Hash, nil]
UnifiedBenchmarkListMatch = Struct.new(
  :data,
  :meta,
  keyword_init: true
)

# UpdateByokKey entity data model.
#
# @!attribute [rw] allowed_model
#   @return [Object, nil]
#
# @!attribute [rw] allowed_user_id
#   @return [Object, nil]
#
# @!attribute [rw] data
#   @return [Object]
#
# @!attribute [rw] disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] is_fallback
#   @return [Boolean, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [Object, nil]
UpdateByokKey = Struct.new(
  :allowed_model,
  :allowed_user_id,
  :data,
  :disabled,
  :is_fallback,
  :key,
  :name,
  keyword_init: true
)

# Request payload for UpdateByokKey#update.
#
# @!attribute [rw] id
#   @return [String]
UpdateByokKeyUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# UpdateGuardrail entity data model.
#
# @!attribute [rw] allowed_model
#   @return [Object, nil]
#
# @!attribute [rw] allowed_provider
#   @return [Object, nil]
#
# @!attribute [rw] content_filter
#   @return [Object, nil]
#
# @!attribute [rw] content_filter_builtin
#   @return [Object, nil]
#
# @!attribute [rw] data
#   @return [Object]
#
# @!attribute [rw] description
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr_anthropic
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr_google
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr_openai
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr_other
#   @return [Object, nil]
#
# @!attribute [rw] enforce_zdr_xai
#   @return [Object, nil]
#
# @!attribute [rw] ignored_model
#   @return [Object, nil]
#
# @!attribute [rw] ignored_provider
#   @return [Object, nil]
#
# @!attribute [rw] limit_usd
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] reset_interval
#   @return [Object, nil]
UpdateGuardrail = Struct.new(
  :allowed_model,
  :allowed_provider,
  :content_filter,
  :content_filter_builtin,
  :data,
  :description,
  :enforce_zdr,
  :enforce_zdr_anthropic,
  :enforce_zdr_google,
  :enforce_zdr_openai,
  :enforce_zdr_other,
  :enforce_zdr_xai,
  :ignored_model,
  :ignored_provider,
  :limit_usd,
  :name,
  :reset_interval,
  keyword_init: true
)

# Request payload for UpdateGuardrail#update.
#
# @!attribute [rw] id
#   @return [String]
UpdateGuardrailUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# UpdateObservabilityDestination entity data model.
#
# @!attribute [rw] api_key_hash
#   @return [Object, nil]
#
# @!attribute [rw] config
#   @return [Hash, nil]
#
# @!attribute [rw] data
#   @return [Object]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] filter_rule
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] privacy_mode
#   @return [Boolean, nil]
#
# @!attribute [rw] sampling_rate
#   @return [Float, nil]
UpdateObservabilityDestination = Struct.new(
  :api_key_hash,
  :config,
  :data,
  :enabled,
  :filter_rule,
  :name,
  :privacy_mode,
  :sampling_rate,
  keyword_init: true
)

# Request payload for UpdateObservabilityDestination#update.
#
# @!attribute [rw] id
#   @return [String]
UpdateObservabilityDestinationUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# UpdateWorkspace entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] created_by
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Object]
#
# @!attribute [rw] default_image_model
#   @return [Object, nil]
#
# @!attribute [rw] default_provider_sort
#   @return [Object, nil]
#
# @!attribute [rw] default_text_model
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] io_logging_api_key_id
#   @return [Object, nil]
#
# @!attribute [rw] io_logging_sampling_rate
#   @return [Float, nil]
#
# @!attribute [rw] is_data_discount_logging_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] is_observability_broadcast_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] is_observability_io_logging_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [Object]
UpdateWorkspace = Struct.new(
  :created_at,
  :created_by,
  :data,
  :default_image_model,
  :default_provider_sort,
  :default_text_model,
  :description,
  :id,
  :io_logging_api_key_id,
  :io_logging_sampling_rate,
  :is_data_discount_logging_enabled,
  :is_observability_broadcast_enabled,
  :is_observability_io_logging_enabled,
  :name,
  :slug,
  :updated_at,
  keyword_init: true
)

# Request payload for UpdateWorkspace#list.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [Object, nil]
#
# @!attribute [rw] data
#   @return [Object, nil]
#
# @!attribute [rw] default_image_model
#   @return [Object, nil]
#
# @!attribute [rw] default_provider_sort
#   @return [Object, nil]
#
# @!attribute [rw] default_text_model
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] io_logging_api_key_id
#   @return [Object, nil]
#
# @!attribute [rw] io_logging_sampling_rate
#   @return [Float, nil]
#
# @!attribute [rw] is_data_discount_logging_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] is_observability_broadcast_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] is_observability_io_logging_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [Object, nil]
UpdateWorkspaceListMatch = Struct.new(
  :created_at,
  :created_by,
  :data,
  :default_image_model,
  :default_provider_sort,
  :default_text_model,
  :description,
  :id,
  :io_logging_api_key_id,
  :io_logging_sampling_rate,
  :is_data_discount_logging_enabled,
  :is_observability_broadcast_enabled,
  :is_observability_io_logging_enabled,
  :name,
  :slug,
  :updated_at,
  keyword_init: true
)

# Request payload for UpdateWorkspace#create.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] created_by
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Object]
#
# @!attribute [rw] default_image_model
#   @return [Object, nil]
#
# @!attribute [rw] default_provider_sort
#   @return [Object, nil]
#
# @!attribute [rw] default_text_model
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] io_logging_api_key_id
#   @return [Object, nil]
#
# @!attribute [rw] io_logging_sampling_rate
#   @return [Float, nil]
#
# @!attribute [rw] is_data_discount_logging_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] is_observability_broadcast_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] is_observability_io_logging_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [Object]
UpdateWorkspaceCreateData = Struct.new(
  :created_at,
  :created_by,
  :data,
  :default_image_model,
  :default_provider_sort,
  :default_text_model,
  :description,
  :id,
  :io_logging_api_key_id,
  :io_logging_sampling_rate,
  :is_data_discount_logging_enabled,
  :is_observability_broadcast_enabled,
  :is_observability_io_logging_enabled,
  :name,
  :slug,
  :updated_at,
  keyword_init: true
)

# Request payload for UpdateWorkspace#update.
#
# @!attribute [rw] id
#   @return [String]
UpdateWorkspaceUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# UpsertWorkspaceBudget entity data model.
#
# @!attribute [rw] data
#   @return [Object]
#
# @!attribute [rw] limit_usd
#   @return [Float]
UpsertWorkspaceBudget = Struct.new(
  :data,
  :limit_usd,
  keyword_init: true
)

# Request payload for UpsertWorkspaceBudget#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] workspace_id
#   @return [String]
UpsertWorkspaceBudgetUpdateData = Struct.new(
  :id,
  :workspace_id,
  keyword_init: true
)

# User entity data model.
class User
end

# Version entity data model.
class Version
end

# Video entity data model.
#
# @!attribute [rw] aspect_ratio
#   @return [String, nil]
#
# @!attribute [rw] callback_url
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [Integer, nil]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] frame_image
#   @return [Array, nil]
#
# @!attribute [rw] generate_audio
#   @return [Boolean, nil]
#
# @!attribute [rw] generation_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] input_reference
#   @return [Array, nil]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] polling_url
#   @return [String]
#
# @!attribute [rw] prompt
#   @return [String, nil]
#
# @!attribute [rw] provider
#   @return [Hash, nil]
#
# @!attribute [rw] resolution
#   @return [String, nil]
#
# @!attribute [rw] seed
#   @return [Integer, nil]
#
# @!attribute [rw] size
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] unsigned_url
#   @return [Array, nil]
#
# @!attribute [rw] usage
#   @return [Hash, nil]
Video = Struct.new(
  :aspect_ratio,
  :callback_url,
  :duration,
  :error,
  :frame_image,
  :generate_audio,
  :generation_id,
  :id,
  :input_reference,
  :model,
  :polling_url,
  :prompt,
  :provider,
  :resolution,
  :seed,
  :size,
  :status,
  :unsigned_url,
  :usage,
  keyword_init: true
)

# Request payload for Video#load.
#
# @!attribute [rw] id
#   @return [String]
VideoLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Video#create.
#
# @!attribute [rw] aspect_ratio
#   @return [String, nil]
#
# @!attribute [rw] callback_url
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [Integer, nil]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] frame_image
#   @return [Array, nil]
#
# @!attribute [rw] generate_audio
#   @return [Boolean, nil]
#
# @!attribute [rw] generation_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] input_reference
#   @return [Array, nil]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] polling_url
#   @return [String]
#
# @!attribute [rw] prompt
#   @return [String, nil]
#
# @!attribute [rw] provider
#   @return [Hash, nil]
#
# @!attribute [rw] resolution
#   @return [String, nil]
#
# @!attribute [rw] seed
#   @return [Integer, nil]
#
# @!attribute [rw] size
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] unsigned_url
#   @return [Array, nil]
#
# @!attribute [rw] usage
#   @return [Hash, nil]
VideoCreateData = Struct.new(
  :aspect_ratio,
  :callback_url,
  :duration,
  :error,
  :frame_image,
  :generate_audio,
  :generation_id,
  :id,
  :input_reference,
  :model,
  :polling_url,
  :prompt,
  :provider,
  :resolution,
  :seed,
  :size,
  :status,
  :unsigned_url,
  :usage,
  keyword_init: true
)

# VideoGeneration entity data model.
class VideoGeneration
end

# Request payload for VideoGeneration#load.
#
# @!attribute [rw] id
#   @return [String]
VideoGenerationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# VideoModelsList entity data model.
#
# @!attribute [rw] allowed_passthrough_parameter
#   @return [Array]
#
# @!attribute [rw] canonical_slug
#   @return [String]
#
# @!attribute [rw] created
#   @return [Integer]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] generate_audio
#   @return [Object]
#
# @!attribute [rw] hugging_face_id
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pricing_skus
#   @return [Object, nil]
#
# @!attribute [rw] seed
#   @return [Object]
#
# @!attribute [rw] supported_aspect_ratio
#   @return [Object]
#
# @!attribute [rw] supported_duration
#   @return [Object]
#
# @!attribute [rw] supported_frame_image
#   @return [Object]
#
# @!attribute [rw] supported_resolution
#   @return [Object]
#
# @!attribute [rw] supported_size
#   @return [Object]
VideoModelsList = Struct.new(
  :allowed_passthrough_parameter,
  :canonical_slug,
  :created,
  :description,
  :generate_audio,
  :hugging_face_id,
  :id,
  :name,
  :pricing_skus,
  :seed,
  :supported_aspect_ratio,
  :supported_duration,
  :supported_frame_image,
  :supported_resolution,
  :supported_size,
  keyword_init: true
)

# Request payload for VideoModelsList#list.
#
# @!attribute [rw] allowed_passthrough_parameter
#   @return [Array, nil]
#
# @!attribute [rw] canonical_slug
#   @return [String, nil]
#
# @!attribute [rw] created
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] generate_audio
#   @return [Object, nil]
#
# @!attribute [rw] hugging_face_id
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pricing_skus
#   @return [Object, nil]
#
# @!attribute [rw] seed
#   @return [Object, nil]
#
# @!attribute [rw] supported_aspect_ratio
#   @return [Object, nil]
#
# @!attribute [rw] supported_duration
#   @return [Object, nil]
#
# @!attribute [rw] supported_frame_image
#   @return [Object, nil]
#
# @!attribute [rw] supported_resolution
#   @return [Object, nil]
#
# @!attribute [rw] supported_size
#   @return [Object, nil]
VideoModelsListListMatch = Struct.new(
  :allowed_passthrough_parameter,
  :canonical_slug,
  :created,
  :description,
  :generate_audio,
  :hugging_face_id,
  :id,
  :name,
  :pricing_skus,
  :seed,
  :supported_aspect_ratio,
  :supported_duration,
  :supported_frame_image,
  :supported_resolution,
  :supported_size,
  keyword_init: true
)

# Workspace entity data model.
#
# @!attribute [rw] data
#   @return [Object]
Workspace = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for Workspace#load.
#
# @!attribute [rw] id
#   @return [String]
WorkspaceLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Workspace#remove.
#
# @!attribute [rw] id
#   @return [String]
WorkspaceRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# WorkspaceBudget entity data model.
class WorkspaceBudget
end

# Request payload for WorkspaceBudget#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] workspace_id
#   @return [String]
WorkspaceBudgetRemoveMatch = Struct.new(
  :id,
  :workspace_id,
  keyword_init: true
)

# Zdr entity data model.
class Zdr
end

