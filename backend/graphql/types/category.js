const { GraphQLObjectType, GraphQLString } = require("graphql");
const {GraphQLID} = require("graphql/type");

const CategoryType = new GraphQLObjectType({
    name: "Category",
    fields: () => ({
        _id: { type: GraphQLID },
        title: { type: GraphQLString },
        icon: { type: GraphQLString }
    })
});

module.exports = {
    CategoryType
}