<?php
declare(strict_types=1);

// Typed models for the OpenrouterModels SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Activity entity data model. */
class Activity
{
    public float $byok_usage_inference;
    public int $completion_tokens;
    public string $date;
    public string $endpoint_id;
    public string $model;
    public string $model_permaslug;
    public int $prompt_tokens;
    public string $provider_name;
    public int $reasoning_tokens;
    public int $requests;
    public float $usage;
}

/** Request payload for Activity#list. */
class ActivityListMatch
{
    public ?float $byok_usage_inference = null;
    public ?int $completion_tokens = null;
    public ?string $date = null;
    public ?string $endpoint_id = null;
    public ?string $model = null;
    public ?string $model_permaslug = null;
    public ?int $prompt_tokens = null;
    public ?string $provider_name = null;
    public ?int $reasoning_tokens = null;
    public ?int $requests = null;
    public ?float $usage = null;
}

/** Add entity data model. */
class Add
{
}

/** ApiKey entity data model. */
class ApiKey
{
    public float $byok_usage;
    public float $byok_usage_daily;
    public float $byok_usage_monthly;
    public float $byok_usage_weekly;
    public string $created_at;
    public mixed $creator_user_id;
    public bool $disabled;
    public mixed $expires_at = null;
    public string $hash;
    public ?string $id = null;
    public bool $include_byok_in_limit;
    public bool $is_free_tier;
    public bool $is_management_key;
    public bool $is_provisioning_key;
    public string $label;
    public mixed $limit;
    public mixed $limit_remaining;
    public mixed $limit_reset;
    public string $name;
    public array $rate_limit;
    public mixed $updated_at;
    public float $usage;
    public float $usage_daily;
    public float $usage_monthly;
    public float $usage_weekly;
    public string $workspace_id;
}

/** Request payload for ApiKey#load. */
class ApiKeyLoadMatch
{
    public string $id;
}

/** Request payload for ApiKey#list. */
class ApiKeyListMatch
{
    public ?float $byok_usage = null;
    public ?float $byok_usage_daily = null;
    public ?float $byok_usage_monthly = null;
    public ?float $byok_usage_weekly = null;
    public ?string $created_at = null;
    public mixed $creator_user_id = null;
    public ?bool $disabled = null;
    public mixed $expires_at = null;
    public ?string $hash = null;
    public ?string $id = null;
    public ?bool $include_byok_in_limit = null;
    public ?bool $is_free_tier = null;
    public ?bool $is_management_key = null;
    public ?bool $is_provisioning_key = null;
    public ?string $label = null;
    public mixed $limit = null;
    public mixed $limit_remaining = null;
    public mixed $limit_reset = null;
    public ?string $name = null;
    public ?array $rate_limit = null;
    public mixed $updated_at = null;
    public ?float $usage = null;
    public ?float $usage_daily = null;
    public ?float $usage_monthly = null;
    public ?float $usage_weekly = null;
    public ?string $workspace_id = null;
}

/** Request payload for ApiKey#create. */
class ApiKeyCreateData
{
    public float $byok_usage;
    public float $byok_usage_daily;
    public float $byok_usage_monthly;
    public float $byok_usage_weekly;
    public string $created_at;
    public mixed $creator_user_id;
    public bool $disabled;
    public mixed $expires_at = null;
    public string $hash;
    public ?string $id = null;
    public bool $include_byok_in_limit;
    public bool $is_free_tier;
    public bool $is_management_key;
    public bool $is_provisioning_key;
    public string $label;
    public mixed $limit;
    public mixed $limit_remaining;
    public mixed $limit_reset;
    public string $name;
    public array $rate_limit;
    public mixed $updated_at;
    public float $usage;
    public float $usage_daily;
    public float $usage_monthly;
    public float $usage_weekly;
    public string $workspace_id;
}

/** Request payload for ApiKey#update. */
class ApiKeyUpdateData
{
    public string $id;
    public ?float $byok_usage = null;
    public ?float $byok_usage_daily = null;
    public ?float $byok_usage_monthly = null;
    public ?float $byok_usage_weekly = null;
    public ?string $created_at = null;
    public mixed $creator_user_id = null;
    public ?bool $disabled = null;
    public mixed $expires_at = null;
    public ?string $hash = null;
    public ?bool $include_byok_in_limit = null;
    public ?bool $is_free_tier = null;
    public ?bool $is_management_key = null;
    public ?bool $is_provisioning_key = null;
    public ?string $label = null;
    public mixed $limit = null;
    public mixed $limit_remaining = null;
    public mixed $limit_reset = null;
    public ?string $name = null;
    public ?array $rate_limit = null;
    public mixed $updated_at = null;
    public ?float $usage = null;
    public ?float $usage_daily = null;
    public ?float $usage_monthly = null;
    public ?float $usage_weekly = null;
    public ?string $workspace_id = null;
}

/** Request payload for ApiKey#remove. */
class ApiKeyRemoveMatch
{
    public string $id;
}

/** AppRanking entity data model. */
class AppRanking
{
    public int $app_id;
    public string $app_name;
    public int $rank;
    public int $total_requests;
    public string $total_tokens;
}

/** Request payload for AppRanking#list. */
class AppRankingListMatch
{
    public ?int $app_id = null;
    public ?string $app_name = null;
    public ?int $rank = null;
    public ?int $total_requests = null;
    public ?string $total_tokens = null;
}

/** Benchmark entity data model. */
class Benchmark
{
}

/** BetaAnalytics entity data model. */
class BetaAnalytics
{
    public ?float $cachedAt = null;
    public array $classifier_dimensions;
    public array $classifier_filters;
    public array $data;
    public array $dimensions;
    public ?array $filters = null;
    public array $granularities;
    public ?string $granularity = null;
    public ?int $group_limit = null;
    public ?int $limit = null;
    public array $metadata;
    public array $metrics;
    public array $operators;
    public array $order_by;
    public array $time_range;
    public ?array $warnings = null;
}

/** Request payload for BetaAnalytics#load. */
class BetaAnalyticsLoadMatch
{
    public ?float $cachedAt = null;
    public ?array $classifier_dimensions = null;
    public ?array $classifier_filters = null;
    public ?array $data = null;
    public ?array $dimensions = null;
    public ?array $filters = null;
    public ?array $granularities = null;
    public ?string $granularity = null;
    public ?int $group_limit = null;
    public ?int $limit = null;
    public ?array $metadata = null;
    public ?array $metrics = null;
    public ?array $operators = null;
    public ?array $order_by = null;
    public ?array $time_range = null;
    public ?array $warnings = null;
}

/** Request payload for BetaAnalytics#create. */
class BetaAnalyticsCreateData
{
    public ?float $cachedAt = null;
    public array $classifier_dimensions;
    public array $classifier_filters;
    public array $data;
    public array $dimensions;
    public ?array $filters = null;
    public array $granularities;
    public ?string $granularity = null;
    public ?int $group_limit = null;
    public ?int $limit = null;
    public array $metadata;
    public array $metrics;
    public array $operators;
    public array $order_by;
    public array $time_range;
    public ?array $warnings = null;
}

/** Budget entity data model. */
class Budget
{
}

/** BulkAddWorkspaceMember entity data model. */
class BulkAddWorkspaceMember
{
    public int $added_count;
    public array $data;
    public array $user_ids;
}

/** Request payload for BulkAddWorkspaceMember#create. */
class BulkAddWorkspaceMemberCreateData
{
    public string $workspace_id;
    public int $added_count;
    public array $data;
    public array $user_ids;
}

