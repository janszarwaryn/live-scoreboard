import React from "react";

const GameSummary = ({ games }) => {
    const sortedGames = games.slice().sort((a, b) => {
        const totalScoreA = a.homeScore + a.awayScore;
        const totalScoreB = b.homeScore + b.awayScore;

        if (totalScoreA === totalScoreB) {
            return b.startTime - a.startTime;
        }

        return totalScoreB - totalScoreA;
    });

    return (
        <div>
            <h2>Game Summary</h2>
            <ol>
                {sortedGames.map((game) => (
                    <li key={game.id}>
                        {game.homeTeam} {game.homeScore} - {game.awayTeam} {game.awayScore}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default GameSummary;
