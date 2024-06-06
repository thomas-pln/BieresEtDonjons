from django.db import models

import account.models


# Create your models here.
class Event(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)
    description = models.TextField()
    start_date = models.DateTimeField(auto_now=False, auto_now_add=False, verbose_name='Date et heure de début')
    end_date = models.DateTimeField(auto_now=False, auto_now_add=False, verbose_name='Date et heure de fin')

    def __str__(self):
        return self.title


class Registration(models.Model):
    id = models.AutoField(primary_key=True)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    person = models.ForeignKey(account.models.User, on_delete=models.CASCADE)
