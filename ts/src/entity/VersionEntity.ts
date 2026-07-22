
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
  Version,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class VersionEntity extends OpenrouterModelsEntityBase<Version> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'version'
    this.name_ = 'version'
    this.Name = 'Version'
  }


  make(this: VersionEntity) {
    return new VersionEntity(this._client, this.entopts())
  }







}


export {
  VersionEntity
}
