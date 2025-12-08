import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Website/Component/Header'
import Home from './Website/Pages/Home'
import Footer from './Website/Component/Footer'
import About from './Website/Pages/About'
import Contact from './Website/Pages/Contact'
import Shop from './Website/Pages/Shop'
import Shop_single from './Website/Pages/Shop_single'
import Signup from './Website/Pages/Signup'
import Login from './Website/Pages/Login'

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<><Header/><Home /><Footer/></>}></Route>
            <Route path='/about' element={<><Header/><About /><Footer/></>}></Route>
            <Route path='/contact' element={<><Header/><Contact /><Footer/></>}></Route>
            <Route path='/shop' element={<><Header/><Shop /><Footer/></>}></Route>
            <Route path='/shop_single' element={<><Header/><Shop_single /><Footer/></>}></Route>
            <Route path='/login' element={<><Header/><Login /><Footer/></>}></Route>
            <Route path='/signup' element={<><Header/><Signup /><Footer/></>}></Route>




            
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
