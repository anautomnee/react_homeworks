import { Box, AppBar, Container, Stack, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

export const Header = () => {
    return <Box sx={{ flexGrow: 1, mb: 4 }}>
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Typography mr={8}>
                        <NavLink style={{ color: "#fff", textDecoration: "none" }} to="/">Auth&reg project</NavLink>
                    </Typography>
                    <Stack direction="row" gap={4}>
                        <NavLink style={{ color: "#fff", textDecoration: "none" }} to="/register">Register</NavLink>
                        <NavLink style={{ color: "#fff", textDecoration: "none" }} to="/login">Login</NavLink>
                        <NavLink style={{ color: "#fff", textDecoration: "none" }} to="/profile">Profile</NavLink>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    </Box>
}