import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('');
  const [detail, setdetail] = useState('');


  const [task, settask] = useState([]);

  const submithandler = (e) => {
    e.preventDefault()

    const copytask = [...task];
    copytask.push({ title, detail })
    settask(copytask);


    setTitle('')
    setdetail('')

  }

  const deletenote = (idx) => {
    const copytask = [...task];

    copytask.splice(idx, 1)

    settask(copytask)

  }

  return (
    <div>

      <form className='lg:border-2 m-1' onSubmit={(e) => {
        submithandler(e);
      }}>
        <div className='p-5 grid'>
          <h1 className='text-4xl m-2 font-black'>Add Notes</h1>
          <input type="text" className='m-5 p-2 ' placeholder='Enter heading Notes'
            value={title} onChange={(e) => {
              setTitle(e.target.value);
            }} />

          <textarea name="" id="" className='m-5 p-2 ' placeholder='Enter note details'
            value={detail} onChange={(e) => {
              setdetail(e.target.value)
            }}></textarea>

          <button
            className='bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded'>
            Add Note
          </button>
        </div>
      </form>


      <div className=' p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 '>
          {task.map(function (elem, idx) {

            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.detail}</p>
              </div>
              <button onClick={() => {
                deletenote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
