const BlogEntry = require("../models/blogEntryModel");

// Obtener todas las entradas del blog
const getEntries = async (req, res) => {
    try {
        const entries = await BlogEntry.find();
        res.json(entries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una entrada del blog por ID
const getEntryById = async (req, res) => {
    try {
        const entry = await BlogEntry.findById(req.params.id);
        if (entry == null) {
            return res.status(404).json({ message: "No se pudo encontrar la entrada" });
        }
        res.json(entry);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Crear una nueva entrada de blog
const postEntry = async (req, res) => {
    const blogEntry = new BlogEntry({
        title: req.body.title,
        content: req.body.content,
        authorId: req.body.authorId
    });

    try {
        const newEntry = await blogEntry.save();
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una entrada de blog
const deleteEntry = async (req, res) => {
    try {
        const entry = await BlogEntry.findById(req.params.id);
        if (entry == null) {
            return res.status(404).json({ message: 'No se pudo encontrar la entrada' });
        }

        await entry.remove();
        res.json({ message: 'Entrada eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una entrada de blog
const updateEntry = async (req, res) => {
    try {
        const entry = await BlogEntry.findById(req.params.id);
        if (entry == null) {
            return res.status(404).json({ message: 'No se pudo encontrar la entrada' });
        }

        if (req.body.title != null) {
            entry.title = req.body.title;
        }

        if (req.body.content != null) {
            entry.content = req.body.content;
        }

        const updatedEntry = await entry.save();
        res.json(updatedEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
module.exports = { getEntries, getEntryById, postEntry, deleteEntry, updateEntry };