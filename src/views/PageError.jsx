import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";


const PageError = () => {
    const navigate = useNavigate();
    return (
        <Container
        maxWidth="sm"
        sx={{
            height: "100vh",
            display:"flex",
            justifyContent: "center",
            alignItems: "center"
        }}
        >
            <Box
            sx={{
                textAlign: "center",
                p: 4,
                borderRadius: 2,
                boxShadow: 3
                }}
            >
                <Typography variant="h1" color="error" sx={{ fontWeight: "bold"}}>
                    404
                </Typography>

                <Typography variant="h4" sx={{ mb:2}}>
                    Página no encontrada
                </Typography>

                <Typography variant="body1" sx={{ mb: 4}}>
                    La página solicitada no existge o fue removida.
                </Typography>
                
                
                <Button
                variant="contained"
                onClick={() => navigate(-1)}
                >
                    Volver atrás
                </Button>
            </Box>
        </Container>
    );
};
export default PageError;