/** BulkAssignKey entity data model. */
class BulkAssignKey
{
    public int $assigned_count;
    public array $key_hashes;
}

/** Request payload for BulkAssignKey#create. */
class BulkAssignKeyCreateData
{
    public string $guardrail_id;
    public int $assigned_count;
    public array $key_hashes;
}

/** BulkAssignMember entity data model. */
class BulkAssignMember
{
    public int $assigned_count;
    public array $member_user_ids;
}

/** Request payload for BulkAssignMember#create. */
class BulkAssignMemberCreateData
{
    public string $guardrail_id;
    public int $assigned_count;
    public array $member_user_ids;
}

/** BulkRemoveWorkspaceMember entity data model. */
class BulkRemoveWorkspaceMember
{
    public int $removed_count;
    public array $user_ids;
}

/** Request payload for BulkRemoveWorkspaceMember#create. */
class BulkRemoveWorkspaceMemberCreateData
{
    public string $workspace_id;
    public int $removed_count;
    public array $user_ids;
}

/** BulkUnassignKey entity data model. */
class BulkUnassignKey
{
    public array $key_hashes;
    public int $unassigned_count;
}

/** Request payload for BulkUnassignKey#create. */
class BulkUnassignKeyCreateData
{
    public string $guardrail_id;
    public array $key_hashes;
    public int $unassigned_count;
}

/** BulkUnassignMember entity data model. */
class BulkUnassignMember
{
    public array $member_user_ids;
    public int $unassigned_count;
}

/** Request payload for BulkUnassignMember#create. */
class BulkUnassignMemberCreateData
{
    public string $guardrail_id;
    public array $member_user_ids;
    public int $unassigned_count;
}

/** Byok entity data model. */
class Byok
{
    public mixed $allowed_api_key_hashes;
    public mixed $allowed_models;
    public mixed $allowed_user_ids;
    public string $created_at;
    public bool $disabled;
    public string $id;
    public bool $is_fallback;
    public string $key;
    public string $label;
    public mixed $name = null;
    public string $provider;
    public int $sort_order;
    public string $workspace_id;
}

/** Request payload for Byok#load. */
class ByokLoadMatch
{
    public string $id;
}

/** Request payload for Byok#list. */
class ByokListMatch
{
    public mixed $allowed_api_key_hashes = null;
    public mixed $allowed_models = null;
    public mixed $allowed_user_ids = null;
    public ?string $created_at = null;
    public ?bool $disabled = null;
    public ?string $id = null;
    public ?bool $is_fallback = null;
    public ?string $key = null;
    public ?string $label = null;
    public mixed $name = null;
    public ?string $provider = null;
    public ?int $sort_order = null;
    public ?string $workspace_id = null;
}

/** Request payload for Byok#create. */
class ByokCreateData
{
    public mixed $allowed_api_key_hashes;
    public mixed $allowed_models;
    public mixed $allowed_user_ids;
    public string $created_at;
    public bool $disabled;
    public string $id;
    public bool $is_fallback;
    public string $key;
    public string $label;
    public mixed $name = null;
    public string $provider;
    public int $sort_order;
    public string $workspace_id;
}

/** Request payload for Byok#remove. */
class ByokRemoveMatch
{
    public string $id;
}

/** ChatResult entity data model. */
class ChatResult
{
    public array $cache_control;
    public array $choices;
    public int $created;
    public ?array $debug = null;
    public mixed $frequency_penalty = null;
    public string $id;
    public ?array $image_config = null;
    public mixed $logit_bias = null;
    public mixed $logprobs = null;
    public mixed $max_completion_tokens = null;
    public mixed $max_tokens = null;
    public array $messages;
    public ?array $metadata = null;
    public mixed $min_p = null;
    public ?array $modalities = null;
    public string $model;
    public ?array $models = null;
    public string $object;
    public array $openrouter_metadata;
    public mixed $parallel_tool_calls = null;
    public ?array $plugins = null;
    public mixed $prediction;
    public mixed $presence_penalty = null;
    public mixed $prompt_cache_key = null;
    public mixed $prompt_cache_options;
    public mixed $provider = null;
    public ?array $reasoning = null;
    public mixed $reasoning_effort = null;
    public mixed $repetition_penalty = null;
    public mixed $response_format = null;
    public mixed $route = null;
    public mixed $seed = null;
    public mixed $service_tier = null;
    public ?string $session_id = null;
    public mixed $stop = null;
    public ?array $stop_server_tools_when = null;
    public ?bool $stream = null;
    public mixed $stream_options = null;
    public mixed $system_fingerprint;
    public mixed $temperature = null;
    public mixed $tool_choice = null;
    public ?array $tools = null;
    public mixed $top_a = null;
    public mixed $top_k = null;
    public mixed $top_logprobs = null;
    public mixed $top_p = null;
    public ?array $trace = null;
    public array $usage;
    public ?string $user = null;
}

/** Request payload for ChatResult#create. */
class ChatResultCreateData
{
    public array $cache_control;
    public array $choices;
    public int $created;
    public ?array $debug = null;
    public mixed $frequency_penalty = null;
    public string $id;
    public ?array $image_config = null;
    public mixed $logit_bias = null;
    public mixed $logprobs = null;
    public mixed $max_completion_tokens = null;
    public mixed $max_tokens = null;
    public array $messages;
    public ?array $metadata = null;
    public mixed $min_p = null;
    public ?array $modalities = null;
    public string $model;
    public ?array $models = null;
    public string $object;
    public array $openrouter_metadata;
    public mixed $parallel_tool_calls = null;
    public ?array $plugins = null;
    public mixed $prediction;
    public mixed $presence_penalty = null;
    public mixed $prompt_cache_key = null;
    public mixed $prompt_cache_options;
    public mixed $provider = null;
    public ?array $reasoning = null;
    public mixed $reasoning_effort = null;
    public mixed $repetition_penalty = null;
    public mixed $response_format = null;
    public mixed $route = null;
    public mixed $seed = null;
    public mixed $service_tier = null;
    public ?string $session_id = null;
    public mixed $stop = null;
    public ?array $stop_server_tools_when = null;
    public ?bool $stream = null;
    public mixed $stream_options = null;
    public mixed $system_fingerprint;
    public mixed $temperature = null;
    public mixed $tool_choice = null;
    public ?array $tools = null;
    public mixed $top_a = null;
    public mixed $top_k = null;
    public mixed $top_logprobs = null;
    public mixed $top_p = null;
    public ?array $trace = null;
    public array $usage;
    public ?string $user = null;
}

/** Code entity data model. */
class Code
{
}

/** Coinbase entity data model. */
class Coinbase
{
}

/** Completion entity data model. */
class Completion
{
}

/** Content entity data model. */
class Content
{
}

/** Count entity data model. */
class Count
{
}

/** CreateByokKey entity data model. */
class CreateByokKey
{
}

/** CreateGuardrail entity data model. */
class CreateGuardrail
{
}

/** CreateObservabilityDestination entity data model. */
class CreateObservabilityDestination
{
    public mixed $api_key_hashes = null;
    public array $config;
    public ?bool $enabled = null;
    public mixed $filter_rules;
    public string $name;
    public ?bool $privacy_mode = null;
    public ?float $sampling_rate = null;
    public string $type;
    public ?string $workspace_id = null;
}

/** Request payload for CreateObservabilityDestination#create. */
class CreateObservabilityDestinationCreateData
{
    public mixed $api_key_hashes = null;
    public array $config;
    public ?bool $enabled = null;
    public mixed $filter_rules;
    public string $name;
    public ?bool $privacy_mode = null;
    public ?float $sampling_rate = null;
    public string $type;
    public ?string $workspace_id = null;
}

