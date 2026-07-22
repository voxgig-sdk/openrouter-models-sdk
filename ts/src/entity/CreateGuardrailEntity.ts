
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
  CreateGuardrail,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class CreateGuardrailEntity extends OpenrouterModelsEntityBase<CreateGuardrail> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'create_guardrail'
    this.name_ = 'create_guardrail'
    this.Name = 'CreateGuardrail'
  }


  make(this: CreateGuardrailEntity) {
    return new CreateGuardrailEntity(this._client, this.entopts())
  }







}


export {
  CreateGuardrailEntity
}
