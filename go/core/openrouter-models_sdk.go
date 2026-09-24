package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/openrouter-models-sdk/go/utility/struct"
)

type OpenrouterModelsSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewOpenrouterModelsSDK(options map[string]any) *OpenrouterModelsSDK {
	sdk := &OpenrouterModelsSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *OpenrouterModelsSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *OpenrouterModelsSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *OpenrouterModelsSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *OpenrouterModelsSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *OpenrouterModelsSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *OpenrouterModelsSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *OpenrouterModelsSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("OpenrouterModelsSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *OpenrouterModelsSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

func (sdk *OpenrouterModelsSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("OpenrouterModelsSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Activity returns a Activity entity bound to this client.
// Idiomatic usage: client.Activity(nil).List(nil, nil) or
// client.Activity(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Activity(data map[string]any) OpenrouterModelsEntity {
	return NewActivityEntityFunc(sdk, data)
}


// ApiKey returns a ApiKey entity bound to this client.
// Idiomatic usage: client.ApiKey(nil).List(nil, nil) or
// client.ApiKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) ApiKey(data map[string]any) OpenrouterModelsEntity {
	return NewApiKeyEntityFunc(sdk, data)
}


// AppRanking returns a AppRanking entity bound to this client.
// Idiomatic usage: client.AppRanking(nil).List(nil, nil) or
// client.AppRanking(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) AppRanking(data map[string]any) OpenrouterModelsEntity {
	return NewAppRankingEntityFunc(sdk, data)
}


// BetaAnalytics returns a BetaAnalytics entity bound to this client.
// Idiomatic usage: client.BetaAnalytics(nil).List(nil, nil) or
// client.BetaAnalytics(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) BetaAnalytics(data map[string]any) OpenrouterModelsEntity {
	return NewBetaAnalyticsEntityFunc(sdk, data)
}


// BulkAddWorkspaceMember returns a BulkAddWorkspaceMember entity bound to this client.
// Idiomatic usage: client.BulkAddWorkspaceMember(nil).List(nil, nil) or
// client.BulkAddWorkspaceMember(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) BulkAddWorkspaceMember(data map[string]any) OpenrouterModelsEntity {
	return NewBulkAddWorkspaceMemberEntityFunc(sdk, data)
}


// BulkAssignKey returns a BulkAssignKey entity bound to this client.
// Idiomatic usage: client.BulkAssignKey(nil).List(nil, nil) or
// client.BulkAssignKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) BulkAssignKey(data map[string]any) OpenrouterModelsEntity {
	return NewBulkAssignKeyEntityFunc(sdk, data)
}


// BulkAssignMember returns a BulkAssignMember entity bound to this client.
// Idiomatic usage: client.BulkAssignMember(nil).List(nil, nil) or
// client.BulkAssignMember(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) BulkAssignMember(data map[string]any) OpenrouterModelsEntity {
	return NewBulkAssignMemberEntityFunc(sdk, data)
}


// BulkRemoveWorkspaceMember returns a BulkRemoveWorkspaceMember entity bound to this client.
// Idiomatic usage: client.BulkRemoveWorkspaceMember(nil).List(nil, nil) or
// client.BulkRemoveWorkspaceMember(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) BulkRemoveWorkspaceMember(data map[string]any) OpenrouterModelsEntity {
	return NewBulkRemoveWorkspaceMemberEntityFunc(sdk, data)
}


// BulkUnassignKey returns a BulkUnassignKey entity bound to this client.
// Idiomatic usage: client.BulkUnassignKey(nil).List(nil, nil) or
// client.BulkUnassignKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) BulkUnassignKey(data map[string]any) OpenrouterModelsEntity {
	return NewBulkUnassignKeyEntityFunc(sdk, data)
}


// BulkUnassignMember returns a BulkUnassignMember entity bound to this client.
// Idiomatic usage: client.BulkUnassignMember(nil).List(nil, nil) or
// client.BulkUnassignMember(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) BulkUnassignMember(data map[string]any) OpenrouterModelsEntity {
	return NewBulkUnassignMemberEntityFunc(sdk, data)
}


// Byok returns a Byok entity bound to this client.
// Idiomatic usage: client.Byok(nil).List(nil, nil) or
// client.Byok(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Byok(data map[string]any) OpenrouterModelsEntity {
	return NewByokEntityFunc(sdk, data)
}


// ChatResult returns a ChatResult entity bound to this client.
// Idiomatic usage: client.ChatResult(nil).List(nil, nil) or
// client.ChatResult(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) ChatResult(data map[string]any) OpenrouterModelsEntity {
	return NewChatResultEntityFunc(sdk, data)
}


