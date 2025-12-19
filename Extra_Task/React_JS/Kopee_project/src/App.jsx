import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Website/Component/Header'
import Index from './Website/pages/Index'
import Footer from './Website/Component/Footer'
import About from './Website/pages/About'
import Service from './Website/pages/Service'
import Menu from './Website/pages/Menu'
import Reservation from './Website/pages/Reservation'
import Contact from './Website/pages/Contact'
import Testimonial from './Website/pages/Testimonial'

const App = () => {
  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<><Header/><Index/><Footer/></>}></Route>
                <Route path='/about' element={<><Header/><About/><Footer/></>}></Route>
                <Route path='/service' element={<><Header/><Service/><Footer/></>}></Route>
                <Route path='/menu' element={<><Header/><Menu/><Footer/></>}></Route>
                <Route path='/reservation' element={<><Header/><Reservation/><Footer/></>}></Route>
                <Route path='/contact' element={<><Header/><Contact/><Footer/></>}></Route>
                <Route path='/testimonial' element={<><Header/><Testimonial/><Footer/></>}></Route>
            </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
