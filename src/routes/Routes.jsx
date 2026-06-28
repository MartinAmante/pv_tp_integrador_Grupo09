import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import DetalleCliente from "../views/DetalleCliente";
import ListaCliente from "../views/ListaCliente";
import Login from "../views/Login";
import ProtectedRoute from "./ProtectedRoute";
import PageError from "../views/PageError";

const Rutas = createBrowserRouter([ 
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: (
            <ProtectedRoute> 
                <Dashboard />
            </ProtectedRoute>
        )
    },
    {
        path: "/clientes",
        element: (
            <ProtectedRoute>
                <ListaCliente />
            </ProtectedRoute>
        )
    },
    {
        path: "detalle/:id",
        element: (
            <ProtectedRoute>
                <DetalleCliente />
            </ProtectedRoute>
        )
    },
    {
        path: "*",
        element: <PageError />
    }
]);

export default Rutas;