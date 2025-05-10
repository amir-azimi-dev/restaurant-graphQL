const UserModel = require("../../models/user");
const { verifyToken } = require("../jwt/jwt");

const authorizeUser = async req => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.replace("Bearer ", "");
        
        const payload = verifyToken(token);
        if (!payload) throw new Error("Invalid Token!");
        const targetUser = await UserModel.findById(payload.id).lean();
        return targetUser;

    } catch (error) {
        return false;
    }
};

module.exports = {
    authorizeUser
};