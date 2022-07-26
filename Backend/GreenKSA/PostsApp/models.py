from django.db import models
from django.contrib.auth.models import User 

class Post(models.Model):
    '''
                    Table of Posts
    this class to make a table of posts in the database
    '''
    CHOICES_TYPES = (
        ('نخيل', 'نخيل'),
        ('شجرة النيم', 'شجرة النيم'),
        ('شجرة الفيكس الامريكي', 'شجرة الفيكس الامريكي'),
        ('شجرة الخبيز الساحلي ', 'شجرة الخبيز الساحلي '),
        ('شجرة اللبخ', 'شجرة اللبخ'),
        ('شجرة الفيكس النقالي','شجرة الفيكس النقالي'),
        ('شجرة فرشاة الزجاج','شجرة فرشاة الزجاج'),
        ('ورود صغيره','ورود صغيره'),
        ('شجرة عادية ','شجرة عادية ')
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
    city = models.CharField(max_length=64, choices=CHOICES_CITYS , blank=True)
    type = models.CharField(max_length=64, choices=CHOICES_TYPES)
    created = models.DateTimeField(auto_now_add=True)
    modify = models.DateTimeField(auto_now=True)
    image = models.URLField(max_length=1024, blank=True)
    is_rated = models.BooleanField(default=False)
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    score = models.IntegerField(blank=True,default=0)

    def __str__(self):
        return self.title