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
    public int $completion_token;
    public string $date;
    public string $endpoint_id;
    public string $model;
    public string $model_permaslug;
    public int $prompt_token;
    public string $provider_name;
    public int $reasoning_token;
    public int $request;
    public float $usage;
}

/** Request payload for Activity#list. */
class ActivityListMatch
{
    public ?float $byok_usage_inference = null;
    public ?int $completion_token = null;
    public ?string $date = null;
    public ?string $endpoint_id = null;
    public ?string $model = null;
    public ?string $model_permaslug = null;
    public ?int $prompt_token = null;
    public ?string $provider_name = null;
    public ?int $reasoning_token = null;
    public ?int $request = null;
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
    public mixed $creator_user_id = null;
    public array $data;
    public ?bool $disabled = null;
    public mixed $expires_at = null;
    public string $hash;
    public ?bool $include_byok_in_limit = null;
    public string $label;
    public mixed $limit = null;
    public mixed $limit_remaining;
    public mixed $limit_reset = null;
    public string $name;
    public mixed $updated_at;
    public float $usage;
    public float $usage_daily;
    public float $usage_monthly;
    public float $usage_weekly;
    public ?string $workspace_id = null;
}

/** Request payload for ApiKey#load. */
class ApiKeyLoadMatch
{
    public ?string $id = null;
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
    public ?array $data = null;
    public ?bool $disabled = null;
    public mixed $expires_at = null;
    public ?string $hash = null;
    public ?bool $include_byok_in_limit = null;
    public ?string $label = null;
    public mixed $limit = null;
    public mixed $limit_remaining = null;
    public mixed $limit_reset = null;
    public ?string $name = null;
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
    public mixed $creator_user_id = null;
    public array $data;
    public ?bool $disabled = null;
    public mixed $expires_at = null;
    public string $hash;
    public ?bool $include_byok_in_limit = null;
    public string $label;
    public mixed $limit = null;
    public mixed $limit_remaining;
    public mixed $limit_reset = null;
    public string $name;
    public mixed $updated_at;
    public float $usage;
    public float $usage_daily;
    public float $usage_monthly;
    public float $usage_weekly;
    public ?string $workspace_id = null;
}

/** Request payload for ApiKey#update. */
class ApiKeyUpdateData
{
    public string $id;
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
    public int $total_request;
    public string $total_token;
}

/** Request payload for AppRanking#list. */
class AppRankingListMatch
{
    public ?int $app_id = null;
    public ?string $app_name = null;
    public ?int $rank = null;
    public ?int $total_request = null;
    public ?string $total_token = null;
}

/** Benchmark entity data model. */
class Benchmark
{
}

/** BetaAnalytics entity data model. */
class BetaAnalytics
{
    public array $classifier_dimension;
    public array $classifier_filter;
    public array $data;
    public ?array $dimension = null;
    public ?array $filter = null;
    public ?string $granularity = null;
    public ?int $group_limit = null;
    public ?int $limit = null;
    public array $metric;
    public array $order_by;
    public array $time_range;
}

/** Request payload for BetaAnalytics#load. */
class BetaAnalyticsLoadMatch
{
    public ?array $classifier_dimension = null;
    public ?array $classifier_filter = null;
    public ?array $data = null;
    public ?array $dimension = null;
    public ?array $filter = null;
    public ?string $granularity = null;
    public ?int $group_limit = null;
    public ?int $limit = null;
    public ?array $metric = null;
    public ?array $order_by = null;
    public ?array $time_range = null;
}

/** Request payload for BetaAnalytics#create. */
class BetaAnalyticsCreateData
{
    public array $classifier_dimension;
    public array $classifier_filter;
    public array $data;
    public ?array $dimension = null;
    public ?array $filter = null;
    public ?string $granularity = null;
    public ?int $group_limit = null;
    public ?int $limit = null;
    public array $metric;
    public array $order_by;
    public array $time_range;
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
    public array $user_id;
}

/** Request payload for BulkAddWorkspaceMember#create. */
class BulkAddWorkspaceMemberCreateData
{
    public string $workspace_id;
}

/** BulkAssignKey entity data model. */
class BulkAssignKey
{
    public int $assigned_count;
    public array $key_hash;
}

/** Request payload for BulkAssignKey#create. */
class BulkAssignKeyCreateData
{
    public string $guardrail_id;
}

