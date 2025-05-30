const OrderPayloadType = `
    type OrderPayload {
        food: Food!,
        count: Int!
    }
`;

const OrderType = `
    ${OrderPayloadType}

    type Order {
        _id: ID!,
        payload: [OrderPayload!]!,
        user: User!,
        isDelivered: Int!,
        image: String!
    }
`;

const InputOrderPayloadType = `
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