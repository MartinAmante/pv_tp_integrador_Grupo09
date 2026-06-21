import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import {ServiceAutorizaciones} from "../services/ServiceAutorizaciones";
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
  Paper, 
  CircularProgress,
  Alert
} from "@mui/material";

const Login = () => {
    const navigate = useNavigate();
    const { setAdmin } = useContext(AdminContext);

    const [nombre, setNombre] = useState("");
    const [password, setPassword] = useState("");
    const [sector, setSector] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const {login} = useContext(AdminContext);


    const manejarLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const respuesta = await ServiceAutorizaciones.loginService(nombre, password, sector); 
            login(respuesta);  
            navigate("/dashboard");
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container component="main" maxWidth="xs" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Paper elevation={3} sx={{ p: 4, width: '100%', borderRadius: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
                <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: 'primary.main' }}>
                    INGRESAR
                </Typography>

                <Box component="form" onSubmit={manejarLogin} sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                   {error && (
                        <Alert severity="error">
                            {error}
                        </Alert>
                    )}
                   
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                    <TextField
                        label="Contraseña"
                        variant="outlined"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ mt: 1, py: 1.2, fontWeight: 'bold' }}
                    >
                        {loading ? <CircularProgress size={24} color="inherit" /> : "Ingresar"}
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}


export default Login;