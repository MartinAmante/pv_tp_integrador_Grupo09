import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";

const Header = () => {
    const { admin, setAdmin } = useContext(AdminContext);
    return (
        <>
            <h2>Bienvenido {admin?.nombre}</h2>
            <p>Sector: {admin?.sector}</p>
        </>
    );
};

export default Header;