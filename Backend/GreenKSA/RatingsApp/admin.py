from django.contrib import admin
from .models import Rating


class RatingAdmin(admin.ModelAdmin):
    '''
                Admin interface
    This class to customize the admin interface by Rating model
    '''
    list_display = ('id','post', 'user', 'score_points')
    list_filter = ('user', 'score_points')
    date_hierarchy = 'created'

admin.site.register(Rating, RatingAdmin)