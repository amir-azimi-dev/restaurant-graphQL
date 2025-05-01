const {FoodType} = require("../types/food");
const {GraphQLList} = require("graphql/type");
const FoodModel = require("../../models/food");

const foodsQuery = {
    type: new GraphQLList(FoodType),
    resolve: async () => {
        return await FoodModel.find();
    }
};

module.exports = {
    foodsQuery
};