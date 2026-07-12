const express = require("express");

const router = express.Router();

const {
  getParentDashboard,
} = require(
  "../controllers/parentDashboardController"
);

const {
  protect,
} = require("../middleware/authMiddleware");

router.get(
  "/",
  protect,
  getParentDashboard
);

module.exports = router;