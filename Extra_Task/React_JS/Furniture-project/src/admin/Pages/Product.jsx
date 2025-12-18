import React from 'react'

const Product = () => {
    return (
        <div>
            <div className="container mt-4">
                <h2>Manage Products</h2>
                <a href="add-product.html" className="btn btn-primary mb-3">+ Add Product</a>
                <table className="table table-bordered table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Nordic Chair</td>
                            <td>Chair</td>
                            <td>₹5,000</td>
                            <td>20</td>
                            <td>
                                <button className="btn btn-sm btn-warning">Edit</button>
                                <button className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Product
