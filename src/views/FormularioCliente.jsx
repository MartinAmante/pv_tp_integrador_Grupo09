import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";

function FormularioCliente({ agregarCliente }) {
    // 1. Un solo estado para manejar todos los campos del formulario de forma limpia
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        usuario: "",
        password: "",
        telefono: "",
        ciudad: ""
    });

    // Estados para cumplir con el Feedback Visual
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [mensajeExito, setMensajeExito] = useState("");

    // Función genérica para actualizar el estado cada vez que el usuario escribe
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // 2. Lógica de la petición POST
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Estructuramos el objeto tal como FakeStoreAPI lo necesita
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
                // Agregamos datos genéricos para los campos requeridos por la API que no pedimos
                street: "Calle Principal", 
                number: 123,
                zipcode: "0000"
            },
            phone: formData.telefono
        };

        try {
            const respuesta = await fetch("https://fakestoreapi.com/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(nuevoCliente)
            });

            // 3. Feedback Visual: Capturar el código exitoso y el ID
            if (respuesta.ok || respuesta.status === 201) {

                const datosRecibidos = await respuesta.json();

                const clienteAInsertar = {
                    ...nuevoCliente,
                    id: datosRecibidos.id 
                };
                if (agregarCliente) {
                    agregarCliente(clienteAInsertar);
                }
                setMensajeExito(`Cliente creado con éxito. ID asignado: ${datosRecibidos.id}`);
                setOpenSnackbar(true);

                // Limpiamos el formulario para poder cargar uno nuevo
                setFormData({
                    nombre: "", apellido: "", email: "", 
                    usuario: "", password: "", telefono: "", ciudad: ""
                });
            }
        } catch (error) {
            console.error("Hubo un error en la petición:", error);
        }
    };

    // Función para cerrar el aviso temporal
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
                    required fullWidth 
                />
                <TextField 
                    label="Apellido" name="apellido" 
                    value={formData.apellido} onChange={handleChange} 
                    required fullWidth 
                />
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField 
                    label="Email" name="email" type="email" 
                    value={formData.email} onChange={handleChange} 
                    required fullWidth 
                />
                <TextField 
                    label="Teléfono" name="telefono" 
                    value={formData.telefono} onChange={handleChange} 
                    required fullWidth 
                />
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <TextField 
                    label="Usuario" name="usuario" 
                    value={formData.usuario} onChange={handleChange} 
                    required fullWidth 
                />
                <TextField 
                    label="Contraseña" name="password" type="password" 
                    value={formData.password} onChange={handleChange} 
                    required fullWidth 
                />
                <TextField 
                    label="Ciudad" name="ciudad" 
                    value={formData.ciudad} onChange={handleChange} 
                    required fullWidth 
                />
            </Box>

            <Button type="submit" variant="contained" color="primary" fullWidth>
                Registrar Cliente
            </Button>

            {/* Componente Snackbar para la notificación temporal */}
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