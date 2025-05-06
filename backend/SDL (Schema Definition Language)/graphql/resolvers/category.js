const CategoryModel = require("../../models/category");
const FoodModel = require("../../models/food");
const {validateCreateCategoryData} = require("../../utils/validators/category");
const {authorizeUser} = require("../../utils/authorizeUser/authorizeUser");

const categories = async () => {
    const categoriesData = await CategoryModel.find().lean();

    return await Promise.all(
        categoriesData.map(async categoryData => {
            const categoryFoods = await FoodModel.find({category: categoryData._id})
                .populate("category")
                .populate("category.food")
                .lean();

            return {
                ...categoryData,
                foods: categoryFoods
            };
        })
    );
};

const createCategory = async (args, req) => {
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