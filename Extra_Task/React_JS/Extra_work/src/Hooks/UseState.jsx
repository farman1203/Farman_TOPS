import React from 'react'
import { useState } from 'react'

const UseState = () => {

  const [data, setData] = useState(0);

  return (
    <div>
      <h1>The total : {data}</h1>
      <button onClick={() => {
        setData(data + 1)
      }}>+</button>
      <button onClick={() => {
        setData(data - 1)
      }}>-</button>


    </div>
  )
}

export default UseState
