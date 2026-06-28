import axios from "axios";

const API = "https://fakestoreapi.com/users";

/*
lo que iba antes

 
  const respuesta = await fetch(
        API
    );

    if (!respuesta.ok) {
        throw new Error("Error al obtener clientes");
    }

    const datos = await respuesta.json();

    return datos;
*/

export const obtenerClientes = async () => {

    try{
        const respuesta = await axios.get(API);
        return respuesta.data;

    }catch(error){
        throw new Error("Error al obtener clientes");

    }

};



/*
lo que iba antes

 const respuesta = await fetch(`${API}/${id}`, {
            method: "DELETE" 
        });
        
        if (!respuesta.ok) {
            throw new Error("Error al intentar eliminar el cliente");
        }
        
        return await respuesta.json(); 
   
*/
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
         throw error; }     
};

/*
lo que iba antes

try {
        const respuesta = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoCliente)
        });

        if (!respuesta.ok && respuesta.status !== 201) {
            throw new Error("Error al intentar agregar el cliente");
        }

        return await respuesta.json();


    } catch (error) {
        console.error("Error en agregarClienteService:", error);
        throw error;
    }

*/