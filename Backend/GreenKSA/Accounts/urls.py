from django.urls import path
from . import views

urlpatterns = [
    path("register", views.register_user, name="register_user"),
    path("login", views.login_user, name="login_user"),
    path("updateInformation",views.edit_personal_info, name="update_information"),
    path("user/info/<user_id>",views.user_info, name="user_info"),
    path("personalInformation",views.personal_info, name="personal_information"),
    path("updateProfile",views.update_profile, name="profile"),
]