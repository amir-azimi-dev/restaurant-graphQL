const {buildSchema} = require("graphql/index");
const {CategoryType} = require("./types/category");
const {FoodType} = require("./types/food");
const {OrderType} = require("./types/order");
const {UserType, AuthType} = require("./types/user");

// const RootQuery = new GraphQLObjectType({
//     name: "RootQuery",
//     fields: () => ({
//         users: usersQuery,
//         categories: categoriesQuery,
//         foods: foodsQuery,
//         singleFood: getSingleFood,
//         orders: ordersQuery,
//         singleOrder: getSingleOrder
//     })
// });
//
// const RootMutation = new GraphQLObjectType({
//     name: "RootMutation",
//     fields: () => ({
//         registerUser: registerUserMutation,
//         loginUser: loginUserMutation,
//         createCategory: categoryMutation,
//         createFood: foodMutation,
//         createOrder: orderMutation,
//         changeOrderStatus: changeOrderStatusMutation,
//         removeOrder: removeOrderMutation
//     })
// });

const Schema = buildSchema(`
    ${CategoryType}
    ${FoodType}
    ${OrderType}
    ${UserType}
    ${AuthType}

    type RootQuery {
        categories: [Category!]!,
        singleCategory(categoryId: ID!): Category,
    }
    
    schema {
        query: RootQuery,
    }
`);

module.exports = Schema;