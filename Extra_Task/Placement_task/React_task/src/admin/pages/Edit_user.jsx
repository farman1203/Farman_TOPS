import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const Edit_user = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [data, setdata] = useState({
       
        name: "",
        email: "",
        image: "",
    })

    useEffect(() => {
        get_user()
    },[])

    const get_user = async () => {
        const obj = await axios.get(`http://localhost:3001/user/${id}`)
        setdata(obj.data)
    }

    const changehandle = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    }

    const submithandle = async (e) => {
        e.preventDefault();
        const obj = await axios.put(`http://localhost:3001/user/${id}`,data)
        toast.info('updateed');
        navigate('/manage_product')
    }


    return (
        <div>
            <form className="col-md-9 m-auto" onSubmit={submithandle} method="post" role="form">
                <div className="row">
             <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Edit User</h1>

                </div>
                    <div className="form-group mt-5 col-md-12 mb-3">
                        <label htmlFor="inputemail">Name</label>
                        <input type="text" value={data.name} onChange={changehandle} className="form-control mt-1" name="name" placeholder="Name" />
                    </div>

                    <div className="form-group col-md-12 mb-3">
                        <label htmlFor="inputemail">Email</label>
                        <input type="text" value={data.email} onChange={changehandle} className="form-control mt-1" name="email" placeholder="Enter email" />
                    </div>

                    <div className="form-group col-md-12 mb-3">
                        <label htmlFor="inputemail">Enter Image URL</label>
                        <input type="url" value={data.image} onChange={changehandle} className="form-control mt-1" id="image" name="image" placeholder="Enter Image URL" />
                    </div>

                </div>

                <div className="row">
                    <div className="col text-end mt-2">
                        <button type="submit" className="btn btn-success btn-lg px-3">Save</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Edit_user
