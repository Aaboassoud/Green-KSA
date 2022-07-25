from rest_framework import serializers
from .models import Comment
from Accounts.serializer import UserSerializerView

class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = '__all__'


class CommentSerializerView(serializers.ModelSerializer):
    user = UserSerializerView()
    class Meta:
        model = Comment
        fields = '__all__'
        depth = 1