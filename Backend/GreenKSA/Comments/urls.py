from unicodedata import name
from django.urls import path
from . import views


urlpatterns = [
    path('comment' , views.add_comment , name='comment')
]