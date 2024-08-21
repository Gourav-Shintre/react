import React from 'react'
import { useEffect } from 'react'

function Counter1({number}) {

    useEffect(()=>{
        console.log("functional component mounting");
        return ()=>{
            console.log("Functional component removed");
        }
    },[number])

  return (
    <div>{number}</div>
  )
}

export default Counter1
