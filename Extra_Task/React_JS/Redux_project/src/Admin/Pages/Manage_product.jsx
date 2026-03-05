import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { delete_data, get_data, update_data } from '../../app/productSlice';
import { toast } from 'react-toastify';

function Manage_product() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_data());
    }, [])

    const { user_arr } = useSelector((state) => state.product)

    const deletehandle = (id) => {
        dispatch(delete_data(id));
        toast.success('delete successfully!')
        dispatch(get_data());
    }

    const [data, setData] = useState({
        id: "",
        name: "",
        email: "",
        image: "",
        password: "",
    })

    const edithandle = (id) => {
        const editdata = user_arr.find((value) => value.id === id);
        setData(editdata);
    }

    const changehandle = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const validation = () => {
        if (data.name == "" || data.name == null) {
            toast.error('name field is required');
            return false;
        }
        if (data.email == "" || data.email == null) {
            toast.error('email field is required');
            return false;
        }
        if (data.image == "" || data.image == null) {
            toast.error('image field is required');
            return false;
        }
        return true;
    }


    const submithandle = (e) => {
        e.preventDefault();

        if (validation()) {
            dispatch(update_data(data));
            toast.success('updated successfully!');
            dispatch(get_data());
        }
    }

    return (
        <div>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Manage Product</h1>
                </div>
            </div>
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-md-9 m-auto">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Prod Name</th>
                                    <th>Image</th>
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    user_arr.map((value) => {
                                        return (
                                            <tr>
                                                <td>{value.id}</td>
                                                <td>{value.name}</td>
                                                <td><img src={value.image} width="50px" alt="" /></td>
                                                <td className='text-center'>
                                                    <button className='btn btn-danger me-2' onClick={() => { deletehandle(value.id) }}>Delete</button>
                                                    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => edithandle(value.id)}>Edit</button>
                                                </td>
                                            </tr>
                                        )
                                    })

                                }
                                <div className="modal" id="myModal">
                                    <div className="modal-dialog">
                                        <div className="modal-content">

                                            <div className="modal-header">
                                                <h4 className="modal-title">Edit User</h4>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                            </div>

                                            <div className="modal-body">
                                                <form action="" onSubmit={submithandle}>
                                                    <div className="mb-3 mt-3">
                                                        <label htmlFor="email">Name:</label>
                                                        <input type="name" value={data.name} onChange={changehandle} className="form-control" id="name" placeholder="Enter name" name="name" />
                                                    </div>
                                                    <div className="mb-3 mt-3">
                                                        <label htmlFor="email">Email:</label>
                                                        <input type="email" value={data.email} onChange={changehandle} className="form-control" id="email" placeholder="Enter email" name="email" />
                                                    </div>

                                                    <div className="mb-3">
                                                        <label htmlFor="pwd">Password:</label>
                                                        <input type="password" value={data.password} onChange={changehandle} className="form-control" id="pwd" placeholder="Enter password" name="password" />
                                                    </div>

                                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                                                </form>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manage_product