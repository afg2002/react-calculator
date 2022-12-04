import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [result,setResult] = useState("")
  const [calc, setCalc] = useState("")
  const operator = ['/','*','-','+','.']

  function updateCalc(){
    const newVal = result.toString()
    setCalc(newVal)
  }

  function deleteHandler() {
    setCalc("")
    setResult(0)
  }

  function deleteOneChar(){
    setCalc(calc.slice(0,-1))
  }

  function sqrtHandler() {
      try {
        let SQRT = Math.sqrt(eval(calc))
        setCalc(SQRT.toString())
      } catch (e) {
        if(e){return}
      }
  }

  function powHandler() {
    let powNumber = prompt("Pangkat berapa ? :")
    let POW = Math.pow(eval(calc),powNumber)
    setCalc(POW.toString())
  }

  function btnPushToVal(e) {
    let targetValue = e.target.value
    let targetValueStr = targetValue.toString()
    if(targetValue == 0  && calc == "0"){
      return
    }

    if(operator.includes(targetValueStr) && operator.includes(calc.slice(-1))){return}

    setCalc(calc + targetValue)
    
  }

  useEffect(()=>{
    const arrCalc = [...calc]
    const arrCalcJoin = arrCalc.join('')
    try {
      const newVal = eval(arrCalcJoin)
      setResult(newVal)
    } catch (error) {
      if(error){
        setResult("error")
      }
    }

  },[calc,result])
  


  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="input-wrapper">
        <p>
          <span id='detail'>
            ({result || '0'} )</span>
          {calc || '0'}
        </p>
      </div>
      <div className='wrapper'>
        <div className="wrapper-inside">
          <button onClick={deleteHandler}>DEL</button>
          <button onClick={sqrtHandler}>SQRT</button>
          <button onClick={powHandler}>^</button>
          <button onClick={deleteOneChar} >{"->"}</button>
        </div>
        <div className="wrapper-inside">
          <button onClick={btnPushToVal} value={"7"}>7</button>
          <button onClick={btnPushToVal}  value={"8"}>8</button>
          <button onClick={btnPushToVal}  value={"9"}>9</button>
          <button onClick={btnPushToVal}  className="btnRight" value={"/"}>/</button>
        </div>
        <div className="wrapper-inside">
          <button onClick={btnPushToVal}  value={"6"}>6</button>
          <button onClick={btnPushToVal}  value={"5"}>5</button>
          <button onClick={btnPushToVal}  value={"4"}>4</button>
          <button onClick={btnPushToVal}  className="btnRight" value={"*"}>*</button>
        </div>
        <div className="wrapper-inside">
          <button onClick={btnPushToVal}  value={"3"}>3</button>
          <button onClick={btnPushToVal}  value={"2"}>2</button>
          <button onClick={btnPushToVal}  value={"1"}>1</button>
          <button onClick={btnPushToVal}  className="btnRight" value={"-"}>-</button>
        </div>
        <div className="wrapper-inside">
          <button onClick={btnPushToVal} value={"0"}>0</button>
          <button onClick={btnPushToVal} value={"."}>.</button>
          <button onClick={updateCalc} id='btnSamaDengan'>=</button>
          <button onClick={btnPushToVal} value={"+"} className="btnRight">+</button>
        </div>
      </div>
    </div>
  )
}

export default App
