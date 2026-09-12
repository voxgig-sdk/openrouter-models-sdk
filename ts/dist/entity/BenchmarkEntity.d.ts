import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Benchmark } from '../OpenrouterModelsTypes';
declare class BenchmarkEntity extends OpenrouterModelsEntityBase<Benchmark> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: BenchmarkEntity): BenchmarkEntity;
}
export { BenchmarkEntity };
