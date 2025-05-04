const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    payload: {
        type: [
            new mongoose.Schema({
                food: {
                    type: mongoose.Types.ObjectId,
                    ref: "Food",
                    required: true
                },
                count: {
                    type: Number,
                    default: 1
                }
            })
        ],
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    isDelivered: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true
});
const OrderModel = mongoose.model("Order", OrderSchema);
module.exports = OrderModel;