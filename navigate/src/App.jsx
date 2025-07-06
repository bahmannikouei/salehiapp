import { Routes, Route , Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Auth from "./components/Auth";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login"/>} />
            <Route path="/login" element={<Login /> } />
            <Route
                path="/dashboard"
                element={
                    <Auth>
                        <Dashboard />
                    </Auth>
                }
            />
        </Routes>
    );
}