const { Schema, model } = require("mongoose");

const personDataSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    job: { type: String, required: true },
    information: { type: String, required: true }
}, { timestamps: true });

module.exports = model("PersonData", personDataSchema);