import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";


const Dashboard = () => {
    const { setAdmin } = useContext(AdminContext);
    /*const nombre = "Matias"
    const sector = "Soporte"*/
    const navigate = useNavigate();
    const irClientes = () => {
        navigate("/clientes")
    }
    const cerrarSesion = () => {
    setAdmin(null);
    navigate("/login");
    };
    console.log("Render Dashboard");
    return (
    <>
    <Header /*nombre={nombre}
            sector={sector}*//>
    <Nav />
    <h1>Inicio</h1>;
    <Link to="/login">
    Volver al Login
    </Link>
        <button onClick={irClientes}>
            Ver Clientes
        </button>
        <button>
            Configuración
        </button>
        <button onClick={cerrarSesion}>
            Cerrar Sesión
        </button>
    <Footer />
    </>
    );
}

export default Dashboard;