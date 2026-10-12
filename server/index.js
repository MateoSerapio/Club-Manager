
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import rutasClientes from './routes/clientes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/clientes', rutasClientes);

app.get('/api/salud', (req, res) => {
  res.json({
    ok: true,
    mensaje: 'Servidor funcionando',
  });
});

const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB conectado');

    app.listen(PORT, () => {
      console.log(`Servidor en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar con MongoDB:', error.message);
    process.exit(1);
  });