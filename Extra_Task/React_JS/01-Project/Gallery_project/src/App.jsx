import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

    const [userData, setUserData] = useState([])

    const getdata = async () =>{
      const response=await axios.get('https://fakestoreapi.com/products')
       setUserData(response.data)
       console.log(response);
       
    }
    
    let printuserdata = "No user data."
    
    if(userData.length>0){
        printuserdata = userData.map(function(elem){
          return <div>
            <img src={elem.image} alt="" />
          </div>
        })
    }
  return (
    <div>
        <button onClick={getdata}>Get Data</button>


        <div>
          {printuserdata}
        </div>
    </div>
  )
}

export default App
