const express = require("express");
const blogRouter = express.Router();
const blogController = require("../controller/blogController");
const validateBlogEntry = require('../middleware/validateBlogEntry'); // Importa el middleware de validación

blogRouter.get("/blog", blogController.getEntries);
blogRouter.get("/blog/:id", blogController.getEntryById);
blogRouter.post("/blog/create", validateBlogEntry, blogController.postEntry); // Usa el middleware de validación antes del controlador

module.exports = blogRouter;