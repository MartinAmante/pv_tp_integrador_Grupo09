import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const VerUsuario = ({ usr }) => {
    return (
        <Card sx={{ maxWidth: 700, mx: "auto", mt: 2, p: 1 }}>
            <CardContent>

                <Typography variant="h5" gutterBottom>
                    Cliente: {usr.name.firstname} {usr.name.lastname}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                    Dirección
                </Typography>

                <Typography>
                    Calle: {usr.address.street}
                </Typography>

                <Typography>
                    Número: {usr.address.number}
                </Typography>

                <Typography>
                    Ciudad: {usr.address.city}
                </Typography>

                <Typography>
                    Código postal: {usr.address.zipcode}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                    Credenciales de acceso
                </Typography>

                <Typography>
                    Usuario: {usr.username}
                </Typography>

                <Typography>
                    Contraseña: {usr.password}
                </Typography>

            </CardContent>
        </Card>
    );
};

export default VerUsuario;