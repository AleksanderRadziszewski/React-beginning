import React from 'react';
import './App.css';

function Tweet({name, message, numbers_of_likes}){
    return(
        <div className= "tweet">
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>{numbers_of_likes}</h3>
        </div>
    )
}
export default Tweet;