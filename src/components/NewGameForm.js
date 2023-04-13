import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const NewGameForm = ({ onStartGame }) => {
    const [homeTeam, setHomeTeam] = useState("");
    const [awayTeam, setAwayTeam] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedHomeTeam = homeTeam.trim();
        const trimmedAwayTeam = awayTeam.trim();

        if (trimmedHomeTeam === "" || trimmedAwayTeam === "") {
            alert("Fields cannot be empty");
            return;
        }

        onStartGame(trimmedHomeTeam, trimmedAwayTeam);
        setHomeTeam("");
        setAwayTeam("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box mt={4} mb={2}>
                <Typography variant="h4" align="center" gutterBottom>
                    New Game
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Home Team"
                        value={homeTeam}
                        onChange={(e) => setHomeTeam(e.target.value)}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Away Team"
                        value={awayTeam}
                        onChange={(e) => setAwayTeam(e.target.value)}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="center">
                        <Button variant="contained" color="primary" type="submit">
                            Start Game
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </form>
    );
};

export default NewGameForm;
