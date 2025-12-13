import React from 'react'
import { useState } from 'react'

const UseState = () => {

  const [num, setnum] = useState(10);

  return (
    <div>
      <h1>The Value of num is {num}</h1>
      <button onClick={() => {
        setnum(num + 10)
      }}>Click</button>
    </div>
  )
}

export default UseState
