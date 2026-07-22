
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
  Content,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class ContentEntity extends OpenrouterModelsEntityBase<Content> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'content'
    this.name_ = 'content'
    this.Name = 'Content'
  }


  make(this: ContentEntity) {
    return new ContentEntity(this._client, this.entopts())
  }







}


export {
  ContentEntity
}
