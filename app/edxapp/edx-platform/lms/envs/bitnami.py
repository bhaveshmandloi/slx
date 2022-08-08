""" Overrides for Bitnami-based installations. """

import os

from .production import *
from xmodule.modulestore.modulestore_settings import update_module_store_settings

# Log to a file
local_loglevel = ENV_TOKENS.get('LOCAL_LOGLEVEL', 'INFO')
LOGGING['handlers']['local'] = {
    'level': LOCAL_LOGLEVEL,
    'class': 'logging.FileHandler',
    'formatter': 'standard',
    'filename': os.path.join(LOG_DIR, 'edx.log'),
}
LOGGING['handlers']['tracking'] = {
    'level': 'DEBUG',
    'class': 'logging.FileHandler',
    'formatter': 'standard',
    'filename': os.path.join(LOG_DIR, 'tracking.log'),
}
LOGGING['loggers']['']['level'] = local_loglevel

# Silence some loggers (note: we must attempt to get rid of these when upgrading from one release to the next)
# https://github.com/overhangio/tutor/blob/v13.1.5/tutor/templates/apps/openedx/settings/partials/common_all.py#L99
import warnings
from django.utils.deprecation import RemovedInDjango40Warning, RemovedInDjango41Warning
warnings.filterwarnings("ignore", category=RemovedInDjango40Warning)
warnings.filterwarnings("ignore", category=RemovedInDjango41Warning)
warnings.filterwarnings("ignore", category=DeprecationWarning, module="lms.djangoapps.course_wiki.plugins.markdownedx.wiki_plugin")
warnings.filterwarnings("ignore", category=DeprecationWarning, module="wiki.plugins.links.wiki_plugin")
