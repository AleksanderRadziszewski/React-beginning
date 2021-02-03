import React from 'react'
import TodoItem from './TodoItem'

class Todo extends React.Component{
    state = {
        elements: [
            {id:'343445', title:'shopping', isComplated:true},
            {id:'343446', title:'pay the bills', isComplated:false},

        ]
    }
render(){
const elements = this.state.elements.map(element => {
    return <TodoItem element = {element}/>
    })

    return(
        <div>
            Todo app
            {elements}
        </div>
    )
}
}

export default Todo;