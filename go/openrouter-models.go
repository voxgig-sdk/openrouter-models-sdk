package voxgigopenroutermodelssdk

import (
	"github.com/voxgig-sdk/openrouter-models-sdk/go/core"
	"github.com/voxgig-sdk/openrouter-models-sdk/go/entity"
	"github.com/voxgig-sdk/openrouter-models-sdk/go/feature"
	_ "github.com/voxgig-sdk/openrouter-models-sdk/go/utility"
)

// Type aliases preserve external API.
type OpenrouterModelsSDK = core.OpenrouterModelsSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type OpenrouterModelsEntity = core.OpenrouterModelsEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type OpenrouterModelsError = core.OpenrouterModelsError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewActivityEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewActivityEntity(client, entopts)
	}
	core.NewApiKeyEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewApiKeyEntity(client, entopts)
	}
	core.NewAppRankingEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewAppRankingEntity(client, entopts)
	}
	core.NewBetaAnalyticsEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewBetaAnalyticsEntity(client, entopts)
	}
	core.NewBulkAddWorkspaceMemberEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewBulkAddWorkspaceMemberEntity(client, entopts)
	}
	core.NewBulkAssignKeyEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewBulkAssignKeyEntity(client, entopts)
	}
	core.NewBulkAssignMemberEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewBulkAssignMemberEntity(client, entopts)
	}
	core.NewBulkRemoveWorkspaceMemberEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewBulkRemoveWorkspaceMemberEntity(client, entopts)
	}
	core.NewBulkUnassignKeyEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewBulkUnassignKeyEntity(client, entopts)
	}
	core.NewBulkUnassignMemberEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewBulkUnassignMemberEntity(client, entopts)
	}
	core.NewByokEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewByokEntity(client, entopts)
	}
	core.NewChatResultEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewChatResultEntity(client, entopts)
	}
	core.NewCompletionEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewCompletionEntity(client, entopts)
	}
	core.NewCreateObservabilityDestinationEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewCreateObservabilityDestinationEntity(client, entopts)
	}
	core.NewCreditEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewCreditEntity(client, entopts)
	}
	core.NewEmbeddingEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewEmbeddingEntity(client, entopts)
	}
	core.NewEndpointEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewEndpointEntity(client, entopts)
	}
	core.NewFileEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewFileEntity(client, entopts)
	}
	core.NewGenerationEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewGenerationEntity(client, entopts)
	}
	core.NewGenerationContentDataEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewGenerationContentDataEntity(client, entopts)
	}
	core.NewGuardrailEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewGuardrailEntity(client, entopts)
	}
	core.NewImageEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewImageEntity(client, entopts)
	}
	core.NewImageModelEndpointEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewImageModelEndpointEntity(client, entopts)
	}
	core.NewImageModelListItemEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewImageModelListItemEntity(client, entopts)
	}
	core.NewKeyEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewKeyEntity(client, entopts)
	}
	core.NewListObservabilityDestinationEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewListObservabilityDestinationEntity(client, entopts)
	}
	core.NewListPresetVersionEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewListPresetVersionEntity(client, entopts)
	}
	core.NewMemberEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewMemberEntity(client, entopts)
	}
	core.NewMessageEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewMessageEntity(client, entopts)
	}
	core.NewModelEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewModelEntity(client, entopts)
	}
	core.NewModelsCountEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewModelsCountEntity(client, entopts)
	}
	core.NewModelsListEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewModelsListEntity(client, entopts)
	}
	core.NewOAuthEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewOAuthEntity(client, entopts)
	}
	core.NewObservabilityDestinationEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewObservabilityDestinationEntity(client, entopts)
	}
	core.NewOpenResponsesResultEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewOpenResponsesResultEntity(client, entopts)
	}
	core.NewOrganizationEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewOrganizationEntity(client, entopts)
	}
	core.NewPresetEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewPresetEntity(client, entopts)
	}
	core.NewPresetVersionEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewPresetVersionEntity(client, entopts)
	}
	core.NewProviderEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewProviderEntity(client, entopts)
	}
	core.NewRankingsDailyEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewRankingsDailyEntity(client, entopts)
	}
	core.NewRerankEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewRerankEntity(client, entopts)
	}
	core.NewResponseEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewResponseEntity(client, entopts)
	}
	core.NewSttEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewSttEntity(client, entopts)
	}
	core.NewSubmitGenerationFeedbackEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewSubmitGenerationFeedbackEntity(client, entopts)
	}
	core.NewTaskEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewTaskEntity(client, entopts)
	}
	core.NewTtsEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewTtsEntity(client, entopts)
	}
	core.NewUnifiedBenchmarkEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewUnifiedBenchmarkEntity(client, entopts)
	}
	core.NewUpdateByokKeyEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewUpdateByokKeyEntity(client, entopts)
	}
	core.NewUpdateGuardrailEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewUpdateGuardrailEntity(client, entopts)
	}
	core.NewUpdateObservabilityDestinationEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewUpdateObservabilityDestinationEntity(client, entopts)
	}
	core.NewUpdateWorkspaceEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewUpdateWorkspaceEntity(client, entopts)
	}
	core.NewUpsertWorkspaceBudgetEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewUpsertWorkspaceBudgetEntity(client, entopts)
	}
	core.NewVideoEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewVideoEntity(client, entopts)
	}
	core.NewVideoGenerationEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewVideoGenerationEntity(client, entopts)
	}
	core.NewVideoModelEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewVideoModelEntity(client, entopts)
	}
	core.NewWorkspaceEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewWorkspaceEntity(client, entopts)
	}
	core.NewWorkspaceBudgetEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewWorkspaceBudgetEntity(client, entopts)
	}
	core.NewWorkspaceMemberEntityFunc = func(client *core.OpenrouterModelsSDK, entopts map[string]any) core.OpenrouterModelsEntity {
		return entity.NewWorkspaceMemberEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewOpenrouterModelsSDK = core.NewOpenrouterModelsSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewOpenrouterModelsSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *OpenrouterModelsSDK  { return NewOpenrouterModelsSDK(nil) }
func Test() *OpenrouterModelsSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
