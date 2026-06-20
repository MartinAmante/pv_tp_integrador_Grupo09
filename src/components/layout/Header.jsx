import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
// Importamos los componentes de barra de navegación de MUI
import { AppBar, Toolbar, Typography, Box, Chip } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    const { admin } = useContext(AdminContext);

    return (
        <AppBar position="static" color="primary" sx={{ mb: 2 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                
                {/* Nombre del sistema o logo a la izquierda */}
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    Panel de Control
                </Typography>

                {/* Datos del administrador a la derecha si está logueado */}
                {admin ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <AccountCircleIcon />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Typography variant="body1" sx={{ fontWeight: '500', lineHeight: 1.2 }}>
                                {admin.nombre}
                            </Typography>
                            {/* Un Chip es una etiqueta estilizada ideal para mostrar roles/sectores */}
                            <Chip 
                                label={admin.sector} 
                                size="small" 
                                color="secondary" 
                                sx={{ fontSize: '0.75rem', height: '18px', mt: 0.5, fontWeight: 'bold' }} 
                            />
                        </Box>
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