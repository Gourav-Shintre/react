import React from 'react'
import UseCount from './UseCount';
function Counter2() {
    const [count,increment,decrement] = UseCount();
  return (
    <div><h1>{count}</h1>
    <button onClick={increment}>
      Increment 
    </button>
    <button onClick={decrement}>
      Decrement 
    </button></div>
  )
}

export default Counter2