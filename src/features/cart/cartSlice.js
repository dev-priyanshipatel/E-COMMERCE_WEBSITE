import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  },

  reducers: {

    addproduct: (state, action) => {
        const item = state.cart.find(i => i.id === action.payload.id);
        
        if(item){
            item.qty += 1;
        }else{
            state.cart.push({ ...action.payload, qty: 1 });
        }
        
        localStorage.setItem("cart", JSON.stringify(state.cart));
        toast.success("Product Added to Cart...");
    },

    removeProduct: (state, action) => {
      const deleteId = action.payload;
      state.cart = state.cart.filter((item) => {
        return item.id !== deleteId;
      })
      localStorage.setItem("cart", JSON.stringify(state.cart));
      toast.success("Product Removed From Cart...");
    },

    updateQuantity: (state, action) => {
      const { id , type } = action.payload;

      const item = state.cart.find((item) => {
        return item.id === id;
      });

      if(!item) return;

      if(type === "inc"){
        item.qty += 1;
      }

      if(type === "dec" && item.qty > 1){
        item.qty -= 1;
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));    
    }
  },
});

export const { addproduct, updateQuantity, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;