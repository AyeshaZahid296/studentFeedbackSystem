import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Admin/Dashboard";
import PrivateRoutes from "./routes/PrivateRoutes";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/admin/login" element={<Login />} />

            <Route
                path="/admin/dashboard"
                element={
                    <PrivateRoutes allowedRoles={["admin"]}>
                        <Dashboard />
                    </PrivateRoutes>
                }
            />
        </Routes>
    );
};

export default AppRoutes;
