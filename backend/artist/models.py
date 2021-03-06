from django.db import models
from django.conf import settings

# Create your models here.


class Artist(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE
    )
    date_created = models.DateTimeField(auto_now_add=True)
