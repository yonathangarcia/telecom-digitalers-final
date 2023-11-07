const express = require("express");
const storeRouter = express.Router();
const storeController = require("../controller/storeController");

storeRouter.get("/store", storeController.getStore);
storeRouter.get("/sore/:id", storeController.getStoreById);
storeRouter.post("/store/create", storeController.postStore);

module.exports = storeRouter;
