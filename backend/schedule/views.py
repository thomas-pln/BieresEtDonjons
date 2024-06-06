from django.shortcuts import get_object_or_404
from django.utils.dateparse import parse_datetime
from drf_yasg.utils import swagger_auto_schema
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Event, Registration
from .serializers import EventSerializer, RegistrationSerializer


# Endpoint pour lister tous les événements
class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


# Endpoint pour lister les événements à partir d'un ID
@api_view(['GET'])
def get_event_by_id(request, id):
    event = get_object_or_404(Event, id=id)
    serializer = EventSerializer(event)
    return Response(serializer.data)


# Endpoint pour lister les événements entre une date de début et une date de fin
@api_view(['GET'])
def get_events_between_dates(request):
    start_date_str = request.query_params.get('start_date')
    end_date_str = request.query_params.get('end_date')

    if not start_date_str or not end_date_str:
        return Response({"error": "start_date and end_date are required."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        start_date = parse_datetime(start_date_str)
        end_date = parse_datetime(end_date_str)
    except ValueError:
        return Response({"error": "Invalid date format. Use ISO 8601 format."}, status=status.HTTP_400_BAD_REQUEST)

    if not start_date or not end_date:
        return Response({"error": "Invalid date format. Use ISO 8601 format."}, status=status.HTTP_400_BAD_REQUEST)

    events = Event.objects.filter(start_date__gte=start_date, end_date__lte=end_date)
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)


class RegistrationCreateView(APIView):
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(request_body=RegistrationSerializer,
                         responses={status.HTTP_201_CREATED: RegistrationSerializer()})
    def post(self, request, event_id, format=None):
        event = Event.objects.get(id=event_id)
        user = request.user
        registration = Registration(event=event, person=user)
        registration.save()
        serializer = RegistrationSerializer(registration)
        return Response({"msg": "Successfull"},status=status.HTTP_201_CREATED)
