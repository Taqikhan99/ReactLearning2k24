import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Colors from './data/SampleColors'
import ColorCard from './components/ColorCard'


function App() {
  const [bgColor, setBgColor] = useState('#fffff')

  const changeBodyBgColor = (color) => {
    // document.getElementById('bodyDiv').style.backgroundColor = color;
    document.body.style.backgroundColor=color
    console.log('clicked', color);
    
  };

  return (
    
      <div className='w-full duration-200' id='bodyDiv' style={{backgroundColor:bgColor}}>


        <div style={{position:'absolute',top:'60px',right:'50px',background:'black'}} className='w-36 flex flex-col justify-center items-center gap-5  h-5/6' >

            {
              Colors.map((elem)=>(
                <ColorCard changeColor={changeBodyBgColor} colorname={elem.color} code={elem.code.hex} key={elem.color} />
              ))
            }

        </div>


      </div>
    
  )
}

export default App
