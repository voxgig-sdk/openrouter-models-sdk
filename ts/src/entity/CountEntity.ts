
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
  Count,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class CountEntity extends OpenrouterModelsEntityBase<Count> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'count'
    this.name_ = 'count'
    this.Name = 'Count'
  }


  make(this: CountEntity) {
    return new CountEntity(this._client, this.entopts())
  }







}


export {
  CountEntity
}
