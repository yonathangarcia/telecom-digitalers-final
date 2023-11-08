const BlogEntry = require("../models/blogEntryModel");

const getEntries = async (req, res) => {
    try {
        const entries = await BlogEntry.find();
        res.json(entries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

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

const postEntry = async (req, res) => {
    const blogEntry = new BlogEntry({
        title: req.body.title,
        content: req.body.content,
        authorName: req.body.authorName,
        date: req.body.date,
    });

    try {
        const newEntry = await blogEntry.save();
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

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