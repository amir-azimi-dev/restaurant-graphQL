const {isValidObjectId} = require("mongoose");
const {object, string, number, array, boolean} = require("yup");

const orderSchema = object({
    title: string().min(3).max(100).required(),
    payload: array().of(object(
        {
            food: string().required(),
            count: number().min(0).required()
        }
    )),
});

const changeOrderStatusSchema = object({
    orderId: string().required(),
    isDelivered: boolean().required()
});

const validateCreateOrderData = async data => {
    try {
        const hasInvalidFoodId =  data.payload.some(foodData => !isValidObjectId(foodData.food));
        if (hasInvalidFoodId) throw new Error("Invalid data!");
        return await orderSchema.validate(data);

    } catch (error) {
        console.log(error)
        return false;
    }
};

const validateChangeOrderStatusData = async data => {
    try {
        if (!isValidObjectId(data.orderId)) throw new Error("Order Id is invalid!");
        return await changeOrderStatusSchema.validate(data);

    } catch (error) {
        console.log(error)
        return false;
    }
};

module.exports = {validateCreateOrderData, validateChangeOrderStatusData};