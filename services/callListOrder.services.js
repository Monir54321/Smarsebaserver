const CallListOrder = require("../models/CallListOrder");

exports.createNewCallListOrderService = async (data) => {
    const callListOrder = await CallListOrder.create(data);

    return callListOrder;
}

exports.getAllCallListOrderService = async () => {
    const callListOrder = await CallListOrder.find({});
    return callListOrder;
}

exports.getACallListOrderService = async (_id) => {
    const callListOrder = await CallListOrder.findOne({ _id });
    return callListOrder;
}
exports.getACallListOrderDataByEmailService = async (email) => {
    const callListOrder = await CallListOrder.find({ email });
    return callListOrder;
}


exports.updateACallListOrderService = async ({_id, data}) => {
    const callListOrder = await CallListOrder.updateOne({_id}, {$set: {...data}}, {upsert: true});
    return callListOrder;
}

exports.deleteACallListOrderService = async (_id) => {
    const callListOrder = await CallListOrder.deleteOne({ _id });
    return callListOrder;
}