const UserType = `#graphql
    type User {
        _id: ID!,
        username: String!,
        email: String!,
        password: String,
        role: String!
    }
`;

const AuthType = `#graphql
    type Auth {
        user: User!,
        token: String!
    }
`;

module.exports = {
    UserType,
    AuthType
}