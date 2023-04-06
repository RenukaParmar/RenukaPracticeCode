import React from 'react'
import {useState} from 'react'
const AddArray = () => {
    const[arr,setArr]=useState(["thing1"]); 
    function addNewThing(){ 
        // arr.push(`thing${preArr.length+1}`)
        setArr(preArr=>[...arr,`thing${preArr.length+1}`])
    }
      var arr1=arr.map((item)=><div>{item}</div>)
  return (
    <div>
      <button onClick={addNewThing}>Add</button>
   <h1>{arr1}</h1>
    </div>
  )
} 

export default AddArray 
