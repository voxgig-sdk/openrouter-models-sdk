import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Task, TaskLoadMatch } from '../OpenrouterModelsTypes';
declare class TaskEntity extends OpenrouterModelsEntityBase<Task> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: TaskEntity): TaskEntity;
    load(this: any, reqmatch?: TaskLoadMatch, ctrl?: Control): Promise<TaskEntity>;
}
export { TaskEntity };
