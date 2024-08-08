const { createNewCallListOrderService, getAllCallListOrderService, getACallListOrderService, updateACallListOrderService, deleteACallListOrderService, getACallListOrderDataByEmailService } = require("../services/callListOrder.services");


exports.createNewCallListOrderControllers = async (req, res) => {
    try {
        const data = req.body;
        const result = await createNewCallListOrderService(data);

        if (result) {
            const amountRes = await fetch("http://localhost:5000/priceList/668f76383906559fe7ff631c");
            const amountData = await amountRes.json();

            const amount = amountData?.data?.callListOrder;



            if (amount) {
                const bRes = await fetch("http://localhost:5000/users/bikash", {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: result?.email, amount, order: true })
                });
                const data = await bRes.json();


                res.status(200).send({
                    status: "Success",
                    message: "Successfully submitted",
                    data: result
                })
            }else{
                res.status(401).send({
                    status: "Failed",
                    message: "Failed to send your request",
                    data: "Amount not found"
                })
            }
        }
    } catch (error) {
        res.status(401).send({
            status: "Failed",
            message: "Failed to send your request",
            data: error.message
        })
    }
}

exports.getAllCallListOrderControllers = async (req, res) => {
    try {
        const result = await getAllCallListOrderService();

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

exports.getACallListOrderControllers = async(req, res) => {
    try {
        const _id = req.params._id;

        const result = await getACallListOrderService(_id);

        res.status(200).send({
            status: "Success",
            message: "Successfully got your data",
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
exports.getACallListOrderDataByEmailControllers = async(req, res) => {
    try {
        const email = req.params.email;

        const result = await getACallListOrderDataByEmailService(email);

        res.status(200).send({
            status: "Success",
            message: "Successfully got your data",
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

exports.updateACallListOrderControllers = async(req, res) => {
    try {
        const _id = req.params._id;
        const data = req.body;

        const result = await updateACallListOrderService({_id, data});

        
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

exports.deleteACallListOrderControllers = async(req, res) => {
    try {
        const _id = req.params._id;

        const result = await deleteACallListOrderService(_id);

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