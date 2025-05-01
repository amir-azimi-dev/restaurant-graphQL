const {GraphQLObjectType, GraphQLSchema} = require("graphql");
const {usersQuery} = require("./queries/user");
const {categoriesQuery} = require("./queries/category");
const {categoryMutation} = require("./mutations/category");
const {foodsQuery} = require("./queries/food");
const {foodMutation} = require("./mutations/food");

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: () => ({
        users: usersQuery,
        categories: categoriesQuery,
        foods: foodsQuery,
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