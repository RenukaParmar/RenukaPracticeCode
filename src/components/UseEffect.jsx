import React,{useEffect,useState} from 'react'

const EffectHook = () => {
    const[fetchdata,setFetchData]=useState({})
    const [count,setCount]=useState(0)
    console.log("console");
useEffect(()=>{
    console.log("useEffect ran");
    fetch(` https://dummyjson.com/products/${count}`)
    .then(response=>response.json())
    .then(data=>setFetchData(data))
},[count])

const handleChange=()=>{
setCount(count+1)
}
  return (
    <div>
        <h1>count is{count}</h1>
      <button onClick={handleChange}>Click</button>
        <p>{JSON.stringify(fetchdata,null,2)}</p>
    </div>
  )
}

export default EffectHook
