const VerUsuario = ({usr}) =>{
    return(
    <div>

        <h3> usuario: {usr.name.firstname}{usr.name.lastname} </h3>

    </div>
    )

}
export default VerUsuario;
//desestructurar y renderizar de forma ordenada en pantalla la dirección
//completa del cliente mapeando sus propiedades internas (address.street,
//address.number, address.zipcode, address.city), además de sus credenciales de
//acceso de la base de datos (username y password).
