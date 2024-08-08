const express = require("express");
const router = express.Router();

const orderNIdControllers = require("../controllers/orderNID.controllers");

router.route("/user/:email")
    .get(orderNIdControllers.getAOrderNIDDataByEmailControllers)

router.route("/:_id")
    .patch(orderNIdControllers.updateAOrderNIDControllers)
    .get(orderNIdControllers.getAOrderNIDControllers)
    .delete(orderNIdControllers.deleteAOrderNIDControllers);

router.route("/")
    .post(orderNIdControllers.createNewNIDOrderControllers)
    .get(orderNIdControllers.getAllOrderNIDControllers);

module.exports = router;