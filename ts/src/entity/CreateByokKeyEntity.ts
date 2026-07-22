
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
  CreateByokKey,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class CreateByokKeyEntity extends OpenrouterModelsEntityBase<CreateByokKey> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'create_byok_key'
    this.name_ = 'create_byok_key'
    this.Name = 'CreateByokKey'
  }


  make(this: CreateByokKeyEntity) {
    return new CreateByokKeyEntity(this._client, this.entopts())
  }







}


export {
  CreateByokKeyEntity
}
