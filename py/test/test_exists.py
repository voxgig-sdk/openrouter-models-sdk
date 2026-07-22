# ProjectName SDK exists test

import pytest
from openroutermodels_sdk import OpenrouterModelsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = OpenrouterModelsSDK.test(None, None)
        assert testsdk is not None
