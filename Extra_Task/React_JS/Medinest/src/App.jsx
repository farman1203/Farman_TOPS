import Contact from './Pages/Contact'
import About from './Pages/About'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Department from './Pages/Department'
import Service from './Pages/Service'
import Header from './Component/Header'
import Pnf from './Pages/Pnf'
import './index.css'
import Footer from './Component/Footer'


const App = () => {
  return (
    <div>
         <BrowserRouter>
                <Routes>
                   <Route path="/"  element={<><Header /><Home /><Footer/></>}> </Route>
                   <Route path="/About"  element={<><Header /><About /><Footer/></>}> </Route>
                   <Route path="/Department"  element={<><Header /><Department /><Footer/></>}> </Route>
                   <Route path="/Service"  element={<><Header /><Service /><Footer/></>}> </Route>
                   <Route path="/Contact"  element={<><Header /><Contact /><Footer/></>}> </Route>
                   <Route path="*"  element={<><Pnf /></>}> </Route>
                </Routes>
            </BrowserRouter>
    </div>
  )
}

export default App
