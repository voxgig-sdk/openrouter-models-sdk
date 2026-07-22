
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
  Response,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class ResponseEntity extends OpenrouterModelsEntityBase<Response> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'response'
    this.name_ = 'response'
    this.Name = 'Response'
  }


  make(this: ResponseEntity) {
    return new ResponseEntity(this._client, this.entopts())
  }







}


export {
  ResponseEntity
}
