import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
const initialState ={
products:[],
productStatus:STATUS.IDLE,
ProductDetail:[],
productDetailStatus: STATUS.IDLE
}

export const getProducts = createAsyncThunk("getproducts",async()=>{
    const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json();
        return data
})
export const getDetailProduct = createAsyncThunk("getproduct",async(id)=>{
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json();
        return data
})

const productSlice = createSlice({
 name:"product",
 initialState,
 reducers:{},
 extraReducers:(builder)=>{
    builder
    .addCase(getProducts.pending, (state, action)=>{
        state.productStatus= STATUS.LOADING
    })
    .addCase(getProducts.fulfilled, (state, action)=>{
        state.productStatus = STATUS.SUCCESS;
        state.products = action.payload 
    })
     .addCase(getProducts.rejected, (state, action)=>{
        state.productStatus= STATUS.FAIL
    })
    .addCase(getDetailProduct.pending, (state, action)=>{
        state.productDetailStatus= STATUS.LOADING
    })
    .addCase(getDetailProduct.fulfilled, (state, action)=>{
        state.productDetailStatus = STATUS.SUCCESS;
        state.ProductDetail = action.payload 
    })
     .addCase(getDetailProduct.rejected, (state, action)=>{
        state.productDetailStatus= STATUS.FAIL
    })
 }
})

export default productSlice.reducer