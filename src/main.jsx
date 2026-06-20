import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import Rutas from "./routes/Routes.jsx"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={Rutas}/>
  </StrictMode>, 
  
);
