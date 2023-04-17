import { createSlice } from "@reduxjs/toolkit"; 


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,

    },
    reducers:{
        addProduct:(state,action) => {
            state.quantity +=1;
            state.products.push(action.payload)
            state.total += action.payload.price *action.payload.quantity;
        },
        searchProductStart: (state) => {
            state.isFetching=true;
            state.error=false;
        },
        searchProductSuccess: (state, action) => {
            state.isFetching=false;
            state.products.splice(
                state.products.findIndex((item) => item.title === action.payload)
            );
        },
        searchProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }

    }
})


export const {addProduct, searchProductFailure, searchProductStart, searchProductSuccess } = cartSlice.actions;
export default cartSlice.reducer;