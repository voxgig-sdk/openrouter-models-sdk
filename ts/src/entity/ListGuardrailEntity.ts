
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
  ListGuardrail,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class ListGuardrailEntity extends OpenrouterModelsEntityBase<ListGuardrail> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'list_guardrail'
    this.name_ = 'list_guardrail'
    this.Name = 'ListGuardrail'
  }


  make(this: ListGuardrailEntity) {
    return new ListGuardrailEntity(this._client, this.entopts())
  }







}


export {
  ListGuardrailEntity
}
