<?php
declare(strict_types=1);

// Endpoint entity test

require_once __DIR__ . '/../openroutermodels_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class EndpointEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = OpenrouterModelsSDK::test(null, null);
        $ent = $testsdk->Endpoint(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "endpoint" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = OpenrouterModelsSDK::test($seed, null);
        $seen = iterator_to_array($base->Endpoint(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = OpenrouterModelsConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = OpenrouterModelsSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->Endpoint(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = endpoint_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "endpoint." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set OPENROUTER_MODELS_TEST_ENDPOINT_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $endpoint_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.endpoint")));
        $endpoint_ref01_data = null;
        if (count($endpoint_ref01_data_raw) > 0) {
            $endpoint_ref01_data = Helpers::to_map($endpoint_ref01_data_raw[0][1]);
        }

        // LIST
        $endpoint_ref01_ent = $client->Endpoint(null);
        $endpoint_ref01_match = [];

        $endpoint_ref01_list_result = $endpoint_ref01_ent->list($endpoint_ref01_match, null);
        $this->assertIsArray($endpoint_ref01_list_result);

        // LOAD
        $endpoint_ref01_match_dt0 = [
            "id" => $endpoint_ref01_data["id"],
        ];
        $endpoint_ref01_data_dt0_loaded = $endpoint_ref01_ent->load($endpoint_ref01_match_dt0, null);
        $endpoint_ref01_data_dt0_load_result = Helpers::to_map(is_object($endpoint_ref01_data_dt0_loaded) && method_exists($endpoint_ref01_data_dt0_loaded, 'data_get') ? $endpoint_ref01_data_dt0_loaded->data_get() : $endpoint_ref01_data_dt0_loaded);
        $this->assertNotNull($endpoint_ref01_data_dt0_load_result);
        $this->assertEquals($endpoint_ref01_data_dt0_load_result["id"], $endpoint_ref01_data["id"]);

    }
}

function endpoint_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/endpoint/EndpointTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = OpenrouterModelsSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["endpoint01", "endpoint02", "endpoint03", "model01", "model02", "model03", "author01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("OPENROUTER_MODELS_TEST_ENDPOINT_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "OPENROUTER_MODELS_TEST_ENDPOINT_ENTID" => $idmap,
        "OPENROUTER_MODELS_TEST_LIVE" => "FALSE",
        "OPENROUTER_MODELS_TEST_EXPLAIN" => "FALSE",
        "OPENROUTER_MODELS_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["OPENROUTER_MODELS_TEST_ENDPOINT_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["OPENROUTER_MODELS_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["OPENROUTER_MODELS_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new OpenrouterModelsSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["OPENROUTER_MODELS_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["OPENROUTER_MODELS_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
