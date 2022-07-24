from django.urls import path
from . import views

urlpatterns = [
    path('/add/<post_id>',views.add_rating,name='add_rating'),
    path('/info/<post_id>',views.rating,name='rating'),
    path('/delete/<rating_id>',views.delete_rating,name='delete_rating'),
    # path('/edit',views.edit_post,name='edit'),
]