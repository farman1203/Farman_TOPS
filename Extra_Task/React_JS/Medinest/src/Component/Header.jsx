import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">
        <h1>Medi<span style={{color: '#099aa7'}}>Nest</span> </h1>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/About">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Department">Departments
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Service">Service</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Doctor">Doctors</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Pnf">More Pages</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Pnf">Dropdown</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
          </li>
        </ul>
        <button className="btn btn-info ms-3">Appoinment</button>
      </div>
    </nav>
    </div>
  )
}

export default Header
