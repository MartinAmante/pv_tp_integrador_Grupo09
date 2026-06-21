
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import FormularioCliente from "./FormularioCliente";


import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

import { useState, useEffect } from "react";
import { obtenerClientes } from "../services/ServiceClientes";


const ListaCliente = () => {

    const navigate = useNavigate();
    const volverInicio = () => {
        navigate("/dashboard");
    }
    
    const detalle = (id) =>{
       navigate("/detalle/"+id);
    }


    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [busqueda, setBusqueda] = useState("");

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

    const agregarNuevoCliente = (nuevoCliente) => {
        setClientes([...clientes, nuevoCliente]);
    };

    const clientesFiltrados = clientes.filter((cliente) => {
        const apellido = cliente.name?.lastname?.toLowerCase() || "";
        const ciudad = cliente.address?.city?.toLowerCase() || "";
        
        const buscar = busqueda.toLowerCase().trim();

        return apellido.includes(buscar) || ciudad.includes(buscar);
    });

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
         <Header  />
         <Nav />
            <h1>Lista de Clientes</h1>

            <TextField 
                label="Buscar por apellido o ciudad" 
                variant="outlined" 
                fullWidth
                margin="normal"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />

            <TableContainer component={Paper}>
                <Table>

                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Teléfono</TableCell>
                            <TableCell>Ciudad</TableCell>
                            <TableCell>  </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {clientesFiltrados.map((cliente) => (
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

                                <TableCell>
                                    <button onClick={()=>detalle(cliente.id)}>
                                    boton prueva
                                    </button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
             <>
         <button onClick={volverInicio}>
            Volver al inicio
         </button>
         <FormularioCliente agregarCliente={agregarNuevoCliente} />
         <Footer />
         </>
        </>
    );  
}

export default ListaCliente;