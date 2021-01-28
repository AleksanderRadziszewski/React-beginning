import React from 'react';

const TodoItem = props => {
    return(
        <div key={props.element.id} className="card">
        
            <h2>{props.element.title}</h2>
            <button>Zakończone</button>
        
    </div>
    )
}

export default TodoItem;