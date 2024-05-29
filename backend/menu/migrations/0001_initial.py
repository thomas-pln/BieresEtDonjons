# Generated by Django 5.0.6 on 2024-06-04 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Drink',
            fields=[
                ('id', models.IntegerField(default=0, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30)),
                ('price', models.IntegerField(default=0)),
                ('photo_path', models.CharField(max_length=255)),
                ('is_soft', models.IntegerField(default=0)),
            ],
        ),
    ]