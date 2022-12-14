const { Router } = require('express')

const routes = Router()

const controller = require('./controller')

// Define os recursos disponíveis na nossa API

routes.get('/handshake', controller.handshake) // esse recurso está disponível em http://localhost:3000/handshake

module.exports = { routes };