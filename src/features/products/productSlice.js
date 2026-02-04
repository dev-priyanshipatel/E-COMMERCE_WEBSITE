import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async() => {
    try {
        const {data} = await axios.get("https://fakestoreapi.com/products");
        return data;
    } catch (error) {
        throw error;
    }
});

const productSlice = createSlice({
    name : 'products',

    initialState : {
        products : [],
        isLoading : true,
    },

    reducers :{},

    extraReducers : (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
            console.log(action.payload);
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            toast.error("Something went wrorng while fetching the data...")
        })
    }
})

export default productSlice.reducer;