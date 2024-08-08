const OrderNId = require("../models/OrderNID")

exports.createNewOrderNIDService = async(data) => {

    const result = await OrderNId.create(data);
    return result;
}

exports.getAllOrderNIDService = async() => {

    const result = await OrderNId.find({});
    return result;
}

exports.getAOrderNIDService = async(_id) => {

    const result = await OrderNId.findById({_id});

    return result;
}
exports.getAOrderNIDDataByEmailService = async(email) => {

    const result = await OrderNId.find({email});

    return result;
}

exports.updateAOrderNIDService = async({_id, data}) => {

    const result = await OrderNId.updateOne({_id}, {$set: {...data}}, {upsert: true});

    return result;
}

exports.deleteAOrderNIDService = async(_id) =>{
    const result = await OrderNId.deleteOne({_id});

    return result;
}