const {OrderType} = require("../types/order");
const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLBoolean
} = require("graphql/type");
const OrderModel = require("../../models/order");
const {validateCreateOrderData, validateChangeOrderStatusData} = require("../../utils/validators/order");
const {authorizeUser} = require("../../utils/authorizeUser/authorizeUser");
const {isValidObjectId} = require("mongoose");

const InputOrderPayloadType = new GraphQLInputObjectType({
    name: "InputOrderPayloadType",
    fields: () => ({
        food: {type: new GraphQLNonNull(GraphQLID)},
        count: {type: new GraphQLNonNull(GraphQLInt)}
    })
});

const orderMutation = {
    type: OrderType,
    args: {
        title: {type: new GraphQLNonNull(GraphQLString)},
        payload: {type: new GraphQLNonNull(new GraphQLList(InputOrderPayloadType))},
    },
    resolve: async (_, args, context) => {
        const isDataValid = await validateCreateOrderData(args);
        if (!isDataValid) throw new Error("Invalid Data!");

        const user = await authorizeUser(context.req);
        if (!user) {
            throw new Error("You are not Authorized, please login first!");
        }

        const newOrderData = {
            title: args.title,
            payload: args.payload,
            user: user._id
        };

        return OrderModel.create(newOrderData);
    }
};

const changeOrderStatusMutation = {
    type: OrderType,
    args: {
        orderId: {type: new GraphQLNonNull(GraphQLID)},
        isDelivered: {type: new GraphQLNonNull(GraphQLBoolean)}
    },
    resolve: async (_, args, context) => {
        const isDataValid = await validateChangeOrderStatusData(args);
        if (!isDataValid) throw new Error("Invalid Data!");

        const user = await authorizeUser(context.req);
        if (!user || user.role !== "ADMIN") {
            throw new Error("Access denied!");
        }

        return OrderModel.findByIdAndUpdate(args.orderId, {isDelivered: args.isDelivered}, {new: true});
    }
};

const removeOrderMutation = {
    type: OrderType,
    args: {
        orderId: {type: new GraphQLNonNull(GraphQLID)}
    },
    resolve: async (_, args, context) => {
        if (!isValidObjectId(args.orderId)) throw new Error("Invalid Order Id!");

        const user = await authorizeUser(context.req);
        if (!user || user.role !== "ADMIN") {
            throw new Error("Access denied!");
        }

        return OrderModel.findByIdAndDelete(args.orderId);
    }
};


module.exports = {
    orderMutation,
    changeOrderStatusMutation,
    removeOrderMutation
};