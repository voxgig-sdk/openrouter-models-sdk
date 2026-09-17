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
# @!attribute [rw] completion_tokens
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
# @!attribute [rw] prompt_tokens
#   @return [Integer]
#
# @!attribute [rw] provider_name
#   @return [String]
#
# @!attribute [rw] reasoning_tokens
#   @return [Integer]
#
# @!attribute [rw] requests
#   @return [Integer]
#
# @!attribute [rw] usage
#   @return [Float]
Activity = Struct.new(
  :byok_usage_inference,
  :completion_tokens,
  :date,
  :endpoint_id,
  :model,
  :model_permaslug,
  :prompt_tokens,
  :provider_name,
  :reasoning_tokens,
  :requests,
  :usage,
  keyword_init: true
)

# Request payload for Activity#list.
#
# @!attribute [rw] api_key_hash
#   @return [String, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
ActivityListMatch = Struct.new(
  :api_key_hash,
  :date,
  :user_id,
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
#   @return [Object]
#
# @!attribute [rw] disabled
#   @return [Boolean]
#
# @!attribute [rw] expires_at
#   @return [Object, nil]
#
# @!attribute [rw] hash
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] include_byok_in_limit
#   @return [Boolean]
#
# @!attribute [rw] is_free_tier
#   @return [Boolean]
#
# @!attribute [rw] is_management_key
#   @return [Boolean]
#
# @!attribute [rw] is_provisioning_key
#   @return [Boolean]
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Object]
#
# @!attribute [rw] limit_remaining
#   @return [Object]
#
# @!attribute [rw] limit_reset
#   @return [Object]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] rate_limit
#   @return [Hash]
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
#   @return [String]
ApiKey = Struct.new(
  :byok_usage,
  :byok_usage_daily,
  :byok_usage_monthly,
  :byok_usage_weekly,
  :created_at,
  :creator_user_id,
  :disabled,
  :expires_at,
  :hash,
  :id,
  :include_byok_in_limit,
  :is_free_tier,
  :is_management_key,
  :is_provisioning_key,
  :label,
  :limit,
  :limit_remaining,
  :limit_reset,
  :name,
  :rate_limit,
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
#   @return [String]
ApiKeyLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ApiKey#list.
#
# @!attribute [rw] include_disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] offset
#   @return [Object, nil]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
ApiKeyListMatch = Struct.new(
  :include_disabled,
  :offset,
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
#   @return [Object]
#
# @!attribute [rw] disabled
#   @return [Boolean]
#
# @!attribute [rw] expires_at
#   @return [Object, nil]
#
# @!attribute [rw] hash
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] include_byok_in_limit
#   @return [Boolean]
#
# @!attribute [rw] is_free_tier
#   @return [Boolean]
#
# @!attribute [rw] is_management_key
#   @return [Boolean]
#
# @!attribute [rw] is_provisioning_key
#   @return [Boolean]
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Object]
#
# @!attribute [rw] limit_remaining
#   @return [Object]
#
# @!attribute [rw] limit_reset
#   @return [Object]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] rate_limit
#   @return [Hash]
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
#   @return [String]
ApiKeyCreateData = Struct.new(
  :byok_usage,
  :byok_usage_daily,
  :byok_usage_monthly,
  :byok_usage_weekly,
  :created_at,
  :creator_user_id,
  :disabled,
  :expires_at,
  :hash,
  :id,
  :include_byok_in_limit,
  :is_free_tier,
  :is_management_key,
  :is_provisioning_key,
  :label,
  :limit,
  :limit_remaining,
  :limit_reset,
  :name,
  :rate_limit,
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
# @!attribute [rw] is_free_tier
#   @return [Boolean, nil]
#
# @!attribute [rw] is_management_key
#   @return [Boolean, nil]
#
# @!attribute [rw] is_provisioning_key
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
# @!attribute [rw] rate_limit
#   @return [Hash, nil]
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
ApiKeyUpdateData = Struct.new(
  :id,
  :byok_usage,
  :byok_usage_daily,
  :byok_usage_monthly,
  :byok_usage_weekly,
  :created_at,
  :creator_user_id,
  :disabled,
  :expires_at,
  :hash,
  :include_byok_in_limit,
  :is_free_tier,
  :is_management_key,
  :is_provisioning_key,
  :label,
  :limit,
  :limit_remaining,
  :limit_reset,
  :name,
  :rate_limit,
  :updated_at,
  :usage,
  :usage_daily,
  :usage_monthly,
  :usage_weekly,
  :workspace_id,
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
# @!attribute [rw] total_requests
#   @return [Integer]
#
# @!attribute [rw] total_tokens
#   @return [String]
AppRanking = Struct.new(
  :app_id,
  :app_name,
  :rank,
  :total_requests,
  :total_tokens,
  keyword_init: true
)

# Request payload for AppRanking#list.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Object, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] subcategory
#   @return [String, nil]
AppRankingListMatch = Struct.new(
  :category,
  :end_date,
  :limit,
  :offset,
  :sort,
  :start_date,
  :subcategory,
  keyword_init: true
)

# Benchmark entity data model.
class Benchmark
end

# BetaAnalytics entity data model.
#
# @!attribute [rw] cachedAt
#   @return [Float, nil]
#
# @!attribute [rw] classifier_dimensions
#   @return [Hash]
#
# @!attribute [rw] classifier_filters
#   @return [Hash]
#
# @!attribute [rw] data
#   @return [Array]
#
# @!attribute [rw] dimensions
#   @return [Array]
#
# @!attribute [rw] filters
#   @return [Array, nil]
#
# @!attribute [rw] granularities
#   @return [Array]
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
# @!attribute [rw] metadata
#   @return [Hash]
#
# @!attribute [rw] metrics
#   @return [Array]
#
# @!attribute [rw] operators
#   @return [Array]
#
# @!attribute [rw] order_by
#   @return [Hash]
#
# @!attribute [rw] time_range
#   @return [Hash]
#
# @!attribute [rw] warnings
#   @return [Array, nil]
BetaAnalytics = Struct.new(
  :cachedAt,
  :classifier_dimensions,
  :classifier_filters,
  :data,
  :dimensions,
  :filters,
  :granularities,
  :granularity,
  :group_limit,
  :limit,
  :metadata,
  :metrics,
  :operators,
  :order_by,
  :time_range,
  :warnings,
  keyword_init: true
)

# Request payload for BetaAnalytics#load.
#
# @!attribute [rw] cachedAt
#   @return [Float, nil]
#
# @!attribute [rw] classifier_dimensions
#   @return [Hash, nil]
#
# @!attribute [rw] classifier_filters
#   @return [Hash, nil]
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] dimensions
#   @return [Array, nil]
#
# @!attribute [rw] filters
#   @return [Array, nil]
#
# @!attribute [rw] granularities
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
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] metrics
#   @return [Array, nil]
#
# @!attribute [rw] operators
#   @return [Array, nil]
#
# @!attribute [rw] order_by
#   @return [Hash, nil]
#
# @!attribute [rw] time_range
#   @return [Hash, nil]
#
# @!attribute [rw] warnings
#   @return [Array, nil]
BetaAnalyticsLoadMatch = Struct.new(
  :cachedAt,
  :classifier_dimensions,
  :classifier_filters,
  :data,
  :dimensions,
  :filters,
  :granularities,
  :granularity,
  :group_limit,
  :limit,
  :metadata,
  :metrics,
  :operators,
  :order_by,
  :time_range,
  :warnings,
  keyword_init: true
)

