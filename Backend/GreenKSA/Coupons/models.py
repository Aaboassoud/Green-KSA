from django.db import models




class Coupons(models.Model):
    '''
    This model stores the coupons of a user.
    '''

    title = models.CharField(max_length=64)
    description = models.TextField(blank=True)
    image = models.URLField(max_length=1024, blank=True)
    start_at = models.DateTimeField()
    end_at = models.DateTimeField()
    points = models.IntegerField(default=0 , blank=True)
    quantity = models.IntegerField(default=0)
