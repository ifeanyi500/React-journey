import React from 'react'

const Car = (props) => {
  return (
    <div>
        <h1>I own a {props.name}</h1>
        <h1>It is a {props.brand} brand</h1>
        <h1>{props.model} model</h1>
  
    </div>
  )
}

export default Car