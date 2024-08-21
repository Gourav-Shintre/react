import React from 'react'
import { useState } from 'react'

function Timer() {
    const[items]=useState([1,2,3,4,5,6])
  return (
    <div>
        <ul>
            <li>
                {items.map((item,index)=>(
                    <li key={index}>{item}</li>))}
                
            </li>
        </ul>

        
        Timer</div>
  )
}

export default Timer