const { UserType } = require("../types/user");
const { GraphQLList } = require("graphql/type");
const UserModel = require("../../models/user");
const { authorizeUser } = require("../../utils/authorizeUser/authorizeUser");

const usersQuery = {
    type: new GraphQLList(UserType),
    resolve: async () => {
        return await UserModel.find();
    }
};

const getMeQuery = {
    type: UserType,
    resolve: async (_, __, context) => {
        const user = await authorizeUser(context.req);
        if (!user) return null;

        return { ...user, password: undefined };
    }
};

module.exports = {
    usersQuery,
    getMeQuery
};