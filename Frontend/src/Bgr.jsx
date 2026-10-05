import React, { useState } from 'react'

const Bgr = () => {
    const [bgr, setBgr]= useState(0)

    const background = [
        'blue',
        'green',
        'pink',
        'red',
        'purple'
    ]

    const bColor = ()=>{
        setBgr((bgr + 1) % background.length)
    }


  return (
    <div style={{background: background[bgr]}} className="clock-container">
        <h1>Background Color Changer</h1>
        <button onClick={bColor}>Change</button>
    </div>

    
    
  )
}

export default Bgr