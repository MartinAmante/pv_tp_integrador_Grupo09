import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppBar, Toolbar, Typography, Box, Chip, Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    const { admin, logout } = useContext(AdminContext);

    const manejarLogout = () => {
        logout(); 
        navigate("/login"); 
    }
    return (
        <AppBar position="static" color="primary" sx={{ mb: 2 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    Administración de Clientes
                </Typography>

                {admin ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <AccountCircleIcon />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Typography variant="body1" sx={{ fontWeight: '500', lineHeight: 1.2 }}>
                                {admin.nombre}
                            </Typography>
                           
                            <Chip 
                                label={admin.sector} 
                                size="small" 
                                color="secondary" 
                                sx={{ fontSize: '0.75rem', height: '18px', mt: 0.5, fontWeight: 'bold' }} 
                            />
                        </Box>
                        <Button                        
                        variant="contained" 
                        color="secondary" 
                        startIcon={<LogoutIcon />}
                        onClick={manejarLogout} 
                        size="small"
                        sx={{  fontWeight: '500', py: 0.5, px: 1.5,fontSize: '0.75rem'}}
                        >
                        Cerrar Sesión
                    </Button>
                    </Box>
                ) : (
                    <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                        Sin sesión activa
                    </Typography>
                )}

            </Toolbar>
        </AppBar>
    );
};

export default Header;