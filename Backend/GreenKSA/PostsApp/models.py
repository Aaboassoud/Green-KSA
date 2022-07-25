from django.db import models
from django.contrib.auth.models import User 

class Post(models.Model):
    '''
                    Table of Posts
    this class to make a table of posts in the database
    '''
    CHOICES_TYPES = (
        ('نعناع', 'نعناع'),
        ('نخيل', 'نخيل')
    )
    
    CHOICES_CITYS = (
        ('مكة المكرمة','مكة المكرمة'),('الرياض','الرياض'),
        ('الشرقية','الشرقية'),('عسير','عسير'),
        ('المدينة المنورة','المدينة المنورة'),('جازان','جازان'),
        ('القصيم','القصيم'),('تبوك','تبوك'),
        ('حائل','حائل'),('نجران','نجران'),
        ('الجوف','الجوف'),('الباحة','الباحة'),
        ('الحدود الشمالية','الحدود الشمالية')
    )
    
    title = models.CharField(max_length=54)
    description = models.TextField(blank=True)
    city = models.CharField(max_length=64, choices=CHOICES_CITYS)
    type = models.CharField(max_length=64, choices=CHOICES_TYPES)
    created = models.DateTimeField(auto_now_add=True)
    modify = models.DateTimeField(auto_now=True)
    image = models.URLField(max_length=1024, blank=True)
    is_rated = models.BooleanField(default=False)
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    score = models.IntegerField(blank=True,default=0)

    def __str__(self):
        return self.title