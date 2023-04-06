import React from 'react'
import { useState } from 'react'

const Message = () => {
    const[message,setMessage]=useState(["a","d"])

  return (
    <div>
      
     {/* {message.length>0 && <h1>here is {message.length} messages!</h1>} */}
     {/* {
     message.length===0 ? 
     <h1>all caught up</h1>: <h1>there are{message.length} {
      message.length===1 ? "message":"messages"
     } </h1>
     } */}
      {
     message.length===0 ? 
     <h1>all caught up</h1>: <h1>there are{message.length} message{message.length>1 && "s"}</h1>
     }


    </div>
  )
}

export default Message
