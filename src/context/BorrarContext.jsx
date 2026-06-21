import { createContext, useState } from "react";

export const BorrarContext = createContext();

export const BorrarContextProvider = ({children}) => {
    const [idBorrar, setIdBorrar] = useState(null);

    return (
        <BorrarContext.Provider value = {{idBorrar,setIdBorrar}}>
            {children}
        </BorrarContext.Provider>
    )

}
