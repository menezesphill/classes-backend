const express = require('express')
const cors = require('cors')
const { routes } = require('./routes')

// O CORS tenta bloquear quando uma requisição tem origem em outro website

const app = express()

app.use(cors());
app.use(express.json())  // Middleware para utilizar JSON
app.use('/api', routes); // http://localhost:3000/api/handshake

module.exports = { app }