import React from 'react'
import './Footer.css'

function Footer() {
  let date = new Date()  
  return (
    <div>
        <p id="copyright">Copyright @ {date.getFullYear()}</p>
    </div>
  )
}

export default Footer