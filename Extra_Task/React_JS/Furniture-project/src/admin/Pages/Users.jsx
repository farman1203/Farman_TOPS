import React from 'react'

const Users = () => {
    return (
        <div>
            <div className="container mt-4">
                <h2>Users</h2>
                <table className="table table-bordered table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Rahul Sharma</td>
                            <td>rahul@gmail.com</td>
                            <td>User</td>
                            <td><span className="badge bg-success">Active</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default Users
