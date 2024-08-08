const PriceList = require("../models/PriceList")

exports.createNewPriceListService = async(data)=> {
    const result = await PriceList.create(data);

    return result;
}

exports.getPriceListService = async() => {
    const result = await PriceList.find({});

    return result;
}
exports.getAPriceListService = async(_id) => {
    const result = await PriceList.findOne({_id});

    return result;
}

exports.updatePriceListService = async({_id, data}) => {
    const result = await PriceList.updateOne({_id}, {$set: {...data}}, {upsert: true});

    return result;
}