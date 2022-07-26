from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.request import Request
from rest_framework import status
from .models import Coupons
from .serializer import CouponsSerializer
from Accounts.models import Profile
from PostsApp.models import Post
from django.db.models import Sum
from django.core.mail import send_mail

@api_view(['POST'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def add_coupons(request: Request):
    ''' description
        This function to add a new coupons to the database and must be authenticated and has perm.
    '''
    user:User = request.user

    if not user.is_authenticated or not request.user.has_perm('Coupons.add_coupons'):
        return Response({"msg" : "Not Allowed, You must be Logged in or have permission"}, status=status.HTTP_401_UNAUTHORIZED)

    
    new_coupon = CouponsSerializer(data=request.data)
    if new_coupon.is_valid():
        new_coupon.save()
        dataResponse = {
            "msg" : "Created Successfully",
            "Coupons" : new_coupon.data
        }
        return Response(dataResponse)
    else:
        print(new_coupon.errors)
        dataResponse = {"msg" : "couldn't create a Coupons"}
        return Response( dataResponse, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@authentication_classes([JWTAuthentication])
def buy_coupons(request:Request, coupons_id):
    '''
                description
    This function to facilitate the user to buy coupons and must be authticated and have enough sore points for it
    '''
    user : User = request.user
    userprofile = Profile.objects.get(user=user.id)
    if not user.is_authenticated:
        return Response({"msg" : "Not Allowed, You must be Logged in"}, status=status.HTTP_401_UNAUTHORIZED)
    
    coupons = Coupons.objects.get(id=coupons_id)
    # user_points = Profile.objects.get(user=request.user.id)

    if coupons.quantity < 1:
        return Response({"msg":"Sorry, This coupons out of stock"},status=status.HTTP_202_ACCEPTED)
    if coupons.points > userprofile.scorePoints:
        return Response({"msg":"Sorry, You dont have enough points!"},status=status.HTTP_406_NOT_ACCEPTABLE)
    else:
            coupons.quantity = coupons.quantity -1
            print("coupons quntity = ", coupons.quantity)
            coupons.save()
            old_user_poinsts = userprofile.usedScore
            print(old_user_poinsts)
            userprofile.usedScore = coupons.points
            userprofile.save()
            userprofile.usedScore = ((old_user_poinsts) + (-abs(userprofile.usedScore)))
            userprofile.save()
            print("used score = ", userprofile.usedScore)


            totalpoints = Post.objects.filter(user=request.user.id).aggregate(Sum('score'))
            totalpoints = totalpoints.get('score__sum') or 0
            print(totalpoints)
            points2 = totalpoints + userprofile.usedScore
            print(points2)
            userprofile.scorePoints = points2
            userprofile.totalScore = totalpoints
            userprofile.save()

            # send_mail(
            #     'Green KSA coupons',
            #     'Thank you for using Green KSA website and this is your coupon:\n[ 33KF-DGDF-AWJ7 ]',
            #     'nanejoker7@gmail.com',
            #     ['a.aboassoud@gmail.com'],
            #     fail_silently=False,
            # )
            return Response({"msg":"Your purchase completed successfully"},status=status.HTTP_202_ACCEPTED)