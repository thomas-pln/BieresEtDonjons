# Generated by Django 5.0.6 on 2024-06-05 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('games', '0005_alter_game_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='photo',
            field=models.ImageField(default='game_photos/default.png', upload_to='game_photos/'),
        ),
    ]
