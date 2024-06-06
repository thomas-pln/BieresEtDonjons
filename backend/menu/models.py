from django.db import models

# Create your models here.
class Drink(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    price = models.IntegerField(default=0)
    photo = models.ImageField(upload_to='drink_photos/', default='drink_photos/default.png')
    is_soft = models.BooleanField(default=0)

    def __str__(self):
        return self.name