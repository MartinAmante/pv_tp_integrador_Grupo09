const API_URL = "https://fakestoreapi.com/users";


export const obtenerTodosLosClientes = async () => {
    const respuesta = await fetch(API_URL);
    if (!respuesta.ok) throw new Error("Error al obtener los clientes");
    return await respuesta.json();
};

export const crearCliente = async (clienteData) => {
    const respuesta = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(clienteData)
    });

    if (!respuesta.ok && respuesta.status !== 201) {
        throw new Error("Error al crear el cliente");
    }

    return await respuesta.json(); 
};