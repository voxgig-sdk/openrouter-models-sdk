
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
  Coinbase,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class CoinbaseEntity extends OpenrouterModelsEntityBase<Coinbase> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'coinbase'
    this.name_ = 'coinbase'
    this.Name = 'Coinbase'
  }


  make(this: CoinbaseEntity) {
    return new CoinbaseEntity(this._client, this.entopts())
  }







}


export {
  CoinbaseEntity
}
