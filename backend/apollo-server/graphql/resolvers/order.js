const OrderModel = require("../../models/order");
const CategoryModel = require("../../models/category");
const {isValidObjectId} = require("mongoose");
const {validateCreateOrderData, validateChangeOrderStatusData} = require("../../utils/validators/order");
const {authorizeUser} = require("../../utils/authorizeUser/authorizeUser");

const orders = async () => {
    const ordersData = await OrderModel.find()
        .populate("payload.food")
        .populate("user")
        .lean();

    return await Promise.all(
        ordersData.map(async orderData => {
            const manipulatedPayload = await Promise.all(
                orderData.payload.map(async item => {
                    const categoryData = await CategoryModel.findById(item.food.category);
                    const manipulatedItem = {...item};
                    manipulatedItem.food.category = categoryData;

                    return manipulatedItem;
                })
            )

            return {
                ...orderData,
                payload: manipulatedPayload
            };
        })
    )
};

const singleOrder = async (_, args) => {
    if (!isValidObjectId(args.orderId)) throw new Error("Invalid Order Id!");
    const orderData = await OrderModel.findById(args.orderId)
        .populate("payload.food")
        .populate("user")
        .lean();

    const manipulatedPayload = await Promise.all(
        orderData.payload.map(async item => {
            const categoryData = await CategoryModel.findById(item.food.category);
            const manipulatedItem = {...item};
            manipulatedItem.food.category = categoryData;

            return manipulatedItem;
        })
    );

    return {
        ...orderData,
        payload: manipulatedPayload
    };
};

const createOrder = async (_, args, req) => {
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

    const createdOrder = await OrderModel.create(newOrderData);
    await createdOrder.populate("user");
    await createdOrder.populate("payload.food");

    return createdOrder;
};

const changeOrderStatus = async (_, args, req) => {
    const isDataValid = await validateChangeOrderStatusData(args);
    if (!isDataValid) throw new Error("Invalid Data!");

    const user = await authorizeUser(req);
    if (!user || user.role !== "ADMIN") {
        throw new Error("Access denied!");
    }

    const manipulatedOrder = await OrderModel.findByIdAndUpdate(args.orderId, {isDelivered: args.isDelivered}, {new: true});
    await manipulatedOrder.populate("user");
    await manipulatedOrder.populate("payload.food");

    return manipulatedOrder;
};

const removeOrder = async (_, args, req) => {
    if (!isValidObjectId(args.orderId)) throw new Error("Invalid Order Id!");
    const user = await authorizeUser(req);
    if (!user || user.role !== "ADMIN") {
        throw new Error("Access denied!");
    }

    const removedOrder = await OrderModel.findByIdAndDelete(args.orderId);
    await removedOrder.populate("payload.food");
    await removedOrder.populate("user");
    return removedOrder;
};


module.exports = {
    orders,
    singleOrder,
    createOrder,
    changeOrderStatus,
    removeOrder
};