/** CreatePresetFromInference entity data model. */
class CreatePresetFromInference
{
    public mixed $background = null;
    public array $cache_control;
    public mixed $context_management = null;
    public ?array $debug = null;
    public mixed $fallbacks = null;
    public mixed $frequency_penalty = null;
    public ?array $image_config = null;
    public mixed $include = null;
    public mixed $input = null;
    public mixed $instructions = null;
    public mixed $logit_bias = null;
    public mixed $logprobs = null;
    public mixed $max_completion_tokens = null;
    public mixed $max_output_tokens = null;
    public mixed $max_tokens = null;
    public mixed $max_tool_calls = null;
    public array $messages;
    public ?array $metadata = null;
    public mixed $min_p = null;
    public ?array $modalities = null;
    public ?string $model = null;
    public ?array $models = null;
    public ?array $output_config = null;
    public mixed $parallel_tool_calls = null;
    public ?array $plugins = null;
    public mixed $prediction;
    public mixed $presence_penalty = null;
    public ?string $previous_response_id = null;
    public mixed $prompt;
    public mixed $prompt_cache_key = null;
    public mixed $prompt_cache_options;
    public mixed $provider = null;
    public ?array $reasoning = null;
    public mixed $reasoning_effort = null;
    public mixed $repetition_penalty = null;
    public mixed $response_format = null;
    public mixed $route = null;
    public mixed $safety_identifier = null;
    public mixed $seed = null;
    public mixed $service_tier = null;
    public ?string $session_id = null;
    public mixed $speed = null;
    public mixed $stop = null;
    public ?array $stop_sequences = null;
    public ?array $stop_server_tools_when = null;
    public ?bool $store = null;
    public ?bool $stream = null;
    public mixed $stream_options = null;
    public mixed $system = null;
    public mixed $temperature = null;
    public mixed $text = null;
    public mixed $thinking = null;
    public mixed $tool_choice = null;
    public ?array $tools = null;
    public mixed $top_a = null;
    public mixed $top_k = null;
    public mixed $top_logprobs = null;
    public mixed $top_p = null;
    public ?array $trace = null;
    public mixed $truncation = null;
    public ?string $user = null;
}

/** Request payload for CreatePresetFromInference#create. */
class CreatePresetFromInferenceCreateData
{
    public string $slug;
    public mixed $background = null;
    public array $cache_control;
    public mixed $context_management = null;
    public ?array $debug = null;
    public mixed $fallbacks = null;
    public mixed $frequency_penalty = null;
    public ?array $image_config = null;
    public mixed $include = null;
    public mixed $input = null;
    public mixed $instructions = null;
    public mixed $logit_bias = null;
    public mixed $logprobs = null;
    public mixed $max_completion_tokens = null;
    public mixed $max_output_tokens = null;
    public mixed $max_tokens = null;
    public mixed $max_tool_calls = null;
    public array $messages;
    public ?array $metadata = null;
    public mixed $min_p = null;
    public ?array $modalities = null;
    public ?string $model = null;
    public ?array $models = null;
    public ?array $output_config = null;
    public mixed $parallel_tool_calls = null;
    public ?array $plugins = null;
    public mixed $prediction;
    public mixed $presence_penalty = null;
    public ?string $previous_response_id = null;
    public mixed $prompt;
    public mixed $prompt_cache_key = null;
    public mixed $prompt_cache_options;
    public mixed $provider = null;
    public ?array $reasoning = null;
    public mixed $reasoning_effort = null;
    public mixed $repetition_penalty = null;
    public mixed $response_format = null;
    public mixed $route = null;
    public mixed $safety_identifier = null;
    public mixed $seed = null;
    public mixed $service_tier = null;
    public ?string $session_id = null;
    public mixed $speed = null;
    public mixed $stop = null;
    public ?array $stop_sequences = null;
    public ?array $stop_server_tools_when = null;
    public ?bool $store = null;
    public ?bool $stream = null;
    public mixed $stream_options = null;
    public mixed $system = null;
    public mixed $temperature = null;
    public mixed $text = null;
    public mixed $thinking = null;
    public mixed $tool_choice = null;
    public ?array $tools = null;
    public mixed $top_a = null;
    public mixed $top_k = null;
    public mixed $top_logprobs = null;
    public mixed $top_p = null;
    public ?array $trace = null;
    public mixed $truncation = null;
    public ?string $user = null;
}

/** CreateWorkspace entity data model. */
class CreateWorkspace
{
}

/** Credit entity data model. */
class Credit
{
    public float $total_credits;
    public float $total_usage;
}

/** Request payload for Credit#load. */
class CreditLoadMatch
{
    public ?float $total_credits = null;
    public ?float $total_usage = null;
}

/** Request payload for Credit#create. */
class CreditCreateData
{
    public float $total_credits;
    public float $total_usage;
}

/** Destination entity data model. */
class Destination
{
}

/** Embedding entity data model. */
class Embedding
{
    public array $data;
    public ?int $dimensions = null;
    public ?string $encoding_format = null;
    public ?string $id = null;
    public mixed $input;
    public ?string $input_type = null;
    public string $model;
    public string $object;
    public mixed $provider = null;
    public array $usage;
    public ?string $user = null;
}

/** Request payload for Embedding#create. */
class EmbeddingCreateData
{
    public array $data;
    public ?int $dimensions = null;
    public ?string $encoding_format = null;
    public ?string $id = null;
    public mixed $input;
    public ?string $input_type = null;
    public string $model;
    public string $object;
    public mixed $provider = null;
    public array $usage;
    public ?string $user = null;
}

/** Endpoint entity data model. */
class Endpoint
{
    public mixed $architecture;
    public array $benchmarks;
    public string $canonical_slug;
    public mixed $context_length;
    public int $created;
    public mixed $default_parameters;
    public string $description;
    public array $endpoints;
    public mixed $expiration_date = null;
    public mixed $hugging_face_id = null;
    public string $id;
    public mixed $knowledge_cutoff = null;
    public mixed $latency_last_30m;
    public array $links;
    public mixed $max_completion_tokens;
    public mixed $max_prompt_tokens;
    public string $model_id;
    public string $model_name;
    public string $name;
    public mixed $per_request_limits;
    public array $pricing;
    public string $provider_name;
    public mixed $quantization;
    public array $reasoning;
    public ?int $status = null;
    public array $supported_parameters;
    public mixed $supported_voices;
    public bool $supports_implicit_caching;
    public string $tag;
    public mixed $throughput_last_30m;
    public array $top_provider;
    public mixed $uptime_last_1d;
    public mixed $uptime_last_30m;
    public mixed $uptime_last_5m;
}

/** Request payload for Endpoint#load. */
class EndpointLoadMatch
{
    public string $author;
    public string $slug;
}

