import React, { useState } from "react";
import NewGameForm from "./NewGameForm";
import GameInProgress from "./GameInProgress";
import GameSummary from "./GameSummary";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Scoreboard = () => {
    const [games, setGames] = useState([]);

    const handleStartGame = (homeTeam, awayTeam) => {
        const newGame = {
            id: Date.now(),
            homeTeam,
            awayTeam,
            homeScore: 0,
            awayScore: 0,
            startTime: new Date(),
        };
        setGames((prevGames) => [...prevGames, newGame]);
    };

    const handleUpdateScore = (gameId, homeScore, awayScore) => {
        setGames((prevGames) =>
            prevGames.map((game) =>
                game.id === gameId ? { ...game, homeScore, awayScore } : game
            )
        );
    };

    const handleFinishGame = (gameId) => {
        setGames((prevGames) => prevGames.filter((game) => game.id !== gameId));
    };

    const renderGamesInProgress = () => {
        return games.map((game) => {
            if (!game) return null;
            return (
                <GameInProgress
                    key={game.id}
                    game={game}
                    onUpdateScore={handleUpdateScore}
                    onFinishGame={handleFinishGame}
                />
            );
        });
    };

    return (
        <div>
            <Box my={4}>
                <Typography variant="h2" align="center" gutterBottom>
                    Live Football World Cup Scoreboard
                </Typography>
            </Box>
            <NewGameForm onStartGame={handleStartGame} />
            <Box my={4}>
                <Typography variant="h4" align="center" gutterBottom>
                    Games in Progress
                </Typography>
                {renderGamesInProgress()}
            </Box>
            <GameSummary games={games} />
        </div>
    );
};

export default Scoreboard;
