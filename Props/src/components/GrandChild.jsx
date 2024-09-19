import React from 'react'
import GrandGrandChild from './GrandGrandChild'

function GrandChild({tubighe}) {
  return (
    <>
     <div>GrandChild</div>
     <GrandGrandChild tubighe={tubighe} />
    </>
   
  )
}

export default GrandChild