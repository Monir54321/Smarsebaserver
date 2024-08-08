const ServerCopy = require("../models/ServerCopy");

// create a ServerCopy
exports.createNewServerCopyService = async (data) => {
    const result = await ServerCopy.create(data);
    return result;
}

// get all ServerCopy
exports.getAllServerCopyService = async () => {
    const result = await ServerCopy.find({});
    return result;
}

// get a ServerCopy
exports.getAServerCopyService = async (_id) => {
    const result = await ServerCopy.findOne({ _id });
    return result;
}
exports.getAServerCopyDataByEmailService = async (email) => {
    const result = await ServerCopy.find({ email });
    return result;
}

// update a ServerCopy
exports.updateAServerCopyService = async ({ _id, data }) => {
    const result = await ServerCopy.updateOne({ _id }, { $set: { ...data } }, { upsert: true });
    return result;
}

// delete a ServerCopy
exports.deleteAServerCopyService = async (_id) => {
    const result = await ServerCopy.deleteOne({ _id });
    return result;
}