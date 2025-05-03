const {OrderType} = require("../types/order");
const {GraphQLNonNull, GraphQLString, GraphQLID, GraphQLList, GraphQLInputObjectType, GraphQLInt} = require("graphql/type");
const OrderModel = require("../../models/order");
const {validateCreateOrderData} = require("../../utils/validators/order");
const {authorizeUser} = require("../../utils/authorizeUser/authorizeUser");

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

module.exports = {
    orderMutation
};