/** Request payload for Endpoint#list. */
class EndpointListMatch
{
    public mixed $architecture = null;
    public ?array $benchmarks = null;
    public ?string $canonical_slug = null;
    public mixed $context_length = null;
    public ?int $created = null;
    public mixed $default_parameters = null;
    public ?string $description = null;
    public ?array $endpoints = null;
    public mixed $expiration_date = null;
    public mixed $hugging_face_id = null;
    public ?string $id = null;
    public mixed $knowledge_cutoff = null;
    public mixed $latency_last_30m = null;
    public ?array $links = null;
    public mixed $max_completion_tokens = null;
    public mixed $max_prompt_tokens = null;
    public ?string $model_id = null;
    public ?string $model_name = null;
    public ?string $name = null;
    public mixed $per_request_limits = null;
    public ?array $pricing = null;
    public ?string $provider_name = null;
    public mixed $quantization = null;
    public ?array $reasoning = null;
    public ?int $status = null;
    public ?array $supported_parameters = null;
    public mixed $supported_voices = null;
    public ?bool $supports_implicit_caching = null;
    public ?string $tag = null;
    public mixed $throughput_last_30m = null;
    public ?array $top_provider = null;
    public mixed $uptime_last_1d = null;
    public mixed $uptime_last_30m = null;
    public mixed $uptime_last_5m = null;
}

/** Feedback entity data model. */
class Feedback
{
}

/** File entity data model. */
class File
{
    public string $created_at;
    public bool $downloadable;
    public string $filename;
    public string $id;
    public string $mime_type;
    public int $size_bytes;
    public string $type;
}

/** Request payload for File#load. */
class FileLoadMatch
{
    public string $id;
}

/** Request payload for File#list. */
class FileListMatch
{
    public ?string $created_at = null;
    public ?bool $downloadable = null;
    public ?string $filename = null;
    public ?string $id = null;
    public ?string $mime_type = null;
    public ?int $size_bytes = null;
    public ?string $type = null;
}

/** Request payload for File#create. */
class FileCreateData
{
    public string $created_at;
    public bool $downloadable;
    public string $filename;
    public string $id;
    public string $mime_type;
    public int $size_bytes;
    public string $type;
}

/** Request payload for File#remove. */
class FileRemoveMatch
{
    public string $id;
}

/** Generation entity data model. */
class Generation
{
    public mixed $api_type;
    public mixed $app_id;
    public mixed $cache_discount;
    public mixed $cancelled;
    public string $created_at;
    public string $data_region;
    public mixed $external_user;
    public mixed $finish_reason;
    public mixed $generation_time;
    public mixed $http_referer;
    public string $id;
    public bool $is_byok;
    public mixed $latency;
    public string $model;
    public mixed $moderation_latency;
    public mixed $native_finish_reason;
    public mixed $native_tokens_cached;
    public mixed $native_tokens_completion;
    public mixed $native_tokens_completion_images;
    public mixed $native_tokens_prompt;
    public mixed $native_tokens_reasoning;
    public mixed $num_fetches;
    public mixed $num_input_audio_prompt;
    public mixed $num_media_completion;
    public mixed $num_media_prompt;
    public mixed $num_search_results;
    public string $origin;
    public mixed $preset_id;
    public mixed $provider_name;
    public mixed $provider_responses;
    public mixed $request_id = null;
    public mixed $response_cache_source_id = null;
    public mixed $router;
    public mixed $service_tier;
    public mixed $session_id = null;
    public mixed $streamed;
    public mixed $tokens_completion;
    public mixed $tokens_prompt;
    public float $total_cost;
    public mixed $upstream_id;
    public mixed $upstream_inference_cost;
    public float $usage;
    public mixed $user_agent;
    public mixed $web_search_engine;
}

/** Request payload for Generation#load. */
class GenerationLoadMatch
{
    public mixed $api_type = null;
    public mixed $app_id = null;
    public mixed $cache_discount = null;
    public mixed $cancelled = null;
    public ?string $created_at = null;
    public ?string $data_region = null;
    public mixed $external_user = null;
    public mixed $finish_reason = null;
    public mixed $generation_time = null;
    public mixed $http_referer = null;
    public string $id;
    public ?bool $is_byok = null;
    public mixed $latency = null;
    public ?string $model = null;
    public mixed $moderation_latency = null;
    public mixed $native_finish_reason = null;
    public mixed $native_tokens_cached = null;
    public mixed $native_tokens_completion = null;
    public mixed $native_tokens_completion_images = null;
    public mixed $native_tokens_prompt = null;
    public mixed $native_tokens_reasoning = null;
    public mixed $num_fetches = null;
    public mixed $num_input_audio_prompt = null;
    public mixed $num_media_completion = null;
    public mixed $num_media_prompt = null;
    public mixed $num_search_results = null;
    public ?string $origin = null;
    public mixed $preset_id = null;
    public mixed $provider_name = null;
    public mixed $provider_responses = null;
    public mixed $request_id = null;
    public mixed $response_cache_source_id = null;
    public mixed $router = null;
    public mixed $service_tier = null;
    public mixed $session_id = null;
    public mixed $streamed = null;
    public mixed $tokens_completion = null;
    public mixed $tokens_prompt = null;
    public ?float $total_cost = null;
    public mixed $upstream_id = null;
    public mixed $upstream_inference_cost = null;
    public ?float $usage = null;
    public mixed $user_agent = null;
    public mixed $web_search_engine = null;
}

/** GenerationContent entity data model. */
class GenerationContent
{
    public mixed $input;
    public array $output;
}

/** Request payload for GenerationContent#load. */
class GenerationContentLoadMatch
{
    public mixed $input = null;
    public ?array $output = null;
}

/** Guardrail entity data model. */
class Guardrail
{
    public mixed $allowed_models = null;
    public mixed $allowed_providers = null;
    public mixed $content_filter_builtins = null;
    public mixed $content_filters = null;
    public string $created_at;
    public mixed $description = null;
    public mixed $enforce_zdr = null;
    public mixed $enforce_zdr_anthropic = null;
    public mixed $enforce_zdr_google = null;
    public mixed $enforce_zdr_openai = null;
    public mixed $enforce_zdr_other = null;
    public mixed $enforce_zdr_xai = null;
    public string $id;
    public mixed $ignored_models = null;
    public mixed $ignored_providers = null;
    public mixed $limit_usd = null;
    public string $name;
    public mixed $reset_interval = null;
    public mixed $updated_at = null;
    public string $workspace_id;
}

/** Request payload for Guardrail#load. */
class GuardrailLoadMatch
{
    public string $id;
}

/** Request payload for Guardrail#list. */
class GuardrailListMatch
{
    public mixed $allowed_models = null;
    public mixed $allowed_providers = null;
    public mixed $content_filter_builtins = null;
    public mixed $content_filters = null;
    public ?string $created_at = null;
    public mixed $description = null;
    public mixed $enforce_zdr = null;
    public mixed $enforce_zdr_anthropic = null;
    public mixed $enforce_zdr_google = null;
    public mixed $enforce_zdr_openai = null;
    public mixed $enforce_zdr_other = null;
    public mixed $enforce_zdr_xai = null;
    public ?string $id = null;
    public mixed $ignored_models = null;
    public mixed $ignored_providers = null;
    public mixed $limit_usd = null;
    public ?string $name = null;
    public mixed $reset_interval = null;
    public mixed $updated_at = null;
    public ?string $workspace_id = null;
}

/** Request payload for Guardrail#create. */
class GuardrailCreateData
{
    public mixed $allowed_models = null;
    public mixed $allowed_providers = null;
    public mixed $content_filter_builtins = null;
    public mixed $content_filters = null;
    public string $created_at;
    public mixed $description = null;
    public mixed $enforce_zdr = null;
    public mixed $enforce_zdr_anthropic = null;
    public mixed $enforce_zdr_google = null;
    public mixed $enforce_zdr_openai = null;
    public mixed $enforce_zdr_other = null;
    public mixed $enforce_zdr_xai = null;
    public string $id;
    public mixed $ignored_models = null;
    public mixed $ignored_providers = null;
    public mixed $limit_usd = null;
    public string $name;
    public mixed $reset_interval = null;
    public mixed $updated_at = null;
    public string $workspace_id;
}

