
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
  Remove,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class RemoveEntity extends OpenrouterModelsEntityBase<Remove> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'remove'
    this.name_ = 'remove'
    this.Name = 'Remove'
  }


  make(this: RemoveEntity) {
    return new RemoveEntity(this._client, this.entopts())
  }







}


export {
  RemoveEntity
}
