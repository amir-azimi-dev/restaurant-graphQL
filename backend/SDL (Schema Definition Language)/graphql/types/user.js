const UserType = `
    type User {
        _id: ID!,
        username: String!,
        email: String!,
        password: String,
        role: String!
    }
`;

const AuthType = `
    type Auth {
        user: User!,
        token: String!
    }
`;

module.exports = {
    UserType,
    AuthType
}