import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

            <TableContainer component={Paper}>
                <Table>

                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Teléfono</TableCell>
                            <TableCell>Ciudad</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {clientes.map((cliente) => (
                            <TableRow key={cliente.id}>

                                <TableCell>
                                    {cliente.id}
                                </TableCell>

                                <TableCell>
                                    {cliente.name.firstname} {cliente.name.lastname}
                                </TableCell>

                                <TableCell>
                                    {cliente.email}
                                </TableCell>

                                <TableCell>
                                    {cliente.phone}
                                </TableCell>

                                <TableCell>
                                    {cliente.address.city}
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        </>
    );
}

export default ListaCliente;