# Guardrail entity test

require "minitest/autorun"
require "json"
require_relative "../OpenrouterModels_sdk"
require_relative "runner"

class GuardrailEntityTest < Minitest::Test
  def test_create_instance
    testsdk = OpenrouterModelsSDK.test(nil, nil)
    ent = testsdk.Guardrail(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "guardrail" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = OpenrouterModelsSDK.test(seed, nil)
    seen = base.Guardrail(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = OpenrouterModelsConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = OpenrouterModelsSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.Guardrail(nil).stream("list", nil, nil).each do |item|
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
    setup = guardrail_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "guardrail." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set OPENROUTER_MODELS_TEST_GUARDRAIL_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    guardrail_ref01_ent = client.Guardrail(nil)
    guardrail_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.guardrail"), "guardrail_ref01"))

    guardrail_ref01_data_result = guardrail_ref01_ent.create(guardrail_ref01_data, nil)
    guardrail_ref01_data = Helpers.to_map(guardrail_ref01_data_result.respond_to?(:data_get) ? guardrail_ref01_data_result.data_get : guardrail_ref01_data_result)
    assert !guardrail_ref01_data.nil?
    assert !guardrail_ref01_data["id"].nil?

    # LIST
    guardrail_ref01_match = {}

    guardrail_ref01_list_result = guardrail_ref01_ent.list(guardrail_ref01_match, nil)
    assert guardrail_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(guardrail_ref01_list_result),
      { "id" => guardrail_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # LOAD
    guardrail_ref01_match_dt0 = {
      "id" => guardrail_ref01_data["id"],
    }
    guardrail_ref01_data_dt0_loaded = guardrail_ref01_ent.load(guardrail_ref01_match_dt0, nil)
    guardrail_ref01_data_dt0_load_result = Helpers.to_map(guardrail_ref01_data_dt0_loaded.respond_to?(:data_get) ? guardrail_ref01_data_dt0_loaded.data_get : guardrail_ref01_data_dt0_loaded)
    assert !guardrail_ref01_data_dt0_load_result.nil?
    assert_equal guardrail_ref01_data_dt0_load_result["id"], guardrail_ref01_data["id"]

    # REMOVE
    guardrail_ref01_match_rm0 = {
      "id" => guardrail_ref01_data["id"],
    }
    guardrail_ref01_ent.remove(guardrail_ref01_match_rm0, nil)

    # LIST
    guardrail_ref01_match_rt0 = {}

    guardrail_ref01_list_rt0_result = guardrail_ref01_ent.list(guardrail_ref01_match_rt0, nil)
    assert guardrail_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(guardrail_ref01_list_rt0_result),
      { "id" => guardrail_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def guardrail_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "guardrail", "GuardrailTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = OpenrouterModelsSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["guardrail01", "guardrail02", "guardrail03"],
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
  entid_env_raw = ENV["OPENROUTER_MODELS_TEST_GUARDRAIL_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "OPENROUTER_MODELS_TEST_GUARDRAIL_ENTID" => idmap,
    "OPENROUTER_MODELS_TEST_LIVE" => "FALSE",
    "OPENROUTER_MODELS_TEST_EXPLAIN" => "FALSE",
    "OPENROUTER_MODELS_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["OPENROUTER_MODELS_TEST_GUARDRAIL_ENTID"])
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
