""" Overrides for Bitnami-based installations. """

import os

from .production import *

# Log configuration overrides
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
