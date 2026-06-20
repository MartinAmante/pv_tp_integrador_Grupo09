import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
=======
import { RouterProvider } from 'react-router-dom';
import Rutas from "./routes/Routes.jsx"
>>>>>>> 358d9640eee09b98a09fdba04c00c1d8ed0b3a4a
import App from './App.jsx'
import { AdminProvider } from './context/AdminContext.jsx';

createRoot(document.getElementById('root')).render(
  <AdminProvider>
  <StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <App />
    </BrowserRouter>
=======
    <RouterProvider router={Rutas}/>
>>>>>>> 358d9640eee09b98a09fdba04c00c1d8ed0b3a4a
  </StrictMode>
  </AdminProvider>
);
