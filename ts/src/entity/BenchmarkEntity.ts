
import { inspect } from 'node:util'

import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase'

import type {
  OpenrouterModelsSDK,
} from '../OpenrouterModelsSDK'


import type {
  Operation,
  Context,
  Control,
} from '../types'

import type {
  Benchmark,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class BenchmarkEntity extends OpenrouterModelsEntityBase<Benchmark> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'benchmark'
    this.name_ = 'benchmark'
    this.Name = 'Benchmark'
  }


  make(this: BenchmarkEntity) {
    return new BenchmarkEntity(this._client, this.entopts())
  }







}


export {
  BenchmarkEntity
}
