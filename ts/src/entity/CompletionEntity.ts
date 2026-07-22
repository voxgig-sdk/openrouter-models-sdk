
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
  Completion,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class CompletionEntity extends OpenrouterModelsEntityBase<Completion> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'completion'
    this.name_ = 'completion'
    this.Name = 'Completion'
  }


  make(this: CompletionEntity) {
    return new CompletionEntity(this._client, this.entopts())
  }







}


export {
  CompletionEntity
}
