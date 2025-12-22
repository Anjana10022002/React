import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        email : null,
        token : null,
        isLoggedIn : false,
    },
    reducers:{
        login: (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.email = null;
            state.token = null;
            state.isLoggedIn = false;
        },
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;