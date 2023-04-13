import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const GameInProgress = ({ game, onUpdateScore, onFinishGame }) => {
    const [homeScore, setHomeScore] = useState(game.homeScore);
    const [awayScore, setAwayScore] = useState(game.awayScore);

    useEffect(() => {
        onUpdateScore(game.id, parseInt(homeScore), parseInt(awayScore));
    }, [homeScore, awayScore, game.id, onUpdateScore]);

    return (
        <Card sx={{ mb: 2, p: 1, display: "flex", alignItems: "flex-start" }}>
            <Box flexGrow={1}>
                <CardContent>
                    <Typography variant="h6" align="center" gutterBottom>
                        {game.homeTeam} vs {game.awayTeam}
                    </Typography>
                    <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
                        <TextField
                            label="Home Score"
                            variant="outlined"
                            size="small"
                            type="number"
                            value={homeScore}
                            onChange={(e) => setHomeScore(e.target.value)}
                        />
                        <TextField
                            label="Away Score"
                            variant="outlined"
                            size="small"
                            type="number"
                            value={awayScore}
                            onChange={(e) => setAwayScore(e.target.value)}
                        />
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => onFinishGame(game.id)}
                            size="large"
                        >
                            Finish Game
                        </Button>
                    </Box>
                </CardContent>
            </Box>
        </Card>
    );
};

export default GameInProgress;
