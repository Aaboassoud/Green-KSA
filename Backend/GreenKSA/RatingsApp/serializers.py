from PostsApp.serializers import PostsSerializerView
from .models import Rating
from rest_framework import serializers
from Accounts.serializer import UserSerializerView

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ['score_points',]

class RatingSerializerView(serializers.ModelSerializer):
    post = PostsSerializerView()
    user = UserSerializerView()
    class Meta:
        model = Rating
        fields = '__all__'