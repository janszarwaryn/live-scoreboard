import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

const SoccerIcon = styled(SportsSoccerIcon)(({ theme }) => ({
    fontSize: "1.5rem",
    marginRight: theme.spacing(1),
}));

const TeamName = styled("span")(({ color, underline }) => ({
    fontWeight: "bold",
    fontSize: "1.5rem",
    textDecoration: underline ? "underline" : "none",
    color: color,
}));

const Score = styled("span")({
    fontSize: "1.5em",
    fontWeight: "bold",
});

const GameSummary = ({ games }) => {
    const sortedGames = [...games].sort((a, b) => {
        const aTotalScore = a.homeScore + a.awayScore;
        const bTotalScore = b.homeScore + b.awayScore;

        if (aTotalScore === bTotalScore) {
            return a.startTime - b.startTime;
        }

        return bTotalScore - aTotalScore;
    });

    const getTeamNameStyle = (homeScore, awayScore) => {
        if (homeScore > awayScore) {
            return { color: "green", textTransform: "capitalize", fontWeight: "bold" };
        } else if (homeScore < awayScore) {
            return { color: "red", textTransform: "capitalize", fontWeight: "light" };
        }
        return { color: "gray", textTransform: "capitalize", fontWeight: "medium" };
    };

    const renderGames = () => {
        return sortedGames.map((game, index) => {
            if (!game) return null;
            const homeTeamStyle = getTeamNameStyle(game.homeScore, game.awayScore);
            const awayTeamStyle = getTeamNameStyle(game.awayScore, game.homeScore);

            return (
                <Box key={game.id} mb={2} display="flex" alignItems="center">
                    <SoccerIcon />
                    <Typography variant="body1" display="inline">
                        {index + 1}. <TeamName {...homeTeamStyle}>{game.homeTeam}</TeamName>{" "}
                        <Score>{game.homeScore}</Score> -{" "}
                        <TeamName {...awayTeamStyle}>{game.awayTeam}</TeamName>{" "}
                        <Score>{game.awayScore}</Score>
                    </Typography>
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
