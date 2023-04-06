import React from 'react'
import { useState } from 'react';
const StarToggling = () => {
    const[data,setData]=useState(
        {
             firstname: "renuka",
             lastname: "parmar",
             phoneNo: "9977249534",
             email: "renu@123gmail.com",
             isFavorite: true
         }
    )
    var newImg=data.isFavorite? "logo512.png":"girl.jpg";
const toggleClick=()=>{
setData((prevData)=>{
   return {
       ...prevData,
        isFavorite:!prevData.isFavorite
} 
    
})
}
    return (
        <div>
            <img src={`../images/${newImg}`} width="10%" onClick={toggleClick}/>
<h1>{data.firstname}{data.lastname}</h1>
<h5>{data.phoneNo}</h5>
<p>{data.email}</p>

        </div>
    )
}

export default StarToggling
