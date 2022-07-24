from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.request import Request
from django.core import serializers
from rest_framework import status
from .serializers import PostsSerializer, UserSerializerView

@api_view(['POST'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def add_post(request: Request):
    '''
                                            description
    This function to add a new post to the database and must be authenticated to add post.
    '''
    user:User = request.user

    if not user.is_authenticated:
        return Response({"msg" : "Not Allowed, Must be Logged in"}, status=status.HTTP_401_UNAUTHORIZED)
    request.data.update(user=request.user.id)
    new_post = PostsSerializer(data=request.data)
    if new_post.is_valid():
        new_post.save()
        dataResponse = {
            'msg' : 'Added Post Successfully',
            'Post' : new_post.data
        }
        return Response(dataResponse)
    else:
        print(new_post.errors)
        dataResponse = {'msg': "couldn't create a Post!"}
        return Response(dataResponse, status=status.HTTP_400_BAD_REQUEST)