const UserRoleType = `#graphql
    enum UserRoleType {
        USER,
        ADMIN
    }
`;

const UserType = `#graphql
    ${UserRoleType}

    type User {
        _id: ID!,
        username: String!,
        email: String!,
        password: String,
        role: UserRoleType!
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