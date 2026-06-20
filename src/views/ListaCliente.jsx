import { useState, useEffect } from "react";

function ListaCliente() {

    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    return (
        <>
            <h1>Lista de Clientes</h1>
        </>
    );
}

export default ListaCliente;