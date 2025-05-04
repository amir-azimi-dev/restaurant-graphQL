require("dotenv").config();

const express = require("express");
const connectToDB = require("./utils/connectToDB/connectToDB");
const {createHandler} = require("graphql-http/lib/use/express");
const GraphQLSchema = require("./graphql/schema");
const CategoryModel = require("./models/category");

const app = express();

app.use("/graphql", createHandler({
    schema: GraphQLSchema,
    context: req => ({req}),
    rootValue: {
        categories: async () => CategoryModel.find(),
        singleCategory: async (args) => await CategoryModel.findById(args.categoryId)
    }
}));

const startServer = async () => {
    await connectToDB();

    app.listen(3000, () => {
        console.log("Server is running on port 3000 ...");
        console.log("----------------------------------");
    });
};

startServer();