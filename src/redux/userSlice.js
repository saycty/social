import { createSlice } from "@reduxjs/toolkit";
import {user} from "../assets/data"

const initialState={
    user:JSON.parse(window?.localStorage.getItem("user"))?? user,
    edit:false,
};

const userSlice=createSlice({                      
    name:"user",initialState,
    reducers:{
        login(state,action){
            state.user=action.payload;
            localStorage.setItem("user",JSON.stringify(action.payload));
        },
        logout(state){
            state.user=null;
            localStorage?.removeItem("user");
        }
    },
});
export default userSlice.reducer;

export function UserLogin(user){
    return(dispatch,getState)=>{
        dispatch(userSlice.action.login(user));
    };
}
export function Logout(user){
    return(dispatch,getState)=>{
        dispatch(userSlice.action.logout(user));
    };
}
export function UpdateProfile(user){
    return(dispatch,getState)=>{
        dispatch(userSlice.action.updateProfile(user));
    };
}

