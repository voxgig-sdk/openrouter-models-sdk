import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { AppRanking, AppRankingListMatch } from '../OpenrouterModelsTypes';
declare class AppRankingEntity extends OpenrouterModelsEntityBase<AppRanking> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: AppRankingEntity): AppRankingEntity;
    list(this: any, reqmatch?: AppRankingListMatch, ctrl?: Control): Promise<AppRankingEntity[]>;
}
export { AppRankingEntity };
