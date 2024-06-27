import './App.css';
import { useState } from 'react'
import Square from './Square'
import InputColour from './InputColour'

function App() {

  let [color, setColor] = useState()
  let [txtColor, setTxtColor] = useState('black')
  let [hexValue, setHexValue] = useState()

  let handleClick = () => {
    if(txtColor === 'black') setTxtColor("white")
    else setTxtColor("black")
  }

  return (
    <div>
      <Square
        color = {color}
        hexValue = {hexValue}
        txtColor = {txtColor}
      />
      <InputColour 
        color = {color}
        setColor = {setColor}
        hexValue = {hexValue}
        setHexValue = {setHexValue}
        handleClick = {handleClick}
      />

      <button id='btn' onClick={() => handleClick()}>
        Toggle text color
      </button>
    </div>
  );
}

export default App;
