import React from 'react'
import Index from './website/pages'
import User from './website/pages/user'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Manage_user from './website/pages/Manage_user'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Index/></>}></Route>
          <Route path="/user" element={<><User/></>}></Route>
          <Route path="/manage_user" element={<><Manage_user/></>}></Route>
        </Routes>
      </BrowserRouter>
       
    </div>  
  )
}

export default App
