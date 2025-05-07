const {users, loginUser, registerUser} = require("./user");
const {categories, createCategory} = require("./category");
const {foods, singleFood, createFood} = require("./food");
const {orders, singleOrder, createOrder, changeOrderStatus, removeOrder} = require("./order");

const resolvers = {
    Query: {
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
    }
};

module.exports = resolvers;