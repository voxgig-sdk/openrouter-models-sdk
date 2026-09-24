
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { OpenrouterModelsSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = OpenrouterModelsSDK.test()
    equal(testsdk instanceof OpenrouterModelsSDK, true,
      'OpenrouterModelsSDK.test() must return a client synchronously')
  })

})
