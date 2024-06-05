from django.test import TestCase
from .models import Drink

class DrinkModelTestCase(TestCase):

# Test de création d'une instance de la classe Drink
    def test_create_drink(self):

        drink = Drink.objects.create(
            name="Boisson Test",
            price=5,
            is_soft=True
        )
        self.assertEqual(drink.name, "Boisson Test")
        self.assertEqual(drink.price, 5)
        self.assertTrue(drink.is_soft)

#Test de la photo par défaut
    def test_default_photo(self):
        drink = Drink.objects.create(
            name="Boisson Test",
            price=5,
            is_soft=True
        )
        self.assertEqual(drink.photo.name, "drink_photos/default.png")

#Test méthode string de Drink
    def test_str_method(self):
        drink = Drink.objects.create(
            name="Boisson Test",
            price=5,
            is_soft=True
        )
        self.assertEqual(str(drink), "Boisson Test")
