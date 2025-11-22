import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div class="p-5 bg-primary text-white text-center">
                <h1>My First Bootstrap 5 Page</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>

            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <NavLink className="nav-link " to="/">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/About">About</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/Contact">Conatact</NavLink>
                        </li>
                       
                    </ul>
                </div>
            </nav>
            
        </div>
    )
}

export default Header
