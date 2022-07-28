from rest_framework.decorators import api_view, authentication_classes
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.request import Request
from rest_framework import status
from .models import Post
from .serializers import PostsSerializer, PostsSerializerView , PostsUpdateSerializer
from Accounts.serializer import TopFiveSerializerView
from Accounts.models import Profile

Good = status.HTTP_200_OK
Created = status.HTTP_201_CREATED
Accepted = status.HTTP_202_ACCEPTED

@api_view(['POST'])
@authentication_classes([JWTAuthentication])
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
            'msg' : 'Create Post Successfully',
            'Post' : new_post.data
        }
        return Response(dataResponse, status=Created)
    else:
        print(new_post.errors)
        dataResponse = {'msg': "couldn't create a Post!"}
        return Response(dataResponse, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
def explore(request : Request):
    '''
                    description
    This function to get highest score posts for explore
        and have search field using query_params
    '''
    if 'search' in request.query_params:
        search_phrase = request.query_params['search']
        posts = Post.objects.filter(title__contains=search_phrase)
    
    else:
        posts = Post.objects.filter(score__gte=50).order_by('-score')
        if len(posts) < 5 :
            posts = Post.objects.filter(score__gte=30).order_by('-score')
            if len(posts) < 5:
                posts = Post.objects.filter(score__gte=20).order_by('-score')
            else:
                posts = Post.objects.all().order_by('-created')
    
    dataResponse = {
        "msg" : "List of Posts",
        "Posts" : PostsSerializerView(instance=posts, many=True).data
    }

    return Response(dataResponse, status=Good)

@api_view(['GET'])
def all_post(request : Request):
    '''
                description
    This function to get all Post from database
    and have search field using query_params
    '''
    if 'search' in request.query_params:
        search_phrase = request.query_params['search']
        posts = Post.objects.filter(title__contains=search_phrase)
    
    else:
        posts = Post.objects.all().order_by('-created')
    
    dataResponse = {
        "msg" : "List of Posts",
        "Posts" : PostsSerializerView(instance=posts, many=True).data
    }

    return Response(dataResponse, status=Good)


@api_view(['PATCH'])
@authentication_classes([JWTAuthentication])
def edit_post(request: Request, post_id):
    '''
    description
    This finction to edit post by the same user who post it and must be authenticated
    '''
    user:User = request.user
    if not user.is_authenticated:
        return Response({"msg" : "Not Allowed, You must be Logged in"}, status=status.HTTP_401_UNAUTHORIZED)
    
    post = Post.objects.get(id=post_id)
    if user != post.user:
        return Response({"msg" : "Not Allowed, You must be the owner of this post"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    
    request.data.update(user=request.user.id)
    update_post = PostsUpdateSerializer(instance=post, data=request.data)
    if update_post.is_valid():
        update_post.save()
        dataResponse = {
            "msg": "Updated successfully"
        }

        return Response(dataResponse, status=Accepted)
    print(update_post.errors)
    return Response({"msg" : "You have something errors"}, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['DELETE'])
@authentication_classes([JWTAuthentication])
def delete_post(request: Request, post_id):
    '''
                                        description
    This function to delete a post by the owner of the post and must be authenticated
    '''
    user : User = request.user
    post = Post.objects.get(id=post_id)
    if not user.is_authenticated:
        return Response({"msg": "Not Allowed, You must be authenticated!"},status=status.HTTP_401_UNAUTHORIZED)
    if user != post.user:
        return Response({"msg": "Not Allowed, You must be the owner of this post!"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    
    post.delete()
    return Response({"msg" : "Deleted Successfully"}, status=Accepted)


@api_view(['GET'])
def user_posts(request : Request, user_id):
    '''
                description
    This function to get user Posts from database
    and have search field using query_params
    '''
    if 'search' in request.query_params:
        search_phrase = request.query_params['search']
        posts = Post.objects.filter(user=user_id,id=search_phrase)
    else:
        posts = Post.objects.filter(user=user_id).order_by('-created')
    
    dataResponse = {
        "msg" : "List of Posts",
        "Posts" : PostsSerializerView(instance=posts, many=True).data
    }

    return Response(dataResponse, status=Good)

@api_view(['GET'])
def top_5(request: Request):
    '''
                description
    This function to show Top 5 users
    '''
    points = Profile.objects.all().order_by('-totalScore')[:5]
    dataResponse = {
        "msg" : "List of Top 5 users",
        "Users Profile" : TopFiveSerializerView(instance=points, many = True).data
    }

    return Response(dataResponse, status=Good)