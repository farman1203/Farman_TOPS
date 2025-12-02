import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from './Pages/Contact'
import Category from './Pages/Category'
import Listing from './Pages/Listing'
import Index from './Pages'
import Footer from './Component/Footer'
import Header from './Component/Header'

const App = () => {
  return (
    <div>
       <BrowserRouter>
                <Routes>
                   <Route path="/"  element={<><Header /><Index /><Footer/></>}> </Route>
                   <Route path="/contact"  element={<><Header /><Contact /><Footer/></>}> </Route>
                   <Route path="/category"  element={<><Header /><Category /><Footer/></>}> </Route>
                   <Route path="/listing"  element={<><Header /><Listing /><Footer/></>}> </Route>
                </Routes>
            </BrowserRouter>
    </div>
  )
}

export default App
