
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
  Key,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class KeyEntity extends OpenrouterModelsEntityBase<Key> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'key'
    this.name_ = 'key'
    this.Name = 'Key'
  }


  make(this: KeyEntity) {
    return new KeyEntity(this._client, this.entopts())
  }







}


export {
  KeyEntity
}
