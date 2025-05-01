const { GraphQLObjectType, GraphQLString } = require("graphql");
const {GraphQLID, GraphQLInt} = require("graphql/type");
const {CategoryType} = require("./category");

const FoodType = new GraphQLObjectType({
    name: "Food",
    fields: () => ({
        _id: { type: GraphQLID },
        title: { type: GraphQLString },
        price: { type: GraphQLInt },
        inventory: { type: GraphQLInt },
        image: { type: GraphQLString },
        category: { type: CategoryType }
    })
});

module.exports = {
    FoodType
}