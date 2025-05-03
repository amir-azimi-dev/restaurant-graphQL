const {GraphQLObjectType, GraphQLSchema} = require("graphql");
const {usersQuery} = require("./queries/user");
const {categoriesQuery} = require("./queries/category");
const {categoryMutation} = require("./mutations/category");
const {foodsQuery, getSingleFood} = require("./queries/food");
const {foodMutation} = require("./mutations/food");
const { registerUserMutation, loginUserMutation } = require("./mutations/user");
const {orderMutation, changeOrderStatusMutation, removeOrderMutation} = require("./mutations/order");
const {ordersQuery, getSingleOrder} = require("./queries/order");

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: () => ({
        users: usersQuery,
        categories: categoriesQuery,
        foods: foodsQuery,
        singleFood: getSingleFood,
        orders: ordersQuery,
        singleOrder: getSingleOrder
    })
});

const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: () => ({
        registerUser: registerUserMutation,
        loginUser: loginUserMutation,
        createCategory: categoryMutation,
        createFood: foodMutation,
        createOrder: orderMutation,
        changeOrderStatus: changeOrderStatusMutation,
        removeOrder: removeOrderMutation
    })
});

const Schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});

module.exports = Schema;