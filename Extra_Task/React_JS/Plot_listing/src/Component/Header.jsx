import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* ***** Logo Start ***** */}
                            <a href="index.html" className="logo">
                            </a>
                            {/* ***** Logo End ***** */}
                            {/* ***** Menu Start ***** */}
                            <ul className="nav">
                                <li><NavLink to="/" >Home</NavLink></li>
                                <li><NavLink to="/category">Category</NavLink></li>
                                <li><NavLink to="/listing">Listing</NavLink></li>
                                <li><NavLink to="/contact">Contact Us</NavLink></li>
                                <li><div className="main-white-button"><a href="#"><i className="fa fa-plus" /> Add Your Listing</a></div></li>
                            </ul>
                            <a className="menu-trigger">
                                <span>Menu</span>
                            </a>
                            {/* ***** Menu End ***** */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>


    )
}

export default Header
