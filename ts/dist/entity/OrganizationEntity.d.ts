import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Organization, OrganizationListMatch } from '../OpenrouterModelsTypes';
declare class OrganizationEntity extends OpenrouterModelsEntityBase<Organization> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: OrganizationEntity): OrganizationEntity;
    list(this: any, reqmatch?: OrganizationListMatch, ctrl?: Control): Promise<OrganizationEntity[]>;
}
export { OrganizationEntity };
