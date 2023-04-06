import React from 'react'  
import { useState } from 'react' 
const Count = () => { 
    const[Count,setCount]=useState(0); 
    const change=()=>{ 
        setCount(preValue=>preValue+1 ) 
    }  
  return (  
    <div> 
      <h1></h1> 
      <h2>{Count}</h2> 
      <button onClick={change}>+</button> 
    </div>            
  ) 
} 
export default Count 
