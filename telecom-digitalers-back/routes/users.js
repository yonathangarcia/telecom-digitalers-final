const express = require("express");
const usersRouter = express.Router();
const usersController = require("../controller/usersController");
const contactController = require("../controller/contactController");

usersRouter.post("/register", usersController.registrarUsuario);
usersRouter.post("/login", usersController.iniciarSesion);
usersRouter.get("/logout", usersController.cerrarSesion);

usersRouter.get("/contact", contactController.getContact);
usersRouter.post("/contact", contactController.postContact);

module.exports = usersRouter;
