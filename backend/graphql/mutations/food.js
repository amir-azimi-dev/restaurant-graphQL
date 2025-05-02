const { FoodType } = require("../types/food");
const { GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLID } = require("graphql/type");
const FoodModel = require("../../models/food");
const { validateCreateFoodData } = require("../../utils/validators/food");
const { authorizeUser } = require("../../utils/authorizeUser/authorizeUser");

const foodMutation = {
    type: FoodType,
    args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLInt) },
        inventory: { type: new GraphQLNonNull(GraphQLInt) },
        image: { type: new GraphQLNonNull(GraphQLString) },
        category: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve: async (_, args, context) => {
        const isDataValid = await validateCreateFoodData(args);
        if (!isDataValid) throw new Error("Invalid Data!");

        const user = await authorizeUser(context.req);
        if (!user || user.role !== "ADMIN") {
            throw new Error("Access Denied!");
        }

        const newFoodData = {
            title: args.title,
            price: args.price,
            inventory: args.inventory,
            image: args.image,
            category: args.category
        };

        const { _id } = await FoodModel.create(newFoodData);
        return await FoodModel.findById(_id).populate("category");
    }
};

module.exports = {
    foodMutation
};