
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
  User,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class UserEntity extends OpenrouterModelsEntityBase<User> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'user'
    this.name_ = 'user'
    this.Name = 'User'
  }


  make(this: UserEntity) {
    return new UserEntity(this._client, this.entopts())
  }







}


export {
  UserEntity
}
