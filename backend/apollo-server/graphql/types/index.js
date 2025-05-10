const {CategoryType} = require("./category");
const {FoodType} = require("./food");
const {OrderType, InputOrderPayloadType} = require("./order");
const {UserType, AuthType} = require("./user");

const TypedDefs = `#graphql
    ${CategoryType}
    ${FoodType}
    ${OrderType}
    ${InputOrderPayloadType}
    ${UserType}
    ${AuthType}

    type Query {
        getMe: User,
        users: [User!]!,
        categories: [Category!]!,
        foods: [Food!]!,
        singleFood(foodId: ID!): Food,
        orders: [Order!]!,
        singleOrder(orderId: ID!): Order
    }
    
    type Mutation {
        registerUser(username: String!, email: String!, password: String!): Auth,
        loginUser(email: String!, password: String!):  Auth,
        createCategory(title: String!, icon: String!): Category,
        createFood(title: String!, price: Int!, inventory: Int!, image: String!, category: ID!): Food!,
        createOrder(title: String!, payload: [InputOrderPayload!]!): Order,
        changeOrderStatus(orderId: ID!, isDelivered: Boolean!): Order, 
        removeOrder(orderId: ID!): Order
    }
`;

module.exports = TypedDefs;