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
(0, node_test_1.describe)('UpdateByokKeyEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPENROUTER_MODELS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpenrouterModelsSDK.test();
        const ent = testsdk.UpdateByokKey();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'update_byok_key.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "allowed_models", "req": false, "short": "Optional allowlist of model slugs this credential may be used for.", "type": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]], "index$": 0 }, { "active": true, "name": "allowed_user_ids", "req": false, "short": "Optional allowlist of user IDs that may use this credential.", "type": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]], "index$": 1 }, { "active": true, "name": "disabled", "req": false, "short": "Whether this credential is disabled.", "type": "`$BOOLEAN`", "index$": 2 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "is_fallback", "req": false, "short": "Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried.", "type": "`$BOOLEAN`", "index$": 4 }, { "active": true, "name": "key", "req": false, "short": "A new raw provider API key to rotate the credential in-place.", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "name", "req": false, "short": "Optional human-readable name for the credential.", "type": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "index$": 6 }], "id": { "field": "id", "name": "id" }, "name": "update_byok_key", "op": { "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "http_referer", "orig": "http_referer", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_category", "orig": "x_open_router_category", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_title", "orig": "x_open_router_title", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": "11111111-2222-3333-4444-555555555555", "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "PATCH /byok/{id}", "json": "{\"operationId\":\"updateBYOKKey\",\"parameters\":[{\"description\":\"The app identifier should be your app's URL and is used as the primary identifier for rankings.\\nThis is used to track API usage per application.\\n\",\"in\":\"header\",\"name\":\"HTTP-Referer\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Title\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of app categories (e.g. \\\"cli-agent,cloud-agent\\\"). Used for marketplace rankings.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Categories\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The BYOK credential ID (UUID).\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"description\":\"The BYOK credential ID (UUID).\",\"example\":\"11111111-2222-3333-4444-555555555555\",\"format\":\"uuid\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":{\"disabled\":false,\"name\":\"Updated OpenAI Key\"},\"schema\":{\"example\":{\"disabled\":false,\"name\":\"Updated OpenAI Key\"},\"properties\":{\"allowed_models\":{\"description\":\"Optional allowlist of model slugs this credential may be used for. `null` means no restriction.\",\"example\":null,\"items\":{\"type\":\"string\"},\"maxItems\":100,\"type\":[\"array\",\"null\"]},\"allowed_user_ids\":{\"description\":\"Optional allowlist of user IDs that may use this credential. `null` means no restriction.\",\"example\":null,\"items\":{\"type\":\"string\"},\"maxItems\":100,\"type\":[\"array\",\"null\"]},\"disabled\":{\"description\":\"Whether this credential is disabled.\",\"example\":false,\"type\":\"boolean\"},\"is_fallback\":{\"description\":\"Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried.\",\"example\":false,\"type\":\"boolean\"},\"key\":{\"description\":\"A new raw provider API key to rotate the credential in-place. The previous key material is overwritten and the masked label is regenerated. Encrypted at rest and never returned in API responses.\",\"example\":\"sk-proj-newkey456...\",\"minLength\":1,\"type\":\"string\"},\"name\":{\"description\":\"Optional human-readable name for the credential.\",\"example\":\"Updated OpenAI Key\",\"maxLength\":255,\"type\":[\"string\",\"null\"]}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":{\"allowed_api_key_hashes\":null,\"allowed_models\":null,\"allowed_user_ids\":null,\"created_at\":\"2025-08-24T10:30:00Z\",\"disabled\":false,\"id\":\"11111111-2222-3333-4444-555555555555\",\"is_fallback\":false,\"label\":\"sk-...AbCd\",\"name\":\"Updated OpenAI Key\",\"provider\":\"openai\",\"sort_order\":0,\"workspace_id\":\"550e8400-e29b-41d4-a716-446655440000\"}},\"schema\":{\"example\":{\"data\":{\"allowed_api_key_hashes\":null,\"allowed_models\":null,\"allowed_user_ids\":null,\"created_at\":\"2025-08-24T10:30:00Z\",\"disabled\":false,\"id\":\"11111111-2222-3333-4444-555555555555\",\"is_fallback\":false,\"label\":\"sk-...AbCd\",\"name\":\"Updated OpenAI Key\",\"provider\":\"openai\",\"sort_order\":0,\"workspace_id\":\"550e8400-e29b-41d4-a716-446655440000\"}},\"properties\":{\"data\":{\"allOf\":[{\"example\":{\"allowed_api_key_hashes\":null,\"allowed_models\":null,\"allowed_user_ids\":null,\"created_at\":\"2025-08-24T10:30:00Z\",\"disabled\":false,\"id\":\"11111111-2222-3333-4444-555555555555\",\"is_fallback\":false,\"label\":\"sk-...AbCd\",\"name\":\"Production OpenAI Key\",\"provider\":\"openai\",\"sort_order\":0,\"workspace_id\":\"550e8400-e29b-41d4-a716-446655440000\"},\"properties\":{\"allowed_api_key_hashes\":{\"description\":\"Optional allowlist of OpenRouter API key hashes (`api_keys.hash`) that may use this credential. `null` means no restriction.\",\"example\":[\"f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943\"],\"items\":{\"type\":\"string\"},\"maxItems\":100,\"type\":[\"array\",\"null\"]},\"allowed_models\":{\"description\":\"Optional allowlist of model slugs this credential may be used for. `null` means no restriction.\",\"example\":null,\"items\":{\"type\":\"string\"},\"maxItems\":100,\"type\":[\"array\",\"null\"]},\"allowed_user_ids\":{\"description\":\"Optional allowlist of user IDs that may use this credential. `null` means no restriction.\",\"example\":null,\"items\":{\"type\":\"string\"},\"maxItems\":100,\"type\":[\"array\",\"null\"]},\"created_at\":{\"description\":\"ISO timestamp of when the credential was created.\",\"example\":\"2025-08-24T10:30:00Z\",\"type\":\"string\"},\"disabled\":{\"description\":\"Whether this credential is currently disabled.\",\"example\":false,\"type\":\"boolean\"},\"id\":{\"description\":\"Stable public identifier for this BYOK credential.\",\"example\":\"11111111-2222-3333-4444-555555555555\",\"format\":\"uuid\",\"type\":\"string\"},\"is_fallback\":{\"description\":\"Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried.\",\"example\":false,\"type\":\"boolean\"},\"label\":{\"description\":\"Short masked snippet of the key (e.g. the first/last few characters) used to identify it in the UI.\",\"example\":\"sk-...AbCd\",\"type\":\"string\"},\"name\":{\"description\":\"Optional human-readable name for the credential.\",\"example\":\"Production OpenAI Key\",\"type\":[\"string\",\"null\"]},\"provider\":{\"description\":\"The upstream provider this credential authenticates against, as a lowercase slug (e.g. `openai`, `anthropic`, `amazon-bedrock`).\",\"enum\":[\"ai21\",\"aion-labs\",\"akashml\",\"alibaba\",\"amazon-bedrock\",\"amazon-nova\",\"ambient\",\"anthropic\",\"arcee-ai\",\"atlas-cloud\",\"avian\",\"azure\",\"baidu\",\"baseten\",\"black-forest-labs\",\"byteplus\",\"cerebras\",\"chutes\",\"cirrascale\",\"clarifai\",\"cloudflare\",\"cohere\",\"crusoe\",\"darkbloom\",\"decart\",\"deepgram\",\"deepinfra\",\"deepseek\",\"dekallm\",\"digitalocean\",\"featherless\",\"fireworks\",\"fish-audio\",\"friendli\",\"gmicloud\",\"google-ai-studio\",\"google-vertex\",\"groq\",\"heygen\",\"inception\",\"inceptron\",\"inferact-vllm\",\"inference-net\",\"infermatic\",\"inflection\",\"io-net\",\"ionstream\",\"krea\",\"liquid\",\"mancer\",\"mara\",\"meta\",\"minimax\",\"mistral\",\"modelrun\",\"modular\",\"moonshotai\",\"morph\",\"ncompass\",\"nebius\",\"nex-agi\",\"nextbit\",\"novita\",\"nvidia\",\"open-inference\",\"openai\",\"parasail\",\"perceptron\",\"perplexity\",\"phala\",\"poolside\",\"quiver\",\"recraft\",\"reka\",\"relace\",\"sail-research\",\"sakana\",\"sambanova\",\"seed\",\"siliconflow\",\"sourceful\",\"stepfun\",\"streamlake\",\"switchpoint\",\"tencent\",\"tenstorrent\",\"together\",\"upstage\",\"venice\",\"wafer\",\"wandb\",\"xai\",\"xiaomi\",\"z-ai\"],\"example\":\"openai\",\"type\":\"string\"},\"sort_order\":{\"description\":\"Position within the provider — credentials are tried in ascending sort order.\",\"example\":0,\"type\":\"integer\"},\"workspace_id\":{\"description\":\"ID of the workspace this credential belongs to.\",\"example\":\"550e8400-e29b-41d4-a716-446655440000\",\"format\":\"uuid\",\"type\":\"string\"}},\"required\":[\"id\",\"provider\",\"workspace_id\",\"label\",\"disabled\",\"is_fallback\",\"allowed_models\",\"allowed_api_key_hashes\",\"allowed_user_ids\",\"sort_order\",\"created_at\"],\"type\":\"object\"},{\"description\":\"The updated BYOK credential.\"}]}},\"required\":[\"data\"],\"type\":\"object\"}}},\"description\":\"BYOK credential updated successfully\"},\"400\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"schema\":{\"description\":\"Bad Request - Invalid request parameters or malformed input\",\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"properties\":{\"error\":{\"description\":\"Error data for BadRequestResponse\",\"example\":{\"code\":400,\"message\":\"Invalid request parameters\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Bad Request - Invalid request parameters or malformed input\"},\"401\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"schema\":{\"description\":\"Unauthorized - Authentication required or invalid credentials\",\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"properties\":{\"error\":{\"description\":\"Error data for UnauthorizedResponse\",\"example\":{\"code\":401,\"message\":\"Missing Authentication header\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Unauthorized - Authentication required or invalid credentials\"},\"404\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":404,\"message\":\"Resource not found\"}},\"schema\":{\"description\":\"Not Found - Resource does not exist\",\"example\":{\"error\":{\"code\":404,\"message\":\"Resource not found\"}},\"properties\":{\"error\":{\"description\":\"Error data for NotFoundResponse\",\"example\":{\"code\":404,\"message\":\"Resource not found\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Not Found - Resource does not exist\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"schema\":{\"description\":\"Internal Server Error - Unexpected server error\",\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"properties\":{\"error\":{\"description\":\"Error data for InternalServerResponse\",\"example\":{\"code\":500,\"message\":\"Internal Server Error\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal Server Error - Unexpected server error\"}},\"security\":[{\"apiKey\":[]}],\"securitySchemes\":{\"apiKey\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearer\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PATCH", "orig": "/byok/{id}", "segments": [{ "lit": "byok" }, { "var": "id" }], "select": { "exist": ["http_referer", "id", "x_open_router_category", "x_open_router_title"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "update_byok_key", "name__orig": "update_byok_key", "Name": "UpdateByokKey", "name_": "update_byok_key", "name-": "update-byok-key", "NAME": "UPDATE_BYOK_KEY", "index$": 73 }, { "active": true, "entity": "update_byok_key", "key$": "BasicUpdateByokKeyFlow", "kind": "basic", "name": "BasicUpdateByokKeyFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "update_byok_key_ref01", "srcdatavar": "update_byok_key_ref01_data", "suffix": "_up0", "textfield": "key" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-update_byok_key_ref01" } }], "valid": [], "index$": 0 }] }, 'UpdateByokKey');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let update_byok_key_ref01_data = Object.values(setup.data.existing.update_byok_key)[0];
        // UPDATE
        const update_byok_key_ref01_ent = client.UpdateByokKey();
        const update_byok_key_ref01_data_up0 = {};
        update_byok_key_ref01_data_up0.id = update_byok_key_ref01_data.id;
        const update_byok_key_ref01_markdef_up0 = { name: 'key', value: 'Mark01-update_byok_key_ref01_' + setup.now };
        update_byok_key_ref01_data_up0[update_byok_key_ref01_markdef_up0.name] = update_byok_key_ref01_markdef_up0.value;
        const update_byok_key_ref01_resdata_up0 = (await update_byok_key_ref01_ent.update(update_byok_key_ref01_data_up0)).data();
        (0, node_assert_1.default)(update_byok_key_ref01_resdata_up0.id === update_byok_key_ref01_data_up0.id);
        (0, node_assert_1.default)(update_byok_key_ref01_resdata_up0[update_byok_key_ref01_markdef_up0.name] === update_byok_key_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/update_byok_key/UpdateByokKeyTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpenrouterModelsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['update_byok_key01', 'update_byok_key02', 'update_byok_key03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPENROUTER_MODELS_TEST_UPDATE_BYOK_KEY_ENTID': idmap,
        'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
        'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
        'OPENROUTER_MODELS_APIKEY': '',
    });
    idmap = env['OPENROUTER_MODELS_TEST_UPDATE_BYOK_KEY_ENTID'];
    const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPENROUTER_MODELS_TEST_UPDATE_BYOK_KEY_ENTID'];
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
//# sourceMappingURL=UpdateByokKeyEntity.test.js.map