from django.db import models


class Game(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=255)
    photo = models.ImageField(upload_to='game_photos/', default='default.jpg')
    url_editor = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.name
