import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [count, setCount] = useState(0)


  function addValue(){

    // count=count+1
    setCount(count+1)

    //if we want to avoid batch update, we can get prevstate and then increm,ent
    // setCount((prev)=>prev+1)
    // setCount((prev)=>prev+1)
    // setCount((prev)=>prev+1)
    // setCount((prev)=>prev+1)

    console.log('clicke add btn ',count,Math.random()*100);
  }

  const minusValue=()=>{

    if(count>0)
      setCount(count-1)
  }

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value : {count}</h2>

      <button style={{marginRight:'10px'}} onClick={addValue} >Add</button>
      <button onClick={minusValue}>Minus </button>

    </>
  )
}

export default App
