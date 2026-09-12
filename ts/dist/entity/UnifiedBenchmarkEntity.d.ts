import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { UnifiedBenchmark, UnifiedBenchmarkListMatch } from '../OpenrouterModelsTypes';
declare class UnifiedBenchmarkEntity extends OpenrouterModelsEntityBase<UnifiedBenchmark> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: UnifiedBenchmarkEntity): UnifiedBenchmarkEntity;
    list(this: any, reqmatch?: UnifiedBenchmarkListMatch, ctrl?: Control): Promise<UnifiedBenchmarkEntity[]>;
}
export { UnifiedBenchmarkEntity };
