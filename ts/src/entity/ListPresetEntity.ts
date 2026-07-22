
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
  ListPreset,
} from '../OpenrouterModelsTypes'

// TODO: needs Entity superclass
class ListPresetEntity extends OpenrouterModelsEntityBase<ListPreset> {

  constructor(client: OpenrouterModelsSDK, entopts: any) {
    super(client, entopts)
    this.name = 'list_preset'
    this.name_ = 'list_preset'
    this.Name = 'ListPreset'
  }


  make(this: ListPresetEntity) {
    return new ListPresetEntity(this._client, this.entopts())
  }







}


export {
  ListPresetEntity
}
