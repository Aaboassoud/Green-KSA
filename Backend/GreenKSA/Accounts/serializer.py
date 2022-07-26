
from rest_framework import serializers
from django.contrib.auth.models import User
from  .models import Profile 


class UserRegisterSerializer(serializers.ModelSerializer):
    
    '''
    A serializer for the User model that is registered as a user.
    '''

    class Meta:
        model = User
        fields = ['first_name' , 'last_name' , 'username', 'email', 'password']



class UserInfoSerializer(serializers.ModelSerializer):
    
    '''
    A serializer for the User model that is update info.
    '''

    class Meta:
        model = User
        fields = [ 'email','first_name', 'last_name' , 'password',]


class UserInfoUpdateSerializer(serializers.ModelSerializer):
    
    '''
    A serializer for the User model that is update info.
    '''

    class Meta:
        model = User
        fields = ['first_name', 'last_name']     

class ProfileSerializerView(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = [  'phone' , 'scorePoints' , 'city']


class UserInfoSerializerView(serializers.ModelSerializer):

    '''
    A serializer for the User model that is view info in page .
    '''
    profile = ProfileSerializerView()
    class Meta:
        model = User
        fields = ['username', 'email','first_name', 'last_name','id','date_joined','profile']

class UserSerializerView(serializers.ModelSerializer):

    '''
    A serializer for the User model that is view info in page .
    '''

    class Meta:
        model = User
        fields = ['username','first_name', 'last_name','id','date_joined','email']


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = [ 'phone' , 'scorePoints' , 'city']

class ProfileUpdateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Profile
        fields = [ 'phone' , 'scorePoints' , 'city']


class TopFiveSerializerView(serializers.ModelSerializer):
    user = UserSerializerView()
    class Meta:
        model = Profile
        fields = '__all__'