const { AuthType } = require("../types/user");
const { GraphQLNonNull, GraphQLString } = require("graphql/type");
const UserModel = require("../../models/user");
const { hash, compare } = require("../../utils/hash/hash");
const { generateToken } = require("../../utils/jwt/jwt");

const registerUserMutation = {
    type: AuthType,
    args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: async (_, args) => {
        const isFirstUser = !Boolean(await UserModel.countDocuments());

        const newUserData = {
            username: args.username,
            email: args.email,
            password: hash(args.password),
            role: isFirstUser ? "ADMIN" : "USER"
        };

        const userData = await UserModel.create(newUserData);
        const userToken = `Bearer ${generateToken({ id: userData._id })}`;

        return {
            token: userToken,
            user: userData
        };
    }
};

const loginUserMutation = {
    type: AuthType,
    args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: async (_, args) => {
        const targetUserData = await UserModel.findOne({ email: args.email }).lean();
        if (!targetUserData) return null;

        const isPasswordCorrect = compare(args.password, targetUserData.password);
        if (!isPasswordCorrect) return null;

        const userToken = `Bearer ${generateToken({ id: targetUserData._id })}`;

        return {
            token: userToken,
            user: { ...targetUserData, password: undefined }
        };
    }
};


module.exports = {
    registerUserMutation,
    loginUserMutation
};