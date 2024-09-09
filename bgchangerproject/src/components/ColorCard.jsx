import React from 'react'

const ColorCard = ({colorname,code,changeColor} ) => {
  return (
    <div className='w-28 bg-white p-2' style={{backgroundColor:code}}>
        
        <button onClick={()=>{changeColor(code)} }  className="btn">{colorname} {code}</button>
    </div>
  )
}

export default ColorCard
