# OpenrouterModels SDK utility: make_context

from projectname_sdk.core.context import OpenrouterModelsContext


def make_context_util(ctxmap, basectx):
    return OpenrouterModelsContext(ctxmap, basectx)
