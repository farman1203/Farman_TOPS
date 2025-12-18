import React from 'react'
import { Link } from 'react-router-dom'

const Adashboard = () => {
  return (
    <div>
        <div className="col-md-2 bg-dark text-white vh-100">
                        <h3 className="text-center py-3">Furni Admin</h3>
                        <ul className="nav flex-column">
                            <li className="nav-item"><Link to="/dashboard" className="nav-link text-white">Dashboard</Link></li>
                            <li className="nav-item"><Link to="/manage_pro" className="nav-link text-white">Products</Link></li>
                            <li className="nav-item"><Link to="/order" className="nav-link text-white">Orders</Link></li>
                            <li className="nav-item"><Link to="/users" className="nav-link text-white">Users</Link></li>
                            <li className="nav-item"><Link to="/categories" className="nav-link text-white">Categories</Link></li>
                          
                        </ul>
                    </div>
    </div>
  )
}

export default Adashboard
