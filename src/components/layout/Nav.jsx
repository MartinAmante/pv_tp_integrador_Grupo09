import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, ButtonGroup } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';

const Nav = () => {
    const navigate = useNavigate();
    const location = useLocation(); 

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