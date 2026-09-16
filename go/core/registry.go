package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewActivityEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewAddEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewApiKeyEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewAppRankingEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewBenchmarkEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewBetaAnalyticsEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewBudgetEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewBulkAddWorkspaceMemberEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewBulkAssignKeyEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewBulkAssignMemberEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewBulkRemoveWorkspaceMemberEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewBulkUnassignKeyEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewBulkUnassignMemberEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewByokEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewChatResultEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewCodeEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewCoinbaseEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewCompletionEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewContentEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewCountEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewCreateByokKeyEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewCreateGuardrailEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewCreateObservabilityDestinationEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewCreatePresetFromInferenceEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewCreateWorkspaceEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewCreditEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewDestinationEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewEmbeddingEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewEndpointEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewFeedbackEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewFileEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewGenerationEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewGenerationContentEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewGuardrailEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewImageEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewImageModelEndpointEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewImageModelsListEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewKeyEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewListByokKeyEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewListGuardrailEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewListKeyAssignmentEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewListMemberAssignmentEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewListObservabilityDestinationEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewListPresetEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewListPresetVersionEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewListWorkspaceEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewListWorkspaceBudgetEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewListWorkspaceMemberEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewMemberEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewMessageEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewMetaEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewModelEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewModelsCountEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewModelsListEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewOAuthEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewObservabilityDestinationEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewOpenResponsesResultEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewOrganizationEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewPresetEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewPresetVersionEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewProviderEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewQueryEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewRankingsDailyEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewRemoveEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewRerankEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewResponseEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewSpeechEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewSttEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewSubmitGenerationFeedbackEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewTaskEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewTranscriptionEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewTtsEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewUnifiedBenchmarkEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewUpdateByokKeyEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewUpdateGuardrailEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewUpdateObservabilityDestinationEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewUpdateWorkspaceEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewUpsertWorkspaceBudgetEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewUserEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewVersionEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewVideoEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewVideoGenerationEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewVideoModelsListEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewWorkspaceEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewWorkspaceBudgetEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

var NewZdrEntityFunc func(client *OpenrouterModelsSDK, entopts map[string]any) OpenrouterModelsEntity