/** Request payload for Guardrail#remove. */
class GuardrailRemoveMatch
{
    public string $id;
}

/** Image entity data model. */
class Image
{
    public ?string $aspect_ratio = null;
    public ?string $background = null;
    public int $created;
    public array $data;
    public ?array $input_references = null;
    public string $model;
    public ?int $n = null;
    public ?int $output_compression = null;
    public ?string $output_format = null;
    public string $prompt;
    public ?array $provider = null;
    public ?string $quality = null;
    public ?string $resolution = null;
    public ?int $seed = null;
    public ?string $size = null;
    public ?bool $stream = null;
    public array $usage;
}

/** Request payload for Image#create. */
class ImageCreateData
{
    public ?string $aspect_ratio = null;
    public ?string $background = null;
    public int $created;
    public array $data;
    public ?array $input_references = null;
    public string $model;
    public ?int $n = null;
    public ?int $output_compression = null;
    public ?string $output_format = null;
    public string $prompt;
    public ?array $provider = null;
    public ?string $quality = null;
    public ?string $resolution = null;
    public ?int $seed = null;
    public ?string $size = null;
    public ?bool $stream = null;
    public array $usage;
}

/** ImageModelEndpoint entity data model. */
class ImageModelEndpoint
{
    public array $allowed_passthrough_parameters;
    public array $pricing;
    public string $provider_name;
    public string $provider_slug;
    public mixed $provider_tag;
    public mixed $supported_parameters;
    public bool $supports_streaming;
}

/** Request payload for ImageModelEndpoint#list. */
class ImageModelEndpointListMatch
{
    public string $model_id;
    public string $slug;
}

/** ImageModelsList entity data model. */
class ImageModelsList
{
    public array $architecture;
    public int $created;
    public string $description;
    public string $endpoints;
    public string $id;
    public string $name;
    public array $supported_parameters;
    public bool $supports_streaming;
}

/** Request payload for ImageModelsList#list. */
class ImageModelsListListMatch
{
    public ?array $architecture = null;
    public ?int $created = null;
    public ?string $description = null;
    public ?string $endpoints = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?array $supported_parameters = null;
    public ?bool $supports_streaming = null;
}

/** Key entity data model. */
class Key
{
}

/** ListByokKey entity data model. */
class ListByokKey
{
}

/** ListGuardrail entity data model. */
class ListGuardrail
{
}

/** ListKeyAssignment entity data model. */
class ListKeyAssignment
{
    public mixed $assigned_by;
    public string $created_at;
    public string $guardrail_id;
    public string $id;
    public string $key_hash;
    public string $key_label;
    public string $key_name;
}

/** Request payload for ListKeyAssignment#list. */
class ListKeyAssignmentListMatch
{
    public mixed $assigned_by = null;
    public ?string $created_at = null;
    public ?string $guardrail_id = null;
    public ?string $id = null;
    public ?string $key_hash = null;
    public ?string $key_label = null;
    public ?string $key_name = null;
}

/** ListMemberAssignment entity data model. */
class ListMemberAssignment
{
    public mixed $assigned_by;
    public string $created_at;
    public string $guardrail_id;
    public string $id;
    public string $organization_id;
    public string $user_id;
}

/** Request payload for ListMemberAssignment#list. */
class ListMemberAssignmentListMatch
{
    public mixed $assigned_by = null;
    public ?string $created_at = null;
    public ?string $guardrail_id = null;
    public ?string $id = null;
    public ?string $organization_id = null;
    public ?string $user_id = null;
}

/** ListObservabilityDestination entity data model. */
class ListObservabilityDestination
{
    public array $data;
    public int $total_count;
}

/** Request payload for ListObservabilityDestination#list. */
class ListObservabilityDestinationListMatch
{
    public ?array $data = null;
    public ?int $total_count = null;
}

/** ListPreset entity data model. */
class ListPreset
{
}

/** ListPresetVersion entity data model. */
class ListPresetVersion
{
    public array $config;
    public string $created_at;
    public string $creator_id;
    public string $id;
    public string $preset_id;
    public mixed $system_prompt;
    public string $updated_at;
    public int $version;
}

/** Request payload for ListPresetVersion#list. */
class ListPresetVersionListMatch
{
    public string $slug;
}

/** ListWorkspace entity data model. */
class ListWorkspace
{
}

/** ListWorkspaceBudget entity data model. */
class ListWorkspaceBudget
{
    public string $created_at;
    public string $id;
    public float $limit_usd;
    public mixed $reset_interval;
    public string $updated_at;
    public string $workspace_id;
}

/** Request payload for ListWorkspaceBudget#list. */
class ListWorkspaceBudgetListMatch
{
    public string $workspace_id;
}

/** ListWorkspaceMember entity data model. */
class ListWorkspaceMember
{
    public string $created_at;
    public string $id;
    public string $role;
    public string $user_id;
    public string $workspace_id;
}

/** Request payload for ListWorkspaceMember#list. */
class ListWorkspaceMemberListMatch
{
    public string $workspace_id;
}

/** Member entity data model. */
class Member
{
}

/** Message entity data model. */
class Message
{
    public array $cache_control;
    public mixed $context_management = null;
    public mixed $fallbacks = null;
    public ?int $max_tokens = null;
    public mixed $messages;
    public ?array $metadata = null;
    public string $model;
    public ?array $models = null;
    public ?array $output_config = null;
    public ?array $plugins = null;
    public mixed $provider = null;
    public mixed $route = null;
    public ?string $service_tier = null;
    public ?string $session_id = null;
    public mixed $speed = null;
    public ?array $stop_sequences = null;
    public ?array $stop_server_tools_when = null;
    public ?bool $stream = null;
    public mixed $system = null;
    public ?float $temperature = null;
    public mixed $thinking = null;
    public mixed $tool_choice = null;
    public ?array $tools = null;
    public ?int $top_k = null;
    public ?float $top_p = null;
    public ?array $trace = null;
    public ?string $user = null;
}

/** Request payload for Message#create. */
class MessageCreateData
{
    public array $cache_control;
    public mixed $context_management = null;
    public mixed $fallbacks = null;
    public ?int $max_tokens = null;
    public mixed $messages;
    public ?array $metadata = null;
    public string $model;
    public ?array $models = null;
    public ?array $output_config = null;
    public ?array $plugins = null;
    public mixed $provider = null;
    public mixed $route = null;
    public ?string $service_tier = null;
    public ?string $session_id = null;
    public mixed $speed = null;
    public ?array $stop_sequences = null;
    public ?array $stop_server_tools_when = null;
    public ?bool $stream = null;
    public mixed $system = null;
    public ?float $temperature = null;
    public mixed $thinking = null;
    public mixed $tool_choice = null;
    public ?array $tools = null;
    public ?int $top_k = null;
    public ?float $top_p = null;
    public ?array $trace = null;
    public ?string $user = null;
}

/** Meta entity data model. */
class Meta
{
}

/** Model entity data model. */
class Model
{
    public array $architecture;
    public array $benchmarks;
    public string $canonical_slug;
    public mixed $context_length;
    public int $created;
    public mixed $default_parameters;
    public ?string $description = null;
    public mixed $expiration_date = null;
    public mixed $hugging_face_id = null;
    public string $id;
    public mixed $knowledge_cutoff = null;
    public array $links;
    public string $name;
    public mixed $per_request_limits;
    public array $pricing;
    public array $reasoning;
    public array $supported_parameters;
    public mixed $supported_voices;
    public array $top_provider;
}

