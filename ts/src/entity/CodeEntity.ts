
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
  Code,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class CodeEntity extends OpenrouterModelsEntityBase<Code> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'code'
    this.name_ = 'code'
    this.Name = 'Code'
  }


  make(this: CodeEntity) {
    return new CodeEntity(this._client, this.entopts())
  }







}


export {
  CodeEntity
}
