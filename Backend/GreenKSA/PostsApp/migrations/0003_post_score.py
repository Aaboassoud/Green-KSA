# Generated by Django 4.0.6 on 2022-07-25 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PostsApp', '0002_remove_post_rating_post_is_rated'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='score',
            field=models.IntegerField(blank=True, default=1),
            preserve_default=False,
        ),
    ]