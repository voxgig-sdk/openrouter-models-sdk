-- UpsertWorkspaceBudget entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("openrouter-models_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("UpsertWorkspaceBudgetEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:UpsertWorkspaceBudget(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = upsert_workspace_budget_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"update"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "upsert_workspace_budget." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set OPENROUTER_MODELS_TEST_UPSERT_WORKSPACE_BUDGET_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local upsert_workspace_budget_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.upsert_workspace_budget")))
    local upsert_workspace_budget_ref01_data = nil
    if #upsert_workspace_budget_ref01_data_raw > 0 then
      upsert_workspace_budget_ref01_data = helpers.to_map(upsert_workspace_budget_ref01_data_raw[1][2])
    end

    -- UPDATE
    local upsert_workspace_budget_ref01_ent = client:UpsertWorkspaceBudget(nil)
    local upsert_workspace_budget_ref01_data_up0_up = {
      ["workspace_id"] = setup.idmap["workspace_id"],
    }

    local upsert_workspace_budget_ref01_resdata_up0_result, err = upsert_workspace_budget_ref01_ent:update(upsert_workspace_budget_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local upsert_workspace_budget_ref01_resdata_up0 = helpers.to_map(type(upsert_workspace_budget_ref01_resdata_up0_result) == 'table' and upsert_workspace_budget_ref01_resdata_up0_result.data_get and upsert_workspace_budget_ref01_resdata_up0_result:data_get() or upsert_workspace_budget_ref01_resdata_up0_result)
    assert.is_not_nil(upsert_workspace_budget_ref01_resdata_up0)

  end)
end)

function upsert_workspace_budget_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/upsert_workspace_budget/UpsertWorkspaceBudgetTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read upsert_workspace_budget test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "upsert_workspace_budget01", "upsert_workspace_budget02", "upsert_workspace_budget03", "workspace01", "workspace02", "workspace03" },
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
  local entid_env_raw = os.getenv("OPENROUTER_MODELS_TEST_UPSERT_WORKSPACE_BUDGET_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["OPENROUTER_MODELS_TEST_UPSERT_WORKSPACE_BUDGET_ENTID"] = idmap,
    ["OPENROUTER_MODELS_TEST_LIVE"] = "FALSE",
    ["OPENROUTER_MODELS_TEST_EXPLAIN"] = "FALSE",
    ["OPENROUTER_MODELS_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["OPENROUTER_MODELS_TEST_UPSERT_WORKSPACE_BUDGET_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["workspace_id"] == nil then
    idmap_resolved["workspace_id"] = idmap_resolved["workspace01"]
  end

  if env["OPENROUTER_MODELS_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      {
        apikey = env["OPENROUTER_MODELS_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["OPENROUTER_MODELS_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["OPENROUTER_MODELS_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
