# Generated by Django 4.0.6 on 2022-07-25 08:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Accounts', '0003_alter_profile_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='phone',
            field=models.DecimalField(decimal_places=0, default=0, max_digits=10),
        ),
    ]
