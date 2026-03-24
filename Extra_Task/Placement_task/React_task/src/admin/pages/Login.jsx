import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Login = () => {

    const redirect = useNavigate();

    const [obj_cate, setData] = useState({
        email: "",
        password: "",
    });

    const changehandle = (e) => {
        setData({ ...obj_cate, [e.target.name]: e.target.value });
        console.log(setData);
    }

    const submithandle = async (e) => {
        e.preventDefault();
        const obj = await axios.get(`http://localhost:3001/admin?email=${obj_cate.email}`);
        //console.log(obj.data);
        if (obj.data.length > 0) {
            if (obj.data[0].password == obj_cate.password) {
                //session created
                sessionStorage.setItem('s_aid', obj.data[0].id);
                sessionStorage.setItem('s_aname', obj.data[0].name);

                toast.success('Login Success ');
                redirect('/dashboard');
            }
            else {
                toast.success('Login Failed Due to Wrong Password');
                return false;
            }
        }
        else {
            toast.success('Login Failed Due to Wrong Email');
            return false;
        }
        return false;

    }
    return (
        <div>
            <form onSubmit={submithandle}>
                <h1 className='p-5 text-center'>Admin Login</h1>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" value={obj_cate.email} onChange={changehandle} className="form-control" id="email" placeholder="Enter email" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Password:</label>
                    <input type="password" value={obj_cate.password} onChange={changehandle} className="form-control" id="password" placeholder="Enter password" name="password" />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        </div>
    )
}

export default Login
