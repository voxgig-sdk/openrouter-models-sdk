package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/openrouter-models-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"activity | api_key | app_ranking | beta_analytics | bulk_add_workspace_member | bulk_assign_key | bulk_assign_member | bulk_remove_workspace_member | bulk_unassign_key | bulk_unassign_member | byok | chat_result | completion | create_observability_destination | credit | embedding | endpoint | file | generation | generation_content_data | guardrail | image | image_model_endpoint | image_model_list_item | key | list_observability_destination | list_preset_version | member | message | model | models_count | models_list | o_auth | observability_destination | open_responses_result | organization | preset | preset_version | provider | rankings_daily | rerank | response | stt | submit_generation_feedback | task | tts | unified_benchmark | update_byok_key | update_guardrail | update_observability_destination | update_workspace | upsert_workspace_budget | video | video_generation | video_model | workspace | workspace_budget | workspace_member"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.OpenrouterModelsSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "openrouter-models_list",
		Description: "List records from OpenrouterModels. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "openrouter-models_load",
		Description: "Load a single record from OpenrouterModels. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.OpenrouterModelsSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.OpenrouterModelsSDK, name string) (sdk.OpenrouterModelsEntity, error) {
	switch strings.ToLower(name) {
	case "activity":
		return client.Activity(nil), nil
	case "api_key":
		return client.ApiKey(nil), nil
	case "app_ranking":
		return client.AppRanking(nil), nil
	case "beta_analytics":
		return client.BetaAnalytics(nil), nil
	case "bulk_add_workspace_member":
		return client.BulkAddWorkspaceMember(nil), nil
	case "bulk_assign_key":
		return client.BulkAssignKey(nil), nil
	case "bulk_assign_member":
		return client.BulkAssignMember(nil), nil
	case "bulk_remove_workspace_member":
		return client.BulkRemoveWorkspaceMember(nil), nil
	case "bulk_unassign_key":
		return client.BulkUnassignKey(nil), nil
	case "bulk_unassign_member":
		return client.BulkUnassignMember(nil), nil
	case "byok":
		return client.Byok(nil), nil
	case "chat_result":
		return client.ChatResult(nil), nil
	case "completion":
		return client.Completion(nil), nil
	case "create_observability_destination":
		return client.CreateObservabilityDestination(nil), nil
	case "credit":
		return client.Credit(nil), nil
	case "embedding":
		return client.Embedding(nil), nil
	case "endpoint":
		return client.Endpoint(nil), nil
	case "file":
		return client.File(nil), nil
	case "generation":
		return client.Generation(nil), nil
	case "generation_content_data":
		return client.GenerationContentData(nil), nil
	case "guardrail":
		return client.Guardrail(nil), nil
	case "image":
		return client.Image(nil), nil
	case "image_model_endpoint":
		return client.ImageModelEndpoint(nil), nil
	case "image_model_list_item":
		return client.ImageModelListItem(nil), nil
	case "key":
		return client.Key(nil), nil
	case "list_observability_destination":
		return client.ListObservabilityDestination(nil), nil
	case "list_preset_version":
		return client.ListPresetVersion(nil), nil
	case "member":
		return client.Member(nil), nil
	case "message":
		return client.Message(nil), nil
	case "model":
		return client.Model(nil), nil
	case "models_count":
		return client.ModelsCount(nil), nil
	case "models_list":
		return client.ModelsList(nil), nil
	case "o_auth":
		return client.OAuth(nil), nil
	case "observability_destination":
		return client.ObservabilityDestination(nil), nil
	case "open_responses_result":
		return client.OpenResponsesResult(nil), nil
	case "organization":
		return client.Organization(nil), nil
	case "preset":
		return client.Preset(nil), nil
	case "preset_version":
		return client.PresetVersion(nil), nil
	case "provider":
		return client.Provider(nil), nil
	case "rankings_daily":
		return client.RankingsDaily(nil), nil
	case "rerank":
		return client.Rerank(nil), nil
	case "response":
		return client.Response(nil), nil
	case "stt":
		return client.Stt(nil), nil
	case "submit_generation_feedback":
		return client.SubmitGenerationFeedback(nil), nil
	case "task":
		return client.Task(nil), nil
	case "tts":
		return client.Tts(nil), nil
	case "unified_benchmark":
		return client.UnifiedBenchmark(nil), nil
	case "update_byok_key":
		return client.UpdateByokKey(nil), nil
	case "update_guardrail":
		return client.UpdateGuardrail(nil), nil
	case "update_observability_destination":
		return client.UpdateObservabilityDestination(nil), nil
	case "update_workspace":
		return client.UpdateWorkspace(nil), nil
	case "upsert_workspace_budget":
		return client.UpsertWorkspaceBudget(nil), nil
	case "video":
		return client.Video(nil), nil
	case "video_generation":
		return client.VideoGeneration(nil), nil
	case "video_model":
		return client.VideoModel(nil), nil
	case "workspace":
		return client.Workspace(nil), nil
	case "workspace_budget":
		return client.WorkspaceBudget(nil), nil
	case "workspace_member":
		return client.WorkspaceMember(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
