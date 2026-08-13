# OpenrouterModels SDK feature factory

from openroutermodels_sdk.feature.base_feature import OpenrouterModelsBaseFeature
from openroutermodels_sdk.feature.test_feature import OpenrouterModelsTestFeature


def _make_feature(name):
    features = {
        "base": lambda: OpenrouterModelsBaseFeature(),
        "test": lambda: OpenrouterModelsTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
