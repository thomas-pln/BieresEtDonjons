import {Game} from "../../interfaces/games.ts";
import {Card, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

export const GameCard: React.FC<{ game: Game }> = ({game}) => {

    const handleClick = () => {
        window.open(game.url_editor, "_blank");
    }

    return (
        <Card sx={{maxWidth: 345}} onClick={handleClick}>
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
        </Card>
    );
}