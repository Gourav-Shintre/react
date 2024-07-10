import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(11); // Using const and array destructuring for useState


  const addValue = () => {
    // setCounter(counter + 1); // Increment counter using setCounter
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)


  };
  const removeValue = () => {

    setCounter(counter-1);

  }

  return (
    <>
     <h1>Learning React project counter {counter} </h1>
     <h2>Counter Value : {counter}</h2>

     <button onClick={addValue}>Add Value</button>{" "}
     
     <button onClick={removeValue}>Remove value</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App