/** BulkAssignMember entity data model. */
class BulkAssignMember
{
    public int $assigned_count;
    public array $member_user_id;
}

/** Request payload for BulkAssignMember#create. */
class BulkAssignMemberCreateData
{
    public string $guardrail_id;
}

/** BulkRemoveWorkspaceMember entity data model. */
class BulkRemoveWorkspaceMember
{
    public int $removed_count;
    public array $user_id;
}

/** Request payload for BulkRemoveWorkspaceMember#create. */
class BulkRemoveWorkspaceMemberCreateData
{
    public string $workspace_id;
}

/** BulkUnassignKey entity data model. */
class BulkUnassignKey
{
    public array $key_hash;
    public int $unassigned_count;
}

/** Request payload for BulkUnassignKey#create. */
class BulkUnassignKeyCreateData
{
    public string $guardrail_id;
}

/** BulkUnassignMember entity data model. */
class BulkUnassignMember
{
    public array $member_user_id;
    public int $unassigned_count;
}

/** Request payload for BulkUnassignMember#create. */
class BulkUnassignMemberCreateData
{
    public string $guardrail_id;
}

/** Byok entity data model. */
class Byok
{
    public mixed $allowed_api_key_hash;
    public mixed $allowed_model = null;
    public mixed $allowed_user_id = null;
    public string $created_at;
    public mixed $data;
    public ?bool $disabled = null;
    public string $id;
    public ?bool $is_fallback = null;
    public string $key;
    public string $label;
    public mixed $name = null;
    public string $provider;
    public int $sort_order;
    public ?string $workspace_id = null;
}

/** Request payload for Byok#load. */
class ByokLoadMatch
{
    public string $id;
}

/** Request payload for Byok#list. */
class ByokListMatch
{
    public mixed $allowed_api_key_hash = null;
    public mixed $allowed_model = null;
    public mixed $allowed_user_id = null;
    public ?string $created_at = null;
    public mixed $data = null;
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
    public mixed $allowed_api_key_hash;
    public mixed $allowed_model = null;
    public mixed $allowed_user_id = null;
    public string $created_at;
    public mixed $data;
    public ?bool $disabled = null;
    public string $id;
    public ?bool $is_fallback = null;
    public string $key;
    public string $label;
    public mixed $name = null;
    public string $provider;
    public int $sort_order;
    public ?string $workspace_id = null;
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
    public array $choice;
    public int $created;
    public ?array $debug = null;
    public mixed $frequency_penalty = null;
    public string $id;
    public ?array $image_config = null;
    public mixed $logit_bia = null;
    public mixed $logprob = null;
    public mixed $max_completion_token = null;
    public mixed $max_token = null;
    public array $message;
    public ?array $metadata = null;
    public mixed $min_p = null;
    public ?array $modality = null;
    public string $model;
    public string $object;
    public array $openrouter_metadata;
    public mixed $parallel_tool_call = null;
    public ?array $plugin = null;
    public mixed $prediction;
    public mixed $presence_penalty = null;
    public mixed $prompt_cache_key = null;
    public mixed $prompt_cache_option;
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
    public mixed $stream_option = null;
    public mixed $system_fingerprint;
    public mixed $temperature = null;
    public ?array $tool = null;
    public mixed $tool_choice = null;
    public mixed $top_a = null;
    public mixed $top_k = null;
    public mixed $top_logprob = null;
    public mixed $top_p = null;
    public ?array $trace = null;
    public array $usage;
    public ?string $user = null;
}

/** Request payload for ChatResult#create. */
class ChatResultCreateData
{
    public array $cache_control;
    public array $choice;
    public int $created;
    public ?array $debug = null;
    public mixed $frequency_penalty = null;
    public string $id;
    public ?array $image_config = null;
    public mixed $logit_bia = null;
    public mixed $logprob = null;
    public mixed $max_completion_token = null;
    public mixed $max_token = null;
    public array $message;
    public ?array $metadata = null;
    public mixed $min_p = null;
    public ?array $modality = null;
    public string $model;
    public string $object;
    public array $openrouter_metadata;
    public mixed $parallel_tool_call = null;
    public ?array $plugin = null;
    public mixed $prediction;
    public mixed $presence_penalty = null;
    public mixed $prompt_cache_key = null;
    public mixed $prompt_cache_option;
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
    public mixed $stream_option = null;
    public mixed $system_fingerprint;
    public mixed $temperature = null;
    public ?array $tool = null;
    public mixed $tool_choice = null;
    public mixed $top_a = null;
    public mixed $top_k = null;
    public mixed $top_logprob = null;
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
    public mixed $api_key_hash = null;
    public array $config;
    public ?bool $enabled = null;
    public mixed $filter_rule;
    public string $name;
    public ?bool $privacy_mode = null;
    public ?float $sampling_rate = null;
    public string $type;
    public ?string $workspace_id = null;
}

