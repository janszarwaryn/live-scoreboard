import React, { useState } from "react";

const NewGameForm = ({ onStartGame }) => {
    const [homeTeam, setHomeTeam] = useState("");
    const [awayTeam, setAwayTeam] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onStartGame(homeTeam, awayTeam);
        setHomeTeam("");
        setAwayTeam("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Home Team:
                <input
                    type="text"
                    value={homeTeam}
                    onChange={(e) => setHomeTeam(e.target.value)}
                />
            </label>
            <label>
                Away Team:
                <input
                    type="text"
                    value={awayTeam}
                    onChange={(e) => setAwayTeam(e.target.value)}
                />
            </label>
            <button type="submit">Start Game</button>
        </form>
    );
};

export default NewGameForm;