/** Request payload for Model#load. */
class ModelLoadMatch
{
    public string $author;
    public string $slug;
}

/** Request payload for Model#list. */
class ModelListMatch
{
    public ?array $architecture = null;
    public ?array $benchmarks = null;
    public ?string $canonical_slug = null;
    public mixed $context_length = null;
    public ?int $created = null;
    public mixed $default_parameters = null;
    public ?string $description = null;
    public mixed $expiration_date = null;
    public mixed $hugging_face_id = null;
    public ?string $id = null;
    public mixed $knowledge_cutoff = null;
    public ?array $links = null;
    public ?string $name = null;
    public mixed $per_request_limits = null;
    public ?array $pricing = null;
    public ?array $reasoning = null;
    public ?array $supported_parameters = null;
    public mixed $supported_voices = null;
    public ?array $top_provider = null;
}

/** ModelsCount entity data model. */
class ModelsCount
{
    public int $count;
}

/** Request payload for ModelsCount#load. */
class ModelsCountLoadMatch
{
    public ?int $count = null;
}

/** ModelsList entity data model. */
class ModelsList
{
    public array $architecture;
    public array $benchmarks;
    public string $canonical_slug;
    public mixed $context_length;
    public int $created;
    public mixed $default_parameters;
    public ?string $description = null;
    public mixed $expiration_date = null;
    public mixed $hugging_face_id = null;
    public string $id;
    public mixed $knowledge_cutoff = null;
    public array $links;
    public string $name;
    public mixed $per_request_limits;
    public array $pricing;
    public array $reasoning;
    public array $supported_parameters;
    public mixed $supported_voices;
    public array $top_provider;
}

/** Request payload for ModelsList#list. */
class ModelsListListMatch
{
    public ?array $architecture = null;
    public ?array $benchmarks = null;
    public ?string $canonical_slug = null;
    public mixed $context_length = null;
    public ?int $created = null;
    public mixed $default_parameters = null;
    public ?string $description = null;
    public mixed $expiration_date = null;
    public mixed $hugging_face_id = null;
    public ?string $id = null;
    public mixed $knowledge_cutoff = null;
    public ?array $links = null;
    public ?string $name = null;
    public mixed $per_request_limits = null;
    public ?array $pricing = null;
    public ?array $reasoning = null;
    public ?array $supported_parameters = null;
    public mixed $supported_voices = null;
    public ?array $top_provider = null;
}

/** OAuth entity data model. */
class OAuth
{
    public int $app_id;
    public string $callback_url;
    public string $code;
    public ?string $code_challenge = null;
    public mixed $code_challenge_method = null;
    public ?string $code_verifier = null;
    public string $created_at;
    public mixed $expires_at = null;
    public string $id;
    public string $key;
    public ?string $key_label = null;
    public ?float $limit = null;
    public ?string $spawn_agent = null;
    public ?string $spawn_cloud = null;
    public ?string $usage_limit_type = null;
    public mixed $user_id;
    public ?string $workspace_id = null;
}

/** Request payload for OAuth#create. */
class OAuthCreateData
{
    public int $app_id;
    public string $callback_url;
    public string $code;
    public ?string $code_challenge = null;
    public mixed $code_challenge_method = null;
    public ?string $code_verifier = null;
    public string $created_at;
    public mixed $expires_at = null;
    public string $id;
    public string $key;
    public ?string $key_label = null;
    public ?float $limit = null;
    public ?string $spawn_agent = null;
    public ?string $spawn_cloud = null;
    public ?string $usage_limit_type = null;
    public mixed $user_id;
    public ?string $workspace_id = null;
}

/** ObservabilityDestination entity data model. */
class ObservabilityDestination
{
    public ?array $data = null;
    public ?string $id = null;
}

/** Request payload for ObservabilityDestination#load. */
class ObservabilityDestinationLoadMatch
{
    public string $id;
}

/** Request payload for ObservabilityDestination#remove. */
class ObservabilityDestinationRemoveMatch
{
    public string $id;
}

/** OpenResponsesResult entity data model. */
class OpenResponsesResult
{
    public mixed $background = null;
    public array $cache_control;
    public ?array $debug = null;
    public mixed $frequency_penalty = null;
    public ?array $image_config = null;
    public mixed $include = null;
    public mixed $input = null;
    public mixed $instructions = null;
    public mixed $max_output_tokens = null;
    public mixed $max_tool_calls = null;
    public mixed $metadata = null;
    public ?array $modalities = null;
    public ?string $model = null;
    public ?array $models = null;
    public mixed $parallel_tool_calls = null;
    public ?array $plugins = null;
    public mixed $presence_penalty = null;
    public ?string $previous_response_id = null;
    public mixed $prompt;
    public mixed $prompt_cache_key = null;
    public mixed $prompt_cache_options;
    public mixed $provider = null;
    public mixed $reasoning = null;
    public mixed $route = null;
    public mixed $safety_identifier = null;
    public mixed $service_tier = null;
    public ?string $session_id = null;
    public ?array $stop_server_tools_when = null;
    public ?bool $store = null;
    public ?bool $stream = null;
    public mixed $temperature = null;
    public mixed $text = null;
    public mixed $tool_choice = null;
    public ?array $tools = null;
    public ?int $top_k = null;
    public mixed $top_logprobs = null;
    public mixed $top_p = null;
    public ?array $trace = null;
    public mixed $truncation = null;
    public ?string $user = null;
}

/** Request payload for OpenResponsesResult#create. */
class OpenResponsesResultCreateData
{
    public mixed $background = null;
    public array $cache_control;
    public ?array $debug = null;
    public mixed $frequency_penalty = null;
    public ?array $image_config = null;
    public mixed $include = null;
    public mixed $input = null;
    public mixed $instructions = null;
    public mixed $max_output_tokens = null;
    public mixed $max_tool_calls = null;
    public mixed $metadata = null;
    public ?array $modalities = null;
    public ?string $model = null;
    public ?array $models = null;
    public mixed $parallel_tool_calls = null;
    public ?array $plugins = null;
    public mixed $presence_penalty = null;
    public ?string $previous_response_id = null;
    public mixed $prompt;
    public mixed $prompt_cache_key = null;
    public mixed $prompt_cache_options;
    public mixed $provider = null;
    public mixed $reasoning = null;
    public mixed $route = null;
    public mixed $safety_identifier = null;
    public mixed $service_tier = null;
    public ?string $session_id = null;
    public ?array $stop_server_tools_when = null;
    public ?bool $store = null;
    public ?bool $stream = null;
    public mixed $temperature = null;
    public mixed $text = null;
    public mixed $tool_choice = null;
    public ?array $tools = null;
    public ?int $top_k = null;
    public mixed $top_logprobs = null;
    public mixed $top_p = null;
    public ?array $trace = null;
    public mixed $truncation = null;
    public ?string $user = null;
}

/** Organization entity data model. */
class Organization
{
    public string $email;
    public mixed $first_name;
    public string $id;
    public mixed $last_name;
    public string $role;
}

/** Request payload for Organization#list. */
class OrganizationListMatch
{
    public ?string $email = null;
    public mixed $first_name = null;
    public ?string $id = null;
    public mixed $last_name = null;
    public ?string $role = null;
}

