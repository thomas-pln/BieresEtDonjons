DELETE
FROM games_game;
DELETE
FROM menu_drink;
DELETE
FROM schedule_event;
DELETE
FROM schedule_registration;

INSERT INTO games_game (id, name, description, photo, url_editor)
VALUES (1, 'The Witcher 3',
        'The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by CD Projekt. Based on The Witcher series of fantasy novels by Polish author Andrzej Sapkowski, it is the sequel to the 2011 game The Witcher 2: Assassins of Kings. Played in an open world with a third-person perspective, players control protagonist Geralt of Rivia, a monster hunter known as a witcher, who is looking for his missing adopted daughter on the run from the Wild Hunt: an otherworldly force determined to capture and use her powers.',
        'game_photos/default.png', 'https://www.ludold.com/fc/the-witcher-old-world-deluxe-edition-fr.html'),
       (2, 'Dungeons & Dragons',
        'Dungeons & Dragons (D&D) is a fantasy tabletop role-playing game (RPG) originally designed by Gary Gygax and Dave Arneson. It was first published in 1974 by Tactical Studies Rules, Inc. (TSR). The game has been published by Wizards of the Coast (now a subsidiary of Hasbro) since 1997. It was derived from miniature wargames, with a variation of the 1971 game Chainmail serving as the initial rule system. D&D s publication is commonly recognized as the beginning of modern role-playing games and the role-playing game industry.',
        'game_photos/default.png', 'https://www.dungeonsanddragons.com'),
       (3, 'Catan',
        'Catan, previously known as The Settlers of Catan, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag (Kosmos) as Die Siedler von Catan. Players assume the roles of settlers, each attempting to build and develop holdings while trading and acquiring resources. Players gain points as their settlements grow; the first to reach a set number of points, typically 10, wins.',
        'game_photos/default.png', 'https://www.catan.com'),
       (4, 'Gloomhaven',
        'Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world. Players must work together out of necessity to clear out menacing dungeons and forgotten ruins. In the process, they will enhance their abilities with experience and loot, discover new locations to explore and plunder, and make decisions on how the story should unfold.',
        'game_photos/default.png', 'https://www.cephalofair.com/gloomhaven'),
       (5, 'Pandemic',
        'In Pandemic, several virulent diseases have broken out simultaneously all over the world! The players are disease-fighting specialists whose mission is to treat disease hotspots while researching cures for each of four plagues before they get out of hand. The game is unlike most other games on the market, as the game is cooperative in that the players all win or lose together. Only through teamwork will they have a chance to find cures before it s too late.',
        'game_photos/default.png', 'https://www.zmangames.com/en/games/pandemic'),
       (6, 'Terraforming Mars',
        'In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level, and the ocean coverage until the environment is habitable. In Terraforming Mars, you play one of those corporations and work together in the terraforming process, but compete for getting victory points that are awarded not only for your contribution to the terraforming, but also for advancing human infrastructure throughout the solar system, and doing other commendable things.',
        'game_photos/default.png', 'https://www.fryxgames.se/games/terraforming-mars'),
       (7, '7 Wonders',
        'You are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes, and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times.',
        'game_photos/default.png', 'https://www.7wonders.net'),
       (8, 'Azul',
        'Azul invites you, a tile laying artist, to embellish the walls of the Royal Palace of Evora. Introduced by the Moors, azulejos (originally white and blue ceramic tiles) were fully embraced by the Portuguese when their king Manuel I, on a visit to the Alhambra palace in Southern Spain, was mesmerized by the stunning beauty of the Moorish decorative tiles. The king, awestruck by the interior beauty of the Alhambra, immediately ordered that his own palace in Portugal be decorated with similar wall tiles.',
        'game_photos/default.png', 'https://www.nextmovegames.com/azul'),
       (9, 'Codenames',
        'Two rival spymasters know the secret identities of 25 agents. Their teammates know the agents only by their codenames. The teams compete to see who can make contact with all of their agents first. Spymasters give one-word clues that can point to multiple words on the board. Their teammates try to guess words of the right color while avoiding those that belong to the opposing team. And everyone wants to avoid the assassin.',
        'game_photos/default.png', 'https://www.codenamesgame.com'),
       (10, 'King of Tokyo',
        'In King of Tokyo, you play mutant monsters, gigantic robots, and strange aliens all of whom are destroying Tokyo and whacking each other in order to become the one and only King of Tokyo. At the start of each turn, you roll six dice, which show the following six symbols: 1, 2, or 3 Victory Points, Energy, Heal, and Attack. Over three successive throws, choose whether to keep or discard each die in order to win victory points, gain energy, restore health, or attack other players into understanding that Tokyo is YOUR territory.',
        'game_photos/default.png', 'https://www.iello.fr/fr/king-of-tokyo'),
       (11, 'Wingspan',
        'Wingspan is a competitive, medium-weight, card-driven, engine-building board game from Stonemaier Games. You are bird enthusiasts researchers, bird watchers, ornithologists, and collectors seeking to discover and attract the best birds to your network of wildlife preserves. Each bird extends a chain of powerful combinations in one of your habitats (actions). These habitats focus on several key aspects of growth:',
        'game_photos/default.png', 'https://www.stonemaiergames.com/games/wingspan'),
       (12, 'Ticket to Ride',
        'With elegantly simple gameplay, Ticket to Ride can be learned in under 15 minutes. Players collect train cards, claim routes on the map, and try to connect the cities shown on their tickets to achieve victory. The original edition of Ticket to Ride is a cross-country train adventure where players collect train cards that enable them to claim railway routes connecting cities throughout North America.',
        'game_photos/default.png', 'https://www.daysofwonder.com/tickettoride/en/usa')
