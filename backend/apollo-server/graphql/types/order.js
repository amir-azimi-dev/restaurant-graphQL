const OrderPayloadType = `#graphql
    type OrderPayload {
        food: Food!,
        count: Int!
    }
`;

const OrderType = `#graphql
    ${OrderPayloadType}

    type Order {
        _id: ID!,
        payload: [OrderPayload!]!,
        user: User!,
        isDelivered: Int!,
        image: String!
    }
`;

const InputOrderPayloadType = `#graphql
    input InputOrderPayload {
        food: ID!,
        count: Int!
    }
`;

module.exports = {
    OrderType,
    OrderPayloadType,
    InputOrderPayloadType
}