const {GraphQLObjectType, GraphQLString} = require("graphql");
const {GraphQLID, GraphQLInt, GraphQLList, GraphQLBoolean} = require("graphql/type");
const FoodModel = require("../../models/food");
const UserModel = require("../../models/user");

// const OrderType = new GraphQLObjectType({
//     name: "Order",
//     fields: () => {
//         const {UserType} = require("./user");
//
//         return {
//             _id: {type: GraphQLID},
//             payload: {type: new GraphQLList(OrderPayloadType)},
//             user: {
//                 type: UserType,
//                 resolve: async (source) => {
//                     const userId = source.user;
//                     return UserModel.findById(userId);
//                 }
//             },
//             isDelivered: {type: GraphQLBoolean}
//         }
//     }
// });

// const OrderPayloadType = new GraphQLObjectType({
//     name: "OrderPayload",
//     fields: () => {
//         const {FoodType} = require("./food");
//
//         return {
//             food: {
//                 type: FoodType,
//                 resolve: async (source) => {
//                     const foodId = source.food;
//                     return FoodModel.findById(foodId);
//                 }
//             },
//             count: {type: GraphQLInt}
//         };
//     }
// });

const OrderPayloadType = `
    type OrderPayload {
        food: Food!,
        count: Int!
    }
`;

const OrderType = `
    ${OrderPayloadType}

    type Order {
        _id: ID!,
        payload: [OrderPayload!]!,
        user: User!,
        isDelivered: Int!,
        image: String!
    }
`;

const InputOrderPayloadType = `
    input InputOrderPayload {
        food: ID!,
        count: Int!
    }
`;

module.exports = {
    OrderType,
    OrderPayloadType,
    InputOrderPayloadType
}