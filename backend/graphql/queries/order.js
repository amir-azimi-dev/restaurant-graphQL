const {OrderType} = require("../types/order");
const {GraphQLList, GraphQLNonNull, GraphQLID} = require("graphql/type");
const OrderModel = require("../../models/order");
const {FoodType} = require("../types/food");
const {isValidObjectId} = require("mongoose");
const FoodModel = require("../../models/food");

const ordersQuery = {
    type: new GraphQLList(OrderType),
    resolve: async () => {
        return OrderModel.find();
    }
};

const getSingleOrder = {
    type: OrderType,
    args: {
        orderId: {type: new GraphQLNonNull(GraphQLID)}
    },
    resolve: async (_, args) => {
        if (!isValidObjectId(args.orderId)) throw new Error("Invalid Order Id!");

        return await OrderModel.findById(args.orderId);
    }
};

module.exports = {
    ordersQuery,
    getSingleOrder
};