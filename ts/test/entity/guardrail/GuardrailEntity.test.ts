
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { OpenrouterModelsSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('GuardrailEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENROUTER_MODELS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenrouterModelsSDK.test()
    const ent = testsdk.Guardrail()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE
    for (const op of ['create', 'list', 'load', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'guardrail.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set OPENROUTER_MODELS_TEST_GUARDRAIL_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const guardrail_ref01_ent = client.Guardrail()
    let guardrail_ref01_data = setup.data.new.guardrail['guardrail_ref01']

    guardrail_ref01_data = (await guardrail_ref01_ent.create(guardrail_ref01_data)).data()
    assert(null != guardrail_ref01_data.id)


    // LIST
    const guardrail_ref01_match: any = {}

    const guardrail_ref01_list = (await guardrail_ref01_ent.list(guardrail_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(guardrail_ref01_list, { id: guardrail_ref01_data.id })))


    // LOAD
    const guardrail_ref01_match_dt0: any = {}
    guardrail_ref01_match_dt0.id = guardrail_ref01_data.id
    const guardrail_ref01_data_dt0 = (await guardrail_ref01_ent.load(guardrail_ref01_match_dt0)).data()
    assert(guardrail_ref01_data_dt0.id === guardrail_ref01_data.id)


    // REMOVE
    const guardrail_ref01_match_rm0: any = { id: guardrail_ref01_data.id }
    await guardrail_ref01_ent.remove(guardrail_ref01_match_rm0)
  

    // LIST
    const guardrail_ref01_match_rt0: any = {}

    const guardrail_ref01_list_rt0 = (await guardrail_ref01_ent.list(guardrail_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(guardrail_ref01_list_rt0, { id: guardrail_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/guardrail/GuardrailTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = OpenrouterModelsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['guardrail01','guardrail02','guardrail03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['OPENROUTER_MODELS_TEST_GUARDRAIL_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'OPENROUTER_MODELS_TEST_GUARDRAIL_ENTID': idmap,
    'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
    'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
    'OPENROUTER_MODELS_APIKEY': 'NONE',
  })

  idmap = env['OPENROUTER_MODELS_TEST_GUARDRAIL_ENTID']

  const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE

  if (live) {
    client = new OpenrouterModelsSDK(merge([
      {
        apikey: env.OPENROUTER_MODELS_APIKEY,
      },
      extra
    ]))
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
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
