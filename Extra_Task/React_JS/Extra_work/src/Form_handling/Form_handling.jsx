import React from 'react'

const Form_handling = () => {

        const inputhandle = (e) => {
            e.preventDefault()
            console.log('form submittedd...');
        }

  return (
    <div>
        <form onSubmit={(e)=>{
            inputhandle(e)
        }}>
            <input className='input1' placeholder='enter your name'></input>
            <button>Click here</button>
        </form>
    </div>
  )
}

export default Form_handling
