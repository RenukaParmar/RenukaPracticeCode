import React from 'react'
import ColorData from '../colorData'
import { useState } from 'react'
import 'E:/renuka/meme-generator/src/components/App.css'

const ColorBox = () => {
  const [square,setSquare]=useState(ColorData)

 const toggleChange=(id)=>{
  setSquare(prevSquare=>{
    return prevSquare.map((squares)=>{
      return squares.id===id ? {...squares,on: !squares.on} :squares
    })
  })

 }
    // setSquare(prevSquare=>{
    //   const newSquare=[];
    //   for(let i=0; i<prevSquare.length ;i++){
    //     const currentSquare=prevSquare[i]
    //     if(currentSquare.id===id){
    //       const updateSquare={
    //         ...currentSquare,
    //         on:!currentSquare.on
    //       }
    //       newSquare.push(updateSquare)
    //     }else{
    //       newSquare.push(currentSquare)
    //     }
    //   }
    //   return newSquare
    // })    
    var squareElements=square.map(item=>(
    <Box on={item.on} 
    key={item.id}
    index={item.id}
     handleChange={toggleChange}/>
    )) 
   
  return ( 
    <div>
      {squareElements}
    </div>
  )
  }
export default ColorBox


function Box(props){
  // const[on,setOn]=useState(props.on)
  const styles={
    backgroundColor:props.on? "black" : "green"
  }
  // const toggleChange=(id)=>{
  //   setOn (prevOn=>!prevOn)    
  // } 
  return(
    <div style={styles} className='box' onClick={()=>{props.handleChange(props.index)}}></div>
  ) 
}
