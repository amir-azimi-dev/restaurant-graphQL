const {CategoryType} = require("../types/category");
const {GraphQLNonNull, GraphQLString} = require("graphql/type");
const CategoryModel = require("../../models/category");
const { authorizeUser } = require("../../utils/authorizeUser/authorizeUser");

const categoryMutation = {
    type: CategoryType,
    args: {
        title: {type: new GraphQLNonNull(GraphQLString)},
        icon: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve: async (_, args, context) => {
        const user = await authorizeUser(context.req);
        if (!user || user.role !== "ADMIN") {
            throw new Error("Access Denied!");
        }

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