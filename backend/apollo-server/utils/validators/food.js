const { isValidObjectId } = require("mongoose");
const { object, string, number } = require("yup");

const foodSchema = object({
    title: string().min(3).max(100).required(),
    price: number().min(0),
    inventory: number().min(0),
    image: string().min(3).max(100).required(),
    category: string().required()
});

const validateCreateFoodData = async data => {
    try {
        if (!isValidObjectId(data.category)) throw new Error("Category id is invalid!");
        return await foodSchema.validate(data);

    } catch (error) {
        console.log(error)
        return false;
    }
};

module.exports = { validateCreateFoodData };