import React from 'react'
import './Header.css'

export default function Header(props) {
  return (
    <div id="header">
        <h1>{props.title}</h1>
    </div>
  )
}

Header.defaultProps = {
  title: "Todo List Default"
}
