import React, { useState } from 'react'

const Calc = () => {
    const [operator, setOperator] = useState(null)
    const [display, setDisplay] = useState("0")
    const [previous, setPrevious] = useState(null)
    const [waiting, setWaiting] = useState(false)
    const [color, setColor] = useState(1)

    const numbers = ["7","8","9","4","5","6","1","2","3","0","."]
    const operators = ["×", "÷","-","+"]
    const cols =[
        "brown",
        "pink",
        "purple"]

    function handleNum(digits){
        if (waiting) {
            setDisplay(digits)
            setWaiting(false)
        }else{
            setDisplay(display === "0" ? digits : display + digits)
        }
    }

    function chooseOperator(round){
        setPrevious(display)
        setOperator(round)
        setWaiting(true)
    }

    function handleOp(){
        const a = previous
        const b = display
        let answer

        if(operator ==="+") answer = +a + +b
        if(operator ==="-") answer = a - b
        if(operator ==="×") answer = a * b
        if(operator ==="÷") answer = a/b

        setDisplay(String(answer))
        setPrevious(null)
        setOperator(null)
    }

    function percent(){
        setDisplay(String(parseFloat(display) / 100))
    }

    function clearAll(){
        setDisplay("0")
        setPrevious(null)
        setOperator(null)
        setWaiting(false)
    }

    function cancel(){
        setDisplay(display.length > 1 ? display.slice(0, -1): "0")
    }
    function swBg(){
        
        setColor((color + 1) % cols.length)
    }
  return (
    <div>
    <div className="calc">
        <div style={{background: cols[color]}} className='display'>{display}</div>

        <div className="buttons">
            <div className='ft'>
                <button className='btf' onClick={cancel}>⨉</button>
                <button className='btf' onClick={clearAll}>AC</button>
                <button className='btf' onClick={percent}>%</button>
                <button className='bte' onClick={()=> chooseOperator("÷")}>÷</button>
            </div>

            <div className='ft'>
                <button className='btn' onClick={()=> handleNum("7")}>7</button>
                <button className='btn' onClick={()=> handleNum("8")}>8</button>
                <button className='btn' onClick={()=> handleNum("9")}>9</button>
                <button className='bte' onClick={()=> chooseOperator("×")}>×</button>
            </div>
            <div className='ft'>
                <button className='btn' onClick={()=> handleNum("4")}>4</button>
                <button className='btn' onClick={()=> handleNum("5")}>5</button>
                <button className='btn' onClick={()=> handleNum("6")}>6</button>
                <button className='bte' onClick={()=> chooseOperator("-")}>-</button>
            </div>
            <div className='ft'>
                <button className='btn' onClick={()=> handleNum("1")}>1</button>
                <button className='btn' onClick={()=> handleNum("2")}>2</button>
                <button className='btn' onClick={()=> handleNum("3")}>3</button>
                <button className='bte' onClick={()=> chooseOperator("+")}>+</button>
            </div>
            <div className='ft'>
                <button className='btn' onClick={swBg}>🚟</button>
                <button className='btn' onClick={()=> handleNum("0")}>8</button>
                <button className='btn' onClick={()=> handleNum(".")}>.</button>
                <button className='bte' onClick={handleOp}>=</button>
            </div>
        </div>
    </div>
        
       


    </div>
  )
    
}
export default Calc