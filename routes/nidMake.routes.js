const express = require("express");
const router = express.Router();
const nidMakeControllers = require("../controllers/nidMake.controllers");

router.route("/user/:email")
    .get(nidMakeControllers.getANidMakeDataByEmailControllers);

router.route("/:_id")
    .get(nidMakeControllers.getANidMakeControllers)
    .patch(nidMakeControllers.updateANidMakeControllers)
    .delete(nidMakeControllers.deleteANidMakeControllers);

router.route("/")
    .post(nidMakeControllers.createNewNidMakeControllers)
    .get(nidMakeControllers.getAllNidMakeControllers);

module.exports = router;