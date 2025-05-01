const express = require("express");
const connectToDB = require("./utils/connectToDB/connectToDB");
const { createHandler } = require("graphql-http/lib/use/express");
const { GraphQLSchema } = require("./graphql/schema");

const app = express();
app.use("/graph", createHandler({
    schema: GraphQLSchema,
    context: req => ({req})
}));

const startServer = async () => {
    await connectToDB();

    app.listen(3000, () => {
        console.log("Server is running on port 3000 ...");
        console.log("----------------------------------");
    });
};

startServer();