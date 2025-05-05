const users = require("./user");
const categories = require("./category");
const foods = require("./food");
const orders = require("./order");

const rootResolvers = {
    ...categories,
    ...foods,
    ...orders,
    ...users
};

module.exports = rootResolvers;