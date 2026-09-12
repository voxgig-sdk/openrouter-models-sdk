import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { BetaAnalytics, BetaAnalyticsLoadMatch, BetaAnalyticsCreateData } from '../OpenrouterModelsTypes';
declare class BetaAnalyticsEntity extends OpenrouterModelsEntityBase<BetaAnalytics> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: BetaAnalyticsEntity): BetaAnalyticsEntity;
    load(this: any, reqmatch?: BetaAnalyticsLoadMatch, ctrl?: Control): Promise<BetaAnalyticsEntity>;
    create(this: any, reqdata?: BetaAnalyticsCreateData, ctrl?: Control): Promise<BetaAnalyticsEntity>;
}
export { BetaAnalyticsEntity };
