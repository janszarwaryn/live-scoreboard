
# Live Football World Cup Scoreboard

This project is a simple React application for managing and displaying live football scores during the World Cup. It allows users to add new games, update scores, and view the overall summary of the games.

## Features

-   Add new games with home and away teams
-   Update scores for each game in progress
-   View a summary of all games
-   Store game data in localStorage to persist across browser refreshes
-   Responsive design using Material-UI

## Installation

To install the project, follow these steps:

1.  Clone the repository:


`git clone https://github.com/janszarwaryn/live-scoreboard.git`

2.  Change to the project directory:

`cd live-scoreboard`

3.  Install dependencies:

`npm install`

4.  Start the development server:

`npm start`

5.  Open your browser and navigate to [http://localhost:3000](http://localhost:3000/) to view the application.

## Usage

1.  Add a new game:

    -   Enter the names of the home and away teams in the respective input fields.
    -   Click the "Start Game" button to add the game to the "Games in Progress" section.
2.  Update scores:

    -   In the "Games in Progress" section, use the "+" and "-" buttons to increase or decrease the score for each team.
    -   Scores are automatically updated in the game summary.
3.  View game summary:

    -   The "Game Summary" section displays a list of all games, including the home and away teams, and their respective scores.
4.  Finish a game:

    -   In the "Games in Progress" section, click the "Finish Game" button to remove the game from the list of games in progress.
    -   The game will still be displayed in the game summary.
5.  Browser refresh:

    -   The application stores game data in localStorage, so your data will persist across browser refreshes.

## Testing

To run the tests for the project, use the following command:

`npm test`

This will run the test suite and display the test results in the terminal.

## Contributing

If you'd like to contribute to the project, please submit a pull request with your proposed changes or create an issue detailing the changes you'd like to see. :P
