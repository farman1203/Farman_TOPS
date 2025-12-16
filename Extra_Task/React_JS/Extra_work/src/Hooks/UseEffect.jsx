import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [num1,setNum] = useState(0)
   

        useEffect(function(){
                console.log("incerse....."); 
        },[])
  return (
    <div>
        <h1>A value of num {num1}</h1>
      
        <button onClick={()=>{
            setNum(num1+1)
        }}>Increse</button>
        
    </div>
  )
}

export default UseEffect
