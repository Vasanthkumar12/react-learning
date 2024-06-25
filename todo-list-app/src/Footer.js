import React from 'react'
import './Footer.css'

export default function Footer({todosLength}) {
  return (
    <div>
        <h1 id="footer">{todosLength} List {todosLength == 1 ? "Item" : "Items"}</h1>
    </div>
  )
}
