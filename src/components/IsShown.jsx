import React from 'react'
import { useState } from 'react'

const IsShown = () => {
    const[isShown,setIsShown]=useState(false)
 const toggleShow=()=>{
    setIsShown(prevShow=>!prevShow)
 }
  return (
    <div>
      {/* {isShown ? <button onClick={toggleShow}>Hide</button>
      :<button onClick={toggleShow}>Show</button>} */}
      <button onClick={toggleShow}>{isShown? "Hide": "Show"} </button>
       {isShown && <h1>hello miss renuka</h1>}
    </div>
  )
}

export default IsShown
