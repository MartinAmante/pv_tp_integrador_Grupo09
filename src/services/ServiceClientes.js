import axios from "axios";
import { useParams } from "react-router-dom";

const API = "https://fakestoreapi.com/users";



export const obtenerClientes = async () => {

    try{
        const respuesta = await axios.get(API);
        return respuesta.data;

    }catch(error){
        throw new Error("Error al obtener clientes");

    }

};



export const eliminarClienteService = async (id) => {
    try {
        try{
        const respuesta = await axios.delete(`${API}/${id}`);
        return respuesta.data;
        } catch(error){
            throw new Error("Error al intentar eliminar el cliente");
        }
   
    } catch (error) {
        console.error("Error en eliminarClienteService:", error);
        throw error;
    }
};

export const agregarClienteService = async (nuevoCliente) => {
 
    try {
        
            const respuesta = await axios.post(API, nuevoCliente )
            
         return respuesta.data; 
       
        } catch (error) {
             console.error("Error en agregarClienteService:", error);
         throw error;}     
};
export const ayuda = () => {
    const actualizacion = useParams();
};