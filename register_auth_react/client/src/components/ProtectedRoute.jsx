import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");

    return token ? children : <Navigate state={"Please log in to see the profile"} to="/login" />
};