from random import choices
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver



class Profile(models.Model):
    CHOICES_CITYS = (
        ('مكة المكرمة','مكة المكرمة'),('الرياض','الرياض'),
        ('الشرقية','الشرقية'),('عسير','عسير'),
        ('المدينة المنورة','المدينة المنورة'),('جازان','جازان'),
        ('القصيم','القصيم'),('تبوك','تبوك'),
        ('حائل','حائل'),('نجران','نجران'),
        ('الجوف','الجوف'),('الباحة','الباحة'),
        ('الحدود الشمالية','الحدود الشمالية')
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.DecimalField(max_digits = 10 , decimal_places = 0 , default=0, blank=True )
    scorePoints = models.IntegerField(default=0,)
    usedScore = models.IntegerField(default=0,)
    totalScore = models.IntegerField(default=0,)
    city = models.CharField(max_length=64 , choices = CHOICES_CITYS)
    
    def str(self):
        return self.user.username


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()