import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';



const User = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
    })

    const changehandle = (e)=>{
        setData ({...data, id: new Date().getTime().toString(), [e.target.name]: e.target.value})
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:3001/user",data);
        setData({...data,name:"",email:""})
        console.log(res.data);
        alert('user added successfully')

    }



    return (
        <div>
            <div className="p-5 bg-primary text-white text-center">
                <h1>My First Bootstrap 5 Page</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/user">user profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/manage_user">Manage user</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
            <form onSubmit={handlesubmit} className='p-5'>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Name:</label>
                    <input type="text" className="form-control" onChange={changehandle} id="name" placeholder="Enter Name" name="name" />
                </div>
                <div className="mb-3 mt-3"> 
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" onChange={changehandle} id="email" placeholder="Enter email id" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Password:</label>
                    <input type="password" className="form-control" onChange={changehandle} id="pwd" placeholder="Enter password" name="pswd" />
                </div>
                <div className="form-check mb-3">
                    <label className="form-check-label">
                        <input className="form-check-input" onChange={changehandle} type="checkbox" name="remember" /> Remember me
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default User
