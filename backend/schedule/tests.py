from django.test import TestCase
from .models import Event, Registration
from datetime import datetime
from account.models import User
from django.contrib.auth import get_user_model
from django.utils import timezone

class EventModelTestCase(TestCase):

# Test de création d'une instance de la classe Event
    def test_create_event(self):

        event = Event.objects.create(
            title="Evènement test",
            description="Super évènement",
            start_date= datetime.now(),
            end_date=datetime.now()
        )
        self.assertEqual(event.title, "Evènement test")
        self.assertEqual(event.description, "Super évènement")

#Test méthode string de Event
    def test_str_method(self):
        event = Event.objects.create(
            title="Evènement test",
            description="Super évènement",
            start_date=datetime.now(),
            end_date=datetime.now()
        )
        self.assertEqual(str(event), "Evènement test")

class RegistrationModelTestCase(TestCase):

#Création d'un user test
    def setUp(self):
        self.user = get_user_model().objects.create_user(
            email='test@test.fr',
            name='usertest',
            password='usertest'
        )
        self.event = Event.objects.create(
            title="Evènement Test",
            description="Super évènement",
            start_date=timezone.now(),
            end_date=timezone.now()
        )

# Test de création d'une instance de la classe Registration
    def test_create_registration(self):
        registration = Registration.objects.create(
            event=self.event,
            person=self.user
        )
        self.assertEqual(registration.event, self.event)
        self.assertEqual(registration.person, self.user)