import React from 'react'
import './Content.css'

function Content() {

  function handleClick() {
    let todoDiv = document.getElementById("todo-msgs")
    let input = document.getElementById("todo-msg")
    let para = `<p id="msg">${input.value}</p>`
    todoDiv.innerHTML += para
  }

  function handleDblClick() {
    console.log("I am Came by double click")
  }

  return (
    <div id='content'>
        <input type="text" id="todo-msg"/>
        <button id='btn' onClick={() => handleClick()} onDoubleClick={() => handleDblClick()}>Add</button>
        <div id="todo-msgs">
    
        </div>
    </div>
  )
}

export default Content