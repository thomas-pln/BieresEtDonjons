from django.urls import path
from .views import DrinkList
from django.conf import settings
from django.conf.urls.static import static

app_name = 'menu'
urlpatterns = [
    path('', DrinkList.as_view(), name='menu'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)