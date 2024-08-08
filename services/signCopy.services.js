const SignCopy = require("../models/SignCopy");


// create a SignCopy
exports.createNewSignCopyService = async (data) => {
    const result = await SignCopy.create(data);
    return result;
}

// get all SignCopy
exports.getAllSignCopyService = async () => {
    const result = await SignCopy.find({});
    return result;
}

// get a SignCopy
exports.getASignCopyService = async (_id) => {
    const result = await SignCopy.findOne({ _id });
    return result;
}
exports.getASignCopyDataByEmailService = async (email) => {
    const result = await SignCopy.find({ email });
    return result;
}

// update a SignCopy
exports.updateASignCopyService = async ({ _id, data }) => {
    const result = await SignCopy.updateOne({ _id }, { $set: { ...data } }, { upsert: true });
    return result;
}

// delete a SignCopy
exports.deleteASignCopyService = async (_id) => {
    const result = await SignCopy.deleteOne({ _id });
    return result;
}