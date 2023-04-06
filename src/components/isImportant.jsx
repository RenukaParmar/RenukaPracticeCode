import React from 'react'
import { useState } from 'react'
const IsImportant = () => {
    const[isImportant,setIsImportant]=useState("yes");
    const change=()=>{
        setIsImportant("No")
    }
  return (
    <div>
      <h1>Is state important to know?</h1>
      <h2>{isImportant}</h2>
      <button onClick={change}>click</button>
    </div>
  )
}

export default IsImportant
