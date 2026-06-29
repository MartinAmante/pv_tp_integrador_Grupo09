import { useNavigate, useParams } from "react-router-dom";
import { useState,useEffect,useContext } from "react";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import VerUsuario from "./VerUsurio.jsx";
import PageError from "./PageError.jsx";
import { AdminContext } from "../context/AdminContext.jsx";
import {BorrarContext} from "../context/BorrarContext.jsx";
import {eliminarClienteService, obtenerClientePorId} from "../services/ServiceClientes.js";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';


const DetalleCliente = () => {
    const navigate = useNavigate();
    const volverClientes = () => {
        navigate("/clientes");
    }
    const borrarClientes = async (id) =>{

        try{
            await eliminarClienteService(id);
            alert("Cliente eliminado con éxito de la base de datos");
            setIdBorrar(id); 
            navigate("/clientes");
        }catch(error){
            console.error("Error al eliminar cliente:", error);
        }
    }
    const {id} = useParams();
    const [usuario,setUsuario] =useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { admin } = useContext(AdminContext);
    const { setIdBorrar} = useContext(BorrarContext);

    
    /*useEffect (() =>{
        fetch("https://fakestoreapi.com/users/" + id) // :id variable de un campo en el arreglo dentro del link
        .then(respuesta =>{return respuesta.json()})
        .then(datos => {setUsuario(datos);});
    },[]);*/
    
    useEffect(() => {
    const cargarCliente = async () => {
        try {
            const datos = await obtenerClientePorId(id);
            setUsuario(datos);
        } catch (error) {
            console.error(error);
            setUsuario(null);
        } finally {
            setLoading(false);
        }
    };

    cargarCliente();
    
}, [id]);

if (loading) {
    return <div>Cargando...</div>;
}
if (!usuario) {
    return <PageError />;
}

    return (
    <>
        <Header />

        <Nav />

        <h2>DETALLE CLIENTE</h2>

        <VerUsuario usr= {usuario} />
            {
                admin?.sector !== "Soporte" && (
                    <Button 
                        onClick={()=>borrarClientes(usuario.id)}
                        variant="outlined"
                        startIcon={<DeleteIcon />}  >
                        Borrar cliente
                    </Button>
                )}
        <Button 
            variant="outlined" 
            onClick={volverClientes}>
                Volver al listado de clientes
        </Button>
        
        <Footer />
    </>
    );
};

export default DetalleCliente;