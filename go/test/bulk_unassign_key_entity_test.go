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

func TestBulkUnassignKeyEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.BulkUnassignKey(nil)
		if ent == nil {
			t.Fatal("expected non-nil BulkUnassignKeyEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := bulk_unassign_keyBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "bulk_unassign_key." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set OPENROUTERMODELS_TEST_BULK_UNASSIGN_KEY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		bulkUnassignKeyRef01Ent := client.BulkUnassignKey(nil)
		bulkUnassignKeyRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "bulk_unassign_key"}, setup.data), "bulk_unassign_key_ref01"))
		bulkUnassignKeyRef01Data["guardrail_id"] = setup.idmap["guardrail01"]

		bulkUnassignKeyRef01DataResult, err := bulkUnassignKeyRef01Ent.Create(bulkUnassignKeyRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		bulkUnassignKeyRef01Data = core.ToMapAny(bulkUnassignKeyRef01DataResult)
		if bulkUnassignKeyRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func bulk_unassign_keyBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "bulk_unassign_key", "BulkUnassignKeyTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read bulk_unassign_key test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse bulk_unassign_key test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"bulk_unassign_key01", "bulk_unassign_key02", "bulk_unassign_key03", "guardrail01", "guardrail02", "guardrail03"},
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
	entidEnvRaw := os.Getenv("OPENROUTERMODELS_TEST_BULK_UNASSIGN_KEY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"OPENROUTERMODELS_TEST_BULK_UNASSIGN_KEY_ENTID": idmap,
		"OPENROUTERMODELS_TEST_LIVE":      "FALSE",
		"OPENROUTERMODELS_TEST_EXPLAIN":   "FALSE",
		"OPENROUTERMODELS_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["OPENROUTERMODELS_TEST_BULK_UNASSIGN_KEY_ENTID"])
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
