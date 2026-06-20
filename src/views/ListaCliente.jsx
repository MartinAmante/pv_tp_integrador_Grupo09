import { useState, useEffect } from "react";

function ListaCliente() {

    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        obtenerClientes();
    }, []);

    const obtenerClientes = async () => {
        try {
            const respuesta = await fetch(
                "https://fakestoreapi.com/users"
            );
             const datos = await respuesta.json();
            setClientes(datos);

        } catch (error) {
             setError("No se pudieron cargar los clientes");

        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h1>Lista de Clientes</h1>
        </>
    );
}

export default ListaCliente;