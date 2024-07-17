
import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(7)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*_"

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    alert("Copied!")
  }

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed, generatePassword])

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <div>
        <input
          type="text"
          value={password}
          placeholder="password"
          readOnly
        />
        <button onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div>
        <input
          type="range"
          min={6}
          max={15}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label htmlFor="length">Length: {length}</label>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            Special Characters
          </label>
        </div>
      </div>
    </div>
  )
}

export default App
