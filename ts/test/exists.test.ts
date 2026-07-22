
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { OpenrouterModelsSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await OpenrouterModelsSDK.test()
    equal(null !== testsdk, true)
  })

})
