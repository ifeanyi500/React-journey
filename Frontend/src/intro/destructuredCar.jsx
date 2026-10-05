import React from 'react'

const destructuredCar = (props) => {
    const {name, brand, model} = props
  return (
    <div>
        <h1>i love {name}, especially {brand} brand, the {model} model</h1>
    </div>
  )
}

export default destructuredCar