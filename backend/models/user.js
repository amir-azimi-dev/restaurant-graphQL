const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: String,
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        required: true
    }
}, {
    timestamps: true
});

const UserModel = new mongoose.Model("User", UserSchema);
module.exports = UserModel;