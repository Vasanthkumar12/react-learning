import React from 'react'
import colorNames from 'colornames'
import './InputColor.css'

export default function ColorName({color, setColor, setHexValue}) {
  return (
    <div>
      <input id="color-input"
        type="text"
        placeholder='Enter color name'
        value={color}
        onChange={(e) => {
            setColor(e.target.value)
            setHexValue(colorNames(e.target.value))
          }
        }
      />
    </div>
  )
}