/** Request payload for CreateObservabilityDestination#create. */
class CreateObservabilityDestinationCreateData
{
    public mixed $api_key_hash = null;
    public array $config;
    public ?bool $enabled = null;
    public mixed $filter_rule;
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
    public mixed $data;
    public ?array $debug = null;
    public mixed $fallback = null;
    public mixed $frequency_penalty = null;
    public ?array $image_config = null;
    public mixed $include = null;
    public mixed $input = null;
    public mixed $instruction = null;
    public mixed $logit_bia = null;
    public mixed $logprob = null;
    public mixed $max_completion_token = null;
    public mixed $max_output_token = null;
    public mixed $max_token = null;
    public mixed $max_tool_call = null;
    public array $message;
    public ?array $metadata = null;
    public mixed $min_p = null;
    public ?array $modality = null;
    public ?string $model = null;
    public ?array $output_config = null;
    public mixed $parallel_tool_call = null;
    public ?array $plugin = null;
    public mixed $prediction;
    public mixed $presence_penalty = null;
    public ?string $previous_response_id = null;
    public mixed $prompt;
    public mixed $prompt_cache_key = null;
    public mixed $prompt_cache_option;
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
    public ?array $stop_sequence = null;
    public ?array $stop_server_tools_when = null;
    public ?bool $store = null;
    public ?bool $stream = null;
    public mixed $stream_option = null;
    public mixed $system = null;
    public mixed $temperature = null;
    public mixed $text = null;
    public mixed $thinking = null;
    public ?array $tool = null;
    public mixed $tool_choice = null;
    public mixed $top_a = null;
    public mixed $top_k = null;
    public mixed $top_logprob = null;
    public mixed $top_p = null;
    public ?array $trace = null;
    public mixed $truncation = null;
    public ?string $user = null;
}

/** Request payload for CreatePresetFromInference#create. */
class CreatePresetFromInferenceCreateData
{
    public string $slug;
}

/** CreateWorkspace entity data model. */
class CreateWorkspace
{
}

/** Credit entity data model. */
class Credit
{
    public array $data;
}

/** Request payload for Credit#load. */
class CreditLoadMatch
{
    public ?array $data = null;
}

/** Request payload for Credit#create. */
class CreditCreateData
{
    public array $data;
}

/** Destination entity data model. */
class Destination
{
}

/** Embedding entity data model. */
class Embedding
{
    public array $data;
    public ?int $dimension = null;
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
    public ?int $dimension = null;
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
    public array $architecture;
    public array $benchmark;
    public string $canonical_slug;
    public mixed $context_length;
    public int $created;
    public array $data;
    public mixed $default_parameter;
    public ?string $description = null;
    public mixed $expiration_date = null;
    public mixed $hugging_face_id = null;
    public string $id;
    public mixed $knowledge_cutoff = null;
    public mixed $latency_last_30m;
    public array $link;
    public mixed $max_completion_token;
    public mixed $max_prompt_token;
    public string $model_id;
    public string $model_name;
    public string $name;
    public mixed $per_request_limit;
    public array $pricing;
    public string $provider_name;
    public mixed $quantization;
    public array $reasoning;
    public ?int $status = null;
    public array $supported_parameter;
    public mixed $supported_voice;
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
    public ?array $architecture = null;
    public ?array $benchmark = null;
    public ?string $canonical_slug = null;
    public mixed $context_length = null;
    public ?int $created = null;
    public ?array $data = null;
    public mixed $default_parameter = null;
    public ?string $description = null;
    public mixed $expiration_date = null;
    public mixed $hugging_face_id = null;
    public ?string $id = null;
    public mixed $knowledge_cutoff = null;
    public mixed $latency_last_30m = null;
    public ?array $link = null;
    public mixed $max_completion_token = null;
    public mixed $max_prompt_token = null;
    public ?string $model_id = null;
    public ?string $model_name = null;
    public ?string $name = null;
    public mixed $per_request_limit = null;
    public ?array $pricing = null;
    public ?string $provider_name = null;
    public mixed $quantization = null;
    public ?array $reasoning = null;
    public ?int $status = null;
    public ?array $supported_parameter = null;
    public mixed $supported_voice = null;
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
    public int $size_byte;
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
    public ?int $size_byte = null;
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
    public int $size_byte;
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
    public array $data;
}

