import React from 'react'

const Football = () => {
    const shoot = ()=>{
        alert("Goooooaaaal!!!")
    }
  return (
    <>
        <button onClick={shoot}>Click</button>
        <button onClick={()=>{alert("Offside")}}>Send</button>
    </>
  )
}

export default Football