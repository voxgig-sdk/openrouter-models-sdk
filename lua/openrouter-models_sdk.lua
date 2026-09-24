-- OpenrouterModels SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("openrouter-models_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local OpenrouterModelsSDK = {}
OpenrouterModelsSDK.__index = OpenrouterModelsSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

OpenrouterModelsSDK._make_feature = _make_feature


function OpenrouterModelsSDK.new(options)
  local self = setmetatable({}, OpenrouterModelsSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: ratelimit
  -- feature: retry
  -- feature: test
  -- feature: timeout


  return self
end


function OpenrouterModelsSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function OpenrouterModelsSDK:get_utility()
  return Utility.copy(self._utility)
end


function OpenrouterModelsSDK:get_root_ctx()
  return self._rootctx
end


function OpenrouterModelsSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function OpenrouterModelsSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function OpenrouterModelsSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function OpenrouterModelsSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "OpenrouterModelsSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function OpenrouterModelsSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function OpenrouterModelsSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "OpenrouterModelsSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:Activity():list() / client:Activity():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Activity(data)
  local EntityMod = require("entity.activity_entity")
  if data == nil then
    if self._activity == nil then
      self._activity = EntityMod.new(self, nil)
    end
    return self._activity
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiKey():list() / client:ApiKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:ApiKey(data)
  local EntityMod = require("entity.api_key_entity")
  if data == nil then
    if self._api_key == nil then
      self._api_key = EntityMod.new(self, nil)
    end
    return self._api_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AppRanking():list() / client:AppRanking():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:AppRanking(data)
  local EntityMod = require("entity.app_ranking_entity")
  if data == nil then
    if self._app_ranking == nil then
      self._app_ranking = EntityMod.new(self, nil)
    end
    return self._app_ranking
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BetaAnalytics():list() / client:BetaAnalytics():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:BetaAnalytics(data)
  local EntityMod = require("entity.beta_analytics_entity")
  if data == nil then
    if self._beta_analytics == nil then
      self._beta_analytics = EntityMod.new(self, nil)
    end
    return self._beta_analytics
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BulkAddWorkspaceMember():list() / client:BulkAddWorkspaceMember():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:BulkAddWorkspaceMember(data)
  local EntityMod = require("entity.bulk_add_workspace_member_entity")
  if data == nil then
    if self._bulk_add_workspace_member == nil then
      self._bulk_add_workspace_member = EntityMod.new(self, nil)
    end
    return self._bulk_add_workspace_member
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BulkAssignKey():list() / client:BulkAssignKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:BulkAssignKey(data)
  local EntityMod = require("entity.bulk_assign_key_entity")
  if data == nil then
    if self._bulk_assign_key == nil then
      self._bulk_assign_key = EntityMod.new(self, nil)
    end
    return self._bulk_assign_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BulkAssignMember():list() / client:BulkAssignMember():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:BulkAssignMember(data)
  local EntityMod = require("entity.bulk_assign_member_entity")
  if data == nil then
    if self._bulk_assign_member == nil then
      self._bulk_assign_member = EntityMod.new(self, nil)
    end
    return self._bulk_assign_member
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BulkRemoveWorkspaceMember():list() / client:BulkRemoveWorkspaceMember():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:BulkRemoveWorkspaceMember(data)
  local EntityMod = require("entity.bulk_remove_workspace_member_entity")
  if data == nil then
    if self._bulk_remove_workspace_member == nil then
      self._bulk_remove_workspace_member = EntityMod.new(self, nil)
    end
    return self._bulk_remove_workspace_member
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BulkUnassignKey():list() / client:BulkUnassignKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:BulkUnassignKey(data)
  local EntityMod = require("entity.bulk_unassign_key_entity")
  if data == nil then
    if self._bulk_unassign_key == nil then
      self._bulk_unassign_key = EntityMod.new(self, nil)
    end
    return self._bulk_unassign_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BulkUnassignMember():list() / client:BulkUnassignMember():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:BulkUnassignMember(data)
  local EntityMod = require("entity.bulk_unassign_member_entity")
  if data == nil then
    if self._bulk_unassign_member == nil then
      self._bulk_unassign_member = EntityMod.new(self, nil)
    end
    return self._bulk_unassign_member
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Byok():list() / client:Byok():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Byok(data)
  local EntityMod = require("entity.byok_entity")
  if data == nil then
    if self._byok == nil then
      self._byok = EntityMod.new(self, nil)
    end
    return self._byok
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ChatResult():list() / client:ChatResult():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:ChatResult(data)
  local EntityMod = require("entity.chat_result_entity")
  if data == nil then
    if self._chat_result == nil then
      self._chat_result = EntityMod.new(self, nil)
    end
    return self._chat_result
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Completion():list() / client:Completion():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Completion(data)
  local EntityMod = require("entity.completion_entity")
  if data == nil then
    if self._completion == nil then
      self._completion = EntityMod.new(self, nil)
    end
    return self._completion
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreateObservabilityDestination():list() / client:CreateObservabilityDestination():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:CreateObservabilityDestination(data)
  local EntityMod = require("entity.create_observability_destination_entity")
  if data == nil then
    if self._create_observability_destination == nil then
      self._create_observability_destination = EntityMod.new(self, nil)
    end
    return self._create_observability_destination
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Credit():list() / client:Credit():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Credit(data)
  local EntityMod = require("entity.credit_entity")
  if data == nil then
    if self._credit == nil then
      self._credit = EntityMod.new(self, nil)
    end
    return self._credit
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Embedding():list() / client:Embedding():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Embedding(data)
  local EntityMod = require("entity.embedding_entity")
  if data == nil then
    if self._embedding == nil then
      self._embedding = EntityMod.new(self, nil)
    end
    return self._embedding
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Endpoint():list() / client:Endpoint():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Endpoint(data)
  local EntityMod = require("entity.endpoint_entity")
  if data == nil then
    if self._endpoint == nil then
      self._endpoint = EntityMod.new(self, nil)
    end
    return self._endpoint
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:File():list() / client:File():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:File(data)
  local EntityMod = require("entity.file_entity")
  if data == nil then
    if self._file == nil then
      self._file = EntityMod.new(self, nil)
    end
    return self._file
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Generation():list() / client:Generation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Generation(data)
  local EntityMod = require("entity.generation_entity")
  if data == nil then
    if self._generation == nil then
      self._generation = EntityMod.new(self, nil)
    end
    return self._generation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GenerationContentData():list() / client:GenerationContentData():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:GenerationContentData(data)
  local EntityMod = require("entity.generation_content_data_entity")
  if data == nil then
    if self._generation_content_data == nil then
      self._generation_content_data = EntityMod.new(self, nil)
    end
    return self._generation_content_data
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Guardrail():list() / client:Guardrail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Guardrail(data)
  local EntityMod = require("entity.guardrail_entity")
  if data == nil then
    if self._guardrail == nil then
      self._guardrail = EntityMod.new(self, nil)
    end
    return self._guardrail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Image():list() / client:Image():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Image(data)
  local EntityMod = require("entity.image_entity")
  if data == nil then
    if self._image == nil then
      self._image = EntityMod.new(self, nil)
    end
    return self._image
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImageModelEndpoint():list() / client:ImageModelEndpoint():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:ImageModelEndpoint(data)
  local EntityMod = require("entity.image_model_endpoint_entity")
  if data == nil then
    if self._image_model_endpoint == nil then
      self._image_model_endpoint = EntityMod.new(self, nil)
    end
    return self._image_model_endpoint
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImageModelListItem():list() / client:ImageModelListItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:ImageModelListItem(data)
  local EntityMod = require("entity.image_model_list_item_entity")
  if data == nil then
    if self._image_model_list_item == nil then
      self._image_model_list_item = EntityMod.new(self, nil)
    end
    return self._image_model_list_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Key():list() / client:Key():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Key(data)
  local EntityMod = require("entity.key_entity")
  if data == nil then
    if self._key == nil then
      self._key = EntityMod.new(self, nil)
    end
    return self._key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListObservabilityDestination():list() / client:ListObservabilityDestination():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:ListObservabilityDestination(data)
  local EntityMod = require("entity.list_observability_destination_entity")
  if data == nil then
    if self._list_observability_destination == nil then
      self._list_observability_destination = EntityMod.new(self, nil)
    end
    return self._list_observability_destination
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListPresetVersion():list() / client:ListPresetVersion():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:ListPresetVersion(data)
  local EntityMod = require("entity.list_preset_version_entity")
  if data == nil then
    if self._list_preset_version == nil then
      self._list_preset_version = EntityMod.new(self, nil)
    end
    return self._list_preset_version
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Member():list() / client:Member():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Member(data)
  local EntityMod = require("entity.member_entity")
  if data == nil then
    if self._member == nil then
      self._member = EntityMod.new(self, nil)
    end
    return self._member
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Message():list() / client:Message():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Message(data)
  local EntityMod = require("entity.message_entity")
  if data == nil then
    if self._message == nil then
      self._message = EntityMod.new(self, nil)
    end
    return self._message
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Model():list() / client:Model():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Model(data)
  local EntityMod = require("entity.model_entity")
  if data == nil then
    if self._model == nil then
      self._model = EntityMod.new(self, nil)
    end
    return self._model
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ModelsCount():list() / client:ModelsCount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:ModelsCount(data)
  local EntityMod = require("entity.models_count_entity")
  if data == nil then
    if self._models_count == nil then
      self._models_count = EntityMod.new(self, nil)
    end
    return self._models_count
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ModelsList():list() / client:ModelsList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:ModelsList(data)
  local EntityMod = require("entity.models_list_entity")
  if data == nil then
    if self._models_list == nil then
      self._models_list = EntityMod.new(self, nil)
    end
    return self._models_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OAuth():list() / client:OAuth():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:OAuth(data)
  local EntityMod = require("entity.o_auth_entity")
  if data == nil then
    if self._o_auth == nil then
      self._o_auth = EntityMod.new(self, nil)
    end
    return self._o_auth
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ObservabilityDestination():list() / client:ObservabilityDestination():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:ObservabilityDestination(data)
  local EntityMod = require("entity.observability_destination_entity")
  if data == nil then
    if self._observability_destination == nil then
      self._observability_destination = EntityMod.new(self, nil)
    end
    return self._observability_destination
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OpenResponsesResult():list() / client:OpenResponsesResult():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:OpenResponsesResult(data)
  local EntityMod = require("entity.open_responses_result_entity")
  if data == nil then
    if self._open_responses_result == nil then
      self._open_responses_result = EntityMod.new(self, nil)
    end
    return self._open_responses_result
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Organization():list() / client:Organization():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Organization(data)
  local EntityMod = require("entity.organization_entity")
  if data == nil then
    if self._organization == nil then
      self._organization = EntityMod.new(self, nil)
    end
    return self._organization
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Preset():list() / client:Preset():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Preset(data)
  local EntityMod = require("entity.preset_entity")
  if data == nil then
    if self._preset == nil then
      self._preset = EntityMod.new(self, nil)
    end
    return self._preset
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PresetVersion():list() / client:PresetVersion():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:PresetVersion(data)
  local EntityMod = require("entity.preset_version_entity")
  if data == nil then
    if self._preset_version == nil then
      self._preset_version = EntityMod.new(self, nil)
    end
    return self._preset_version
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Provider():list() / client:Provider():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Provider(data)
  local EntityMod = require("entity.provider_entity")
  if data == nil then
    if self._provider == nil then
      self._provider = EntityMod.new(self, nil)
    end
    return self._provider
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RankingsDaily():list() / client:RankingsDaily():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:RankingsDaily(data)
  local EntityMod = require("entity.rankings_daily_entity")
  if data == nil then
    if self._rankings_daily == nil then
      self._rankings_daily = EntityMod.new(self, nil)
    end
    return self._rankings_daily
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Rerank():list() / client:Rerank():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Rerank(data)
  local EntityMod = require("entity.rerank_entity")
  if data == nil then
    if self._rerank == nil then
      self._rerank = EntityMod.new(self, nil)
    end
    return self._rerank
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Response():list() / client:Response():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Response(data)
  local EntityMod = require("entity.response_entity")
  if data == nil then
    if self._response == nil then
      self._response = EntityMod.new(self, nil)
    end
    return self._response
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Stt():list() / client:Stt():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Stt(data)
  local EntityMod = require("entity.stt_entity")
  if data == nil then
    if self._stt == nil then
      self._stt = EntityMod.new(self, nil)
    end
    return self._stt
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubmitGenerationFeedback():list() / client:SubmitGenerationFeedback():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:SubmitGenerationFeedback(data)
  local EntityMod = require("entity.submit_generation_feedback_entity")
  if data == nil then
    if self._submit_generation_feedback == nil then
      self._submit_generation_feedback = EntityMod.new(self, nil)
    end
    return self._submit_generation_feedback
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Task():list() / client:Task():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Task(data)
  local EntityMod = require("entity.task_entity")
  if data == nil then
    if self._task == nil then
      self._task = EntityMod.new(self, nil)
    end
    return self._task
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Tts():list() / client:Tts():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Tts(data)
  local EntityMod = require("entity.tts_entity")
  if data == nil then
    if self._tts == nil then
      self._tts = EntityMod.new(self, nil)
    end
    return self._tts
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UnifiedBenchmark():list() / client:UnifiedBenchmark():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:UnifiedBenchmark(data)
  local EntityMod = require("entity.unified_benchmark_entity")
  if data == nil then
    if self._unified_benchmark == nil then
      self._unified_benchmark = EntityMod.new(self, nil)
    end
    return self._unified_benchmark
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UpdateByokKey():list() / client:UpdateByokKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:UpdateByokKey(data)
  local EntityMod = require("entity.update_byok_key_entity")
  if data == nil then
    if self._update_byok_key == nil then
      self._update_byok_key = EntityMod.new(self, nil)
    end
    return self._update_byok_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UpdateGuardrail():list() / client:UpdateGuardrail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:UpdateGuardrail(data)
  local EntityMod = require("entity.update_guardrail_entity")
  if data == nil then
    if self._update_guardrail == nil then
      self._update_guardrail = EntityMod.new(self, nil)
    end
    return self._update_guardrail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UpdateObservabilityDestination():list() / client:UpdateObservabilityDestination():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:UpdateObservabilityDestination(data)
  local EntityMod = require("entity.update_observability_destination_entity")
  if data == nil then
    if self._update_observability_destination == nil then
      self._update_observability_destination = EntityMod.new(self, nil)
    end
    return self._update_observability_destination
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UpdateWorkspace():list() / client:UpdateWorkspace():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:UpdateWorkspace(data)
  local EntityMod = require("entity.update_workspace_entity")
  if data == nil then
    if self._update_workspace == nil then
      self._update_workspace = EntityMod.new(self, nil)
    end
    return self._update_workspace
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UpsertWorkspaceBudget():list() / client:UpsertWorkspaceBudget():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:UpsertWorkspaceBudget(data)
  local EntityMod = require("entity.upsert_workspace_budget_entity")
  if data == nil then
    if self._upsert_workspace_budget == nil then
      self._upsert_workspace_budget = EntityMod.new(self, nil)
    end
    return self._upsert_workspace_budget
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Video():list() / client:Video():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Video(data)
  local EntityMod = require("entity.video_entity")
  if data == nil then
    if self._video == nil then
      self._video = EntityMod.new(self, nil)
    end
    return self._video
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:VideoGeneration():list() / client:VideoGeneration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:VideoGeneration(data)
  local EntityMod = require("entity.video_generation_entity")
  if data == nil then
    if self._video_generation == nil then
      self._video_generation = EntityMod.new(self, nil)
    end
    return self._video_generation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:VideoModel():list() / client:VideoModel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:VideoModel(data)
  local EntityMod = require("entity.video_model_entity")
  if data == nil then
    if self._video_model == nil then
      self._video_model = EntityMod.new(self, nil)
    end
    return self._video_model
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Workspace():list() / client:Workspace():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:Workspace(data)
  local EntityMod = require("entity.workspace_entity")
  if data == nil then
    if self._workspace == nil then
      self._workspace = EntityMod.new(self, nil)
    end
    return self._workspace
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkspaceBudget():list() / client:WorkspaceBudget():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:WorkspaceBudget(data)
  local EntityMod = require("entity.workspace_budget_entity")
  if data == nil then
    if self._workspace_budget == nil then
      self._workspace_budget = EntityMod.new(self, nil)
    end
    return self._workspace_budget
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkspaceMember():list() / client:WorkspaceMember():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function OpenrouterModelsSDK:WorkspaceMember(data)
  local EntityMod = require("entity.workspace_member_entity")
  if data == nil then
    if self._workspace_member == nil then
      self._workspace_member = EntityMod.new(self, nil)
    end
    return self._workspace_member
  end
  return EntityMod.new(self, data)
end




function OpenrouterModelsSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = OpenrouterModelsSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return OpenrouterModelsSDK
