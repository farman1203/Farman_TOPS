import React from 'react'



const Cal = () => {
    const cals=[10,20,30,40,50]
  return (
    <div>
      
        {cals.map(function(elem){
            return <h1>{elem*5}</h1>
        })}
     
    </div>
  )
}

export default Cal
