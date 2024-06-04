from django.urls import path
from .views import GameList
from django.conf import settings
from django.conf.urls.static import static

app_name = 'games'
urlpatterns = [
    path('', GameList.as_view(), name='game-list'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)