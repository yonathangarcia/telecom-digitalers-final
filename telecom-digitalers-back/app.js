require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const errorManagement = require('./middleware/errorManagement');
const { verificarToken, verificarRol } = require('./middleware/authMiddleware');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(errorManagement);

mongoose.connect(process.env.Mongoose_conect_credential, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const usersRouter = require("./routes/users");
app.use("/users", verificarToken, verificarRol('user'), usersRouter);

const adminRouter = require("./routes/admin");
app.use("/admin", verificarToken, verificarRol('admin'), adminRouter);

const puerto = 3000;
app.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
});