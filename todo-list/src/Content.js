import React from 'react'
import './Content.css'

function Content() {
  return (
    <div id='content'>
        <input type="text" id="todo-msg"/>
        <button id='btn'>Add</button>
        <div id="todo-msgs">
    
        </div>
    </div>
  )
}

export default Content