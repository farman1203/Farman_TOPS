import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">
                    <h1>Medi<span style={{ color: '#099aa7' }}>Nest</span> </h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="department.html">Departments
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="service.html">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Doctors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">More Pages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Dropdown</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                    <button className="btn btn-info ms-3">Appoinment</button>
                </div>
            </nav>

        </div>
    )
}

export default Header
