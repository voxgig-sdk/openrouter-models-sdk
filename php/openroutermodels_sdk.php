<?php
declare(strict_types=1);

// OpenrouterModels SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class OpenrouterModelsSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new OpenrouterModelsUtility();
        $this->_utility = $utility;

        $config = OpenrouterModelsConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = OpenrouterModelsHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = OpenrouterModelsHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!OpenrouterModelsFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, OpenrouterModelsFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return OpenrouterModelsUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = OpenrouterModelsHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = OpenrouterModelsHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = OpenrouterModelsHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new OpenrouterModelsSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new OpenrouterModelsError($op . "_allow",
                "OpenrouterModelsSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = OpenrouterModelsHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = OpenrouterModelsHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new OpenrouterModelsError("graphql_error",
                "OpenrouterModelsSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_activity = null;

    // Canonical facade: $client->Activity()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->activity()
    // resolves here too.
    public function Activity($data = null)
    {
        require_once __DIR__ . '/entity/activity_entity.php';
        if ($data === null) {
            if ($this->_activity === null) {
                $this->_activity = new ActivityEntity($this, null);
            }
            return $this->_activity;
        }
        return new ActivityEntity($this, $data);
    }


    private $_add = null;

    // Canonical facade: $client->Add()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->add()
    // resolves here too.
    public function Add($data = null)
    {
        require_once __DIR__ . '/entity/add_entity.php';
        if ($data === null) {
            if ($this->_add === null) {
                $this->_add = new AddEntity($this, null);
            }
            return $this->_add;
        }
        return new AddEntity($this, $data);
    }


    private $_api_key = null;

    // Canonical facade: $client->ApiKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_key()
    // resolves here too.
    public function ApiKey($data = null)
    {
        require_once __DIR__ . '/entity/api_key_entity.php';
        if ($data === null) {
            if ($this->_api_key === null) {
                $this->_api_key = new ApiKeyEntity($this, null);
            }
            return $this->_api_key;
        }
        return new ApiKeyEntity($this, $data);
    }


    private $_app_ranking = null;

    // Canonical facade: $client->AppRanking()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->app_ranking()
    // resolves here too.
    public function AppRanking($data = null)
    {
        require_once __DIR__ . '/entity/app_ranking_entity.php';
        if ($data === null) {
            if ($this->_app_ranking === null) {
                $this->_app_ranking = new AppRankingEntity($this, null);
            }
            return $this->_app_ranking;
        }
        return new AppRankingEntity($this, $data);
    }


    private $_benchmark = null;

    // Canonical facade: $client->Benchmark()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->benchmark()
    // resolves here too.
    public function Benchmark($data = null)
    {
        require_once __DIR__ . '/entity/benchmark_entity.php';
        if ($data === null) {
            if ($this->_benchmark === null) {
                $this->_benchmark = new BenchmarkEntity($this, null);
            }
            return $this->_benchmark;
        }
        return new BenchmarkEntity($this, $data);
    }


    private $_beta_analytics = null;

    // Canonical facade: $client->BetaAnalytics()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->beta_analytics()
    // resolves here too.
    public function BetaAnalytics($data = null)
    {
        require_once __DIR__ . '/entity/beta_analytics_entity.php';
        if ($data === null) {
            if ($this->_beta_analytics === null) {
                $this->_beta_analytics = new BetaAnalyticsEntity($this, null);
            }
            return $this->_beta_analytics;
        }
        return new BetaAnalyticsEntity($this, $data);
    }


    private $_budget = null;

    // Canonical facade: $client->Budget()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->budget()
    // resolves here too.
    public function Budget($data = null)
    {
        require_once __DIR__ . '/entity/budget_entity.php';
        if ($data === null) {
            if ($this->_budget === null) {
                $this->_budget = new BudgetEntity($this, null);
            }
            return $this->_budget;
        }
        return new BudgetEntity($this, $data);
    }


    private $_bulk_add_workspace_member = null;

    // Canonical facade: $client->BulkAddWorkspaceMember()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bulk_add_workspace_member()
    // resolves here too.
    public function BulkAddWorkspaceMember($data = null)
    {
        require_once __DIR__ . '/entity/bulk_add_workspace_member_entity.php';
        if ($data === null) {
            if ($this->_bulk_add_workspace_member === null) {
                $this->_bulk_add_workspace_member = new BulkAddWorkspaceMemberEntity($this, null);
            }
            return $this->_bulk_add_workspace_member;
        }
        return new BulkAddWorkspaceMemberEntity($this, $data);
    }


    private $_bulk_assign_key = null;

    // Canonical facade: $client->BulkAssignKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bulk_assign_key()
    // resolves here too.
    public function BulkAssignKey($data = null)
    {
        require_once __DIR__ . '/entity/bulk_assign_key_entity.php';
        if ($data === null) {
            if ($this->_bulk_assign_key === null) {
                $this->_bulk_assign_key = new BulkAssignKeyEntity($this, null);
            }
            return $this->_bulk_assign_key;
        }
        return new BulkAssignKeyEntity($this, $data);
    }


    private $_bulk_assign_member = null;

    // Canonical facade: $client->BulkAssignMember()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bulk_assign_member()
    // resolves here too.
    public function BulkAssignMember($data = null)
    {
        require_once __DIR__ . '/entity/bulk_assign_member_entity.php';
        if ($data === null) {
            if ($this->_bulk_assign_member === null) {
                $this->_bulk_assign_member = new BulkAssignMemberEntity($this, null);
            }
            return $this->_bulk_assign_member;
        }
        return new BulkAssignMemberEntity($this, $data);
    }


    private $_bulk_remove_workspace_member = null;

    // Canonical facade: $client->BulkRemoveWorkspaceMember()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bulk_remove_workspace_member()
    // resolves here too.
    public function BulkRemoveWorkspaceMember($data = null)
    {
        require_once __DIR__ . '/entity/bulk_remove_workspace_member_entity.php';
        if ($data === null) {
            if ($this->_bulk_remove_workspace_member === null) {
                $this->_bulk_remove_workspace_member = new BulkRemoveWorkspaceMemberEntity($this, null);
            }
            return $this->_bulk_remove_workspace_member;
        }
        return new BulkRemoveWorkspaceMemberEntity($this, $data);
    }


    private $_bulk_unassign_key = null;

    // Canonical facade: $client->BulkUnassignKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bulk_unassign_key()
    // resolves here too.
    public function BulkUnassignKey($data = null)
    {
        require_once __DIR__ . '/entity/bulk_unassign_key_entity.php';
        if ($data === null) {
            if ($this->_bulk_unassign_key === null) {
                $this->_bulk_unassign_key = new BulkUnassignKeyEntity($this, null);
            }
            return $this->_bulk_unassign_key;
        }
        return new BulkUnassignKeyEntity($this, $data);
    }


    private $_bulk_unassign_member = null;

    // Canonical facade: $client->BulkUnassignMember()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bulk_unassign_member()
    // resolves here too.
    public function BulkUnassignMember($data = null)
    {
        require_once __DIR__ . '/entity/bulk_unassign_member_entity.php';
        if ($data === null) {
            if ($this->_bulk_unassign_member === null) {
                $this->_bulk_unassign_member = new BulkUnassignMemberEntity($this, null);
            }
            return $this->_bulk_unassign_member;
        }
        return new BulkUnassignMemberEntity($this, $data);
    }


    private $_byok = null;

    // Canonical facade: $client->Byok()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->byok()
    // resolves here too.
    public function Byok($data = null)
    {
        require_once __DIR__ . '/entity/byok_entity.php';
        if ($data === null) {
            if ($this->_byok === null) {
                $this->_byok = new ByokEntity($this, null);
            }
            return $this->_byok;
        }
        return new ByokEntity($this, $data);
    }


    private $_chat_result = null;

    // Canonical facade: $client->ChatResult()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->chat_result()
    // resolves here too.
    public function ChatResult($data = null)
    {
        require_once __DIR__ . '/entity/chat_result_entity.php';
        if ($data === null) {
            if ($this->_chat_result === null) {
                $this->_chat_result = new ChatResultEntity($this, null);
            }
            return $this->_chat_result;
        }
        return new ChatResultEntity($this, $data);
    }


    private $_code = null;

    // Canonical facade: $client->Code()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code()
    // resolves here too.
    public function Code($data = null)
    {
        require_once __DIR__ . '/entity/code_entity.php';
        if ($data === null) {
            if ($this->_code === null) {
                $this->_code = new CodeEntity($this, null);
            }
            return $this->_code;
        }
        return new CodeEntity($this, $data);
    }


    private $_coinbase = null;

    // Canonical facade: $client->Coinbase()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->coinbase()
    // resolves here too.
    public function Coinbase($data = null)
    {
        require_once __DIR__ . '/entity/coinbase_entity.php';
        if ($data === null) {
            if ($this->_coinbase === null) {
                $this->_coinbase = new CoinbaseEntity($this, null);
            }
            return $this->_coinbase;
        }
        return new CoinbaseEntity($this, $data);
    }


    private $_completion = null;

    // Canonical facade: $client->Completion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->completion()
    // resolves here too.
    public function Completion($data = null)
    {
        require_once __DIR__ . '/entity/completion_entity.php';
        if ($data === null) {
            if ($this->_completion === null) {
                $this->_completion = new CompletionEntity($this, null);
            }
            return $this->_completion;
        }
        return new CompletionEntity($this, $data);
    }


    private $_content = null;

    // Canonical facade: $client->Content()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->content()
    // resolves here too.
    public function Content($data = null)
    {
        require_once __DIR__ . '/entity/content_entity.php';
        if ($data === null) {
            if ($this->_content === null) {
                $this->_content = new ContentEntity($this, null);
            }
            return $this->_content;
        }
        return new ContentEntity($this, $data);
    }


    private $_count = null;

    // Canonical facade: $client->Count()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->count()
    // resolves here too.
    public function Count($data = null)
    {
        require_once __DIR__ . '/entity/count_entity.php';
        if ($data === null) {
            if ($this->_count === null) {
                $this->_count = new CountEntity($this, null);
            }
            return $this->_count;
        }
        return new CountEntity($this, $data);
    }


    private $_create_byok_key = null;

    // Canonical facade: $client->CreateByokKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_byok_key()
    // resolves here too.
    public function CreateByokKey($data = null)
    {
        require_once __DIR__ . '/entity/create_byok_key_entity.php';
        if ($data === null) {
            if ($this->_create_byok_key === null) {
                $this->_create_byok_key = new CreateByokKeyEntity($this, null);
            }
            return $this->_create_byok_key;
        }
        return new CreateByokKeyEntity($this, $data);
    }


    private $_create_guardrail = null;

    // Canonical facade: $client->CreateGuardrail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_guardrail()
    // resolves here too.
    public function CreateGuardrail($data = null)
    {
        require_once __DIR__ . '/entity/create_guardrail_entity.php';
        if ($data === null) {
            if ($this->_create_guardrail === null) {
                $this->_create_guardrail = new CreateGuardrailEntity($this, null);
            }
            return $this->_create_guardrail;
        }
        return new CreateGuardrailEntity($this, $data);
    }


    private $_create_observability_destination = null;

    // Canonical facade: $client->CreateObservabilityDestination()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_observability_destination()
    // resolves here too.
    public function CreateObservabilityDestination($data = null)
    {
        require_once __DIR__ . '/entity/create_observability_destination_entity.php';
        if ($data === null) {
            if ($this->_create_observability_destination === null) {
                $this->_create_observability_destination = new CreateObservabilityDestinationEntity($this, null);
            }
            return $this->_create_observability_destination;
        }
        return new CreateObservabilityDestinationEntity($this, $data);
    }


    private $_create_preset_from_inference = null;

    // Canonical facade: $client->CreatePresetFromInference()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_preset_from_inference()
    // resolves here too.
    public function CreatePresetFromInference($data = null)
    {
        require_once __DIR__ . '/entity/create_preset_from_inference_entity.php';
        if ($data === null) {
            if ($this->_create_preset_from_inference === null) {
                $this->_create_preset_from_inference = new CreatePresetFromInferenceEntity($this, null);
            }
            return $this->_create_preset_from_inference;
        }
        return new CreatePresetFromInferenceEntity($this, $data);
    }


    private $_create_workspace = null;

    // Canonical facade: $client->CreateWorkspace()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_workspace()
    // resolves here too.
    public function CreateWorkspace($data = null)
    {
        require_once __DIR__ . '/entity/create_workspace_entity.php';
        if ($data === null) {
            if ($this->_create_workspace === null) {
                $this->_create_workspace = new CreateWorkspaceEntity($this, null);
            }
            return $this->_create_workspace;
        }
        return new CreateWorkspaceEntity($this, $data);
    }


    private $_credit = null;

    // Canonical facade: $client->Credit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->credit()
    // resolves here too.
    public function Credit($data = null)
    {
        require_once __DIR__ . '/entity/credit_entity.php';
        if ($data === null) {
            if ($this->_credit === null) {
                $this->_credit = new CreditEntity($this, null);
            }
            return $this->_credit;
        }
        return new CreditEntity($this, $data);
    }


    private $_destination = null;

    // Canonical facade: $client->Destination()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->destination()
    // resolves here too.
    public function Destination($data = null)
    {
        require_once __DIR__ . '/entity/destination_entity.php';
        if ($data === null) {
            if ($this->_destination === null) {
                $this->_destination = new DestinationEntity($this, null);
            }
            return $this->_destination;
        }
        return new DestinationEntity($this, $data);
    }


    private $_embedding = null;

    // Canonical facade: $client->Embedding()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->embedding()
    // resolves here too.
    public function Embedding($data = null)
    {
        require_once __DIR__ . '/entity/embedding_entity.php';
        if ($data === null) {
            if ($this->_embedding === null) {
                $this->_embedding = new EmbeddingEntity($this, null);
            }
            return $this->_embedding;
        }
        return new EmbeddingEntity($this, $data);
    }


    private $_endpoint = null;

    // Canonical facade: $client->Endpoint()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->endpoint()
    // resolves here too.
    public function Endpoint($data = null)
    {
        require_once __DIR__ . '/entity/endpoint_entity.php';
        if ($data === null) {
            if ($this->_endpoint === null) {
                $this->_endpoint = new EndpointEntity($this, null);
            }
            return $this->_endpoint;
        }
        return new EndpointEntity($this, $data);
    }


    private $_feedback = null;

    // Canonical facade: $client->Feedback()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->feedback()
    // resolves here too.
    public function Feedback($data = null)
    {
        require_once __DIR__ . '/entity/feedback_entity.php';
        if ($data === null) {
            if ($this->_feedback === null) {
                $this->_feedback = new FeedbackEntity($this, null);
            }
            return $this->_feedback;
        }
        return new FeedbackEntity($this, $data);
    }


    private $_file = null;

    // Canonical facade: $client->File()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->file()
    // resolves here too.
    public function File($data = null)
    {
        require_once __DIR__ . '/entity/file_entity.php';
        if ($data === null) {
            if ($this->_file === null) {
                $this->_file = new FileEntity($this, null);
            }
            return $this->_file;
        }
        return new FileEntity($this, $data);
    }


    private $_generation = null;

    // Canonical facade: $client->Generation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->generation()
    // resolves here too.
    public function Generation($data = null)
    {
        require_once __DIR__ . '/entity/generation_entity.php';
        if ($data === null) {
            if ($this->_generation === null) {
                $this->_generation = new GenerationEntity($this, null);
            }
            return $this->_generation;
        }
        return new GenerationEntity($this, $data);
    }


    private $_generation_content = null;

    // Canonical facade: $client->GenerationContent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->generation_content()
    // resolves here too.
    public function GenerationContent($data = null)
    {
        require_once __DIR__ . '/entity/generation_content_entity.php';
        if ($data === null) {
            if ($this->_generation_content === null) {
                $this->_generation_content = new GenerationContentEntity($this, null);
            }
            return $this->_generation_content;
        }
        return new GenerationContentEntity($this, $data);
    }


    private $_guardrail = null;

    // Canonical facade: $client->Guardrail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->guardrail()
    // resolves here too.
    public function Guardrail($data = null)
    {
        require_once __DIR__ . '/entity/guardrail_entity.php';
        if ($data === null) {
            if ($this->_guardrail === null) {
                $this->_guardrail = new GuardrailEntity($this, null);
            }
            return $this->_guardrail;
        }
        return new GuardrailEntity($this, $data);
    }


    private $_image = null;

    // Canonical facade: $client->Image()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->image()
    // resolves here too.
    public function Image($data = null)
    {
        require_once __DIR__ . '/entity/image_entity.php';
        if ($data === null) {
            if ($this->_image === null) {
                $this->_image = new ImageEntity($this, null);
            }
            return $this->_image;
        }
        return new ImageEntity($this, $data);
    }


    private $_image_model_endpoint = null;

    // Canonical facade: $client->ImageModelEndpoint()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->image_model_endpoint()
    // resolves here too.
    public function ImageModelEndpoint($data = null)
    {
        require_once __DIR__ . '/entity/image_model_endpoint_entity.php';
        if ($data === null) {
            if ($this->_image_model_endpoint === null) {
                $this->_image_model_endpoint = new ImageModelEndpointEntity($this, null);
            }
            return $this->_image_model_endpoint;
        }
        return new ImageModelEndpointEntity($this, $data);
    }


    private $_image_models_list = null;

    // Canonical facade: $client->ImageModelsList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->image_models_list()
    // resolves here too.
    public function ImageModelsList($data = null)
    {
        require_once __DIR__ . '/entity/image_models_list_entity.php';
        if ($data === null) {
            if ($this->_image_models_list === null) {
                $this->_image_models_list = new ImageModelsListEntity($this, null);
            }
            return $this->_image_models_list;
        }
        return new ImageModelsListEntity($this, $data);
    }


    private $_key = null;

    // Canonical facade: $client->Key()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->key()
    // resolves here too.
    public function Key($data = null)
    {
        require_once __DIR__ . '/entity/key_entity.php';
        if ($data === null) {
            if ($this->_key === null) {
                $this->_key = new KeyEntity($this, null);
            }
            return $this->_key;
        }
        return new KeyEntity($this, $data);
    }


    private $_list_byok_key = null;

    // Canonical facade: $client->ListByokKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_byok_key()
    // resolves here too.
    public function ListByokKey($data = null)
    {
        require_once __DIR__ . '/entity/list_byok_key_entity.php';
        if ($data === null) {
            if ($this->_list_byok_key === null) {
                $this->_list_byok_key = new ListByokKeyEntity($this, null);
            }
            return $this->_list_byok_key;
        }
        return new ListByokKeyEntity($this, $data);
    }


    private $_list_guardrail = null;

    // Canonical facade: $client->ListGuardrail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_guardrail()
    // resolves here too.
    public function ListGuardrail($data = null)
    {
        require_once __DIR__ . '/entity/list_guardrail_entity.php';
        if ($data === null) {
            if ($this->_list_guardrail === null) {
                $this->_list_guardrail = new ListGuardrailEntity($this, null);
            }
            return $this->_list_guardrail;
        }
        return new ListGuardrailEntity($this, $data);
    }


    private $_list_key_assignment = null;

    // Canonical facade: $client->ListKeyAssignment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_key_assignment()
    // resolves here too.
    public function ListKeyAssignment($data = null)
    {
        require_once __DIR__ . '/entity/list_key_assignment_entity.php';
        if ($data === null) {
            if ($this->_list_key_assignment === null) {
                $this->_list_key_assignment = new ListKeyAssignmentEntity($this, null);
            }
            return $this->_list_key_assignment;
        }
        return new ListKeyAssignmentEntity($this, $data);
    }


    private $_list_member_assignment = null;

    // Canonical facade: $client->ListMemberAssignment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_member_assignment()
    // resolves here too.
    public function ListMemberAssignment($data = null)
    {
        require_once __DIR__ . '/entity/list_member_assignment_entity.php';
        if ($data === null) {
            if ($this->_list_member_assignment === null) {
                $this->_list_member_assignment = new ListMemberAssignmentEntity($this, null);
            }
            return $this->_list_member_assignment;
        }
        return new ListMemberAssignmentEntity($this, $data);
    }


    private $_list_observability_destination = null;

    // Canonical facade: $client->ListObservabilityDestination()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_observability_destination()
    // resolves here too.
    public function ListObservabilityDestination($data = null)
    {
        require_once __DIR__ . '/entity/list_observability_destination_entity.php';
        if ($data === null) {
            if ($this->_list_observability_destination === null) {
                $this->_list_observability_destination = new ListObservabilityDestinationEntity($this, null);
            }
            return $this->_list_observability_destination;
        }
        return new ListObservabilityDestinationEntity($this, $data);
    }


    private $_list_preset = null;

    // Canonical facade: $client->ListPreset()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_preset()
    // resolves here too.
    public function ListPreset($data = null)
    {
        require_once __DIR__ . '/entity/list_preset_entity.php';
        if ($data === null) {
            if ($this->_list_preset === null) {
                $this->_list_preset = new ListPresetEntity($this, null);
            }
            return $this->_list_preset;
        }
        return new ListPresetEntity($this, $data);
    }


    private $_list_preset_version = null;

    // Canonical facade: $client->ListPresetVersion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_preset_version()
    // resolves here too.
    public function ListPresetVersion($data = null)
    {
        require_once __DIR__ . '/entity/list_preset_version_entity.php';
        if ($data === null) {
            if ($this->_list_preset_version === null) {
                $this->_list_preset_version = new ListPresetVersionEntity($this, null);
            }
            return $this->_list_preset_version;
        }
        return new ListPresetVersionEntity($this, $data);
    }


    private $_list_workspace = null;

    // Canonical facade: $client->ListWorkspace()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_workspace()
    // resolves here too.
    public function ListWorkspace($data = null)
    {
        require_once __DIR__ . '/entity/list_workspace_entity.php';
        if ($data === null) {
            if ($this->_list_workspace === null) {
                $this->_list_workspace = new ListWorkspaceEntity($this, null);
            }
            return $this->_list_workspace;
        }
        return new ListWorkspaceEntity($this, $data);
    }


    private $_list_workspace_budget = null;

    // Canonical facade: $client->ListWorkspaceBudget()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_workspace_budget()
    // resolves here too.
    public function ListWorkspaceBudget($data = null)
    {
        require_once __DIR__ . '/entity/list_workspace_budget_entity.php';
        if ($data === null) {
            if ($this->_list_workspace_budget === null) {
                $this->_list_workspace_budget = new ListWorkspaceBudgetEntity($this, null);
            }
            return $this->_list_workspace_budget;
        }
        return new ListWorkspaceBudgetEntity($this, $data);
    }


    private $_list_workspace_member = null;

    // Canonical facade: $client->ListWorkspaceMember()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_workspace_member()
    // resolves here too.
    public function ListWorkspaceMember($data = null)
    {
        require_once __DIR__ . '/entity/list_workspace_member_entity.php';
        if ($data === null) {
            if ($this->_list_workspace_member === null) {
                $this->_list_workspace_member = new ListWorkspaceMemberEntity($this, null);
            }
            return $this->_list_workspace_member;
        }
        return new ListWorkspaceMemberEntity($this, $data);
    }


    private $_member = null;

    // Canonical facade: $client->Member()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->member()
    // resolves here too.
    public function Member($data = null)
    {
        require_once __DIR__ . '/entity/member_entity.php';
        if ($data === null) {
            if ($this->_member === null) {
                $this->_member = new MemberEntity($this, null);
            }
            return $this->_member;
        }
        return new MemberEntity($this, $data);
    }


    private $_message = null;

    // Canonical facade: $client->Message()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->message()
    // resolves here too.
    public function Message($data = null)
    {
        require_once __DIR__ . '/entity/message_entity.php';
        if ($data === null) {
            if ($this->_message === null) {
                $this->_message = new MessageEntity($this, null);
            }
            return $this->_message;
        }
        return new MessageEntity($this, $data);
    }


    private $_meta = null;

    // Canonical facade: $client->Meta()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->meta()
    // resolves here too.
    public function Meta($data = null)
    {
        require_once __DIR__ . '/entity/meta_entity.php';
        if ($data === null) {
            if ($this->_meta === null) {
                $this->_meta = new MetaEntity($this, null);
            }
            return $this->_meta;
        }
        return new MetaEntity($this, $data);
    }


    private $_model = null;

    // Canonical facade: $client->Model()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->model()
    // resolves here too.
    public function Model($data = null)
    {
        require_once __DIR__ . '/entity/model_entity.php';
        if ($data === null) {
            if ($this->_model === null) {
                $this->_model = new ModelEntity($this, null);
            }
            return $this->_model;
        }
        return new ModelEntity($this, $data);
    }


    private $_models_count = null;

    // Canonical facade: $client->ModelsCount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->models_count()
    // resolves here too.
    public function ModelsCount($data = null)
    {
        require_once __DIR__ . '/entity/models_count_entity.php';
        if ($data === null) {
            if ($this->_models_count === null) {
                $this->_models_count = new ModelsCountEntity($this, null);
            }
            return $this->_models_count;
        }
        return new ModelsCountEntity($this, $data);
    }


    private $_models_list = null;

    // Canonical facade: $client->ModelsList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->models_list()
    // resolves here too.
    public function ModelsList($data = null)
    {
        require_once __DIR__ . '/entity/models_list_entity.php';
        if ($data === null) {
            if ($this->_models_list === null) {
                $this->_models_list = new ModelsListEntity($this, null);
            }
            return $this->_models_list;
        }
        return new ModelsListEntity($this, $data);
    }


    private $_o_auth = null;

    // Canonical facade: $client->OAuth()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->o_auth()
    // resolves here too.
    public function OAuth($data = null)
    {
        require_once __DIR__ . '/entity/o_auth_entity.php';
        if ($data === null) {
            if ($this->_o_auth === null) {
                $this->_o_auth = new OAuthEntity($this, null);
            }
            return $this->_o_auth;
        }
        return new OAuthEntity($this, $data);
    }


    private $_observability_destination = null;

    // Canonical facade: $client->ObservabilityDestination()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->observability_destination()
    // resolves here too.
    public function ObservabilityDestination($data = null)
    {
        require_once __DIR__ . '/entity/observability_destination_entity.php';
        if ($data === null) {
            if ($this->_observability_destination === null) {
                $this->_observability_destination = new ObservabilityDestinationEntity($this, null);
            }
            return $this->_observability_destination;
        }
        return new ObservabilityDestinationEntity($this, $data);
    }


    private $_open_responses_result = null;

    // Canonical facade: $client->OpenResponsesResult()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->open_responses_result()
    // resolves here too.
    public function OpenResponsesResult($data = null)
    {
        require_once __DIR__ . '/entity/open_responses_result_entity.php';
        if ($data === null) {
            if ($this->_open_responses_result === null) {
                $this->_open_responses_result = new OpenResponsesResultEntity($this, null);
            }
            return $this->_open_responses_result;
        }
        return new OpenResponsesResultEntity($this, $data);
    }


    private $_organization = null;

    // Canonical facade: $client->Organization()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization()
    // resolves here too.
    public function Organization($data = null)
    {
        require_once __DIR__ . '/entity/organization_entity.php';
        if ($data === null) {
            if ($this->_organization === null) {
                $this->_organization = new OrganizationEntity($this, null);
            }
            return $this->_organization;
        }
        return new OrganizationEntity($this, $data);
    }


    private $_preset = null;

    // Canonical facade: $client->Preset()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->preset()
    // resolves here too.
    public function Preset($data = null)
    {
        require_once __DIR__ . '/entity/preset_entity.php';
        if ($data === null) {
            if ($this->_preset === null) {
                $this->_preset = new PresetEntity($this, null);
            }
            return $this->_preset;
        }
        return new PresetEntity($this, $data);
    }


    private $_preset_version = null;

    // Canonical facade: $client->PresetVersion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->preset_version()
    // resolves here too.
    public function PresetVersion($data = null)
    {
        require_once __DIR__ . '/entity/preset_version_entity.php';
        if ($data === null) {
            if ($this->_preset_version === null) {
                $this->_preset_version = new PresetVersionEntity($this, null);
            }
            return $this->_preset_version;
        }
        return new PresetVersionEntity($this, $data);
    }


    private $_provider = null;

    // Canonical facade: $client->Provider()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->provider()
    // resolves here too.
    public function Provider($data = null)
    {
        require_once __DIR__ . '/entity/provider_entity.php';
        if ($data === null) {
            if ($this->_provider === null) {
                $this->_provider = new ProviderEntity($this, null);
            }
            return $this->_provider;
        }
        return new ProviderEntity($this, $data);
    }


    private $_query = null;

    // Canonical facade: $client->Query()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->query()
    // resolves here too.
    public function Query($data = null)
    {
        require_once __DIR__ . '/entity/query_entity.php';
        if ($data === null) {
            if ($this->_query === null) {
                $this->_query = new QueryEntity($this, null);
            }
            return $this->_query;
        }
        return new QueryEntity($this, $data);
    }


    private $_rankings_daily = null;

    // Canonical facade: $client->RankingsDaily()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rankings_daily()
    // resolves here too.
    public function RankingsDaily($data = null)
    {
        require_once __DIR__ . '/entity/rankings_daily_entity.php';
        if ($data === null) {
            if ($this->_rankings_daily === null) {
                $this->_rankings_daily = new RankingsDailyEntity($this, null);
            }
            return $this->_rankings_daily;
        }
        return new RankingsDailyEntity($this, $data);
    }


    private $_remove = null;

    // Canonical facade: $client->Remove()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->remove()
    // resolves here too.
    public function Remove($data = null)
    {
        require_once __DIR__ . '/entity/remove_entity.php';
        if ($data === null) {
            if ($this->_remove === null) {
                $this->_remove = new RemoveEntity($this, null);
            }
            return $this->_remove;
        }
        return new RemoveEntity($this, $data);
    }


    private $_rerank = null;

    // Canonical facade: $client->Rerank()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rerank()
    // resolves here too.
    public function Rerank($data = null)
    {
        require_once __DIR__ . '/entity/rerank_entity.php';
        if ($data === null) {
            if ($this->_rerank === null) {
                $this->_rerank = new RerankEntity($this, null);
            }
            return $this->_rerank;
        }
        return new RerankEntity($this, $data);
    }


    private $_response = null;

    // Canonical facade: $client->Response()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->response()
    // resolves here too.
    public function Response($data = null)
    {
        require_once __DIR__ . '/entity/response_entity.php';
        if ($data === null) {
            if ($this->_response === null) {
                $this->_response = new ResponseEntity($this, null);
            }
            return $this->_response;
        }
        return new ResponseEntity($this, $data);
    }


    private $_speech = null;

    // Canonical facade: $client->Speech()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->speech()
    // resolves here too.
    public function Speech($data = null)
    {
        require_once __DIR__ . '/entity/speech_entity.php';
        if ($data === null) {
            if ($this->_speech === null) {
                $this->_speech = new SpeechEntity($this, null);
            }
            return $this->_speech;
        }
        return new SpeechEntity($this, $data);
    }


    private $_stt = null;

    // Canonical facade: $client->Stt()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->stt()
    // resolves here too.
    public function Stt($data = null)
    {
        require_once __DIR__ . '/entity/stt_entity.php';
        if ($data === null) {
            if ($this->_stt === null) {
                $this->_stt = new SttEntity($this, null);
            }
            return $this->_stt;
        }
        return new SttEntity($this, $data);
    }


    private $_submit_generation_feedback = null;

    // Canonical facade: $client->SubmitGenerationFeedback()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->submit_generation_feedback()
    // resolves here too.
    public function SubmitGenerationFeedback($data = null)
    {
        require_once __DIR__ . '/entity/submit_generation_feedback_entity.php';
        if ($data === null) {
            if ($this->_submit_generation_feedback === null) {
                $this->_submit_generation_feedback = new SubmitGenerationFeedbackEntity($this, null);
            }
            return $this->_submit_generation_feedback;
        }
        return new SubmitGenerationFeedbackEntity($this, $data);
    }


    private $_task = null;

    // Canonical facade: $client->Task()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->task()
    // resolves here too.
    public function Task($data = null)
    {
        require_once __DIR__ . '/entity/task_entity.php';
        if ($data === null) {
            if ($this->_task === null) {
                $this->_task = new TaskEntity($this, null);
            }
            return $this->_task;
        }
        return new TaskEntity($this, $data);
    }


    private $_transcription = null;

    // Canonical facade: $client->Transcription()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->transcription()
    // resolves here too.
    public function Transcription($data = null)
    {
        require_once __DIR__ . '/entity/transcription_entity.php';
        if ($data === null) {
            if ($this->_transcription === null) {
                $this->_transcription = new TranscriptionEntity($this, null);
            }
            return $this->_transcription;
        }
        return new TranscriptionEntity($this, $data);
    }


    private $_tts = null;

    // Canonical facade: $client->Tts()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tts()
    // resolves here too.
    public function Tts($data = null)
    {
        require_once __DIR__ . '/entity/tts_entity.php';
        if ($data === null) {
            if ($this->_tts === null) {
                $this->_tts = new TtsEntity($this, null);
            }
            return $this->_tts;
        }
        return new TtsEntity($this, $data);
    }


    private $_unified_benchmark = null;

    // Canonical facade: $client->UnifiedBenchmark()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->unified_benchmark()
    // resolves here too.
    public function UnifiedBenchmark($data = null)
    {
        require_once __DIR__ . '/entity/unified_benchmark_entity.php';
        if ($data === null) {
            if ($this->_unified_benchmark === null) {
                $this->_unified_benchmark = new UnifiedBenchmarkEntity($this, null);
            }
            return $this->_unified_benchmark;
        }
        return new UnifiedBenchmarkEntity($this, $data);
    }


    private $_update_byok_key = null;

    // Canonical facade: $client->UpdateByokKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->update_byok_key()
    // resolves here too.
    public function UpdateByokKey($data = null)
    {
        require_once __DIR__ . '/entity/update_byok_key_entity.php';
        if ($data === null) {
            if ($this->_update_byok_key === null) {
                $this->_update_byok_key = new UpdateByokKeyEntity($this, null);
            }
            return $this->_update_byok_key;
        }
        return new UpdateByokKeyEntity($this, $data);
    }


    private $_update_guardrail = null;

    // Canonical facade: $client->UpdateGuardrail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->update_guardrail()
    // resolves here too.
    public function UpdateGuardrail($data = null)
    {
        require_once __DIR__ . '/entity/update_guardrail_entity.php';
        if ($data === null) {
            if ($this->_update_guardrail === null) {
                $this->_update_guardrail = new UpdateGuardrailEntity($this, null);
            }
            return $this->_update_guardrail;
        }
        return new UpdateGuardrailEntity($this, $data);
    }


    private $_update_observability_destination = null;

    // Canonical facade: $client->UpdateObservabilityDestination()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->update_observability_destination()
    // resolves here too.
    public function UpdateObservabilityDestination($data = null)
    {
        require_once __DIR__ . '/entity/update_observability_destination_entity.php';
        if ($data === null) {
            if ($this->_update_observability_destination === null) {
                $this->_update_observability_destination = new UpdateObservabilityDestinationEntity($this, null);
            }
            return $this->_update_observability_destination;
        }
        return new UpdateObservabilityDestinationEntity($this, $data);
    }


    private $_update_workspace = null;

    // Canonical facade: $client->UpdateWorkspace()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->update_workspace()
    // resolves here too.
    public function UpdateWorkspace($data = null)
    {
        require_once __DIR__ . '/entity/update_workspace_entity.php';
        if ($data === null) {
            if ($this->_update_workspace === null) {
                $this->_update_workspace = new UpdateWorkspaceEntity($this, null);
            }
            return $this->_update_workspace;
        }
        return new UpdateWorkspaceEntity($this, $data);
    }


    private $_upsert_workspace_budget = null;

    // Canonical facade: $client->UpsertWorkspaceBudget()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->upsert_workspace_budget()
    // resolves here too.
    public function UpsertWorkspaceBudget($data = null)
    {
        require_once __DIR__ . '/entity/upsert_workspace_budget_entity.php';
        if ($data === null) {
            if ($this->_upsert_workspace_budget === null) {
                $this->_upsert_workspace_budget = new UpsertWorkspaceBudgetEntity($this, null);
            }
            return $this->_upsert_workspace_budget;
        }
        return new UpsertWorkspaceBudgetEntity($this, $data);
    }


    private $_user = null;

    // Canonical facade: $client->User()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user()
    // resolves here too.
    public function User($data = null)
    {
        require_once __DIR__ . '/entity/user_entity.php';
        if ($data === null) {
            if ($this->_user === null) {
                $this->_user = new UserEntity($this, null);
            }
            return $this->_user;
        }
        return new UserEntity($this, $data);
    }


    private $_version = null;

    // Canonical facade: $client->Version()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->version()
    // resolves here too.
    public function Version($data = null)
    {
        require_once __DIR__ . '/entity/version_entity.php';
        if ($data === null) {
            if ($this->_version === null) {
                $this->_version = new VersionEntity($this, null);
            }
            return $this->_version;
        }
        return new VersionEntity($this, $data);
    }


    private $_video = null;

    // Canonical facade: $client->Video()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->video()
    // resolves here too.
    public function Video($data = null)
    {
        require_once __DIR__ . '/entity/video_entity.php';
        if ($data === null) {
            if ($this->_video === null) {
                $this->_video = new VideoEntity($this, null);
            }
            return $this->_video;
        }
        return new VideoEntity($this, $data);
    }


    private $_video_generation = null;

    // Canonical facade: $client->VideoGeneration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->video_generation()
    // resolves here too.
    public function VideoGeneration($data = null)
    {
        require_once __DIR__ . '/entity/video_generation_entity.php';
        if ($data === null) {
            if ($this->_video_generation === null) {
                $this->_video_generation = new VideoGenerationEntity($this, null);
            }
            return $this->_video_generation;
        }
        return new VideoGenerationEntity($this, $data);
    }


    private $_video_models_list = null;

    // Canonical facade: $client->VideoModelsList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->video_models_list()
    // resolves here too.
    public function VideoModelsList($data = null)
    {
        require_once __DIR__ . '/entity/video_models_list_entity.php';
        if ($data === null) {
            if ($this->_video_models_list === null) {
                $this->_video_models_list = new VideoModelsListEntity($this, null);
            }
            return $this->_video_models_list;
        }
        return new VideoModelsListEntity($this, $data);
    }


    private $_workspace = null;

    // Canonical facade: $client->Workspace()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workspace()
    // resolves here too.
    public function Workspace($data = null)
    {
        require_once __DIR__ . '/entity/workspace_entity.php';
        if ($data === null) {
            if ($this->_workspace === null) {
                $this->_workspace = new WorkspaceEntity($this, null);
            }
            return $this->_workspace;
        }
        return new WorkspaceEntity($this, $data);
    }


    private $_workspace_budget = null;

    // Canonical facade: $client->WorkspaceBudget()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workspace_budget()
    // resolves here too.
    public function WorkspaceBudget($data = null)
    {
        require_once __DIR__ . '/entity/workspace_budget_entity.php';
        if ($data === null) {
            if ($this->_workspace_budget === null) {
                $this->_workspace_budget = new WorkspaceBudgetEntity($this, null);
            }
            return $this->_workspace_budget;
        }
        return new WorkspaceBudgetEntity($this, $data);
    }


    private $_zdr = null;

    // Canonical facade: $client->Zdr()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zdr()
    // resolves here too.
    public function Zdr($data = null)
    {
        require_once __DIR__ . '/entity/zdr_entity.php';
        if ($data === null) {
            if ($this->_zdr === null) {
                $this->_zdr = new ZdrEntity($this, null);
            }
            return $this->_zdr;
        }
        return new ZdrEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new OpenrouterModelsSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
