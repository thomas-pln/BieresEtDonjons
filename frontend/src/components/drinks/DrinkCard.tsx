import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import {Drink} from "../../interfaces/drinks.ts";

export const DrinkCard: React.FC<{ drink: Drink }> = ({drink}) => {

    return (
        <Card sx={{maxWidth: 345}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={drink.photo}
                    alt={drink.name}
                />
                <CardContent>
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