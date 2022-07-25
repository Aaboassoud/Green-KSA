from unicodedata import name
from django.urls import path
from . import views


urlpatterns = [
    path('add/<post_id>' , views.add_comment , name='addComment'),
    path('all/<post_id>',views.reviews,name='allComment'),
    path('delete/<comment_id>',views.delete_comment,name='deleteComment'),
]