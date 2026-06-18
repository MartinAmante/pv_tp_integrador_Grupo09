import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import ListaCliente from "./views/ListaCliente";
import DetalleCliente from "./views/DetalleCliente";

//import { useState } from 'react'
//import { createRoot } from 'react-dom/client'
//import './App.css'

function App() {
    console.log("App ejecutandose");
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/clientes" element={<ListaCliente/>} />
            <Route path="/clientes/:id" element={<DetalleCliente/>} />
        </Routes>
        </BrowserRouter>
        //<h1>Trabajo Práctico Integrador</h1>
    );
}

export default App
