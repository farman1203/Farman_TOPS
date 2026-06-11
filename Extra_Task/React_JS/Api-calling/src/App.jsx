import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  const api = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }

  return (
    <div >
      <button onClick={api} className='m-5 p-2 bg-gray-500 rounded text-2xl text-white'>get data</button>
      <div className='flex flex-wrap gap-10 ml-10'>
        {data.map( (elem)=> {
          return <div>
            <div className='card p-5'>
              <h1 className='font-black'>Author Name:{elem.author}</h1>
              <h3>Width:{elem.width}</h3>
              <h3>Height:{elem.height}</h3>
              <img src={elem.download_url} alt="" className='w-[250px] flex items-center justify-center' />
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
