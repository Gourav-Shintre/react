import React from 'react'
import GrandChild from './GrandChild'

// eslint-disable-next-line react/prop-types
function Child({ghe}) {
  return (
    <>
        <div>Child</div>
        <GrandChild tubighe={ghe}/>
    </>
  )
}

export default Child