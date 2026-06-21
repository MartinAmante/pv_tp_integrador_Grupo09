import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 2.5,
                px: 2,
                mt: 5, 
                backgroundColor: '#f5f5f5',
                borderTop: '1px solid #e0e0e0',
                width: '100%',
                
            }}
        >
            <Container maxWidth="md">
                <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    align="center" 
                    sx={{ fontWeight: 'bold' }}
                >
                    TP Integrador - Programación Visual
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;