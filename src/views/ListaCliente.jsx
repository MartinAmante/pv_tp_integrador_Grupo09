import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
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

    if (loading) {
        return <CircularProgress />;
    }
    
    if (error) {
        return (
            <Alert severity="error">
                {error}
            </Alert>
        );
    }

    return (
        <>
            <h1>Lista de Clientes</h1>
        </>
    );
}

export default ListaCliente;