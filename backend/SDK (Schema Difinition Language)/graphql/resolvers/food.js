const {validateCreateFoodData} = require("../../utils/validators/food");
const {authorizeUser} = require("../../utils/authorizeUser/authorizeUser");
const FoodModel = require("../../models/food");
const {isValidObjectId} = require("mongoose");

const foods = async () => await FoodModel.find();

const singleFoods = async (args) => {
    if (!isValidObjectId(args.foodId)) throw new Error("Invalid Food Id!");
    return FoodModel.findById(args.foodId);
}

const createFood = async (args, req) => {
    const isDataValid = await validateCreateFoodData(args);
    if (!isDataValid) throw new Error("Invalid Data!");

    const user = await authorizeUser(req);
    if (!user || user.role !== "ADMIN") {
        throw new Error("Access Denied!");
    }

    const newFoodData = {
        title: args.title,
        price: args.price,
        inventory: args.inventory,
        image: args.image,
        category: args.category
    };

    return FoodModel.create(newFoodData);
};

module.exports = {
    createFood,
    foods,
    singleFoods
};