from django.shortcuts import render
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.request import Request
from rest_framework import status
from .models import Coupons
from .serializer import CouponsSerializer

# Create your views here.

@api_view(['POST'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def add_coupons(request: Request):
    ''' description
        This function to add a new coupons to the database and must be authenticated and has perm.
    '''
    user:User = request.user

    if not user.is_authenticatedor or not request.user.has_perm('Coupons.add_coupons'):
        return Response({"msg" : "Not Allowed"}, status=status.HTTP_401_UNAUTHORIZED)

    
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
