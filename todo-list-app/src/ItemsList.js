import React from 'react'
import LineItem from './LineItem'

function ItemsList({todos, handleChange, handleDelete}) {
  return (
    <ul>
       { todos.map(todoItem =>
            <LineItem
                todoItem = {todoItem}
                key = {todoItem.id}
                handleChange = {handleChange}
                handleDelete = {handleDelete}
            />
            )
        }
    </ul>
    
  )
}

export default ItemsList