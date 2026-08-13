# OpenrouterModels SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

OpenrouterModelsUtility.registrar = ->(u) {
  u.clean = OpenrouterModelsUtilities::Clean
  u.done = OpenrouterModelsUtilities::Done
  u.make_error = OpenrouterModelsUtilities::MakeError
  u.feature_add = OpenrouterModelsUtilities::FeatureAdd
  u.feature_hook = OpenrouterModelsUtilities::FeatureHook
  u.feature_init = OpenrouterModelsUtilities::FeatureInit
  u.fetcher = OpenrouterModelsUtilities::Fetcher
  u.make_fetch_def = OpenrouterModelsUtilities::MakeFetchDef
  u.make_context = OpenrouterModelsUtilities::MakeContext
  u.make_options = OpenrouterModelsUtilities::MakeOptions
  u.make_request = OpenrouterModelsUtilities::MakeRequest
  u.make_response = OpenrouterModelsUtilities::MakeResponse
  u.make_result = OpenrouterModelsUtilities::MakeResult
  u.make_point = OpenrouterModelsUtilities::MakePoint
  u.make_spec = OpenrouterModelsUtilities::MakeSpec
  u.make_url = OpenrouterModelsUtilities::MakeUrl
  u.param = OpenrouterModelsUtilities::Param
  u.prepare_auth = OpenrouterModelsUtilities::PrepareAuth
  u.prepare_body = OpenrouterModelsUtilities::PrepareBody
  u.prepare_headers = OpenrouterModelsUtilities::PrepareHeaders
  u.prepare_method = OpenrouterModelsUtilities::PrepareMethod
  u.prepare_params = OpenrouterModelsUtilities::PrepareParams
  u.prepare_path = OpenrouterModelsUtilities::PreparePath
  u.prepare_query = OpenrouterModelsUtilities::PrepareQuery
  u.graphql_body = OpenrouterModelsUtilities::GraphqlBody
  u.graphql_errors = OpenrouterModelsUtilities::GraphqlErrors
  u.result_basic = OpenrouterModelsUtilities::ResultBasic
  u.result_body = OpenrouterModelsUtilities::ResultBody
  u.result_headers = OpenrouterModelsUtilities::ResultHeaders
  u.transform_request = OpenrouterModelsUtilities::TransformRequest
  u.transform_response = OpenrouterModelsUtilities::TransformResponse
}
