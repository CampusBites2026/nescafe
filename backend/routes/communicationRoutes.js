const express = require("express");

const router = express.Router();

const {
  sendEmail,
  sendSMS,
} = require(
  "../controllers/communicationController"
);

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

router.post(
  "/email",
  protect,
  authorize("admin"),
  sendEmail
);

router.post(
  "/sms",
  protect,
  authorize("admin"),
  sendSMS
);

module.exports = router;