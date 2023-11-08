const express = require("express");
const contactRouter = express.Router();
const contactController = require("../controller/contactController");

contactRouter.route("/contact")
    .get(contactController.getContact)
    .post(contactController.postContact);

module.exports = contactRouter;