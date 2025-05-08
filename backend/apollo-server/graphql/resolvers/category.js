const CategoryModel = require("../../models/category");
const FoodModel = require("../../models/food");
const {validateCreateCategoryData} = require("../../utils/validators/category");
const {authorizeUser} = require("../../utils/authorizeUser/authorizeUser");

const categories = async () => await CategoryModel.find().lean();

const createCategory = async (_, args, req) => {
    const isDataValid = await validateCreateCategoryData(args);
    if (!isDataValid) throw new Error("Invalid Data!");

    const user = await authorizeUser(req);
    if (!user || user.role !== "ADMIN") {
        throw new Error("Access Denied!");
    }

    const newCategoryData = {
        title: args.title,
        icon: args.icon
    };

    return await CategoryModel.create(newCategoryData);
};

module.exports = {
    categories,
    createCategory
};