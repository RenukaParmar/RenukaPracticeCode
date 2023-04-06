import React, { useEffect } from 'react'
// import memesData from 'E:/renuka/practice-code/src/memesData.js'
import './App.css';

import { useState } from 'react'
const Meme = () => {

  const [memeImage, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    randomUrl: "cat.png"
  })
  const [allMemeImage, setAllMemeImage] = useState([])
//  useEffect(()=>{
//   fetch(' http://localhost:3000/getImage')
//   .then(response=>response.json())
//     .then(data=>setAllMemeImage(data))
//  },[])
useEffect(()=>{
async function getmeme(){
  const res=await fetch (' http://localhost:3000/getImage')
  const data=await res.json()
  setAllMemeImage(data)
}
getmeme()
},[])

  const getImage = (e) => {
    e.preventDefault()
    const randomNumber = Math.floor(Math.random() * allMemeImage.length)
    const urlNew = allMemeImage[randomNumber].url;
    setMemeImage((prevMeme) => {
      return {
        ...prevMeme,
        // [name]:value,
        randomUrl: urlNew
      }
    })
  }
  console.log(memeImage)
  function handleChange(e){
    const{name,value,type}=e.target
    setMemeImage((prevMeme) => {
      return {
        ...prevMeme,
        [name]:value,
      }
    })
  }
  return (
    
    <div>
      <form className='row mt-5 text-centre form'>
        <div className='col-5 ms-1'>
        <input className='input1'
         type='text' 
         name='topText'
          value={memeImage.topText}
          onChange={handleChange}/>
        </div>
        <div className='col-5 width-20%'>
        <input className='input2' 
        type='text' 
        name='bottomText'
         value={memeImage.bottomText}
         onChange={handleChange} />
        </div>
        <button type='submit' className='button btn mt-3' onClick={getImage}>Get New MEME Images</button>
        <div>
        <h1 className='memeTopText'>{memeImage.topText}</h1>
        <h1 className='memeBottomText'>{memeImage.bottomText}</h1>
        <img src={`${memeImage.randomUrl}`}  className='image mt-3' />
        </div>
      </form>
    </div>
  )
}

export default Meme
