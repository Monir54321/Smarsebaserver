const { createNewBikashInfoOrderService, getAllBikashInfoOrderService, getAUserBikashInfoOrderService, updateAUserBikashInfoOrderService, deleteAUserBikashInfoOrderService, getAUserBikashInfoOrdersDataByEmailService } = require("../services/bikashInfoOrder.services");

exports.createNewBikashInfoOrderControllers = async (req, res) => {
    try {


        // jodi taka kate tahole order request jabe then order hole success message jabe noyto order amount back er jonno api request hobe


        const amountRes = await fetch("http://localhost:5000/priceList/668f76383906559fe7ff631c");
        const amountData = await amountRes.json();

        const amount = amountData?.data?.bikashInfo;

        const bRes = await fetch("http://localhost:5000/users/bikash", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: result?.email, amount, order: true })
        });
        const bData = await bRes.json();

        if (bData.status == "Success") {
            const data = req.body;
            const result = await createNewBikashInfoOrderService(data);
            if (result) {
                res.status(200).send({
                    status: "Success",
                    message: "Successfully submitted",
                    data: result
                })
            } else {
                const amountRes = await fetch("http://localhost:5000/priceList/668f76383906559fe7ff631c");
                const amountData = await amountRes.json();

                const amount = amountData?.data?.bikashInfo;

                const bFailRes = await fetch("http://localhost:5000/users/bikash", {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: result?.email, amount: -amount })
                });

                const bFailData = res.json();

                res.status(401).send({
                    status: "Failed",
                    message: "Failed to send your request try again",
                    data: "data not found"
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

exports.getAllBikashInfoOrderControllers = async (req, res) => {
    try {
        const result = await getAllBikashInfoOrderService();

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

exports.getAUserBikashInfoOrderControllers = async (req, res) => {
    try {
        const _id = req.params._id;
        const result = await getAUserBikashInfoOrderService(_id);

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
exports.getAUserBikashInfoOrdersDataByEmailControllers = async (req, res) => {
    try {
        const email = req.params.email;
        const result = await getAUserBikashInfoOrdersDataByEmailService(email);

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

exports.updateAUserBikashInfoOrderControllers = async (req, res) => {
    try {
        const _id = req.params._id;
        const data = req.body;
        const result = await updateAUserBikashInfoOrderService({ _id, data });

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

exports.deleteAUserBikashInfoOrderControllers = async (req, res) => {
    try {
        const _id = req.params._id;

        const result = await deleteAUserBikashInfoOrderService(_id);

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