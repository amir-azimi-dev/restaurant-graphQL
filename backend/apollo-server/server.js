require("dotenv").config();

const express = require("express");
const http = require("http");
const cors = require("cors");
const {ApolloServer} = require("@apollo/server");
const {expressMiddleware} = require("@apollo/server/express4");
const {ApolloServerPluginDrainHttpServer} = require("@apollo/server/plugin/drainHttpServer");
const connectToDB = require("./utils/connectToDB/connectToDB");
const typeDefs = require("./graphql/types");
const resolvers = require("./graphql/resolvers");

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})]
});

const startServer = async () => {
    await connectToDB();
    await server.start();

    app.use(cors());
    app.use(express.json());
    app.use(expressMiddleware(server, {
        context: ({req}) => req,
    }));

    httpServer.listen(4000, () => {
        console.log("Server is running on port 4000 ...");
        console.log("----------------------------------");
    });
};

startServer();