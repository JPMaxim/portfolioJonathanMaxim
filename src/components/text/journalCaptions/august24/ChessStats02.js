export function ChessStats02() {
    return (
        <p>For the frontend I started on the AllGames page. I mapped through the items in the object returned from the getGames api request, and returned a Card component which would display the information for an individual game from the Games database.
        Next came drawing up a design for how I wanted the card to look, and then writing the code. I used REACT for the HTML and JSX and TailwindCSS for the CSS styling. <br /><br />
        
        I decided I wanted each game component on the AllGames page, to have a Link to the individualGame page, which would give a deeper breakdown of the game. So each component would route to the same page but pass unique data. On a previous group project, we had used the useParams method included in react-router in order to achieve a similar goal of passing data between routes.
        For this project I had much more success with a different method. I saw an article that talked about the react-router state prop. Using the article and the react-router documentation passing data between Routes was a breeze. 
        What I did was use the useLocation method to access a history state. Allowing me to access the data that I had applied to the state in the previous route.</p>
    )
}