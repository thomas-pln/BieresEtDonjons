from django.db import models

# Create your models here.
class Drink(models.Model):
    id = models.IntegerField(default=0,primary_key=True)
    name = models.CharField(max_length=30)
    price = models.IntegerField(default=0)
    photo = models.ImageField(upload_to='drink_photos/', default='default.jpg')
    is_soft = models.IntegerField(default=0)

    def __str__(self):
        return self.name