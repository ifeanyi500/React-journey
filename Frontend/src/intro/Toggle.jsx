import React, { useState } from 'react'

const Toggle = () => {
    
    const [isOn, setIsOn] = useState(false)
  return (
    <div>
        <button onClick={()=>setIsOn((prev)=>!prev)}>
            {isOn ? ("ON"):("OFF")}
        </button>
    </div>
  )
}

export default Toggle