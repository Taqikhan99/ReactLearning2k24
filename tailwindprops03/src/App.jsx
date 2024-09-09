import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

//import data
import Actors from './data/sampledb'

function App() {
  const [count, setCount] = useState(0)
  console.log(Actors)
  console.log(typeof(Actors))
  return (
    <>
      <div className='p-5 border bg-slate-100'>
        <h1>Tailwind css</h1>
        <div className='flex mt-3  gap-2'>
        {/* <Card userName='Taqi'/>
        <Card userName='Asad'/>
        <Card userName='John'/> */}

        {Actors.map(element => (<Card userName={element.name} key={element.id}/>)
            
        )
        }
        </div>
       

      </div>
      
    </>
  )
}

export default App
