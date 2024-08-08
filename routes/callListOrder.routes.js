const express = require("express");
const router = express.Router();
const callListOrderControllers = require("../controllers/callListOrder.controllers");

router.route("/user/:email")
    .get(callListOrderControllers.getACallListOrderDataByEmailControllers)

router.route("/:_id")
    .get(callListOrderControllers.getACallListOrderControllers)
    .patch(callListOrderControllers.updateACallListOrderControllers)
    .delete(callListOrderControllers.deleteACallListOrderControllers);

router.route("/")
    .get(callListOrderControllers.getAllCallListOrderControllers)
    .post(callListOrderControllers.createNewCallListOrderControllers);

module.exports = router;