const { object, string } = require("yup");

const registerUserSchema = object({
    username: string().min(3).max(100).required(),
    email: string().email().required(),
    password: string().min(8).max(100).required()
});

const loginUserSchema = object({
    email: string().email().required(),
    password: string().min(8).max(100).required()
});

const validateRegisterUserData = async data => {
    try {
        return await registerUserSchema.validate(data);

    } catch (error) {
        return false;
    }
};

const validateLoginUserData = async data => {
    try {
        return await loginUserSchema.validate(data);

    } catch (error) {
        return false;
    }
};

module.exports = { validateRegisterUserData, validateLoginUserData };