import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    error: "",
    users: []
};

export const usersReducer = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUsers(state) {
            state.isLoading = true;
            state.error = "";
        },
        getUsersSuccess(state, action) {
            state.isLoading = false;
            state.error = "";
            state.users = action.payload;
        },
        getUsersFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
            state.users = [];
        }
    }
})

export const { getUsers, getUsersFailure, getUsersSuccess } = usersReducer.actions;
export default usersReducer.reducer;