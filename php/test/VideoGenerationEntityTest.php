<?php
declare(strict_types=1);

// VideoGeneration entity test

require_once __DIR__ . '/../openroutermodels_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class VideoGenerationEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = OpenrouterModelsSDK::test(null, null);
        $ent = $testsdk->VideoGeneration(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = video_generation_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "video_generation." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set OPENROUTER_MODELS_TEST_VIDEO_GENERATION_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $video_generation_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.video_generation")));
        $video_generation_ref01_data = null;
        if (count($video_generation_ref01_data_raw) > 0) {
            $video_generation_ref01_data = Helpers::to_map($video_generation_ref01_data_raw[0][1]);
        }

        // LOAD
        $video_generation_ref01_ent = $client->VideoGeneration(null);
        $video_generation_ref01_match_dt0 = [];
        $video_generation_ref01_data_dt0_loaded = $video_generation_ref01_ent->load($video_generation_ref01_match_dt0, null);
        $this->assertNotNull($video_generation_ref01_data_dt0_loaded);

    }
}

function video_generation_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/video_generation/VideoGenerationTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = OpenrouterModelsSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["video_generation01", "video_generation02", "video_generation03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("OPENROUTER_MODELS_TEST_VIDEO_GENERATION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "OPENROUTER_MODELS_TEST_VIDEO_GENERATION_ENTID" => $idmap,
        "OPENROUTER_MODELS_TEST_LIVE" => "FALSE",
        "OPENROUTER_MODELS_TEST_EXPLAIN" => "FALSE",
        "OPENROUTER_MODELS_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["OPENROUTER_MODELS_TEST_VIDEO_GENERATION_ENTID"]);
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
