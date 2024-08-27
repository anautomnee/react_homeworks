import { Container, Typography, styled } from "@mui/material"
import { useContext } from "react"
import { ThemeContext } from "../context/theme"

export const Main = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const CustomBtn = styled("button")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: 48,
        padding: '0 30px',
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: theme.palette.primary.light
        },
    }));

    return <Container>
        <Typography mt={6} mb={3} variant="h2">{theme[0].toUpperCase() + theme.slice(1)} mode</Typography>
        <CustomBtn variant="contained" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle theme</CustomBtn>
    </Container>
}