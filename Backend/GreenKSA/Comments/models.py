from django.db import models
from django.contrib.auth.models import User
from PostsApp.models import Post




class Comment(models.Model):
    '''
        Taple of Comment
        this class to created taple Comments in database
    '''
    comment = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    def str(self):
        return self.post.title 