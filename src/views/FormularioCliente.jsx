import { useState } from "react";
import {agregarClienteService} from "../services/ServiceClientes";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";

const FormularioCliente = ({ agregarCliente }) => {

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [mensajeExito, setMensajeExito] = useState("");
    const [errores, setErrores] = useState({});

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        usuario: "",
        password: "",
        telefono: "",
        ciudad: ""
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validarFormulario = () => {
        const nuevosErrores = {};
        const emailValidacion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const telefonoValidacion = /^\d{10}$/;

        if (!formData.nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio";
        if (!formData.apellido.trim()) nuevosErrores.apellido = "El apellido es obligatorio";
        if (!formData.email.trim()) nuevosErrores.email = "El email es obligatorio";
        if (!formData.usuario.trim()) nuevosErrores.usuario = "El usuario es obligatorio";
        if (!formData.password.trim()) nuevosErrores.password = "La contraseña es obligatoria";
        if (!formData.telefono.trim()) nuevosErrores.telefono = "El teléfono es obligatorio";
        if (!formData.ciudad.trim()) nuevosErrores.ciudad = "La ciudad es obligatoria";

        if (formData.email && !emailValidacion.test(formData.email)) {
            nuevosErrores.email = "El email no es válido";
        }
        if (formData.telefono && !telefonoValidacion.test(formData.telefono)) {
            if(formData.telefono > 9999999999 || formData.telefono < 1000000000) {
            nuevosErrores.telefono = "El teléfono debe tener 10 dígitos";
            }else {
                nuevosErrores.telefono = "El teléfono debe constar únicamente de numeros  y tener 10 dígitos";
            }
        }
        if (formData.password && formData.password.length < 6) {
            nuevosErrores.password = "La contraseña debe tener al menos 6 caracteres";
        }

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validarFormulario()) {
            return;
        }

        const nuevoCliente = {
            email: formData.email,
            username: formData.usuario,
            password: formData.password,
            name: {
                firstname: formData.nombre,
                lastname: formData.apellido
            },
            address: {
                city: formData.ciudad,
                street: "Calle Principal", 
                number: 123,
                zipcode: "0000"
            },
            phone: formData.telefono
        };

        try {
            const respuesta = await agregarClienteService(nuevoCliente);

                const clienteAInsertar = {
                    ...nuevoCliente,
                    id: respuesta.id 
                };
                if (agregarCliente) {
                    agregarCliente(clienteAInsertar);
                }
                setMensajeExito(`Cliente creado con éxito. ID asignado: ${respuesta.id}`);
                setOpenSnackbar(true);
                setErrores({});
                setFormData({
                    nombre: "", apellido: "", email: "", 
                    usuario: "", password: "", telefono: "", ciudad: ""
                });

        } catch (error) {
            console.error("Hubo un error en la petición:", error);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Box 
            component="form" 
            onSubmit={handleSubmit} 
            sx={{ mt: 4, p: 3, border: '1px solid #ddd', borderRadius: 2 }}
        >
            <Typography variant="h5" gutterBottom>
                Alta de Nuevo Cliente
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField 
                    label="Nombre" name="nombre" 
                    value={formData.nombre} onChange={handleChange} 
                     fullWidth 
                    error={!!errores.nombre} helperText={errores.nombre}
                />
                <TextField 
                    label="Apellido" name="apellido" 
                    value={formData.apellido} onChange={handleChange} 
                     fullWidth 
                    error={!!errores.apellido} helperText={errores.apellido}
                />
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField 
                    label="Email" name="email" type="email" 
                    value={formData.email} onChange={handleChange} 
                     fullWidth 
                    error={!!errores.email} helperText={errores.email}
                />
                <TextField 
                    label="Teléfono" name="telefono" 
                    value={formData.telefono} onChange={handleChange} 
                     fullWidth 
                    error={!!errores.telefono} helperText={errores.telefono}
                />
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <TextField 
                    label="Usuario" name="usuario" 
                    value={formData.usuario} onChange={handleChange} 
                     fullWidth 
                    error={!!errores.usuario} helperText={errores.usuario}
                />
                <TextField 
                    label="Contraseña" name="password" type="password" 
                    value={formData.password} onChange={handleChange} 
                     fullWidth 
                    error={!!errores.password} helperText={errores.password}
                />
                <TextField 
                    label="Ciudad" name="ciudad" 
                    value={formData.ciudad} onChange={handleChange} 
                    fullWidth 
                />
            </Box>

            <Button type="submit" variant="contained" color="primary" fullWidth>
                Registrar Cliente
            </Button>

            <Snackbar 
                open={openSnackbar} 
                autoHideDuration={6000} 
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    {mensajeExito}
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default FormularioCliente;