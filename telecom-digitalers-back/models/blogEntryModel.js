const { Schema, model } = require("mongoose");

const blogEntrySchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    authorName: { type: String, required: true },
    date: { type: Date, required: true },
    authorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = model("BlogEntry", blogEntrySchema);