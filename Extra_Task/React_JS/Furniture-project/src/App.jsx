import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Index from './Pages/Index'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Blog from './Pages/Blog'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Shop from './Pages/Shop'
import Thankyou from './Pages/Thankyou'
import About from './Pages/About'
import Alogin from './admin/Pages/Alogin'
import Dashboard from './admin/Pages/Dashboard'
import Manage_pro from './admin/Pages/Manage_pro'
import Product from './admin/Pages/Product'
import Order from './admin/Pages/order'
import Users from './admin/Pages/users'
import Categories from './admin/Pages/Categories'

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<><Header/><Index/><Footer/></>}></Route>
                <Route path='/blog' element={<><Header/><Blog/><Footer/></>}></Route>
                <Route path='/cart' element={<><Header/><Cart/><Footer/></>}></Route>
                <Route path='/checkout' element={<><Header/><Checkout/><Footer/></>}></Route>
                <Route path='/contact' element={<><Header/><Contact/><Footer/></>}></Route>
                <Route path='/services' element={<><Header/><Services/><Footer/></>}></Route>
                <Route path='/shop' element={<><Header/><Shop/><Footer/></>}></Route>
                <Route path='/thankyou' element={<><Header/><Thankyou/><Footer/></>}></Route>
                <Route path='/about' element={<><Header/><About/><Footer/></>}></Route>
               
               
                <Route path='/alogin' element={<><Alogin/></>}></Route>
                <Route path='/dashboard' element={<><Dashboard/></>}></Route>
                <Route path='/manage_pro' element={<><Manage_pro/></>}></Route>
                <Route path='/order' element={<><Order/></>}></Route>
                <Route path='/users' element={<><Users/></>}></Route>
                <Route path='/product' element={<><Product/></>}></Route>
                <Route path='/categories' element={<><Categories/></>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
