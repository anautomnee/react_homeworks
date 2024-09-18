import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Profile } from "../pages/Profile"
import { ProtectedRoute } from "../components/ProtectedRoute"

export const MainRoute = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
}