
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
  Zdr,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class ZdrEntity extends OpenrouterModelsEntityBase<Zdr> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'zdr'
    this.name_ = 'zdr'
    this.Name = 'Zdr'
  }


  make(this: ZdrEntity) {
    return new ZdrEntity(this._client, this.entopts())
  }







}


export {
  ZdrEntity
}
