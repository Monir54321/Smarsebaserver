const express = require("express");
const router = express.Router();
const rechargeControllers = require("../controllers/recharge.controllers");

router.route("/:_id")
    .get(rechargeControllers.getARechargeControllers)
    .patch(rechargeControllers.updateARechargeControllers)
    .delete(rechargeControllers.deleteARechargeControllers);

router.route("/")
    .post(rechargeControllers.createNewRechargeControllers)
    .get(rechargeControllers.getAllRechargeControllers);

module.exports = router;