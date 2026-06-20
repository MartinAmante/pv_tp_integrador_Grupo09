/*import { Link } from "react-router-dom";*/
import { useNavigate } from "react-router-dom";
import { useState, useContext} from "react";
import { AdminContext } from "../context/AdminContext";
    const Login = () => {
    const navigate = useNavigate();
    const { setAdmin } = useContext(AdminContext);
    /*const contexto = useContext(AdminContext);
    console.log("Contexto:", contexto);*/

    const ingresar = () => {
        if (nombre.trim() === "") {
            alert("Debe ingresar un nombre");
            return;
        }

        if (sector === "") {
            alert("Debe seleccionar un cargo");
            return;
        }
        setAdmin({
            nombre,
            sector
        });
        navigate("/dashboard");
    };

    const [nombre, setNombre] = useState("");
    const [sector, setSector] = useState("");

    return (
        <>
        <h1>LOGIN</h1>

        
        <div>
            <label>Nombre:</label>
            <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            />
        </div>
        <br />
        <div>
            <label>Sector:</label>
            <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
            >
                <option value="" disabled hidden>Cargo</option>
                <option value="Soporte">Soporte</option>
                <option value="Gerencia">Gerencia</option>
            </select>
        </div>
        <button onClick={ingresar}>
            Ingresar
        </button>
        </>
    );
}


/*function Login() {
    console.log("Render Login");
    return (
        <>
            <h1>LOGIN</h1>;
            <Link to="/dashboard">
            Ir al Dashboard
            </Link>
        </>
    );
}*/



export default Login;