export function ChessStats01() {
    return (
        <p>I began building a <strong>Full Stack MERN application</strong> in order to track and analyse my chess games. I designed a database structure where I could log each game as well as log each mistake that I wanted to. <br /><br />
        The app is a <strong>RESTful API</strong> that connects to a MongoDB database and handles requests from a client. I used Node.js, Express and Mongoose to construct the API.
        The frontend application I used is a REACT web application. <br /><br />            
        After made a plan of the database structure, ensuring it worked as a relational database in order to avoid data inconsistency and data redundancy: <a href='https://docs.google.com/spreadsheets/d/12C2sm8HDBerkUEOk5C5dajdPsgQdN6hIIdS6lprBUZ4/edit?gid=0#gid=0' target='_blank'>Relational Database Plan</a><br />Then I wrote mongoose schemas to create the db models. <br /><br />             
        I then created Routes and Controllers for performing CRUD operations, such as adding new records or viewing current ones. So when a request is made by the user, the endpoint(route) sent to the server runs a certain task assigned by the controller.<br />&nbsp;
        
        I tested the requests with Thunder Client. Something I had to fix was that in my Mongo Cluster the collections were always automatically saved under 'test', instead of the new database that I intended them to be saved in. I found there is a optional parameter to put the name of the database in the MongoURL connection string, which I hadn't done. <br/>&nbsp;
        When testing the deleteGame method I noticed that the request would send a '200 OK' response even if the id in the endpoint was incorrect and nothing was deleted. To improve this I added a conditional where if the item was found in the database it would delete and send the 200 response as intended, otherwise it would just send a 404 response with a message saying to fix the id. <br/><br />
        
        Next I wrote frontend api .js files, which export methods, which call fetch requests from the backend server.</p>
    )
}