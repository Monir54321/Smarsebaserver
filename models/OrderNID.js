const { default: mongoose } = require("mongoose");

const orderNIDSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    selectType: {
        type: String,
        required: [true, "Please provide a type"],
        
    },
    number: {
        type: String,
        required: [true, "Please provide the selected type of number"],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        enum: ["Pending", "Processing","Canceled", "Success"],
        default: "Pending"
    },
    pdf: {
        type: String
    },
    email: {
        type: String
    }
},{
    timestamps: true
});

const OrderNId = mongoose.model("OrderNid", orderNIDSchema);

module.exports = OrderNId;