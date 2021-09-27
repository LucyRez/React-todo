import './AddTodo.css';
import React, {useState, useRef} from 'react'

function AddTodo(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')
    const [inputDescription, setInputDescription] = useState(props.edit ? props.edit.value : '')

    const handleChange = e =>{
        setInput(e.target.value)
    }

    const handleChangeDescription = e =>{
        setInputDescription(e.target.value)
    }

    const inputRef = useRef(null)
    const inputDescriptionRef = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random()* 10000),
            text: input,
            description: inputDescription
        })

        setInput('')
        setInputDescription('')
    }

    return (
        <form className="todo-add" onSubmit={handleSubmit}>
            <>
            <input 
                type="text" 
                placeholder="Add a todo" 
                value={input}
                name="text" 
                className="todo-input"
                onChange={handleChange}
                ref={inputRef}
            />
            <input 
            type="text"
            placeholder="Write a description..."
            value={inputDescription}
            name="description"
            className="todo-input"
            onChange={handleChangeDescription}
            ref={inputDescriptionRef}
            />
            <button className="todo-button">Add</button>
            </>
        </form>
    )
}

export default AddTodo
