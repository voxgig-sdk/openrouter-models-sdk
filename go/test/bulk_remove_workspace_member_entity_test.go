package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/openrouter-models-sdk/go"
	"github.com/voxgig-sdk/openrouter-models-sdk/go/core"

	vs "github.com/voxgig-sdk/openrouter-models-sdk/go/utility/struct"
)

func TestBulkRemoveWorkspaceMemberEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.BulkRemoveWorkspaceMember(nil)
		if ent == nil {
			t.Fatal("expected non-nil BulkRemoveWorkspaceMemberEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := bulk_remove_workspace_memberBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "bulk_remove_workspace_member." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set OPENROUTER_MODELS_TEST_BULK_REMOVE_WORKSPACE_MEMBER_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		bulkRemoveWorkspaceMemberRef01Ent := client.BulkRemoveWorkspaceMember(nil)
		bulkRemoveWorkspaceMemberRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "bulk_remove_workspace_member"}, setup.data), "bulk_remove_workspace_member_ref01"))
		bulkRemoveWorkspaceMemberRef01Data["workspace_id"] = setup.idmap["workspace01"]

		bulkRemoveWorkspaceMemberRef01DataResult, err := bulkRemoveWorkspaceMemberRef01Ent.Create(bulkRemoveWorkspaceMemberRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		bulkRemoveWorkspaceMemberRef01Data = core.ToMapAny(entityData(bulkRemoveWorkspaceMemberRef01DataResult))
		if bulkRemoveWorkspaceMemberRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func bulk_remove_workspace_memberBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "bulk_remove_workspace_member", "BulkRemoveWorkspaceMemberTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read bulk_remove_workspace_member test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse bulk_remove_workspace_member test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"bulk_remove_workspace_member01", "bulk_remove_workspace_member02", "bulk_remove_workspace_member03", "workspace01", "workspace02", "workspace03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("OPENROUTER_MODELS_TEST_BULK_REMOVE_WORKSPACE_MEMBER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"OPENROUTER_MODELS_TEST_BULK_REMOVE_WORKSPACE_MEMBER_ENTID": idmap,
		"OPENROUTER_MODELS_TEST_LIVE":      "FALSE",
		"OPENROUTER_MODELS_TEST_EXPLAIN":   "FALSE",
		"OPENROUTER_MODELS_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["OPENROUTER_MODELS_TEST_BULK_REMOVE_WORKSPACE_MEMBER_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["OPENROUTER_MODELS_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["OPENROUTER_MODELS_APIKEY"],
			},
			extra,
		})
		client = sdk.NewOpenrouterModelsSDK(core.ToMapAny(mergedOpts))
	}

	live := env["OPENROUTER_MODELS_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["OPENROUTER_MODELS_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