# Request payload for BetaAnalytics#create.
#
# @!attribute [rw] cachedAt
#   @return [Float, nil]
#
# @!attribute [rw] classifier_dimensions
#   @return [Hash]
#
# @!attribute [rw] classifier_filters
#   @return [Hash]
#
# @!attribute [rw] data
#   @return [Array]
#
# @!attribute [rw] dimensions
#   @return [Array]
#
# @!attribute [rw] filters
#   @return [Array, nil]
#
# @!attribute [rw] granularities
#   @return [Array]
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
# @!attribute [rw] metadata
#   @return [Hash]
#
# @!attribute [rw] metrics
#   @return [Array]
#
# @!attribute [rw] operators
#   @return [Array]
#
# @!attribute [rw] order_by
#   @return [Hash]
#
# @!attribute [rw] time_range
#   @return [Hash]
#
# @!attribute [rw] warnings
#   @return [Array, nil]
BetaAnalyticsCreateData = Struct.new(
  :cachedAt,
  :classifier_dimensions,
  :classifier_filters,
  :data,
  :dimensions,
  :filters,
  :granularities,
  :granularity,
  :group_limit,
  :limit,
  :metadata,
  :metrics,
  :operators,
  :order_by,
  :time_range,
  :warnings,
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
# @!attribute [rw] user_ids
#   @return [Array]
BulkAddWorkspaceMember = Struct.new(
  :added_count,
  :data,
  :user_ids,
  keyword_init: true
)

# Request payload for BulkAddWorkspaceMember#create.
#
# @!attribute [rw] workspace_id
#   @return [String]
#
# @!attribute [rw] added_count
#   @return [Integer]
#
# @!attribute [rw] data
#   @return [Array]
#
# @!attribute [rw] user_ids
#   @return [Array]
BulkAddWorkspaceMemberCreateData = Struct.new(
  :workspace_id,
  :added_count,
  :data,
  :user_ids,
  keyword_init: true
)

# BulkAssignKey entity data model.
#
# @!attribute [rw] assigned_count
#   @return [Integer]
#
# @!attribute [rw] key_hashes
#   @return [Array]
BulkAssignKey = Struct.new(
  :assigned_count,
  :key_hashes,
  keyword_init: true
)

# Request payload for BulkAssignKey#create.
#
# @!attribute [rw] guardrail_id
#   @return [String]
#
# @!attribute [rw] assigned_count
#   @return [Integer]
#
# @!attribute [rw] key_hashes
#   @return [Array]
BulkAssignKeyCreateData = Struct.new(
  :guardrail_id,
  :assigned_count,
  :key_hashes,
  keyword_init: true
)

# BulkAssignMember entity data model.
#
# @!attribute [rw] assigned_count
#   @return [Integer]
#
# @!attribute [rw] member_user_ids
#   @return [Array]
BulkAssignMember = Struct.new(
  :assigned_count,
  :member_user_ids,
  keyword_init: true
)

# Request payload for BulkAssignMember#create.
#
# @!attribute [rw] guardrail_id
#   @return [String]
#
# @!attribute [rw] assigned_count
#   @return [Integer]
#
# @!attribute [rw] member_user_ids
#   @return [Array]
BulkAssignMemberCreateData = Struct.new(
  :guardrail_id,
  :assigned_count,
  :member_user_ids,
  keyword_init: true
)

# BulkRemoveWorkspaceMember entity data model.
#
# @!attribute [rw] removed_count
#   @return [Integer]
#
# @!attribute [rw] user_ids
#   @return [Array]
BulkRemoveWorkspaceMember = Struct.new(
  :removed_count,
  :user_ids,
  keyword_init: true
)

# Request payload for BulkRemoveWorkspaceMember#create.
#
# @!attribute [rw] workspace_id
#   @return [String]
#
# @!attribute [rw] removed_count
#   @return [Integer]
#
# @!attribute [rw] user_ids
#   @return [Array]
BulkRemoveWorkspaceMemberCreateData = Struct.new(
  :workspace_id,
  :removed_count,
  :user_ids,
  keyword_init: true
)

# BulkUnassignKey entity data model.
#
# @!attribute [rw] key_hashes
#   @return [Array]
#
# @!attribute [rw] unassigned_count
#   @return [Integer]
BulkUnassignKey = Struct.new(
  :key_hashes,
  :unassigned_count,
  keyword_init: true
)

# Request payload for BulkUnassignKey#create.
#
# @!attribute [rw] guardrail_id
#   @return [String]
#
# @!attribute [rw] key_hashes
#   @return [Array]
#
# @!attribute [rw] unassigned_count
#   @return [Integer]
BulkUnassignKeyCreateData = Struct.new(
  :guardrail_id,
  :key_hashes,
  :unassigned_count,
  keyword_init: true
)

# BulkUnassignMember entity data model.
#
# @!attribute [rw] member_user_ids
#   @return [Array]
#
# @!attribute [rw] unassigned_count
#   @return [Integer]
BulkUnassignMember = Struct.new(
  :member_user_ids,
  :unassigned_count,
  keyword_init: true
)

# Request payload for BulkUnassignMember#create.
#
# @!attribute [rw] guardrail_id
#   @return [String]
#
# @!attribute [rw] member_user_ids
#   @return [Array]
#
# @!attribute [rw] unassigned_count
#   @return [Integer]
BulkUnassignMemberCreateData = Struct.new(
  :guardrail_id,
  :member_user_ids,
  :unassigned_count,
  keyword_init: true
)

# Byok entity data model.
#
# @!attribute [rw] allowed_api_key_hashes
#   @return [Object]
#
# @!attribute [rw] allowed_models
#   @return [Object]
#
# @!attribute [rw] allowed_user_ids
#   @return [Object]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] disabled
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_fallback
#   @return [Boolean]
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
#   @return [String]
Byok = Struct.new(
  :allowed_api_key_hashes,
  :allowed_models,
  :allowed_user_ids,
  :created_at,
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
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Object, nil]
#
# @!attribute [rw] provider
#   @return [String, nil]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
ByokListMatch = Struct.new(
  :limit,
  :offset,
  :provider,
  :workspace_id,
  keyword_init: true
)

# Request payload for Byok#create.
#
# @!attribute [rw] allowed_api_key_hashes
#   @return [Object]
#
# @!attribute [rw] allowed_models
#   @return [Object]
#
# @!attribute [rw] allowed_user_ids
#   @return [Object]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] disabled
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_fallback
#   @return [Boolean]
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
#   @return [String]
ByokCreateData = Struct.new(
  :allowed_api_key_hashes,
  :allowed_models,
  :allowed_user_ids,
  :created_at,
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
# @!attribute [rw] choices
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
# @!attribute [rw] logit_bias
#   @return [Object, nil]
#
# @!attribute [rw] logprobs
#   @return [Object, nil]
#
# @!attribute [rw] max_completion_tokens
#   @return [Object, nil]
#
# @!attribute [rw] max_tokens
#   @return [Object, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] min_p
#   @return [Object, nil]
#
# @!attribute [rw] modalities
#   @return [Array, nil]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] models
#   @return [Array, nil]
#
# @!attribute [rw] object
#   @return [String]
#
# @!attribute [rw] openrouter_metadata
#   @return [Hash]
#
# @!attribute [rw] parallel_tool_calls
#   @return [Object, nil]
#
# @!attribute [rw] plugins
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
# @!attribute [rw] prompt_cache_options
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
# @!attribute [rw] stream_options
#   @return [Object, nil]
#
# @!attribute [rw] system_fingerprint
#   @return [Object]
#
# @!attribute [rw] temperature
#   @return [Object, nil]
#
# @!attribute [rw] tool_choice
#   @return [Object, nil]
#
# @!attribute [rw] tools
#   @return [Array, nil]
#
# @!attribute [rw] top_a
#   @return [Object, nil]
#
# @!attribute [rw] top_k
#   @return [Object, nil]
#
# @!attribute [rw] top_logprobs
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
  :choices,
  :created,
  :debug,
  :frequency_penalty,
  :id,
  :image_config,
  :logit_bias,
  :logprobs,
  :max_completion_tokens,
  :max_tokens,
  :messages,
  :metadata,
  :min_p,
  :modalities,
  :model,
  :models,
  :object,
  :openrouter_metadata,
  :parallel_tool_calls,
  :plugins,
  :prediction,
  :presence_penalty,
  :prompt_cache_key,
  :prompt_cache_options,
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
  :stream_options,
  :system_fingerprint,
  :temperature,
  :tool_choice,
  :tools,
  :top_a,
  :top_k,
  :top_logprobs,
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
# @!attribute [rw] choices
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
# @!attribute [rw] logit_bias
#   @return [Object, nil]
#
# @!attribute [rw] logprobs
#   @return [Object, nil]
#
# @!attribute [rw] max_completion_tokens
#   @return [Object, nil]
#
# @!attribute [rw] max_tokens
#   @return [Object, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] min_p
#   @return [Object, nil]
#
# @!attribute [rw] modalities
#   @return [Array, nil]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] models
#   @return [Array, nil]
#
# @!attribute [rw] object
#   @return [String]
#
# @!attribute [rw] openrouter_metadata
#   @return [Hash]
#
# @!attribute [rw] parallel_tool_calls
#   @return [Object, nil]
#
# @!attribute [rw] plugins
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
# @!attribute [rw] prompt_cache_options
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
# @!attribute [rw] stream_options
#   @return [Object, nil]
#
# @!attribute [rw] system_fingerprint
#   @return [Object]
#
# @!attribute [rw] temperature
#   @return [Object, nil]
#
# @!attribute [rw] tool_choice
#   @return [Object, nil]
#
# @!attribute [rw] tools
#   @return [Array, nil]
#
# @!attribute [rw] top_a
#   @return [Object, nil]
#
# @!attribute [rw] top_k
#   @return [Object, nil]
#
# @!attribute [rw] top_logprobs
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
  :choices,
  :created,
  :debug,
  :frequency_penalty,
  :id,
  :image_config,
  :logit_bias,
  :logprobs,
  :max_completion_tokens,
  :max_tokens,
  :messages,
  :metadata,
  :min_p,
  :modalities,
  :model,
  :models,
  :object,
  :openrouter_metadata,
  :parallel_tool_calls,
  :plugins,
  :prediction,
  :presence_penalty,
  :prompt_cache_key,
  :prompt_cache_options,
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
  :stream_options,
  :system_fingerprint,
  :temperature,
  :tool_choice,
  :tools,
  :top_a,
  :top_k,
  :top_logprobs,
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
# @!attribute [rw] api_key_hashes
#   @return [Object, nil]
#
# @!attribute [rw] config
#   @return [Hash]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] filter_rules
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
  :api_key_hashes,
  :config,
  :enabled,
  :filter_rules,
  :name,
  :privacy_mode,
  :sampling_rate,
  :type,
  :workspace_id,
  keyword_init: true
)

# Request payload for CreateObservabilityDestination#create.
#
# @!attribute [rw] api_key_hashes
#   @return [Object, nil]
#
# @!attribute [rw] config
#   @return [Hash]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] filter_rules
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
  :api_key_hashes,
  :config,
  :enabled,
  :filter_rules,
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
# @!attribute [rw] debug
#   @return [Hash, nil]
#
# @!attribute [rw] fallbacks
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
# @!attribute [rw] instructions
#   @return [Object, nil]
#
# @!attribute [rw] logit_bias
#   @return [Object, nil]
#
# @!attribute [rw] logprobs
#   @return [Object, nil]
#
# @!attribute [rw] max_completion_tokens
#   @return [Object, nil]
#
# @!attribute [rw] max_output_tokens
#   @return [Object, nil]
#
# @!attribute [rw] max_tokens
#   @return [Object, nil]
#
# @!attribute [rw] max_tool_calls
#   @return [Object, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] min_p
#   @return [Object, nil]
#
# @!attribute [rw] modalities
#   @return [Array, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] models
#   @return [Array, nil]
#
# @!attribute [rw] output_config
#   @return [Hash, nil]
#
# @!attribute [rw] parallel_tool_calls
#   @return [Object, nil]
#
# @!attribute [rw] plugins
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
# @!attribute [rw] prompt_cache_options
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
# @!attribute [rw] stop_sequences
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
# @!attribute [rw] stream_options
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
# @!attribute [rw] tool_choice
#   @return [Object, nil]
#
# @!attribute [rw] tools
#   @return [Array, nil]
#
# @!attribute [rw] top_a
#   @return [Object, nil]
#
# @!attribute [rw] top_k
#   @return [Object, nil]
#
# @!attribute [rw] top_logprobs
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
  :debug,
  :fallbacks,
  :frequency_penalty,
  :image_config,
  :include,
  :input,
  :instructions,
  :logit_bias,
  :logprobs,
  :max_completion_tokens,
  :max_output_tokens,
  :max_tokens,
  :max_tool_calls,
  :messages,
  :metadata,
  :min_p,
  :modalities,
  :model,
  :models,
  :output_config,
  :parallel_tool_calls,
  :plugins,
  :prediction,
  :presence_penalty,
  :previous_response_id,
  :prompt,
  :prompt_cache_key,
  :prompt_cache_options,
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
  :stop_sequences,
  :stop_server_tools_when,
  :store,
  :stream,
  :stream_options,
  :system,
  :temperature,
  :text,
  :thinking,
  :tool_choice,
  :tools,
  :top_a,
  :top_k,
  :top_logprobs,
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
# @!attribute [rw] debug
#   @return [Hash, nil]
#
# @!attribute [rw] fallbacks
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
# @!attribute [rw] instructions
#   @return [Object, nil]
#
# @!attribute [rw] logit_bias
#   @return [Object, nil]
#
# @!attribute [rw] logprobs
#   @return [Object, nil]
#
# @!attribute [rw] max_completion_tokens
#   @return [Object, nil]
#
# @!attribute [rw] max_output_tokens
#   @return [Object, nil]
#
# @!attribute [rw] max_tokens
#   @return [Object, nil]
#
# @!attribute [rw] max_tool_calls
#   @return [Object, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] min_p
#   @return [Object, nil]
#
# @!attribute [rw] modalities
#   @return [Array, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] models
#   @return [Array, nil]
#
# @!attribute [rw] output_config
#   @return [Hash, nil]
#
# @!attribute [rw] parallel_tool_calls
#   @return [Object, nil]
#
# @!attribute [rw] plugins
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
# @!attribute [rw] prompt_cache_options
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
# @!attribute [rw] stop_sequences
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
# @!attribute [rw] stream_options
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
# @!attribute [rw] tool_choice
#   @return [Object, nil]
#
# @!attribute [rw] tools
#   @return [Array, nil]
#
# @!attribute [rw] top_a
#   @return [Object, nil]
#
# @!attribute [rw] top_k
#   @return [Object, nil]
#
# @!attribute [rw] top_logprobs
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
CreatePresetFromInferenceCreateData = Struct.new(
  :slug,
  :background,
  :cache_control,
  :context_management,
  :debug,
  :fallbacks,
  :frequency_penalty,
  :image_config,
  :include,
  :input,
  :instructions,
  :logit_bias,
  :logprobs,
  :max_completion_tokens,
  :max_output_tokens,
  :max_tokens,
  :max_tool_calls,
  :messages,
  :metadata,
  :min_p,
  :modalities,
  :model,
  :models,
  :output_config,
  :parallel_tool_calls,
  :plugins,
  :prediction,
  :presence_penalty,
  :previous_response_id,
  :prompt,
  :prompt_cache_key,
  :prompt_cache_options,
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
  :stop_sequences,
  :stop_server_tools_when,
  :store,
  :stream,
  :stream_options,
  :system,
  :temperature,
  :text,
  :thinking,
  :tool_choice,
  :tools,
  :top_a,
  :top_k,
  :top_logprobs,
  :top_p,
  :trace,
  :truncation,
  :user,
  keyword_init: true
)

# CreateWorkspace entity data model.
class CreateWorkspace
end

# Credit entity data model.
#
# @!attribute [rw] total_credits
#   @return [Float]
#
# @!attribute [rw] total_usage
#   @return [Float]
Credit = Struct.new(
  :total_credits,
  :total_usage,
  keyword_init: true
)

# Request payload for Credit#load.
#
# @!attribute [rw] total_credits
#   @return [Float, nil]
#
# @!attribute [rw] total_usage
#   @return [Float, nil]
CreditLoadMatch = Struct.new(
  :total_credits,
  :total_usage,
  keyword_init: true
)

# Request payload for Credit#create.
#
# @!attribute [rw] total_credits
#   @return [Float]
#
# @!attribute [rw] total_usage
#   @return [Float]
CreditCreateData = Struct.new(
  :total_credits,
  :total_usage,
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
# @!attribute [rw] dimensions
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
  :dimensions,
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
# @!attribute [rw] dimensions
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
  :dimensions,
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
#   @return [Object]
#
# @!attribute [rw] benchmarks
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
# @!attribute [rw] default_parameters
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] endpoints
#   @return [Array]
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
# @!attribute [rw] links
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] per_request_limits
#   @return [Object]
#
# @!attribute [rw] pricing
#   @return [Hash]
#
# @!attribute [rw] reasoning
#   @return [Hash]
#
# @!attribute [rw] supported_parameters
#   @return [Array]
#
# @!attribute [rw] supported_voices
#   @return [Object]
#
# @!attribute [rw] top_provider
#   @return [Hash]
Endpoint = Struct.new(
  :architecture,
  :benchmarks,
  :canonical_slug,
  :context_length,
  :created,
  :default_parameters,
  :description,
  :endpoints,
  :expiration_date,
  :hugging_face_id,
  :id,
  :knowledge_cutoff,
  :links,
  :name,
  :per_request_limits,
  :pricing,
  :reasoning,
  :supported_parameters,
  :supported_voices,
  :top_provider,
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
# @!attribute [rw] arch
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] context
#   @return [Integer, nil]
#
# @!attribute [rw] distillable
#   @return [String, nil]
#
# @!attribute [rw] input_modality
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] max_age_day
#   @return [Object, nil]
#
# @!attribute [rw] max_agentic_index
#   @return [Object, nil]
#
# @!attribute [rw] max_coding_index
#   @return [Object, nil]
#
# @!attribute [rw] max_intelligence_index
#   @return [Object, nil]
#
# @!attribute [rw] max_output_price
#   @return [Object, nil]
#
# @!attribute [rw] max_price
#   @return [Object, nil]
#
# @!attribute [rw] max_tool_success_rate
#   @return [Object, nil]
#
# @!attribute [rw] min_age_day
#   @return [Object, nil]
#
# @!attribute [rw] min_agentic_index
#   @return [Object, nil]
#
# @!attribute [rw] min_coding_index
#   @return [Object, nil]
#
# @!attribute [rw] min_intelligence_index
#   @return [Object, nil]
#
# @!attribute [rw] min_output_price
#   @return [Object, nil]
#
# @!attribute [rw] min_price
#   @return [Object, nil]
#
# @!attribute [rw] min_tool_success_rate
#   @return [Object, nil]
#
# @!attribute [rw] model_author
#   @return [String, nil]
#
# @!attribute [rw] offset
#   @return [Object, nil]
#
# @!attribute [rw] output_modality
#   @return [String, nil]
#
# @!attribute [rw] provider
#   @return [String, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
#
# @!attribute [rw] supported_parameter
#   @return [String, nil]
#
# @!attribute [rw] zdr
#   @return [String, nil]
EndpointListMatch = Struct.new(
  :arch,
  :category,
  :context,
  :distillable,
  :input_modality,
  :limit,
  :max_age_day,
  :max_agentic_index,
  :max_coding_index,
  :max_intelligence_index,
  :max_output_price,
  :max_price,
  :max_tool_success_rate,
  :min_age_day,
  :min_agentic_index,
  :min_coding_index,
  :min_intelligence_index,
  :min_output_price,
  :min_price,
  :min_tool_success_rate,
  :model_author,
  :offset,
  :output_modality,
  :provider,
  :q,
  :region,
  :sort,
  :supported_parameter,
  :zdr,
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
# @!attribute [rw] size_bytes
#   @return [Integer]
#
# @!attribute [rw] type
#   @return [String]
FileType = Struct.new(
  :created_at,
  :downloadable,
  :filename,
  :id,
  :mime_type,
  :size_bytes,
  :type,
  keyword_init: true
)

# Request payload for File#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
FileLoadMatch = Struct.new(
  :id,
  :workspace_id,
  keyword_init: true
)

# Request payload for File#list.
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
FileListMatch = Struct.new(
  :cursor,
  :limit,
  :workspace_id,
  keyword_init: true
)

# Request payload for File#create.
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
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
# @!attribute [rw] size_bytes
#   @return [Integer]
#
# @!attribute [rw] type
#   @return [String]
FileCreateData = Struct.new(
  :workspace_id,
  :created_at,
  :downloadable,
  :filename,
  :id,
  :mime_type,
  :size_bytes,
  :type,
  keyword_init: true
)

# Request payload for File#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
FileRemoveMatch = Struct.new(
  :id,
  :workspace_id,
  keyword_init: true
)

# Generation entity data model.
#
# @!attribute [rw] api_type
#   @return [Object]
#
# @!attribute [rw] app_id
#   @return [Object]
#
# @!attribute [rw] cache_discount
#   @return [Object]
#
# @!attribute [rw] cancelled
#   @return [Object]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] data_region
#   @return [String]
#
# @!attribute [rw] external_user
#   @return [Object]
#
# @!attribute [rw] finish_reason
#   @return [Object]
#
# @!attribute [rw] generation_time
#   @return [Object]
#
# @!attribute [rw] http_referer
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_byok
#   @return [Boolean]
#
# @!attribute [rw] latency
#   @return [Object]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] moderation_latency
#   @return [Object]
#
# @!attribute [rw] native_finish_reason
#   @return [Object]
#
# @!attribute [rw] native_tokens_cached
#   @return [Object]
#
# @!attribute [rw] native_tokens_completion
#   @return [Object]
#
# @!attribute [rw] native_tokens_completion_images
#   @return [Object]
#
# @!attribute [rw] native_tokens_prompt
#   @return [Object]
#
# @!attribute [rw] native_tokens_reasoning
#   @return [Object]
#
# @!attribute [rw] num_fetches
#   @return [Object]
#
# @!attribute [rw] num_input_audio_prompt
#   @return [Object]
#
# @!attribute [rw] num_media_completion
#   @return [Object]
#
# @!attribute [rw] num_media_prompt
#   @return [Object]
#
# @!attribute [rw] num_search_results
#   @return [Object]
#
# @!attribute [rw] origin
#   @return [String]
#
# @!attribute [rw] preset_id
#   @return [Object]
#
# @!attribute [rw] provider_name
#   @return [Object]
#
# @!attribute [rw] provider_responses
#   @return [Object]
#
# @!attribute [rw] request_id
#   @return [Object, nil]
#
# @!attribute [rw] response_cache_source_id
#   @return [Object, nil]
#
# @!attribute [rw] router
#   @return [Object]
#
# @!attribute [rw] service_tier
#   @return [Object]
#
# @!attribute [rw] session_id
#   @return [Object, nil]
#
# @!attribute [rw] streamed
#   @return [Object]
#
# @!attribute [rw] tokens_completion
#   @return [Object]
#
# @!attribute [rw] tokens_prompt
#   @return [Object]
#
# @!attribute [rw] total_cost
#   @return [Float]
#
# @!attribute [rw] upstream_id
#   @return [Object]
#
# @!attribute [rw] upstream_inference_cost
#   @return [Object]
#
# @!attribute [rw] usage
#   @return [Float]
#
# @!attribute [rw] user_agent
#   @return [Object]
#
# @!attribute [rw] web_search_engine
#   @return [Object]
Generation = Struct.new(
  :api_type,
  :app_id,
  :cache_discount,
  :cancelled,
  :created_at,
  :data_region,
  :external_user,
  :finish_reason,
  :generation_time,
  :http_referer,
  :id,
  :is_byok,
  :latency,
  :model,
  :moderation_latency,
  :native_finish_reason,
  :native_tokens_cached,
  :native_tokens_completion,
  :native_tokens_completion_images,
  :native_tokens_prompt,
  :native_tokens_reasoning,
  :num_fetches,
  :num_input_audio_prompt,
  :num_media_completion,
  :num_media_prompt,
  :num_search_results,
  :origin,
  :preset_id,
  :provider_name,
  :provider_responses,
  :request_id,
  :response_cache_source_id,
  :router,
  :service_tier,
  :session_id,
  :streamed,
  :tokens_completion,
  :tokens_prompt,
  :total_cost,
  :upstream_id,
  :upstream_inference_cost,
  :usage,
  :user_agent,
  :web_search_engine,
  keyword_init: true
)

# Request payload for Generation#load.
#
# @!attribute [rw] id
#   @return [String]
GenerationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# GenerationContent entity data model.
#
# @!attribute [rw] input
#   @return [Object]
#
# @!attribute [rw] output
#   @return [Hash]
GenerationContent = Struct.new(
  :input,
  :output,
  keyword_init: true
)

# Request payload for GenerationContent#load.
#
# @!attribute [rw] id
#   @return [String]
GenerationContentLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Guardrail entity data model.
#
# @!attribute [rw] allowed_models
#   @return [Object, nil]
#
# @!attribute [rw] allowed_providers
#   @return [Object, nil]
#
# @!attribute [rw] content_filter_builtins
#   @return [Object, nil]
#
# @!attribute [rw] content_filters
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String]
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
# @!attribute [rw] ignored_models
#   @return [Object, nil]
#
# @!attribute [rw] ignored_providers
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
#   @return [String]
Guardrail = Struct.new(
  :allowed_models,
  :allowed_providers,
  :content_filter_builtins,
  :content_filters,
  :created_at,
  :description,
  :enforce_zdr,
  :enforce_zdr_anthropic,
  :enforce_zdr_google,
  :enforce_zdr_openai,
  :enforce_zdr_other,
  :enforce_zdr_xai,
  :id,
  :ignored_models,
  :ignored_providers,
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
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Object, nil]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
GuardrailListMatch = Struct.new(
  :limit,
  :offset,
  :workspace_id,
  keyword_init: true
)

