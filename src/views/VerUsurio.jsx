import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const VerUsuario = ({ usr }) => {
    const {name: {firstname, lastname }, username, password, address: {street, number, city, zipcode}} = usr;
    return (
        <Card sx={{ maxWidth: 700, mx: "auto", mt: 2, p: 1 }}>
            <CardContent>

                <Typography variant="h5" gutterBottom>
                    Cliente: {firstname} {lastname}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                    Dirección
                </Typography>

                <Typography>
                    Calle: {street}
                </Typography>

                <Typography>
                    Número: {number}
                </Typography>

                <Typography>
                    Ciudad: {city}
                </Typography>

                <Typography>
                    Código postal: {zipcode}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                    Credenciales de acceso
                </Typography>

                <Typography>
                    Usuario: {username}
                </Typography>

                <Typography type = "password">
                    Contraseña: {password}
                </Typography>

            </CardContent>
        </Card>
    );
};

export default VerUsuario;