"""
gunicorn configuration file: http://docs.gunicorn.org/en/stable/configure.html
source: https://github.com/edx/configuration/blob/open-release/maple.2/playbooks/roles/edxapp/templates/cms_gunicorn.py.j2

This file is created and updated by ansible, edit at your peril
"""
import multiprocessing

preload_app = False
timeout = 300
bind = "127.0.0.1:8010"
pythonpath = "/opt/bitnami/edx/app/edxapp/edx-platform"
limit_request_field_size = 16384

# Note: Official Open edX templates use a multiplier of 2
# However, this is not feasible when running in compute-optimized instances (due to lack of memory for the amount of processes)
workers = int((multiprocessing.cpu_count()-1) / 2) + 2

def pre_request(worker, req):
    worker.log.info("%s %s" % (req.method, req.path))


def close_all_caches():
    # Close the cache so that newly forked workers cannot accidentally share
    # the socket with the processes they were forked from. This prevents a race
    # condition in which one worker could get a cache response intended for
    # another worker.
    # We do this in a way that is safe for 1.4 and 1.8 while we still have some
    # 1.4 installations.
    from django.conf import settings
    from django.core import cache as django_cache
    if hasattr(django_cache, 'caches'):
        get_cache = django_cache.caches.__getitem__
    else:
        get_cache = django_cache.get_cache
    for cache_name in settings.CACHES:
        cache = get_cache(cache_name)
        if hasattr(cache, 'close'):
            cache.close()

    # The 1.4 global default cache object needs to be closed also: 1.4
    # doesn't ensure you get the same object when requesting the same
    # cache. The global default is a separate Python object from the cache
    # you get with get_cache("default"), so it will have its own connection
    # that needs to be closed.
    cache = django_cache.cache
    if hasattr(cache, 'close'):
        cache.close()


def post_fork(server, worker):
    close_all_caches()

