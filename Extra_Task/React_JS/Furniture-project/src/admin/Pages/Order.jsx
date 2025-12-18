import React from 'react'

const Order = () => {
    return (
        <div>
            <div className="container mt-4">
                <h2>Orders</h2>
                <table className="table table-bordered table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Order ID</th>
                            <th>User Name</th>
                            <th>Total Amount</th>
                            <th>Status</th>
                            <th>Order Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#101</td>
                            <td>Rahul Sharma</td>
                            <td>₹18,000</td>
                            <td><span className="badge bg-success">Delivered</span></td>
                            <td>12-09-2025</td>
                            <td>
                                <button className="btn btn-sm btn-info">View</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Order
