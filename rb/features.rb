# OpenrouterModels SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module OpenrouterModelsFeatures
  def self.make_feature(name)
    case name
    when "base"
      OpenrouterModelsBaseFeature.new
    when "ratelimit"
      OpenrouterModelsRatelimitFeature.new
    when "retry"
      OpenrouterModelsRetryFeature.new
    when "test"
      OpenrouterModelsTestFeature.new
    when "timeout"
      OpenrouterModelsTimeoutFeature.new
    else
      OpenrouterModelsBaseFeature.new
    end
  end
end
