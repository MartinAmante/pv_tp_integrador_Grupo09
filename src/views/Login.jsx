import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { 
  Container, 
  Box, 
  Typography, 
  TextField, 
  Button, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Paper 
} from "@mui/material";

const Login = () => {
    const navigate = useNavigate();
    const { setAdmin } = useContext(AdminContext);

    const [nombre, setNombre] = useState("");
    const [sector, setSector] = useState("");

    const ingresar = () => {
        if (nombre.trim() === "") {
            alert("Debe ingresar un nombre");
            return;
        }

        if (sector === "") {
            alert("Debe seleccionar un cargo");
            return;
        }
        
        setAdmin({ nombre, sector });
        navigate("/dashboard");
    };

    return (
        <Container component="main" maxWidth="xs" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Paper elevation={3} sx={{ p: 4, width: '100%', borderRadius: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
                <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: 'primary.main' }}>
                    LOGIN
                </Typography>

                <Box component="div" sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    <TextField
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />

                    <FormControl fullWidth required>
                        <InputLabel id="sector-label">Cargo</InputLabel>
                        <Select
                            labelId="sector-label"
                            id="sector-select"
                            value={sector}
                            label="Cargo"
                            onChange={(e) => setSector(e.target.value)}
                        >
                            <MenuItem value="Soporte">Soporte</MenuItem>
                            <MenuItem value="Gerencia">Gerencia</MenuItem>
                        </Select>
                    </FormControl>

                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={ingresar}
                        sx={{ mt: 1, py: 1.2, fontWeight: 'bold' }}
                    >
                        Ingresar
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}



/*function Login() {
    console.log("Render Login");
    return (
        <>
            <h1>LOGIN</h1>;
            <Link to="/dashboard">
            Ir al Dashboard
            </Link>
        </>
    );
}*/



export default Login;