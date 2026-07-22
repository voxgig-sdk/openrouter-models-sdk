# BulkRemoveWorkspaceMember entity test

require "minitest/autorun"
require "json"
require_relative "../OpenrouterModels_sdk"
require_relative "runner"

class BulkRemoveWorkspaceMemberEntityTest < Minitest::Test
  def test_create_instance
    testsdk = OpenrouterModelsSDK.test(nil, nil)
    ent = testsdk.BulkRemoveWorkspaceMember(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = bulk_remove_workspace_member_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "bulk_remove_workspace_member." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set OPENROUTERMODELS_TEST_BULK_REMOVE_WORKSPACE_MEMBER_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    bulk_remove_workspace_member_ref01_ent = client.BulkRemoveWorkspaceMember(nil)
    bulk_remove_workspace_member_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.bulk_remove_workspace_member"), "bulk_remove_workspace_member_ref01"))
    bulk_remove_workspace_member_ref01_data["workspace_id"] = setup[:idmap]["workspace01"]

    bulk_remove_workspace_member_ref01_data_result = bulk_remove_workspace_member_ref01_ent.create(bulk_remove_workspace_member_ref01_data, nil)
    bulk_remove_workspace_member_ref01_data = Helpers.to_map(bulk_remove_workspace_member_ref01_data_result)
    assert !bulk_remove_workspace_member_ref01_data.nil?

  end
end

def bulk_remove_workspace_member_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "bulk_remove_workspace_member", "BulkRemoveWorkspaceMemberTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = OpenrouterModelsSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["bulk_remove_workspace_member01", "bulk_remove_workspace_member02", "bulk_remove_workspace_member03", "workspace01", "workspace02", "workspace03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["OPENROUTERMODELS_TEST_BULK_REMOVE_WORKSPACE_MEMBER_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "OPENROUTERMODELS_TEST_BULK_REMOVE_WORKSPACE_MEMBER_ENTID" => idmap,
    "OPENROUTERMODELS_TEST_LIVE" => "FALSE",
    "OPENROUTERMODELS_TEST_EXPLAIN" => "FALSE",
    "OPENROUTERMODELS_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["OPENROUTERMODELS_TEST_BULK_REMOVE_WORKSPACE_MEMBER_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["OPENROUTERMODELS_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["OPENROUTERMODELS_APIKEY"],
      },
      extra || {},
    ])
    client = OpenrouterModelsSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["OPENROUTERMODELS_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["OPENROUTERMODELS_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
