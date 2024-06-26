import React from 'react'
import './AddItem.css'
import { FaPlus } from 'react-icons/fa'

export default function AddItem({addItem, setAddItem, handleSubmit}) {
  return (
    <form id="form" onSubmit={handleSubmit}>
        <label id="addItem" htmlFor="addItem">Add Item</label>
        <input 
            id='add-item'
            type="text"
            placeholder='Add Item'
            required
            value = {addItem}
            onChange = {(e) => setAddItem(e.target.value)}
        />
        <button id="item-button" type='submit' aria-label='Add Item'>
            <FaPlus
                role= 'button'
            />
        </button>
    </form>
  )
}
