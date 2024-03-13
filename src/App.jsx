import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[height,setHeight]=useState("")
  const[weight,setWeight]=useState(null)
  const[bmi,setBMI]=useState(null)
  const[bmiStatus,setBMIStatus]=useState("")
  const[errorMessage,setErrorMessage]=useState("")

  function calculatebmi(){
    const isValidHeight=/^\d+$/.test(height);
    const isValidWeight=/^\d+$/.test(weight)
      if(isValidHeight&& isValidWeight){
          const heightcentimeter=height/100;
          const bmiValue=weight/(heightcentimeter*heightcentimeter)
          setBMI(bmiValue.toFixed(2));
          if(bmiValue<18.5){
            setBMIStatus("UnderWeight")
          }
          else if(bmiValue>18.5 && bmiValue<24.9){
            setBMIStatus("Normal weight")
          }
          else if(bmiValue>=25 && bmiValue<29.9){
            setBMIStatus("Over weight")
          }
          else{
            setBMIStatus("obese")
          }   
      }
      else{
        setBMI(null)
        bmiStatus("")
        setErrorMessage("Please enter valid numeric height and weight")
      }
  }
  const clearAll=()=>{
    setHeight("")
    setWeight("")
    setBMI(null)
    bmiStatus("")
  }

  return (
    <>
     <div className="bmi-calculator">
      <div className="box"></div>
      <div className="data">
        <h1>BMI CALCULATOR</h1>
        {/* <div className="error">
         {errorMessage&& <p>{errorMessage}</p>}
        </div> */}
        {errorMessage && <p className="error">{errorMessage}</p>}
        <div className="input-container">
          <label htmlFor="height">Height (cm):</label>
          <input type="text" id='height' value={height} onChange={(e)=>setHeight(e.target.value)}/>
        </div>
        <div className="input-container">
          <label htmlFor="height">Weight (cm):</label>
          <input type="text" id='weight' value={weight} onChange={(e)=>setWeight(e.target.value)} />
        </div>
        <button onClick={calculatebmi}>CalculateBMI</button>
        <button onClick={clearAll}>Clear All</button>
       {bmi!==null && (
         <div className="result">
         <p>Your BMI is {bmi}</p>
         <p>Status:{bmiStatus}</p>
       </div>
       )}
      </div>
     </div>
    </>
  )
}

export default App
