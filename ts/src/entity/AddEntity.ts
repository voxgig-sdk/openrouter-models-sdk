
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
  Add,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class AddEntity extends OpenrouterModelsEntityBase<Add> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'add'
    this.name_ = 'add'
    this.Name = 'Add'
  }


  make(this: AddEntity) {
    return new AddEntity(this._client, this.entopts())
  }







}


export {
  AddEntity
}
