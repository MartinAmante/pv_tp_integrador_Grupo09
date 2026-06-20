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
            path:'detalle/:id',
            element:<DetalleCliente/>,
        },


    ]

}])
export default Rutas;