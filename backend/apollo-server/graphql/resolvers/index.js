const { getMe, users, loginUser, registerUser } = require("./user");
const { categories, createCategory } = require("./category");
const { foods, singleFood, createFood } = require("./food");
const { orders, singleOrder, createOrder, changeOrderStatus, removeOrder } = require("./order");

const FoodModel = require("../../models/food");
const CategoryModel = require("../../models/category");
const UserModel = require("../../models/user");

const resolvers = {
    Query: {
        getMe,
        users,
        categories,
        foods,
        singleFood,
        orders,
        singleOrder
    },
    Mutation: {
        loginUser,
        registerUser,
        createCategory,
        createFood,
        createOrder,
        changeOrderStatus,
        removeOrder
    },
    Category: {
        foods: async source => {
            const categoryId = source._id;
            return FoodModel.find({ category: categoryId });
        }
    },
    Food: {
        category: async source => {
            const categoryId = source.category;
            return CategoryModel.findById(categoryId);
        }
    },

    Order: {
        user: async (source) => {
            const userId = source.user;
            return UserModel.findById(userId, { password: 0 });
        },

        payload: async (source) => {
            return await Promise.all(
                source.payload.map(async item => {
                    const targetFood = await FoodModel.findById(item.food).lean();

                    return {
                        count: item.count,
                        food: targetFood
                    };
                })
            );
        }
    }
};

module.exports = resolvers;