# UpdateWorkspace entity test

require "minitest/autorun"
require "json"
require_relative "../OpenrouterModels_sdk"
require_relative "runner"

class UpdateWorkspaceEntityTest < Minitest::Test
  def test_create_instance
    testsdk = OpenrouterModelsSDK.test(nil, nil)
    ent = testsdk.UpdateWorkspace(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "update_workspace" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = OpenrouterModelsSDK.test(seed, nil)
    seen = base.UpdateWorkspace(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = OpenrouterModelsConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = OpenrouterModelsSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.UpdateWorkspace(nil).stream("list", nil, nil).each do |item|
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
    setup = update_workspace_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "update_workspace." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set OPENROUTER_MODELS_TEST_UPDATE_WORKSPACE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    update_workspace_ref01_ent = client.UpdateWorkspace(nil)
    update_workspace_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.update_workspace"), "update_workspace_ref01"))

    update_workspace_ref01_data_result = update_workspace_ref01_ent.create(update_workspace_ref01_data, nil)
    update_workspace_ref01_data = Helpers.to_map(update_workspace_ref01_data_result.respond_to?(:data_get) ? update_workspace_ref01_data_result.data_get : update_workspace_ref01_data_result)
    assert !update_workspace_ref01_data.nil?
    assert !update_workspace_ref01_data["id"].nil?

    # LIST
    update_workspace_ref01_match = {}

    update_workspace_ref01_list_result = update_workspace_ref01_ent.list(update_workspace_ref01_match, nil)
    assert update_workspace_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(update_workspace_ref01_list_result),
      { "id" => update_workspace_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    update_workspace_ref01_data_up0_up = {
      "id" => update_workspace_ref01_data["id"],
    }

    update_workspace_ref01_markdef_up0_name = "created_at"
    update_workspace_ref01_markdef_up0_value = "Mark01-update_workspace_ref01_#{setup[:now]}"
    update_workspace_ref01_data_up0_up[update_workspace_ref01_markdef_up0_name] = update_workspace_ref01_markdef_up0_value

    update_workspace_ref01_resdata_up0_result = update_workspace_ref01_ent.update(update_workspace_ref01_data_up0_up, nil)
    update_workspace_ref01_resdata_up0 = Helpers.to_map(update_workspace_ref01_resdata_up0_result.respond_to?(:data_get) ? update_workspace_ref01_resdata_up0_result.data_get : update_workspace_ref01_resdata_up0_result)
    assert !update_workspace_ref01_resdata_up0.nil?
    assert_equal update_workspace_ref01_resdata_up0["id"], update_workspace_ref01_data_up0_up["id"]
    assert_equal update_workspace_ref01_resdata_up0[update_workspace_ref01_markdef_up0_name], update_workspace_ref01_markdef_up0_value

  end
end

def update_workspace_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "update_workspace", "UpdateWorkspaceTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = OpenrouterModelsSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["update_workspace01", "update_workspace02", "update_workspace03"],
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
  entid_env_raw = ENV["OPENROUTER_MODELS_TEST_UPDATE_WORKSPACE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "OPENROUTER_MODELS_TEST_UPDATE_WORKSPACE_ENTID" => idmap,
    "OPENROUTER_MODELS_TEST_LIVE" => "FALSE",
    "OPENROUTER_MODELS_TEST_EXPLAIN" => "FALSE",
    "OPENROUTER_MODELS_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["OPENROUTER_MODELS_TEST_UPDATE_WORKSPACE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["OPENROUTER_MODELS_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
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
