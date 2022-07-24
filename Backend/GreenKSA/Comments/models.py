from django.db import models
from django.contrib.auth.models import User
from Posts.models import Post




class Comment(models.Model):
    comment = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    def str(self):
        return self.post.title 