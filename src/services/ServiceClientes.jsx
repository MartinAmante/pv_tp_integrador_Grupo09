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