# Generated by Django 4.0.6 on 2022-07-26 17:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PostsApp', '0006_alter_post_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='city',
            field=models.CharField(blank=True, choices=[('مكة المكرمة', 'مكة المكرمة'), ('الرياض', 'الرياض'), ('الشرقية', 'الشرقية'), ('عسير', 'عسير'), ('المدينة المنورة', 'المدينة المنورة'), ('جازان', 'جازان'), ('القصيم', 'القصيم'), ('تبوك', 'تبوك'), ('حائل', 'حائل'), ('نجران', 'نجران'), ('الجوف', 'الجوف'), ('الباحة', 'الباحة'), ('الحدود الشمالية', 'الحدود الشمالية')], max_length=64),
        ),
    ]
