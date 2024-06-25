import React from 'react'
import { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa"
import './Content.css'

export default function Content() {
    const [todos, setTodos] = useState(
        [
            { 
                id: 1,
                checked: true,
                todo: "Reading Bible reading"
            },
            {
                id:2,
                checked: false,
                todo: "Praying"
            },
            {
                id: 3,
                checked: true,
                todo: "React Learning"
            }
        ]
    )   

    let handleChange = (id) => {
        let todoss = todos.map(todo => todo.id===id? {...todo, checked: !todo.checked} : todo)
        setTodos(todoss)
    }

    let handleDelete = (id) => {
        let todoss = todos.filter(todo => todo.id !== id )
        setTodos(todoss)
    }
  
    return (
        <div id="content">
            {(todos.length)? (
            <ul>
               { todos.map(todoItem =>
                <li className='lineItem' key={todoItem.id}>
                    <input type='checkbox' onChange={() => handleChange(todoItem.id)} checked={todoItem.checked} />
                    <label id='todo'  style={todoItem.checked ? {textDecoration:"line-through"}: {textDecoration:"underline"}} onClick={()=> handleChange(todoItem.id)}>{todoItem.todo}</label>
                    <FaTrashAlt 
                        className='btn'
                        role= "button"
                        tabIndex="0"
                        onClick={()=>handleDelete(todoItem.id)}
                    />
                </li>
               ) }
            </ul>
            ): (
                <p>Your list is Empty</p>
            )}
        </div>
    )
}
