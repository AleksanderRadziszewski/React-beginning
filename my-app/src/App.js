import React from 'react';
import Tweet from './Tweet';


function App() {

    return(
    <div className= "app">
        <Tweet name="Dev ED" message="This is a random tweet" numbers_of_likes="70"/>
        <Tweet name="John Snow" message="I am the true king" numbers_of_likes="60"/>
        <Tweet name="Traversy Media" message="700k my dudes" numbers_of_likes="40"/>
        <Tweet name="Mosh" message="My course is available" numbers_of_likes="30"/>
    </div>

    );
}

export default App;
