from unicodedata import name
from django.urls import path
from . import views


urlpatterns = [
    path('addComment/<post_id>' , views.add_comment , name='addComment'),
      path('allComment/<post_id>',views.reviews,name='allComment'),
       path('deleteComment/<comment_id>',views.delete_comment,name='deleteComment'),
]