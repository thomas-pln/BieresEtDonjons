# Generated by Django 5.0.6 on 2024-06-05 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0004_alter_drink_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='drink',
            name='photo',
            field=models.ImageField(default='drink_photos/default.png', upload_to='drink_photos/'),
        ),
    ]