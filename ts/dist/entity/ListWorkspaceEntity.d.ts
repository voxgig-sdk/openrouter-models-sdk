import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { ListWorkspace } from '../OpenrouterModelsTypes';
declare class ListWorkspaceEntity extends OpenrouterModelsEntityBase<ListWorkspace> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ListWorkspaceEntity): ListWorkspaceEntity;
}
export { ListWorkspaceEntity };