// Completion returns a Completion entity bound to this client.
// Idiomatic usage: client.Completion(nil).List(nil, nil) or
// client.Completion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Completion(data map[string]any) OpenrouterModelsEntity {
	return NewCompletionEntityFunc(sdk, data)
}


// CreateObservabilityDestination returns a CreateObservabilityDestination entity bound to this client.
// Idiomatic usage: client.CreateObservabilityDestination(nil).List(nil, nil) or
// client.CreateObservabilityDestination(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) CreateObservabilityDestination(data map[string]any) OpenrouterModelsEntity {
	return NewCreateObservabilityDestinationEntityFunc(sdk, data)
}


// Credit returns a Credit entity bound to this client.
// Idiomatic usage: client.Credit(nil).List(nil, nil) or
// client.Credit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Credit(data map[string]any) OpenrouterModelsEntity {
	return NewCreditEntityFunc(sdk, data)
}


// Embedding returns a Embedding entity bound to this client.
// Idiomatic usage: client.Embedding(nil).List(nil, nil) or
// client.Embedding(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Embedding(data map[string]any) OpenrouterModelsEntity {
	return NewEmbeddingEntityFunc(sdk, data)
}


// Endpoint returns a Endpoint entity bound to this client.
// Idiomatic usage: client.Endpoint(nil).List(nil, nil) or
// client.Endpoint(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Endpoint(data map[string]any) OpenrouterModelsEntity {
	return NewEndpointEntityFunc(sdk, data)
}


// File returns a File entity bound to this client.
// Idiomatic usage: client.File(nil).List(nil, nil) or
// client.File(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) File(data map[string]any) OpenrouterModelsEntity {
	return NewFileEntityFunc(sdk, data)
}


// Generation returns a Generation entity bound to this client.
// Idiomatic usage: client.Generation(nil).List(nil, nil) or
// client.Generation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Generation(data map[string]any) OpenrouterModelsEntity {
	return NewGenerationEntityFunc(sdk, data)
}


// GenerationContentData returns a GenerationContentData entity bound to this client.
// Idiomatic usage: client.GenerationContentData(nil).List(nil, nil) or
// client.GenerationContentData(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) GenerationContentData(data map[string]any) OpenrouterModelsEntity {
	return NewGenerationContentDataEntityFunc(sdk, data)
}


// Guardrail returns a Guardrail entity bound to this client.
// Idiomatic usage: client.Guardrail(nil).List(nil, nil) or
// client.Guardrail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Guardrail(data map[string]any) OpenrouterModelsEntity {
	return NewGuardrailEntityFunc(sdk, data)
}


// Image returns a Image entity bound to this client.
// Idiomatic usage: client.Image(nil).List(nil, nil) or
// client.Image(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Image(data map[string]any) OpenrouterModelsEntity {
	return NewImageEntityFunc(sdk, data)
}


// ImageModelEndpoint returns a ImageModelEndpoint entity bound to this client.
// Idiomatic usage: client.ImageModelEndpoint(nil).List(nil, nil) or
// client.ImageModelEndpoint(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) ImageModelEndpoint(data map[string]any) OpenrouterModelsEntity {
	return NewImageModelEndpointEntityFunc(sdk, data)
}


// ImageModelListItem returns a ImageModelListItem entity bound to this client.
// Idiomatic usage: client.ImageModelListItem(nil).List(nil, nil) or
// client.ImageModelListItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) ImageModelListItem(data map[string]any) OpenrouterModelsEntity {
	return NewImageModelListItemEntityFunc(sdk, data)
}


// Key returns a Key entity bound to this client.
// Idiomatic usage: client.Key(nil).List(nil, nil) or
// client.Key(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Key(data map[string]any) OpenrouterModelsEntity {
	return NewKeyEntityFunc(sdk, data)
}


// ListObservabilityDestination returns a ListObservabilityDestination entity bound to this client.
// Idiomatic usage: client.ListObservabilityDestination(nil).List(nil, nil) or
// client.ListObservabilityDestination(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) ListObservabilityDestination(data map[string]any) OpenrouterModelsEntity {
	return NewListObservabilityDestinationEntityFunc(sdk, data)
}


// ListPresetVersion returns a ListPresetVersion entity bound to this client.
// Idiomatic usage: client.ListPresetVersion(nil).List(nil, nil) or
// client.ListPresetVersion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) ListPresetVersion(data map[string]any) OpenrouterModelsEntity {
	return NewListPresetVersionEntityFunc(sdk, data)
}


// Member returns a Member entity bound to this client.
// Idiomatic usage: client.Member(nil).List(nil, nil) or
// client.Member(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Member(data map[string]any) OpenrouterModelsEntity {
	return NewMemberEntityFunc(sdk, data)
}


