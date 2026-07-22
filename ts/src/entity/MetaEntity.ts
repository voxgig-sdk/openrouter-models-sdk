
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
  Meta,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class MetaEntity extends OpenrouterModelsEntityBase<Meta> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'meta'
    this.name_ = 'meta'
    this.Name = 'Meta'
  }


  make(this: MetaEntity) {
    return new MetaEntity(this._client, this.entopts())
  }







}


export {
  MetaEntity
}
