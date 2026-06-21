import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { Container, Box, Typography, Button } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {BorrarContext} from "../context/BorrarContext.jsx";

const Dashboard = () => {
    const { setAdmin } = useContext(AdminContext);
    const navigate = useNavigate();
    const {setIdBorrar} = useContext(BorrarContext);
    const irClientes = () => {
        navigate("/clientes");
    };

    const cerrarSesion = () => {
        setAdmin(null);
        setIdBorrar(null)
        navigate("/login");

    };

    console.log("Render Dashboard");

    return (
        <>
            <Header />
            <Nav />
            
            {/* Contenedor principal para el contenido del Dashboard */}
            <Container component="main" maxWidth="md" sx={{ mt: 4, mb: 4 }}>
                <Box 
                    sx={{ 
                        p: 4, 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center',
                        backgroundColor: '#f5f5f5',
                        borderRadius: 2,
                        boxShadow: 1,
                        gap: 3
                    }}
                >
                    <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                        Inicio
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                        {/* Botón moderno para ir a Clientes */}
                        <Button 
                            variant="contained" 
                            color="primary" 
                            size="large"
                            startIcon={<PeopleIcon />}
                            onClick={irClientes}
                            sx={{ fontWeight: 'bold' }}
                        >
                            Ver Clientes
                        </Button>

                        {/* Botón secundario estilizado como Link para volver al Login */}
                        <Button 
                            component={Link} 
                            to="/login" 
                            variant="outlined" 
                            color="secondary"
                            startIcon={<ArrowBackIcon />}
                            sx={{ fontWeight: 'bold' }}
                        >
                            Volver al Login
                        </Button>
                    </Box>
                </Box>
            </Container>

            <Footer />
        </>
    );
}

export default Dashboard;