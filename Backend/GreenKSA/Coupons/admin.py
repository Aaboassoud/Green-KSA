from django.contrib import admin
from  .models import Coupons 

class CouponsAdmin(admin.ModelAdmin):
    '''
                    Admin interface
    This class to customize the admin interface by Comment model
    '''

    list_display = ('title','start_at','end_at' , 'points')

admin.site.register(Coupons, CouponsAdmin)

