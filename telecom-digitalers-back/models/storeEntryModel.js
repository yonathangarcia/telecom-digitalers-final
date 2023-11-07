const { Schema, model } = require("mongoose");

const storeEntrySchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: false },
}, { timestamps: true });

module.exports = model("StoreEntry", storeEntrySchema);