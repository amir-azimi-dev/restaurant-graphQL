const {CategoryType} = require("../types/category");
const {GraphQLNonNull, GraphQLString} = require("graphql/type");
const CategoryModel = require("../../models/category");

const categoryMutation = {
    type: CategoryType,
    args: {
        title: {type: new GraphQLNonNull(GraphQLString)},
        icon: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve: async (_, args) => {
        const newCategoryData = {
            title: args.title,
            icon: args.icon
        };

        return await CategoryModel.create(newCategoryData);
    }
};

module.exports = {
    categoryMutation
};