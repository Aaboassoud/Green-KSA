from Accounts.serializer import UserInfoSerializerView
from .models import Post
from rest_framework import serializers



class PostsSerializer(serializers.ModelSerializer):
    '''
    This is a serializer for the created new post .
    '''
    class Meta:
        model = Post
        fields = '__all__'



class PostsSerializerView(serializers.ModelSerializer):
    '''
    This is a serializer for Post View .
    '''
    user = UserInfoSerializerView()
    class Meta:
        model = Post
        fields = '__all__'



class PostsUpdateSerializer(serializers.ModelSerializer):
    '''
    This is a serializer for the created new post .
    '''

    
    class Meta:
        model = Post
        fields = ['title' , 'description' , 'city' , 'type' , 'image']

# class PostsSerializerView(serializers.ModelSerializer):
#     '''
#     This is a serializer for the view  post .
#     '''
#     class Meta:
#         model = Post
#         fields = ['title','image','city','type','created','is_rated']