/** Request payload for Generation#load. */
class GenerationLoadMatch
{
    public ?array $data = null;
}

/** GenerationContent entity data model. */
class GenerationContent
{
    public array $data;
}

/** Request payload for GenerationContent#load. */
class GenerationContentLoadMatch
{
    public ?array $data = null;
}

/** Guardrail entity data model. */
class Guardrail
{
    public mixed $allowed_model = null;
    public mixed $allowed_provider = null;
    public mixed $content_filter = null;
    public mixed $content_filter_builtin = null;
    public string $created_at;
    public mixed $data;
    public mixed $description = null;
    public mixed $enforce_zdr = null;
    public mixed $enforce_zdr_anthropic = null;
    public mixed $enforce_zdr_google = null;
    public mixed $enforce_zdr_openai = null;
    public mixed $enforce_zdr_other = null;
    public mixed $enforce_zdr_xai = null;
    public string $id;
    public mixed $ignored_model = null;
    public mixed $ignored_provider = null;
    public mixed $limit_usd = null;
    public string $name;
    public mixed $reset_interval = null;
    public mixed $updated_at = null;
    public ?string $workspace_id = null;
}

/** Request payload for Guardrail#load. */
class GuardrailLoadMatch
{
    public string $id;
}

/** Request payload for Guardrail#list. */
class GuardrailListMatch
{
    public mixed $allowed_model = null;
    public mixed $allowed_provider = null;
    public mixed $content_filter = null;
    public mixed $content_filter_builtin = null;
    public ?string $created_at = null;
    public mixed $data = null;
    public mixed $description = null;
    public mixed $enforce_zdr = null;
    public mixed $enforce_zdr_anthropic = null;
    public mixed $enforce_zdr_google = null;
    public mixed $enforce_zdr_openai = null;
    public mixed $enforce_zdr_other = null;
    public mixed $enforce_zdr_xai = null;
    public ?string $id = null;
    public mixed $ignored_model = null;
    public mixed $ignored_provider = null;
    public mixed $limit_usd = null;
    public ?string $name = null;
    public mixed $reset_interval = null;
    public mixed $updated_at = null;
    public ?string $workspace_id = null;
}

/** Request payload for Guardrail#create. */
class GuardrailCreateData
{
    public mixed $allowed_model = null;
    public mixed $allowed_provider = null;
    public mixed $content_filter = null;
    public mixed $content_filter_builtin = null;
    public string $created_at;
    public mixed $data;
    public mixed $description = null;
    public mixed $enforce_zdr = null;
    public mixed $enforce_zdr_anthropic = null;
    public mixed $enforce_zdr_google = null;
    public mixed $enforce_zdr_openai = null;
    public mixed $enforce_zdr_other = null;
    public mixed $enforce_zdr_xai = null;
    public string $id;
    public mixed $ignored_model = null;
    public mixed $ignored_provider = null;
    public mixed $limit_usd = null;
    public string $name;
    public mixed $reset_interval = null;
    public mixed $updated_at = null;
    public ?string $workspace_id = null;
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
    public ?array $input_reference = null;
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
    public ?array $input_reference = null;
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
    public array $allowed_passthrough_parameter;
    public array $pricing;
    public string $provider_name;
    public string $provider_slug;
    public mixed $provider_tag;
    public mixed $supported_parameter;
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
    public string $endpoint;
    public string $id;
    public string $name;
    public array $supported_parameter;
    public bool $supports_streaming;
}

