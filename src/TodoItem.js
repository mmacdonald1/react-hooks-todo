import React from 'react' 
import './TodoItem.css'

const TodoItem = (props) => {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>{props.item}</p>
        </div>
    )
}
 
export default TodoItem