
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
import { obtenerClientes } from "../services/ServiceClientes";

function ListaCliente() {

    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const cargarClientes = async () => {
            try {

                const datos = await obtenerClientes();

                setClientes(datos);

            } catch (error) {

                console.error(error);
                setError("No se pudieron cargar los clientes");

            } finally {

                setLoading(false);

            }
        };

        cargarClientes();

    }, []);

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

/* import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

const ListaCliente = () => {
    const navigate = useNavigate();
    const volverInicio = () => {
        navigate("/dashboard");
    }
    const verCliente = () => {
        navigate("/clientes/:id");
    }
    return (
        <>
        <Header //nombre="Matias"
            //sector="Soporte" 
             />
        <Nav />
        <h1>CLIENTES</h1>
        <button onClick={volverInicio}>
            Volver al inicio
        </button>
        <button onClick={verCliente}>
            Ver Cliente
        </button>
        <Footer />
        </>
    ) */
    
}

export default ListaCliente;