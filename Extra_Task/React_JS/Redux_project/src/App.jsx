import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AHeader from './Admin/Component/AFooter'
import AFooter from './Admin/Component/AHeader'
// import Admin_login from './Admin/Pages/Admin_login'
import Dashboard from './Admin/Pages/Dashboard'
import Add_categories from './Admin/Pages/Add_categories'
import Manage_categories from './Admin/Pages/Manage_categories'
import Add_product from './Admin/Pages/Add_product'
import Manage_product from './Admin/Pages/Manage_product'
import Manage_contact from './Admin/Pages/Manage_contact'
import Manage_customer from './Admin/Pages/Manage_customer'
// import Pagenotfound from './Website/Pages/Pagenotfound'

function App() {
  return (
    <div>
      <BrowserRouter>
       <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<><AFooter /><Dashboard /><AHeader/></>}></Route>
          {/* <Route path="/admin-login" element={<><Admin_login /></>}></Route> */}
          <Route path="/add_categories" element={<><AFooter /><Add_categories /><AHeader/></>}></Route>
          <Route path="/manage_categories" element={<><AFooter /><Manage_categories /><AHeader/></>}></Route>
          <Route path="/add_product" element={<><AFooter /><Add_product /><AHeader/></>}></Route>
          <Route path="/manage_product" element={<><AFooter /><Manage_product /><AHeader/></>}></Route>
          <Route path="/manage_contact" element={<><AFooter /><Manage_contact /><AHeader/></>}></Route>
          <Route path="/manage_customer" element={<><AFooter /><Manage_customer /><AHeader/></>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
