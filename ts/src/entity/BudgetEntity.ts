
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
  Budget,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class BudgetEntity extends OpenrouterModelsEntityBase<Budget> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'budget'
    this.name_ = 'budget'
    this.Name = 'Budget'
  }


  make(this: BudgetEntity) {
    return new BudgetEntity(this._client, this.entopts())
  }







}


export {
  BudgetEntity
}
