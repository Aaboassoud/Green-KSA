from PostsApp.serializers import PostsSerializerView
from .models import Rating
from rest_framework import serializers
from Accounts.serializer import UserSerializerView

class RatingSerializer(serializers.ModelSerializer):
    '''
    A class to create a rating serializer for the user.
    '''
    class Meta:
        model = Rating
        fields = '__all__'

class RatingSerializerView(serializers.ModelSerializer):
    '''
    A class to view a rating serializer for the user.
    '''
    post = PostsSerializerView()
    user = UserSerializerView()
    class Meta:
        model = Rating
        fields = '__all__'