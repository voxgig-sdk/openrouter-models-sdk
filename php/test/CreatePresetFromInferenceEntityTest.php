<?php
declare(strict_types=1);

// CreatePresetFromInference entity test

require_once __DIR__ . '/../openroutermodels_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class CreatePresetFromInferenceEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = OpenrouterModelsSDK::test(null, null);
        $ent = $testsdk->CreatePresetFromInference(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = create_preset_from_inference_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "create_preset_from_inference." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set OPENROUTER_MODELS_TEST_CREATE_PRESET_FROM_INFERENCE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $create_preset_from_inference_ref01_ent = $client->CreatePresetFromInference(null);
        $create_preset_from_inference_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.create_preset_from_inference"), "create_preset_from_inference_ref01"));
        $create_preset_from_inference_ref01_data["slug"] = $setup["idmap"]["slug01"];

        $create_preset_from_inference_ref01_data_result = $create_preset_from_inference_ref01_ent->create($create_preset_from_inference_ref01_data, null);
        $create_preset_from_inference_ref01_data = Helpers::to_map(is_object($create_preset_from_inference_ref01_data_result) && method_exists($create_preset_from_inference_ref01_data_result, 'data_get') ? $create_preset_from_inference_ref01_data_result->data_get() : $create_preset_from_inference_ref01_data_result);
        $this->assertNotNull($create_preset_from_inference_ref01_data);

    }
}

function create_preset_from_inference_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/create_preset_from_inference/CreatePresetFromInferenceTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = OpenrouterModelsSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["create_preset_from_inference01", "create_preset_from_inference02", "create_preset_from_inference03", "preset01", "preset02", "preset03", "slug01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("OPENROUTER_MODELS_TEST_CREATE_PRESET_FROM_INFERENCE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "OPENROUTER_MODELS_TEST_CREATE_PRESET_FROM_INFERENCE_ENTID" => $idmap,
        "OPENROUTER_MODELS_TEST_LIVE" => "FALSE",
        "OPENROUTER_MODELS_TEST_EXPLAIN" => "FALSE",
        "OPENROUTER_MODELS_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["OPENROUTER_MODELS_TEST_CREATE_PRESET_FROM_INFERENCE_ENTID"]);
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
