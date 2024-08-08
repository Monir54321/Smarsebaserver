const { default: mongoose } = require("mongoose");

const serverCopySchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    nidNumber: {
        type: String,
        required: true,
        trim: true
    },
    dateOfBirth: {
        type: String,
        required: true,
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
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const ServerCopy = mongoose.model("ServerCopy", serverCopySchema);

module.exports = ServerCopy;