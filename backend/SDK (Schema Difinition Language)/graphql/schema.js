const {buildSchema} = require("graphql/index");
const {CategoryType} = require("./types/category");
const {FoodType} = require("./types/food");
const {OrderType, InputOrderPayloadType} = require("./types/order");
const {UserType, AuthType} = require("./types/user");

const Schema = buildSchema(`
    ${CategoryType}
    ${FoodType}
    ${OrderType}
    ${InputOrderPayloadType}
    ${UserType}
    ${AuthType}

    type RootQuery {
        users: [User!]!,
        categories: [Category!]!,
        foods: [Food!]!,
        singleFoods(foodId: ID!): Food,
        orders: [Order!]!,
        singleOrder(orderId: ID!): Order
    }
    
    type RootMutation {
        registerUser(username: String!, email: String!, password: String!): Auth,
        loginUser(email: String!, password: String!):  Auth,
        createCategory(title: String!, icon: String!): Category,
        createFood(title: String!, price: Int!, inventory: Int!, image: String!, category: ID!): Food,
        createOrder(title: String!, payload: [InputOrderPayload!]!): Order,
        changeOrderStatus(orderId: ID!, isDelivered: Boolean!): Order, 
        removeOrder(OrderId: ID!): Order
    }
    
    schema {
        query: RootQuery,
        mutation: RootMutation
    }
`);

module.exports = Schema;