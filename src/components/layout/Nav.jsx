import { useNavigate, useLocation } from "react-router-dom";
// Importamos componentes de navegación y botones de MUI
import { Box, Button, ButtonGroup } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';

const Nav = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Nos sirve para saber en qué página estamos y pintar el botón activo

    return (
        <Box 
            component="nav" 
            sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mb: 3, 
                px: 2 
            }}
        >
            {/* Un grupo de botones pegados y estilizados de forma nativa por MUI */}
            <ButtonGroup variant="outlined" aria-label="Navegación principal" size="large">
                <Button 
                    onClick={() => navigate("/dashboard")}
                    startIcon={<DashboardIcon />}
                    variant={location.pathname === "/dashboard" ? "contained" : "outlined"}
                    sx={{ fontWeight: 'bold' }}
                >
                    Dashboard
                </Button>
                <Button 
                    onClick={() => navigate("/clientes")}
                    startIcon={<PeopleIcon />}
                    variant={location.pathname.startsWith("/clientes") ? "contained" : "outlined"}
                    sx={{ fontWeight: 'bold' }}
                >
                    Clientes
                </Button>
            </ButtonGroup>
        </Box>
    );
}

export default Nav;