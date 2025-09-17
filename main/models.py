import uuid
from django.db import models
from django.contrib.auth.models import User

class Product(models.Model): 
    CATEGORY_CHOICES = [
        ('jersey', 'Jersey'),
        ('sepatu', 'Sepatu'),
        ('bola', 'Bola'),
        ('aksesoris', 'Aksesoris'),
        ('merchandise', 'Merchandise'),
    ]  
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=255)
    price = models.PositiveIntegerField(default=0)
    description = models.TextField()
    thumbnail = models.URLField(blank=True, null=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='jersey')
    is_featured = models.BooleanField(default=False)
    stock = models.PositiveIntegerField(default=0)
    rating = models.FloatField(default=0.0)
    size = models.CharField(max_length=10, blank=True, null=True)
    brand = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name