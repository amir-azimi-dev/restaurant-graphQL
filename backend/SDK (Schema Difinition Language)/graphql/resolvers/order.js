const OrderModel = require("../../models/order");
const {isValidObjectId} = require("mongoose");
const {validateCreateOrderData, validateChangeOrderStatusData} = require("../../utils/validators/order");
const {authorizeUser} = require("../../utils/authorizeUser/authorizeUser");

const orders = async () => await OrderModel.find();

const singleOrder = async (args) => {
    if (!isValidObjectId(args.orderId)) throw new Error("Invalid Order Id!");
    return OrderModel.findById(args.orderId);
};

const createOrder = async (args, req) => {
    const isDataValid = await validateCreateOrderData(args);
    if (!isDataValid) throw new Error("Invalid Data!");

    const user = await authorizeUser(req);
    if (!user) {
        throw new Error("You are not Authorized, please login first!");
    }

    const newOrderData = {
        title: args.title,
        payload: args.payload,
        user: user._id
    };

    return OrderModel.create(newOrderData);
};

const changeOrderStatus = async (args, req) => {
    const isDataValid = await validateChangeOrderStatusData(args);
    if (!isDataValid) throw new Error("Invalid Data!");

    const user = await authorizeUser(req);
    if (!user || user.role !== "ADMIN") {
        throw new Error("Access denied!");
    }

    return OrderModel.findByIdAndUpdate(args.orderId, {isDelivered: args.isDelivered}, {new: true});
};

const removeOrder = async (args, req) => {
    if (!isValidObjectId(args.orderId)) throw new Error("Invalid Order Id!");

    const user = await authorizeUser(req);
    if (!user || user.role !== "ADMIN") {
        throw new Error("Access denied!");
    }

    return OrderModel.findByIdAndDelete(args.orderId);
};


module.exports = {
    orders,
    singleOrder,
    createOrder,
    changeOrderStatus,
    removeOrder
};