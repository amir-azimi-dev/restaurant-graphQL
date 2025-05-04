const {GraphQLObjectType, GraphQLString} = require("graphql");
const {GraphQLID, GraphQLInt} = require("graphql/type");
const CategoryModel = require("../../models/category");

// const FoodType = new GraphQLObjectType({
//     name: "Food",
//     fields: () => {
//         const {CategoryType} = require("./category");
//
//         return {
//             _id: {type: GraphQLID},
//             title: {type: GraphQLString},
//             price: {type: GraphQLInt},
//             inventory: {type: GraphQLInt},
//             image: {type: GraphQLString},
//             category: {
//                 type: CategoryType,
//                 resolve: async (source) => {
//                     const categoryId = source.category;
//                     return await CategoryModel.findById(categoryId);
//                 }
//             }
//         }
//     }
// });

const FoodType = `
    type Food {
        _id: ID!,
        title: String!,
        price: Int!,
        inventory: Int!,
        image: String!,
        category: [Category!]!
    }
`;

module.exports = {
    FoodType
}