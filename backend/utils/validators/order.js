const {isValidObjectId} = require("mongoose");
const {object, string, number, array} = require("yup");

const orderSchema = object({
    title: string().min(3).max(100).required(),
    payload: array().of(object(
        {
            food: string().required(),
            count: number().min(0).required()
        }
    )),
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

module.exports = {validateCreateOrderData};