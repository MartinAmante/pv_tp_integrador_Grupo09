import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import DetalleCliente from "../views/DetalleCliente";
import ListaCliente from "../views/ListaCliente";
import Login from "../views/Login";
import ProtectedRoute from "./ProtectedRoute";

const Rutas = createBrowserRouter([ //creacion de un router
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
            <ProtectedRoute> {/* primero se ejecuta esto, despues childen*/}
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
    }
]);

export default Rutas;