import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

const SoccerIcon = styled(SportsSoccerIcon)(({ theme }) => ({
    fontSize: "1.5rem",
    marginRight: theme.spacing(1),
}));

const GameSummary = ({ games }) => {
    const sortedGames = [...games].sort((a, b) => {
        const aTotalScore = a.homeScore + a.awayScore;
        const bTotalScore = b.homeScore + b.awayScore;

        if (aTotalScore === bTotalScore) {
            return a.startTime - b.startTime;
        }

        return bTotalScore - aTotalScore;
    });

    const renderGames = () => {
        return sortedGames.map((game, index) => {
            if (!game) return null;
            return (
                <Box key={game.id} mb={2}>
                    <Paper elevation={2} sx={{ p: 2, display: "flex", alignItems: "center" }}>
                        <SoccerIcon />
                        <Typography variant="h6">
                            {index + 1}. {game.homeTeam} {game.homeScore} - {game.awayTeam} {game.awayScore}
                        </Typography>
                    </Paper>
                </Box>
            );
        });
    };

    return (
        <div>
            <Box my={4}>
                <Typography variant="h4" align="center" gutterBottom>
                    Game Summary
                </Typography>
                {renderGames()}
            </Box>
        </div>
    );
};

export default GameSummary;
