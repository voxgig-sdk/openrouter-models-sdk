
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
  Query,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class QueryEntity extends OpenrouterModelsEntityBase<Query> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'query'
    this.name_ = 'query'
    this.Name = 'Query'
  }


  make(this: QueryEntity) {
    return new QueryEntity(this._client, this.entopts())
  }







}


export {
  QueryEntity
}
