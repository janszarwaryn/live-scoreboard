import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  test("renders main title", () => {
    render(<App />);
    const titleElement = screen.getByText(/Live Football World Cup Scoreboard/i);
    expect(titleElement).toBeInTheDocument();
  });
});
