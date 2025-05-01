const { GraphQLObjectType, GraphQLSchema } = require("graphql");

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {

    }
});

const Schema = new GraphQLSchema({
    query: RootQuery
});

module.exports = Schema;