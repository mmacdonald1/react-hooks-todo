import React, {useState} from 'react' 
import './TodoContainer.css'
import TodoItem from './TodoItem'

const TodoContainer = () => {
    const [todoText, setTodoText] = useState()
    const [todoList, setTodoList] = useState(['Make breakfast', 'Do yoga', 'Walk dog'])

    const handleOnChange = (e) =>{
        console.log(e, e.target, e.target.value)
        setTodoText(e.target.value)
    }

    const handleOnSubmit = () =>{
        setTodoList([...todoList, todoText])
        setTodoText('')
    }
    return (
        <div className="todo-container">
            <h1>TodoContainer</h1>
            <input type="text" onChange={handleOnChange} />
            <button onClick={handleOnSubmit}>submit</button>
            <div>
                {todoList ? todoList.map((item, index)=><TodoItem key={index} item={item}/>): null}
            </div>
        </div>
    )
}
 
export default TodoContainer