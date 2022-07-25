from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.request import Request
# from django.core import serializers
from rest_framework import status
from RatingsApp.models import Rating
from .serializers import RatingSerializer, RatingSerializerView
from RatingsApp.models import Post
from django.db.models import Sum

Good = status.HTTP_200_OK
Created = status.HTTP_201_CREATED
Accepted = status.HTTP_202_ACCEPTED


@api_view(['POST'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def add_rating(request: Request, post_id):
    '''
                    description
    This function to add a new rating and score points by evaluator and must be authintecated and have permission
    '''
    user: User = request.user
    post = Post.objects.get(id=post_id)

    if not user.is_authenticated or not request.user.has_perm('RatingsApp.add_rating'):
        return Response({"msg" : "Not Allowed, You must be Logged in or have permission to add rating"})
    if Post.objects.filter(id=post.id,user=request.user.id).exists():
        return Response({"msg": "Not Allowed, You cannot add rating for your own post!"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    request.data.update(user=request.user.id, post=post.id)
    if Rating.objects.filter(post=post.id, user=request.user.id).exists():
        return Response({"msg" : "You already have added rating for this post!"}, status=status.HTTP_406_NOT_ACCEPTABLE)
    else: 
        new_rating = RatingSerializer(data=request.data)
        if new_rating.is_valid():
            new_rating.save()
            print("HELLO")

            points = Rating.objects.filter(post=post_id).aggregate(Sum('score_points'))
            points = points.get('score_points__sum') or 0

            print(points)
            post.is_rated = True
            post.score_points = points
            post.save()

            msg = "Added Rating Successfully"
            status1 = Created
        else: 
            msg = "Couldn't Add rating!"
            status1 = status.HTTP_400_BAD_REQUEST


    return Response({"msg": msg}, status=status1)

@api_view(['DELETE'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def delete_rating(request: Request, rating_id):
    '''
                        description
    This function to delete a rating and must be authenticated and only the owner of this rating or admin 
    '''
    user:User = request.user
    rating = Rating.objects.get(id=rating_id)
    if not user.is_authenticated or not user.is_superuser or user!= rating.user or not request.user.has_perm('RatingsApp_delete_rating'):
        return Response({"msg": "Not Allowed"}, status=status.HTTP_401_UNAUTHORIZED)
    else:
        rating.delete()
        return Response({"msg","Deleted Successfully"}, status=Good)


@api_view(['GET'])
def rating(request: Request, post_id):
    '''
                    description
    This function to show the rating of the post
    '''
    rating = Rating.objects.filter(post=post_id)
    dataResponse = {
        "msg" : "List of Ratings",
        "Ratings" : RatingSerializerView(instance = rating, many = True).data
    }
    return Response(dataResponse, status=Good)