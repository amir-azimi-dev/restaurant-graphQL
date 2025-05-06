const {GraphQLObjectType, GraphQLString} = require("graphql");
const {GraphQLID, GraphQLInt} = require("graphql/type");
const CategoryModel = require("../../models/category");

const FoodType = `
    type Food {
        _id: ID!,
        title: String!,
        price: Int!,
        inventory: Int!,
        image: String!,
        category: Category!
    }
`;

module.exports = {
    FoodType
}