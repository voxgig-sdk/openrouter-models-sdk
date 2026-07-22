
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
  Speech,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class SpeechEntity extends OpenrouterModelsEntityBase<Speech> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'speech'
    this.name_ = 'speech'
    this.Name = 'Speech'
  }


  make(this: SpeechEntity) {
    return new SpeechEntity(this._client, this.entopts())
  }







}


export {
  SpeechEntity
}
