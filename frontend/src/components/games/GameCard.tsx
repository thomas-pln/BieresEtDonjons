import {Game} from "../../interfaces/games.ts";
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

export const GameCard: React.FC<{ game: Game }> = ({game}) => {

    return (
        <Card sx={{maxWidth: 345}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={game.photo}
                    alt={game.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {game.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {game.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}