# Request payload for Guardrail#create.
#
# @!attribute [rw] allowed_models
#   @return [Object, nil]
#
# @!attribute [rw] allowed_providers
#   @return [Object, nil]
#
# @!attribute [rw] content_filter_builtins
#   @return [Object, nil]
#
# @!attribute [rw] content_filters
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String]
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
# @!attribute [rw] ignored_models
#   @return [Object, nil]
#
# @!attribute [rw] ignored_providers
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
#   @return [String]
GuardrailCreateData = Struct.new(
  :allowed_models,
  :allowed_providers,
  :content_filter_builtins,
  :content_filters,
  :created_at,
  :description,
  :enforce_zdr,
  :enforce_zdr_anthropic,
  :enforce_zdr_google,
  :enforce_zdr_openai,
  :enforce_zdr_other,
  :enforce_zdr_xai,
  :id,
  :ignored_models,
  :ignored_providers,
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
# @!attribute [rw] input_references
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
  :input_references,
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
# @!attribute [rw] input_references
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
  :input_references,
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
# @!attribute [rw] allowed_passthrough_parameters
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
# @!attribute [rw] supported_parameters
#   @return [Object]
#
# @!attribute [rw] supports_streaming
#   @return [Boolean]
ImageModelEndpoint = Struct.new(
  :allowed_passthrough_parameters,
  :pricing,
  :provider_name,
  :provider_slug,
  :provider_tag,
  :supported_parameters,
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
# @!attribute [rw] endpoints
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] supported_parameters
#   @return [Hash]
#
# @!attribute [rw] supports_streaming
#   @return [Boolean]
ImageModelsList = Struct.new(
  :architecture,
  :created,
  :description,
  :endpoints,
  :id,
  :name,
  :supported_parameters,
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
# @!attribute [rw] endpoints
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] supported_parameters
#   @return [Hash, nil]
#
# @!attribute [rw] supports_streaming
#   @return [Boolean, nil]
ImageModelsListListMatch = Struct.new(
  :architecture,
  :created,
  :description,
  :endpoints,
  :id,
  :name,
  :supported_parameters,
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
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Object, nil]
ListKeyAssignmentListMatch = Struct.new(
  :limit,
  :offset,
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
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Object, nil]
ListMemberAssignmentListMatch = Struct.new(
  :limit,
  :offset,
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
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Object, nil]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
ListObservabilityDestinationListMatch = Struct.new(
  :limit,
  :offset,
  :workspace_id,
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
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Object, nil]
ListPresetVersionListMatch = Struct.new(
  :slug,
  :limit,
  :offset,
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
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Object, nil]
ListWorkspaceMemberListMatch = Struct.new(
  :workspace_id,
  :limit,
  :offset,
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
# @!attribute [rw] fallbacks
#   @return [Object, nil]
#
# @!attribute [rw] max_tokens
#   @return [Integer, nil]
#
# @!attribute [rw] messages
#   @return [Object]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] models
#   @return [Array, nil]
#
# @!attribute [rw] output_config
#   @return [Hash, nil]
#
# @!attribute [rw] plugins
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
# @!attribute [rw] stop_sequences
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
# @!attribute [rw] tool_choice
#   @return [Object, nil]
#
# @!attribute [rw] tools
#   @return [Array, nil]
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
  :fallbacks,
  :max_tokens,
  :messages,
  :metadata,
  :model,
  :models,
  :output_config,
  :plugins,
  :provider,
  :route,
  :service_tier,
  :session_id,
  :speed,
  :stop_sequences,
  :stop_server_tools_when,
  :stream,
  :system,
  :temperature,
  :thinking,
  :tool_choice,
  :tools,
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
# @!attribute [rw] fallbacks
#   @return [Object, nil]
#
# @!attribute [rw] max_tokens
#   @return [Integer, nil]
#
# @!attribute [rw] messages
#   @return [Object]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] models
#   @return [Array, nil]
#
# @!attribute [rw] output_config
#   @return [Hash, nil]
#
# @!attribute [rw] plugins
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
# @!attribute [rw] stop_sequences
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
# @!attribute [rw] tool_choice
#   @return [Object, nil]
#
# @!attribute [rw] tools
#   @return [Array, nil]
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
  :fallbacks,
  :max_tokens,
  :messages,
  :metadata,
  :model,
  :models,
  :output_config,
  :plugins,
  :provider,
  :route,
  :service_tier,
  :session_id,
  :speed,
  :stop_sequences,
  :stop_server_tools_when,
  :stream,
  :system,
  :temperature,
  :thinking,
  :tool_choice,
  :tools,
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
# @!attribute [rw] benchmarks
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
# @!attribute [rw] default_parameters
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
# @!attribute [rw] links
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] per_request_limits
#   @return [Object]
#
# @!attribute [rw] pricing
#   @return [Hash]
#
# @!attribute [rw] reasoning
#   @return [Hash]
#
# @!attribute [rw] supported_parameters
#   @return [Array]
#
# @!attribute [rw] supported_voices
#   @return [Object]
#
# @!attribute [rw] top_provider
#   @return [Hash]
Model = Struct.new(
  :architecture,
  :benchmarks,
  :canonical_slug,
  :context_length,
  :created,
  :default_parameters,
  :description,
  :expiration_date,
  :hugging_face_id,
  :id,
  :knowledge_cutoff,
  :links,
  :name,
  :per_request_limits,
  :pricing,
  :reasoning,
  :supported_parameters,
  :supported_voices,
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
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Object, nil]
ModelListMatch = Struct.new(
  :limit,
  :offset,
  keyword_init: true
)

# ModelsCount entity data model.
#
# @!attribute [rw] count
#   @return [Integer]
ModelsCount = Struct.new(
  :count,
  keyword_init: true
)

# Request payload for ModelsCount#load.
#
# @!attribute [rw] output_modality
#   @return [String, nil]
ModelsCountLoadMatch = Struct.new(
  :output_modality,
  keyword_init: true
)

# ModelsList entity data model.
#
# @!attribute [rw] architecture
#   @return [Hash]
#
# @!attribute [rw] benchmarks
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
# @!attribute [rw] default_parameters
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
# @!attribute [rw] links
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] per_request_limits
#   @return [Object]
#
# @!attribute [rw] pricing
#   @return [Hash]
#
# @!attribute [rw] reasoning
#   @return [Hash]
#
# @!attribute [rw] supported_parameters
#   @return [Array]
#
# @!attribute [rw] supported_voices
#   @return [Object]
#
# @!attribute [rw] top_provider
#   @return [Hash]
ModelsList = Struct.new(
  :architecture,
  :benchmarks,
  :canonical_slug,
  :context_length,
  :created,
  :default_parameters,
  :description,
  :expiration_date,
  :hugging_face_id,
  :id,
  :knowledge_cutoff,
  :links,
  :name,
  :per_request_limits,
  :pricing,
  :reasoning,
  :supported_parameters,
  :supported_voices,
  :top_provider,
  keyword_init: true
)

