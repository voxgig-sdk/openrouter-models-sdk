<?php
declare(strict_types=1);

// Key entity test

require_once __DIR__ . '/../openroutermodels_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class KeyEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = OpenrouterModelsSDK::test(null, null);
        $ent = $testsdk->Key(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = key_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach ([] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "key." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set OPENROUTER_MODELS_TEST_KEY_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $key_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.key")));
        $key_ref01_data = null;
        if (count($key_ref01_data_raw) > 0) {
            $key_ref01_data = Helpers::to_map($key_ref01_data_raw[0][1]);
        }

    }
}

function key_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/key/KeyTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = OpenrouterModelsSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["key01", "key02", "key03", "guardrail01", "guardrail02", "guardrail03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("OPENROUTER_MODELS_TEST_KEY_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "OPENROUTER_MODELS_TEST_KEY_ENTID" => $idmap,
        "OPENROUTER_MODELS_TEST_LIVE" => "FALSE",
        "OPENROUTER_MODELS_TEST_EXPLAIN" => "FALSE",
        "OPENROUTER_MODELS_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["OPENROUTER_MODELS_TEST_KEY_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["OPENROUTER_MODELS_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["OPENROUTER_MODELS_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
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
