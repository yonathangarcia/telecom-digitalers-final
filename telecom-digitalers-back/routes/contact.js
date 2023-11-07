const express = require("express");
const contactRouter = express.Router();
const contactController = require("../controller/contactController");

// Acceder al formulario de contacto
contactRouter.route("/contact")
    .get(contactController.getContact)
    .post(contactController.postContact);

module.exports = contactRouter;