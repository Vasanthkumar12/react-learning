import React from 'react'
import { useState } from 'react'
import './UseState.css'

export default function UseState() {

  let [count, setCount] = useState(0)  // useState Hook returns an Array

  function decrementFunc() {
    setCount((count) => count - 1)
  }

  function incrementFunc() {
    setCount((count) => count + 1)
  }

  let arr = []
  let rand = []
  let [name, setName] = useState("God name")
  function changeText() {
    arr = ['Father', 'Jesus', 'Holy Sprit']
    rand = Math.floor(Math.random() * 3)
    setName(arr[rand])
  }
    
  return (
    <div className="usestate">
        <div>
            <h1>Number of items</h1>
            <button className='countbtns' onClick={() => decrementFunc()}>-</button>
            <span>{count}</span>
            <button className='countbtns' onClick={() => incrementFunc()}>+</button>
        </div>
        
        <div>
            <h1 id="txt">I like {name} very much.</h1>
            <button id="chngeBtn" onClick={() => changeText()}>Change text</button>

        </div>
    </div>
  )
}