// Message returns a Message entity bound to this client.
// Idiomatic usage: client.Message(nil).List(nil, nil) or
// client.Message(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Message(data map[string]any) OpenrouterModelsEntity {
	return NewMessageEntityFunc(sdk, data)
}


// Model returns a Model entity bound to this client.
// Idiomatic usage: client.Model(nil).List(nil, nil) or
// client.Model(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Model(data map[string]any) OpenrouterModelsEntity {
	return NewModelEntityFunc(sdk, data)
}


// ModelsCount returns a ModelsCount entity bound to this client.
// Idiomatic usage: client.ModelsCount(nil).List(nil, nil) or
// client.ModelsCount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) ModelsCount(data map[string]any) OpenrouterModelsEntity {
	return NewModelsCountEntityFunc(sdk, data)
}


// ModelsList returns a ModelsList entity bound to this client.
// Idiomatic usage: client.ModelsList(nil).List(nil, nil) or
// client.ModelsList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) ModelsList(data map[string]any) OpenrouterModelsEntity {
	return NewModelsListEntityFunc(sdk, data)
}


// OAuth returns a OAuth entity bound to this client.
// Idiomatic usage: client.OAuth(nil).List(nil, nil) or
// client.OAuth(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) OAuth(data map[string]any) OpenrouterModelsEntity {
	return NewOAuthEntityFunc(sdk, data)
}


// ObservabilityDestination returns a ObservabilityDestination entity bound to this client.
// Idiomatic usage: client.ObservabilityDestination(nil).List(nil, nil) or
// client.ObservabilityDestination(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) ObservabilityDestination(data map[string]any) OpenrouterModelsEntity {
	return NewObservabilityDestinationEntityFunc(sdk, data)
}


// OpenResponsesResult returns a OpenResponsesResult entity bound to this client.
// Idiomatic usage: client.OpenResponsesResult(nil).List(nil, nil) or
// client.OpenResponsesResult(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) OpenResponsesResult(data map[string]any) OpenrouterModelsEntity {
	return NewOpenResponsesResultEntityFunc(sdk, data)
}


// Organization returns a Organization entity bound to this client.
// Idiomatic usage: client.Organization(nil).List(nil, nil) or
// client.Organization(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Organization(data map[string]any) OpenrouterModelsEntity {
	return NewOrganizationEntityFunc(sdk, data)
}


// Preset returns a Preset entity bound to this client.
// Idiomatic usage: client.Preset(nil).List(nil, nil) or
// client.Preset(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Preset(data map[string]any) OpenrouterModelsEntity {
	return NewPresetEntityFunc(sdk, data)
}


// PresetVersion returns a PresetVersion entity bound to this client.
// Idiomatic usage: client.PresetVersion(nil).List(nil, nil) or
// client.PresetVersion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) PresetVersion(data map[string]any) OpenrouterModelsEntity {
	return NewPresetVersionEntityFunc(sdk, data)
}


// Provider returns a Provider entity bound to this client.
// Idiomatic usage: client.Provider(nil).List(nil, nil) or
// client.Provider(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Provider(data map[string]any) OpenrouterModelsEntity {
	return NewProviderEntityFunc(sdk, data)
}


// RankingsDaily returns a RankingsDaily entity bound to this client.
// Idiomatic usage: client.RankingsDaily(nil).List(nil, nil) or
// client.RankingsDaily(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) RankingsDaily(data map[string]any) OpenrouterModelsEntity {
	return NewRankingsDailyEntityFunc(sdk, data)
}


// Rerank returns a Rerank entity bound to this client.
// Idiomatic usage: client.Rerank(nil).List(nil, nil) or
// client.Rerank(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Rerank(data map[string]any) OpenrouterModelsEntity {
	return NewRerankEntityFunc(sdk, data)
}


// Response returns a Response entity bound to this client.
// Idiomatic usage: client.Response(nil).List(nil, nil) or
// client.Response(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Response(data map[string]any) OpenrouterModelsEntity {
	return NewResponseEntityFunc(sdk, data)
}


// Stt returns a Stt entity bound to this client.
// Idiomatic usage: client.Stt(nil).List(nil, nil) or
// client.Stt(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Stt(data map[string]any) OpenrouterModelsEntity {
	return NewSttEntityFunc(sdk, data)
}


// SubmitGenerationFeedback returns a SubmitGenerationFeedback entity bound to this client.
// Idiomatic usage: client.SubmitGenerationFeedback(nil).List(nil, nil) or
// client.SubmitGenerationFeedback(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) SubmitGenerationFeedback(data map[string]any) OpenrouterModelsEntity {
	return NewSubmitGenerationFeedbackEntityFunc(sdk, data)
}


