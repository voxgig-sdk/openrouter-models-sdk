
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
  Member,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class MemberEntity extends OpenrouterModelsEntityBase<Member> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'member'
    this.name_ = 'member'
    this.Name = 'Member'
  }


  make(this: MemberEntity) {
    return new MemberEntity(this._client, this.entopts())
  }







}


export {
  MemberEntity
}
