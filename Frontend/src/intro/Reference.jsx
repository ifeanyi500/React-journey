import React, { useEffect, useRef } from 'react'

const Reference = () => {
     const countRef = useRef(null)

     useEffect(()=>{
        countRef.current.focus()
     })

     const changeValue = ()=>{
        countRef.current.value = "Hello Govnor"
     }

  return (
    <div>
        <input ref={countRef}   />

    <>
     <input ref={countRef}  placeholder='Enter your name' type="text" />
     <button onClick={changeValue}>Change Value</button>
    </>
        
    </div>
  )
}

export default Reference