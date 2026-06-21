const VerUsuario = ({usr}) =>{
    return(
    <div>

        <h3> Cliente: {usr.name.firstname} {usr.name.lastname} </h3>
       
            <div> 
                <h3>Direccion:</h3>
                    <p>Calle: {usr.address.street}  </p>
                    <p>Numero: {usr.address.number} </p>
                    <p>Ciudad: {usr.address.city}    </p>
                    <p>Codigo postal: {usr.address.zipcode}</p>
                <h3>credenciales de acceso:  </h3>
                    <p>username: {usr.username} </p>
                    <p> password: {usr.password}   </p>
            </div>
       
    </div>
    )

}
export default VerUsuario;