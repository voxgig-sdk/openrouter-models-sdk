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

func TestCreateByokKeyEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CreateByokKey(nil)
		if ent == nil {
			t.Fatal("expected non-nil CreateByokKeyEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := create_byok_keyBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "create_byok_key." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set OPENROUTER_MODELS_TEST_CREATE_BYOK_KEY_ENTID JSON to run live")
			return
		}
		// Bootstrap entity data from existing test data (no create step in flow).
		createByokKeyRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.create_byok_key", setup.data)))
		var createByokKeyRef01Data map[string]any
		if len(createByokKeyRef01DataRaw) > 0 {
			createByokKeyRef01Data = core.ToMapAny(createByokKeyRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = createByokKeyRef01Data

	})
}

func create_byok_keyBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "create_byok_key", "CreateByokKeyTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read create_byok_key test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse create_byok_key test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"create_byok_key01", "create_byok_key02", "create_byok_key03"},
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
	entidEnvRaw := os.Getenv("OPENROUTER_MODELS_TEST_CREATE_BYOK_KEY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"OPENROUTER_MODELS_TEST_CREATE_BYOK_KEY_ENTID": idmap,
		"OPENROUTER_MODELS_TEST_LIVE":      "FALSE",
		"OPENROUTER_MODELS_TEST_EXPLAIN":   "FALSE",
		"OPENROUTER_MODELS_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["OPENROUTER_MODELS_TEST_CREATE_BYOK_KEY_ENTID"])
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
