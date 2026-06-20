import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 2.5,
                px: 2,
                mt: 5, // Le da un buen espacio de separación con lo que haya arriba
                backgroundColor: '#f5f5f5',
                borderTop: '1px solid #e0e0e0',
                width: '100%',
                // Eliminamos el position fixed para que no flote tapando el contenido
            }}
        >
            <Container maxWidth="md">
                <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    align="center" 
                    sx={{ fontWeight: '500' }}
                >
                    TP Integrador - Programación Visual
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;