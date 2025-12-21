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
          return <div className='flex w-25 p-2 m-5'>
            <img src={elem.image} alt="" />
          </div>
        })
    }

  return (
    <div>
        <button className='text-2xl ' onClick={getdata}>Get Data</button>


        <div>
          {printuserdata}
        </div>
    </div>
  )
}

export default App
