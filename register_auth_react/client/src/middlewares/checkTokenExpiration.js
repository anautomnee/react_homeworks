import { jwtDecode } from "jwt-decode";
import { logout } from "../store/authSlice";

const isTokenValid = (token) => {
    if(!token) return false;
    const decoded = jwtDecode(token);
    const currentTime = Date.now()/1000;
    return decoded.exp > currentTime;
}
export const checkTokenExpiration = (store) => (next) => (action) => {
    const result = next(action);
    const token = store.getState().auth.token;
    if(token && !isTokenValid(token)) {
        store.dispatch(logout());
    };
    return result;
}

