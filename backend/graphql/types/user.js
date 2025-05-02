const {GraphQLObjectType, GraphQLString} = require("graphql");
const {GraphQLID, GraphQLInt} = require("graphql/type");

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        _id: {type: GraphQLID},
        username: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
        role: {type: GraphQLString}
    })
});

const AuthType = new GraphQLObjectType({
    name: "Auth",
    fields: () => ({
        user: {type: UserType},
        token: {type: GraphQLString}
    })
});

module.exports = {
    UserType,
    AuthType
}