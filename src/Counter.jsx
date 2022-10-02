import React from 'react'
import {useState, useEffect} from "react";
import './style.css'

function Counter() {
    const [count, setCount] = useState(0);
   
   let increase;
  const increment =()=>{ 
    setCount((prev)=> prev +1)
increase = "increase";
 }
useEffect(()=>{
    setCount(0)
}, [])

    return (
        <div>
            <i> {increase} </i>
            <h1 className='App-count-content'>{count}</h1>
         <div className='Btn-holder'>
           <button onClick={()=> setCount((prev)=> (prev <= 0 ? prev = 0 : prev -1  ))} className= "App-button"> Decrese</button>
           <button onClick={() =>increment() } className= "App-button"> Increase</button>
          </div>
        </div>
       
  )
}

export default Counter;
