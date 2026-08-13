<?php
declare(strict_types=1);

// BulkUnassignKey entity test

require_once __DIR__ . '/../openroutermodels_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class BulkUnassignKeyEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = OpenrouterModelsSDK::test(null, null);
        $ent = $testsdk->BulkUnassignKey(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = bulk_unassign_key_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "bulk_unassign_key." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set OPENROUTER_MODELS_TEST_BULK_UNASSIGN_KEY_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $bulk_unassign_key_ref01_ent = $client->BulkUnassignKey(null);
        $bulk_unassign_key_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.bulk_unassign_key"), "bulk_unassign_key_ref01"));
        $bulk_unassign_key_ref01_data["guardrail_id"] = $setup["idmap"]["guardrail01"];

        $bulk_unassign_key_ref01_data_result = $bulk_unassign_key_ref01_ent->create($bulk_unassign_key_ref01_data, null);
        $bulk_unassign_key_ref01_data = Helpers::to_map(is_object($bulk_unassign_key_ref01_data_result) && method_exists($bulk_unassign_key_ref01_data_result, 'data_get') ? $bulk_unassign_key_ref01_data_result->data_get() : $bulk_unassign_key_ref01_data_result);
        $this->assertNotNull($bulk_unassign_key_ref01_data);

    }
}

function bulk_unassign_key_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/bulk_unassign_key/BulkUnassignKeyTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = OpenrouterModelsSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["bulk_unassign_key01", "bulk_unassign_key02", "bulk_unassign_key03", "guardrail01", "guardrail02", "guardrail03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("OPENROUTER_MODELS_TEST_BULK_UNASSIGN_KEY_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "OPENROUTER_MODELS_TEST_BULK_UNASSIGN_KEY_ENTID" => $idmap,
        "OPENROUTER_MODELS_TEST_LIVE" => "FALSE",
        "OPENROUTER_MODELS_TEST_EXPLAIN" => "FALSE",
        "OPENROUTER_MODELS_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["OPENROUTER_MODELS_TEST_BULK_UNASSIGN_KEY_ENTID"]);
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
