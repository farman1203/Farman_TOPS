import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const inser_data = createAsyncThunk ('insert_data', async (object)=>{
    const res = await axios.post(`http://localhost:5001/product`,object);
    console.log(res.data);
    return res.data;
});
export const get_data = createAsyncThunk ('get_data', async ()=>{
    const res = await axios.get(`http://localhost:5001/product`);
    console.log(res.data);
    return res.data;
});
export const delete_data = createAsyncThunk ('delete_data', async (id)=>{
    const res = await axios.delete(`http://localhost:5001/product/${id}`);
    console.log(res.data);
    return res.data;
});
export const update_data = createAsyncThunk ('update_data', async (object)=>{
    const res = await axios.patch(`http://localhost:5001/product/${object.id}`,object);
    console.log(res.data);
    return res.data;
});

export const productSlice=createSlice({
    name:'productSlice',
    initialState:{
        product:[],
        name:"farman",
         user_arr:[]
    },
    reducers:{
        
    },
    //  extraReducers:{
    //     [get_data.fulfilled]:(state,action)=>{
    //         state.user_arr=action.payload;
    //     }
    // }
    
})


export const { } = productSlice.actions
export default productSlice.reducer