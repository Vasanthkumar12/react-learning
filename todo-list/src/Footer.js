import React from 'react'

function Footer() {
  let date = new Date()  
  return (
    <div>
        <p>Copyright @ {date.getFullYear()}</p>
    </div>
  )
}

export default Footer