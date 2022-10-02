import React from 'react'
import {useState, useEffect} from "react";
import './style.css'

function Counter() {
    const [count, setCount] = useState(0);
   
// useEffect(()=>{
//     setCount(0)
// }, [])

    return (
        <div>
            <h1 className='App-count-content'>{count}</h1>
         <div className='Btn-holder'>
           <button onClick={()=> setCount((prev)=> (prev <= 0 ? prev = 0 : prev -1  ))} className= "App-button"> Decrese</button>
           <button onClick={() =>setCount((prev)=> prev +1)} className= "App-button"> Increase</button>
          </div>
        </div>
       
  )
}

export default Counter;
