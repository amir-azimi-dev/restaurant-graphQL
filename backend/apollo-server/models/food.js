const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    inventory: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: true
    }

}, {
    timestamps: true
});

const FoodModel = mongoose.model("Food", FoodSchema);
module.exports = FoodModel;