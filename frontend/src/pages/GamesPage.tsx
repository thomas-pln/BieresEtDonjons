import React, { useEffect, useState } from 'react';
import { getGames } from '../provider/b&dProvider.ts';
import { GameList, Game } from '../interfaces/games';
import { GameCard } from '../components/games/GameCard';
import { Grid, Typography, Box, Container, Paper } from '@mui/material';

const GamesPage: React.FC = () => {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        getGames()
            .then((gameList: GameList) => {
                setGames(gameList.results);
            })
            .catch((error) => {
                console.error("Error fetching data from the API:", error);
            });

    }, []);

    return (
        <Container>
            <Box sx={{ py: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Nos Jeux Disponibles
                </Typography>
                <Typography variant="body1"  paragraph>
                    Découvrez notre sélection de jeux. Cliquez sur un jeu pour en savoir plus.
                </Typography>
                <Grid container spacing={3}>
                    {games.map((game: Game) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={game.id}>
                            <Paper elevation={3} sx={{ height: '100%' }}>
                                <GameCard game={game} />
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default GamesPage;
