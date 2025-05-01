const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

const CategoryModel = mongoose.model("Category", CategorySchema);
module.exports = CategoryModel;