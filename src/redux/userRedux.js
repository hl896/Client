import { createSlice } from "@reduxjs/toolkit"; 


const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false,

    },
    reducers:{
        loginStart: (state) =>{
            state.isFetching=true
        },
        loginSuccess:(state, action)=>{
            state.isFetching=false;
            state.currentUser=action.payload;
        },
        loginFailure: (state) => {
            state.isFetching=false;
            state.error=true;
        },
        logout: (state) => {
            state.currentUser = null;
        },
        registerStart: (state) => {
            state.isFetching= true;
            
        },
        registerSucess: (state, action) =>{
            state.isFetching=false;
            state.currentUser=action.payload;
        },
        registerFailed: (state, action) =>{
            state.isFetching=false;
            state.error=true;
        }
    }
})


export const {loginStart,loginSuccess,loginFailure,logout,registerStart,registerSucess,registerFailed} = userSlice.actions;
export default userSlice.reducer;