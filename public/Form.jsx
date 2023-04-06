import React from 'react'
import memesData from 'E:/renuka/meme-generator/src/memesData.js'
import { useState } from 'react'
const Form = () => {
const[memeImage,setMemeImage]=useState("")


    const getImage=(e)=>{
        e.preventDefault()
 const randomNumber=Math.floor(Math.random()*memesData.length)
 setMemeImage(memesData[randomNumber].url)
    }
  return (
    <div>
      <form className='row mt-5 text-centre form'>
        <div className='col-5 ms-1'>
      <input  className='input2' type='text' />

        </div>
<div className='col-5 width-20%'>

      <input className='input1' type='text'/>
</div>
<button type='submit' className='button btn mt-3' onClick={getImage}>Get New MEME Images</button>
    <div>
        <img src={`${memeImage}`} width="20%"/>
        </div>
      </form>

    </div>
  )
}

export default Form
