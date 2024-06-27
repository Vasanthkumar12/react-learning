import React from 'react'
import './Square.css'

export default function Square({color, hexValue, txtColor}) {

  return (
    <div id="square" style={{backgroundColor: color}}>
      <p id="para1" style={{color: txtColor}}>{color ? color : "Empty Color"}</p><br />
      <p id="para2" style={{color: txtColor}}>{hexValue}</p>
    </div>
  )
}
