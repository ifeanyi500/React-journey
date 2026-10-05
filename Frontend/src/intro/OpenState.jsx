import React, { useState } from 'react'

const OpenState = () => {
    const [isOpen, setIsOpen] = useState(false)
    if(isOpen){
        <h1>Welcome to our mart</h1>
    }else{
        <h1>Closed</h1>
    }

  return (
    <div>
      <button onClick={()=>setIsOpen((prev)=>!prev)}>
        {isOpen ? ("OPEN"): ("CLOSE")}
      </button>
       
    </div>
  )
}

export default OpenState