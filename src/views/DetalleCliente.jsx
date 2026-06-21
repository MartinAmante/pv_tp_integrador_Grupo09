import { useNavigate, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import VerUsuario from "./VerUsurio.jsx";

const DetalleCliente = () => {
    const navigate = useNavigate();
    const volverClientes = () => {
        navigate("/clientes");
    }

    const {id} = useParams();
    const [usuario,setUsuario] =useState({});

    
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
            </div>)
        }
        </div> 
        
        <button onClick={volverClientes}>
                Volver al listado de clientes
            </button>
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

  import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

const  DetalleCliente = ()=> {
    const {id} = useParams();
    const [usuario,setUsuario] =useState({});

    useEffect (() =>{
        fetch("https://fakestoreapi.com/users/" + id) // :id variable de un campo en el arreglo dentro del link
        .then(respuesta =>{return respuesta.json()})
        .then(datos => {setUsuario(datos);});
    },[id]);

    return(
        <div>   {
            !usuario.name
               ? <div> cargando... </div>
            
            :(<div>
                <h1> usuario activo: {usuario.name.firstname}, {usuario.name.lastname} </h1>
            </div>)
        }
        </div>   
    ); 
=======
  
  */  