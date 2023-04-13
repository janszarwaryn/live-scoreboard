import React from "react";

const GameInProgress = ({game, onUpdateScore, onFinishGame}) => {
    const handleUpdateScore = (homeScore, awayScore) => {
        onUpdateScore(game.id, homeScore, awayScore);
    };

    const handleFinishGame = () => {
        onFinishGame(game.id);
    };

    return (
        <div>
            <h2>
                {game.homeTeam} {game.homeScore} - {game.awayTeam} {game.awayScore}
            </h2>
            <button onClick={() => handleUpdateScore(game.homeScore + 1, game.awayScore)}>
                +1 Home Team
            </button>
            <button onClick={() => handleUpdateScore(game.homeScore, game.awayScore + 1)}>
                +1 Away Team
            </button>
            <button onClick={handleFinishGame}>Finish Game</button>
        </div>
    );
};

export default GameInProgress;
