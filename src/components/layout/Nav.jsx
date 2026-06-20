import { useNavigate } from "react-router-dom";
const Nav = () => {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate("/dashboard")}>Dashboard</button>
            <button onClick={() => navigate("/clientes")}>Clientes</button>
        </>
    );
}

export default Nav;