const jwt = require("jsonwebtoken");

const generateToken = payload => {
    try {
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
            expiresIn: "7d"
        });
        return token;

    } catch (error) {
        console.log(error);
        return false;
    }
};

const verifyToken = token => {
    try {
        const tokenPayload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        return tokenPayload;

    } catch (error) {
        console.log(error);
        return false;
    }
};

module.exports = { generateToken, verifyToken };