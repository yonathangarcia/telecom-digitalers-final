const express = require('express');
const loginRouter = express.Router();
const usersController = require('../controller/usersController');

loginRouter.post('/login', usersController.iniciarSesion);
loginRouter.get('/logout', usersController.cerrarSesion);
module.exports = loginRouter;