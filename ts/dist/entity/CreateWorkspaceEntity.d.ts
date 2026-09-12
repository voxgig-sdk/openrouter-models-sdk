import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { CreateWorkspace } from '../OpenrouterModelsTypes';
declare class CreateWorkspaceEntity extends OpenrouterModelsEntityBase<CreateWorkspace> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: CreateWorkspaceEntity): CreateWorkspaceEntity;
}
export { CreateWorkspaceEntity };
