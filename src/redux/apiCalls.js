import { publicRequest } from "../requestMethods";
import { 
    loginFailure, 
    loginStart, 
    loginSuccess, 
    logout, 
    registerStart, 
    registerSucess, 
    registerFailed
    
} from "./userRedux"

import {
    searchProductStart,
    searchProductSuccess,
    searchProductFailure 
} from "./cartRedux"

export const login = async (dispatch, user)=>{
    dispatch(loginStart());

    try {
        const res = await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data));

    } catch (error) {
        dispatch(loginFailure());
    }
};

export const logoff = async (dispatch)=>{
    dispatch(logout());
};



export const register = async (dispatch, username, email, password)=>{
    dispatch(registerStart());

    try {
        const res = await publicRequest.post("/auth/register",username, email, password)
        dispatch(registerSucess(res.data));

    } catch (error) {
        dispatch(registerFailed());
    }
};

export const searchProducts = async (title, dispatch) => {
    dispatch(searchProductStart());
    try {
      dispatch(searchProductSuccess(title));
    } catch (err) {
      dispatch(searchProductFailure());
    }
};