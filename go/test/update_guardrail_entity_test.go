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

func TestUpdateGuardrailEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.UpdateGuardrail(nil)
		if ent == nil {
			t.Fatal("expected non-nil UpdateGuardrailEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := update_guardrailBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "update_guardrail." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set OPENROUTER_MODELS_TEST_UPDATE_GUARDRAIL_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		updateGuardrailRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.update_guardrail", setup.data)))
		var updateGuardrailRef01Data map[string]any
		if len(updateGuardrailRef01DataRaw) > 0 {
			updateGuardrailRef01Data = core.ToMapAny(updateGuardrailRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = updateGuardrailRef01Data

		// UPDATE
		updateGuardrailRef01Ent := client.UpdateGuardrail(nil)
		updateGuardrailRef01DataUp0Up := map[string]any{
			"id": updateGuardrailRef01Data["id"],
		}

		updateGuardrailRef01MarkdefUp0Name := "name"
		updateGuardrailRef01MarkdefUp0Value := fmt.Sprintf("Mark01-update_guardrail_ref01_%d", setup.now)
		updateGuardrailRef01DataUp0Up[updateGuardrailRef01MarkdefUp0Name] = updateGuardrailRef01MarkdefUp0Value

		updateGuardrailRef01ResdataUp0Result, err := updateGuardrailRef01Ent.Update(updateGuardrailRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		updateGuardrailRef01ResdataUp0 := core.ToMapAny(entityData(updateGuardrailRef01ResdataUp0Result))
		if updateGuardrailRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if updateGuardrailRef01ResdataUp0["id"] != updateGuardrailRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if updateGuardrailRef01ResdataUp0[updateGuardrailRef01MarkdefUp0Name] != updateGuardrailRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", updateGuardrailRef01MarkdefUp0Name, updateGuardrailRef01ResdataUp0[updateGuardrailRef01MarkdefUp0Name])
		}

	})
}

func update_guardrailBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "update_guardrail", "UpdateGuardrailTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read update_guardrail test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse update_guardrail test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"update_guardrail01", "update_guardrail02", "update_guardrail03"},
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
	entidEnvRaw := os.Getenv("OPENROUTER_MODELS_TEST_UPDATE_GUARDRAIL_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"OPENROUTER_MODELS_TEST_UPDATE_GUARDRAIL_ENTID": idmap,
		"OPENROUTER_MODELS_TEST_LIVE":      "FALSE",
		"OPENROUTER_MODELS_TEST_EXPLAIN":   "FALSE",
		"OPENROUTER_MODELS_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["OPENROUTER_MODELS_TEST_UPDATE_GUARDRAIL_ENTID"])
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
