import React from 'react'

const Alogin = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card shadow">
                            <div className="card-body">
                                <h3 className="text-center">Admin Login</h3>
                                <form>
                                    <div className="mb-3">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="admin@example.com" required />
                                    </div>
                                    <div className="mb-3">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="••••••••" required />
                                    </div>
                                    <button className="btn btn-primary w-100">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Alogin
