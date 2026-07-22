<?php
declare(strict_types=1);

// UpdateWorkspace entity test

require_once __DIR__ . '/../openroutermodels_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class UpdateWorkspaceEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = OpenrouterModelsSDK::test(null, null);
        $ent = $testsdk->UpdateWorkspace(null);
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
                "update_workspace" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = OpenrouterModelsSDK::test($seed, null);
        $seen = iterator_to_array($base->UpdateWorkspace(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = OpenrouterModelsConfig::make_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = OpenrouterModelsSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->UpdateWorkspace(null)->stream("list", null, null) as $item) {
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
        $setup = update_workspace_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "update_workspace." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set OPENROUTERMODELS_TEST_UPDATE_WORKSPACE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $update_workspace_ref01_ent = $client->UpdateWorkspace(null);
        $update_workspace_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.update_workspace"), "update_workspace_ref01"));

        $update_workspace_ref01_data_result = $update_workspace_ref01_ent->create($update_workspace_ref01_data, null);
        $update_workspace_ref01_data = Helpers::to_map($update_workspace_ref01_data_result);
        $this->assertNotNull($update_workspace_ref01_data);
        $this->assertNotNull($update_workspace_ref01_data["id"]);

        // LIST
        $update_workspace_ref01_match = [];

        $update_workspace_ref01_list_result = $update_workspace_ref01_ent->list($update_workspace_ref01_match, null);
        $this->assertIsArray($update_workspace_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($update_workspace_ref01_list_result),
            ["id" => $update_workspace_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $update_workspace_ref01_data_up0_up = [
            "id" => $update_workspace_ref01_data["id"],
        ];

        $update_workspace_ref01_markdef_up0_name = "created_at";
        $update_workspace_ref01_markdef_up0_value = "Mark01-update_workspace_ref01_" . $setup["now"];
        $update_workspace_ref01_data_up0_up[$update_workspace_ref01_markdef_up0_name] = $update_workspace_ref01_markdef_up0_value;

        $update_workspace_ref01_resdata_up0_result = $update_workspace_ref01_ent->update($update_workspace_ref01_data_up0_up, null);
        $update_workspace_ref01_resdata_up0 = Helpers::to_map($update_workspace_ref01_resdata_up0_result);
        $this->assertNotNull($update_workspace_ref01_resdata_up0);
        $this->assertEquals($update_workspace_ref01_resdata_up0["id"], $update_workspace_ref01_data_up0_up["id"]);
        $this->assertEquals($update_workspace_ref01_resdata_up0[$update_workspace_ref01_markdef_up0_name], $update_workspace_ref01_markdef_up0_value);

    }
}

function update_workspace_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/update_workspace/UpdateWorkspaceTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = OpenrouterModelsSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["update_workspace01", "update_workspace02", "update_workspace03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("OPENROUTERMODELS_TEST_UPDATE_WORKSPACE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "OPENROUTERMODELS_TEST_UPDATE_WORKSPACE_ENTID" => $idmap,
        "OPENROUTERMODELS_TEST_LIVE" => "FALSE",
        "OPENROUTERMODELS_TEST_EXPLAIN" => "FALSE",
        "OPENROUTERMODELS_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["OPENROUTERMODELS_TEST_UPDATE_WORKSPACE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["OPENROUTERMODELS_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["OPENROUTERMODELS_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new OpenrouterModelsSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["OPENROUTERMODELS_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["OPENROUTERMODELS_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
