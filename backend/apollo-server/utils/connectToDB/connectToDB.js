const mongoose = require("mongoose");

const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/restaurant");
        console.log("\n\nmongoDB connected successfully.");

    } catch (error) {
        console.log("Error while connecting to Database: \n", error);
    }
};

module.exports = connectToDB;