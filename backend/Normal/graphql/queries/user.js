const {UserType} = require("../types/user");
const {GraphQLList} = require("graphql/type");
const UserModel = require("../../models/user");

const usersQuery = {
    type: new GraphQLList(UserType),
    resolve: async () => {
        return await UserModel.find();
    }
};

module.exports = {
    usersQuery
};