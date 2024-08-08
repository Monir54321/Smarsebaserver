const { default: mongoose } = require("mongoose");

const rechargeSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    number: {
        type: String,
        required: [true, "Please provide a number"],
        trim: true
    },
    amount: {
        type: String,
        required: [true, "Please provide an amount"],
        trim: true
    },
    status: {
        type: String,
        enum: ["Pending", "Processing","Canceled", "Success"],
        default: "Pending"
    },
    transitionId: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String
    }
}, {
    timestamps: true
});

const Recharge = mongoose.model("Recharge", rechargeSchema);

module.exports = Recharge;

 