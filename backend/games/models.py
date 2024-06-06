from django.db import models


class Game(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=1000)
    photo = models.ImageField(upload_to='game_photos/', default='game_photos/default.png')
    url_editor = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.name
