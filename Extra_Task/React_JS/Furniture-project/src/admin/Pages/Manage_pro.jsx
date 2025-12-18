import React from 'react'

const Manage_pro = () => {
    return (
        <div>
            <div className="container mt-3">
                <h2>Manage Products</h2>
                <table className="table table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Nordic Chair</td>
                            <td>Chair</td>
                            <td>$50</td>
                            <td>25</td>
                            <td>
                                <button className="btn btn-sm btn-info">Edit</button>
                                <button className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                        {/* More products */}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Manage_pro
