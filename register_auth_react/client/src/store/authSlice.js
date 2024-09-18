import {createSlice} from "@reduxjs/toolkit";
import { register, login } from "./actionCreators";

const initialState = {
    user: null,
    token: null,
    status: "IDLE",
    error: null
};

const setError = (state, action) => {
    state.status = "FAILED";
    state.error = action.payload;
};

const setLoading = (state) => {
    state.status = "LOADING";
    state.error = null;
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state = initialState;
            localStorage.removeItem("token");
        }
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, setLoading)
        .addCase(register.fulfilled, (state) => {
            state.status = "SUCCESS";
            state.error = null;
        })
        .addCase(register.rejected, setError)
        .addCase(login.pending, setLoading)
        .addCase(login.rejected, setError)
        .addCase(login.fulfilled, (state, action) => {
            state.status = "SUCCESS";
            state.error = null;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
        })
    }
})

export default authSlice.reducer;
export const {logout} = authSlice.actions;