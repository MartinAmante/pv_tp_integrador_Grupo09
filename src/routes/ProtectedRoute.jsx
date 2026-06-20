import { Children, useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

    const {admin} = useContext(AdminContext);

    if (!admin) {
        return <Navigate to="/login" />;
    }
    return children
};

export default ProtectedRoute;