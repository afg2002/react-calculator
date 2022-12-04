import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [result,setResult] = useState("")
  const [calc, setCalc] = useState("")
  // const operator = ['/','*','-','+','=']

  function updateCalc(){
    setCalc(result)
  }

  function deleteHandler() {
    setCalc("")
    setResult(0)
  }
  function btnPushToVal(e) {
    if(e.target.value == 0  && calc == ""){
      return 
    }
    setCalc(current => [...current,e.target.value] )
  }

  useEffect(()=>{
    try {
      let detailResult = eval(calc.join(''))
     
      setResult(detailResult)
    } catch (error) {
      if(error && result=="" && calc==""){
        setResult(0)
      }else if(error && result != "" && calc!=0){
        setResult(calc)
      }
    }
    }
  )


  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="input-wrapper">
        <p>
          <span id='detail'>(
            {result} 
          )</span>
          {calc || 0}
        </p>
      </div>
      <div className='wrapper'>
        <div className="wrapper-inside">
          <button onClick={deleteHandler}>DEL</button>
        </div>
        <div className="wrapper-inside">
          <button onClick={btnPushToVal} value="7">7</button>
          <button onClick={btnPushToVal}  value="8">8</button>
          <button onClick={btnPushToVal}  value="9">9</button>
          <button onClick={btnPushToVal}  className="btnRight" value="/">/</button>
        </div>
        <div className="wrapper-inside">
          <button onClick={btnPushToVal}  value="6">6</button>
          <button onClick={btnPushToVal}  value="5">5</button>
          <button onClick={btnPushToVal}  value="4">4</button>
          <button onClick={btnPushToVal}  className="btnRight" value="*">*</button>
        </div>
        <div className="wrapper-inside">
          <button onClick={btnPushToVal}  value="3">3</button>
          <button onClick={btnPushToVal}  value="2">2</button>
          <button onClick={btnPushToVal}  value="1">1</button>
          <button onClick={btnPushToVal}  className="btnRight" value="-">-</button>
        </div>
        <div className="wrapper-inside">
          <button onClick={btnPushToVal} value="0">0</button>
          <button onClick={btnPushToVal} value=".">.</button>
          <button onClick={updateCalc} id='btnSamaDengan'>=</button>
          <button onClick={btnPushToVal} value="+" className="btnRight">+</button>
        </div>
      </div>
    </div>
  )
}

export default App
