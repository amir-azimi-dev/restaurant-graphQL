const {OrderType} = require("../types/order");
const {GraphQLList} = require("graphql/type");
const OrderModel = require("../../models/order");

const ordersQuery = {
    type: new GraphQLList(OrderType),
    resolve: async () => {
        return OrderModel.find();
    }
};

module.exports = {
    ordersQuery
};