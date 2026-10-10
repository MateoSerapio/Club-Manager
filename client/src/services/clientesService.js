import axios from "axios";
import { CLIENTES_URL } from "../config/api";

const URL = CLIENTES_URL;

const crearCliente = async (cliente) => {

    const respuesta = await axios.post(
        URL,
        cliente
    );

    return respuesta.data;
};

export default {
    crearCliente
};