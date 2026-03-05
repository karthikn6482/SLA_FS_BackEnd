const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
    filename: String,
    path: String
});

module.exports = mongoose.model("Image", ImageSchema);