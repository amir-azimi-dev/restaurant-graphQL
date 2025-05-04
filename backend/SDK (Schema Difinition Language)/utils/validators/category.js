const { object, string } = require("yup");

const categorySchema = object({
    title: string().min(3).max(100).required(),
    icon: string().min(3).max(100).required()
});

const validateCreateCategoryData = async data => {
    try {
        return await categorySchema.validate(data);

    } catch (error) {
        return false;
    }
};

module.exports = { validateCreateCategoryData };