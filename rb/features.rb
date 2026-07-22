# OpenrouterModels SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module OpenrouterModelsFeatures
  def self.make_feature(name)
    case name
    when "base"
      OpenrouterModelsBaseFeature.new
    when "test"
      OpenrouterModelsTestFeature.new
    else
      OpenrouterModelsBaseFeature.new
    end
  end
end
