import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState(new Date())
    const [color, setColor] = useState(0)

    const bgColor = [
        'black',
        "white",
        'blue',
        'green'
    ]
    
    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime(new Date())
        },1000)
        return ()=>{clearInterval(timer)}
    },[])

    const handleButttonClick = ()=>{
        setColor((color +  1) % bgColor.length)
    }
  return (
    <div style={{background: bgColor[color]}} className='clock-container'>
        <label onClick={()=>{handleButttonClick()}} htmlFor="dark-toggle" className='dark-btn'>🌕</label>
        <h1>Digital Clock</h1>
        
        

        <div className='set'>
            <div className='clock'>
                <div className="texting">
                <p className='text'>HH</p>
                <p className='tex'>:</p>
                <p className='te'>MM</p>
                <p className='t'>:</p>
                <p className='ti'>SS</p>
                </div>
                {time.toLocaleTimeString()}
            </div>
            <div className='date'>
                {time.toLocaleDateString()}
            </div>
            
        </div>
       
       
        <div className='btn'>
            <button>Start</button>
            <button>Stop</button>
        </div>
    </div>
  )
}

export default Clock