// Task returns a Task entity bound to this client.
// Idiomatic usage: client.Task(nil).List(nil, nil) or
// client.Task(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Task(data map[string]any) OpenrouterModelsEntity {
	return NewTaskEntityFunc(sdk, data)
}


// Tts returns a Tts entity bound to this client.
// Idiomatic usage: client.Tts(nil).List(nil, nil) or
// client.Tts(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Tts(data map[string]any) OpenrouterModelsEntity {
	return NewTtsEntityFunc(sdk, data)
}


// UnifiedBenchmark returns a UnifiedBenchmark entity bound to this client.
// Idiomatic usage: client.UnifiedBenchmark(nil).List(nil, nil) or
// client.UnifiedBenchmark(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) UnifiedBenchmark(data map[string]any) OpenrouterModelsEntity {
	return NewUnifiedBenchmarkEntityFunc(sdk, data)
}


// UpdateByokKey returns a UpdateByokKey entity bound to this client.
// Idiomatic usage: client.UpdateByokKey(nil).List(nil, nil) or
// client.UpdateByokKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) UpdateByokKey(data map[string]any) OpenrouterModelsEntity {
	return NewUpdateByokKeyEntityFunc(sdk, data)
}


// UpdateGuardrail returns a UpdateGuardrail entity bound to this client.
// Idiomatic usage: client.UpdateGuardrail(nil).List(nil, nil) or
// client.UpdateGuardrail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) UpdateGuardrail(data map[string]any) OpenrouterModelsEntity {
	return NewUpdateGuardrailEntityFunc(sdk, data)
}


// UpdateObservabilityDestination returns a UpdateObservabilityDestination entity bound to this client.
// Idiomatic usage: client.UpdateObservabilityDestination(nil).List(nil, nil) or
// client.UpdateObservabilityDestination(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) UpdateObservabilityDestination(data map[string]any) OpenrouterModelsEntity {
	return NewUpdateObservabilityDestinationEntityFunc(sdk, data)
}


// UpdateWorkspace returns a UpdateWorkspace entity bound to this client.
// Idiomatic usage: client.UpdateWorkspace(nil).List(nil, nil) or
// client.UpdateWorkspace(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) UpdateWorkspace(data map[string]any) OpenrouterModelsEntity {
	return NewUpdateWorkspaceEntityFunc(sdk, data)
}


// UpsertWorkspaceBudget returns a UpsertWorkspaceBudget entity bound to this client.
// Idiomatic usage: client.UpsertWorkspaceBudget(nil).List(nil, nil) or
// client.UpsertWorkspaceBudget(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) UpsertWorkspaceBudget(data map[string]any) OpenrouterModelsEntity {
	return NewUpsertWorkspaceBudgetEntityFunc(sdk, data)
}


// Video returns a Video entity bound to this client.
// Idiomatic usage: client.Video(nil).List(nil, nil) or
// client.Video(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Video(data map[string]any) OpenrouterModelsEntity {
	return NewVideoEntityFunc(sdk, data)
}


// VideoGeneration returns a VideoGeneration entity bound to this client.
// Idiomatic usage: client.VideoGeneration(nil).List(nil, nil) or
// client.VideoGeneration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) VideoGeneration(data map[string]any) OpenrouterModelsEntity {
	return NewVideoGenerationEntityFunc(sdk, data)
}


// VideoModel returns a VideoModel entity bound to this client.
// Idiomatic usage: client.VideoModel(nil).List(nil, nil) or
// client.VideoModel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) VideoModel(data map[string]any) OpenrouterModelsEntity {
	return NewVideoModelEntityFunc(sdk, data)
}


// Workspace returns a Workspace entity bound to this client.
// Idiomatic usage: client.Workspace(nil).List(nil, nil) or
// client.Workspace(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) Workspace(data map[string]any) OpenrouterModelsEntity {
	return NewWorkspaceEntityFunc(sdk, data)
}


// WorkspaceBudget returns a WorkspaceBudget entity bound to this client.
// Idiomatic usage: client.WorkspaceBudget(nil).List(nil, nil) or
// client.WorkspaceBudget(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) WorkspaceBudget(data map[string]any) OpenrouterModelsEntity {
	return NewWorkspaceBudgetEntityFunc(sdk, data)
}


// WorkspaceMember returns a WorkspaceMember entity bound to this client.
// Idiomatic usage: client.WorkspaceMember(nil).List(nil, nil) or
// client.WorkspaceMember(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *OpenrouterModelsSDK) WorkspaceMember(data map[string]any) OpenrouterModelsEntity {
	return NewWorkspaceMemberEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *OpenrouterModelsSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewOpenrouterModelsSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
