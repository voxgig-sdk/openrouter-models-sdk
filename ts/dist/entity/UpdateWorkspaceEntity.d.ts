import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { UpdateWorkspace, UpdateWorkspaceListMatch, UpdateWorkspaceCreateData, UpdateWorkspaceUpdateData } from '../OpenrouterModelsTypes';
declare class UpdateWorkspaceEntity extends OpenrouterModelsEntityBase<UpdateWorkspace> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: UpdateWorkspaceEntity): UpdateWorkspaceEntity;
    list(this: any, reqmatch?: UpdateWorkspaceListMatch, ctrl?: Control): Promise<UpdateWorkspaceEntity[]>;
    create(this: any, reqdata?: UpdateWorkspaceCreateData, ctrl?: Control): Promise<UpdateWorkspaceEntity>;
    update(this: any, reqdata?: UpdateWorkspaceUpdateData, ctrl?: Control): Promise<UpdateWorkspaceEntity>;
}
export { UpdateWorkspaceEntity };
