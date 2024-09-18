import { Button, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { Layout } from "../layouts/Layout";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";
import { jwtDecode } from "jwt-decode";

export const Profile = () => {
    const token = localStorage.getItem("token");
    const tokenData = token ? jwtDecode(token) : null
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    }

    return <Layout>
        <Stack direction="column" gap={4}>
            <Typography>{tokenData ? `You are logged in as ${tokenData.user.id}` : "Log in or register"}</Typography>
            {tokenData && <Button
                onClick={handleLogout}
                variant="contained">Log out</Button>}
        </Stack>
    </Layout>
}