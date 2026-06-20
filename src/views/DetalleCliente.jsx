import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

const DetalleCliente = () => {
    const navigate = useNavigate();
    const volverClientes = () => {
        navigate("/clientes");
    }
    return (
    <>
    <Header nombre="Matias"
            sector="Soporte"/>
    <Nav />
    <h1>DETALLE CLIENTE</h1>;
    <button onClick={volverClientes}>
            Volver al listado de clientes
        </button>
    <Footer />
    </>
    )
}

export default DetalleCliente;