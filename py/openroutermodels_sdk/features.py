# OpenrouterModels SDK feature factory

from openroutermodels_sdk.feature.base_feature import OpenrouterModelsBaseFeature
from openroutermodels_sdk.feature.ratelimit_feature import OpenrouterModelsRatelimitFeature
from openroutermodels_sdk.feature.retry_feature import OpenrouterModelsRetryFeature
from openroutermodels_sdk.feature.test_feature import OpenrouterModelsTestFeature
from openroutermodels_sdk.feature.timeout_feature import OpenrouterModelsTimeoutFeature


_FEATURES = {
    "base": lambda: OpenrouterModelsBaseFeature(),
    "ratelimit": lambda: OpenrouterModelsRatelimitFeature(),
    "retry": lambda: OpenrouterModelsRetryFeature(),
    "test": lambda: OpenrouterModelsTestFeature(),
    "timeout": lambda: OpenrouterModelsTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
