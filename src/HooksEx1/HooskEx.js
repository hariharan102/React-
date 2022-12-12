import React, { useEffect, useState } from 'react'

function HooksEx() {
    const[count,setCount]=useState(0)
    useEffect(()=>{document.title="HI";})
    let inc=()=>{setCount(count+1)}
    let dec=()=>{setCount(count-1)}
    let incc=()=>{setCount(count+5)}
   
    
  return (
      <div>
      <h1>{count}</h1>
    
<button onClick ={inc}>click</button>
<button onClick ={dec}>click</button>
<br></br><button onClick ={incc}>click</button>
    </div>
  )
}

export default HooksEx
