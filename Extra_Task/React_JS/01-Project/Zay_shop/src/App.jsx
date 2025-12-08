import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Website/Component/Header'
import Home from './Website/Pages/Home'
import Footer from './Website/Component/Footer'
import About from './Website/Pages/About'
import Contact from './Website/Pages/Contact'
import Shop from './Website/Pages/Shop'
import Shop_single from './Website/Pages/Shop_single'
import Signup from './Website/Pages/Signup'
import Login from './Website/Pages/Login'
import AHeader from './Admin/Component/AFooter'
import AFooter from './Admin/Component/AHeader'
import Admin_login from './Admin/Pages/Admin_login'
import Dashboard from './Admin/Pages/Dashboard'
import Add_categories from './Admin/Pages/Add_categories'
import Manage_categories from './Admin/Pages/Manage_categories'
import Add_product from './Admin/Pages/Add_product'
import Manage_product from './Admin/Pages/Manage_product'
import Manage_contact from './Admin/Pages/Manage_contact'
import Manage_customer from './Admin/Pages/Manage_customer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header /><Home /><Footer /></>}></Route>
          <Route path='/about' element={<><Header /><About /><Footer /></>}></Route>
          <Route path='/contact' element={<><Header /><Contact /><Footer /></>}></Route>
          <Route path='/shop' element={<><Header /><Shop /><Footer /></>}></Route>
          <Route path='/shop_single' element={<><Header /><Shop_single /><Footer /></>}></Route>
          <Route path='/login' element={<><Header /><Login /><Footer /></>}></Route>
          <Route path='/signup' element={<><Header /><Signup /><Footer /></>}></Route>



          <Route path="/admin-login" element={<><Admin_login /></>}></Route>
          <Route path="/dashboard" element={<><AHeader /><Dashboard /><AFooter /></>}></Route>
          <Route path="/add_categories" element={<><AHeader /><Add_categories /><AFooter /></>}></Route>
          <Route path="/manage_categories" element={<><AHeader /><Manage_categories /><AFooter /></>}></Route>
          <Route path="/add_product" element={<><AHeader /><Add_product /><AFooter /></>}></Route>
          <Route path="/manage_product" element={<><AHeader /><Manage_product /><AFooter /></>}></Route>
          <Route path="/manage_contact" element={<><AHeader /><Manage_contact /><AFooter /></>}></Route>
          <Route path="/manage_customer" element={<><AHeader /><Manage_customer /><AFooter /></>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
