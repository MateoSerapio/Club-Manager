import { Router } from 'express';
import {
  listarClientes,
  obtenerCliente,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
} from '../controllers/clienteController.js';

const rutasClientes = Router();

rutasClientes.route('/')
  .get(listarClientes)
  .post(crearCliente);

rutasClientes.route('/:id')
  .get(obtenerCliente)
  .put(actualizarCliente)
  .delete(eliminarCliente);

export default rutasClientes;