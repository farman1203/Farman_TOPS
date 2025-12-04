import React from 'react'
import {useState} from 'react'

const UseState = () => {
 
    const [num,setnum] = useState(10);
    function Change(){
        setnum(30)
    }

  return (
    <div>
      <h1>The Value of num is {num}</h1>
      <button onClick={Change}>Click</button>
    </div>
  )
}

export default UseState
