from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.decorators import api_view , authentication_classes
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import AccessToken
from .serializer import UserRegisterSerializer, UserInfoSerializerView , ProfileSerializer, UserInfoUpdateSerializer, ProfileUpdateSerializer
from  .models import Profile 


@api_view(['POST'])
def register_user(request: Request):
    '''
    This function to Register a new user.
    '''
    RegisterUser = UserRegisterSerializer(data=request.data)
    if RegisterUser.is_valid():
        new_user = User.objects.create_user(**RegisterUser.data)
        new_user.save()
        return Response({"msg": "created user successfuly"})
    else:
        print(RegisterUser.errors)
        return Response({"msg": "Couldn't create suer"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login_user(request : Request):
    '''
    This function to Login a user.
    '''
    if 'username' in request.data and 'password' in request.data:
        user = authenticate(request, username=request.data['username'], password=request.data['password'])
        if user is not None:
            token = AccessToken.for_user(user)
            responseData = {
                "msg" : "Your token is ready",
                "token" : str(token)
            }
            return Response(responseData)
        else:
            return Response({"msg" : "Please provide your username & password"}, status=status.HTTP_401_UNAUTHORIZED)

    return Response({"msg": "You have something errors on username or password "} , status=status.HTTP_404_NOT_FOUND)



@api_view(['PUT'])
@authentication_classes([JWTAuthentication])
def edit_personal_info(request: Request):
    '''
     Function to  Edit the personal information

    '''

    user:User = request.user
    if not user.is_authenticated:
        return Response({"msg" : "Not Allowed , You must be Logged in "}, status=status.HTTP_401_UNAUTHORIZED)

    user_info = User.objects.get(id=user.id)
    profile =  Profile.objects.get(user=user.id)
    request.data.update(user=user.id)
    updated_info = UserInfoUpdateSerializer(instance=user_info, data=request.data)
    updated_profile = ProfileUpdateSerializer(instance=profile , data=request.data)
    if updated_info.is_valid() and updated_profile.is_valid():
        updated_info.save()
        updated_profile.save()
        responseData = {
            "msg" : "Updated successefully"
        }

        return Response(responseData)
    else:
        print(updated_info.errors)
        print(updated_profile.errors)
        return Response({"msg" : "Can not update"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@authentication_classes([JWTAuthentication])
def personal_info(request: Request):
    '''
    Function to show personal information

    '''

    user:User = request.user
    if not user.is_authenticated:
        return Response({"msg" : "Not Allowed , You must be Logged in"}, status=status.HTTP_401_UNAUTHORIZED)

    user_info = User.objects.get(id=request.user.id)
    
    responseData = {
        "msg" : "Personal Information",
        "Information" : UserInfoSerializerView(instance=user_info).data
    }

    return Response(responseData)


@api_view(['PUT'])
def update_profile(request : Request):
    '''
    Function to update the usre  profile

    '''
    user_serializer =UserRegisterSerializer(data=request.user)
    profile_serializer = ProfileSerializer(data=request.user.profile)
    if  user_serializer.is_valid() and profile_serializer.is_valid():
         user_serializer.save()
         profile_serializer.save()
         responseData = {
            "msg" : "'Your profile was successfully updated!'",
         }
         return Response(responseData)
    else :
         return Response({"msg" : "Can not update , you have something errors "}, status=status.HTTP_400_BAD_REQUEST)
