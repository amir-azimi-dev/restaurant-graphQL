const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const {categoriesQuery} = require("./queries/category");
const {categoryMutation} = require("./mutations/category");

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        categories: categoriesQuery
    }
});

const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: {
        createCategory: categoryMutation
    }
});

const Schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});

module.exports = Schema;