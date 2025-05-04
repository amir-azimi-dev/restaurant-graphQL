const {CategoryType} = require("../types/category");
const {GraphQLList} = require("graphql/type");
const CategoryModel = require("../../models/category");

const categoriesQuery = {
    type: new GraphQLList(CategoryType),
    resolve: async () => {
        return await CategoryModel.find();
    }
};

module.exports = {
    categoriesQuery
};