import React from 'react'
import TodoItem from './TodoItem'

class Todo extends React.Component{
    state = {
        elements: [
            {id:'343445', title:'shopping', isCompleted:true},
            {id:'343446', title:'pay the bills', isCompleted:false},

        ]
    }
    markCompleted (id){
        const index = this.state.elements.findIndex(x => x.id === id)
        const newElements = this.state.elements
        newElements[index].isCompleted = true

        this.setState({elements:newElements})
    }
render(){
const elements = this.state.elements.map(element => {
    return <TodoItem element = {element} markClicked={this.markCompleted.bind(this)}/>
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