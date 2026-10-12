// URL base del backend propio. Se puede cambiar con VITE_API_URL en client/.env
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

export const CLIENTES_URL = `${API_URL}/clientes`;
