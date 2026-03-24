import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { data, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Manage_product = () => {

    const navigate = useNavigate();

    useEffect(() => {
        fetch_data()
    })

    const [data, setdata] = useState([]);

    const fetch_data =async () => {
        const obj =await axios.get('http://localhost:3001/user');
        setdata(obj.data);
    }

    const deletehandle=async (id)=>{
        const obj = await axios.delete(`http://localhost:3001/user/${id}`)
        fetch_data()
        toast.success('delete successfully')
        return false;
    }


return (
    <div>
        <div className="container-fluid bg-light py-5">
            <div className="col-md-6 m-auto text-center">
                <h1 className="h1">Manage Users</h1>

            </div>
        </div>
        <div className="container py-5">
            <div className="row py-5">
                <div className="col-md-9 m-auto">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Image</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((value,idx) => {
                                    return ( <tr key={idx}>
                                        <td>{value.id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td><img src={value.image} width="80px" height="50px" alt="" /></td>
                                        <td className='text-center'>
                                            <button className='btn btn-danger me-2' onClick={()=>deletehandle(value.id)}>Delete</button>
                                            <button className='btn btn-primary' onClick={(id)=>navigate(`/edit_user/${value.id}`)}>Edit</button>
                                        </td>
                                    </tr>
                               ) })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
)
}

export default Manage_product