# Request payload for ModelsList#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Object, nil]
ModelsListListMatch = Struct.new(
  :limit,
  :offset,
  keyword_init: true
)

# OAuth entity data model.
#
# @!attribute [rw] app_id
#   @return [Integer]
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
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] expires_at
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
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
  :app_id,
  :callback_url,
  :code,
  :code_challenge,
  :code_challenge_method,
  :code_verifier,
  :created_at,
  :expires_at,
  :id,
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
# @!attribute [rw] app_id
#   @return [Integer]
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
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] expires_at
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
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
  :app_id,
  :callback_url,
  :code,
  :code_challenge,
  :code_challenge_method,
  :code_verifier,
  :created_at,
  :expires_at,
  :id,
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
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
ObservabilityDestination = Struct.new(
  :data,
  :id,
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
# @!attribute [rw] instructions
#   @return [Object, nil]
#
# @!attribute [rw] max_output_tokens
#   @return [Object, nil]
#
# @!attribute [rw] max_tool_calls
#   @return [Object, nil]
#
# @!attribute [rw] metadata
#   @return [Object, nil]
#
# @!attribute [rw] modalities
#   @return [Array, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] models
#   @return [Array, nil]
#
# @!attribute [rw] parallel_tool_calls
#   @return [Object, nil]
#
# @!attribute [rw] plugins
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
# @!attribute [rw] prompt_cache_options
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
# @!attribute [rw] tool_choice
#   @return [Object, nil]
#
# @!attribute [rw] tools
#   @return [Array, nil]
#
# @!attribute [rw] top_k
#   @return [Integer, nil]
#
# @!attribute [rw] top_logprobs
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
  :instructions,
  :max_output_tokens,
  :max_tool_calls,
  :metadata,
  :modalities,
  :model,
  :models,
  :parallel_tool_calls,
  :plugins,
  :presence_penalty,
  :previous_response_id,
  :prompt,
  :prompt_cache_key,
  :prompt_cache_options,
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
  :tool_choice,
  :tools,
  :top_k,
  :top_logprobs,
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
# @!attribute [rw] instructions
#   @return [Object, nil]
#
# @!attribute [rw] max_output_tokens
#   @return [Object, nil]
#
# @!attribute [rw] max_tool_calls
#   @return [Object, nil]
#
# @!attribute [rw] metadata
#   @return [Object, nil]
#
# @!attribute [rw] modalities
#   @return [Array, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] models
#   @return [Array, nil]
#
# @!attribute [rw] parallel_tool_calls
#   @return [Object, nil]
#
# @!attribute [rw] plugins
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
# @!attribute [rw] prompt_cache_options
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
# @!attribute [rw] tool_choice
#   @return [Object, nil]
#
# @!attribute [rw] tools
#   @return [Array, nil]
#
# @!attribute [rw] top_k
#   @return [Integer, nil]
#
# @!attribute [rw] top_logprobs
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
  :instructions,
  :max_output_tokens,
  :max_tool_calls,
  :metadata,
  :modalities,
  :model,
  :models,
  :parallel_tool_calls,
  :plugins,
  :presence_penalty,
  :previous_response_id,
  :prompt,
  :prompt_cache_key,
  :prompt_cache_options,
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
  :tool_choice,
  :tools,
  :top_k,
  :top_logprobs,
  :top_p,
  :trace,
  :truncation,
  :user,
  keyword_init: true
)

