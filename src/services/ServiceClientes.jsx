export const obtenerClientes = async () => {

    const respuesta = await fetch(
        "https://fakestoreapi.com/users"
    );

    if (!respuesta.ok) {
        throw new Error("Error al obtener clientes");
    }

    const datos = await respuesta.json();

    return datos;
};

export const eliminarClienteService = async (id) => {
    try {
        const respuesta = await fetch(`${"https://fakestoreapi.com/users"}/${id}`, {
            method: "DELETE" 
        });
        
        if (!respuesta.ok) {
            throw new Error("Error al intentar eliminar el cliente");
        }
        
        return await respuesta.json(); 
    } catch (error) {
        console.error("Error en eliminarClienteService:", error);
        throw error;
    }
};