;

INSERT INTO menu_drink (name, price, photo, is_soft)
VALUES ('Coca-Cola', 2.5, 'drink_photos/default.png', true),
       ('Fanta', 2.5, 'drink_photos/default.png', true),
       ('Sprite', 2.5, 'drink_photos/default.png', true),
       ('Ice Tea', 2.5, 'drink_photos/default.png', true),
       ('Water', 2, 'drink_photos/default.png', true),
       ('Beer', 3.5, 'drink_photos/default.png', false),
       ('Wine', 4, 'drink_photos/default.png', false),
       ('Cocktail', 5, 'drink_photos/default.png', false),
       ('Whiskey', 6, 'drink_photos/default.png', false),
       ('Vodka', 6, 'drink_photos/default.png', false),
       ('Rum', 6, 'drink_photos/default.png', false),
       ('Gin', 6, 'drink_photos/default.png', false),
       ('Tequila', 6, 'drink_photos/default.png', false),
       ('Cognac', 6, 'drink_photos/default.png', false),
       ('Champagne', 7, 'drink_photos/default.png', false),
       ('Coffee', 2, 'drink_photos/default.png', true),
       ('Tea', 2, 'drink_photos/default.png', true),
       ('Hot Chocolate', 2, 'drink_photos/default.png', true)
;

