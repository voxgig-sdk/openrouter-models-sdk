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

func TestUpdateObservabilityDestinationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.UpdateObservabilityDestination(nil)
		if ent == nil {
			t.Fatal("expected non-nil UpdateObservabilityDestinationEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := update_observability_destinationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "update_observability_destination." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set OPENROUTERMODELS_TEST_UPDATE_OBSERVABILITY_DESTINATION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		updateObservabilityDestinationRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.update_observability_destination", setup.data)))
		var updateObservabilityDestinationRef01Data map[string]any
		if len(updateObservabilityDestinationRef01DataRaw) > 0 {
			updateObservabilityDestinationRef01Data = core.ToMapAny(updateObservabilityDestinationRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = updateObservabilityDestinationRef01Data

		// UPDATE
		updateObservabilityDestinationRef01Ent := client.UpdateObservabilityDestination(nil)
		updateObservabilityDestinationRef01DataUp0Up := map[string]any{
		}

		updateObservabilityDestinationRef01MarkdefUp0Name := "name"
		updateObservabilityDestinationRef01MarkdefUp0Value := fmt.Sprintf("Mark01-update_observability_destination_ref01_%d", setup.now)
		updateObservabilityDestinationRef01DataUp0Up[updateObservabilityDestinationRef01MarkdefUp0Name] = updateObservabilityDestinationRef01MarkdefUp0Value

		updateObservabilityDestinationRef01ResdataUp0Result, err := updateObservabilityDestinationRef01Ent.Update(updateObservabilityDestinationRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		updateObservabilityDestinationRef01ResdataUp0 := core.ToMapAny(updateObservabilityDestinationRef01ResdataUp0Result)
		if updateObservabilityDestinationRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if updateObservabilityDestinationRef01ResdataUp0[updateObservabilityDestinationRef01MarkdefUp0Name] != updateObservabilityDestinationRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", updateObservabilityDestinationRef01MarkdefUp0Name, updateObservabilityDestinationRef01ResdataUp0[updateObservabilityDestinationRef01MarkdefUp0Name])
		}

	})
}

func update_observability_destinationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "update_observability_destination", "UpdateObservabilityDestinationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read update_observability_destination test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse update_observability_destination test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"update_observability_destination01", "update_observability_destination02", "update_observability_destination03"},
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
	entidEnvRaw := os.Getenv("OPENROUTERMODELS_TEST_UPDATE_OBSERVABILITY_DESTINATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"OPENROUTERMODELS_TEST_UPDATE_OBSERVABILITY_DESTINATION_ENTID": idmap,
		"OPENROUTERMODELS_TEST_LIVE":      "FALSE",
		"OPENROUTERMODELS_TEST_EXPLAIN":   "FALSE",
		"OPENROUTERMODELS_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["OPENROUTERMODELS_TEST_UPDATE_OBSERVABILITY_DESTINATION_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["OPENROUTERMODELS_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["OPENROUTERMODELS_APIKEY"],
			},
			extra,
		})
		client = sdk.NewOpenrouterModelsSDK(core.ToMapAny(mergedOpts))
	}

	live := env["OPENROUTERMODELS_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["OPENROUTERMODELS_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
