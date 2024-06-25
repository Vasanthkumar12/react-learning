import React from 'react'
import { FaTrashAlt } from "react-icons/fa"

function LineItem({todoItem, handleChange, handleDelete}) {
  return (
    <li className='lineItem'>
            <input type='checkbox' onChange={() => handleChange(todoItem.id)} checked={todoItem.checked} />
            <label id='todo'  style={todoItem.checked ? {textDecoration:"line-through"}: {textDecoration:"underline"}} onClick={()=> handleChange(todoItem.id)}>{todoItem.todo}</label>
            <FaTrashAlt 
                className='btn'
                role= "button"
                tabIndex="0"
                onClick={()=>handleDelete(todoItem.id)}
            />
    </li>
  )
}

export default LineItem