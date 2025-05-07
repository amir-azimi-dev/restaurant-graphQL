const {validateCreateFoodData} = require("../../utils/validators/food");
const {authorizeUser} = require("../../utils/authorizeUser/authorizeUser");
const FoodModel = require("../../models/food");
const {isValidObjectId} = require("mongoose");

const foods = async () => {
    const foodsData = await FoodModel.find().populate("category").lean();

    return await Promise.all(
        foodsData.map(async foodData => {
            const categoryFoods = await FoodModel.find({category: foodData.category._id})
                .populate("category")
                .populate("category.food")
                .lean();

            const manipulatedFoodData = {...foodData};
            manipulatedFoodData.category.foods = categoryFoods;

            return manipulatedFoodData;
        })
    );
};

const singleFood = async (_, args) => {
    if (!isValidObjectId(args.foodId)) throw new Error("Invalid Food Id!");
    const foodData = await FoodModel.findById(args.foodId).populate("category").lean();

    const categoryFoods = await FoodModel.find({category: foodData.category._id})
        .populate("category")
        .populate("category.food")
        .lean();

    const manipulatedFoodData = {...foodData};
    manipulatedFoodData.category.foods = categoryFoods;

    return manipulatedFoodData;
}

const createFood = async (_, args, req) => {
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

    return await ((await FoodModel.create(newFoodData)).populate("category"));
};

module.exports = {
    createFood,
    foods,
    singleFood
};