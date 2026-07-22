
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
  Destination,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class DestinationEntity extends OpenrouterModelsEntityBase<Destination> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'destination'
    this.name_ = 'destination'
    this.Name = 'Destination'
  }


  make(this: DestinationEntity) {
    return new DestinationEntity(this._client, this.entopts())
  }







}


export {
  DestinationEntity
}
