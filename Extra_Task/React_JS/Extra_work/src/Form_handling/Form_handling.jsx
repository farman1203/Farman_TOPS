import React, { useState } from 'react'

const Form_handling = () => {
 
        const [title, setTitle] = useState ('')

        const inputhandle = (e) => {
            e.preventDefault()
            console.log('form submittedd... by' , title);

            setTitle('')
        }

  return (
    <div>
        <form onSubmit={(e)=>{
            inputhandle(e)
        }}>
            <input className='input1' placeholder='enter your name' value={title} onChange={(e)=>{
                setTitle(e.target.value)
                
            }}></input>
            <button>Click here</button>
        </form>
    </div>
  )
}

export default Form_handling
