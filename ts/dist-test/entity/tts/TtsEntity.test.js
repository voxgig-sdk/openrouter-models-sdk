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
(0, node_test_1.describe)('TtsEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPENROUTER_MODELS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpenrouterModelsSDK.test();
        const ent = testsdk.Tts();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'tts.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "input", "req": true, "short": "Text to synthesize", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "model", "req": true, "short": "TTS model identifier", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "provider", "req": false, "short": "Provider-specific passthrough configuration", "type": "`$OBJECT`", "index$": 2 }, { "active": true, "name": "response_format", "req": false, "short": "Audio output format", "type": "`$STRING`", "index$": 3 }, { "active": true, "format": "double", "name": "speed", "req": false, "short": "Playback speed multiplier.", "type": "`$NUMBER`", "index$": 4 }, { "active": true, "name": "voice", "req": true, "short": "Voice identifier (provider-specific).", "type": "`$STRING`", "index$": 5 }], "name": "tts", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "http_referer", "orig": "http_referer", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_category", "orig": "x_open_router_category", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_title", "orig": "x_open_router_title", "reqd": false, "type": "`$STRING`" }] }, "contract": { "id": "POST /audio/speech", "json": "{\"operationId\":\"createAudioSpeech\",\"parameters\":[{\"description\":\"The app identifier should be your app's URL and is used as the primary identifier for rankings.\\nThis is used to track API usage per application.\\n\",\"in\":\"header\",\"name\":\"HTTP-Referer\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Title\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of app categories (e.g. \\\"cli-agent,cloud-agent\\\"). Used for marketplace rankings.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Categories\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":{\"input\":\"Hello world\",\"model\":\"mistralai/voxtral-mini-tts-2603\",\"response_format\":\"pcm\",\"speed\":1,\"voice\":\"en_paul_neutral\"},\"schema\":{\"description\":\"Text-to-speech request input\",\"example\":{\"input\":\"Hello world\",\"model\":\"mistralai/voxtral-mini-tts-2603\",\"response_format\":\"pcm\",\"speed\":1,\"voice\":\"en_paul_neutral\"},\"properties\":{\"input\":{\"description\":\"Text to synthesize\",\"example\":\"Hello world\",\"type\":\"string\"},\"model\":{\"description\":\"TTS model identifier\",\"example\":\"mistralai/voxtral-mini-tts-2603\",\"type\":\"string\"},\"provider\":{\"description\":\"Provider-specific passthrough configuration\",\"properties\":{\"options\":{\"description\":\"Provider-specific options keyed by provider slug. Only options for the matched provider are forwarded; the rest are ignored. Unrecognized keys are silently dropped.\",\"example\":{\"openai\":{\"max_tokens\":1000}},\"properties\":{\"01ai\":{\"additionalProperties\":{},\"type\":\"object\"},\"ai21\":{\"additionalProperties\":{},\"type\":\"object\"},\"aion-labs\":{\"additionalProperties\":{},\"type\":\"object\"},\"akashml\":{\"additionalProperties\":{},\"type\":\"object\"},\"alibaba\":{\"additionalProperties\":{},\"type\":\"object\"},\"amazon-bedrock\":{\"additionalProperties\":{},\"type\":\"object\"},\"amazon-nova\":{\"additionalProperties\":{},\"type\":\"object\"},\"ambient\":{\"additionalProperties\":{},\"type\":\"object\"},\"anthropic\":{\"additionalProperties\":{},\"type\":\"object\"},\"anyscale\":{\"additionalProperties\":{},\"type\":\"object\"},\"arcee-ai\":{\"additionalProperties\":{},\"type\":\"object\"},\"atlas-cloud\":{\"additionalProperties\":{},\"type\":\"object\"},\"atoma\":{\"additionalProperties\":{},\"type\":\"object\"},\"avian\":{\"additionalProperties\":{},\"type\":\"object\"},\"azure\":{\"additionalProperties\":{},\"type\":\"object\"},\"baidu\":{\"additionalProperties\":{},\"type\":\"object\"},\"baseten\":{\"additionalProperties\":{},\"type\":\"object\"},\"black-forest-labs\":{\"additionalProperties\":{},\"type\":\"object\"},\"byteplus\":{\"additionalProperties\":{},\"type\":\"object\"},\"centml\":{\"additionalProperties\":{},\"type\":\"object\"},\"cerebras\":{\"additionalProperties\":{},\"type\":\"object\"},\"chutes\":{\"additionalProperties\":{},\"type\":\"object\"},\"cirrascale\":{\"additionalProperties\":{},\"type\":\"object\"},\"clarifai\":{\"additionalProperties\":{},\"type\":\"object\"},\"cloudflare\":{\"additionalProperties\":{},\"type\":\"object\"},\"cohere\":{\"additionalProperties\":{},\"type\":\"object\"},\"crofai\":{\"additionalProperties\":{},\"type\":\"object\"},\"crucible\":{\"additionalProperties\":{},\"type\":\"object\"},\"crusoe\":{\"additionalProperties\":{},\"type\":\"object\"},\"darkbloom\":{\"additionalProperties\":{},\"type\":\"object\"},\"decart\":{\"additionalProperties\":{},\"type\":\"object\"},\"deepgram\":{\"additionalProperties\":{},\"type\":\"object\"},\"deepinfra\":{\"additionalProperties\":{},\"type\":\"object\"},\"deepseek\":{\"additionalProperties\":{},\"type\":\"object\"},\"dekallm\":{\"additionalProperties\":{},\"type\":\"object\"},\"digitalocean\":{\"additionalProperties\":{},\"type\":\"object\"},\"enfer\":{\"additionalProperties\":{},\"type\":\"object\"},\"fake-provider\":{\"additionalProperties\":{},\"type\":\"object\"},\"featherless\":{\"additionalProperties\":{},\"type\":\"object\"},\"fireworks\":{\"additionalProperties\":{},\"type\":\"object\"},\"fish-audio\":{\"additionalProperties\":{},\"type\":\"object\"},\"friendli\":{\"additionalProperties\":{},\"type\":\"object\"},\"gmicloud\":{\"additionalProperties\":{},\"type\":\"object\"},\"google-ai-studio\":{\"additionalProperties\":{},\"type\":\"object\"},\"google-vertex\":{\"additionalProperties\":{},\"type\":\"object\"},\"gopomelo\":{\"additionalProperties\":{},\"type\":\"object\"},\"groq\":{\"additionalProperties\":{},\"type\":\"object\"},\"heygen\":{\"additionalProperties\":{},\"type\":\"object\"},\"huggingface\":{\"additionalProperties\":{},\"type\":\"object\"},\"hyperbolic\":{\"additionalProperties\":{},\"type\":\"object\"},\"hyperbolic-quantized\":{\"additionalProperties\":{},\"type\":\"object\"},\"inception\":{\"additionalProperties\":{},\"type\":\"object\"},\"inceptron\":{\"additionalProperties\":{},\"type\":\"object\"},\"inferact-vllm\":{\"additionalProperties\":{},\"type\":\"object\"},\"inference-net\":{\"additionalProperties\":{},\"type\":\"object\"},\"infermatic\":{\"additionalProperties\":{},\"type\":\"object\"},\"inflection\":{\"additionalProperties\":{},\"type\":\"object\"},\"inocloud\":{\"additionalProperties\":{},\"type\":\"object\"},\"io-net\":{\"additionalProperties\":{},\"type\":\"object\"},\"ionstream\":{\"additionalProperties\":{},\"type\":\"object\"},\"klusterai\":{\"additionalProperties\":{},\"type\":\"object\"},\"krea\":{\"additionalProperties\":{},\"type\":\"object\"},\"lambda\":{\"additionalProperties\":{},\"type\":\"object\"},\"lepton\":{\"additionalProperties\":{},\"type\":\"object\"},\"liquid\":{\"additionalProperties\":{},\"type\":\"object\"},\"lynn\":{\"additionalProperties\":{},\"type\":\"object\"},\"lynn-private\":{\"additionalProperties\":{},\"type\":\"object\"},\"mancer\":{\"additionalProperties\":{},\"type\":\"object\"},\"mancer-old\":{\"additionalProperties\":{},\"type\":\"object\"},\"mara\":{\"additionalProperties\":{},\"type\":\"object\"},\"meta\":{\"additionalProperties\":{},\"type\":\"object\"},\"minimax\":{\"additionalProperties\":{},\"type\":\"object\"},\"mistral\":{\"additionalProperties\":{},\"type\":\"object\"},\"modal\":{\"additionalProperties\":{},\"type\":\"object\"},\"modelrun\":{\"additionalProperties\":{},\"type\":\"object\"},\"modular\":{\"additionalProperties\":{},\"type\":\"object\"},\"moonshotai\":{\"additionalProperties\":{},\"type\":\"object\"},\"morph\":{\"additionalProperties\":{},\"type\":\"object\"},\"ncompass\":{\"additionalProperties\":{},\"type\":\"object\"},\"nebius\":{\"additionalProperties\":{},\"type\":\"object\"},\"nex-agi\":{\"additionalProperties\":{},\"type\":\"object\"},\"nextbit\":{\"additionalProperties\":{},\"type\":\"object\"},\"nineteen\":{\"additionalProperties\":{},\"type\":\"object\"},\"novita\":{\"additionalProperties\":{},\"type\":\"object\"},\"nvidia\":{\"additionalProperties\":{},\"type\":\"object\"},\"octoai\":{\"additionalProperties\":{},\"type\":\"object\"},\"open-inference\":{\"additionalProperties\":{},\"type\":\"object\"},\"openai\":{\"additionalProperties\":{},\"type\":\"object\"},\"parasail\":{\"additionalProperties\":{},\"type\":\"object\"},\"perceptron\":{\"additionalProperties\":{},\"type\":\"object\"},\"perplexity\":{\"additionalProperties\":{},\"type\":\"object\"},\"phala\":{\"additionalProperties\":{},\"type\":\"object\"},\"poolside\":{\"additionalProperties\":{},\"type\":\"object\"},\"quiver\":{\"additionalProperties\":{},\"type\":\"object\"},\"recraft\":{\"additionalProperties\":{},\"type\":\"object\"},\"recursal\":{\"additionalProperties\":{},\"type\":\"object\"},\"reflection\":{\"additionalProperties\":{},\"type\":\"object\"},\"reka\":{\"additionalProperties\":{},\"type\":\"object\"},\"relace\":{\"additionalProperties\":{},\"type\":\"object\"},\"replicate\":{\"additionalProperties\":{},\"type\":\"object\"},\"sail-research\":{\"additionalProperties\":{},\"type\":\"object\"},\"sakana\":{\"additionalProperties\":{},\"type\":\"object\"},\"sambanova\":{\"additionalProperties\":{},\"type\":\"object\"},\"sambanova-cloaked\":{\"additionalProperties\":{},\"type\":\"object\"},\"seed\":{\"additionalProperties\":{},\"type\":\"object\"},\"sf-compute\":{\"additionalProperties\":{},\"type\":\"object\"},\"siliconflow\":{\"additionalProperties\":{},\"type\":\"object\"},\"sourceful\":{\"additionalProperties\":{},\"type\":\"object\"},\"stealth\":{\"additionalProperties\":{},\"type\":\"object\"},\"stepfun\":{\"additionalProperties\":{},\"type\":\"object\"},\"streamlake\":{\"additionalProperties\":{},\"type\":\"object\"},\"switchpoint\":{\"additionalProperties\":{},\"type\":\"object\"},\"targon\":{\"additionalProperties\":{},\"type\":\"object\"},\"tencent\":{\"additionalProperties\":{},\"type\":\"object\"},\"tenstorrent\":{\"additionalProperties\":{},\"type\":\"object\"},\"together\":{\"additionalProperties\":{},\"type\":\"object\"},\"together-lite\":{\"additionalProperties\":{},\"type\":\"object\"},\"ubicloud\":{\"additionalProperties\":{},\"type\":\"object\"},\"upstage\":{\"additionalProperties\":{},\"type\":\"object\"},\"venice\":{\"additionalProperties\":{},\"type\":\"object\"},\"wafer\":{\"additionalProperties\":{},\"type\":\"object\"},\"wandb\":{\"additionalProperties\":{},\"type\":\"object\"},\"xai\":{\"additionalProperties\":{},\"type\":\"object\"},\"xiaomi\":{\"additionalProperties\":{},\"type\":\"object\"},\"z-ai\":{\"additionalProperties\":{},\"type\":\"object\"}},\"type\":\"object\"}},\"type\":\"object\"},\"response_format\":{\"default\":\"pcm\",\"description\":\"Audio output format\",\"enum\":[\"mp3\",\"pcm\"],\"example\":\"pcm\",\"type\":\"string\"},\"speed\":{\"description\":\"Playback speed multiplier. Only used by models that support it (e.g. OpenAI TTS). Ignored by other providers.\",\"example\":1,\"format\":\"double\",\"type\":\"number\"},\"voice\":{\"description\":\"Voice identifier (provider-specific).\",\"example\":\"en_paul_neutral\",\"type\":\"string\"}},\"required\":[\"model\",\"input\",\"voice\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"audio/*\":{\"schema\":{\"description\":\"Raw audio bytestream. Content-Type varies by requested format (audio/mpeg for mp3, audio/pcm for pcm — 16-bit little-endian).\",\"example\":\"<binary audio data>\",\"format\":\"binary\",\"type\":\"string\"}}},\"description\":\"Audio bytes stream\"},\"400\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"schema\":{\"description\":\"Bad Request - Invalid request parameters or malformed input\",\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"properties\":{\"error\":{\"description\":\"Error data for BadRequestResponse\",\"example\":{\"code\":400,\"message\":\"Invalid request parameters\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Bad Request - Invalid request parameters or malformed input\"},\"401\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"schema\":{\"description\":\"Unauthorized - Authentication required or invalid credentials\",\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"properties\":{\"error\":{\"description\":\"Error data for UnauthorizedResponse\",\"example\":{\"code\":401,\"message\":\"Missing Authentication header\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Unauthorized - Authentication required or invalid credentials\"},\"402\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":402,\"message\":\"Insufficient credits. Add more using https://openrouter.ai/credits\"}},\"schema\":{\"description\":\"Payment Required - Insufficient credits or quota to complete request\",\"example\":{\"error\":{\"code\":402,\"message\":\"Insufficient credits. Add more using https://openrouter.ai/credits\"}},\"properties\":{\"error\":{\"description\":\"Error data for PaymentRequiredResponse\",\"example\":{\"code\":402,\"message\":\"Insufficient credits. Add more using https://openrouter.ai/credits\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Payment Required - Insufficient credits or quota to complete request\"},\"404\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":404,\"message\":\"Resource not found\"}},\"schema\":{\"description\":\"Not Found - Resource does not exist\",\"example\":{\"error\":{\"code\":404,\"message\":\"Resource not found\"}},\"properties\":{\"error\":{\"description\":\"Error data for NotFoundResponse\",\"example\":{\"code\":404,\"message\":\"Resource not found\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Not Found - Resource does not exist\"},\"429\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":429,\"message\":\"Rate limit exceeded\"}},\"schema\":{\"description\":\"Too Many Requests - Rate limit exceeded\",\"example\":{\"error\":{\"code\":429,\"message\":\"Rate limit exceeded\"}},\"properties\":{\"error\":{\"description\":\"Error data for TooManyRequestsResponse\",\"example\":{\"code\":429,\"message\":\"Rate limit exceeded\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Too Many Requests - Rate limit exceeded\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"schema\":{\"description\":\"Internal Server Error - Unexpected server error\",\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"properties\":{\"error\":{\"description\":\"Error data for InternalServerResponse\",\"example\":{\"code\":500,\"message\":\"Internal Server Error\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal Server Error - Unexpected server error\"},\"502\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":502,\"message\":\"Provider returned error\"}},\"schema\":{\"description\":\"Bad Gateway - Provider/upstream API failure\",\"example\":{\"error\":{\"code\":502,\"message\":\"Provider returned error\"}},\"properties\":{\"error\":{\"description\":\"Error data for BadGatewayResponse\",\"example\":{\"code\":502,\"message\":\"Provider returned error\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Bad Gateway - Provider/upstream API failure\"},\"503\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":503,\"message\":\"Service temporarily unavailable\"}},\"schema\":{\"description\":\"Service Unavailable - Service temporarily unavailable\",\"example\":{\"error\":{\"code\":503,\"message\":\"Service temporarily unavailable\"}},\"properties\":{\"error\":{\"description\":\"Error data for ServiceUnavailableResponse\",\"example\":{\"code\":503,\"message\":\"Service temporarily unavailable\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Service Unavailable - Service temporarily unavailable\"},\"524\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":524,\"message\":\"Request timed out. Please try again later.\"}},\"schema\":{\"description\":\"Infrastructure Timeout - Provider request timed out at edge network\",\"example\":{\"error\":{\"code\":524,\"message\":\"Request timed out. Please try again later.\"}},\"properties\":{\"error\":{\"description\":\"Error data for EdgeNetworkTimeoutResponse\",\"example\":{\"code\":524,\"message\":\"Request timed out. Please try again later.\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Infrastructure Timeout - Provider request timed out at edge network\"},\"529\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":529,\"message\":\"Provider returned error\"}},\"schema\":{\"description\":\"Provider Overloaded - Provider is temporarily overloaded\",\"example\":{\"error\":{\"code\":529,\"message\":\"Provider returned error\"}},\"properties\":{\"error\":{\"description\":\"Error data for ProviderOverloadedResponse\",\"example\":{\"code\":529,\"message\":\"Provider returned error\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Provider Overloaded - Provider is temporarily overloaded\"}},\"security\":[{\"apiKey\":[]}],\"securitySchemes\":{\"apiKey\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearer\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/audio/speech", "segments": [{ "lit": "audio" }, { "lit": "speech" }], "select": { "exist": ["http_referer", "x_open_router_category", "x_open_router_title"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "tts", "name__orig": "tts", "Name": "Tts", "name_": "tts", "name-": "tts", "NAME": "TTS", "index$": 71 }, { "active": true, "entity": "tts", "key$": "BasicTtsFlow", "kind": "basic", "name": "BasicTtsFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "tts_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'Tts');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const tts_ref01_ent = client.Tts();
        let tts_ref01_data = setup.data.new.tts['tts_ref01'];
        tts_ref01_data = (await tts_ref01_ent.create(tts_ref01_data)).data();
        (0, node_assert_1.default)(null != tts_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/tts/TtsTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpenrouterModelsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['tts01', 'tts02', 'tts03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPENROUTER_MODELS_TEST_TTS_ENTID': idmap,
        'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
        'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
        'OPENROUTER_MODELS_APIKEY': '',
    });
    idmap = env['OPENROUTER_MODELS_TEST_TTS_ENTID'];
    const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPENROUTER_MODELS_TEST_TTS_ENTID'];
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
//# sourceMappingURL=TtsEntity.test.js.map