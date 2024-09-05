import axios from "axios";
import { getUsers, getUsersFailure, getUsersSuccess } from "./userSlice"

export const fetchUsers = () => async (dispatch) => {
    try {
        dispatch(getUsers());
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch(getUsersSuccess(response.data));
    } catch(error) {
        dispatch(getUsersFailure(error));
    }
    
}