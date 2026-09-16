"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('UpsertWorkspaceBudgetEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPENROUTER_MODELS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpenrouterModelsSDK.test();
        const ent = testsdk.UpsertWorkspaceBudget();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'upsert_workspace_budget.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "format": "double", "name": "limit_usd", "req": true, "short": "Spending limit in USD.", "type": "`$NUMBER`", "index$": 1 }], "id": { "field": "id", "name": "id" }, "name": "upsert_workspace_budget", "op": { "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "http_referer", "orig": "http_referer", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_category", "orig": "x_open_router_category", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_title", "orig": "x_open_router_title", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": "monthly", "kind": "param", "name": "id", "orig": "interval", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "production", "kind": "param", "name": "workspace_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "PUT /workspaces/{id}/budgets/{interval}", "json": "{\"operationId\":\"upsertWorkspaceBudget\",\"parameters\":[{\"description\":\"The app identifier should be your app's URL and is used as the primary identifier for rankings.\\nThis is used to track API usage per application.\\n\",\"in\":\"header\",\"name\":\"HTTP-Referer\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Title\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of app categories (e.g. \\\"cli-agent,cloud-agent\\\"). Used for marketplace rankings.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Categories\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The workspace ID (UUID) or slug\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"description\":\"The workspace ID (UUID) or slug\",\"example\":\"production\",\"minLength\":1,\"type\":\"string\"}},{\"description\":\"Budget reset interval. Use \\\"lifetime\\\" for a one-time budget that never resets.\",\"example\":\"monthly\",\"in\":\"path\",\"name\":\"interval\",\"required\":true,\"schema\":{\"description\":\"Budget reset interval. Use \\\"lifetime\\\" for a one-time budget that never resets.\",\"enum\":[\"daily\",\"weekly\",\"monthly\",\"lifetime\"],\"example\":\"monthly\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":{\"limit_usd\":100},\"schema\":{\"example\":{\"limit_usd\":100},\"properties\":{\"limit_usd\":{\"description\":\"Spending limit in USD. Must be greater than 0.\",\"example\":100,\"format\":\"double\",\"type\":\"number\"}},\"required\":[\"limit_usd\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":{\"created_at\":\"2025-08-24T10:30:00Z\",\"id\":\"770e8400-e29b-41d4-a716-446655440000\",\"limit_usd\":100,\"reset_interval\":\"monthly\",\"updated_at\":\"2025-08-24T15:45:00Z\",\"workspace_id\":\"550e8400-e29b-41d4-a716-446655440000\"}},\"schema\":{\"example\":{\"data\":{\"created_at\":\"2025-08-24T10:30:00Z\",\"id\":\"770e8400-e29b-41d4-a716-446655440000\",\"limit_usd\":100,\"reset_interval\":\"monthly\",\"updated_at\":\"2025-08-24T15:45:00Z\",\"workspace_id\":\"550e8400-e29b-41d4-a716-446655440000\"}},\"properties\":{\"data\":{\"allOf\":[{\"example\":{\"created_at\":\"2025-08-24T10:30:00Z\",\"id\":\"770e8400-e29b-41d4-a716-446655440000\",\"limit_usd\":100,\"reset_interval\":\"monthly\",\"updated_at\":\"2025-08-24T15:45:00Z\",\"workspace_id\":\"550e8400-e29b-41d4-a716-446655440000\"},\"properties\":{\"created_at\":{\"description\":\"ISO 8601 timestamp of when the budget was created\",\"example\":\"2025-08-24T10:30:00Z\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the budget\",\"example\":\"770e8400-e29b-41d4-a716-446655440000\",\"format\":\"uuid\",\"type\":\"string\"},\"limit_usd\":{\"description\":\"Spending limit in USD for this interval\",\"example\":100,\"format\":\"double\",\"type\":\"number\"},\"reset_interval\":{\"description\":\"Interval at which spend resets. Null means a lifetime (one-time) budget.\",\"enum\":[\"daily\",\"weekly\",\"monthly\",null],\"example\":\"monthly\",\"type\":[\"string\",\"null\"]},\"updated_at\":{\"description\":\"ISO 8601 timestamp of when the budget was last updated\",\"example\":\"2025-08-24T15:45:00Z\",\"type\":\"string\"},\"workspace_id\":{\"description\":\"ID of the workspace the budget belongs to\",\"example\":\"550e8400-e29b-41d4-a716-446655440000\",\"format\":\"uuid\",\"type\":\"string\"}},\"required\":[\"id\",\"workspace_id\",\"limit_usd\",\"reset_interval\",\"created_at\",\"updated_at\"],\"type\":\"object\"},{\"description\":\"The created or updated budget\"}]}},\"required\":[\"data\"],\"type\":\"object\"}}},\"description\":\"Budget created or updated successfully\"},\"400\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"schema\":{\"description\":\"Bad Request - Invalid request parameters or malformed input\",\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"properties\":{\"error\":{\"description\":\"Error data for BadRequestResponse\",\"example\":{\"code\":400,\"message\":\"Invalid request parameters\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Bad Request - Invalid request parameters or malformed input\"},\"401\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"schema\":{\"description\":\"Unauthorized - Authentication required or invalid credentials\",\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"properties\":{\"error\":{\"description\":\"Error data for UnauthorizedResponse\",\"example\":{\"code\":401,\"message\":\"Missing Authentication header\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Unauthorized - Authentication required or invalid credentials\"},\"404\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":404,\"message\":\"Resource not found\"}},\"schema\":{\"description\":\"Not Found - Resource does not exist\",\"example\":{\"error\":{\"code\":404,\"message\":\"Resource not found\"}},\"properties\":{\"error\":{\"description\":\"Error data for NotFoundResponse\",\"example\":{\"code\":404,\"message\":\"Resource not found\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Not Found - Resource does not exist\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"schema\":{\"description\":\"Internal Server Error - Unexpected server error\",\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"properties\":{\"error\":{\"description\":\"Error data for InternalServerResponse\",\"example\":{\"code\":500,\"message\":\"Internal Server Error\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal Server Error - Unexpected server error\"}},\"security\":[{\"apiKey\":[]}],\"securitySchemes\":{\"apiKey\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearer\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/workspaces/{id}/budgets/{interval}", "rename": { "param": { "id": "workspace_id", "interval": "id" } }, "segments": [{ "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "budgets" }, { "var": "id" }], "select": { "exist": ["http_referer", "id", "workspace_id", "x_open_router_category", "x_open_router_title"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["workspace"]] }, "key$": "upsert_workspace_budget", "name__orig": "upsert_workspace_budget", "Name": "UpsertWorkspaceBudget", "name_": "upsert_workspace_budget", "name-": "upsert-workspace-budget", "NAME": "UPSERT_WORKSPACE_BUDGET", "index$": 77 }, { "active": true, "entity": "upsert_workspace_budget", "key$": "BasicUpsertWorkspaceBudgetFlow", "kind": "basic", "name": "BasicUpsertWorkspaceBudgetFlow", "param": {}, "step": [{ "active": true, "data": { "workspace_id": "workspace01" }, "input": { "ref": "upsert_workspace_budget_ref01", "srcdatavar": "upsert_workspace_budget_ref01_data", "suffix": "_up0" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-upsert_workspace_budget_ref01" } }], "valid": [], "index$": 0 }] }, 'UpsertWorkspaceBudget');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let upsert_workspace_budget_ref01_data = Object.values(setup.data.existing.upsert_workspace_budget)[0];
        // UPDATE
        const upsert_workspace_budget_ref01_ent = client.UpsertWorkspaceBudget();
        const upsert_workspace_budget_ref01_data_up0 = {};
        upsert_workspace_budget_ref01_data_up0.id = upsert_workspace_budget_ref01_data.id;
        upsert_workspace_budget_ref01_data_up0['workspace_id'] = setup.idmap['workspace_id'];
        const upsert_workspace_budget_ref01_resdata_up0 = (await upsert_workspace_budget_ref01_ent.update(upsert_workspace_budget_ref01_data_up0)).data();
        (0, node_assert_1.default)(upsert_workspace_budget_ref01_resdata_up0.id === upsert_workspace_budget_ref01_data_up0.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/upsert_workspace_budget/UpsertWorkspaceBudgetTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpenrouterModelsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['upsert_workspace_budget01', 'upsert_workspace_budget02', 'upsert_workspace_budget03', 'workspace01', 'workspace02', 'workspace03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPENROUTER_MODELS_TEST_UPSERT_WORKSPACE_BUDGET_ENTID': idmap,
        'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
        'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
        'OPENROUTER_MODELS_APIKEY': '',
    });
    idmap = env['OPENROUTER_MODELS_TEST_UPSERT_WORKSPACE_BUDGET_ENTID'];
    const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPENROUTER_MODELS_TEST_UPSERT_WORKSPACE_BUDGET_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.OpenrouterModelsSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.OPENROUTER_MODELS_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.OPENROUTER_MODELS_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=UpsertWorkspaceBudgetEntity.test.js.map