import {usuarios} from "../data/adminData";

export const ServiceAutorizaciones =(()=>{

    const loginService = async (email, password, sector) => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const encontrado = usuarios.find(
                    usuario => usuario.user === email &&
                     usuario.password === password &&
                      usuario.sector === sector);
                if (encontrado) {
                    resolve({
                        id: encontrado.id, 
                        nombre: encontrado.nombre, 
                        sector: encontrado.sector
                    });
                } else {
                    reject(new Error("Credenciales incorrectas"));
                }
            }, 1000);
        });
    };

    return {
        loginService
    };
})();