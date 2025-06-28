
import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter]=useState(1)


  let inCValue=()=>{
    setCounter(counter+1)

  }

  let deValue=()=>{
    if(counter>1){
       setCounter(counter-1)
    }
   
  }


  return (
    <>
      <button onClick={deValue} > - </button>
      <h1> {counter} </h1>

      <button onClick={()=>setCounter(counter+1)} > + </button>
      <button onClick={inCValue} > + </button>
    </>
  )
}

export default App
