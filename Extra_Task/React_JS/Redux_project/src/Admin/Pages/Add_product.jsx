import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { inser_data } from '../../app/productSlice';

function Add_product() {
    const [data, setData] = useState({
        name:"",
        email:"",
        image:"",
        password:"",
    });

    const changehandle=(e)=>{
        setData({...data, [e.target.name]:e.target.value});
        console.log(data);  
    }

    const validation=()=>{
        if(data.name=="" || data.name=="null"){
            toast.error('name field is required')
            return false;
        }
        if(data.email=="" || data.email=="null"){
            toast.error('email field is required')
            return false;
        }
        if(data.image=="" || data.image=="null"){
            toast.error('image field is required')
            return false;
        }
        if(data.password=="" || data.password=="null"){
            toast.error('password field is required')
            return false;
        }

    }
        const dispatch = useDispatch();

        const submithandle=(e)=>{
            e.preventDefault();
            if(validation()){
                dispatch(inser_data(data));
                setData({...data, name:"",email:"",image:"",password:""});
                toast.success("Product added successfulyy");
                return false;
            }
        }

  return (
    <div>
        <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Add Product</h1>
                   
                </div>
            </div>
        <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" onSubmit={submithandle}>
                        <div className="row">
                             <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Name</label>
                                <input type="text" value={data.name} onChange={changehandle} className="form-control mt-1" id="name" name="name" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Email</label>
                                <input type="email" value={data.email} onChange={changehandle} className="form-control mt-1" id="email" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Image URL</label>
                                <input type="url" value={data.image} onChange={changehandle} className="form-control mt-1" id="imh" name="image" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputname">Password</label>
                                <input type="password" value={data.password} onChange={changehandle} className="form-control mt-1" id="name" name="password" placeholder="Password" />
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