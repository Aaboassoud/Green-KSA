from ctypes import pointer
from django.db import models

# Create your models here.


class Coupons(models.Model):

    title = models.CharField(max_length=64)
    description = models.TextField(blank=True)
    image = models.URLField(max_length=1024, blank=True)
    start_at = models.DateTimeField()
    end_at = models.DateTimeField()
    points = models.IntegerField(default=0 , blank=True)
    quantity = models.IntegerField(default=0)
