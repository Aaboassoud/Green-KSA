from rest_framework import serializers
from django.contrib.auth.models import User
from  .models import Coupons

class CouponsSerializer(serializers.ModelSerializer):
    
    '''
    A serializer for the Coupons model that 
    '''

    class Meta:
        model = Coupons
        fields = "__all__"



class CouponsSerializerView(serializers.ModelSerializer):
    
    '''
    A serializer for the Coupons model that 
    '''

    class Meta:
        model = Coupons
        fields = "__all__"