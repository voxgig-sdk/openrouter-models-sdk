
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
  ListByokKey,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class ListByokKeyEntity extends OpenrouterModelsEntityBase<ListByokKey> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'list_byok_key'
    this.name_ = 'list_byok_key'
    this.Name = 'ListByokKey'
  }


  make(this: ListByokKeyEntity) {
    return new ListByokKeyEntity(this._client, this.entopts())
  }







}


export {
  ListByokKeyEntity
}
