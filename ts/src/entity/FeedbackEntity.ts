
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
  Feedback,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class FeedbackEntity extends OpenrouterModelsEntityBase<Feedback> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'feedback'
    this.name_ = 'feedback'
    this.Name = 'Feedback'
  }


  make(this: FeedbackEntity) {
    return new FeedbackEntity(this._client, this.entopts())
  }







}


export {
  FeedbackEntity
}
