import React from 'react'
import './Content.css'
import ItemsList from './ItemsList'

export default function Content({todos, handleChange, handleDelete}) {
    
    return (
        <div id="content">
            {(todos.length)? (
                <ItemsList
                    todos = {todos}
                    handleChange = {handleChange}
                    handleDelete = {handleDelete}
                />
            ): (
                <p>Your list is Empty</p>
            )}
        </div>
    )
}
