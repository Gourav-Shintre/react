import { useContext } from 'react';
import {GameContext} from '../context/GameContext';
function A() {
    // const {gameName,ratings}=useContext(GameContext)
    const{setValue}=useContext(GameContext)
    const handleSetValue = () => {
        setValue(45);  // Set the value in context to 45
    };
   
  return (
    <>
    {/* Game name is {gameName} and ratings is {ratings}  */}
    <button onClick={handleSetValue}>Set Value </button> {/* Button to set value */}
    </>
  )
}

export default A