/** Request payload for ImageModelsList#list. */
class ImageModelsListListMatch
{
    public ?array $architecture = null;
    public ?int $created = null;
    public ?string $description = null;
    public ?string $endpoint = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?array $supported_parameter = null;
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
    public ?string $guardrail_id = null;
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
    public ?string $guardrail_id = null;
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
    public mixed $fallback = null;
    public ?int $max_token = null;
    public mixed $message;
    public ?array $metadata = null;
    public string $model;
    public ?array $output_config = null;
    public ?array $plugin = null;
    public mixed $provider = null;
    public mixed $route = null;
    public ?string $service_tier = null;
    public ?string $session_id = null;
    public mixed $speed = null;
    public ?array $stop_sequence = null;
    public ?array $stop_server_tools_when = null;
    public ?bool $stream = null;
    public mixed $system = null;
    public ?float $temperature = null;
    public mixed $thinking = null;
    public ?array $tool = null;
    public mixed $tool_choice = null;
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
    public mixed $fallback = null;
    public ?int $max_token = null;
    public mixed $message;
    public ?array $metadata = null;
    public string $model;
    public ?array $output_config = null;
    public ?array $plugin = null;
    public mixed $provider = null;
    public mixed $route = null;
    public ?string $service_tier = null;
    public ?string $session_id = null;
    public mixed $speed = null;
    public ?array $stop_sequence = null;
    public ?array $stop_server_tools_when = null;
    public ?bool $stream = null;
    public mixed $system = null;
    public ?float $temperature = null;
    public mixed $thinking = null;
    public ?array $tool = null;
    public mixed $tool_choice = null;
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
    public array $benchmark;
    public string $canonical_slug;
    public mixed $context_length;
    public int $created;
    public array $data;
    public mixed $default_parameter;
    public ?string $description = null;
    public mixed $expiration_date = null;
    public mixed $hugging_face_id = null;
    public string $id;
    public mixed $knowledge_cutoff = null;
    public array $link;
    public string $name;
    public mixed $per_request_limit;
    public array $pricing;
    public array $reasoning;
    public array $supported_parameter;
    public mixed $supported_voice;
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
    public ?array $benchmark = null;
    public ?string $canonical_slug = null;
    public mixed $context_length = null;
    public ?int $created = null;
    public ?array $data = null;
    public mixed $default_parameter = null;
    public ?string $description = null;
    public mixed $expiration_date = null;
    public mixed $hugging_face_id = null;
    public ?string $id = null;
    public mixed $knowledge_cutoff = null;
    public ?array $link = null;
    public ?string $name = null;
    public mixed $per_request_limit = null;
    public ?array $pricing = null;
    public ?array $reasoning = null;
    public ?array $supported_parameter = null;
    public mixed $supported_voice = null;
    public ?array $top_provider = null;
}

/** ModelsCount entity data model. */
class ModelsCount
{
    public array $data;
}

/** Request payload for ModelsCount#load. */
class ModelsCountLoadMatch
{
    public ?array $data = null;
}

/** ModelsList entity data model. */
class ModelsList
{
    public array $architecture;
    public array $benchmark;
    public string $canonical_slug;
    public mixed $context_length;
    public int $created;
    public mixed $default_parameter;
    public ?string $description = null;
    public mixed $expiration_date = null;
    public mixed $hugging_face_id = null;
    public string $id;
    public mixed $knowledge_cutoff = null;
    public array $link;
    public string $name;
    public mixed $per_request_limit;
    public array $pricing;
    public array $reasoning;
    public array $supported_parameter;
    public mixed $supported_voice;
    public array $top_provider;
}

/** Request payload for ModelsList#list. */
class ModelsListListMatch
{
    public ?array $architecture = null;
    public ?array $benchmark = null;
    public ?string $canonical_slug = null;
    public mixed $context_length = null;
    public ?int $created = null;
    public mixed $default_parameter = null;
    public ?string $description = null;
    public mixed $expiration_date = null;
    public mixed $hugging_face_id = null;
    public ?string $id = null;
    public mixed $knowledge_cutoff = null;
    public ?array $link = null;
    public ?string $name = null;
    public mixed $per_request_limit = null;
    public ?array $pricing = null;
    public ?array $reasoning = null;
    public ?array $supported_parameter = null;
    public mixed $supported_voice = null;
    public ?array $top_provider = null;
}

