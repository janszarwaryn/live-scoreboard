import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewGameForm from "./NewGameForm";

describe("NewGameForm", () => {
    test("renders form and handles submit", () => {
        const mockOnStartGame = jest.fn();

        render(<NewGameForm onStartGame={mockOnStartGame} />);

        const homeTeamInput = screen.getByLabelText("Home Team");
        const awayTeamInput = screen.getByLabelText("Away Team");
        const submitButton = screen.getByText("Start Game");

        fireEvent.change(homeTeamInput, { target: { value: "Team A" } });
        fireEvent.change(awayTeamInput, { target: { value: "Team B" } });

        fireEvent.click(submitButton);

        expect(mockOnStartGame).toHaveBeenCalledTimes(1);
        expect(mockOnStartGame).toHaveBeenCalledWith("Team A", "Team B");
    });
});
