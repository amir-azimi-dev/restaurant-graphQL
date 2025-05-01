const {GraphQLObjectType, GraphQLString} = require("graphql");
const {GraphQLID, GraphQLInt} = require("graphql/type");

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        _id: {type: GraphQLID},
        username: {type: GraphQLString},
        email: {type: GraphQLInt},
        inventory: {type: GraphQLInt},
        password: {type: GraphQLString},
        role: {type: GraphQLString}
    })
});

module.exports = {
    UserType
}