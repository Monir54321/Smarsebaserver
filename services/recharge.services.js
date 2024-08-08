const Recharge = require("../models/Recharge");

exports.createNewRechargeService = async (data) => {
    const result = await Recharge.create(data);
    return result;
}

// get all
exports.getAllRechargeService = async () => {
    const result = await Recharge.find({});
    return result;
}

// get a
exports.getARechargeService = async (_id) => {
    const result = await Recharge.findOne({_id});
    return result;
}

// update a
exports.updateARechargeService = async ({_id, data}) => {
    const result = await Recharge.updateOne({ _id }, { $set: { ...data } }, { upsert: true });
    return result;
}

// delete a
exports.deleteARechargeService = async (_id) => {
    const result = await Recharge.deleteOne({ _id });
    return result;
}