import React,{memo} from 'react'

function Child({}) {
    console.log("child component rendered");
  return (
    
    <div>Child</div>
  )
}

export default memo(Child)