
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
  CreateWorkspace,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class CreateWorkspaceEntity extends OpenrouterModelsEntityBase<CreateWorkspace> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'create_workspace'
    this.name_ = 'create_workspace'
    this.Name = 'CreateWorkspace'
  }


  make(this: CreateWorkspaceEntity) {
    return new CreateWorkspaceEntity(this._client, this.entopts())
  }







}


export {
  CreateWorkspaceEntity
}
