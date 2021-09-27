import React, {useState} from 'react'
import './Todo.css';
import AddTodo from '../AddTodo/AddTodo'
import TodoList from '../TodoList/TodoList'
import {RiCloseCircleLine} from 'react-icons/ri'
import{BsCheckBox} from 'react-icons/bs'

function Todo({todos, completeTodo, removeTodo}) {

    return todos.map((todo, index) => (
        <div >
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>

            <div className="icons">
                <BsCheckBox onClick={()=> completeTodo(todo.id)}/>
                <br></br>
                <RiCloseCircleLine  onClick={()=> removeTodo(todo.id)}
                className="delete-icon"/>
            </div>

        </div>
        
        <div className= "todo-description">
                {todo.description}
        </div>
        </div>
    ))
}

export default Todo
