import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productSlice=createSlice({
    name:'productSlice',
    initialState:{
        product:[],
        name:"farman",
         user_arr:[]
    },
    reducers:{
        
    }
     extraReducers:{
        [inser_data.fulfilled]:(state,action)=>{
            state.user_arr=action.payload;
        }
    }
})


const inser_data = createAsyncThunk ('insert_data', async ()=>{
    const res = await axios.get('http://localhost:5001/product');
    console.log(res.data);
    
})

export const { } = productSlice.actions
export default productSlice.reducer