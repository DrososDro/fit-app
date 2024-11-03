import os

from celery import Celery
from django.conf import settings

if os.getenv("PROD_ENV") == "True":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.production")
else:
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.local")


app = Celery("fit_app")

app.config_from_object("django.conf:settings", namespace="CELERY")

app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)
