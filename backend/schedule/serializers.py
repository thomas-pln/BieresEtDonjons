from rest_framework import serializers
from .models import Event, Registration

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'title', 'description', 'start_date', 'end_date']

class RegistrationSerializer(serializers.Serializer):
    class Meta:
        model = Registration
        fields = ['id', 'event', 'person']