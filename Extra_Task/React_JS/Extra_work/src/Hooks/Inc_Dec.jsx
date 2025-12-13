import React, { useState } from 'react'

const Inc_Dec = () => {
    const [num, setnum] = useState(0);

   
  

    return (
        <div className='parent1'>
            <h1>{num}</h1>
            <button onClick={()=>{setnum(num+1)}}>Increse</button>
            <button onClick={()=>{setnum(num-1)}}>Decrese</button>
            <button onClick={()=>{setnum(num+5)}}>Increas by 5</button>
        </div>
    )
}

export default Inc_Dec
