import { useLocation } from "react-router-dom"
import { FormComponent } from "../components/FormComponent"
import { Layout } from "../layouts/Layout"
import { Stack, Typography } from "@mui/material";

export const Login = () => {

    const location = useLocation();

    return <Layout>
        <Stack direction="column" gap={4}>
            <Typography>{location?.state}</Typography>

            <FormComponent page="login" />
        </Stack>
    </Layout>
}