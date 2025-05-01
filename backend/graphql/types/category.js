const {GraphQLObjectType, GraphQLString} = require("graphql");
const {GraphQLID, GraphQLList} = require("graphql/type");
const {FoodType} = require("./food");
const FoodModel = require("../../models/food");

const CategoryType = new GraphQLObjectType({
    name: "Category",
    fields: () => ({
        _id: {type: GraphQLID},
        title: {type: GraphQLString},
        icon: {type: GraphQLString},
        foods: {
            type: new GraphQLList(FoodType),
            resolve: async (source) => {
                const categoryId = source._id;
                return await FoodModel.find({category: categoryId});
            }
        }
    })
});

module.exports = {
    CategoryType
}