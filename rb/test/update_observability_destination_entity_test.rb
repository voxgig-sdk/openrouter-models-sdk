# UpdateObservabilityDestination entity test

require "minitest/autorun"
require "json"
require_relative "../OpenrouterModels_sdk"
require_relative "runner"

class UpdateObservabilityDestinationEntityTest < Minitest::Test
  def test_create_instance
    testsdk = OpenrouterModelsSDK.test(nil, nil)
    ent = testsdk.UpdateObservabilityDestination(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = update_observability_destination_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "update_observability_destination." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set OPENROUTER_MODELS_TEST_UPDATE_OBSERVABILITY_DESTINATION_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    update_observability_destination_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.update_observability_destination")))
    update_observability_destination_ref01_data = nil
    if update_observability_destination_ref01_data_raw.length > 0
      update_observability_destination_ref01_data = Helpers.to_map(update_observability_destination_ref01_data_raw[0][1])
    end

    # UPDATE
    update_observability_destination_ref01_ent = client.UpdateObservabilityDestination(nil)
    update_observability_destination_ref01_data_up0_up = {
      "id" => update_observability_destination_ref01_data["id"],
    }

    update_observability_destination_ref01_markdef_up0_name = "name"
    update_observability_destination_ref01_markdef_up0_value = "Mark01-update_observability_destination_ref01_#{setup[:now]}"
    update_observability_destination_ref01_data_up0_up[update_observability_destination_ref01_markdef_up0_name] = update_observability_destination_ref01_markdef_up0_value

    update_observability_destination_ref01_resdata_up0_result = update_observability_destination_ref01_ent.update(update_observability_destination_ref01_data_up0_up, nil)
    update_observability_destination_ref01_resdata_up0 = Helpers.to_map(update_observability_destination_ref01_resdata_up0_result.respond_to?(:data_get) ? update_observability_destination_ref01_resdata_up0_result.data_get : update_observability_destination_ref01_resdata_up0_result)
    assert !update_observability_destination_ref01_resdata_up0.nil?
    assert_equal update_observability_destination_ref01_resdata_up0["id"], update_observability_destination_ref01_data_up0_up["id"]
    assert_equal update_observability_destination_ref01_resdata_up0[update_observability_destination_ref01_markdef_up0_name], update_observability_destination_ref01_markdef_up0_value

  end
end

def update_observability_destination_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "update_observability_destination", "UpdateObservabilityDestinationTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = OpenrouterModelsSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["update_observability_destination01", "update_observability_destination02", "update_observability_destination03"],
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
  entid_env_raw = ENV["OPENROUTER_MODELS_TEST_UPDATE_OBSERVABILITY_DESTINATION_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "OPENROUTER_MODELS_TEST_UPDATE_OBSERVABILITY_DESTINATION_ENTID" => idmap,
    "OPENROUTER_MODELS_TEST_LIVE" => "FALSE",
    "OPENROUTER_MODELS_TEST_EXPLAIN" => "FALSE",
    "OPENROUTER_MODELS_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["OPENROUTER_MODELS_TEST_UPDATE_OBSERVABILITY_DESTINATION_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["OPENROUTER_MODELS_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["OPENROUTER_MODELS_APIKEY"],
      },
      extra || {},
    ])
    client = OpenrouterModelsSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["OPENROUTER_MODELS_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["OPENROUTER_MODELS_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
