import { Outlet } from "react-router-dom";
import { useState } from 'react'
import { createRoot } from 'react-dom/client'

const App = () => {
    console.log("App ejecutandose");
    return (
        <div>
            <h1>Trabajo Práctico Integrador</h1>
            <Outlet/>
        </div>
    );
}

export default App
