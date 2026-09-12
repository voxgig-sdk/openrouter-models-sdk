import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Activity, ActivityListMatch } from '../OpenrouterModelsTypes';
declare class ActivityEntity extends OpenrouterModelsEntityBase<Activity> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ActivityEntity): ActivityEntity;
    list(this: any, reqmatch?: ActivityListMatch, ctrl?: Control): Promise<ActivityEntity[]>;
}
export { ActivityEntity };
