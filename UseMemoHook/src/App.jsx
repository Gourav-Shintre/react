import { useState } from 'react'
import './App.css'
import { useMemo } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)

  const isEven=useMemo(()=>{
    console.warn(".......");
    let result;
    for(let i = 0; i < 400000000; i++) { // Reduced loop count for practical delay
      result = count % 2 === 0;
    }
    return result;

  },[count])

  

  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <span>{isEven? "Even" : "Odd"}</span>
        <button onClick={() => setCount1((count1) => count1 + 1)}>
          count1 is {count1}
        </button>
      </div>
    </>
  )
}

export default App
