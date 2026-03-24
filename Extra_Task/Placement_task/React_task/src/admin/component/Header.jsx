import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Header = () => {

        const navigate = useNavigate();
        const logouthandle = ()=>{
            sessionStorage.clear();
            navigate("/")
        }
    return (
        <div>
            <div class="p-5 bg-primary text-white text-center">
                <h1>Dashboard</h1>
                {/* <p>Resize this responsive page to see the effect!</p> */}
            </div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/add_product">Add_User</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/manage_product">Manage_User</NavLink>
                        </li>

                    </ul>

                    <button className='btn btn-danger' onClick={logouthandle}>Logout</button>
                </div>
            </nav>

        </div>
    )
}

export default Header
