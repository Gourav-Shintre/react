/* eslint-disable no-unused-vars */
import { useState } from 'react'false
import './App.css'
import { decrement, increment } from './counterSlice'
function App() {

  // eslint-disable-next-line no-undef
  const count = useSelector((state) => state.counter.value)

  return (
    <>
      {count}
    </>
  )
}

export default App
