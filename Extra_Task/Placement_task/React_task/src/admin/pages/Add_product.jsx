import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const Add_product = () => {
    
    const [data,setdata]= useState({
        id:"",
        name:"",
        email:"",
        image:"",
    })

    const changehandle = (e)=>{
        setdata({...data,id: new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(data);
    }
    
    const submithandle=async (e)=>{
        e.preventDefault()
        const obj = await  axios.post('http://localhost:3001/user',data);
        setdata({...data, id:"",name:"",email:"",image:""});
        toast.success('user added succussfully!');

    }

  return (
    <div>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Add User</h1>

                </div>
            </div>
            <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" onSubmit={submithandle}  method="post" role="form">
                        <div className="row">
                          
                            <div className="form-group col-md-12 mb-3">
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
                                <button type="submit" className="btn btn-success btn-lg px-3">Submit</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
  )
}

export default Add_product
