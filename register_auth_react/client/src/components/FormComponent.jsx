import { Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../store/actionCreators";
import { useNavigate } from "react-router-dom";

const defaultUser = {
    email: "",
    password: ""
};

export const FormComponent = ({ page }) => {
    const [user, setUser] = useState(defaultUser);
    const [isSuccess, setIsSuccess] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status, error } = useSelector(state => state.auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (page === "register") {
            await dispatch(register(user));
            setIsSuccess(true)
        } else {
            await dispatch(login(user));
            setIsSuccess(true);
        }
        setUser(defaultUser);
    };

    useEffect(() => {
        if (isSuccess) {
            if (!error) {
                if (page === "register") {
                    navigate("/login");
                    setIsSuccess(false);
                } else {
                    setTimeout(() => {
                        setIsSuccess(false)
                        navigate("/profile")
                    }, 600);
                }
            } else {
                setIsSuccess(false)
            }

        }
    }, [isSuccess]);

    if (status === "LOADING") {
        return <Typography>Loading...</Typography>
    }

    if (isSuccess) {
        return <Typography>Redirecting...</Typography>
    }

    return <>
        <form onSubmit={handleSubmit}>
            <Stack direction="column" gap={2} width={400}>
                <Typography>{page === "register" ? "Register form" : "Log in"}</Typography>
                <TextField label="email" value={user.email} required
                    onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <TextField label="password" value={user.password} required
                    onChange={(e) => setUser({ ...user, password: e.target.value })} />
                <Button variant="contained" type="submit">{page === "register" ? "Create an account" : "Log in"}</Button>
                {error && <Typography color="error">{error}</Typography>}
            </Stack>
        </form>
    </>
}