import React, { useEffect, useState } from 'react'

const UseEffect = () => {


  const [num1, setNum] = useState(0)
  const [num2, setNum2] = useState(0)

  useEffect(function () {
    console.log("incerse.....");
  }, [num1])

  return (
    <div>
      <h1>A value of num {num1}</h1>
      <h1>A value of num {num2}</h1>

      <button onClick={() => {
        setNum(num1 + 1)
      }}>Increse</button>
      <button onClick={() => {
        setNum2(num2 - 1)
      }}>Descers</button>

    </div>
  )
}

export default UseEffect
