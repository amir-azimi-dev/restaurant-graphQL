const {GraphQLObjectType, GraphQLString} = require("graphql");
const {GraphQLID, GraphQLList} = require("graphql/type");
const {FoodType} = require("./food");
const FoodModel = require("../../models/food");

const CategoryType = `
    type Category {
        _id: ID!,
        title: String!,
        icon: String!,
        foods: [Food!]!
    }
`;

module.exports = {
    CategoryType
}