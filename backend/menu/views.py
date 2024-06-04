from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import Drink
from .serializers import DrinkSerializer
from rest_framework.parsers import MultiPartParser, FormParser

# Create your views here.
class DrinkList(generics.ListCreateAPIView):
    queryset = Drink.objects.all()
    serializer_class = DrinkSerializer
    parser_classes = (MultiPartParser, FormParser)