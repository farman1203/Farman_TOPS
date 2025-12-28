import React from 'react'
import Header from './Website/Component/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './Website/Component/Footer'
import Index from './Website/Pages/Index'
import About from './Website/Pages/About'
import Shop from './Website/Pages/Shop'
import Shop_single from './Website/Pages/Shop_single'
import Cart from './Website/Pages/Cart'
import Checkout from './Website/Pages/Checkout'
import Contact from './Website/Pages/Contact'

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<><Header/><Index/><Footer/></>}></Route>
              <Route path="/about" element={<><Header/><About/><Footer/></>}></Route>
              <Route path="/shop" element={<><Header/><Shop/><Footer/></>}></Route>
              <Route path="/shop-single" element={<><Header/><Shop_single/><Footer/></>}></Route>
              <Route path="/cart" element={<><Header/><Cart/><Footer/></>}></Route>
              <Route path="/checkout" element={<><Header/><Checkout/><Footer/></>}></Route>
              <Route path="/contact" element={<><Header/><Contact/><Footer/></>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
