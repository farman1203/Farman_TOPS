import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            {/* Navbar Start */}
            <div className="container-fluid p-0 nav-bar">
                <nav className="navbar n1 navbar-expand-lg bg-none navbar-dark py-3">
                    <Link tp="/" className="navbar-brand px-lg-4 m-0">
                        <h1 className="m-0 display-4 text-uppercase text-white">KOPPEE</h1>
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto p-4">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/service" className="nav-item nav-link">Service</Link>
                            <Link to="/menu" className="nav-item nav-link">Menu</Link>
                            <Link to="/reservation" className="nav-item nav-link">Reservation</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                    </div>
                </nav>
            </div>
            {/* Navbar End */}


        </div>
    )
}

export default Header
