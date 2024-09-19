import React from 'react'
import Child from './Child'
function Parent() {
    const msg="Hello i am parent passing to grandgrand parent"
  return (
            <>
            <Child ghe={msg}/>
            </>  
)
}

export default Parent