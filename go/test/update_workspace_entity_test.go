package sdktest

import (
	"encoding/json"
	"fmt"
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

func TestUpdateWorkspaceEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.UpdateWorkspace(nil)
		if ent == nil {
			t.Fatal("expected non-nil UpdateWorkspaceEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"update_workspace": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.UpdateWorkspace(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.MakeConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.UpdateWorkspace(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := update_workspaceBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "update_workspace." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set OPENROUTER_MODELS_TEST_UPDATE_WORKSPACE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		updateWorkspaceRef01Ent := client.UpdateWorkspace(nil)
		updateWorkspaceRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "update_workspace"}, setup.data), "update_workspace_ref01"))

		updateWorkspaceRef01DataResult, err := updateWorkspaceRef01Ent.Create(updateWorkspaceRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		updateWorkspaceRef01Data = core.ToMapAny(entityData(updateWorkspaceRef01DataResult))
		if updateWorkspaceRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if updateWorkspaceRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		updateWorkspaceRef01Match := map[string]any{}

		updateWorkspaceRef01ListResult, err := updateWorkspaceRef01Ent.List(updateWorkspaceRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		updateWorkspaceRef01List, updateWorkspaceRef01ListOk := updateWorkspaceRef01ListResult.([]any)
		if !updateWorkspaceRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", updateWorkspaceRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(updateWorkspaceRef01List), map[string]any{"id": updateWorkspaceRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		updateWorkspaceRef01DataUp0Up := map[string]any{
			"id": updateWorkspaceRef01Data["id"],
		}

		updateWorkspaceRef01MarkdefUp0Name := "created_at"
		updateWorkspaceRef01MarkdefUp0Value := fmt.Sprintf("Mark01-update_workspace_ref01_%d", setup.now)
		updateWorkspaceRef01DataUp0Up[updateWorkspaceRef01MarkdefUp0Name] = updateWorkspaceRef01MarkdefUp0Value

		updateWorkspaceRef01ResdataUp0Result, err := updateWorkspaceRef01Ent.Update(updateWorkspaceRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		updateWorkspaceRef01ResdataUp0 := core.ToMapAny(entityData(updateWorkspaceRef01ResdataUp0Result))
		if updateWorkspaceRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if updateWorkspaceRef01ResdataUp0["id"] != updateWorkspaceRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if updateWorkspaceRef01ResdataUp0[updateWorkspaceRef01MarkdefUp0Name] != updateWorkspaceRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", updateWorkspaceRef01MarkdefUp0Name, updateWorkspaceRef01ResdataUp0[updateWorkspaceRef01MarkdefUp0Name])
		}

	})
}

func update_workspaceBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "update_workspace", "UpdateWorkspaceTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read update_workspace test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse update_workspace test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"update_workspace01", "update_workspace02", "update_workspace03"},
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
	entidEnvRaw := os.Getenv("OPENROUTER_MODELS_TEST_UPDATE_WORKSPACE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"OPENROUTER_MODELS_TEST_UPDATE_WORKSPACE_ENTID": idmap,
		"OPENROUTER_MODELS_TEST_LIVE":      "FALSE",
		"OPENROUTER_MODELS_TEST_EXPLAIN":   "FALSE",
		"OPENROUTER_MODELS_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["OPENROUTER_MODELS_TEST_UPDATE_WORKSPACE_ENTID"])
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
