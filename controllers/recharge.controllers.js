const { createNewRechargeService, getAllRechargeService, getARechargeService, updateARechargeService, deleteARechargeService } = require("../services/recharge.services");



exports.createNewRechargeControllers = async (req, res) => {
    try {
        const data = req.body;
        const result = await createNewRechargeService(data);

        res.status(200).send({
            status: "Success",
            message: "Successfully submitted",
            data: result
        })
    } catch (error) {
        res.status(401).send({
            status: "Failed",
            message: "Failed to send your request",
            data: error.message
        })
    }
}

exports.getAllRechargeControllers = async (req, res) => {
    try {
        const result = await getAllRechargeService();

        res.status(200).send({
            status: "Success",
            message: "Successfully get all data",
            data: result
        })
    } catch (error) {
        res.status(401).send({
            status: "Failed",
            message: "Failed to get data",
            data: error.message
        })
    }
}

exports.getARechargeControllers = async (req, res) => {
    try {
        const _id = req.params._id;
        const result = await getARechargeService(_id);

        res.status(200).send({
            status: "Success",
            message: "Successfully got data",
            data: result
        })
    } catch (error) {
        res.status(401).send({
            status: "Failed",
            message: "Failed to got data",
            data: error.message
        })
    }
}

exports.updateARechargeControllers = async(req, res) => {
    try {
        const _id = req.params._id;
        const data = req.body;
        const result = await updateARechargeService({_id, data});

        res.status(200).send({
            status: "Success",
            message: "Successfully updated data",
            data: result
        })
    } catch (error) {
        res.status(401).send({
            status: "Failed",
            message: "Failed to update data",
            data: error.message
        })
    }
}

exports.deleteARechargeControllers = async(req, res) => {
    try {
        const _id = req.params._id;

        const result = await deleteARechargeService(_id);

        res.status(200).send({
            status: "Success",
            message: "Successfully deleted data",
            data: result
        })
    } catch (error) {
        res.status(401).send({
            status: "Failed",
            message: "Failed to delete data",
            data: error.message
        })
    }
}