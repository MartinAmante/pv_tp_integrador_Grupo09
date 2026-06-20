<<<<<<< HEAD
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
=======
import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx"
import Login from "../views/Login.jsx";
import Dashboard from "../views/Dashboard.jsx";
import ListaCliente from "../views/ListaCliente.jsx";
import DetalleCliente from "../views/DetalleCliente.jsx";


//import { useState } from 'react'
//import { createRoot } from 'react-dom/client'
//import './App.css'
console.log("App ejecutandose");
const Rutas = createBrowserRouter ([{
    path:'/',
    element:<App/>,
    children:[

        {
            path:'dashboard',
            element:<Dashboard/>,
        },
        {
                
           path:'login',
            element:<Login/>,

       },

        {
            path:'clientes',
            element:<ListaCliente/>,
        },

        {
            path:'detalle',
            element:<DetalleCliente/>,
        },


    ]

}])
export default Rutas;
>>>>>>> 358d9640eee09b98a09fdba04c00c1d8ed0b3a4a
