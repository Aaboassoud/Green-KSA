from django.shortcuts import render
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from django.contrib.auth.models import User
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from .serializers import CommentSerializer , CommentSerializerView
from .models import Comment 
from PostsApp.models import Post

@api_view(['POST'])
@authentication_classes([JWTAuthentication])
def add_comment(request: Request, post_id):
    ''' description
        This function to add a new Comment to the database and must be authenticated.
    '''
    user:User = request.user

    if not user.is_authenticated:
        return Response({"msg" : "Not Allowed"}, status=status.HTTP_401_UNAUTHORIZED)
    
    post = Post.objects.get(id=post_id)
    request.data.update(user=request.user.id, post=post.id)
    
    new_comment = CommentSerializer(data=request.data)
    if new_comment.is_valid():
        new_comment.save()
        dataResponse = {
            "msg" : "Created Successfully",
            "Comment" : new_comment.data
        }
        return Response(dataResponse)
    else:
        print(new_comment.errors)
        dataResponse = {"msg" : "couldn't create a Comment"}
        return Response( dataResponse, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def reviews(request : Request, post_id):
    ''' 
    description
    this function to show a list of reviews
    '''
    comments = Comment.objects.filter(post=post_id)
    dataResponse = {
        "msg" : "List of All Comments",
        "Comments" : CommentSerializerView(instance=comments, many=True).data
    }

    return Response(dataResponse)

@api_view(['DELETE'])
@authentication_classes([JWTAuthentication])
def  delete_comment(request: Request, comment_id):
    '''
        description
        This function to delete a comment and must be authenticated and only the same user who created this comment.
    '''
    user:User = request.user
    comment = Comment.objects.get(id=comment_id) 
    if not user.is_authenticated or user != comment.user:
        return Response({"msg" : "Not Allowed"}, status=status.HTTP_401_UNAUTHORIZED)

    comment.delete()
    return Response({"msg" : "Deleted Successfully"})