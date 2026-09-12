import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { User } from '../OpenrouterModelsTypes';
declare class UserEntity extends OpenrouterModelsEntityBase<User> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: UserEntity): UserEntity;
}
export { UserEntity };
