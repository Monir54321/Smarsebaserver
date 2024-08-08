const BiometricOrder = require("../models/BiometricOrder");

// create
exports.createNewBiometricOrderService = async (data) => {
    const result = await BiometricOrder.create(data);
    return result;
}

// get all
exports.getAllBiometricOrderService = async () => {
    const result = await BiometricOrder.find({});
    return result;
}

// get a
exports.getABiometricOrderService = async (_id) => {
    const result = await BiometricOrder.findOne({_id});
    return result;
}
exports.getABiometricOrderDataByEmailService = async (email) => {
    const result = await BiometricOrder.find({email});
    return result;
}

// update a
exports.updateABiometricOrderService = async ({_id, data}) => {
    const result = await BiometricOrder.updateOne({ _id }, { $set: { ...data } }, { upsert: true });
    return result;
}

// delete a
exports.deleteABiometricOrderService = async (_id) => {
    const result = await BiometricOrder.deleteOne({ _id });
    return result;
}