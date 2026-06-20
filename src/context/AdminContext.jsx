import { createContext, useState, useEffect } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({children}) => {

    const [admin, setAdmin] = useState(() => {
    const stored = localStorage.getItem("admin")
    return stored ? JSON.parse(stored) : null;
});
useEffect(() => {
    if (admin) {
        localStorage.setItem("admin", JSON.stringify(admin));
    } else {
        localStorage.removeItem("admin");
    }
}, [admin]);

    return (
        <AdminContext.Provider value={{admin, setAdmin}}>
            {children}
        </AdminContext.Provider>
    )
};