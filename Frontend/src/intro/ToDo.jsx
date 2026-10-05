import React, { useState, useEffect } from 'react'

const ToDo = () => {
    const [todo, setToDO] = useState("")
    const [res, setRes] = useState(()=>{
      const saved = localStorage.getItem("To-do list")
      return saved ? JSON.parse(saved) : []
    })

    useEffect(()=> {
      localStorage.setItem("ToDo list", JSON.stringify(res))
    }, [res])

    const result = (e) => {
    setRes([...res, todo])
    setToDO("")     
        
    }

  return (
    <div>
      <input type="text" placeholder='ToDo' value={todo}
      onChange={(e)=>setToDO(e.target.value)}  />
      <button onClick={result}>Enter</button>

      <ul>
        {res.map((items, i)=>(
          <li key={i}>{items}</li>
        ))}
      </ul>
    </div>
  )
}

export default ToDo