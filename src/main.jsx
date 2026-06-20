import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import Rutas from "./routes/Routes.jsx"
import App from './App.jsx'
import { AdminProvider } from './context/AdminContext.jsx';

createRoot(document.getElementById('root')).render(
  <AdminProvider>
  <StrictMode>
    <RouterProvider router={Rutas}/>
  </StrictMode>
  </AdminProvider>
);
