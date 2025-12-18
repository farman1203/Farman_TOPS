import React from 'react'

const Categories = () => {
    return (
        <div>
            
            <div className="container mt-4">
                <h2>Categories</h2>
                <form className="row g-3 mb-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Enter Category Name" />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary">Add Category</button>
                    </div>
                </form>
                <table className="table table-bordered table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Category Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Sofa</td>
                            <td>
                                <button className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Categories
