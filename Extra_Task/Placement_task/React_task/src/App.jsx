import React from 'react'
import Login from './admin/pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './admin/pages/Dashboard'
import Header from './admin/component/Header'
import Footer from './admin/component/Footer'
import Add_product from './admin/pages/Add_product'
import Manage_product from './admin/pages/Manage_product'
import Before_login from './admin/pages/Before_login'
import After_login from './admin/pages/After_login'
import Edit_user from './admin/pages/Edit_user'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer />
        <Routes>

          <Route element={<Before_login />}>
            <Route path='/' element={<><Login /></>}></Route>
          </Route>

          <Route element={<After_login />}>
            <Route path="/dashboard" element={<> <Header /><Dashboard /><Footer /></>}></Route>
            <Route path="/add_product" element={<> <Header /><Add_product /><Footer /></>}></Route>
            <Route path="/manage_product" element={<> <Header /><Manage_product /><Footer /></>}></Route>
            <Route path="/edit_user/:id" element={<> <Header /><Edit_user /><Footer /></>}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
