from django.db import models
from django.contrib.auth.models import User 

class Post(models.Model):
    '''
            Table of Posts
    this class to make a table of posts in the database
    '''
    CHOICES = (
        ('نعناع', 'نعناع')
    )
    
    title = models.CharField(max_length=54)
    description = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    modify = models.DateTimeField(auto_now=True)
    image = models.URLField(max_length=1024, blank=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return self.title