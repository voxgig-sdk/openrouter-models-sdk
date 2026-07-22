-- OpenrouterModels SDK error

local OpenrouterModelsError = {}
OpenrouterModelsError.__index = OpenrouterModelsError


function OpenrouterModelsError.new(code, msg, ctx)
  local self = setmetatable({}, OpenrouterModelsError)
  self.is_sdk_error = true
  self.sdk = "OpenrouterModels"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function OpenrouterModelsError:error()
  return self.msg
end


function OpenrouterModelsError:__tostring()
  return self.msg
end


return OpenrouterModelsError
