import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Header from './Component/Header'
import Footer from './Component/Footer'


const App_Function = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<><Header/><Home/><Footer/></>}></Route>
                    <Route path="/about" element={<><Header/><About /><Footer/></>}></Route>
                    <Route path="/contact" element={<><Header/><Contact /><Footer/></>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App_Function
