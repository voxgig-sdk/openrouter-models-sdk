# OpenrouterModels SDK utility: make_context
require_relative '../core/context'
module OpenrouterModelsUtilities
  MakeContext = ->(ctxmap, basectx) {
    OpenrouterModelsContext.new(ctxmap, basectx)
  }
end
