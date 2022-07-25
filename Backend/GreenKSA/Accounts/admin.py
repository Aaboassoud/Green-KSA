from django.contrib import admin
from  .models import Profile 

class ProfileAdmin(admin.ModelAdmin):
    '''
                    Admin interface
    This class to customize the admin interface by Comment model
    '''

    list_display = ('user','phone','scorePoints' ,'city')

admin.site.register(Profile, ProfileAdmin)

