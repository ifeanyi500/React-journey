import React, {useState} from 'react'


const State = () =>  {

  const [count, setCount] = useState(0)

const increaseCount = () => {
  setCount(count + 1)
}
const decreaseCount = ()=>{
  setCount(count - 1)
}

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Add Volume</button>
      <button onClick={decreaseCount}>Reduce Volume</button>
    </div>
  )
}

//const [count, setCount] = useState(0)  ->  the const is a keyword, the count is a variable name, the setCount is a function 

export default State