/** OAuth entity data model. */
class OAuth
{
    public string $callback_url;
    public string $code;
    public ?string $code_challenge = null;
    public mixed $code_challenge_method = null;
    public ?string $code_verifier = null;
    public array $data;
    public mixed $expires_at = null;
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
    public string $callback_url;
    public string $code;
    public ?string $code_challenge = null;
    public mixed $code_challenge_method = null;
    public ?string $code_verifier = null;
    public array $data;
    public mixed $expires_at = null;
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
    public mixed $data;
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
    public mixed $instruction = null;
    public mixed $max_output_token = null;
    public mixed $max_tool_call = null;
    public mixed $metadata = null;
    public ?array $modality = null;
    public ?string $model = null;
    public mixed $parallel_tool_call = null;
    public ?array $plugin = null;
    public mixed $presence_penalty = null;
    public ?string $previous_response_id = null;
    public mixed $prompt;
    public mixed $prompt_cache_key = null;
    public mixed $prompt_cache_option;
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
    public ?array $tool = null;
    public mixed $tool_choice = null;
    public ?int $top_k = null;
    public mixed $top_logprob = null;
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
    public mixed $instruction = null;
    public mixed $max_output_token = null;
    public mixed $max_tool_call = null;
    public mixed $metadata = null;
    public ?array $modality = null;
    public ?string $model = null;
    public mixed $parallel_tool_call = null;
    public ?array $plugin = null;
    public mixed $presence_penalty = null;
    public ?string $previous_response_id = null;
    public mixed $prompt;
    public mixed $prompt_cache_key = null;
    public mixed $prompt_cache_option;
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
    public ?array $tool = null;
    public mixed $tool_choice = null;
    public ?int $top_k = null;
    public mixed $top_logprob = null;
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
    public mixed $data;
    public mixed $description;
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
    public mixed $data = null;
    public mixed $description = null;
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
    public mixed $data;
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
    public mixed $datacenter = null;
    public mixed $headquarter = null;
    public string $name;
    public mixed $privacy_policy_url;
    public string $slug;
    public mixed $status_page_url = null;
    public mixed $terms_of_service_url = null;
}

/** Request payload for Provider#list. */
class ProviderListMatch
{
    public mixed $datacenter = null;
    public mixed $headquarter = null;
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
    public string $total_token;
}

/** Request payload for RankingsDaily#list. */
class RankingsDailyListMatch
{
    public ?string $date = null;
    public ?string $model_permaslug = null;
    public ?string $total_token = null;
}

/** Remove entity data model. */
class Remove
{
}

/** Rerank entity data model. */
class Rerank
{
    public array $document;
    public ?string $id = null;
    public string $model;
    public ?string $provider = null;
    public string $query;
    public array $result;
    public ?int $top_n = null;
    public ?array $usage = null;
}

/** Request payload for Rerank#create. */
class RerankCreateData
{
    public array $document;
    public ?string $id = null;
    public string $model;
    public ?string $provider = null;
    public string $query;
    public array $result;
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
    public ?array $segment = null;
    public ?string $task = null;
    public ?float $temperature = null;
    public string $text;
    public ?array $timestamp_granularity = null;
    public ?array $usage = null;
    public ?array $word = null;
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
    public ?array $segment = null;
    public ?string $task = null;
    public ?float $temperature = null;
    public string $text;
    public ?array $timestamp_granularity = null;
    public ?array $usage = null;
    public ?array $word = null;
}

/** SubmitGenerationFeedback entity data model. */
class SubmitGenerationFeedback
{
    public string $category;
    public ?string $comment = null;
    public array $data;
    public string $generation_id;
}

/** Request payload for SubmitGenerationFeedback#create. */
class SubmitGenerationFeedbackCreateData
{
    public string $category;
    public ?string $comment = null;
    public array $data;
    public string $generation_id;
}

/** Task entity data model. */
class Task
{
    public array $data;
}

/** Request payload for Task#load. */
class TaskLoadMatch
{
    public ?array $data = null;
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
    public mixed $allowed_model = null;
    public mixed $allowed_user_id = null;
    public mixed $data;
    public ?bool $disabled = null;
    public ?bool $is_fallback = null;
    public ?string $key = null;
    public mixed $name = null;
}

/** Request payload for UpdateByokKey#update. */
class UpdateByokKeyUpdateData
{
    public string $id;
}

/** UpdateGuardrail entity data model. */
class UpdateGuardrail
{
    public mixed $allowed_model = null;
    public mixed $allowed_provider = null;
    public mixed $content_filter = null;
    public mixed $content_filter_builtin = null;
    public mixed $data;
    public mixed $description = null;
    public mixed $enforce_zdr = null;
    public mixed $enforce_zdr_anthropic = null;
    public mixed $enforce_zdr_google = null;
    public mixed $enforce_zdr_openai = null;
    public mixed $enforce_zdr_other = null;
    public mixed $enforce_zdr_xai = null;
    public mixed $ignored_model = null;
    public mixed $ignored_provider = null;
    public mixed $limit_usd = null;
    public ?string $name = null;
    public mixed $reset_interval = null;
}

