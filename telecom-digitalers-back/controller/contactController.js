const Contact = require("../models/contactModel");

// Obtener el formulario de contacto
const getContact = (req, res) => {
    // Aquí puede renderizar su formulario de contacto o enviar una respuesta JSON
    res.send("Formulario de contacto");
};

// Enviar el formulario de contacto
const postContact = async (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getContact, postContact };