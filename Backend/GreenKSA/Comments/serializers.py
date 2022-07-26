from rest_framework import serializers
from .models import Comment
from Accounts.serializer import UserSerializerView

class CommentSerializer(serializers.ModelSerializer):
    '''
    CommentSerializer is used to create a comment for a user.

    '''
    class Meta:
        model = Comment
        fields = '__all__'


class CommentSerializerView(serializers.ModelSerializer):
    '''
    CommentSerializerView is used to view a comment for a user.
    '''
    user = UserSerializerView()
    class Meta:
        model = Comment
        fields = '__all__'
        depth = 1