/** Preset entity data model. */
class Preset
{
    public string $created_at;
    public mixed $creator_user_id;
    public mixed $description;
    public mixed $designated_version;
    public mixed $designated_version_id;
    public string $id;
    public string $name;
    public string $slug;
    public string $status;
    public mixed $status_updated_at;
    public string $updated_at;
    public mixed $workspace_id;
}

/** Request payload for Preset#load. */
class PresetLoadMatch
{
    public string $id;
}

/** Request payload for Preset#list. */
class PresetListMatch
{
    public ?string $created_at = null;
    public mixed $creator_user_id = null;
    public mixed $description = null;
    public mixed $designated_version = null;
    public mixed $designated_version_id = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $slug = null;
    public ?string $status = null;
    public mixed $status_updated_at = null;
    public ?string $updated_at = null;
    public mixed $workspace_id = null;
}

/** PresetVersion entity data model. */
class PresetVersion
{
    public array $config;
    public string $created_at;
    public string $creator_id;
    public string $id;
    public string $preset_id;
    public mixed $system_prompt;
    public string $updated_at;
    public int $version;
}

/** Request payload for PresetVersion#load. */
class PresetVersionLoadMatch
{
    public string $id;
    public string $slug;
}

/** Provider entity data model. */
class Provider
{
    public mixed $datacenters = null;
    public mixed $headquarters = null;
    public string $name;
    public mixed $privacy_policy_url;
    public string $slug;
    public mixed $status_page_url = null;
    public mixed $terms_of_service_url = null;
}

/** Request payload for Provider#list. */
class ProviderListMatch
{
    public mixed $datacenters = null;
    public mixed $headquarters = null;
    public ?string $name = null;
    public mixed $privacy_policy_url = null;
    public ?string $slug = null;
    public mixed $status_page_url = null;
    public mixed $terms_of_service_url = null;
}

/** Query entity data model. */
class Query
{
}

/** RankingsDaily entity data model. */
class RankingsDaily
{
    public string $date;
    public string $model_permaslug;
    public string $total_tokens;
}

/** Request payload for RankingsDaily#list. */
class RankingsDailyListMatch
{
    public ?string $date = null;
    public ?string $model_permaslug = null;
    public ?string $total_tokens = null;
}

/** Remove entity data model. */
class Remove
{
}

/** Rerank entity data model. */
class Rerank
{
    public array $documents;
    public ?string $id = null;
    public string $model;
    public ?string $provider = null;
    public string $query;
    public array $results;
    public ?int $top_n = null;
    public ?array $usage = null;
}

/** Request payload for Rerank#create. */
class RerankCreateData
{
    public array $documents;
    public ?string $id = null;
    public string $model;
    public ?string $provider = null;
    public string $query;
    public array $results;
    public ?int $top_n = null;
    public ?array $usage = null;
}

/** Response entity data model. */
class Response
{
}

/** Speech entity data model. */
class Speech
{
}

/** Stt entity data model. */
class Stt
{
    public ?float $duration = null;
    public array $input_audio;
    public ?string $language = null;
    public string $model;
    public ?array $provider = null;
    public ?string $response_format = null;
    public ?array $segments = null;
    public ?string $task = null;
    public ?float $temperature = null;
    public string $text;
    public ?array $timestamp_granularities = null;
    public ?array $usage = null;
    public ?array $words = null;
}

/** Request payload for Stt#create. */
class SttCreateData
{
    public ?float $duration = null;
    public array $input_audio;
    public ?string $language = null;
    public string $model;
    public ?array $provider = null;
    public ?string $response_format = null;
    public ?array $segments = null;
    public ?string $task = null;
    public ?float $temperature = null;
    public string $text;
    public ?array $timestamp_granularities = null;
    public ?array $usage = null;
    public ?array $words = null;
}

/** SubmitGenerationFeedback entity data model. */
class SubmitGenerationFeedback
{
    public string $category;
    public ?string $comment = null;
    public string $generation_id;
    public bool $success;
}

/** Request payload for SubmitGenerationFeedback#create. */
class SubmitGenerationFeedbackCreateData
{
    public string $category;
    public ?string $comment = null;
    public string $generation_id;
    public bool $success;
}

/** Task entity data model. */
class Task
{
    public string $as_of;
    public array $classifications;
    public array $macro_categories;
    public int $window_days;
}

/** Request payload for Task#load. */
class TaskLoadMatch
{
    public ?string $as_of = null;
    public ?array $classifications = null;
    public ?array $macro_categories = null;
    public ?int $window_days = null;
}

/** Transcription entity data model. */
class Transcription
{
}

/** Tts entity data model. */
class Tts
{
    public string $input;
    public string $model;
    public ?array $provider = null;
    public ?string $response_format = null;
    public ?float $speed = null;
    public string $voice;
}

/** Request payload for Tts#create. */
class TtsCreateData
{
    public string $input;
    public string $model;
    public ?array $provider = null;
    public ?string $response_format = null;
    public ?float $speed = null;
    public string $voice;
}

/** UnifiedBenchmark entity data model. */
class UnifiedBenchmark
{
    public array $data;
    public array $meta;
}

/** Request payload for UnifiedBenchmark#list. */
class UnifiedBenchmarkListMatch
{
    public ?array $data = null;
    public ?array $meta = null;
}

/** UpdateByokKey entity data model. */
class UpdateByokKey
{
    public mixed $allowed_models = null;
    public mixed $allowed_user_ids = null;
    public ?bool $disabled = null;
    public ?string $id = null;
    public ?bool $is_fallback = null;
    public ?string $key = null;
    public mixed $name = null;
}

/** Request payload for UpdateByokKey#update. */
class UpdateByokKeyUpdateData
{
    public string $id;
    public mixed $allowed_models = null;
    public mixed $allowed_user_ids = null;
    public ?bool $disabled = null;
    public ?bool $is_fallback = null;
    public ?string $key = null;
    public mixed $name = null;
}

/** UpdateGuardrail entity data model. */
class UpdateGuardrail
{
    public mixed $allowed_models = null;
    public mixed $allowed_providers = null;
    public mixed $content_filter_builtins = null;
    public mixed $content_filters = null;
    public mixed $description = null;
    public mixed $enforce_zdr = null;
    public mixed $enforce_zdr_anthropic = null;
    public mixed $enforce_zdr_google = null;
    public mixed $enforce_zdr_openai = null;
    public mixed $enforce_zdr_other = null;
    public mixed $enforce_zdr_xai = null;
    public ?string $id = null;
    public mixed $ignored_models = null;
    public mixed $ignored_providers = null;
    public mixed $limit_usd = null;
    public ?string $name = null;
    public mixed $reset_interval = null;
}

/** Request payload for UpdateGuardrail#update. */
class UpdateGuardrailUpdateData
{
    public string $id;
    public mixed $allowed_models = null;
    public mixed $allowed_providers = null;
    public mixed $content_filter_builtins = null;
    public mixed $content_filters = null;
    public mixed $description = null;
    public mixed $enforce_zdr = null;
    public mixed $enforce_zdr_anthropic = null;
    public mixed $enforce_zdr_google = null;
    public mixed $enforce_zdr_openai = null;
    public mixed $enforce_zdr_other = null;
    public mixed $enforce_zdr_xai = null;
    public mixed $ignored_models = null;
    public mixed $ignored_providers = null;
    public mixed $limit_usd = null;
    public ?string $name = null;
    public mixed $reset_interval = null;
}

/** UpdateObservabilityDestination entity data model. */
class UpdateObservabilityDestination
{
    public mixed $api_key_hashes = null;
    public ?array $config = null;
    public ?bool $enabled = null;
    public mixed $filter_rules = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?bool $privacy_mode = null;
    public ?float $sampling_rate = null;
}

