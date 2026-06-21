import { useNavigate, useParams } from "react-router-dom";
import { useState,useEffect,useContext } from "react";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import VerUsuario from "./VerUsurio.jsx";
import { AdminContext } from "../context/AdminContext.jsx";
import {BorrarContext} from "../context/BorrarContext.jsx";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

const DetalleCliente = () => {
    const navigate = useNavigate();
    const volverClientes = () => {
        navigate("/clientes");
    }
    const borrarClientes = (id) =>{

        setIdBorrar(id);
        navigate("/clientes");
    }
    const {id} = useParams();
    const [usuario,setUsuario] =useState({});

    const { admin } = useContext(AdminContext);
    const { setIdBorrar} = useContext(BorrarContext);

    
    useEffect (() =>{
        fetch("https://fakestoreapi.com/users/" + id) // :id variable de un campo en el arreglo dentro del link
        .then(respuesta =>{return respuesta.json()})
        .then(datos => {setUsuario(datos);});
    },[]);


    return (
    <>
        <Header nombre="Matias"
                sector="Soporte"/>

        <Nav />

        <h2>DETALLE CLIENTE</h2>

        <div>  
        {
            !usuario.name
               ? <div> cargando... </div>
            
                :(<div>
                    <VerUsuario usr= {usuario} />
                    <div>
                    {
                        admin?.sector !== "Soporte"
                       ?<Button 
                            onClick={()=>borrarClientes(usuario.id)}
                            variant="outlined"
                            startIcon={<DeleteIcon />}  >
                            Borrar cliente
                        </Button>
                        : null

                    }
                    </div>
                </div>)

        }
        </div>
        <Button 
            variant="contained" 
            onClick={volverClientes}>
                Volver al listado de clientes
        </Button>
        
        <Footer />
    </>
    )
}

export default DetalleCliente;

/*  Fernando: Fichas Dinámicas y Permisos (Módulo D)
•	Desarrollar el componente <DetalleCliente/> capturando el
 parámetro de la URL con useParams para hacer el segundo fetch a /users/:id.
 
•	Desestructurar la respuesta y renderizar en pantalla los objetos anidados 
(dirección completa y credenciales). 


•	Consumir el contexto global para aplicar la lógica de permisos: dejar la vista en 
  modo lectura si el usuario es de "Soporte", o habilitar el botón de eliminación 
  (petición DELETE) si pertenece a "Gerencia".

    Lógica de Permisos Globales (Control por Contexto):
     Si el Administrador logueado en el Contexto pertenece al sector "Soporte",
    en esta ficha solo podrá visualizar los datos del cliente.
     Si el Administrador pertenece al sector "Gerencia", la interfaz habilitará de
    forma exclusiva un botón rojo de "Eliminar Cliente de la Base de Datos",
    el cual simulará una petición HTTP de tipo DELETE hacia la API.


  
  */  