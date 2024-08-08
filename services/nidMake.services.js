const NidMake = require("../models/NidMake")

exports.createNewNidMakeService = async(data) => {
    const result = await NidMake.create(data);
}

exports.getANidMakeService = async(id) => {
    const result = await NidMake.findOne({_id: id});
    
    return result;
}

exports.getAllNidMakeService = async() => {
    const result = await NidMake.find({});
    
    return result;
}

exports.getANidMakeDataByEmailService = async(email) => {
    const result = await NidMake.find({email});

    return result;
}

exports.updateANidMakeService = async({_id, data}) => {
    const result = await NidMake.updateOne({ _id }, { $set: { ...data } }, { upsert: true });

    return result;
}

exports.deleteANidMakeService = async(_id) => {
    const result = await NidMake.deleteOne({_id});

    return result;
}