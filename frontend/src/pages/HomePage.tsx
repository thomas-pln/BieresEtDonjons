import React, {useEffect, useState} from 'react';
import {Typography, Container, Grid, Box, CircularProgress, Card, CardMedia, CardContent} from '@mui/material';
import {styled} from '@mui/system';
import {getRandomCocktail} from "../provider/thecocktaildbProvider.ts";
import {RandomDrink} from "../interfaces/thecoktaildb.ts";

const HomePage: React.FC = () => {
    const [cocktails, setCocktails] = useState<RandomDrink[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() =>{
        const fetchData = async () => {
            const tmp: RandomDrink[] = [];
            for(let i = 0; i < 3; i++){
                const response = await getRandomCocktail();
                tmp.push(response);
            }
            setCocktails(tmp);
            setLoading(false);
        }
        fetchData()
    }, [])

    // @ts-ignore
    return (
        <MainContainer>
            <HeroSection>
                <HeroText variant="h2">Bienvenue chez Bières & Donjon</HeroText>
                <SubText variant="h5">Le lieu idéal pour se détendre et s'amuser entre amis</SubText>
            </HeroSection>
            <Container>
                <Section id="about">
                    <Typography variant="h4">À Propos</Typography>
                    <Typography variant="body1">
                        Chez Bières & Donjon, nous offrons une large sélection de jeux de société, des bières
                        artisanales et une ambiance conviviale.
                        Que vous soyez un joueur occasionnel ou un passionné, notre bar est le lieu parfait pour passer
                        un bon moment.
                    </Typography>
                </Section>
                <Section id="features">
                    <Typography variant="h4">Nos catégories de Jeux</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="body1">Jeux de société classiques</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="body1">Jeux de cartes</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="body1">Jeux de rôle</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="body1">Et bien plus encore !</Typography>
                        </Grid>
                    </Grid>
                </Section>
                <Section id="random-cocktails">
                    <Typography variant="h4">Aperçu de notre carte 😉 </Typography>
                    {loading ? (
                        <CircularProgress />
                    ) : (
                        <Grid container spacing={2}>
                            {cocktails.map((cocktail, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card style={{borderRadius: 15}}>
                                        <CardMedia
                                            component="img"
                                            image={`${cocktail.strDrinkThumb}/preview`}
                                            alt={cocktail.strDrink}

                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {cocktail.strDrink}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Section>
            </Container>
        </MainContainer>
    );
};

export default HomePage;

// Styles
const MainContainer = styled('div')({
    fontFamily: 'Arial, sans-serif',
});


const HeroSection = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '100px 20px',
    backgroundImage: 'url("/path/to/background.jpg")',
    backgroundSize: 'cover',
    color: '#ecf0f1',
});

const HeroText = styled(Typography)({
    fontSize: '3rem',
    marginBottom: '20px',
});

const SubText = styled(Typography)({
    fontSize: '1.5rem',
    marginBottom: '40px',
});

const Section = styled('section')({
    padding: '50px 0',
    textAlign: 'center',
});
