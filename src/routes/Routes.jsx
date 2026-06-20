import { Routes, Route } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import DetalleCliente from "../views/DetalleCliente";
import ListaCliente from "../views/ListaCliente";
import Login from "../views/Login";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/login" element={<Login />} />

            <Route path="/dashboard" element ={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
                }
                />
            <Route path="/clientes" element ={
                <ProtectedRoute>
                    <ListaCliente />
                </ProtectedRoute>
                }
                /> 
            <Route path="/clientes/:id" element ={
                <ProtectedRoute>
                    <DetalleCliente />
                </ProtectedRoute>
                }
                />
        </Routes>
    );
};
export default AppRoutes;