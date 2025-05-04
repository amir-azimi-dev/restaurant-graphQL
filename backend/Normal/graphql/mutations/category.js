const {CategoryType} = require("../types/category");
const {GraphQLNonNull, GraphQLString} = require("graphql/type");
const CategoryModel = require("../../models/category");
const { authorizeUser } = require("../../utils/authorizeUser/authorizeUser");
const { validateCreateCategoryData } = require("../../utils/validators/category");

const categoryMutation = {
    type: CategoryType,
    args: {
        title: {type: new GraphQLNonNull(GraphQLString)},
        icon: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve: async (_, args, context) => {
        const isDataValid = await validateCreateCategoryData(args);
        if (!isDataValid) throw new Error("Invalid Data!");

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