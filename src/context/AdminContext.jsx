import { createContext, useState, useEffect } from "react";

export const AdminContext = createContext();
//local storage= memoria de la pagina web
export const AdminProvider = ({children}) => {

    const [admin, setAdmin] = useState(() => { //el estado almacena lo que devuelve la funcion
    const stored = localStorage.getItem("admin") //extrae "admin" de la memoria
    return stored ? JSON.parse(stored) : null; // operador ternario
});
useEffect(() => {
    if (admin) {
        localStorage.setItem("admin", JSON.stringify(admin));//guarda admin, convertido en texto
    } else {
        localStorage.removeItem("admin");//borra la variable admin
    }
}, [admin]);

const login = (adminData) => {
        setAdmin(adminData);
    };

  
 const logout = () => {
        setAdmin(null); 
    };

    return (
        <AdminContext.Provider value={{admin, setAdmin, login, logout}}>
            {children}
        </AdminContext.Provider>
    )
};