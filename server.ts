/**
 * Servidor Express para proxy de API keys
 * Protege las claves de API evitando exponerlas en el cliente
 */

import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para parsear JSON
app.use(express.json());

// Configurar CORS para desarrollo
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Endpoint proxy para GitHub API
app.get('/api/github/repos/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const { sort = 'updated', per_page = '10' } = req.query;
    
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=${sort}&per_page=${per_page}`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-App/1.0'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error proxying GitHub API:', error);
    res.status(500).json({ 
      error: 'Error al obtener repositorios de GitHub',
      message: error instanceof Error ? error.message : 'Error desconocido'
    });
  }
});

// Endpoint para verificar estado del servidor
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor proxy corriendo en http://localhost:${PORT}`);
  console.log(`📡 Endpoint disponible: GET /api/github/repos/:username`);
});

export default app;
