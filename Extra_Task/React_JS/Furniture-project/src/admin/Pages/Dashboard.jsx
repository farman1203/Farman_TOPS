import React from 'react'
import { Link, Links } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    {/* Sidebar */}
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
                    {/* Content */}
                    <div className="col-md-10">
                        <h2 className="mt-3">Dashboard</h2>
                        <div className="row mt-4">
                            <div className="col-md-4">
                                <div className="card text-white bg-primary mb-3">
                                    <div className="card-body">
                                        <h5>Total Products</h5>
                                        <p className="fs-3">120</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card text-white bg-success mb-3">
                                    <div className="card-body">
                                        <h5>Total Orders</h5>
                                        <p className="fs-3">80</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card text-white bg-warning mb-3">
                                    <div className="card-body">
                                        <h5>Total Users</h5>
                                        <p className="fs-3">300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
