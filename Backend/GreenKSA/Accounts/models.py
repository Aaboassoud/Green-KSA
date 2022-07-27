from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver



class Profile(models.Model):
    '''
        Taple of Profile
        this class to created taple Profile in database
    '''
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
    phone = models.CharField(blank=True, max_length=10)
    scorePoints = models.IntegerField(default=0,)
    usedScore = models.IntegerField(default=0,)
    totalScore = models.IntegerField(default=0,)
    city = models.CharField(max_length=64 , choices = CHOICES_CITYS)
    avtar = models.URLField(max_length=1024, default='https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg')
    
    def str(self):
        return self.user.username


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    '''
    Create a new user profile automatically for the current user.
    '''
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    '''
    Save a new user profile automatically for the current user.
    '''
    instance.profile.save()