from django.conf import settings
from django.db import models
class TestModelInFoo(models.Model):
    'Generated Model'
    my_id = models.BigIntegerField()
    field_two = models.BigIntegerField(null=True,blank=True,)

# Create your models here.
