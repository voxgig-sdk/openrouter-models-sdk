import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { RankingsDaily, RankingsDailyListMatch } from '../OpenrouterModelsTypes';
declare class RankingsDailyEntity extends OpenrouterModelsEntityBase<RankingsDaily> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: RankingsDailyEntity): RankingsDailyEntity;
    list(this: any, reqmatch?: RankingsDailyListMatch, ctrl?: Control): Promise<RankingsDailyEntity[]>;
}
export { RankingsDailyEntity };
