# Generated by Django 5.0.6 on 2024-06-06 12:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('games', '0008_alter_game_description_alter_game_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='description',
            field=models.TextField(max_length=1000),
        ),
    ]