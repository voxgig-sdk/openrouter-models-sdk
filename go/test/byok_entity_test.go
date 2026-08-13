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

func TestByokEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Byok(nil)
		if ent == nil {
			t.Fatal("expected non-nil ByokEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"byok": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Byok(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Byok(nil).Stream("list", nil, nil) {
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
		setup := byokBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "byok." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set OPENROUTER_MODELS_TEST_BYOK_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		byokRef01Ent := client.Byok(nil)
		byokRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "byok"}, setup.data), "byok_ref01"))

		byokRef01DataResult, err := byokRef01Ent.Create(byokRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		byokRef01Data = core.ToMapAny(entityData(byokRef01DataResult))
		if byokRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if byokRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		byokRef01Match := map[string]any{}

		byokRef01ListResult, err := byokRef01Ent.List(byokRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		byokRef01List, byokRef01ListOk := byokRef01ListResult.([]any)
		if !byokRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", byokRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(byokRef01List), map[string]any{"id": byokRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// LOAD
		byokRef01MatchDt0 := map[string]any{
			"id": byokRef01Data["id"],
		}
		byokRef01DataDt0Loaded, err := byokRef01Ent.Load(byokRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		byokRef01DataDt0LoadResult := core.ToMapAny(entityData(byokRef01DataDt0Loaded))
		if byokRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if byokRef01DataDt0LoadResult["id"] != byokRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		byokRef01MatchRm0 := map[string]any{
			"id": byokRef01Data["id"],
		}
		_, err = byokRef01Ent.Remove(byokRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		byokRef01MatchRt0 := map[string]any{}

		byokRef01ListRt0Result, err := byokRef01Ent.List(byokRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		byokRef01ListRt0, byokRef01ListRt0Ok := byokRef01ListRt0Result.([]any)
		if !byokRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", byokRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(byokRef01ListRt0), map[string]any{"id": byokRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func byokBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "byok", "ByokTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read byok test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse byok test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"byok01", "byok02", "byok03"},
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
	entidEnvRaw := os.Getenv("OPENROUTER_MODELS_TEST_BYOK_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"OPENROUTER_MODELS_TEST_BYOK_ENTID": idmap,
		"OPENROUTER_MODELS_TEST_LIVE":      "FALSE",
		"OPENROUTER_MODELS_TEST_EXPLAIN":   "FALSE",
		"OPENROUTER_MODELS_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["OPENROUTER_MODELS_TEST_BYOK_ENTID"])
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
