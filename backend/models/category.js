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

const CategoryModel = new mongoose.Model("Category", CategorySchema);
module.exports = CategoryModel;