# Organization entity data model.
class Organization
end

# Request payload for Organization#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Object, nil]
OrganizationListMatch = Struct.new(
  :limit,
  :offset,
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
# @!attribute [rw] description
#   @return [Object]
#
# @!attribute [rw] designated_version
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
  :description,
  :designated_version,
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
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Object, nil]
PresetListMatch = Struct.new(
  :limit,
  :offset,
  keyword_init: true
)

# PresetVersion entity data model.
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
PresetVersion = Struct.new(
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
# @!attribute [rw] datacenters
#   @return [Object, nil]
#
# @!attribute [rw] headquarters
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
  :datacenters,
  :headquarters,
  :name,
  :privacy_policy_url,
  :slug,
  :status_page_url,
  :terms_of_service_url,
  keyword_init: true
)

# Request payload for Provider#list.
#
# @!attribute [rw] datacenters
#   @return [Object, nil]
#
# @!attribute [rw] headquarters
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
  :datacenters,
  :headquarters,
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
# @!attribute [rw] total_tokens
#   @return [String]
RankingsDaily = Struct.new(
  :date,
  :model_permaslug,
  :total_tokens,
  keyword_init: true
)

# Request payload for RankingsDaily#list.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] context_bucket
#   @return [String, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] language_type
#   @return [String, nil]
#
# @!attribute [rw] modality
#   @return [String, nil]
#
# @!attribute [rw] period
#   @return [String, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
RankingsDailyListMatch = Struct.new(
  :category,
  :context_bucket,
  :end_date,
  :language_type,
  :modality,
  :period,
  :start_date,
  keyword_init: true
)

