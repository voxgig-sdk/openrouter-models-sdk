
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
  ListWorkspace,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class ListWorkspaceEntity extends OpenrouterModelsEntityBase<ListWorkspace> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'list_workspace'
    this.name_ = 'list_workspace'
    this.Name = 'ListWorkspace'
  }


  make(this: ListWorkspaceEntity) {
    return new ListWorkspaceEntity(this._client, this.entopts())
  }







}


export {
  ListWorkspaceEntity
}
