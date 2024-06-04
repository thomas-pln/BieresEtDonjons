from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import Game
from .serializers import GameSerializer
from rest_framework.parsers import MultiPartParser, FormParser

# Create your views here.
class GameList(generics.ListCreateAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    parser_classes = (MultiPartParser, FormParser)

