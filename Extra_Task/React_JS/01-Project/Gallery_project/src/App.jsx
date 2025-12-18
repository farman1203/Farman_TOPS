import React from 'react'
import axios from 'axios'

const App = () => {

    const getdata = async () =>{
      const response=await axios.get('https://fakestoreapi.com/products')
        console.log(response.data);
    }
     
      
    
  return (
    <div>
        <button onClick={getdata}>Get Data</button>
    </div>
  )
}

export default App
