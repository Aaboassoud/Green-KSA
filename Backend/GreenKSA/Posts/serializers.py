from .models import Post
from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializerView(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['username','id']

class PostsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = '__all__'