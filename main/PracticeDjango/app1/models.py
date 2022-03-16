from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Place(models.Model):
    name = models.CharField(max_length=50)
    location = models.CharField(max_length=100)
    description = models.CharField(max_length=10000, default='')
    likes = models.IntegerField(default=0)
    postedBy = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name