# Remove entity data model.
class Remove
end

# Rerank entity data model.
#
# @!attribute [rw] documents
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
# @!attribute [rw] results
#   @return [Array]
#
# @!attribute [rw] top_n
#   @return [Integer, nil]
#
# @!attribute [rw] usage
#   @return [Hash, nil]
Rerank = Struct.new(
  :documents,
  :id,
  :model,
  :provider,
  :query,
  :results,
  :top_n,
  :usage,
  keyword_init: true
)

# Request payload for Rerank#create.
#
# @!attribute [rw] documents
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
# @!attribute [rw] results
#   @return [Array]
#
# @!attribute [rw] top_n
#   @return [Integer, nil]
#
# @!attribute [rw] usage
#   @return [Hash, nil]
RerankCreateData = Struct.new(
  :documents,
  :id,
  :model,
  :provider,
  :query,
  :results,
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
# @!attribute [rw] segments
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
# @!attribute [rw] timestamp_granularities
#   @return [Array, nil]
#
# @!attribute [rw] usage
#   @return [Hash, nil]
#
# @!attribute [rw] words
#   @return [Array, nil]
Stt = Struct.new(
  :duration,
  :input_audio,
  :language,
  :model,
  :provider,
  :response_format,
  :segments,
  :task,
  :temperature,
  :text,
  :timestamp_granularities,
  :usage,
  :words,
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
# @!attribute [rw] segments
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
# @!attribute [rw] timestamp_granularities
#   @return [Array, nil]
#
# @!attribute [rw] usage
#   @return [Hash, nil]
#
# @!attribute [rw] words
#   @return [Array, nil]
SttCreateData = Struct.new(
  :duration,
  :input_audio,
  :language,
  :model,
  :provider,
  :response_format,
  :segments,
  :task,
  :temperature,
  :text,
  :timestamp_granularities,
  :usage,
  :words,
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
# @!attribute [rw] generation_id
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
SubmitGenerationFeedback = Struct.new(
  :category,
  :comment,
  :generation_id,
  :success,
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
# @!attribute [rw] generation_id
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
SubmitGenerationFeedbackCreateData = Struct.new(
  :category,
  :comment,
  :generation_id,
  :success,
  keyword_init: true
)

# Task entity data model.
#
# @!attribute [rw] as_of
#   @return [String]
#
# @!attribute [rw] classifications
#   @return [Array]
#
# @!attribute [rw] macro_categories
#   @return [Array]
#
# @!attribute [rw] window_days
#   @return [Integer]
Task = Struct.new(
  :as_of,
  :classifications,
  :macro_categories,
  :window_days,
  keyword_init: true
)

# Request payload for Task#load.
#
# @!attribute [rw] window
#   @return [String, nil]
TaskLoadMatch = Struct.new(
  :window,
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
# @!attribute [rw] arena
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] max_result
#   @return [Integer, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] task_type
#   @return [String, nil]
UnifiedBenchmarkListMatch = Struct.new(
  :arena,
  :category,
  :max_result,
  :source,
  :task_type,
  keyword_init: true
)

# UpdateByokKey entity data model.
#
# @!attribute [rw] allowed_models
#   @return [Object, nil]
#
# @!attribute [rw] allowed_user_ids
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
# @!attribute [rw] name
#   @return [Object, nil]
UpdateByokKey = Struct.new(
  :allowed_models,
  :allowed_user_ids,
  :disabled,
  :id,
  :is_fallback,
  :key,
  :name,
  keyword_init: true
)

# Request payload for UpdateByokKey#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] allowed_models
#   @return [Object, nil]
#
# @!attribute [rw] allowed_user_ids
#   @return [Object, nil]
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
UpdateByokKeyUpdateData = Struct.new(
  :id,
  :allowed_models,
  :allowed_user_ids,
  :disabled,
  :is_fallback,
  :key,
  :name,
  keyword_init: true
)

# UpdateGuardrail entity data model.
#
# @!attribute [rw] allowed_models
#   @return [Object, nil]
#
# @!attribute [rw] allowed_providers
#   @return [Object, nil]
#
# @!attribute [rw] content_filter_builtins
#   @return [Object, nil]
#
# @!attribute [rw] content_filters
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
# @!attribute [rw] ignored_models
#   @return [Object, nil]
#
# @!attribute [rw] ignored_providers
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
  :allowed_models,
  :allowed_providers,
  :content_filter_builtins,
  :content_filters,
  :description,
  :enforce_zdr,
  :enforce_zdr_anthropic,
  :enforce_zdr_google,
  :enforce_zdr_openai,
  :enforce_zdr_other,
  :enforce_zdr_xai,
  :id,
  :ignored_models,
  :ignored_providers,
  :limit_usd,
  :name,
  :reset_interval,
  keyword_init: true
)

# Request payload for UpdateGuardrail#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] allowed_models
#   @return [Object, nil]
#
# @!attribute [rw] allowed_providers
#   @return [Object, nil]
#
# @!attribute [rw] content_filter_builtins
#   @return [Object, nil]
#
# @!attribute [rw] content_filters
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
# @!attribute [rw] ignored_models
#   @return [Object, nil]
#
# @!attribute [rw] ignored_providers
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
UpdateGuardrailUpdateData = Struct.new(
  :id,
  :allowed_models,
  :allowed_providers,
  :content_filter_builtins,
  :content_filters,
  :description,
  :enforce_zdr,
  :enforce_zdr_anthropic,
  :enforce_zdr_google,
  :enforce_zdr_openai,
  :enforce_zdr_other,
  :enforce_zdr_xai,
  :ignored_models,
  :ignored_providers,
  :limit_usd,
  :name,
  :reset_interval,
  keyword_init: true
)

# UpdateObservabilityDestination entity data model.
#
# @!attribute [rw] api_key_hashes
#   @return [Object, nil]
#
# @!attribute [rw] config
#   @return [Hash, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] filter_rules
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
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
  :api_key_hashes,
  :config,
  :enabled,
  :filter_rules,
  :id,
  :name,
  :privacy_mode,
  :sampling_rate,
  keyword_init: true
)

# Request payload for UpdateObservabilityDestination#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] api_key_hashes
#   @return [Object, nil]
#
# @!attribute [rw] config
#   @return [Hash, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] filter_rules
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
UpdateObservabilityDestinationUpdateData = Struct.new(
  :id,
  :api_key_hashes,
  :config,
  :enabled,
  :filter_rules,
  :name,
  :privacy_mode,
  :sampling_rate,
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
# @!attribute [rw] io_logging_api_key_ids
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
  :default_image_model,
  :default_provider_sort,
  :default_text_model,
  :description,
  :id,
  :io_logging_api_key_ids,
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
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Object, nil]
UpdateWorkspaceListMatch = Struct.new(
  :limit,
  :offset,
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
# @!attribute [rw] io_logging_api_key_ids
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
  :default_image_model,
  :default_provider_sort,
  :default_text_model,
  :description,
  :id,
  :io_logging_api_key_ids,
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
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
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
# @!attribute [rw] io_logging_api_key_ids
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
UpdateWorkspaceUpdateData = Struct.new(
  :id,
  :created_at,
  :created_by,
  :default_image_model,
  :default_provider_sort,
  :default_text_model,
  :description,
  :io_logging_api_key_ids,
  :io_logging_sampling_rate,
  :is_data_discount_logging_enabled,
  :is_observability_broadcast_enabled,
  :is_observability_io_logging_enabled,
  :name,
  :slug,
  :updated_at,
  keyword_init: true
)

# UpsertWorkspaceBudget entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] limit_usd
#   @return [Float]
UpsertWorkspaceBudget = Struct.new(
  :id,
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
#
# @!attribute [rw] limit_usd
#   @return [Float, nil]
UpsertWorkspaceBudgetUpdateData = Struct.new(
  :id,
  :workspace_id,
  :limit_usd,
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
# @!attribute [rw] frame_images
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
# @!attribute [rw] input_references
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
# @!attribute [rw] unsigned_urls
#   @return [Array, nil]
#
# @!attribute [rw] usage
#   @return [Hash, nil]
Video = Struct.new(
  :aspect_ratio,
  :callback_url,
  :duration,
  :error,
  :frame_images,
  :generate_audio,
  :generation_id,
  :id,
  :input_references,
  :model,
  :polling_url,
  :prompt,
  :provider,
  :resolution,
  :seed,
  :size,
  :status,
  :unsigned_urls,
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
# @!attribute [rw] frame_images
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
# @!attribute [rw] input_references
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
# @!attribute [rw] unsigned_urls
#   @return [Array, nil]
#
# @!attribute [rw] usage
#   @return [Hash, nil]
VideoCreateData = Struct.new(
  :aspect_ratio,
  :callback_url,
  :duration,
  :error,
  :frame_images,
  :generate_audio,
  :generation_id,
  :id,
  :input_references,
  :model,
  :polling_url,
  :prompt,
  :provider,
  :resolution,
  :seed,
  :size,
  :status,
  :unsigned_urls,
  :usage,
  keyword_init: true
)

# VideoGeneration entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
VideoGeneration = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for VideoGeneration#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] index
#   @return [Object, nil]
VideoGenerationLoadMatch = Struct.new(
  :id,
  :index,
  keyword_init: true
)

# VideoModelsList entity data model.
#
# @!attribute [rw] allowed_passthrough_parameters
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
# @!attribute [rw] supported_aspect_ratios
#   @return [Object]
#
# @!attribute [rw] supported_durations
#   @return [Object]
#
# @!attribute [rw] supported_frame_images
#   @return [Object]
#
# @!attribute [rw] supported_resolutions
#   @return [Object]
#
# @!attribute [rw] supported_sizes
#   @return [Object]
VideoModelsList = Struct.new(
  :allowed_passthrough_parameters,
  :canonical_slug,
  :created,
  :description,
  :generate_audio,
  :hugging_face_id,
  :id,
  :name,
  :pricing_skus,
  :seed,
  :supported_aspect_ratios,
  :supported_durations,
  :supported_frame_images,
  :supported_resolutions,
  :supported_sizes,
  keyword_init: true
)

# Request payload for VideoModelsList#list.
#
# @!attribute [rw] allowed_passthrough_parameters
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
# @!attribute [rw] supported_aspect_ratios
#   @return [Object, nil]
#
# @!attribute [rw] supported_durations
#   @return [Object, nil]
#
# @!attribute [rw] supported_frame_images
#   @return [Object, nil]
#
# @!attribute [rw] supported_resolutions
#   @return [Object, nil]
#
# @!attribute [rw] supported_sizes
#   @return [Object, nil]
VideoModelsListListMatch = Struct.new(
  :allowed_passthrough_parameters,
  :canonical_slug,
  :created,
  :description,
  :generate_audio,
  :hugging_face_id,
  :id,
  :name,
  :pricing_skus,
  :seed,
  :supported_aspect_ratios,
  :supported_durations,
  :supported_frame_images,
  :supported_resolutions,
  :supported_sizes,
  keyword_init: true
)

# Workspace entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] created_by
#   @return [Object]
#
# @!attribute [rw] default_image_model
#   @return [Object]
#
# @!attribute [rw] default_provider_sort
#   @return [Object]
#
# @!attribute [rw] default_text_model
#   @return [Object]
#
# @!attribute [rw] description
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] io_logging_api_key_ids
#   @return [Object]
#
# @!attribute [rw] io_logging_sampling_rate
#   @return [Float]
#
# @!attribute [rw] is_data_discount_logging_enabled
#   @return [Boolean]
#
# @!attribute [rw] is_observability_broadcast_enabled
#   @return [Boolean]
#
# @!attribute [rw] is_observability_io_logging_enabled
#   @return [Boolean]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [Object]
Workspace = Struct.new(
  :created_at,
  :created_by,
  :default_image_model,
  :default_provider_sort,
  :default_text_model,
  :description,
  :id,
  :io_logging_api_key_ids,
  :io_logging_sampling_rate,
  :is_data_discount_logging_enabled,
  :is_observability_broadcast_enabled,
  :is_observability_io_logging_enabled,
  :name,
  :slug,
  :updated_at,
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
#
# @!attribute [rw] id
#   @return [String, nil]
WorkspaceBudget = Struct.new(
  :id,
  keyword_init: true
)

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

