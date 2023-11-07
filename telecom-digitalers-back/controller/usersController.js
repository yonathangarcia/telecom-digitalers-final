const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/userModel");

const registrarUsuario = async (req, res) => {
  const { username, email, password, rol } = req.body;

  try {
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res
        .status(400)
        .json({ mensaje: "El correo electrónico ya está en uso" });
    }

    const valorRol = rol === "admin" ? "admin" : "user";

    const hashedPassword = await bcrypt.hash(password, 10);

    const usuario = new Usuario({
      username,
      email,
      password: hashedPassword,
      rol: valorRol,
    });

    await usuario.save();

    return res
      .status(201)
      .json({ mensaje: "Usuario registrado correctamente" });
  } catch (error) {
    return res
      .status(500)
      .json({ mensaje: "Error al registrar usuario", error });
  }
};

const iniciarSesion = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(401).json({ mensaje: "Credenciales inválidas" });
    }

    const contraseñaValida = await bcrypt.compare(password, usuario.password);

    if (!contraseñaValida) {
      return res.status(401).json({ mensaje: "Credenciales inválidas" });
    }

    const token = jwt.sign(
      { id: usuario._id, email: usuario.email },
      "tu_secreto"
    );

    res.cookie('token', token, { httpOnly: true, Secure: process.env.NODE_ENV === 'production', sameSite: 'Strict', maxAge: 14400000 });

    return res.status(200).json({ mensaje: 'Inicio de sesión exitoso.' });
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al iniciar sesión", error });
  }
};
// Eliminar un usuario
const deleteUser = async (req, res) => {
  try {
    const user = await Usuario.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'No se pudo encontrar el usuario' });
    }

    await user.remove();
    res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un usuario
const updateUser = async (req, res) => {
  try {
    const user = await Usuario.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'No se pudo encontrar el usuario' });
    }

    if (req.body.email != null) {
      const emailExist = await Usuario.findOne({ email: req.body.email });
      if (emailExist) {
        return res.status(400).json({ message: 'El correo electrónico ya está en uso' });
      }
      user.email = req.body.email;
    }

    if (req.body.password != null) {
      user.password = await bcrypt.hash(req.body.password, 10);
    }

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const cerrarSesion = (req, res) => {
  res.json({ token: null, message: 'Sesión cerrada' });
};

module.exports = { registrarUsuario, iniciarSesion, deleteUser, updateUser, cerrarSesion };