-- BulkUnassignKey entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("openrouter-models_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("BulkUnassignKeyEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:BulkUnassignKey(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = bulk_unassign_key_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "bulk_unassign_key." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set OPENROUTERMODELS_TEST_BULK_UNASSIGN_KEY_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local bulk_unassign_key_ref01_ent = client:BulkUnassignKey(nil)
    local bulk_unassign_key_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.bulk_unassign_key"), "bulk_unassign_key_ref01"))
    bulk_unassign_key_ref01_data["guardrail_id"] = setup.idmap["guardrail01"]

    local bulk_unassign_key_ref01_data_result, err = bulk_unassign_key_ref01_ent:create(bulk_unassign_key_ref01_data, nil)
    assert.is_nil(err)
    bulk_unassign_key_ref01_data = helpers.to_map(bulk_unassign_key_ref01_data_result)
    assert.is_not_nil(bulk_unassign_key_ref01_data)

  end)
end)

function bulk_unassign_key_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/bulk_unassign_key/BulkUnassignKeyTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read bulk_unassign_key test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "bulk_unassign_key01", "bulk_unassign_key02", "bulk_unassign_key03", "guardrail01", "guardrail02", "guardrail03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("OPENROUTERMODELS_TEST_BULK_UNASSIGN_KEY_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["OPENROUTERMODELS_TEST_BULK_UNASSIGN_KEY_ENTID"] = idmap,
    ["OPENROUTERMODELS_TEST_LIVE"] = "FALSE",
    ["OPENROUTERMODELS_TEST_EXPLAIN"] = "FALSE",
    ["OPENROUTERMODELS_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["OPENROUTERMODELS_TEST_BULK_UNASSIGN_KEY_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["OPENROUTERMODELS_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      {
        apikey = env["OPENROUTERMODELS_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["OPENROUTERMODELS_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["OPENROUTERMODELS_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
