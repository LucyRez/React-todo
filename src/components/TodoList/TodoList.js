import React, {useState} from 'react'
import './TodoList.css';
import AddTodo from '../AddTodo/AddTodo'
import Todo from '../Todo/Todo'

function TodoList() {

    const [todos, setTodos] = useState([])

    const addToDo = todo => {
        if(!todo.description || !todo.text || /^\s*$/.test(todo.text)){
            return 
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos) 
    }

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id ){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })

        setTodos(updatedTodos)
    }

    return (
        <div>
            <h1>All Your Tasks Are Here</h1>
            <AddTodo onSubmit={addToDo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
        </div>
    )
}

export default TodoList
