from django.urls import path
from . import views


urlpatterns = [
    path('add',views.add_coupons,name='add_coupons'),
    path('buy/<coupons_id>',views.buy_coupons,name='buy_coupons'),
]