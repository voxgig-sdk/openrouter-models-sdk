# Byok entity test

require "minitest/autorun"
require "json"
require_relative "../OpenrouterModels_sdk"
require_relative "runner"

class ByokEntityTest < Minitest::Test
  def test_create_instance
    testsdk = OpenrouterModelsSDK.test(nil, nil)
    ent = testsdk.Byok(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "byok" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = OpenrouterModelsSDK.test(seed, nil)
    seen = base.Byok(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = OpenrouterModelsConfig.make_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = OpenrouterModelsSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.Byok(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = byok_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "byok." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set OPENROUTERMODELS_TEST_BYOK_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    byok_ref01_ent = client.Byok(nil)
    byok_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.byok"), "byok_ref01"))

    byok_ref01_data_result = byok_ref01_ent.create(byok_ref01_data, nil)
    byok_ref01_data = Helpers.to_map(byok_ref01_data_result)
    assert !byok_ref01_data.nil?
    assert !byok_ref01_data["id"].nil?

    # LIST
    byok_ref01_match = {}

    byok_ref01_list_result = byok_ref01_ent.list(byok_ref01_match, nil)
    assert byok_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(byok_ref01_list_result),
      { "id" => byok_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # LOAD
    byok_ref01_match_dt0 = {
      "id" => byok_ref01_data["id"],
    }
    byok_ref01_data_dt0_loaded = byok_ref01_ent.load(byok_ref01_match_dt0, nil)
    byok_ref01_data_dt0_load_result = Helpers.to_map(byok_ref01_data_dt0_loaded)
    assert !byok_ref01_data_dt0_load_result.nil?
    assert_equal byok_ref01_data_dt0_load_result["id"], byok_ref01_data["id"]

    # REMOVE
    byok_ref01_match_rm0 = {
      "id" => byok_ref01_data["id"],
    }
    byok_ref01_ent.remove(byok_ref01_match_rm0, nil)

    # LIST
    byok_ref01_match_rt0 = {}

    byok_ref01_list_rt0_result = byok_ref01_ent.list(byok_ref01_match_rt0, nil)
    assert byok_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(byok_ref01_list_rt0_result),
      { "id" => byok_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def byok_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "byok", "ByokTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = OpenrouterModelsSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["byok01", "byok02", "byok03"],
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
  entid_env_raw = ENV["OPENROUTERMODELS_TEST_BYOK_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "OPENROUTERMODELS_TEST_BYOK_ENTID" => idmap,
    "OPENROUTERMODELS_TEST_LIVE" => "FALSE",
    "OPENROUTERMODELS_TEST_EXPLAIN" => "FALSE",
    "OPENROUTERMODELS_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["OPENROUTERMODELS_TEST_BYOK_ENTID"])
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
