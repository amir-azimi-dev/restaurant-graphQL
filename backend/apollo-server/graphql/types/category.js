const CategoryType = `#graphql
    type Category {
        _id: ID!,
        title: String!,
        icon: String!,
        foods: [Food!]!
    }
`;

module.exports = {
    CategoryType
}