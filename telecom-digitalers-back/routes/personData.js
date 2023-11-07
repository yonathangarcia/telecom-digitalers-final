const express = require("express");
const personDataRouter = express.Router();
const personDataController = require("../controller/personDataController");

personDataRouter.get("/persondata", personDataController.getPersonData);
personDataRouter.post("/persondata", personDataController.postPersonData);

module.exports = personDataRouter;