import React, { useEffect } from 'react'
import { useState } from 'react'

const Eg = () => {
  const [show, setShow] = useState(false)
  const toggle = () => {
    setShow(prevValue => !prevValue)
  }
  
  return (
    <>
      <button onClick={toggle}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </>
  )
}
export default Eg

function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener("resize", function () {
      console.log("resized")
      setWindowWidth(window.innerWidth)
    })
  }, [])
  return (
    <>
      <h1>window Width:{windowWidth}</h1>
    </>
  )
}
