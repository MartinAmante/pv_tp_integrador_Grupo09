import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

const ListaCliente = () => {
    const navigate = useNavigate();
    const volverInicio = () => {
        navigate("/dashboard");
    }
    const verCliente = () => {
        navigate("/clientes/:id");
    }
    return (
        <>
        <Header nombre="Matias"
            sector="Soporte"/>
        <Nav />
        <h1>CLIENTES</h1>
        <button onClick={volverInicio}>
            Volver al inicio
        </button>
        <button onClick={verCliente}>
            Ver Cliente
        </button>
        <Footer />
        </>
    )
    
}

export default ListaCliente;