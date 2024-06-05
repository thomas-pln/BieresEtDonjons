from django.test import TestCase
from django.core.files.uploadedfile import SimpleUploadedFile
from .models import Game

class GameModelTest(TestCase):

#Test de création d'une instance de la classe Game
    def test_create_game(self):

        game = Game.objects.create(
            name="Jeu Test",
            description="Un jeu super",
            photo=SimpleUploadedFile(name='image_test.png', content=b'', content_type='image/png'),
            url_editor="http://exemple.fr"
        )
        self.assertEqual(game.name, "Jeu Test")
        self.assertEqual(game.description, "Un jeu super")
        self.assertEqual(game.url_editor, "http://exemple.fr")
        self.assertTrue(game.photo)

#Test de la photo par défaut
    def test_default_photo(self):

        game = Game.objects.create(
            name="Jeu sans photo",
            description="Un jeu super"
        )
        self.assertEqual(game.photo.name, "game_photos/default.png")

#Test méthode string de Game
    def test_str_method(self):

        game = Game.objects.create(
            name="Jeu Test",
            description="Un jeu super"
        )
        self.assertEqual(str(game), "Jeu Test")