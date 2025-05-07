const FoodType = `#graphql
    type Food {
        _id: ID!,
        title: String!,
        price: Int!,
        inventory: Int!,
        image: String!,
        category: Category!
    }
`;

module.exports = {
    FoodType
}