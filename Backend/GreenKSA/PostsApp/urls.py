from django.urls import path
from . import views

urlpatterns = [
    path('posts/add',views.add_post,name='add'),
    path('posts/all',views.all_post,name='all'),
    path('posts/top5/',views.top_5,name='top5'),
    path('posts/edit/<post_id>',views.edit_post,name='edit'),
    path('posts/user/<user_id>',views.user_posts,name='user_posts'),
    path('posts/delete/<post_id>',views.delete_post,name='delete'),
]