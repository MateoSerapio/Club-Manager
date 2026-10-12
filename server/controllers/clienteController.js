import Cliente from '../models/Cliente.js';

const camposCliente = [
  'email',
  'username',
  'name.firstname',
  'name.lastname',
  'address.city',
  'address.street',
  'address.number',
  'address.zipcode',
  'phone',
];

const obtenerDatosPermitidos = (datos) => {
  const resultado = {};

  for (const campo of camposCliente) {
    const partes = campo.split('.');
    let valor = datos;

    for (const parte of partes) {
      valor = valor?.[parte];
    }

    if (valor !== undefined) {
      let destino = resultado;

      for (const parte of partes.slice(0, -1)) {
        destino[parte] ??= {};
        destino = destino[parte];
      }

      destino[partes.at(-1)] = valor;
    }
  }

  return resultado;
};

const serializarCliente = (cliente) => {
  const resultado = cliente.toJSON();
  delete resultado.password;
  return resultado;
};

const responderError = (res, error) => {
  if (error.name === 'ValidationError' || error.name === 'CastError') {
    return res.status(400).json({ mensaje: 'Los datos enviados no son válidos.' });
  }

  console.error('Error en el endpoint de clientes:', error.message);
  return res.status(500).json({ mensaje: 'Ocurrió un error en el servidor.' });
};

export const listarClientes = async (_req, res) => {
  try {
    const clientes = await Cliente.find().sort({ createdAt: -1 });
    return res.json(clientes.map(serializarCliente));
  } catch (error) {
    return responderError(res, error);
  }
};

export const obtenerCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);

    if (!cliente) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado.' });
    }

    return res.json(serializarCliente(cliente));
  } catch (error) {
    return responderError(res, error);
  }
};

export const crearCliente = async (req, res) => {
  try {
    const cliente = await Cliente.create(obtenerDatosPermitidos(req.body));
    return res.status(201).json(serializarCliente(cliente));
  } catch (error) {
    return responderError(res, error);
  }
};

export const actualizarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(
      req.params.id,
      { $set: obtenerDatosPermitidos(req.body) },
      { new: true, runValidators: true }
    );

    if (!cliente) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado.' });
    }

    return res.json(serializarCliente(cliente));
  } catch (error) {
    return responderError(res, error);
  }
};

export const eliminarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndDelete(req.params.id);

    if (!cliente) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado.' });
    }

    return res.json(serializarCliente(cliente));
  } catch (error) {
    return responderError(res, error);
  }
};