/** Request payload for UpdateObservabilityDestination#update. */
class UpdateObservabilityDestinationUpdateData
{
    public string $id;
    public mixed $api_key_hashes = null;
    public ?array $config = null;
    public ?bool $enabled = null;
    public mixed $filter_rules = null;
    public ?string $name = null;
    public ?bool $privacy_mode = null;
    public ?float $sampling_rate = null;
}

/** UpdateWorkspace entity data model. */
class UpdateWorkspace
{
    public string $created_at;
    public mixed $created_by;
    public mixed $default_image_model = null;
    public mixed $default_provider_sort = null;
    public mixed $default_text_model = null;
    public mixed $description = null;
    public string $id;
    public mixed $io_logging_api_key_ids = null;
    public ?float $io_logging_sampling_rate = null;
    public ?bool $is_data_discount_logging_enabled = null;
    public ?bool $is_observability_broadcast_enabled = null;
    public ?bool $is_observability_io_logging_enabled = null;
    public string $name;
    public string $slug;
    public mixed $updated_at;
}

/** Request payload for UpdateWorkspace#list. */
class UpdateWorkspaceListMatch
{
    public ?string $created_at = null;
    public mixed $created_by = null;
    public mixed $default_image_model = null;
    public mixed $default_provider_sort = null;
    public mixed $default_text_model = null;
    public mixed $description = null;
    public ?string $id = null;
    public mixed $io_logging_api_key_ids = null;
    public ?float $io_logging_sampling_rate = null;
    public ?bool $is_data_discount_logging_enabled = null;
    public ?bool $is_observability_broadcast_enabled = null;
    public ?bool $is_observability_io_logging_enabled = null;
    public ?string $name = null;
    public ?string $slug = null;
    public mixed $updated_at = null;
}

/** Request payload for UpdateWorkspace#create. */
class UpdateWorkspaceCreateData
{
    public string $created_at;
    public mixed $created_by;
    public mixed $default_image_model = null;
    public mixed $default_provider_sort = null;
    public mixed $default_text_model = null;
    public mixed $description = null;
    public string $id;
    public mixed $io_logging_api_key_ids = null;
    public ?float $io_logging_sampling_rate = null;
    public ?bool $is_data_discount_logging_enabled = null;
    public ?bool $is_observability_broadcast_enabled = null;
    public ?bool $is_observability_io_logging_enabled = null;
    public string $name;
    public string $slug;
    public mixed $updated_at;
}

/** Request payload for UpdateWorkspace#update. */
class UpdateWorkspaceUpdateData
{
    public string $id;
    public ?string $created_at = null;
    public mixed $created_by = null;
    public mixed $default_image_model = null;
    public mixed $default_provider_sort = null;
    public mixed $default_text_model = null;
    public mixed $description = null;
    public mixed $io_logging_api_key_ids = null;
    public ?float $io_logging_sampling_rate = null;
    public ?bool $is_data_discount_logging_enabled = null;
    public ?bool $is_observability_broadcast_enabled = null;
    public ?bool $is_observability_io_logging_enabled = null;
    public ?string $name = null;
    public ?string $slug = null;
    public mixed $updated_at = null;
}

/** UpsertWorkspaceBudget entity data model. */
class UpsertWorkspaceBudget
{
    public ?string $id = null;
    public float $limit_usd;
}

/** Request payload for UpsertWorkspaceBudget#update. */
class UpsertWorkspaceBudgetUpdateData
{
    public string $id;
    public string $workspace_id;
    public ?float $limit_usd = null;
}

/** User entity data model. */
class User
{
}

/** Version entity data model. */
class Version
{
}

/** Video entity data model. */
class Video
{
    public ?string $aspect_ratio = null;
    public ?string $callback_url = null;
    public ?int $duration = null;
    public ?string $error = null;
    public ?array $frame_images = null;
    public ?bool $generate_audio = null;
    public ?string $generation_id = null;
    public string $id;
    public ?array $input_references = null;
    public string $model;
    public string $polling_url;
    public ?string $prompt = null;
    public ?array $provider = null;
    public ?string $resolution = null;
    public ?int $seed = null;
    public ?string $size = null;
    public string $status;
    public ?array $unsigned_urls = null;
    public ?array $usage = null;
}

/** Request payload for Video#load. */
class VideoLoadMatch
{
    public string $id;
}

/** Request payload for Video#create. */
class VideoCreateData
{
    public ?string $aspect_ratio = null;
    public ?string $callback_url = null;
    public ?int $duration = null;
    public ?string $error = null;
    public ?array $frame_images = null;
    public ?bool $generate_audio = null;
    public ?string $generation_id = null;
    public string $id;
    public ?array $input_references = null;
    public string $model;
    public string $polling_url;
    public ?string $prompt = null;
    public ?array $provider = null;
    public ?string $resolution = null;
    public ?int $seed = null;
    public ?string $size = null;
    public string $status;
    public ?array $unsigned_urls = null;
    public ?array $usage = null;
}

/** VideoGeneration entity data model. */
class VideoGeneration
{
    public ?string $id = null;
}

/** Request payload for VideoGeneration#load. */
class VideoGenerationLoadMatch
{
    public string $id;
}

/** VideoModelsList entity data model. */
class VideoModelsList
{
    public array $allowed_passthrough_parameters;
    public string $canonical_slug;
    public int $created;
    public ?string $description = null;
    public mixed $generate_audio;
    public mixed $hugging_face_id = null;
    public string $id;
    public string $name;
    public mixed $pricing_skus = null;
    public mixed $seed;
    public mixed $supported_aspect_ratios;
    public mixed $supported_durations;
    public mixed $supported_frame_images;
    public mixed $supported_resolutions;
    public mixed $supported_sizes;
}

/** Request payload for VideoModelsList#list. */
class VideoModelsListListMatch
{
    public ?array $allowed_passthrough_parameters = null;
    public ?string $canonical_slug = null;
    public ?int $created = null;
    public ?string $description = null;
    public mixed $generate_audio = null;
    public mixed $hugging_face_id = null;
    public ?string $id = null;
    public ?string $name = null;
    public mixed $pricing_skus = null;
    public mixed $seed = null;
    public mixed $supported_aspect_ratios = null;
    public mixed $supported_durations = null;
    public mixed $supported_frame_images = null;
    public mixed $supported_resolutions = null;
    public mixed $supported_sizes = null;
}

/** Workspace entity data model. */
class Workspace
{
    public string $created_at;
    public mixed $created_by;
    public mixed $default_image_model;
    public mixed $default_provider_sort;
    public mixed $default_text_model;
    public mixed $description;
    public string $id;
    public mixed $io_logging_api_key_ids;
    public float $io_logging_sampling_rate;
    public bool $is_data_discount_logging_enabled;
    public bool $is_observability_broadcast_enabled;
    public bool $is_observability_io_logging_enabled;
    public string $name;
    public string $slug;
    public mixed $updated_at;
}

/** Request payload for Workspace#load. */
class WorkspaceLoadMatch
{
    public string $id;
}

/** Request payload for Workspace#remove. */
class WorkspaceRemoveMatch
{
    public string $id;
}

/** WorkspaceBudget entity data model. */
class WorkspaceBudget
{
    public ?string $id = null;
}

/** Request payload for WorkspaceBudget#remove. */
class WorkspaceBudgetRemoveMatch
{
    public string $id;
    public string $workspace_id;
}

/** Zdr entity data model. */
class Zdr
{
}