INSERT INTO schedule_event (title, description, start_date, end_date)
VALUES
('Tournoi de Catan', 'Participez à notre tournoi de jeux de société et remportez des prix passionnants!', '2024-06-10 18:00:00', '2024-06-10 21:00:00'),
('Découverte du jeu Azul', 'Venez découvrir le jeu Azul et apprenez à y jouer avec nos experts.', '2024-06-11 17:00:00', '2024-06-11 19:00:00'),
('Démonstration de Magic: The Gathering', 'Assistez à une démonstration de Magic: The Gathering et améliorez vos compétences.', '2024-06-12 16:00:00', '2024-06-12 18:00:00'),
('Cocktail de bienvenue', 'Rejoignez-nous pour un cocktail de bienvenue et rencontrez d autres amateurs de jeux.', '2024-06-13 19:00:00', '2024-06-13 22:00:00'),
('Dégustation de bières artisanales', 'Dégustez une sélection de bières artisanales avec notre sommelier.', '2024-06-14 18:00:00', '2024-06-14 20:00:00'),
('Soirée jeux de société', 'Apportez vos jeux préférés et partagez une soirée ludique avec nous.', '2024-06-15 17:00:00', '2024-06-15 23:00:00'),
('Tournoi de Scrabble', 'Mesurez-vous aux autres joueurs lors de notre tournoi de Scrabble.', '2024-06-16 14:00:00', '2024-06-16 17:00:00'),
('Présentation du jeu Terraforming Mars', 'Découvrez les stratégies du jeu Terraforming Mars avec nos animateurs.', '2024-06-17 16:00:00', '2024-06-17 18:00:00'),
('Atelier de peinture de figurines', 'Apprenez à peindre vos figurines lors de notre atelier.', '2024-06-18 15:00:00', '2024-06-18 18:00:00'),
('Soirée cocktails et jeux', 'Profitez de cocktails spéciaux et jouez à des jeux sélectionnés par notre équipe.', '2024-06-19 20:00:00', '2024-06-19 23:00:00'),
('Tournoi de Carcassonne', 'Participez à notre tournoi de Carcassonne et montrez vos compétences en stratégie.', '2024-06-20 18:00:00', '2024-06-20 21:00:00'),
('Découverte du jeu Wingspan', 'Apprenez à jouer à Wingspan avec nos animateurs lors de cette soirée découverte.', '2024-06-21 17:00:00', '2024-06-21 19:00:00'),
('Démonstration de jeux de rôle', 'Assistez à une démonstration de jeux de rôle et découvrez des univers fascinants.', '2024-06-22 15:00:00', '2024-06-22 18:00:00'),
('Soirée cocktails et dégustation de fromages', 'Savourez une combinaison de cocktails et de fromages sélectionnés par notre sommelier.', '2024-06-23 20:00:00', '2024-06-23 23:00:00'),
('Tournoi de 7 Wonders', 'Rejoignez notre tournoi de 7 Wonders et tentez de remporter le titre de meilleur bâtisseur.', '2024-06-24 18:00:00', '2024-06-24 21:00:00'),
-- Juillet
('Soirée jeux de société', 'Apportez vos jeux préférés et partagez une soirée ludique avec nous.', '2024-07-15 17:00:00', '2024-07-15 23:00:00'),
('Tournoi de Scrabble', 'Mesurez-vous aux autres joueurs lors de notre tournoi de Scrabble.', '2024-07-16 14:00:00', '2024-07-16 17:00:00'),
('Présentation du jeu Terraforming Mars', 'Découvrez les stratégies du jeu Terraforming Mars avec nos animateurs.', '2024-07-17 16:00:00', '2024-07-17 18:00:00'),
('Atelier de peinture de figurines', 'Apprenez à peindre vos figurines lors de notre atelier.', '2024-07-18 15:00:00', '2024-07-18 18:00:00'),
('Soirée cocktails et jeux', 'Profitez de cocktails spéciaux et jouez à des jeux sélectionnés par notre équipe.', '2024-07-19 20:00:00', '2024-07-19 23:00:00'),
-- Août
('Tournoi de Carcassonne', 'Participez à notre tournoi de Carcassonne et montrez vos compétences en stratégie.', '2024-08-20 18:00:00', '2024-08-20 21:00:00'),
('Découverte du jeu Wingspan', 'Apprenez à jouer à Wingspan avec nos animateurs lors de cette soirée découverte.', '2024-08-21 17:00:00', '2024-08-21 19:00:00'),
('Démonstration de jeux de rôle', 'Assistez à une démonstration de jeux de rôle et découvrez des univers fascinants.', '2024-08-22 15:00:00', '2024-08-22 18:00:00'),
('Soirée cocktails et dégustation de fromages', 'Savourez une combinaison de cocktails et de fromages sélectionnés par notre sommelier.', '2024-08-23 20:00:00', '2024-08-23 23:00:00');