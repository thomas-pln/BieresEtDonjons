import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { Drink } from "../../interfaces/drinks.ts";

export const DrinkCard: React.FC<{ drink: Drink }> = ({ drink }) => {

    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', maxWidth: { xs: 345, md: 500 } }}>
            <CardActionArea sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                    component="img"
                    sx={{ flex: 1, objectFit: 'cover', height: 'auto', width: '100%' }}
                    image={drink.photo}
                    alt={drink.name}
                />
                <CardContent sx={{ flex: 0 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {drink.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {drink.is_soft ? "Boisson sans alcool" : "Boisson alcoolisée"}
                        {" - " + drink.price + "€"}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
