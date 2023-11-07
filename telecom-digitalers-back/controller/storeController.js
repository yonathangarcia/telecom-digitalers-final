const Store = require("../models/storeEntryModel");

// Obtener todos los elementos de la tienda
const getStore = async (req, res) => {
    try {
        const storeItems = await Store.find();
        res.json(storeItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un elemento de la tienda por ID
const getStoreById = async (req, res) => {
    try {
        const storeItem = await Store.findById(req.params.id);
        if (storeItem == null) {
            return res.status(404).json({ message: "No se pudo encontrar el elemento" });
        }
        res.json(storeItem);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo elemento de la tienda
const postStore = async (req, res) => {
    const storeItem = new Store({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    });

    try {
        const newStoreItem = await storeItem.save();
        res.status(201).json(newStoreItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Eliminar un producto de la tienda
const deleteStoreProduct = async (req, res) => {
    try {
        const product = await Store.findById(req.params.id);
        if (product == null) {
            return res.status(404).json({ message: 'No se pudo encontrar el producto' });
        }

        await product.remove();
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un producto de la tienda
const updateStoreProduct = async (req, res) => {
    try {
        const product = await Store.findById(req.params.id);
        if (product == null) {
            return res.status(404).json({ message: 'No se pudo encontrar el producto' });
        }

        if (req.body.name != null) {
            product.name = req.body.name;
        }

        if (req.body.price != null) {
            product.price = req.body.price;
        }

        if (req.body.description != null) {
            product.description = req.body.description;
        }

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getStore, getStoreById, postStore, deleteStoreProduct, updateStoreProduct };