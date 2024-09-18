import { Container } from "@mui/material"
import { Header } from "../components/Header"

export const Layout = ({ children }) => (
    <>
        <Header />
        <Container>
            <Container sx={{ display: "flex", justifyContent: "center" }}>
                {children}
            </Container>
        </Container>
    </>
)