from rest_framework import serializers
from  .models import Coupons

class CouponsSerializer(serializers.ModelSerializer):
    
    '''
    A serializer used to  create Coupons . 
    '''

    class Meta:
        model = Coupons
        fields = "__all__"



class CouponsSerializerView(serializers.ModelSerializer):
    
    '''
    A serializer for the view Coupons model .
    '''

    class Meta:
        model = Coupons
        fields = "__all__"