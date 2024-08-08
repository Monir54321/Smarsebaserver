const { default: mongoose } = require("mongoose");

const priceListSchema = mongoose.Schema({

    title: {
        type: String,
    },
    bikashInfo: {
        type: String,
        required: true
    },
    nidOrder: {
        type: String,
        required: true
    },
    bikashPinReset: {
        type: String,
        required: true
    },
    callListOrder: {
        type: String,
        required: true
    },
    birthCertificateFix: {
        type: String,
        required: true
    },
    banglalinkBiometricOrder: {
        type: String,
        required: true
    },
    grameenBiometricOrder: {
        type: String,
        required: true
    },
    robiBiometricOrder: {
        type: String,
        required: true
    },
    airtelBiometricOrder: {
        type: String,
        required: true
    },
    teletalkBiometricOrder: {
        type: String,
        required: true
    },
    nogodInfoOrder: {
        type: String,
        required: true
    },
    onlineBirthCertificate: {
        type: String,
        required: true
    },
    saftyTika: {
        type: String,
        required: true
    },
    serverCopy: {
        type: String,
        required: true
    },
    signCopy: {
        type: String,
        required: true
    },
    nidMake: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

const PriceList = mongoose.model("PriceList", priceListSchema);

module.exports = PriceList;

