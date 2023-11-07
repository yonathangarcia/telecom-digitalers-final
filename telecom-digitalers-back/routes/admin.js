const express = require("express");
const adminRouter = express.Router();
const usersController = require("../controller/usersController");
const blogController = require("../controller/blogController");
const storeController = require("../controller/storeController");

adminRouter.post("/register", usersController.registrarUsuario);
adminRouter.post("/login", usersController.iniciarSesion);
adminRouter.get("/logout", usersController.cerrarSesion);
adminRouter.delete("/deleteuser/:id", usersController.deleteUser);
adminRouter.put("/updateuser/:id", usersController.updateUser);

adminRouter.get('/blog', blogController.getEntries);
adminRouter.post('/blog', blogController.postEntry);
adminRouter.get('/blog/:id', blogController.getEntryById);
adminRouter.put('/blog/:id', blogController.updateEntry);
adminRouter.delete('/blog/:id', blogController.deleteEntry);

adminRouter.get('/store', storeController.getStore);
adminRouter.get('/store/:id', storeController.getStoreById);
adminRouter.post('/store', storeController.postStore);
adminRouter.put('/store/:id', storeController.updateStoreProduct);
adminRouter.delete('/store/:id', storeController.deleteStoreProduct);


module.exports = adminRouter;