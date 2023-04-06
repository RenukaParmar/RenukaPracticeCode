import React from 'react'
import { useState } from 'react'

const Eg = () => {
    const[show,setShow]=useState(false)
    const toggle=()=>{
setShow(prevValue=>!prevValue)
    }
  return (
    <div className='text-centre'>
      <button onClick={toggle}>Toggle WindowTracker</button>
      {show && <WindowTracker />} 

    </div>
  ) 
}
export default Eg
function WindowTracker(){
    return(
        <>
<h1>window Width:{window.innerWidth}</h1>
        </>
    )
}
