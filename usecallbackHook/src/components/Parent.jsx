import React,{useState} from 'react'
import Child from './Child'
import { useCallback } from 'react'

function Parent() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState([])
    const fun =useCallback(()=>{
        console.log("hello gourav");
    },count1)
  return (
    <>
    <Child count1={count1} fun={fun}/>
    <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  </>
  
  )
}

export default Parent