/** Request payload for UpdateGuardrail#update. */
class UpdateGuardrailUpdateData
{
    public string $id;
}

/** UpdateObservabilityDestination entity data model. */
class UpdateObservabilityDestination
{
    public mixed $api_key_hash = null;
    public ?array $config = null;
    public mixed $data;
    public ?bool $enabled = null;
    public mixed $filter_rule = null;
    public ?string $name = null;
    public ?bool $privacy_mode = null;
    public ?float $sampling_rate = null;
}

/** Request payload for UpdateObservabilityDestination#update. */
class UpdateObservabilityDestinationUpdateData
{
    public string $id;
}

/** UpdateWorkspace entity data model. */
class UpdateWorkspace
{
    public string $created_at;
    public mixed $created_by;
    public mixed $data;
    public mixed $default_image_model = null;
    public mixed $default_provider_sort = null;
    public mixed $default_text_model = null;
    public mixed $description = null;
    public string $id;
    public mixed $io_logging_api_key_id = null;
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
    public mixed $data = null;
    public mixed $default_image_model = null;
    public mixed $default_provider_sort = null;
    public mixed $default_text_model = null;
    public mixed $description = null;
    public ?string $id = null;
    public mixed $io_logging_api_key_id = null;
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
    public mixed $data;
    public mixed $default_image_model = null;
    public mixed $default_provider_sort = null;
    public mixed $default_text_model = null;
    public mixed $description = null;
    public string $id;
    public mixed $io_logging_api_key_id = null;
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
}

/** UpsertWorkspaceBudget entity data model. */
class UpsertWorkspaceBudget
{
    public mixed $data;
    public float $limit_usd;
}

/** Request payload for UpsertWorkspaceBudget#update. */
class UpsertWorkspaceBudgetUpdateData
{
    public string $id;
    public string $workspace_id;
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
    public ?array $frame_image = null;
    public ?bool $generate_audio = null;
    public ?string $generation_id = null;
    public string $id;
    public ?array $input_reference = null;
    public string $model;
    public string $polling_url;
    public ?string $prompt = null;
    public ?array $provider = null;
    public ?string $resolution = null;
    public ?int $seed = null;
    public ?string $size = null;
    public string $status;
    public ?array $unsigned_url = null;
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
    public ?array $frame_image = null;
    public ?bool $generate_audio = null;
    public ?string $generation_id = null;
    public string $id;
    public ?array $input_reference = null;
    public string $model;
    public string $polling_url;
    public ?string $prompt = null;
    public ?array $provider = null;
    public ?string $resolution = null;
    public ?int $seed = null;
    public ?string $size = null;
    public string $status;
    public ?array $unsigned_url = null;
    public ?array $usage = null;
}

/** VideoGeneration entity data model. */
class VideoGeneration
{
}

/** Request payload for VideoGeneration#load. */
class VideoGenerationLoadMatch
{
    public string $id;
}

/** VideoModelsList entity data model. */
class VideoModelsList
{
    public array $allowed_passthrough_parameter;
    public string $canonical_slug;
    public int $created;
    public ?string $description = null;
    public mixed $generate_audio;
    public mixed $hugging_face_id = null;
    public string $id;
    public string $name;
    public mixed $pricing_skus = null;
    public mixed $seed;
    public mixed $supported_aspect_ratio;
    public mixed $supported_duration;
    public mixed $supported_frame_image;
    public mixed $supported_resolution;
    public mixed $supported_size;
}

/** Request payload for VideoModelsList#list. */
class VideoModelsListListMatch
{
    public ?array $allowed_passthrough_parameter = null;
    public ?string $canonical_slug = null;
    public ?int $created = null;
    public ?string $description = null;
    public mixed $generate_audio = null;
    public mixed $hugging_face_id = null;
    public ?string $id = null;
    public ?string $name = null;
    public mixed $pricing_skus = null;
    public mixed $seed = null;
    public mixed $supported_aspect_ratio = null;
    public mixed $supported_duration = null;
    public mixed $supported_frame_image = null;
    public mixed $supported_resolution = null;
    public mixed $supported_size = null;
}

/** Workspace entity data model. */
class Workspace
{
    public mixed $data;
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

