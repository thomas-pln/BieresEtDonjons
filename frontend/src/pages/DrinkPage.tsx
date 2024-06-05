import React, { useEffect, useState } from 'react';
import {getDrinks} from '../provider/b&dProvider.ts';
import { Grid, Typography, Box, Container, Paper } from '@mui/material';
import {Drink, DrinkList} from "../interfaces/drinks.ts";
import {DrinkCard} from "../components/drinks/DrinkCard.tsx";

const DrinkPage: React.FC = () => {
    const [drinks, setDrinks] = useState<Drink[]>([]);

    useEffect(() => {
        getDrinks()
            .then((drinkList: DrinkList) => {
                setDrinks(drinkList.results);
            })
            .catch((error) => {
                console.error("Error fetching data from the API:", error);
            });

    }, []);

    return (
        <Container>
            <Box sx={{ py: 4 }}>
                <Typography variant="h4" gutterBottom>
                    La Carte des Breuvages 🍻
                </Typography>
                <Typography variant="body1" paragraph >
                    Aventuriers, découvrez notre carte des breuvages. Du classique au plus exotique, il y en a pour tous les goûts. Coktails, bières, vins, softs, et bien plus encore. Venez savourer notre sélection soigneusement préparée pour satisfaire toutes vos envies.
                </Typography>
                <Typography variant="body1" paragraph>
                    Que vous soyez amateur de bières artisanales, de vins raffinés ou de cocktails élaborés, notre menu est fait pour vous. Nos boissons sont sélectionnées pour leur qualité et leur originalité. Prenez place et laissez-vous envoûter par nos recommandations.
                </Typography>
                <Typography variant="body1" paragraph>
                    Nous proposons également une variété de boissons sans alcool, y compris des mocktails, des jus frais et des sodas artisanaux. Chez Bières & Donjon, nous croyons que chaque visite doit être une expérience mémorable, et cela commence par une boisson exceptionnelle.
                </Typography>
                <Grid container spacing={3}>
                    {drinks.map((drink: Drink) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={drink.id}>
                            <Paper elevation={3} sx={{ height: '100%' }}>
                                <DrinkCard drink={drink} />
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default DrinkPage;
