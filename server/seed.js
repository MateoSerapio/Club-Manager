import 'dotenv/config';
import mongoose from 'mongoose';
import Cliente from './models/Cliente.js';

const clientes = [
  {
    email: 'ana.lopez@ejemplo.com',
    username: 'analopez',
    name: { firstname: 'Ana', lastname: 'Lopez' },
    phone: '388-4000001',
    address: { city: 'San Salvador de Jujuy', street: 'Belgrano', number: '120', zipcode: '4600' },
  },
  {
    email: 'carlos.mendez@ejemplo.com',
    username: 'carmendez',
    name: { firstname: 'Carlos', lastname: 'Mendez' },
    phone: '388-4000002',
    address: { city: 'La Quiaca', street: 'Sarmiento', number: '45', zipcode: '4650' },
  },
  {
    email: 'lucia.rios@ejemplo.com',
    username: 'lirios',
    name: { firstname: 'Lucia', lastname: 'Rios' },
    phone: '388-4000003',
    address: { city: 'Humahuaca', street: 'Jujuy', number: '310', zipcode: '4630' },
  },
  {
    email: 'martin.perez@ejemplo.com',
    username: 'marperez',
    name: { firstname: 'Martin', lastname: 'Perez' },
    phone: '388-4000004',
    address: { city: 'Tilcara', street: 'Rivadavia', number: '78', zipcode: '4624' },
  },
  {
    email: 'sofia.vega@ejemplo.com',
    username: 'sovega',
    name: { firstname: 'Sofia', lastname: 'Vega' },
    phone: '388-4000005',
    address: { city: 'Palpala', street: 'San Martin', number: '250', zipcode: '4612' },
  },
];

const cargar = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado a MongoDB');
    await Cliente.deleteMany({});
    const insertados = await Cliente.insertMany(clientes);
    console.log(`${insertados.length} clientes insertados`);
  } catch (error) {
    console.error('Error en el seed:', error.message);
  } finally {
    await mongoose.disconnect();
  }
};

cargar();