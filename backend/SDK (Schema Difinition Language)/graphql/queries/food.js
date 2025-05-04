const {FoodType} = require("../types/food");
const {GraphQLList, GraphQLNonNull, GraphQLID} = require("graphql/type");
const FoodModel = require("../../models/food");
const {isValidObjectId} = require("mongoose");

const foodsQuery = {
    type: new GraphQLList(FoodType),
    resolve: async () => {
        return await FoodModel.find();
    }
};

const getSingleFood = {
    type: FoodType,
    args: {
        foodId: {type: new GraphQLNonNull(GraphQLID)}
    },
    resolve: async (_, args) => {
        if (!isValidObjectId(args.foodId)) throw new Error("Invalid Food Id!");

        return await FoodModel.findById(args.foodId);
    }
};

module.exports = {
    foodsQuery,
    getSingleFood
};