export function ChessStats03() {
    return (
        <p>At this point when it came to building the form for importing a game to the database I decided to leave the original model for the game database and instead import the pgn. <br />&nbsp;
        A chess pgn is the best way of collecting all the information from any game of chess. It's widely used across all of chess, contains all the information I had in my original model and more and each game can be uniquely identified by using 'EndTime' as a primary key. <br /><br />
        I wrote a function that took the pgn format given and converted it to a json format that the express request could read and store in the database. Since the pgn is one long String I split it into an array, removed the unwanted characters (square brackets and whitespace) and mapped over the array to build a new json object.</p>
    )
}