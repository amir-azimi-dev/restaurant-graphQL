const {GraphQLObjectType, GraphQLSchema} = require("graphql");
const {categoriesQuery} = require("./queries/category");
const {categoryMutation} = require("./mutations/category");
const {foodQuery} = require("./queries/food");
const {foodMutation} = require("./mutations/food");

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: () => ({
        categories: categoriesQuery,
        foods: foodQuery
    })
});

const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: () => ({
        createCategory: categoryMutation,
        createFood: foodMutation
    })
});

const Schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});

module.exports = Schema;