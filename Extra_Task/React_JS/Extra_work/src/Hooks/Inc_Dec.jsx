import React, { useState } from 'react'

const Inc_Dec = () => {
    const [num, setnum] = useState(0);

    const increse = () => {
        setnum(num + 1)
    }
    const decrese = () => {
        setnum(num - 1)
    }
    const multi = () => {
        setnum(num + 5)
    }

    return (
        <div className='parent1'>
            <h1>{num}</h1>
            <button onClick={increse}>Increse</button>
            <button onClick={decrese}>Decrese</button>
            <button onClick={multi}>Increas by 5</button>
        </div>
    )
}

export default Inc_Dec
