import React, { useState } from "react";
import NewGameForm from "./NewGameForm";
import GameInProgress from "./GameInProgress";
import GameSummary from "./GameSummary";

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


    return (
        <div>
            <h1>Live Football World Cup Scoreboard</h1>
            <NewGameForm onStartGame={handleStartGame} />
            {games.map((game) => (
                <GameInProgress
                    key={game.id}
                    game={game}
                    onUpdateScore={handleUpdateScore}
                    onFinishGame={handleFinishGame}
                />
            ))}
            <GameSummary games={games} />
        </div>
    );
};

export default Scoreboard;
