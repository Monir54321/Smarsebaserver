const { createNewOrderNIDService, getAllOrderNIDService, getAOrderNIDService, updateAOrderNIDService, deleteAOrderNIDService, getAOrderNIDDataByEmailService } = require("../services/orderNID.services");

exports.createNewNIDOrderControllers = async (req, res) => {
    try {
        const data = req.body;
        const result = await createNewOrderNIDService(data);

        if(result){
            const res = await fetch("http://localhost:5000/users/bikash", {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: result?.email, amount: 200, order: true })
              });
              const data = await res.json();
        }

        res.status(200).send({
            status: "Success",
            message: "Successfully ordered your NID",
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

exports.getAllOrderNIDControllers = async (req, res) => {
    try {
        const result = await getAllOrderNIDService();

        res.status(200).send({
            status: "Success",
            message: "Successfully get all NID data",
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

exports.getAOrderNIDControllers = async(req, res) => {
    try {
        const _id = req.params._id;

        const result = await getAOrderNIDService(_id);

        res.status(200).send({
            status: "Success",
            message: "Successfully got your NID data",
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
exports.getAOrderNIDDataByEmailControllers = async(req, res) => {
    try {
        const email = req.params.email;

        const result = await getAOrderNIDDataByEmailService(email);

        res.status(200).send({
            status: "Success",
            message: "Successfully got your NID data",
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

exports.updateAOrderNIDControllers = async(req, res) => {
    try {
        const _id = req.params._id;
        const data = req.body;

        const result = await updateAOrderNIDService({_id, data});


        res.status(200).send({
            status: "Success",
            message: "Successfully updated NID data",
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

exports.deleteAOrderNIDControllers = async(req, res) => {
    try {
        const _id = req.params._id;

        const result = await deleteAOrderNIDService(_id);

        res.status(200).send({
            status: "Success",
            message: "Successfully deleted NID data",
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