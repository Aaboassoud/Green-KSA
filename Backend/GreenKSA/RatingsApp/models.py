from django.db import models
from django.contrib.auth.models import User
from PostsApp.models import Post
from django.core.validators import MinValueValidator, MaxValueValidator

class Rating(models.Model):
    '''
        Taple of Rating
        this class to created taple Rating in database
    '''
    score_points = models.IntegerField(default=0, validators=[MaxValueValidator(150),MinValueValidator(0)])
    created = models.DateTimeField(auto_now_add=True)
    modify = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    def __str__(self):
        return self.post.title