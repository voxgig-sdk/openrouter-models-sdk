
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
  Transcription,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class TranscriptionEntity extends OpenrouterModelsEntityBase<Transcription> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'transcription'
    this.name_ = 'transcription'
    this.Name = 'Transcription'
  }


  make(this: TranscriptionEntity) {
    return new TranscriptionEntity(this._client, this.entopts())
  }







}


export {
  TranscriptionEntity
}
