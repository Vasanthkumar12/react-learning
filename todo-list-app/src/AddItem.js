import React from 'react'
import './AddItem.css'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

export default function AddItem({addItem, setAddItem, handleSubmit}) {

  let inputRef = useRef()

  return (
    <form id="form" onSubmit={handleSubmit}>
        <label id="addItem" htmlFor="addItem">Add Item</label>
        <input 
            ref={inputRef}
            id='add-item'
            type="text"
            placeholder='Add Item'
            required
            value = {addItem}
            onChange = {(e) => setAddItem(e.target.value)}
        />
        <button id="item-button" type='submit' aria-label='Add Item' onClick={() => inputRef.current.focus()}>
            <FaPlus
                role= 'button'
            />
        </button>
    </form>
  )
}
