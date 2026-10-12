# Club Manager

Sistema de gestión de socios y cuotas para clubes y asociaciones deportivas.

## Cómo correrlo

### Frontend (puerto 5173)

```bash
cd client
npm install
npm run dev
```

### Backend (puerto 3001)

```bash
cd server
npm install
npm run dev
```

El backend necesita un archivo `server/.env`. Para configurarlo, copiá `server/.env.example` como `server/.env` y completá `MONGODB_URI` con la dirección de conexión de MongoDB Atlas.

**Importante:** no subas el archivo `.env` real a GitHub.

## Cargar datos de ejemplo

```bash
cd server
node seed.js
```

Inserta clientes de ejemplo en MongoDB Atlas. Antes de cargarlos, borra los clientes existentes.

## Endpoints de la API

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/clientes | Lista todos los clientes |
| GET | /api/clientes/:id | Trae un cliente |
| POST | /api/clientes | Crea un cliente |
| PUT | /api/clientes/:id | Modifica un cliente (opcional) |
| DELETE | /api/clientes/:id | Elimina un cliente |

## Tecnologías

* **Frontend:** React + Vite
* **Backend:** Node.js + Express
* **Base de datos:** MongoDB Atlas

