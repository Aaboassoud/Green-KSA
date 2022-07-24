from django.contrib import admin
from .models import Post

class PostAdmin(admin.ModelAdmin):
    '''
                    Admin interface
    This class to customize the admin interface by Post model
    '''

    list_display = ('id','user','title', 'city','type')
    list_filter = ('city','type','created','user')
    search_fields = ('title','user','city','type')
    date_hierarchy = 'created'


admin.site.register(Post, PostAdmin)