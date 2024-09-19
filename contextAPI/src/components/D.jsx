import { useContext } from 'react'
import {ContextName} from '../context/UserContex'

function D() {
    const {name,age}=useContext(ContextName)
  return (
    <div>D{name}{age}</div>
  )
}

export default D