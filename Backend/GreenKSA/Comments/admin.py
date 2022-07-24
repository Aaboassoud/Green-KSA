from django.contrib import admin
from .models import Comment

class CommentAdmin(admin.ModelAdmin):
    '''
                    Admin interface
    This class to customize the admin interface by Comment model
    '''

    list_display = ('user','post','comment')
    


admin.site.register(Comment, CommentAdmin)